---
name: rediger-formation
description: Génère le fichier Markdown d'une formation VIV Formation, prêt à être déposé tel quel dans le site (carte du catalogue et page de la formation) et à servir seul de données à Claude Design pour la fiche programme PDF. À utiliser dès que l'utilisateur demande le fichier, la page, la fiche ou le Markdown d'une formation, qu'il ait défini le contenu plus haut dans la conversation ou qu'il fournisse un programme (PDF, Word, texte, notes, ancienne fiche) ; aussi pour mettre à jour ou réviser une formation existante, ses objectifs ou son programme.
---

# Générer le fichier d'une formation VIV Formation

Le site de VIV Formation construit la carte du catalogue et la page de chaque formation à partir d'un seul fichier, `<slug>.md`, que l'utilisateur dépose dans `src/content/formations/` du site. Claude Design génère la fiche programme PDF à partir du même fichier, avec le gabarit et les règles du design system qu'il connaît. Tout est dans le frontmatter YAML ; le corps reste vide.

Le site vérifie ce fichier à chaque publication : un champ manquant, une limite dépassée, un objectif mal formulé, un identifiant inconnu ou une mise en forme non conforme bloquent la mise en ligne. Ton travail est de livrer un fichier que l'utilisateur dépose **sans aucune retouche**, et qui suffit seul à Claude Design.

## Fichiers du skill

- `references/format-fichier.md` : champs, limites, ordre, syntaxe et mise en forme YAML, commentaires « fiche : », visuel. **À lire avant d'écrire.**
- `references/regles-redaction.md` : reprise du contenu, typographie, casse, objectifs, programme, version, interdits, cas où il faut s'arrêter. **À lire avant d'écrire.**
- `references/modele.md` et `references/exemple.md` : le modèle officiel et une formation publiée, au niveau de finition attendu.
- `references/donnees-site.json` : identifiants valides (domaines et leur code, types, outils, formateurs), formations et références déjà attribuées, date d'export.
- `scripts/verifier_formation.py` : commentaires « fiche : », contrôle complet, référence suivante d'un domaine.

## Principes

1. **Le contenu défini est repris tel quel.** Qu'il ait été arrêté avec l'utilisateur plus haut dans la conversation ou qu'il vienne d'un programme validé par un client, c'est ce qui sera vendu et contrôlé par un auditeur qualité : le reformuler, c'est changer le contrat. Tu corriges la typographie, la casse et la mise en forme (voir les règles), pas le fond. Dans une conversation, retiens la **dernière version validée** de chaque élément, pas les brouillons intermédiaires.
2. **Rien n'est inventé.** Ni référence, ni tarif, ni prérequis, ni version de logiciel, ni caractéristique matérielle, ni formateur. Une donnée absente se demande ; une donnée déduite se signale.
3. **S'arrêter plutôt que corriger en silence.** Quand une règle du site entre en conflit avec le contenu (verbe d'objectif refusé, texte trop long, trop ou trop peu d'éléments, mention interdite), tu proposes une solution concrète et tu la fais valider.
4. **Seulement ce qui varie.** Les textes communs à toutes les formations (méthodes, évaluation, délais d'accès, effectif maximum, accessibilité, tarif intra, lieu) sont dans le site et dans le gabarit de Claude Design : ils n'entrent pas dans le fichier.

## Déroulé

### 1. Rassembler le contenu

Repère la source : le contenu défini dans la conversation, les documents joints, ou les deux. Lis ensuite les deux fichiers de référence. Un PDF dont la couche texte est illisible (polices encodées) se lit sur le rendu de ses pages ; si c'est impossible, demande le texte plutôt que de deviner.

**Cette formation existe-t-elle déjà ?** Compare le titre et le sujet avec `formations` de `donnees-site.json`. Si elle existe, c'est une **mise à jour**, jamais une création : elle garde son nom de fichier et sa référence, même si la source porte un autre code (les anciennes fiches utilisaient des codes par logiciel, comme UE01 ; la référence suit désormais le code du domaine). Pars du fichier actuel : celui que l'utilisateur fournit, à défaut `references/exemple.md` s'il s'agit de cette formation (fichier publié à la date d'export), sinon demande-le. Garde ses champs propres au site (`statut`, `enAvant`, `ordre`, `visuel…`) et n'applique que les changements apportés ; ne corrige pas de toi-même la forme d'un texte publié qui ne change pas (cela imposerait une nouvelle version) : signale-le. Si la source est plus ancienne que le fichier publié, ne fais pas reculer le fichier.

Associe chaque information à un champ (table de correspondance dans `regles-redaction.md`) et classe chaque champ : trouvé, déduit (à confirmer), manquant, en conflit avec une règle.

### 2. Tout demander en une fois

Avant d'écrire, envoie **un seul message** qui regroupe les questions, chacune avec ta proposition, pour que l'utilisateur n'ait qu'à valider ou corriger. Ne repose pas une question déjà tranchée dans la conversation.

- nom du fichier (slug), pour une création : il devient l'adresse de la page et ne change plus ;
- domaine, type et outils (identifiants de `donnees-site.json`) ;
- référence, pour une création : la suivante du domaine (`python scripts/verifier_formation.py --prochaine-reference <id-domaine>`), à confirmer puisque la liste date de l'export ;
- version et date de révision ;
- tarif inter-entreprises (absent = sur devis) ;
- équipement à prévoir par le client, ou matériel fourni par VIV : versions exactes et caractéristiques matérielles mesurables, **demandées et jamais devinées** ;
- formateur ;
- visuel de couverture : s'il existe, demande à l'utilisateur de le joindre (voir « Visuel » dans `format-fichier.md`) ;
- sous-titre et titre court s'ils sont à créer ;
- compétences et leur rattachement aux objectifs, s'ils manquent ou sont incomplets ;
- reformulations nécessaires (objectifs, textes trop longs, mentions interdites), présentées « avant → après ».

Ce que tu as proposé dans la conversation sans que l'utilisateur le conteste (un titre, une durée) : ne le redemande pas, mais liste-le en tête du message comme « retenu », pour qu'il puisse encore le corriger. Si tout est déjà clair et conforme, ne pose pas de question pour la forme : écris le fichier.

### 3. Écrire le fichier

Nomme-le `<slug>.md`. Suis l'ordre, les blocs et les commentaires de `modele.md`, la syntaxe et la mise en forme de `format-fichier.md`, et les règles de rédaction. Corps vide.

### 4. Annoter et vérifier

Si tu peux exécuter du code, écris les commentaires « fiche : » puis lance le contrôle ; recommence jusqu'à zéro erreur :

```
python scripts/verifier_formation.py --annoter <slug>.md
python scripts/verifier_formation.py <slug>.md
```

Relis chaque « À VÉRIFIER » : corrige-le ou signale-le dans ton compte rendu. Sans exécution de code, écris les commentaires « fiche : » à la main en suivant exactement le format de `format-fichier.md` et de `exemple.md`, puis déroule la liste de contrôle de `regles-redaction.md`, point par point. Dans les deux cas, ne remets jamais un fichier qui contient une erreur connue.

### 5. Remettre

Livre le fichier `<slug>.md` en pièce téléchargeable, puis un compte rendu court :

1. **Fichier** : nom, référence, version ; à déposer dans `src/content/formations/` du site. Pour une mise à jour sans changement du contenu affiché, dis-le : rien d'autre à faire que, le cas échéant, régénérer la fiche.
2. **Corrections de forme appliquées** (typographie, casse, durées retirées du programme…), en une liste brève.
3. **Décisions et points ouverts** : en bref ce qui a été déduit ou reformulé puis validé, ensuite ce qui reste à trancher, y compris ce que tu as signalé sans le modifier (erreur technique apparente, incohérence, mention interdite écartée, logiciel payant à prévoir).
4. **À déposer avec le fichier**, si concerné :
   - le visuel, sous le nom exact `<slug>.<extension>` dans `src/content/formations/visuels/` (sans lui, le site refuse le fichier) ; s'il n'a pas été joint, rappelle qu'il suffira de le joindre plus tard pour obtenir le fichier mis à jour ;
   - la fiche programme générée par Claude Design, sous le nom `<slug>.pdf` dans `public/programmes/` (elle active le bouton « Télécharger le programme »).
5. **Pour Claude Design** : le fichier suffit ; rappelle que la fiche est à (re)générer quand la référence ou la version change.

## Limites des données embarquées

`donnees-site.json` est un instantané du site (`exporteLe`). Si l'utilisateur parle d'un domaine, d'un outil ou d'un formateur absent de la liste, n'invente pas d'identifiant : il doit d'abord être ajouté au site, puis le skill mis à jour. Propose en attendant le plus proche existant, ou laisse la question ouverte. De même, une référence proposée reste à confirmer si des formations ont été créées depuis l'export.

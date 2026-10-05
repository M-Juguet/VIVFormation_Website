# Format du fichier formation

Un fichier par formation : `<slug>.md`, déposé dans `src/content/formations/` du site. Il contient uniquement un frontmatter YAML, entre deux lignes `---` ; rien après la seconde.

- `modele.md` : le modèle officiel, avec ses commentaires. Suis exactement son ordre et ses blocs. Ses commentaires citent des fichiers du site (`docs/format-formation.md`, `src/data/*.yaml`) : leur contenu utile est repris ici et dans `donnees-site.json`.
- `exemple.md` : une formation publiée. C'est le niveau de finition attendu.

## Nom du fichier (slug)

C'est l'adresse de la page (`/formations/<slug>/`) et celle du PDF de la fiche programme : il ne change plus une fois publié.

- Tiré du titre, en minuscules, sans accents, mots reliés par des tirets ; chiffres permis. Articles et prépositions courts retirés s'ils n'apportent rien : `initiation-unreal-engine-imagerie`.
- 3 à 6 mots, unique dans le site (comparer avec les `slug` de `donnees-site.json`).
- Un nom qui commence par `_` est ignoré par le site : réservé aux brouillons.

## Champs, dans l'ordre du modèle

Les limites ci-dessous sont celles que le site contrôle ; au-delà, la publication échoue.

### Identité documentaire

| Champ       | Règle                                                                                                                                                                                                                                                  |
| ----------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `reference` | Code du domaine (`code` dans `donnees-site.json`) + numéro sur deux chiffres : `TRL01`. Unique. Nouvelle formation : la suivante du domaine. Mise à jour : inchangée. Même référence pour la fiche (`-PRO`), le déroulé (`-DP`) et le support (`-SU`). |
| `version`   | `AAvNN` : année de la révision sur deux chiffres, `v`, numéro sur deux chiffres. Nouvelle formation : `26v01` (pour 2026). Mise à jour du contenu : numéro suivant (`26v02`), ou `27v01` si l'année a changé.                                          |
| `revision`  | Date de révision du programme, `AAAA-MM-JJ`. Celle du programme validé si la source la donne, sinon la date du jour, à confirmer.                                                                                                                      |

### Présentation

| Champ        | Règle                                                                                                                                                                                                            |
| ------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `titre`      | Titre de la formation, tel que dans la source, en casse phrase.                                                                                                                                                  |
| `titreCourt` | **40 caractères au plus** (« : » permis, texte alors entre apostrophes droites). Surtitre des pages de la fiche, pied de page du support. Souvent le titre sans son complément : « Initiation à Unreal Engine ». |
| `sousTitre`  | **Une phrase complète avec son point, 180 caractères et 30 mots au plus.** Sous-titre de la page et de la fiche, résumé de la carte. Tiré de l'objectif général de la source, raccourci si besoin et validé.     |

### Classement (site)

| Champ     | Règle                                                                                                                                                                                   |
| --------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `type`    | Un `id` de `types` : `module` (cas général), `parcours-pipeline`, `sensibilisation`.                                                                                                    |
| `domaine` | Un `id` de `domaines` : ce que la formation apprend à faire, pas le logiciel (voir les descriptions). Donne le préfixe de la référence.                                                 |
| `outils`  | Liste d'`id` de `outils`, **outil principal en premier** (il donne l'icône de la carte). `[]` si aucun outil imposé (sensibilisation). Un logiciel absent de la liste ne s'invente pas. |

### Bandeau de repères

| Champ            | Règle                                                                                                                                                                                                                     |
| ---------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `niveau`         | Exactement `Débutant`, `Intermédiaire`, `Confirmé` ou `Tous profils`.                                                                                                                                                     |
| `duree`          | `{ heures: 35, jours: 5 }`, deux entiers. Affiché « 35 heures — 5 jours ».                                                                                                                                                |
| `tarif`          | Montant **inter-entreprises** en euros HT par personne, nombre seul : `1900`. Champ absent = « sur devis ». Le tarif intra (toujours sur devis) n'entre pas dans le fichier.                                              |
| `public`         | Pour qui : **1 à 4** éléments.                                                                                                                                                                                            |
| `prerequis`      | **1 à 4** éléments.                                                                                                                                                                                                       |
| `equipement`     | Ce que le client doit prévoir, non fourni par VIV : **1 à 4** éléments, logiciels d'abord (version comprise : « Unreal Engine 5.7 ou supérieur installé »), matériel ensuite. Champ supprimé si VIV fournit l'équipement. |
| `materielFourni` | Seulement si VIV fournit du matériel : **1 à 4** éléments. Sinon, la ligne reste en commentaire comme dans le modèle.                                                                                                     |

### Objectifs et compétences

| Champ         | Règle                                                                                                                                                                                                                         |
| ------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `objectifs`   | **3 à 8**, **180 caractères au plus** chacun, chacun ouvert par un verbe observable à l'infinitif (verbes refusés : `verbesRefuses` de `donnees-site.json`). Numérotés implicitement dans l'ordre de la liste, à partir de 1. |
| `competences` | **3 à 6**, chacune : `libelle` (**180 caractères au plus**) et `objectifs`, la liste des numéros des objectifs qui y mènent (**un au moins**, numéros existants). Un objectif peut n'alimenter aucune compétence.             |

### Programme détaillé

| Champ       | Règle                                                                                                                                                                                                                |
| ----------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `programme` | Une partie par module, **sans durée ni jour**. Chaque partie : `titre` (**55 caractères au plus**) et `points` (**3 à 6**, **180 caractères au plus** chacun). Les parties sont numérotées dans l'ordre par le site. |

### Modalités propres à la formation

| Champ       | Règle                                                                                                                                       |
| ----------- | ------------------------------------------------------------------------------------------------------------------------------------------- |
| `formateur` | Un `id` de `formateurs`. Champ supprimé si le formateur n'est pas fixé (le site masque alors la section ; on n'écrit jamais « à définir »). |

### Visuel de couverture (facultatif)

Les champs du visuel ne se remplissent qu'**avec l'image sous les yeux** : l'utilisateur la joint à la conversation, tu la regardes pour écrire `visuelAlt` et vérifier les règles ci-dessous. Tant qu'elle n'est pas jointe, les lignes restent en commentaire comme dans le modèle : un fichier qui cite une image absente est refusé par le site, et un texte alternatif écrit sans voir l'image serait faux. Quand l'image arrive, le fichier est mis à jour sans changer de version (le visuel n'est pas un contenu du programme). L'image se dépose avec le fichier, sous le nom exact `<slug>.<extension>` dans `src/content/formations/visuels/` du site.

- rendu ou capture d'un fichier d'exercice VIV Formation, ou visuel produit hors session ;
- jamais une photo de session, un logo d'éditeur de logiciel (logo Unreal Engine, Blender…) ni un élément de projet client ;
- format 16:9, 1920 × 1080 px au moins ; `.jpg` de préférence (plus léger), `.png` ou `.webp` acceptés.

Si l'image enfreint une règle, signale-le avant de l'inscrire dans le fichier.

| Champ          | Règle                                                                                                                                                               |
| -------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `visuel`       | Exactement `./visuels/<slug>.jpg` (ou `.png`, `.webp`) : même nom que le fichier formation.                                                                         |
| `visuelAlt`    | **Obligatoire avec un visuel** : ce que l'image montre, en une phrase.                                                                                              |
| `visuelCredit` | Auteur ou provenance, si connu.                                                                                                                                     |
| `visuelIA`     | Outil d'IA qui a produit ou retouché l'image, avec le modèle s'il est connu : « Gemini (NanoBanana) », « ComfyUI (Flux.1 dev) ». Obligatoire pour tout visuel d'IA. |

### Site uniquement

| Champ        | Règle                                                                                                             |
| ------------ | ----------------------------------------------------------------------------------------------------------------- |
| `statut`     | `Dates à convenir` (cas général), `Session confirmée` ou `Session reportée`.                                      |
| `enAvant`    | `false` sauf demande : `true` place la formation dans « Formations souvent demandées » de l'accueil.              |
| `ordre`      | Nombre pour le tri du catalogue ; `0` sauf indication.                                                            |
| `provisoire` | Jamais pour une vraie formation (affiche « Exemple provisoire »). `brouillon: true` masque la formation en ligne. |

Tout autre nom de champ fait échouer la publication : pas de champ inventé (« objectifGeneral », « modalites », « lieu »…).

## Syntaxe et mise en forme YAML

Le site vérifie aussi la mise en forme du fichier (Prettier) : un écart, même invisible, bloque la publication. Ces règles garantissent un fichier déposable tel quel.

- Indentation de deux espaces, jamais de tabulation. Listes : une ligne `- ` par élément.
- **Un texte qui contient « : » (deux-points suivi d'une espace) s'écrit entre apostrophes droites** : `- 'Configuration d’un projet : unités, espace de couleurs'`. Sans elles, le fichier est illisible. Même règle pour un texte qui commence par `[`, `{`, `&`, `*`, `!`, `|`, `>`, `%`, `@`, `` ` `` ou `#`, ou qui contient « # » précédé d'une espace.
- À l'intérieur du texte, toujours l'apostrophe typographique `’` (jamais `'`) : elle ne gêne pas les apostrophes droites qui entourent le texte.
- Nombres sans guillemets (`tarif: 1900`, `heures: 35`), date sans guillemets (`revision: 2026-10-05`), listes de numéros entre crochets (`objectifs: [2, 3]`).
- Textes entre **apostrophes droites** quand il en faut (jamais de guillemets doubles `"`).
- Accolades avec une espace à l'intérieur (`{ heures: 35, jours: 5 }`), crochets sans espace (`[2, 3]`, `[unreal-engine]`).
- Commentaire de fin de ligne : une espace, `#`, une espace (`tarif: 1900 # …`).
- Pas d'espace en fin de ligne, pas de tabulation, jamais deux lignes vides de suite ; une ligne vide entre les blocs comme dans le modèle ; le fichier se termine par `---` suivi d'un seul saut de ligne.
- Commentaires `#` du modèle conservés ou allégés comme dans l'exemple ; ils ne s'affichent nulle part.

## Commentaires « fiche : » (pour Claude Design)

Le fichier désigne le domaine, le type, les outils et le formateur par des identifiants que Claude Design ne sait pas traduire. Des commentaires de fin de ligne, que le site ignore, donnent les valeurs résolues de la fiche programme : le fichier suffit ainsi seul à Claude Design.

Ils sont écrits par `python scripts/verifier_formation.py --annoter <slug>.md`, à relancer après toute modification ; le contrôle signale tout commentaire absent ou périmé. Sans exécution de code, reproduis exactement ce format (voir aussi `exemple.md`) :

```yaml
reference: TRL01 # fiche : TRL01-PRO • Révisé le : septembre 2026 • Version : 26v01 • Déclaration d'activité : 11923083592
type: module # fiche : Module
domaine: 3d-temps-reel # fiche : 3D temps réel (surtitre de la page 1 : « Fiche programme · 3D temps réel »)
outils: [unreal-engine] # fiche : Unreal Engine
duree: { heures: 35, jours: 5 } # fiche : 35 heures — 5 jours
tarif: 1900 # fiche : Inter-entreprises : 1 900 € HT/pers.* · Intra-entreprise : sur devis
formateur: matthieu-juguet # fiche : Matthieu JUGUET · Infographiste 3D, artiste technique et formateur
# fiche, parcours du formateur : Formateur depuis 2021 : conception et animation de parcours pour adultes
# fiche, parcours du formateur : Gestion de projets 3D et intégration d’IA en production depuis 2019
# fiche, parcours du formateur : Certification de formateur pour adultes (Cegos, 2023) · Master en gestion de projets multimédia
```

- Mois de révision en toutes lettres ; numéro de déclaration d'activité : `declarationActivite` de `donnees-site.json`.
- Libellés, nom, fonction et parcours : recopiés de `donnees-site.json`, sans reformulation.
- Montant avec espaces insécables (`1 900 €`) ; sans `tarif`, pas de commentaire (la fiche affiche « [à renseigner] »).
- Sans outil : `outils: [] # fiche : sans outil imposé`. Sans formateur : ni champ ni commentaire.
- Ces commentaires ne comptent pas comme un changement de contenu : les ajouter ou les mettre à jour ne change pas la version.

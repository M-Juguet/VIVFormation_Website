# Règles de rédaction

## Reprendre la source

Le contenu validé (arrêté dans la conversation, ou programme validé par le client) est repris **tel quel**. Sont seulement permis :

- la typographie et la casse (ci-dessous) ;
- le retrait des durées, horaires et numéros de jour du programme détaillé (la durée vit dans `duree` et dans le déroulé) ;
- le découpage en champs et en listes ;
- le développement d'un sigle technique à sa première occurrence, comme le veut la charte (« 12 Go de VRAM » → « 12 Go de mémoire vidéo (VRAM) ») ;
- le raccourcissement d'un texte qui dépasse une limite, **après validation** de l'utilisateur.

Tout le reste se propose avant d'être appliqué : reformuler un objectif, fusionner ou scinder des points, réécrire un titre.

**Erreur apparente dans la source** (outil mal nommé, fonction qui n'existe pas, incohérence de durées) : garde le texte tel quel et signale-la dans le compte rendu, avec ta correction proposée. Le client a validé ce texte ; c'est à l'organisme de décider s'il le corrige.

### Correspondance habituelle avec la source

| Dans la source                                                                                                                                                             | Champ                                                                                                                                                                               |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Intitulé, titre                                                                                                                                                            | `titre` (et `titreCourt` à proposer)                                                                                                                                                |
| Objectif général, présentation, accroche                                                                                                                                   | `sousTitre`, raccourci en une phrase si besoin, à valider                                                                                                                           |
| Public visé, public concerné, pour qui                                                                                                                                     | `public`                                                                                                                                                                            |
| Prérequis, niveau requis, connaissances nécessaires                                                                                                                        | `prerequis`                                                                                                                                                                         |
| Niveau (débutant, intermédiaire, avancé, expert, tous niveaux)                                                                                                             | `niveau` : « avancé » ou « expert » → `Confirmé` ; « tous niveaux » → `Tous profils`                                                                                                |
| Durée (« 35 h / 5 jours », « 5 jours (35 heures) »)                                                                                                                        | `duree: { heures: 35, jours: 5 }`                                                                                                                                                   |
| Tarif inter, prix par participant HT                                                                                                                                       | `tarif` (nombre seul)                                                                                                                                                               |
| Matériel requis, configuration requise, moyens techniques du client                                                                                                        | `equipement`                                                                                                                                                                        |
| Matériel fourni par VIV, postes mis à disposition                                                                                                                          | `materielFourni`                                                                                                                                                                    |
| Objectifs pédagogiques, à l'issue de la formation vous serez capable de                                                                                                    | `objectifs` (sans la phrase d'amorce)                                                                                                                                               |
| Compétences visées, compétences acquises                                                                                                                                   | `competences`                                                                                                                                                                       |
| Programme, contenu, modules, séquences, jours                                                                                                                              | `programme` (une partie par module)                                                                                                                                                 |
| Formateur, intervenant                                                                                                                                                     | `formateur` (identifiant)                                                                                                                                                           |
| Méthodes pédagogiques, modalités d'animation, évaluation, sanction, certificat, délais d'accès, accessibilité, handicap, tarif intra, lieu, effectif, contact, financement | **Rien : textes fixes du site et du gabarit de fiche.** Signale ce qui contredit la charte (voir « Interdits ») ou les textes fixes (un effectif maximum autre que 8, par exemple). |

## Typographie

- **Apostrophe typographique** `’` partout dans les textes : « d’Unreal Engine », « l’interface ».
- **Guillemets français** « … », avec une espace ordinaire à l'intérieur ; jamais de guillemets droits.
- **Une espace avant** `:` `;` `!` `?` (espace ordinaire, comme dans les fichiers du site) ; aucune avant `,` et `.`. Pas d'espace double, pas d'espace en début ou fin de texte.
- **Pas de ponctuation finale** dans les éléments de liste (public, prérequis, équipement, objectifs, compétences, points du programme). Le `sousTitre`, lui, est une phrase complète qui finit par un point.
- **Versions exactes**, du type « Unreal Engine 5.7 ou supérieur ». Jamais « dernière version » : si la source l'écrit, **demande** la version ; ne la propose pas toi-même, même plausible, car une version inventée finirait sur la fiche remise au client.
- **Logiciel ou extension payants** dans l'équipement (add-on commercial, licence) : garde-le s'il est validé, et signale que le client doit prévoir la licence.
- **Valeurs mesurables** pour le matériel : « 8 Go de mémoire vidéo (VRAM) », « carte graphique NVIDIA RTX », jamais « carte graphique récente » ou « PC puissant » : demande la caractéristique.
- **Sigles** en capitales (CAO, PBR, IA, GPU, HDRI, LUT) ; termes techniques anglais du métier gardés tels quels, avec la casse du logiciel (Content Browser, Movie Render Queue, Master Material).
- Le « & » d'un titre de la source se garde.
- Aucun emoji.

## Casse

**Casse phrase partout**, titres compris : une majuscule au premier mot, puis des minuscules, sauf pour les noms propres, les marques et noms de logiciels, et les noms de fonctions tels qu'écrits dans le logiciel.

- « Initiation à Blender pour la modélisation », pas « Initiation À Blender Pour La Modélisation ».
- Chaque élément de liste et chaque titre de partie commence par une majuscule.
- Un nom d'interface s'écrit comme dans le logiciel (« Content Browser », « Post Process Volume ») ; sa traduction ou sa description en français suit la casse phrase (« vignettage », « aberration chromatique »). Dans le doute, garde la casse de la source et signale-le.

## Objectifs pédagogiques

Chaque objectif décrit un **résultat observable au poste de travail** et commence par un **verbe d'action à l'infinitif**, avec majuscule : naviguer, importer, configurer, modéliser, créer, réaliser, produire, exporter, paramétrer, concevoir, appliquer, animer, générer…

Les verbes de `verbesRefuses` (comprendre, maîtriser, connaître, découvrir, savoir, appréhender, se familiariser, sensibiliser, s'initier, décoder) ne décrivent pas un résultat vérifiable : le site les refuse. « Naviguer » est admis. Si la source en contient, **arrête-toi** : liste les objectifs concernés, explique pourquoi (un objectif doit être évaluable), propose une reformulation pour chacun, et attends la validation.

| Source                                  | Proposition                                                                |
| --------------------------------------- | -------------------------------------------------------------------------- |
| Comprendre l’interface de Blender       | Naviguer dans l’interface de Blender et organiser son espace de travail    |
| Maîtriser la modélisation polygonale    | Modéliser un objet complet en modélisation polygonale                      |
| Découvrir les matériaux PBR             | Créer et appliquer des matériaux PBR sur un modèle                         |
| Connaître les bonnes pratiques d’export | Exporter un modèle dans les formats attendus par le pipeline de production |

Le verbe proposé doit rester fidèle au contenu du programme : ne promets pas plus que ce qui est enseigné.

## Compétences visées

3 à 6 compétences, chacune reliée aux numéros des objectifs qui y mènent. Trop peu de compétences dans la source : propose d'en ajouter qui regroupent des objectifs non couverts ; trop : propose d'en fusionner. Si la source donne des compétences sans ce rattachement, propose-le (chaque compétence → les objectifs dont le contenu y conduit) et fais-le valider. Si la source ne donne pas de compétences, propose-en 3 à 4 qui regroupent les objectifs, à valider.

## Sous-titre

Une phrase complète, 180 caractères et 30 mots au plus, avec son point : tournure impérative (« Découvrez… », « Produisez… ») ou descriptive, selon la source. Les verbes refusés ne concernent que les objectifs, mais le sous-titre reste factuel et ne promet pas plus que le programme.

## Programme détaillé

- Une partie par module ou séquence de la source, dans l'ordre.
- Titre de partie : 55 caractères au plus, sans « Module 1 », « Jour 2 », « (3 h) ».
- 3 à 6 points par partie, 180 caractères au plus. Quand une partie sort des bornes, propose dans cet ordre :
  1. déplacer des points entiers vers la partie voisine, texte inchangé (par exemple des exercices) ;
  2. scinder une partie trop longue en deux, ou fusionner deux parties courtes si le total reste ≤ 6 ;
  3. regrouper deux points très proches en un seul.

  N'invente jamais de point pour atteindre le minimum.

- Aucune durée, aucun horaire.

## Version et date de révision

- **Version** (`AAvNN`) : toute modification d'un texte ou d'une valeur affichés, même un titre raccourci, donne la version suivante (`26v01` → `26v02`, ou `27v01` si l'année change). Un fichier identique au fichier publié garde sa version.
- **Révision** (`AAAA-MM-JJ`) : la date de validation du programme. Si la source ne donne que le mois (« juillet 2026 »), demande le jour ; à défaut de réponse, propose la date du jour pour une nouvelle version, ou garde celle du fichier publié s'il ne change pas.
- Les trois documents d'une formation (fiche `-PRO`, déroulé `-DP`, support `-SU`) partagent référence et version : signale que la fiche PDF est à régénérer quand la version change.

## Interdits (charte VIV Formation)

Si la source en contient, ne les recopie pas : signale-les et propose une formulation conforme. Une mention interdite qui figure dans un sujet géré par les textes fixes (lieu, financement, inscription) n'entre de toute façon pas dans le fichier : signale-la simplement, sans bloquer la livraison.

- **CPF** ou compte personnel de formation (les financements sont la prise en charge OPCO et le plan de développement des compétences).
- **Distanciel**, à distance, visioconférence, e-learning : les formations sont en présentiel, dans les locaux du client.
- **Qualiopi**, certification qualité : aucune mention tant que le certificat n'est pas obtenu.
- **Sessions au calendrier**, dates, places restantes, « S’inscrire » : les dates se conviennent avec le client.
- **« Nos locaux », « notre salle »** : les formations se tiennent chez le client.
- **« Dernière version »** : toujours la version exacte.
- **Vocabulaire d’annonce** (révolution, game changer, incontournable) : rester factuel, surtout sur l'IA générative.

## Cas où il faut s'arrêter

Ne livre pas le fichier comme définitif tant que l'un de ces points n'est pas tranché par l'utilisateur :

- un objectif commence par un verbe refusé ;
- un texte dépasse une limite et doit être raccourci ;
- un nombre d'éléments sort des bornes ;
- une donnée obligatoire manque (titre, niveau, durée, public, prérequis, objectifs, compétences, programme) ;
- un domaine, un outil ou un formateur n'existe pas dans `donnees-site.json` ;
- deux informations se contredisent (durée en heures et en jours, niveau, outil principal, équipement « déjà installé » alors que le programme enseigne l'installation…) ;
- une mention interdite devrait entrer dans un champ du fichier ;
- une version de logiciel ou une caractéristique matérielle est vague (« dernière version », « carte graphique récente »).

Tu peux livrer un **brouillon** en attendant (fichier nommé `_<slug>.md`, ignoré par le site), en le présentant comme tel.

## Liste de contrôle (sans exécution de code)

1. Le fichier commence par `---`, se termine par `---`, sans rien après ; aucun champ hors du modèle.
2. Tous les champs obligatoires sont présents ; les identifiants existent dans `donnees-site.json`.
3. `reference` commence par le code du domaine, n'est pas déjà attribuée ; `version` en `AAvNN` cohérente avec l'année de `revision`.
4. `titreCourt` ≤ 40 caractères ; `sousTitre` une phrase avec point, ≤ 180 caractères et ≤ 30 mots.
5. Bornes : public, prérequis, équipement 1 à 4 ; objectifs 3 à 8 ; compétences 3 à 6 ; programme ≥ 1 partie, 3 à 6 points chacune.
6. Longueurs : objectifs, compétences et points ≤ 180 caractères ; titres de partie ≤ 55.
7. Chaque objectif commence par un verbe à l'infinitif non refusé ; chaque compétence cite au moins un numéro d'objectif existant.
8. Aucune durée dans le programme ; aucun texte fixe du site dans le fichier.
9. Apostrophes `’`, guillemets « », espaces avant `: ; ! ?`, pas de ponctuation finale dans les listes, casse phrase, versions exactes et matériel mesurable.
10. Textes contenant « : » entre apostrophes droites ; `tarif` et `duree` en nombres ; mise en forme YAML de `format-fichier.md` (pas de guillemets doubles, espaces des accolades et crochets, pas d'espace en fin de ligne, un seul saut de ligne final).
11. Commentaires « fiche : » présents et exacts sur `reference`, `type`, `domaine`, `outils`, `duree`, `tarif` et `formateur` (avec les lignes de parcours).
12. Aucune mention interdite, aucun emoji.

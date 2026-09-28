# Support de formation : règles de génération

À lire en entier avant de produire un support. Le gabarit `SupportFormation.dc.html` est la référence : on le copie, on remplace le contenu, on ne réinvente ni la mise en page ni les styles.

## Format

- Slides 1920 × 1080, dans `deck-stage` (fichier `deck-stage.js` du dossier).
- Une `<section>` par slide, styles en ligne uniquement, valeurs reprises à l'identique du gabarit.
- Chaque `<section>` porte `data-label` (numéro + intitulé court) et `data-screen-label` (numéro sur deux chiffres).
- Images : emplacements `<image-slot>` (script `image-slot.js`), chacun avec un `id` unique et un `placeholder` qui dit ce qu'il attend. Les images, captures et QR codes sont fournis par l'utilisateur ; ne jamais en générer ni en dessiner de remplacement.
- Numéro de page : dans le pied de page, à droite, après la section (toutes les slides sauf la couverture et les ouvertures de module). Il correspond au `data-screen-label`.

## Structure obligatoire, dans cet ordre

| # | Slide | Statut |
| --- | --- | --- |
| 1 | Couverture | À adapter : titre, sous-titre, pastilles durée et niveau, visuel, ligne de référence documentaire. |
| 2 | Objectif général | À adapter : une phrase de description, puis 2 ou 3 compétences visées en pastilles. |
| 3 | Public et prérequis | À adapter : 2 à 4 points par colonne. |
| 4 | Objectifs pédagogiques | À adapter : 3 à 6 objectifs, chacun commençant par un verbe à l'infinitif. |
| 5 | Déroulé | À adapter : voir la section Déroulé. Une ou deux slides selon le nombre de jours. |
| 6 | Organisation de la formation | **Fixe.** Recopier telle quelle, sans modifier un mot. |
| 7 | Comment utiliser ce support | **Fixe.** Recopier telle quelle, sans modifier un mot. |
| 8 | Informations pratiques | **Fixe.** Recopier telle quelle, notes comprises. |
| 9 | Votre formateur | Recopiée depuis `formateurs.md` (par défaut : Matthieu JUGUET) ; seules les expertises sont choisies selon le domaine. |
| 10 | Pour commencer | À adapter : 4 questions d'amorce, fond `surface-brand`. |
| — | Pour chaque module : ouverture, contenus, quiz, À retenir | Voir ci-dessous. |
| avant-dernière | Clôture | QCM de vérification des compétences (QR code et adresse fournis), avec la ligne « Il vérifie l'atteinte des N objectifs pédagogiques. » (N = nombre d'objectifs de la slide 4) ; remerciements et logo couleur. |
| dernière | Glossaire | Termes techniques du support, avec l'équivalent anglais, par ordre alphabétique, lus colonne par colonne. 12 termes maximum par slide (6 par colonne) ; au-delà, « Glossaire (1/2) », « Glossaire (2/2) ». |

Seul le pied de page des slides 6, 7 et 8 change (titre de la formation).

## Couverture

- Moitié gauche : logo en haut, bloc titre centré verticalement (surtitre, titre, sous-titre, pastilles), ligne de référence en bas.
- Pastilles : durée sur `brand-rose`, niveau sur `brand-gold`, texte `ink-on-pastel`. Pas d'autre pastille.
- Ligne de référence, 20 px, `ink-subtle`, séparateur « • », libellés suivis de « : » :
  `[Réf. formation]-SU • Révisé le : [date en toutes lettres] • Référent : [Prénom NOM] • Version : [AAvNN]`
  La référence formation est composée du domaine, du numéro de formation et du type de document (SU = support). Exemple : `IAG01-SU • Révisé le : 24 septembre 2026 • Référent : Matthieu JUGUET • Version : 26v01`.
- Moitié droite : visuel à fond perdu (bords haut, bas et droit, sans arrondi), fourni par l'utilisateur. Il montre le sujet de la formation (rendu, poste de travail, résultat obtenu) ; jamais de logo d'éditeur ni d'élément identifiable d'un projet client ; 1920 px de large minimum. Sans visuel fourni, conserver l'illustration géométrique du gabarit. Ne jamais générer ni dessiner d'image de remplacement.
- Pas de formateur (il a sa propre slide), pas de mention de propriété.

## Objectif général (slide 2)

- Une seule phrase, 30 mots maximum, en 40 px. Ce n'est pas un objectif pédagogique : c'est une description sommaire de ce que la formation aborde, pour que le stagiaire comprenne en une lecture ce qu'il va apprendre.
- Juste en dessous, « Compétences visées » : 2 ou 3 pastilles `surface-brand`, sans numérotation ni code (les formations VIV ne sont pas certifiantes : pas de C1, C2, ni de blocs de compétences).
- L'ensemble est centré verticalement dans la zone de contenu.

## Public et prérequis (slide 3)

- Deux colonnes : « Public visé » (filet `brand-rose`) et « Prérequis » (filet `brand-gold`), 2 à 4 points courts chacune, centrées verticalement.
- Pour une formation technique, les prérequis matériels (poste, carte graphique, logiciel installé) figurent dans la colonne Prérequis.

## Objectifs pédagogiques (slide 4)

- Les objectifs sont repris du programme de la formation, où ils sont déjà rédigés. Avant de les reporter, vérifier qu'ils respectent la règle ci-dessous ; si l'un d'eux ne la respecte pas, le signaler à l'utilisateur et proposer une reformulation, sans modifier le programme d'office.
- Règle : un verbe observable à l'infinitif, puis ce sur quoi il porte, en deux lignes maximum. 3 à 6 objectifs.
  - Verbes conseillés : distinguer, identifier, expliquer, décrire, comparer, choisir, appliquer, utiliser, paramétrer, réaliser, produire, évaluer, diagnostiquer, repérer.
  - Verbes à éviter (non observables) : comprendre, connaître, maîtriser, savoir, découvrir, appréhender, se familiariser, sensibiliser, décoder, naviguer.
- Le verbe est en italique gras ; le numéro en Playfair `accent-deep`. Les numéros pourront servir de référence aux objectifs ailleurs dans le support.
- Amorce au-dessus du bloc : « À l'issue de la formation, vous serez capable de : ».
- Ligne sous le bloc, 22 px `ink-muted` : « Ces objectifs sont évalués par [modalité d'évaluation finale]. » La modalité doit concorder avec la slide Organisation.
- L'ensemble est centré verticalement.

## Déroulé (slide 5)

- Une colonne par jour, coiffée d'un filet `brand-rose` de 6 px (identique pour tous les jours : la couleur ne distingue pas les jours).
- En-tête : « Jour N · Verbe » en Playfair italique 36 px, `ink` ; le verbe résume la logique du jour. Dessous, le total en 22 px `ink-muted` : « 7 heures ».
- Une carte par module : « Module N » à gauche, titre du module, puis la ligne des objectifs servis (« Objectif 1 », « Objectifs 2 et 5 », numéros de la slide 4), et la durée à droite en `accent-deep`, sans gras.
- Durées en heures uniquement, au format « 2 h », « 2 h 30 », « 1 h 45 ». La somme des modules d'un jour égale le total du jour ; la somme des jours égale la durée de la couverture.
- Chaque objectif de la slide 4 est servi par au moins un module.
- Variantes :
  - 1 jour : deux colonnes « Matin » et « Après-midi » (même en-tête, sans « Jour N · »).
  - 2 ou 3 jours : une slide, une colonne par jour.
  - 4 à 6 jours : deux slides « Déroulé (1/2) » et « Déroulé (2/2) », trois colonnes maximum chacune : 4 jours en 2 + 2, 5 jours en 3 + 2, 6 jours en 3 + 3. Les deux slides portent chacune leurs notes du présentateur.
  - Plus de 4 modules dans un jour : carte compacte (titre et durée sur une ligne, objectifs dessous) ; la police ne descend jamais sous 24 px pour le titre.
- Les colonnes gardent leur hauteur naturelle (pas d'étirement) ; le bloc est centré verticalement.
- Les horaires et les pauses ne figurent pas ici : ils vont sur la slide Informations pratiques.

## Organisation de la formation (slide 6, fixe)

- Contenu identique pour toutes les formations : recopier la slide du gabarit telle quelle, notes du présentateur comprises.
- Deux blocs titrés : « Modalités pédagogiques » (4 cartes 2 × 2, icône en pastille dégradée à gauche) et « Évaluation » (3 colonnes Au début / Pendant / À la fin, puis la ligne du certificat de réalisation sur fond `surface-accent`).
- L'enquête de satisfaction n'y figure pas : elle est gérée hors du support.

## Comment utiliser ce support (slide 7, fixe)

- Contenu identique pour toutes les formations : recopier la slide du gabarit telle quelle, notes comprises.
- 4 colonnes : miniature schématique du type de slide (dessinée en HTML/CSS avec les tokens, jamais une capture), titre, texte. Repères : ouverture de module, fond rose (temps de participation), À retenir, glossaire. Dessous, une ligne sur le sur-titre et la numérotation.
- Si un gabarit change d'aspect, mettre à jour la miniature correspondante.

## Informations pratiques (slide 8, fixe)

- Contenu identique pour toutes les formations : recopier la slide du gabarit telle quelle, notes comprises.
- Horaires : frise de la journée, proportionnelle aux durées (9 h 00 – 12 h 30, déjeuner, 13 h 30 – 17 h 00 ; pauses de 15 min en `brand-gold`, déjeuner en `brand-rose`). Ce sont les horaires de base ; les ajustements se décident à l'oral en début de formation, la slide ne change pas.
- Deux cartes : Émargement (numérique, chaque demi-journée) et Accessibilité (référent handicap : Mme Morgane CHAUFOURNAIS, m-chaufournais@viv-prod.com).
- Pas d'information sur le lieu (formations chez les clients) ni de variante à distance (aucune formation à distance).

## Votre formateur (slide 9)

- Contenu recopié depuis `formateurs.md`, sans reformulation. Par défaut, Matthieu JUGUET.
- Portrait circulaire de 400 px à gauche. À droite : nom en Playfair 56 px, fonction, 3 points de parcours, 2 à 4 expertises du domaine de la formation en pastilles `surface-brand`, puis la ligne des langues en 22 px `ink-muted`.
- Aucune coordonnée personnelle.

## Pour commencer (slide 10)

- Temps d'amorce oral, pas une évaluation : l'évaluation des connaissances de départ et le recueil des attentes sont faits par le formulaire obligatoire rempli avant l'entrée en formation. Aucun QR code, aucune trace à conserver.
- 4 questions ouvertes et engageantes, en cartes blanches numérotées 2 × 2, sans lien imposé avec les objectifs.
- Dessous, encadré `surface-accent` « Vos attentes » : rappelle les attentes déjà indiquées et invite à les préciser à l'oral.
- Notes du présentateur : conduite du tour de table, puis relance sur les attentes, avec un rappel au formateur de relire les formulaires préalables.

## Chaque module

1. **Ouverture** (fond sombre, `data-theme="sombre"`) : pastille dégradée « Module N sur X · Jour N », titre du module, ligne de repères en 24 px `ink-muted` « [durée] • Objectif(s) N » (mêmes valeurs que la carte du module en slide 5), logo blanc sous le bloc titre aligné sur le bas de la liste, et à droite 3 à 6 thèmes non numérotés dans l'ordre où ils seront traités.
2. **Slides de contenu** : une notion par slide, choisie parmi les gabarits G1 à G15.
3. **Quiz** (G14) : au moins un par jour de formation, placé avant un « À retenir ».
4. **À retenir** : deux colonnes. À gauche (480 px) : icône `check` en pastille dégradée (80 px), « Module N », nom du module en Playfair 44 px, pastille `surface-brand` « Objectif(s) N » (mêmes numéros que le déroulé). À droite : 3 à 5 points à coches dans un encadré `surface-accent`.

La pastille de module, le surtitre et le pied de page doivent concorder avec le déroulé de la slide 5.

## Cadre commun des slides de contenu

- Filet dégradé de 6 px en haut, sur toute la largeur.
- Surtitre en capitales espacées : « Module N · Titre du module ». Pour les formats particuliers : « Module N · Démonstration », « Module N · Atelier pratique », « Module N · Étude de cas », « Module N · Prise en main », « Module N · Quiz » (« Module N · Quiz · Correction »). Pour les slides 2 à 10 : « Introduction » (« Introduction · Lancement » pour la slide 10). Clôture : « Clôture ». Glossaire : « Annexe ».
- Titre Playfair Display italique gras, 60 px, sur une ligne si possible, deux au maximum.
- Pied de page : « VIV Formation · [titre court de la formation] » à gauche ; à droite « Introduction », « Jour N » ou « Annexe », puis le numéro de page.
- La zone de contenu est centrée verticalement entre le titre et le pied de page : jamais de bloc calé en haut avec un vide en dessous, jamais d'éléments étirés pour remplir.
- Marges : 104 px en haut, 120 px sur les côtés, 56 px en bas.

## Gabarits de contenu

| Gabarit | Usage |
| --- | --- |
| G1 Grille de cartes | 2 à 4 notions de même rang (2 × 2, ou 3 ou 4 en ligne). Icône facultative en tête de carte (pastille `rose`, 56 px : `size="35"`, la pastille mesurant 1,6 × l'icône) : sur toutes les cartes ou sur aucune. Variante à pastilles : 3 situations, pastille `success`, `warning` ou `danger` et un mot, placée au-dessus du titre en 3 ou 4 colonnes ; sur la ligne du titre, alignée à droite, uniquement en 2 colonnes. Même position sur toutes les cartes d'une slide. |
| G2 Étapes | Procédure linéaire en 3 ou 4 étapes, dans l'ordre : une carte par étape (style des cartes G1, même hauteur) avec grand numéro Playfair `accent-deep`, titre, texte ; entre deux cartes, une colonne de 72 px avec une flèche `ink-subtle` de 40 px centrée verticalement. Pas de filet. Encadré de conclusion facultatif, juste en dessous. |
| G3 Frise chronologique | 4 à 8 dates sur un axe (4 par ligne), toutes en `accent-deep` ; chaque axe se termine par un chevron. Une date charnière au plus, facultative : point de 32 px cerclé `brand-rose` et libellé court au-dessus (capitales 20 px, `action`, 4 mots maximum). Usage rare : historique d'une technologie ou d'un logiciel. |
| G4 Tableau de définitions | 4 à 7 lignes : terme, définition, exemple fil rouge. Une ligne sur deux sur fond `surface-accent`, sans filet entre les lignes. Exemples en `ink`, en-tête de la colonne exemple en `accent-deep`. |
| G5 Comparaison | Deux options comparées sur 3 à 5 critères. En-têtes en pastilles pleines (`brand-rose` pour la première option, `brand-gold` pour la seconde). Ligne de verdict facultative en dernier, sur fond `surface-accent` : « À privilégier », texte en gras. |
| G6 Schéma en flux | Éléments qui se combinent pour produire un résultat (et non une suite d'étapes : c'est G2). Pavés reliés par des flèches ; seul le résultat prend le dégradé. Pour une mise en regard (avant / après, ancien / nouveau), la ligne de référence est atténuée (pavés `surface-sunken`, texte `ink-muted`) et la ligne sujet garde des pavés à bordure. Phrase de conclusion alignée sur le début des pavés. |
| G7 Texte et encadrés | Explication à gauche, 2 ou 3 encadrés à droite (sémantiques ou teintés). Libellé d'encadré en italique gras 26 px ; sur un encadré sémantique, précédé d'une icône d'état (`alert` pour danger et attention, `circle-check` pour succès) : la couleur n'est jamais le seul signal. |
| G8 Texte et visuel | Explication et 2 à 4 points (40 %), image ou schéma fourni (60 %, format 16:10) avec sa légende. Variante inversée : image à gauche, texte à droite (même proportions). Quand deux slides G8 se suivent, alterner les deux versions. |
| G9 Énoncé clé | Filet dégradé court (120 × 6 px) au-dessus d'une phrase forte à 48 px ; puis une formule de liaison courte (italique gras 24 px, par exemple « Rendu possible par », « Trois conditions », « En pratique ») et 3 encadrés crème. |
| G10 Démonstration | Le formateur montre. Panneau `surface-brand` à gauche, libellé « Ce que montre le formateur » précédé de l'icône `play`, description et durée ; 2 à 4 points « À observer » à droite, centrés verticalement sur le panneau. Le libellé « Consigne » est réservé à l'atelier (G13). |
| G11 Capture annotée | Capture d'interface fournie (16:10, 1120 px de large) avec 3 à 6 repères numérotés positionnés en % (pastille ronde `ink`, 56 px) ; cadre facultatif en pointillés `brand-rose` (3 px) autour d'une zone étendue (barre d'outils, panneau), positionné en %. Légende à droite, chaque ligne précédée du même repère en miniature (40 px). Le gabarit clé des formations logicielles. |
| G12 Références visuelles | 2 à 4 images fournies légendées. Pour une séquence (étapes, progression), flèche `ink-subtle` de 40 px dans une colonne de 72 px entre les images, centrée sur leur hauteur ; pas de flèche pour de simples exemples. Variante à faire / à éviter : 2 images de 720 × 450 px (16:10) centrées, chacune surmontée d'une pastille « À faire » (`success`, icône `check`) ou « À éviter » (`danger`, icône `x`). Avant / après : même variante avec des pastilles neutres « Avant » / « Après ». |
| G13 Atelier pratique | Les stagiaires font. Slide sur fond `surface-brand` (fond rose = temps de participation, comme Pour commencer et le quiz). Panneau blanc à gauche : libellé « Consigne », pastille durée (`brand-gold`, icône `clock`) alignée à droite, description et 3 à 5 étapes ; à droite, fichiers fournis, livrable attendu, critère de réussite. Variante étude de cas : même structure, surtitre « Étude de cas ». |
| G14 Quiz | Deux slides par question, fond `surface-brand` : la question (40 px) et 4 propositions A à D, puis la correction (bonne réponse en `success` avec coche, autres en `ink-subtle`, encadré « Pourquoi »). Variante vrai / faux : énoncé « Vrai ou faux : … » et deux grandes propositions, même logique de correction. Quiz de plusieurs questions : pastille « Question N sur X » à droite du surtitre, sur la question et sa correction ; aucune pastille pour une question unique. |
| G15 Aide-mémoire des raccourcis | Deux colonnes titrées, 4 à 6 lignes action / raccourci. Touches en `kbd` (police mono, `surface-code`), dans l'ordre de pression, séparées par « + ». Une ligne « Essentiel » au plus par colonne, sur fond `surface-accent`. Si les raccourcis diffèrent selon le système, ligne sous les tableaux en 22 px `ink-muted` : « Raccourcis Windows et Linux ; sur macOS, Ctrl devient ⌘ Cmd. » |

Si aucun gabarit ne convient, on compose à partir de leurs éléments (carte, encadré, pastille, tableau), jamais avec un nouveau style.

## Couleur

- Le dégradé rose-or est réservé au filet du haut, à la pastille de module, aux pastilles d'icône (organisation, informations pratiques, À retenir), au filet court de l'énoncé clé (G9) et au point d'aboutissement d'un schéma (un seul par slide).
- Fond de slide `surface-brand` : réservé aux temps de participation (Pour commencer, quiz, atelier pratique).
- Fonds teintés : `surface-brand` (rose pâle) pour les notions, questions et consignes ; `surface-accent` (crème) pour les objectifs, synthèses et facteurs.
- Diagnostics : `success`, `warning`, `danger` et leurs surfaces, toujours accompagnés d'un mot.
- Fond sombre uniquement pour les ouvertures de module.

## Texte

- Corps de texte à 24 px minimum ; seuls le surtitre (22 px), le pied de page et les libellés secondaires (20 px) descendent en dessous.
- Une idée par carte, 3 lignes maximum. Si un texte ne tient pas, on raccourcit ou on scinde la slide. On ne réduit jamais la taille de police et on ne laisse jamais un texte sortir de son cadre.
- Termes techniques en italique à leur première apparition, avec l'équivalent anglais entre parenthèses.
- Français, vouvoiement, phrases affirmatives.
- Typographie française : espace insécable (U+00A0) à l'intérieur des guillemets « » et avant « : ; ? ! », pour qu'aucun signe ne se retrouve seul en début de ligne.

## Notes du présentateur : obligatoires

- **Chaque `<section>` porte un attribut `data-speaker-notes`**, sans exception : couverture, slides fixes, ouvertures, quiz, À retenir, clôture et glossaire compris. Une slide sans note est une erreur de génération.
- Format fixe, dans cet ordre, parties séparées par des retours à la ligne :
  ```
  [N min]
  Message clé : une phrase, ce que le groupe doit retenir.

  Script : texte oral continu, 60 à 150 mots, au vouvoiement (sans le mot « Script »).

  Question au groupe : facultative.
  Transition : vers la slide suivante (absente sur la dernière slide).
  ```
- Le script développe la slide sans la relire : exemple concret, explication, relance.
- Ouverture de module : annoncer les thèmes et leur enchaînement. À retenir : récapituler, puis proposer un temps de questions.
- Dans l'attribut, pas de guillemets droits `"` : utiliser « » avec espaces insécables.
- Les notes des slides 6, 7 et 8 sont fixes, comme leur contenu : recopier celles du gabarit.
- Durées : la somme des durées des slides d'un module (ouverture, contenus, quiz, démonstrations et ateliers pour leur durée réelle, À retenir) correspond à la durée du module dans le déroulé, à 15 % près. Les slides 1 à 10 tiennent dans la première demi-heure. L'exemple du gabarit est un extrait de module : ce contrôle ne s'applique qu'aux supports générés.

## Données en attente de confirmation

- **Adresse de contact et d'inscription** `formation@viv-formation.com` : **non confirmée**. Le gabarit ne l'affiche pas aujourd'hui. Si une génération l'ajoute (contact, inscription), le signaler à l'utilisateur avant livraison, jusqu'à confirmation. Une fois l'adresse confirmée ou remplacée, la mettre à jour dans les trois modèles (fiche programme, déroulé, support) et retirer cette mention.

## Contrôle avant livraison

1. Les slides 1 à 10 sont présentes et dans l'ordre, et les slides 6, 7 et 8 sont identiques au gabarit.
2. Chaque module a une ouverture et un À retenir, et les numéros concordent avec le déroulé.
3. Toutes les sections ont un `data-speaker-notes` au format fixe (durée, message clé, script, question facultative, transition), et les durées de chaque module correspondent au déroulé à 15 % près.
4. Aucun texte ne dépasse de son cadre, et aucun titre ne fait plus de deux lignes.
5. Le titre du pied de page est identique sur toutes les slides.
6. Pastille, durée et objectifs de chaque ouverture de module concordent avec le déroulé.
7. Les durées du déroulé s'additionnent correctement et correspondent à la couverture ; chaque objectif est servi par au moins un module.
8. Chaque page porte son numéro, égal à son rang ; chaque jour contient au moins un quiz.
9. Aucune image, capture, coordonnée ou biographie n'a été inventée : les emplacements vides sont signalés à l'utilisateur.

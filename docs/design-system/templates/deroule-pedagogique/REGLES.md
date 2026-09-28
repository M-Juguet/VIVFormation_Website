# Déroulé pédagogique : règles de génération

À lire en entier avant de produire un déroulé. Le gabarit `DeroulePedagogique.dc.html` est la référence : on le copie, on remplace le contenu, on ne réinvente ni la mise en page ni les styles.

Destinataires : le formateur (préparation et animation) et l'auditeur Qualiopi. Le déroulé est le document de conception ; le support de formation (`templates/support-formation/`) en est la traduction visuelle. **Les deux documents doivent concorder** : mêmes modules, mêmes durées, mêmes objectifs numérotés.

## Format

- Document `<doc-page size="a4" orientation="landscape">`, pagination explicite : une `<section class="page">` par page, avec `data-screen-label` (numéro sur deux chiffres). Styles en ligne uniquement.
- Une page ne défile pas et ne déborde pas : ce qui dépasse est coupé à l'impression. Si le contenu ne tient pas, on crée une page de plus, jamais on ne réduit la police.
- Tailles (Noto Sans) : corps de texte 10 pt ; libellés, pastilles, en-têtes de colonnes et pied de page 9 pt ; interligne 1,4. Titres Playfair inchangés. Ce sont des minimums : si le contenu ne tient pas, on ajoute une page, jamais on ne réduit.

## Cadre commun à toutes les pages

- Filet dégradé de 6 px en haut.
- En-tête : surtitre « Déroulé pédagogique · [titre court de la formation] » (capitales espacées, 13 px, `ink-muted`), titre de page en Playfair italique 28 px ; à droite, le logo couleur (34 px de haut) ; filet `border` dessous.
- Page 1 : pas de titre de page (le titre de la formation suffit).
- Pied de page : à gauche la ligne de référence documentaire, à droite « N / total ».
- Ligne de référence (séparateur « • », libellés suivis de « : ») :
  `[Réf. formation]-DP • Révisé le : [date en toutes lettres] • Référent : [Prénom NOM] • Version : [AAvNN]`
  Même référence formation, même date de révision et même version que le support (`-SU`), seul le suffixe change.

## Structure, dans cet ordre

| Page | Contenu |
| --- | --- |
| 1 | Fiche d'identité de la formation |
| 2 | Synthèse par module |
| 3 et suivantes | Détail par séquence, jour par jour : « Jour N · Verbe (1/2) », « (2/2) »… |

### Page 1 : fiche d'identité

- Colonne gauche : titre (Playfair 34 px), sous-titre, pastilles durée (`brand-rose`), niveau (`brand-gold`) et modalité (« Présentiel, en entreprise », contour), 13 px, sur une seule ligne ; objectif général ; public visé et prérequis côte à côte ; puis, chacun sur toute la largeur, formateur (nom en Noto Sans gras, jamais en Playfair : les capitales du nom y rendent mal · fonction, depuis `templates/support-formation/formateurs.md`) et accessibilité (référent handicap : Mme Morgane CHAUFOURNAIS · m-chaufournais@viv-prod.com). En bas de la colonne gauche, séparée par un filet, la mention fixe en italique `ink-muted` : « Ce déroulé peut être ajusté en début de session selon le positionnement préalable et les attentes du groupe. »
- Colonne droite : libellé « Objectifs pédagogiques » (sans phrase d'amorce), objectifs numérotés dans un encadré `surface-accent` (verbe observable en italique gras, mêmes formulations et même ordre que le support) ; méthodes pédagogiques ; moyens techniques ; évaluation en trois temps (Avant / Pendant / À la fin).
- Les textes repris du support (objectif général, public, prérequis, objectifs) sont identiques mot pour mot.

### Page 2 : synthèse par module

- Tableau en `table-layout:fixed`, largeurs de contenu déclarées sur les `th` (la largeur rendue ajoute 20 px de marge) : Module (le reste), Horaires 124 px (sur une ligne), Durée 50 px, Objectifs 60 px, Méthodes 170 px, Évaluation 150 px.
- Une ligne d'en-tête par jour, fond `surface-accent` : « Jour N · Verbe » en Playfair, puis « · 7 heures » en `accent-deep`. Pas de colonne Jour, pas de ligne de total par jour.
- Cellule Module : « Module N » (13 px `ink-subtle`) puis le titre. Deux pastilles de méthode au plus : les deux dominantes.
- Dernière ligne « Durée totale », égale à celle de la fiche d'identité et de la couverture du support.
- Légende des méthodes en bas de page : pastilles rondes de 14 px sans texte (contour, rose, or), chacune suivie du nom de sa famille ; au moins 14 px d'espace avant le pied de page.
- Au-delà de 12 modules, la synthèse passe sur deux pages.

### Pages de détail par séquence

- Tableau en `table-layout:fixed`. Colonnes et largeurs déclarées sur les `th` (largeur de contenu ; la largeur rendue ajoute 20 px de marge intérieure), dans cet ordre : Début 60 px, Durée 48 px, Séquence et contenu (le reste, environ 340 px), Obj. 36 px, Méthode 130 px, Matériel spécifique 140 px, Évaluation 140 px.
- Début : heure de début seule, sur une ligne (la fin se lit sur la ligne suivante). Espaces insécables dans les heures et les durées.
- Matériel spécifique : uniquement ce qui demande une préparation (fichiers, grille, fiche de cas, poste, logiciel) ; sinon « — » en `ink-subtle`. Le support de formation est cité une seule fois, dans l'en-tête de module.
- Textes courts : 2 lignes au plus par cellule, sauf « Séquence et contenu » (3).
- Ligne d'en-tête de module sur fond `surface-accent` : « Module N · Titre » en Playfair, puis « · durée · Objectif(s) N · Support, module N » en `ink-muted`. Un module coupé entre deux pages reprend sa ligne d'en-tête avec « (suite) ».
- Ligne de séquence : titre en gras (35 caractères au plus), puis le contenu détaillé en `ink-muted` (45 caractères au plus, une ligne, facultatif).
- Pauses, déjeuner et fin : ligne fine `surface-sunken` ; l'heure occupe les colonnes Début et Durée (`colspan="2"`), le libellé en italique `ink-muted` les cinq autres (« Pause · 15 min », « Déjeuner · 1 h », « Fin de la journée », « Fin de la formation » en dernière ligne de chaque jour). Horaires de base : 9 h 00 – 12 h 30, 13 h 30 – 17 h 00, pauses de 15 minutes vers 10 h 30 et 15 h 00.
- Budget vertical d'une page de détail : environ 600 px pour le tableau. Une séquence de deux lignes compte 60 px, une ligne de module 35 px, une pause 29 px. En pratique, 7 séquences, 2 en-têtes de module et 2 pauses au plus par page ; un jour occupe généralement deux pages.
- Séquences de 15 à 60 minutes. Chaque séquence sert au moins un objectif, sauf l'accueil et les pauses (« — »).

## Méthodes pédagogiques

Pastilles, libellés fixes, trois familles distinguées par un contraste net (jamais par des teintes pâles proches) :

| Famille | Pastilles | Style |
| --- | --- | --- |
| Transmissive | Exposé | Contour `border-strong`, fond blanc |
| Démonstrative et interrogative | Démonstration, Quiz, Échanges, QCM | Plein `brand-rose`, texte `ink-on-pastel` |
| Active | Atelier pratique, Étude de cas | Plein `brand-gold`, texte `ink-on-pastel` |

Une séquence peut combiner deux méthodes au plus.

## Concordance avec le support

- Modules : mêmes numéros, titres, durées et objectifs que la slide Déroulé du support.
- Chaque atelier, démonstration, étude de cas et quiz du support figure dans le déroulé, avec la même durée (celle des notes du présentateur).
- Matériel spécifique : le support est cité dans l'en-tête de module ; noms exacts des fichiers pour les ateliers ; matériel particulier (poste, logiciel, navigateur).
- Dernière séquence de la formation, obligatoire : « Évaluation à chaud et clôture » (10 min, juste après le QCM final ; matériel « Questionnaire en ligne » ; évaluation « Évaluation à chaud »). Elle figure aussi dans le cadre Évaluation « À la fin » de la page 1.
- Évaluation : pour un atelier, « Critère de réussite » (le critère chiffré figure dans le support) ; pour un quiz, « Quiz formatif » ; en fin de formation, « QCM de vérification des compétences ».

## Typographie

- Français, formulations nominales et courtes dans les tableaux.
- Horaires au format « 9 h 00 – 10 h 30 », durées « 30 min » ou « 1 h 30 ».
- Espace insécable à l'intérieur des guillemets « » et avant « : ; ? ! ».

## Données en attente de confirmation

- **Adresse de contact et d'inscription** `formation@viv-formation.com` : **non confirmée**. Le gabarit ne l'affiche pas aujourd'hui. Si une génération l'ajoute (contact, inscription), le signaler à l'utilisateur avant livraison, jusqu'à confirmation. Une fois l'adresse confirmée ou remplacée, la mettre à jour dans les trois modèles (fiche programme, déroulé, support) et retirer cette mention.

## Contrôle avant livraison

1. Référence, date de révision et version concordent avec le support ; seul le suffixe diffère (-DP / -SU).
2. Les durées des séquences d'un module s'additionnent à la durée du module ; les modules d'un jour, au total du jour ; les jours, à la durée totale.
3. Les horaires s'enchaînent sans trou ni chevauchement, pauses et déjeuner compris.
4. Chaque objectif pédagogique est servi par au moins une séquence et évalué par le QCM final.
5. Modules, titres, durées et objectifs identiques à ceux du support.
6. Aucune page ne dépasse son budget vertical (le tableau finit au-dessus du pied de page) ; aucune cellule ne dépasse sa largeur.
7. Le pied de page porte « N / total » exact sur chaque page.

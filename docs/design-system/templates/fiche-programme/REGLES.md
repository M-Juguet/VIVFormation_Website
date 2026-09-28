# Fiche programme : règles de génération

À lire en entier avant de produire une fiche. Le gabarit `FicheProgramme.dc.html` (exemple : UE01, 35 heures) est la référence : on le copie, on remplace le contenu, on ne réinvente ni la mise en page ni les styles.

La fiche programme est un **document imprimable**, destiné au catalogue PDF des formations et à l'envoi aux prospects. Elle répond aux indicateurs 1 et 2 du référentiel Qualiopi. Elle présente les mêmes informations que la fiche web ; sa mise en forme suit les documents imprimés du système (déroulé, support), pas la page web.

## Format

- `<doc-page size="a4">` (A4 portrait), pagination explicite : une `<section class="page">` par page, avec `data-screen-label` (numéro sur deux chiffres). Styles en ligne uniquement.
- Nombre de pages variable : de 3 à 4 en général (2 pour un programme court). Une page ne défile pas et ne déborde pas ; si le contenu ne tient pas, on ajoute une page, jamais on ne réduit la police ni les espacements.
- Pas de page remplie à moins de la moitié : on rééquilibre en déplaçant une partie du programme ou un groupe de modalités (voir « Répartition »).
- Tailles (Noto Sans) : corps 10 pt ; titres de section 12 pt gras ; libellés, notes et pied de page 9 pt ; interligne 1,4. Playfair : 34 px (titre de formation), 28 px (titre de page), 20 px (groupe de modalités), 18 px (partie du programme).
- Pas de bandeau sombre, pas d'ombre, pas de verre dépoli.

## Mise en avant

- **Titres de section** (Objectifs pédagogiques, Compétences visées, Méthodes pédagogiques, Modalités d'animation, Sanction / validation, Modalités & délais d'accès, Accessibilité) : Noto Sans gras 12 pt, interligne 1,3, `accent-deep`, en minuscules. Ce sont eux que l'œil doit trouver d'abord.
- Les libellés en capitales espacées 9 pt `ink-muted` sont réservés au bandeau de repères (Niveau, Pour qui, Prérequis, Durée, Tarifs, Équipement requis) et aux surtitres d'en-tête.

- Le **gras** est réservé aux données sur lesquelles le lecteur agit ou qu'il doit retenir : nom et adresse du référent handicap, adresse d'inscription, délais (« 11 jours ouvrés », « 2 semaines »), sanction, valeurs du bandeau de repères (niveau, durée).
- Deux passages en gras au plus par bloc. Jamais une phrase entière.
- Le verbe de chaque objectif pédagogique est en italique gras.

## Cadre commun à toutes les pages

- Filet dégradé de 6 px en haut ; en-tête : surtitre en capitales espacées, logo couleur 34 px à droite, filet `border` dessous.
- Page 1 : surtitre « Fiche programme · [Domaine] », pas de titre de page.
- Pages suivantes : surtitre « Fiche programme · [titre court] » et titre de page Playfair 28 px.
- Pied de page : à gauche la ligne de référence, à droite « N / total ».
  `[Réf.]-PRO • Révisé le : [mois année en toutes lettres] • Version : [AAvNN] • Déclaration d'activité : 11923083592`
  Même référence et même version que le déroulé (`-DP`) et le support (`-SU`). Le numéro de déclaration d'activité figure ici et nulle part ailleurs.

## Structure

### Page 1 : identité

1. Titre de la formation (Playfair 34 px), puis **sous-titre** : Noto Sans 10 pt, `ink-muted`, 6 px sous le titre, **deux lignes au plus** (environ 180 caractères), phrase complète avec point final. Il décrit la formation et remplace l'ancien bloc « Objectif général », qui n'existe plus. S'il est absent du programme source, on le tire de son objectif général, en le raccourcissant, et on le fait valider par l'organisme.
2. **Bandeau de repères** : bande `surface-brand` (rose très pâle) **à fond perdu**, sur toute la largeur de la page (marges latérales annulées, marge intérieure 24 × 48 px, identique en haut et en bas), deux colonnes égales (28 px d'écart) :
   - à gauche, seul encadré de la bande : fond `surface`, filet `border` 1 px, rayon 12 px, marge intérieure 18 × 22 px, hauteur ajustée à son contenu et encadré centré verticalement dans la bande ; Niveau, Durée, Tarifs, séparés par un filet fin rose (1 px, `brand-rose` à 45 %, 12 px d'air de part et d'autre) ;
   - à droite, sans encadré, posé sur la bande sans marge supplémentaire : Pour qui, Prérequis, Équipement requis, séparés par le même filet fin rose.
   - **Équipement requis\*** : ce que l'apprenant doit apporter. Libellé suivi d'un astérisque, note « \* Non fourni par VIV. » sous la liste (9 pt `ink-muted`, comme la note des tarifs ; chaque astérisque renvoie à la note de son propre bloc). Liste à puces de **quatre éléments au plus** : logiciels d'abord (version comprise : « Unreal Engine 5.7 ou supérieur installé »), matériel ensuite. Si VIV fournit l'équipement, le bloc est supprimé et le matériel est décrit dans Méthodes pédagogiques.
   - Pour qui, Prérequis et Équipement requis sont des listes à puces, même avec un seul élément.
3. **Objectifs pédagogiques** : titre de section hors de l'encadré (même position que les autres titres), puis encadré `surface-accent` contenant, sans phrase d'amorce, de **trois à huit** objectifs numérotés, verbe à l'infinitif en italique gras, deux lignes au plus chacun.
4. **Compétences visées**, après les objectifs : liste à puces de 3 à 6 compétences, chacune suivie en `accent-deep` des numéros des objectifs qui y mènent (« · objectifs 2, 3 », « · objectif 4 »). Chaque compétence cite au moins un objectif.

### Pages de programme détaillé

- Une partie par bloc : numéro Playfair 30 px en `accent-deep` dans une colonne de 44 px, titre Playfair 18 px (55 caractères au plus), puis liste à puces rondes `brand-rose`.
- Filet `border` entre deux parties. Une partie n'est jamais coupée entre deux pages.
- **Pas de durée par partie** : la durée se lit dans le bandeau de repères et dans le déroulé.
- 3 à 6 puces par partie, 2 lignes au plus chacune (environ 180 caractères).

### Modalités, en trois groupes

Chaque groupe s'ouvre sur un titre Playfair 20 px souligné d'un filet `ink` de 2 px.

1. **Pédagogie** : méthodes pédagogiques, puis modalités d'animation en dessous, pleine largeur. Les méthodes couvrent aussi les moyens fournis par VIV (supports projetés, supports téléchargeables) ; les moyens déjà cités en évaluation (quiz) n'y sont pas répétés. Modalités d'animation : format synchrone et présentiel, lieu, rythme. Pas de bloc « Moyens techniques » : l'équipement de l'apprenant est dans le bandeau.
2. **Évaluation** : frise en trois temps, cartes discrètes (filet `border` 1 px, rayon 8 px, sans fond) reliées par des flèches « → » en `accent-deep` : Avant / Pendant (mentionne les quiz) / À la fin, avec 8 px d'air au-dessus et 10 px au-dessous en plus de l'écart du groupe. Puis sanction / validation, pleine largeur. Pas de bloc « Indicateurs de résultats » sur la fiche : ils sont publiés sur le site de l'organisme (indicateur 2 de Qualiopi), jamais inventés ni recopiés ici.
3. **Accès** : « Modalités & délais d'accès » en bloc classique (libellé + texte, sans encadré) ; puis accessibilité, pleine largeur. Pas de bloc Financement ni Contact (l'adresse d'inscription figure dans les délais d'accès).

Formateur : bloc **optionnel**, dans le groupe Pédagogie, après les modalités d'animation. Deux lignes, recopiées de `templates/support-formation/formateurs.md`, sans reformulation :
1. nom en gras · fonction (10 pt) ;
2. ancienneté de formateur et certification de formateur (9 pt `ink-muted`).
Pas de portrait, pas de parcours détaillé, aucune coordonnée. S'il n'est pas fixé, on supprime le bloc ; on n'écrit jamais « à définir ».

### Répartition


- Page 1 : identité. Pages suivantes : programme détaillé seul (« Programme détaillé », puis « Programme détaillé (suite) »). Dernière page : les trois groupes de modalités, seuls, sous le titre « Modalités ».
- Le programme et les modalités ne partagent jamais une page.
- Budget utile d'une page : environ 900 px. Une partie de programme de 5 puces compte environ 230 px. Les trois groupes de modalités doivent tenir sur une seule page : si ce n'est pas le cas, on resserre les textes non fixes (méthodes, moyens, animation), jamais la police.

## Textes fixes (mot pour mot)

**Tarifs**
> Inter-entreprises : [montant] HT/pers.* · Intra-entreprise : sur devis

Le montant est toujours exprimé « HT/pers. » (hors taxes, par personne). « [montant] HT/pers. » et « sur devis » sont en gras ; l'astérisque reste hors du gras.
> \* Prix constitué à partir d'un effectif minimum.

**Modalités & délais d'accès**
> La formation peut être mise en place à tout moment, pour un maximum de 8 apprenants par session, à compter d'un délai minimal de 11 jours ouvrés suivant la date de demande.
> La demande d'informations ou d'inscription s'effectue par mail (formation@viv-formation.com).
> Le démarrage de la formation ne pourra avoir lieu qu'au minimum 2 semaines après réception de la convention signée.

(Effectif maximum dans la première phrase, sans gras. Il vaut toujours 8 : c'est un texte fixe, pas une donnée par formation.)

**Accessibilité aux personnes handicapées**
> Nous sommes sensibles aux enjeux de l'inclusion et investis sur la thématique du handicap.
> Merci de nous contacter afin de pouvoir vous accompagner dans les meilleures conditions.
> Responsable handicap : Mme Morgane CHAUFOURNAIS (m-chaufournais@viv-prod.com).

C'est la seule adresse de contact handicap, à utiliser partout sans variante.

**Sanction / validation**
> Un certificat de réalisation est remis à chaque apprenant en fin de formation.

(« certificat de réalisation » en gras ; une ligne.)

**Lieu** : les formations se tiennent **uniquement chez le client**. La fiche s'adresse au client, d'où « dans vos locaux », sans gras.

**Modalités d'animation** (un seul paragraphe)
> Nous sommes conscients des impératifs liés au monde de la production. La formation est réalisée en salle de façon synchrone, en présentiel, dans vos locaux, et nous proposons un rythme d'apprentissage flexible : la répartition et l'intensité des sessions peuvent être adaptées pour s'ajuster au mieux aux besoins et aux disponibilités de vos équipes.

 Jamais « nos locaux », « notre salle » ni adresse de VIV comme lieu de formation.

## QR code

Pas de QR code pour le moment. S'il est réintroduit : un seul, vers l'adresse stable de la fiche web de la formation, fourni par l'organisme, jamais fabriqué.

## Données en attente de confirmation

- **Adresse de contact et d'inscription** `formation@viv-formation.com` : **non confirmée**. Elle reste dans la fiche et dans les textes fixes en attendant, mais toute fiche générée le signale à l'utilisateur avant livraison, jusqu'à confirmation. Une fois l'adresse confirmée ou remplacée, la mettre à jour partout (textes fixes, délais d'accès, et règles du déroulé et du support) et retirer cette mention.

## Champs à compléter

Un champ sans donnée affiche `[à renseigner]` en `ink-subtle`, en italique, sauf dans le tarif, où il est en gras sans italique. Permis uniquement pour : montant du tarif inter-entreprises. Tout autre champ vide bloque la livraison.

## Contenu source

- Le texte fourni par l'organisme est repris tel quel ; on corrige seulement la typographie (espaces insécables, majuscules des titres de parties).
- **Objectifs** : chacun commence par un verbe d'action observable et mesurable (naviguer, importer, créer, configurer, réaliser, produire…). Les verbes « appréhender », « maîtriser », « connaître », « comprendre », « savoir », « découvrir », « s'initier » sont refusés.
- Si les objectifs fournis ne respectent pas cette règle, la génération **s'arrête et le signale clairement** à l'utilisateur : liste des objectifs concernés, raison (critère Qualiopi : objectifs évaluables), et une proposition de reformulation pour chacun. On ne livre pas la fiche tant que l'utilisateur n'a pas validé ou fourni les reformulations ; on ne réécrit jamais en silence.

## Interdits

- Pas de CPF, pas de distanciel.
- **Pas de calendrier de sessions**, ni bloc Calendrier, ni dates. Le tarif inter-entreprises ne suppose pas de session ouverte : même quand plusieurs entreprises participent, les dates sont convenues selon leurs besoins et disponibilités. Les délais d'accès tiennent lieu de calendrier.
- Pas de mention ni de logo Qualiopi tant que le certificat n'est pas obtenu.
- Pas de photo, de biographie, de diplôme ou de certification inventés ; pas de logo d'éditeur de logiciel.

## Concordance

- Titre, public, prérequis et objectifs : identiques au déroulé et au support. Le sous-titre de la fiche reprend l'objectif général du déroulé, raccourci si besoin.
- Durée totale identique dans les trois documents.
- Méthodes, moyens techniques et évaluation compatibles avec le déroulé.

## Contrôle avant livraison

1. Référence et version concordent avec `-DP` et `-SU`.
2. Objectifs : trois à huit, tous introduits par un verbe observable (sinon : arrêt et demande de reformulation).
3. Tous les champs Qualiopi sont présents : objectifs, public, prérequis, durée, modalités et délais d'accès, tarifs, contact (adresse d'inscription des délais d'accès), méthodes, équipement requis, modalités d'animation, évaluation, sanction, accessibilité.
4. Seuls les champs autorisés portent `[à renseigner]`.
5. Gras : deux passages au plus par bloc, jamais une phrase entière.
6. Aucune page ne déborde, aucune n'est remplie à moins de la moitié ; « N / total » exact.

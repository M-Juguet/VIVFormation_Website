---
# Identité documentaire, commune à la fiche (-PRO), au déroulé (-DP) et au support (-SU)
reference: TRL01 # fiche : TRL01-PRO • Révisé le : septembre 2026 • Version : 26v01 • Déclaration d'activité : 11923083592
version: 26v01
revision: 2026-09-25

# Présentation
titre: Initiation à Unreal Engine pour l’imagerie
titreCourt: Initiation à Unreal Engine
sousTitre: Maîtrisez l’ensemble du pipeline temps réel dans Unreal Engine 5 pour transformer des données 3D polygonales ou CAO industrielles complexes en visuels photoréalistes.

# Classement (site)
type: module # fiche : Module
domaine: 3d-temps-reel # fiche : 3D temps réel (surtitre de la page 1 : « Fiche programme · 3D temps réel »)
outils: [unreal-engine] # fiche : Unreal Engine

# Bandeau de repères
niveau: Débutant
duree: { heures: 35, jours: 5 } # fiche : 35 heures — 5 jours
tarif: 1900 # fiche : Inter-entreprises : 1 900 € HT/pers.* · Intra-entreprise : sur devis
public:
  - Designers
  - Infographistes 3D
  - Modeleurs 3D et CAO
prerequis:
  - Connaître l’environnement de travail Windows
equipement: # non fourni par VIV ; champ absent = équipement fourni par VIV
  - Unreal Engine 5.7 ou supérieur installé
  - Station de travail équipée d’une carte graphique compatible Raytracing (gamme NVIDIA RTX conseillée)

# Objectifs et compétences
objectifs:
  - Naviguer dans l’interface d’Unreal Engine et configurer un nouveau projet
  - Importer des données CAO et des maillages polygonaux complexes
  - Exploiter Nanite pour la gestion fluide de géométries industrielles très denses
  - Développer des matériaux PBR photoréalistes
  - Concevoir des ambiances lumineuses studio et extérieures grâce à la technologie Lumen
  - Réaliser un cadrage photographique expert et appliquer un étalonnage colorimétrique professionnel
  - Animer des caméras et générer des rendus d’images fixes et de séquences haute définition
competences:
  - libelle: Ingérer des données 3D et CAO complexes dans Unreal Engine
    objectifs: [2, 3]
  - libelle: Créer des matériaux PBR et du surfaçage photoréaliste
    objectifs: [4]
  - libelle: Concevoir des ambiances lumineuses studio et environnementales en temps réel
    objectifs: [5]
  - libelle: Produire des visuels et animations haute définition de qualité cinématographique
    objectifs: [6, 7]

# Programme détaillé : une partie par bloc, sans durée
programme:
  - titre: Découverte d’Unreal Engine & prise en main
    points:
      - Spécificités du temps réel face au rendu hors-ligne (Lumen, Nanite, architecture globale)
      - Ergonomie de l’interface, fenêtres de travail, raccourcis de navigation et manipulation dans la vue 3D
      - 'Configuration initiale d’un projet : plugins indispensables, unités de mesure, espace de couleurs'
      - Structuration arborescente du Content Browser, gestion des assets et conventions de nomenclature
  - titre: Ingestion de données & géométrie
    points:
      - 'Importation polygonale (FBX / USD) : gestion des échelles, des axes (Y-Up vs Z-Up), des pivots et des normales'
      - 'Importation CAO industrielle via Datasmith : réglages de tessellation et conservation des hiérarchies d’assemblage'
      - Optimisation géométrique avec Nanite sur la géométrie statique et gestion des pièces transparentes spécifiques
  - titre: Surfaçage PBR & création de matériaux
    points:
      - Logique des canaux PBR et création d’un Master Material paramétrique avec déclinaison en Material Instances
      - Texturage sans dépliage UV via les projections triplanaires
      - 'Intégration de détails et d’imperfections : Decals (marquages, logos) et masques d’usure'
      - 'Traitement des matériaux complexes : peintures multicouches (Clear Coat), composites, métaux brossés, verre teinté et optiques'
      - 'Aperçu du framework Substrate : découverte des principes de la nouvelle architecture de matériaux d’Unreal Engine'
  - titre: Éclairage real-time & mise en scène studio / extérieur
    points:
      - 'Architecture d’éclairage Lumen : principes de l’illumination globale dynamique et réglages de qualité de scène'
      - 'Éclairage extérieur et atmosphérique : Sun & Sky, Sky Atmosphere et intégration de décors virtuels via HDRI Backdrop'
      - 'Éclairage studio produit : mise en place de Rect Lights et diffusions douces pour valoriser les lignes et les volumes'
      - Configuration des profils photométriques IES pour les éclairages ciblés et d’ambiance intérieure
      - Gestion des matériaux émissifs pour l’affichage numérique, les rétroéclairages et les voyants lumineux
  - titre: Caméras cinématographiques & traitement de l’image
    points:
      - 'Cine Camera Actor : choix des objectifs, tailles de capteurs, profondeur de champ et mise au point photographique'
      - Contrôle de l’exposition professionnelle (ISO, Shutter Speed, Aperture)
      - 'Post Process Volume : Color Grading avancé (balance des blancs, contraste, saturation, correction par plages)'
      - Application de tables de correspondance (LUTs) personnalisées et gestion de la courbe de ton (Tone Curve / Filmic)
      - 'Effets d’optiques photoréalistes : Bloom, Vignettage, Lens Flares et Aberration chromatique'
  - titre: Animation de présentation & export haute définition
    points:
      - Création et gestion de Level Sequences dans la Timeline / Sequencer
      - Animation de caméras et mise en mouvement d’éléments géométriques
      - Capture rapide d’images fixes via High Resolution Screenshot pour la validation d’angles de vue
      - 'Production haute définition via la Movie Render Queue (MRQ) : suréchantillonnage spatial et temporel anti-crénelage'
      - Exportation d’images fixes et de séquences haute définition avec passes de rendu

# Modalités propres à la formation (les autres sont des textes fixes)
formateur: matthieu-juguet # fiche : Matthieu JUGUET · Infographiste 3D, artiste technique et formateur
# fiche, parcours du formateur : Formateur depuis 2021 : conception et animation de parcours pour adultes
# fiche, parcours du formateur : Gestion de projets 3D et intégration d’IA en production depuis 2019
# fiche, parcours du formateur : Certification de formateur pour adultes (Cegos, 2023) · Master en gestion de projets multimédia

# Visuel de couverture (provisoire, en attente d'un visuel 16:9 de 1920 px)
visuel: ./visuels/initiation-unreal-engine-imagerie.png
visuelAlt: Mains sur le clavier d’un ordinateur portable affichant une scène de rendu temps réel, une voiture bleue dans un studio virtuel.
visuelIA: Gemini (NanoBanana)

# Site uniquement
statut: Dates à convenir
enAvant: true
ordre: 1
---

---
# Identité documentaire, commune à la fiche (-PRO), au déroulé (-DP) et au support (-SU)
reference: DPP01 # fiche : DPP01-PRO • Révisé le : 19 octobre 2026 • Version : 26v01 • Déclaration d'activité : 11923083592
version: 26v01
revision: 2026-10-19

# Présentation
titre: Optimiser son travail avec Blender pour l’imagerie CAO
titreCourt: Blender pour l’imagerie CAO
sousTitre: Importez, optimisez et organisez des données CAO dans Blender pour produire des visualisations temps réel et des livrables techniques destinés à la revue de projet.

# Classement (site)
type: module # fiche : Module
domaine: preparation-donnees-3d # fiche : Préparation de données 3D (surtitre de la page 1 : « Fiche programme · Préparation de données 3D »)
outils: [blender] # fiche : Blender

# Bandeau de repères
niveau: Intermédiaire
duree: { heures: 21, jours: 3 } # fiche : 21 heures — 3 jours
tarif: 1140 # fiche : Inter-entreprises : 1 140 € HT/pers.* · Intra-entreprise : sur devis
public:
  - Designers
  - Modeleurs
  - Imageurs
prerequis:
  - Connaître l’environnement de travail Windows
  - Connaître les bases de l’utilisation de Blender (interface et manipulation d’objets)
equipement: # non fourni par VIV ; champ absent = équipement fourni par VIV
  - Blender 5.1 ou supérieur installé
  - Asset Transformer Studio (ex-Pixyz Studio) 2026.5 ou supérieur installé, avec licence active

# Objectifs et compétences
objectifs:
  - Importer et optimiser des données CAO complexes via Pixyz
  - Nettoyer et organiser des scènes industrielles pour une manipulation fluide
  - Créer des matériaux industriels réalistes et gérer les identifiants matières (ID)
  - Produire des visualisations interactives haute-fidélité en temps réel avec EEVEE
  - Générer des livrables techniques (coupes, vues orthographiques) pour la revue de projet
competences:
  - libelle: Importer et optimiser des données CAO complexes dans Blender via Pixyz
    objectifs: [1]
  - libelle: Structurer et alléger des scènes industrielles pour une manipulation fluide
    objectifs: [2]
  - libelle: Habiller des modèles CAO de matériaux industriels réalistes à partir de leurs identifiants matières
    objectifs: [3]
  - libelle: Produire des visualisations temps réel et des livrables techniques pour la revue de projet
    objectifs: [4, 5]

# Programme détaillé : une partie par bloc, sans durée
programme:
  - titre: Intelligence des données & importation CAO
    points:
      - Maîtrise de l’import et de la conversion via l’outil Pixyz
      - Optimisation des paramètres de tessellation pour un équilibre performance/fidélité
      - Gestion des hiérarchies complexes et simplification des structures de données importées
      - 'Nettoyage technique des géométries : gestion des normales et des doublons'
      - Traitement des topologies issues de la conception pour une exploitation 3D fluide
  - titre: LookDev & visualisation temps réel (EEVEE)
    points:
      - Création de matériaux industriels réalistes (plastiques, métaux, revêtements) via le shader Principled BSDF
      - Gestion avancée des identifiants (ID) de matériaux issus des logiciels de conception (CATIA, SolidWorks)
      - Techniques de texturage rapide par projections triplanaires (sans dépliage UV laborieux)
      - Paramétrage expert du moteur EEVEE pour une visualisation interactive haut de gamme
      - 'Mise en lumière « design » : éclairage studio, Area Lights et environnements HDRI de précision'
  - titre: Organisation de scène & bibliothèque d’actifs
    points:
      - Structuration professionnelle via les collections et les calques de vue (View Layers)
      - Constitution et exploitation d’une bibliothèque d’assets (Asset Browser) pour les projets récurrents
      - Création de variantes de couleurs/matériaux pour la revue de projet interactive
      - Optimisation du workflow pour la manipulation de scènes CAO comportant un grand nombre d’objets
  - titre: Sorties analytiques & livrables techniques
    points:
      - Création de vues orthographiques précises et de coupes techniques dynamiques
      - Rendu de schémas techniques (mode Workbench) avec gestion des contours et aplats
      - Composition d’image simplifiée pour une mise en valeur immédiate du design
      - Exportation de livrables haute définition pour la validation esthétique et technique

# Modalités propres à la formation (les autres sont des textes fixes)
formateur: matthieu-juguet # fiche : Matthieu JUGUET · Infographiste 3D, artiste technique et formateur
# fiche, parcours du formateur : Formateur depuis 2021 : conception et animation de parcours pour adultes
# fiche, parcours du formateur : Gestion de projets 3D et intégration d’IA en production depuis 2019
# fiche, parcours du formateur : Certification de formateur pour adultes (Cegos, 2023) · Master en gestion de projets multimédia

# Visuel de couverture
visuel: ./visuels/blender-imagerie-cao.jpg
visuelAlt: Turbine industrielle moitié en filaire bleu, moitié en métal rendu, avec le logo de Blender en son centre.
visuelIA: Gemini

# Site uniquement
statut: Dates à convenir
enAvant: false
ordre: 0
---

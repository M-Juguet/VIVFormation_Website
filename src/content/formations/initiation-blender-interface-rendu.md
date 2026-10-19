---
# Identité documentaire, commune à la fiche (-PRO), au déroulé (-DP) et au support (-SU)
reference: PRC01 # fiche : PRC01-PRO • Révisé le : 19 octobre 2026 • Version : 26v01 • Déclaration d'activité : 11923083592
version: 26v01
revision: 2026-10-19

# Présentation
titre: 'Initiation à Blender : de l’interface au rendu'
titreCourt: Initiation à Blender
sousTitre: 'Prenez en main Blender, de l’interface au rendu : importez et adaptez des modèles, habillez-les de matériaux réalistes, éclairez-les et produisez des visuels de présentation.'

# Classement (site)
type: module # fiche : Module
domaine: 3d-precalculee # fiche : 3D précalculée (surtitre de la page 1 : « Fiche programme · 3D précalculée »)
outils: [blender] # fiche : Blender

# Bandeau de repères
niveau: Débutant
duree: { heures: 21, jours: 3 } # fiche : 21 heures — 3 jours
tarif: 1140 # fiche : Inter-entreprises : 1 140 € HT/pers.* · Intra-entreprise : sur devis
public:
  - Designers
  - Modeleurs
  - Imageurs
prerequis:
  - Connaître l’environnement de travail Windows
equipement: # non fourni par VIV ; champ absent = équipement fourni par VIV
  - Blender 5.1 ou supérieur installé

# Objectifs et compétences
objectifs:
  - Naviguer dans l’interface de Blender et personnaliser son espace de travail
  - Importer, organiser et manipuler des scènes 3D complexes
  - Adapter des objets existants avec les outils de modélisation de base et les modificateurs
  - Créer des matériaux réalistes et mettre en lumière un produit
  - Produire des visuels de présentation professionnels (images fixes)
competences:
  - libelle: Organiser dans Blender une scène 3D structurée à partir de modèles importés
    objectifs: [1, 2]
  - libelle: Adapter des géométries existantes avec les outils de modélisation et les modificateurs
    objectifs: [3]
  - libelle: Habiller un produit de matériaux réalistes et l’éclairer en studio ou par HDRI
    objectifs: [4]
  - libelle: Produire un visuel de présentation fini avec EEVEE ou Cycles et le compositing
    objectifs: [5]

# Programme détaillé : une partie par bloc, sans durée
programme:
  - titre: Prise en main & modélisation essentielle
    points:
      - Compréhension de la philosophie de Blender et personnalisation de l’espace de travail
      - Maîtrise de la navigation 3D et des raccourcis de productivité
      - 'Gestion des données : importation de modèles externes et organisation par collections'
      - Outils de modélisation de base pour modifier ou adapter des géométries existantes
      - Utilisation des modificateurs indispensables (Miroir, Épaisseur, Biseautage)
      - 'Atelier pratique : mise en place d’une scène 3D structurée et prête pour l’habillage'
  - titre: 'LookDev : donner vie à ses modèles'
    points:
      - Création de matériaux réalistes (métal, plastique, verre) via le shader universel de Blender
      - Application de textures simplifiée par projections automatiques (sans dépliage UV complexe)
      - Techniques d’éclairage studio et exploitation des environnements HDRI
      - Gestion de l’environnement (« World ») pour créer rapidement des ambiances lumineuses
      - 'Atelier pratique : habillage complet d’un produit et mise en place d’un éclairage photographique'
  - titre: Rendu, caméra & exportation
    points:
      - Paramétrage des moteurs de rendu EEVEE (temps réel) et Cycles (photoréalisme)
      - Mise en scène et réglages optiques de la caméra (focales, profondeur de champ)
      - Post-production intégrée par le compositing (bloom, contrastes, vignettage)
      - Configuration des sorties d’image et lancement des calculs finaux
      - 'Atelier final : réalisation d’un visuel de présentation professionnel et prêt pour la diffusion'

# Modalités propres à la formation (les autres sont des textes fixes)
formateur: matthieu-juguet # fiche : Matthieu JUGUET · Infographiste 3D, artiste technique et formateur
# fiche, parcours du formateur : Formateur depuis 2021 : conception et animation de parcours pour adultes
# fiche, parcours du formateur : Gestion de projets 3D et intégration d’IA en production depuis 2019
# fiche, parcours du formateur : Certification de formateur pour adultes (Cegos, 2023) · Master en gestion de projets multimédia

# Visuel de couverture
visuel: ./visuels/initiation-blender-interface-rendu.jpg
visuelAlt: Logo de Blender lumineux au centre d’un tourbillon de formes 3D en verre, métal, argile et filaire orange, sur fond sombre.
visuelIA: Gemini

# Site uniquement
statut: Dates à convenir
enAvant: false
ordre: 0
---

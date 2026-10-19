---
# Identité documentaire, commune à la fiche (-PRO), au déroulé (-DP) et au support (-SU)
reference: TRL02 # fiche : TRL02-PRO • Révisé le : 19 octobre 2026 • Version : 26v01 • Déclaration d'activité : 11923083592
version: 26v01
revision: 2026-10-19

# Présentation
titre: Les fondamentaux de l’intégration temps réel avec Unity
titreCourt: Intégration temps réel avec Unity
sousTitre: 'Construisez une application temps réel dans Unity, de l’import des données à l’exécutable : matières, éclairage, programmation C#, interface et animation.'

# Classement (site)
type: module # fiche : Module
domaine: 3d-temps-reel # fiche : 3D temps réel (surtitre de la page 1 : « Fiche programme · 3D temps réel »)
outils: [unity] # fiche : Unity

# Bandeau de repères
niveau: Débutant
duree: { heures: 35, jours: 5 } # fiche : 35 heures — 5 jours
tarif: 1900 # fiche : Inter-entreprises : 1 900 € HT/pers.* · Intra-entreprise : sur devis
public:
  - Infographistes
  - Développeurs
prerequis:
  - Connaître l’environnement de travail Windows
equipement: # non fourni par VIV ; champ absent = équipement fourni par VIV
  - Unity 2022 ou supérieur installé
  - Visual Studio Code installé

# Objectifs et compétences
objectifs:
  - Intégrer différents types de données pour construire une scène dans Unity
  - Utiliser les fondamentaux de la programmation C# pour créer des fonctionnalités dans un moteur temps réel
  - Construire une interface utilisateur simple et fonctionnelle
  - Utiliser les outils disponibles dans Unity pour animer des objets ou des propriétés
competences:
  - libelle: Construire une scène Unity à partir de données importées, avec matières, éclairage et post-processing
    objectifs: [1]
  - libelle: Programmer en C# des comportements et des fonctionnalités dans Unity
    objectifs: [2]
  - libelle: Créer une interface utilisateur fonctionnelle avec uGUI ou UI Toolkit
    objectifs: [3]
  - libelle: Animer des objets et des propriétés avec ou sans code (Animator, Timeline, DOTween)
    objectifs: [4]

# Programme détaillé : une partie par bloc, sans durée
programme:
  - titre: Préparer son travail dans Unity
    points:
      - Création de projets et interface du moteur
      - L’arborescence des dossiers de projet
      - Tour rapide des différents pipelines de rendu
      - Travail collaboratif et versioning
  - titre: Les « GameObjects » et leurs propriétés
    points:
      - Qu’est-ce qu’un « GameObject » ?
      - Importer et utiliser une data
      - Les composants et les « Prefabs »
      - Créer une scène simple
  - titre: Les matières (shaders et textures)
    points:
      - Définition du « shading PBR »
      - Créer une matière simple et comprendre les paramètres clés
      - Découverte du « Shader Graph »
      - Créer et utiliser un shader personnalisé
  - titre: Gérer l’éclairage d’une scène
    points:
      - Générer de la lumière dans une scène
      - Le post-processing
      - Créer un environnement d’extérieur (soleil et ciel)
      - Illumination temps réel vs illumination statique
  - titre: Principes fondamentaux de la programmation en C#
    points:
      - Choisir et relier un IDE à Unity
      - Définition de la programmation orientée objet
      - Règles de syntaxe pour la programmation en C#
      - La classe « MonoBehaviour » et le debugging
  - titre: Interfaces utilisateur et interactions
    points:
      - Introduction aux interfaces utilisateurs et système « uGUI »
      - Construire une interface en jeu à partir d’un « Canvas »
      - Optimisation des interfaces
      - Système « UI Toolkit » et outil « UI Builder »
  - titre: Animer des objets (avec ou sans code)
    points:
      - Système « Animator » et « Animator Controller »
      - « NavMesh » et « NavMesh Agent »
      - Créer une cinématique avec l’outil « Timeline »
      - Animer des transformations en code avec DOTween
  - titre: Construire une application dans Unity
    points:
      - Introduction à l’utilisation du « Profiler »
      - Construire un exécutable (Build)
      - Contrôle des connaissances final

# Modalités propres à la formation (les autres sont des textes fixes)
formateur: matthieu-juguet # fiche : Matthieu JUGUET · Infographiste 3D, artiste technique et formateur
# fiche, parcours du formateur : Formateur depuis 2021 : conception et animation de parcours pour adultes
# fiche, parcours du formateur : Gestion de projets 3D et intégration d’IA en production depuis 2019
# fiche, parcours du formateur : Certification de formateur pour adultes (Cegos, 2023) · Master en gestion de projets multimédia

# Visuel de couverture
visuel: ./visuels/fondamentaux-integration-temps-reel-unity.webp
visuelAlt: Cube portant le logo de Unity posé sur un sol quadrillé sombre, entouré de blocs gris.

# Site uniquement
statut: Dates à convenir
enAvant: false
ordre: 0
---

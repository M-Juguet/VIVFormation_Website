---
# Identité documentaire, commune à la fiche (-PRO), au déroulé (-DP) et au support (-SU)
reference: PRC04 # fiche : PRC04-PRO • Révisé le : octobre 2026 • Version : 26v01 • Déclaration d'activité : 11923083592
version: 26v01
revision: 2026-10-05

# Présentation
titre: 'Matériaux et rendu dans Blender : les fondamentaux'
titreCourt: Matériaux et rendu dans Blender
sousTitre: Créez des matières PBR réalistes, éclairez vos modèles en studio et produisez des rendus haute fidélité avec EEVEE et Cycles dans Blender.

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
  - Maîtriser la navigation 3D et les manipulations d’objets de base dans Blender
equipement: # non fourni par VIV ; champ absent = équipement fourni par VIV
  - Blender 5.2 ou supérieur installé
  - Ordinateur personnel
# materielFourni: [Matériel fourni par VIV] # seulement si VIV fournit l'équipement

# Objectifs et compétences
objectifs:
  - Créer des matières réalistes avec le shader universel PBR (Principled BSDF)
  - Appliquer des textures efficacement via des méthodes de mapping simplifiées
  - Utiliser l’éditeur de nœuds pour enrichir visuellement les surfaces
  - Mettre en scène ses modèles avec un éclairage studio professionnel
  - Produire des rendus haute fidélité en optimisant le workflow EEVEE/Cycles
competences:
  - libelle: Créer et ajuster des matériaux PBR réalistes dans l’éditeur de nœuds
    objectifs: [1, 3]
  - libelle: Texturer rapidement des modèles, avec ou sans dépliage UV
    objectifs: [2]
  - libelle: Éclairer et mettre en scène un modèle en studio ou par HDRI
    objectifs: [4]
  - libelle: Produire et finaliser des visuels haute définition avec EEVEE et Cycles
    objectifs: [5]

# Programme détaillé : une partie par bloc, sans durée
programme:
  - titre: Fondamentaux du shading & lookdev
    points:
      - Maîtrise du shader universel Principled BSDF pour la création de matières physiques réalistes (PBR)
      - 'Création de finitions industrielles types : métaux brossés, plastiques techniques, verre et textures mates'
      - Manipulation intuitive de l’éditeur de nœuds (Shader Editor) pour enrichir les propriétés de surface
      - Utilisation des nœuds de réglages (couleur, contraste) pour ajuster ses textures en temps réel
      - Introduction aux masques de rendu simples pour simuler l’usure naturelle ou la poussière
  - titre: Texturage agile & gestion simplifiée des UVs
    points:
      - Méthodes rapides de dépliage UV automatisé pour les objets complexes (Smart UV Project)
      - Utilisation de textures sans raccord (seamless) via les projections triplanaires (workflow sans UV)
      - Compréhension du « Mapping » pour ajuster l’échelle, la répétition et l’orientation des motifs
      - Techniques d’habillage rapide pour les géométries denses sans intervention manuelle lourde
      - Constitution et gestion d’une bibliothèque de matériaux (Asset Browser) personnalisée
  - titre: Mise en lumière & méthodes de rendu
    points:
      - 'Workflow hybride : utilisation d’EEVEE pour le lookdev interactif et de Cycles pour le rendu final photoréaliste'
      - Techniques d’éclairage de studio pour la mise en valeur des formes et des états de surface (CMF)
      - Exploitation des environnements HDRI pour un éclairage global naturel et cohérent
      - 'Paramétrage optimal des moteurs : rapidité du temps réel vs fidélité physique du Raytracing'
      - 'Réglages de la caméra physique : focales, profondeur de champ et mise au point artistique'
  - titre: Post-production & finalisation de l’image
    points:
      - 'Retouche interactive de l’image (Compositing) : gestion de l’exposition, du bloom et des contrastes'
      - Utilisation des passes de rendu simples pour isoler et affiner certains effets visuels
      - Optimisation des réglages pour des sorties d’image haute définition prêtes pour l’impression ou le web
      - 'Atelier final : réalisation d’une série de visuels « beauté » sur un projet de synthèse'

# Modalités propres à la formation (les autres sont des textes fixes)
formateur: matthieu-juguet # fiche : Matthieu JUGUET · Infographiste 3D, artiste technique et formateur
# fiche, parcours du formateur : Formateur depuis 2021 : conception et animation de parcours pour adultes
# fiche, parcours du formateur : Gestion de projets 3D et intégration d’IA en production depuis 2019
# fiche, parcours du formateur : Certification de formateur pour adultes (Cegos, 2023) · Master en gestion de projets multimédia

# Visuel de couverture : 16:9, 1920 × 1080 px, dans ./visuels/
visuel: ./visuels/materiaux-rendu-blender-fondamentaux.jpg
visuelAlt: Logo Blender entouré d’objets 3D en verre et en métal.
visuelIA: Gemini (NanoBanana)

# Site uniquement
statut: Dates à convenir
enAvant: false
ordre: 0
---

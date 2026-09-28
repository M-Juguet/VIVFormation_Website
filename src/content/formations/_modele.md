---
# Modèle de fichier formation : copier sous src/content/formations/<slug>.md (sans « _ »), puis
# remplacer chaque valeur. Règles complètes : docs/format-formation.md. Le corps reste vide.

# Identité documentaire, commune à la fiche (-PRO), au déroulé (-DP) et au support (-SU)
reference: IAG01 # code du domaine (src/data/domaines.yaml) + deux chiffres
version: 26v01 # AAvNN
revision: 2026-09-25

# Présentation
titre: Titre de la formation
titreCourt: Titre court # 40 caractères au plus
sousTitre: Une phrase complète qui décrit la formation, en 180 caractères et 30 mots au plus.

# Classement (site)
type: module # id de src/data/types.yaml
domaine: ia-generative # id de src/data/domaines.yaml
outils: [] # id de src/data/outils.yaml, outil principal en premier

# Bandeau de repères
niveau: Débutant # Débutant | Intermédiaire | Confirmé | Tous profils
duree: { heures: 14, jours: 2 }
tarif: 1000 # inter-entreprises, € HT par personne ; absent = sur devis
public: # 1 à 4
  - Premier public visé
prerequis: # 1 à 4
  - Premier prérequis
equipement: # 1 à 4, non fourni par VIV ; supprimer le champ si VIV fournit l'équipement
  - Logiciel et version installés
# materielFourni: [Matériel fourni par VIV] # seulement si VIV fournit l'équipement

# Objectifs et compétences
objectifs: # 3 à 8, verbe observable à l'infinitif ; numérotés dans l'ordre
  - Identifier …
  - Réaliser …
  - Produire …
competences: # 3 à 6, avec les numéros des objectifs qui y mènent
  - libelle: Première compétence visée
    objectifs: [1]
  - libelle: Deuxième compétence visée
    objectifs: [2]
  - libelle: Troisième compétence visée
    objectifs: [3]

# Programme détaillé : une partie par module du déroulé, sans durée
programme:
  - titre: Titre de la partie # 55 caractères au plus
    points: # 3 à 6, 180 caractères au plus
      - Premier point
      - Deuxième point
      - Troisième point

# Modalités propres à la formation (les autres sont des textes fixes)
formateur: matthieu-juguet # id de src/data/formateurs.yaml ; supprimer le champ si non fixé

# Visuel de couverture (facultatif) : 16:9, 1920 × 1080 px au moins, dans ./visuels/
# visuel: ./visuels/<slug>.jpg
# visuelAlt: Ce que l’image montre # obligatoire avec un visuel
# visuelCredit: Auteur ou provenance
# visuelIA: Outil d’IA # si l’image est produite ou retouchée par une IA : « Image générée avec … »

# Site uniquement
statut: Dates à convenir # | Session confirmée | Session reportée
enAvant: false
ordre: 0
---

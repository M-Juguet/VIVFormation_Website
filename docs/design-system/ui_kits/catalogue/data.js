/* Catalogue de démonstration — contenu de maquette, conforme au modèle à trois dimensions :
   un tag outil (deux au maximum), exactement un domaine, exactement un type. */
window.VIV_DATA = {
  domaines: ['Préparation de données 3D', '3D précalculée', '3D temps réel', 'Graphisme 2D', 'IA générative'],
  outils: ['Blender', 'Unreal Engine', 'VRED', 'Unity', 'Illustrator', 'ComfyUI'],
  types: ['Module', 'Parcours pipeline', 'Sensibilisation'],
  formations: [
    {
      id: 'blender-modelisation',
      type: 'Module', domaine: '3D précalculée', outils: ['Blender'], icone: 'outil-blender',
      titre: 'Blender : modélisation et rendu',
      resume: "Modéliser un objet complet, le texturer et le rendre en PBR, à partir d'un fichier d'exercice.",
      duree: '21 heures — 3 jours', groupe: '3 à 8 participants', niveau: 'Débutant',
      prix: '1 400 €', statut: 'Dates à convenir',
      version: 'Blender 5.2 LTS',
      chapo: "Vous modélisez un objet complet dès le premier jour, puis vous le dépliez, le texturez et le rendez en rendu physiquement réaliste (PBR). Le module se tient sur vos postes, avec vos fichiers d'exercice installés la veille.",
      objectifs: [
        "Modéliser un objet à partir d'une référence cotée, en géométrie propre",
        "Déplier les UV d'un modèle simple et y appliquer une texture sans étirement",
        'Éclairer une scène en trois sources et contrôler son exposition',
        'Lancer un rendu en PBR et corriger le bruit résiduel'
      ],
      etapes: [
        { titre: 'Cadrage préalable', meta: '1 heure — entretien téléphonique', corps: "Nous relevons vos postes, vos versions installées et le type d'objet que vous produisez." },
        { titre: 'Journée 1 — modélisation', meta: '7 heures — présentiel', corps: 'Géométrie, modificateurs, contrôle de la topologie.' },
        { titre: 'Journée 2 — UV et texture', meta: '7 heures — présentiel', corps: 'Dépliage, couture des arêtes, matériaux PBR.' },
        { titre: 'Journée 3 — éclairage et rendu', meta: '7 heures — présentiel', corps: 'Trois sources, exposition, réduction du bruit, export.' },
        { titre: 'Suivi', meta: '1 heure — entretien téléphonique', corps: 'Deux semaines après la session, sur vos premiers fichiers de production.' }
      ],
      prerequis: [
        { label: 'Système', value: 'Windows 11 ou macOS 14' },
        { label: 'Carte graphique', value: '8 Go de VRAM' },
        { label: 'Mémoire vive', value: '16 Go' },
        { label: 'Fichiers de travail', value: 'C:\\Viv\\exercices', mono: true },
        { label: 'Licence', value: 'Aucune — Blender est libre' }
      ],
      note: "Les droits d'installation sur les postes dépendent de votre service informatique : prévoyez la validation avant la première journée.",
      maj: 'Fiche mise à jour le 3 septembre 2026'
    },
    {
      id: 'unreal-temps-reel',
      type: 'Module', domaine: '3D temps réel', outils: ['Unreal Engine'], icone: 'outil-unreal',
      titre: 'Unreal Engine : première scène interactive',
      resume: 'Assembler une scène jouable, la peupler et en contrôler la lumière.',
      duree: '28 heures — 4 jours', groupe: '3 à 6 participants', niveau: 'Intermédiaire',
      prix: '1 950 €', statut: 'Session confirmée'
    },
    {
      id: 'vred-dataprep',
      type: 'Parcours pipeline', domaine: 'Préparation de données 3D', outils: ['VRED', 'Blender'], icone: 'outil-vred',
      titre: 'VRED : préparer une donnée CAO pour la revue',
      resume: 'Assainir, alléger et convertir un maillage CAO jusqu’à une scène de revue exploitable.',
      duree: '35 heures — 5 jours', groupe: '3 à 5 participants', niveau: 'Confirmé',
      prix: '2 600 €', statut: 'Dates à convenir'
    },
    {
      id: 'unity-application',
      type: 'Module', domaine: '3D temps réel', outils: ['Unity'], icone: 'outil-unity',
      titre: 'Unity : application de configuration produit',
      resume: 'Construire une application de configuration simple et la déployer sur poste.',
      duree: '21 heures — 3 jours', groupe: '3 à 6 participants', niveau: 'Intermédiaire',
      prix: '1 400 €', statut: 'Dates à convenir'
    },
    {
      id: 'illustrator-mise-au-net',
      type: 'Module', domaine: 'Graphisme 2D', outils: ['Illustrator'], icone: 'outil-illustrator',
      titre: 'Illustrator : tracer et mettre au net',
      resume: 'Tracer, mettre au net et composer une planche vectorielle exportable.',
      duree: '14 heures — 2 jours', groupe: '3 à 8 participants', niveau: 'Débutant',
      prix: '980 €', statut: 'Session reportée'
    },
    {
      id: 'ia-generative-reflexes',
      type: 'Sensibilisation', domaine: 'IA générative', outils: [], icone: 'sparkles',
      titre: 'IA générative : ce qu’elle produit, ce qu’il faut vérifier',
      resume: "Comprendre ce qu'un modèle produit, ce qu'il coûte en temps de vérification et ce qu'il ne faut pas lui confier.",
      duree: '7 heures — 1 jour', groupe: '4 à 12 participants', niveau: 'Tous profils',
      prix: '520 €', statut: 'Dates à convenir'
    }
  ]
};

/* Page d'accueil — contenu de maquette, conforme aux règles de contenu de VIV Formation :
   pas d'inscription, pas de session au calendrier, pas de mention de certification.
   ATTENTION — les trois `image` sont les visuels provisoires du test de refonte (banque d'images
   Unsplash). Le système les proscrit en production : à remplacer par des rendus ou des captures
   de fichiers d'exercice VIV Formation. Le `visuel` sert de texte de repli si l'image manque. */
window.VIV_HOME = {
  domaines: [
    { nom: 'Préparation de données 3D', icone: 'domaine-dataprep', texte: 'Assainir, alléger et convertir une donnée CAO pour la rendre exploitable en aval.' },
    { nom: '3D précalculée', icone: 'domaine-precalcule', texte: 'Produire une image calculée à partir d’une scène 3D : modélisation, texture, lumière, rendu.' },
    { nom: '3D temps réel', icone: 'domaine-temps-reel', texte: 'Construire une application ou une expérience interactive et la déployer sur poste.' },
    { nom: 'Graphisme 2D', icone: 'domaine-graphisme-2d', texte: 'Tracer, mettre au net et composer une image vectorielle ou matricielle.' },
    { nom: 'IA générative', icone: 'sparkles', texte: 'Faire produire à un modèle, et vérifier ce qu’il produit avant de s’en servir.' }
  ],
  formations: [
    {
      overline: 'Module · 3D précalculée', titre: 'Blender : modélisation et rendu', icone: 'outil-blender',
      resume: 'Modéliser un objet complet, le texturer et le rendre en PBR, à partir d’un fichier d’exercice.',
      duree: '21 heures — 3 jours', groupe: '3 à 6 participants', prix: '1 400 €',
      outils: ['Blender'], statut: 'Dates à convenir',
      visuel: "Rendu d'un fichier d'exercice — modélisation Blender",
      image: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?q=80&w=800&auto=format&fit=crop'
    },
    {
      overline: 'Module · 3D temps réel', titre: 'Unreal Engine : première scène interactive', icone: 'outil-unreal',
      resume: 'Assembler une scène jouable, la peupler et en contrôler la lumière.',
      duree: '28 heures — 4 jours', groupe: '3 à 6 participants', prix: '1 950 €',
      outils: ['Unreal Engine'], statut: 'Session confirmée',
      visuel: "Capture d'une scène d'exercice Unreal Engine",
      image: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=800&auto=format&fit=crop'
    },
    {
      overline: 'Sensibilisation · IA générative', titre: 'IA générative : ce qu’elle produit, ce qu’il faut vérifier', icone: 'sparkles',
      resume: 'Comprendre ce qu’un modèle produit, ce qu’il coûte en temps de vérification et ce qu’il ne faut pas lui confier.',
      duree: '7 heures — 1 jour', groupe: '4 à 12 participants', prix: '520 €',
      outils: [], statut: 'Dates à convenir',
      visuel: "Planche d'exercice — sorties d'un modèle génératif",
      image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=800&auto=format&fit=crop'
    }
  ],
  solutions: [
    { titre: 'Dans vos locaux', icone: 'map-pin', texte: 'La session se tient sur vos postes, avec vos versions installées et vos fichiers de travail. Présentiel, toujours.' },
    { titre: 'Ajustée après cadrage', icone: 'target', texte: 'Un entretien d’une heure avant la session : vos postes, ce que vous produisez, ce qui doit être opérationnel après. Le déroulé s’ajuste là-dessus.' }
  ]
};

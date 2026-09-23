/* Module web de démonstration — contenu de maquette. Les captures sont des cadres vides :
   toute image réelle vient des fichiers d'exercice de VIV Formation, jamais d'une session. */
window.VIV_MODULE = {
  titre: 'Blender : modélisation et rendu',
  module: 'Module 3 — texture',
  ecrans: [
    {
      type: 'lecon',
      overline: 'Leçon 1 sur 3',
      titre: 'Déplier les UV sans étirement',
      corps: [
        "Un dépliage se juge sur la grille de contrôle : si les carreaux gardent la même taille sur toute la surface, la texture ne s'étire pas. Vous posez donc les coutures avant de déplier, pas après.",
        'Marquez les arêtes qui suivent une rupture de forme, puis dépliez et vérifiez la grille avant de sortir de la vue UV.'
      ],
      chemin: 'UV > Mark Seam',
      raccourci: ['U'],
      figure: "Éditeur UV après couture des arêtes",
      legende: "La grille de contrôle : des carreaux réguliers signalent un dépliage utilisable."
    },
    {
      type: 'quiz',
      overline: 'Vérification',
      titre: 'Sur quoi se juge un dépliage ?',
      options: [
        { texte: 'Sur le nombre d’îlots UV', bon: false, retour: 'Le nombre d’îlots dépend de la forme : il ne dit rien de l’étirement.' },
        { texte: 'Sur la régularité de la grille de contrôle', bon: true, retour: 'Des carreaux de taille constante signalent une texture qui ne s’étire pas.' },
        { texte: 'Sur le temps de calcul du rendu', bon: false, retour: 'Le rendu n’est pas concerné : le dépliage se vérifie dans la vue UV.' }
      ]
    },
    {
      type: 'fin',
      overline: 'Fin du module 3',
      titre: 'Ce que vous savez faire maintenant',
      acquis: [
        'Poser les coutures sur une rupture de forme',
        'Déplier un modèle simple et lire la grille de contrôle',
        'Corriger un étirement local sans tout redéplier'
      ]
    }
  ]
};

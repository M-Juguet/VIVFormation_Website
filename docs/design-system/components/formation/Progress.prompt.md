Barre d'avancement d'un module web : où en est le participant dans un parcours, une leçon ou un quiz.

    <Progress value={2} total={5} steps hint="Module 3 — texture" />
    <Progress value={64} />

**Props** — `steps` affiche « Étape 2 sur 5 » ; sinon le pourcentage. `label` remplace le texte calculé, `hint` donne le contexte à droite.

**À éviter** — Animer la couleur de la barre (seule la largeur bouge). Faire dépendre une information du mouvement.

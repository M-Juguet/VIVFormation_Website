# UI kit — module web de formation

Recréation d'un module de formation en ligne, la surface où le mouvement du système sert vraiment. Reprend les règles du brand book : une seule figure de transition entre écrans (fondu + 8 px, 200 ms, vers la gauche à l'avance, vers la droite au retour — classes `viv-enter` / `viv-enter viv-enter--back`), `Progress` qui anime sa largeur et jamais sa couleur, correction de quiz qui apparaît en 200 ms et **reste** écrite.

**Trois écrans, cliquables** (`index.html`) :

1. **Leçon** — titre en `display-md`, texte en `body-lg`, chemin de menu en `code`, raccourci en `Kbd`, capture en `Figure`.
2. **Quiz** — trois réponses, correction en `Callout` `success` / `warning`, bonne réponse toujours écrite en clair.
3. **Fin de module** — acquis en `ObjectivesPanel`, badges de validation.

**Fichiers** — `module-data.js` (contenu de maquette), `ModuleScreens.jsx` (en-tête de progression et les trois écrans).

C'est le participant qui règle le rythme : aucun écran n'avance seul, aucune vidéo ne démarre d'elle-même, aucune apparition déclenchée par le défilement dans du texte pédagogique.

# UI kit — page d'accueil du site

Fusion de la maquette de refonte proposée par VIV Formation et des règles du design system. Ce que la maquette apportait, ce que le système impose :

**Repris de la maquette** — le rythme de bandes : sombre en haut (barre de navigation, hero), clair au milieu pour ce qui compte (domaines, catalogue), bande de dégradé en charnière, sombre en bas (contact, pied de page). Les cartes en verre dépoli. Le jaune de marque comme couleur d'appel sur fond sombre.

**Repris du design system** — toutes les couleurs viennent des tokens : une bande sombre est une section portant `data-theme="sombre"`, jamais un `#hex` écrit en dur, ce qui repeint cartes, boutons et champs et garantit les contrastes. Titres en Playfair Display Bold Italic, sous-titres en Noto Sans italique gras, aucun gras droit. Icônes Lucide du composant `Icon`, jamais Font Awesome ni le logo d'un éditeur. Logo officiel (variante blanche sur les bandes sombres, monogramme au pied). Survol : `shadow-sm` → `shadow-md`, pas de lift ni de mise à l'échelle. Dégradé horizontal uniquement.

**Règles assouplies à cette occasion** (voir readme racine) — le dégradé de marque peut porter du texte, en `ink-on-pastel`, et apparaître plusieurs fois par page ; le verre dépoli entre au système avec `.viv-glass` et ses trois tokens. Le verre n'est employé que là où quelque chose passe dessous : sur l'aplat sombre du hero, sur la bande de dégradé, sur la bande sombre du contact.

**Contenu adapté** — la maquette disait « Réservez votre place », « formateurs certifiés », affichait un badge « Top » et des photos de banque. Tout cela contredit les règles de contenu : le kit dit « Demander des dates » et « Demander un devis », affiche les statuts autorisés, ne mentionne ni certification ni CPF, et n'utilise aucune photographie — les `Figure` sont des cadres légendés en attendant des visuels issus des fichiers d'exercice.

**Visuels des cartes** — les trois cartes du catalogue portent, à titre provisoire, les images de banque du test de refonte (Unsplash), passées en `image` dans `home-data.js`. Le système les proscrit en production : elles sont à remplacer par des rendus ou des captures de fichiers d'exercice VIV Formation. Retirer la ligne `image` d'une formation fait réapparaître le cadre légendé (`visuel`).

**Fichiers** — `home-data.js` (contenu de maquette), `HomeChrome.jsx` (barre de navigation, pied de page), `HomeSections.jsx` (hero, domaines, catalogue, organisation, contact).

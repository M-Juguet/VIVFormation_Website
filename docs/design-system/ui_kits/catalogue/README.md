# UI kit — site public

Recréation du site public, alignée sur la page d'accueil (`ui_kits/site-accueil/`) : **même rythme de bandes** — barre de navigation et en-tête de page en sombre (`data-theme="sombre"` posé sur la section), contenu qui compte en clair sur `surface`, demande de dates en bande sombre — **mêmes cartes de formation avec visuel**, **même verre dépoli** là où quelque chose passe dessous (panneau de filtres, carte d'organisation, formulaire), même barre de navigation et même pied de page. Cartes `surface-raised` + `border` + `shadow-sm`, un seul bouton `action` plein par bloc, les autres en secondaire ou en fantôme, filet de dégradé de 4 px sous l'en-tête.

**Trois écrans, cliquables** (`index.html`) :

1. **Catalogue** — bande sombre avec le titre de page et le panneau de filtres en verre dépoli (domaine / outil / type, le modèle à trois dimensions du brand book), puis bande claire avec la grille : `ModuleCard` à visuel 16:9, repère d'outil en pastille sur l'angle de l'image, badges dans l'ordre invariable (outil, modalité, statut), tarif et « Voir la fiche ».
2. **Fiche programme** — bande sombre d'identité (type et domaine, titre, badges, chapô) avec la carte d'organisation, le tarif et les actions en verre dépoli ; puis bande claire pour le contenu pédagogique, dans l'ordre prescrit : `ObjectivesPanel`, `ProgramSteps`, `SoftwareRequirements`, `Figure`, `TrainerCard`, date de mise à jour en `caption`, avec une colonne latérale collante (modalités, financement).
3. **Demande de dates** — bande sombre, formulaire `Field` en verre dépoli avec aide et erreur, confirmation en `Callout`, rappel de ce que VIV Formation ne fait pas (pas de CPF, pas de distanciel, pas de session au calendrier).

**Fichiers** — `data.js` (contenu de maquette : six formations couvrant les cinq domaines et les trois types), `SiteChrome.jsx` (en-tête, pied), `CatalogueScreen.jsx`, `FicheScreen.jsx`, `DemandeScreen.jsx`.

Le contenu est une maquette : aucun tarif, nom ou témoignage réel. Les images sont des cadres `Figure` vides légendés — aucune photo de session n'existe ni ne peut exister.

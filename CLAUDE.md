# VIV Formation — Site web

Site vitrine statique (Astro + Markdown + Tailwind v4) pour l'organisme de formation VIV Formation. Voir README.md pour la structure et la gestion du contenu.

## Design system — à respecter

- La charte fait foi : `docs/design-system/readme.md` (skill projet `viv-formation-design`). La lire avant tout travail visuel ou rédactionnel.
- `src/design-system/` est une copie non modifiée du design system : ne pas l'éditer ; les ajustements propres au site vont dans `src/styles/global.css`.
- Typographie par les classes du design system (`display-lg`, `heading-md`, `body`, `overline`, `caption`…). Pas de tailles ni de graisses Tailwind (retirées du thème) ; jamais de gras droit.
- Couleurs par les tokens (`bg-surface`, `text-ink-muted`, `text-action`…). Bande sombre = `data-theme="sombre"` sur la section, jamais de couleurs en dur.
- Mise en page par les classes du design system (`viv-wrap`, `viv-section`, `viv-split--*`, `viv-grid-cards`, `viv-form-grid`) ; Tailwind pour l'ajustement (espacements, flex, grid).
- Composants : utiliser ceux de `src/components/ds/` (portages Astro des composants React de `docs/design-system/components/`). Un seul bouton `primary` par bloc.
- Icônes : `Icon` (tracés Lucide de `src/components/ds/icons.ts`) ; jamais de logo d'éditeur ni d'emoji.

## Contenu

- Contenu et interface en **français**, vouvoiement, casse phrase.
- Jamais : CPF, sessions au calendrier / « S'inscrire », distanciel, Qualiopi.
- Formations : `src/content/formations/*.md` (corps = chapô). Classements : `src/data/*.yaml`. Schémas : `src/content.config.ts`. Mise en forme (durée, tarif, déroulé) : `src/lib/formations.ts`.
- Les formations `provisoire: true` sont des exemples à remplacer.

## Technique

- Site 100 % statique : pas d'adapter serveur. Interactions (filtres du catalogue, formulaire, tiroir mobile) en scripts vanilla dans les composants.
- Formulaire : JSON vers le webhook n8n `PUBLIC_N8N_CONTACT_WEBHOOK_URL`.
- Avant de livrer : `npm run format` puis `npm run build` (inclut `astro check`).

@AGENTS.md

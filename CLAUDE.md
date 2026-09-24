# VIV Formation — Site web

Site vitrine statique (Astro + Markdown + Tailwind v4) pour l'organisme de formation VIV Formation. Voir README.md pour la structure et la gestion du contenu.

## Design system — à respecter

- La charte fait foi : `docs/design-system/readme.md` (skill projet `viv-formation-design`). La lire avant tout travail visuel ou rédactionnel.
- `src/design-system/` est une copie non modifiée du design system : ne pas l'éditer ; les ajustements propres au site vont dans `src/styles/global.css`.
- Typographie par les classes du design system (`display-lg`, `heading-md`, `body`, `overline`, `caption`…). Pas de tailles ni de graisses Tailwind (retirées du thème) ; jamais de gras droit.
- Thème Tailwind restreint au design system : ni palette ni ombres (`shadow-*`) par défaut ; ruptures `sm` 600 / `md` 900 / `lg` 1180 px. Une classe absente du thème ne produit rien, sans erreur.
- Couleurs par les tokens (`bg-surface`, `text-ink-muted`, `text-action`…). Bande sombre = `data-theme="sombre"` sur la section, jamais de couleurs en dur.
- Mise en page par les classes du design system (`viv-wrap`, `viv-section`, `viv-split--*`, `viv-grid-cards`, `viv-form-grid`) ; Tailwind pour l'ajustement (espacements, flex, grid).
- Composants : utiliser ceux de `src/components/ds/` (portages Astro des composants React de `docs/design-system/components/`). Un seul bouton `primary` par bloc.
- Icônes : `Icon` (tracés Lucide de `src/components/ds/icons.ts`) ; jamais de logo d'éditeur ni d'emoji.

## Contenu

- Contenu et interface en **français**, vouvoiement, casse phrase.
- Jamais : CPF, sessions au calendrier / « S'inscrire », distanciel, Qualiopi.
- Formations : `src/content/formations/*.md` ou `.mdx` (corps = chapô). Classements : `src/data/*.yaml`. Schémas : `src/content.config.ts`. Mise en forme (durée, tarif, déroulé) : `src/lib/formations.ts`.
- Les formations `provisoire: true` sont des exemples à remplacer.
- Autres valeurs provisoires, à ne pas reprendre comme réelles : le domaine `site` (`astro.config.mjs`) et `declarationActivite` (`src/config/site.ts`).

## Technique

- Site 100 % statique : pas d'adapter serveur. Interactions (filtres du catalogue, formulaire, tiroir mobile) en scripts vanilla dans les composants.
- Serveur de dev : configuration `astro-dev` de `.claude/launch.json` (aperçu de l'app Claude), à la place du `astro dev --background` d'AGENTS.md. Un seul serveur à la fois (Astro pose un verrou).
- Avant de livrer : `npm run format` puis `npm run build` (inclut `astro check`). La CI GitHub (`.github/workflows/ci.yml`) rejoue `format:check` et `build` à chaque push sur `main` et sur les PR.

## n8n

- Formulaire de contact : JSON vers le webhook `PUBLIC_N8N_CONTACT_WEBHOOK_URL` (charge utile décrite dans README.md).
- Les noms des champs envoyés et les valeurs de `sujet` (`CONTACT_SUBJECTS` dans `src/config/site.ts`) sont lus par les workflows n8n : tout changement doit être signalé pour mettre à jour le workflow, le build ne détecte pas la rupture.
- Les variables `PUBLIC_*` sont exposées dans le navigateur : jamais de secret ni de jeton.
- Nouveau webhook : variable `PUBLIC_N8N_<USAGE>_WEBHOOK_URL`, déclarée dans `.env.example` et `src/env.d.ts`.

## Git

- Messages de commit en français.
- Push directement sur `main`, sauf si une branche est explicitement demandée.

@AGENTS.md

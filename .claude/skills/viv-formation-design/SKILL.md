---
name: viv-formation-design
description: Charte graphique et éditoriale de VIV Formation (couleurs, typographie, logo, composants, règles d'écriture). À utiliser pour toute modification visuelle ou rédactionnelle du site.
---

Le design system VIV Formation est intégré au projet :

- **Charte (fait foi)** : `docs/design-system/readme.md` — le lire en entier avant de concevoir ou de rédiger. Le logo : `docs/design-system/logos.md`.
- **Cartes de fondations** : `docs/design-system/guidelines/*.card.html` (couleurs, type, espacement, mobile, mouvement, marque).
- **Composants de référence** : `docs/design-system/components/**` (`.prompt.md` = quand et comment l'utiliser, `.d.ts` = props, `.jsx` = balisage d'origine). Leurs portages Astro sont dans `src/components/ds/`.
- **UI kits** : `docs/design-system/ui_kits/` (catalogue, accueil, module web).
- **Fichiers runtime** : `src/design-system/` (tokens CSS, `components.css`, fontes) — copie non modifiée, importée par `src/styles/global.css`.
- **Logos** : `public/logos/*.svg`, via le composant `src/components/ds/Logo.astro`.

La marque écrit en français : tout ce qui est produit pour elle doit l'être aussi.

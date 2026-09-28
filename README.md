# VIV Formation — Site web

Site vitrine statique de l'organisme de formation professionnelle **VIV Formation** : accueil, catalogue filtrable, fiches formation détaillées et formulaire de contact relié à n8n.

**Stack :** [Astro](https://astro.build) · Markdown (content collections) · [Tailwind CSS v4](https://tailwindcss.com) · design system VIV Formation · GitHub · n8n

## Démarrage

Prérequis : Node.js 24, la version de la CI (`.nvmrc`) ; 22.12 au minimum (`engines` de `package.json`).

```bash
npm install
cp .env.example .env   # puis renseigner l'URL du webhook n8n
npm run dev            # http://localhost:4321
```

| Commande          | Action                                                 |
| ----------------- | ------------------------------------------------------ |
| `npm run dev`     | Serveur de développement                               |
| `npm run build`   | Vérification des types (`astro check`) + build `dist/` |
| `npm run preview` | Prévisualisation du build                              |
| `npm run format`  | Formatage Prettier (Astro + tri des classes Tailwind)  |

## Structure

```
docs/design-system/          # Référence du design system (charte, cartes, composants React d'origine, UI kits, gabarits)
docs/format-formation.md     # Format du fichier formation (champs, règles, correspondance avec les documents)
public/logos/                # Les 8 logos SVG de la marque (favicon = submark noir)
src/
├── design-system/           # Design system « runtime », copié tel quel : tokens, composants CSS, fontes
├── styles/global.css        # Tailwind + import du design system + pont @theme
├── components/
│   ├── ds/                  # Composants du design system portés en Astro (Button, Badge, ModuleCard…)
│   ├── SiteHeader.astro     # En-tête collant + tiroir mobile
│   ├── SiteFooter.astro
│   ├── FormationCard.astro  # ModuleCard alimentée par une formation
│   ├── ContactForm.astro    # Formulaire → webhook n8n
│   ├── BarreFormation.astro      # Fiche formation : barre collante (sections, tarif, action)
│   ├── ObjectifsFormation.astro  #   objectifs reliés aux compétences visées
│   ├── ProgrammeFormation.astro  #   programme détaillé en frise
│   ├── EvaluationFormation.astro #   évaluation et validation (textes fixes)
│   ├── ModalitesFormation.astro  #   déroulement : méthodes, animation, accessibilité (textes fixes)
│   ├── FormateurFormation.astro  #   qui anime (section affichée si la formation désigne un formateur)
│   ├── OrganiserFormation.astro  #   tarifs, délais d'accès, équipement à prévoir (textes fixes)
│   ├── PageJuridique.astro  # Gabarit des mentions légales et des CGV
│   └── CoverMotif.astro     # Motif de couverture de la marque
├── config/site.ts           # Coordonnées, navigation, motifs de contact, textes partagés
├── content.config.ts        # Schémas : formations, classements, pages juridiques
├── content/formations/      # 1 fichier .md = 1 formation (_modele.md : modèle à copier), visuels/ : visuels de couverture
├── content/legal/           # Textes des mentions légales et des CGV (PageJuridique.astro)
├── data/                    # Classements (domaines, outils, types) et formateurs (YAML)
├── lib/formations.ts        # Accès au contenu, contrôles croisés, mise en forme (durée, tarif…)
├── lib/donnees-yaml.ts      # Chargeur strict des classements (le build échoue sur un YAML invalide)
├── layouts/BaseLayout.astro
└── pages/                   # index, catalogue/, formations/[id], contact, mentions légales, CGV, 404
```

## Design system

La référence est `docs/design-system/readme.md` (charte complète : couleurs, typographie, règles d'écriture, logo, mobile). À lire avant toute évolution visuelle ou éditoriale.

**Intégration dans Astro + Tailwind**

- `src/design-system/` est une **copie non modifiée** du design system (tokens, `components.css`, fontes). Pour le mettre à jour, remplacer ces fichiers par ceux d'une nouvelle version.
- `src/styles/global.css` l'importe dans la couche CSS `components` : les classes du design system (`display-lg`, `body`, `overline`, `viv-wrap`, `viv-split--hero`, `viv-btn`, `viv-card`, `viv-glass`…) s'utilisent directement, et les utilitaires Tailwind peuvent les compléter.
- Le bloc `@theme` restreint Tailwind aux valeurs du design system :
  - couleurs = tokens (`bg-surface-brand`, `text-ink-muted`, `text-action`, `border-border`…), qui suivent automatiquement le thème sombre ;
  - rayons `rounded-sm|md|lg|xl|pill`, ruptures `sm` 600 / `md` 900 / `lg` 1180 px, polices `font-sans|display|mono` ;
  - **pas** de tailles de texte ni de graisses Tailwind : la typographie passe par les classes du design system (il n'existe pas de gras droit dans la charte) ;
  - l'espacement Tailwind (pas de 4 px) correspond à l'échelle `space-*` : `p-5` = 20 px.
- **Bandes sombres** : poser `data-theme="sombre"` sur une section (avec `bg-surface` ou `bg-surface-brand` et `text-ink`) ; cartes, boutons et champs se repeignent seuls.
- Les composants React d'origine (`docs/design-system/components/**/*.jsx`) sont portés en Astro dans `src/components/ds/`, avec le même balisage et les mêmes classes. Non portés pour l'instant (pas d'usage) : `Figure`, `TrainerCard`, `Kbd`, `Progress`.

## Gérer le contenu

### Classements (`src/data/`)

- **Domaine** (`domaines.yaml`) : le domaine d'expertise — Préparation de données 3D, 3D précalculée, 3D temps réel, Graphisme 2D, IA générative. Chaque domaine a sa carte sur l'accueil (`description`, `outilsTexte`) et structure le premier filtre du catalogue et la colonne « Formations » du pied de page. Son `code` préfixe la référence des formations (`IAG` → `IAG01`) : `DPP` (préparation de données 3D), `PRC` (3D précalculée), `TRL` (3D temps réel), `GPH` (graphisme 2D), `IAG` (IA générative).
- **Outil** (`outils.yaml`) : Blender, Unreal Engine, VRED, Unity, Illustrator, ComfyUI.
- **Type** (`types.yaml`) : Module, Parcours pipeline, Sensibilisation.
- **Formateur** (`formateurs.yaml`) : copie des fiches de `docs/design-system/templates/support-formation/formateurs.md`, qui fait foi (fonction, parcours, expertises par groupe de domaines, langues, portrait facultatif). La page d'une formation affiche les expertises du groupe de son domaine.

L'`id` de chaque entrée sert de slug dans les URLs et les filtres (`/catalogue/?domaine=3d-temps-reel&outil=unreal-engine`). Le champ `icone` désigne un repère du composant Icon (`src/components/ds/icons.ts`) ; jamais le logo d'un éditeur.

Ces fichiers sont lus par `src/lib/donnees-yaml.ts` : une erreur de syntaxe, un fichier vide, une entrée sans `id` ou un `id` en double font échouer `npm run build` (et donc la CI) avec la ligne en cause. Le chargeur `file` d'Astro, lui, se contentait d'un message dans le journal et publiait le site avec un classement vide.

### Ajouter une formation

Un fichier par formation, `src/content/formations/<slug>.md`, source unique de la page du site et de la fiche programme imprimable, et base du déroulé pédagogique et du support. Le nom du fichier devient l'URL `/formations/<slug>/` et ne change plus une fois publié.

Copier `src/content/formations/_modele.md`, puis remplir le frontmatter ; le corps reste vide. Les champs, leurs règles et les documents qui les utilisent sont décrits dans **`docs/format-formation.md`**. Le schéma de `src/content.config.ts` les valide : un champ manquant ou inconnu, un objectif ouvert par un verbe non observable (« maîtriser », « comprendre »…), une référence qui ne suit pas le code du domaine font échouer `npm run build`.

Les textes communs à toutes les formations (méthodes pédagogiques, évaluation, modalités d'animation, délais d'accès, accessibilité, sanction) ne sont pas dans le fichier : ils sont repris mot pour mot de la fiche programme dans les composants `src/components/ModalitesFormation.astro`, `EvaluationFormation.astro` et `OrganiserFormation.astro`.

### Règles d'écriture (extrait de la charte)

Vouvoiement ; casse phrase ; versions exactes ; durées écrites en toutes lettres ; aucun emoji. **Jamais** : CPF, sessions au calendrier ou « S'inscrire » (on écrit « Demander des dates » / « Demander un devis »), distanciel, « notre salle » (les formations se tiennent uniquement chez le client : « dans vos locaux »), mention Qualiopi. Tarifs au format « 1 900 € HT/pers. ».

## Formulaire de contact / n8n

`ContactForm` (accueil, page contact, fiche formation) envoie un `POST` JSON vers `PUBLIC_N8N_CONTACT_WEBHOOK_URL` :

```json
{
  "sujet": "dates",
  "entreprise": "…",
  "nom": "…",
  "email": "…",
  "telephone": "…",
  "formation": "Blender : modélisation et rendu",
  "message": "…",
  "page": "https://…",
  "sentAt": "2026-…"
}
```

`sujet` ∈ `dates` | `devis` | `information` | `dysfonctionnement`. Les paramètres d'URL `?sujet=` et `?formation=` pré-remplissent le formulaire. Le webhook doit autoriser l'origine du site (CORS) et répondre en 2xx.

# VIV Formation — Site web

Site vitrine statique de l'organisme de formation professionnelle **VIV Formation** : accueil, catalogue filtrable, fiches formation détaillées et formulaire de contact relié à n8n.

**Stack :** [Astro](https://astro.build) · Markdown (content collections) · [Tailwind CSS v4](https://tailwindcss.com) · design system VIV Formation · GitHub · n8n

## Démarrage

Prérequis : Node.js ≥ 22.12 (voir `.nvmrc`).

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
docs/design-system/          # Référence du design system (charte, cartes, composants React d'origine, UI kits)
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
│   └── CoverMotif.astro     # Motif de couverture de la marque
├── config/site.ts           # Coordonnées, navigation, motifs de contact, textes partagés
├── content.config.ts        # Schémas : formations, classements, pages juridiques
├── content/formations/      # 1 fichier .md = 1 formation
├── content/legal/           # Mentions légales, CGV (1 fichier .md = 1 page)
├── data/                    # Classements : domaines, outils, types (YAML)
├── lib/formations.ts        # Accès au contenu, mise en forme (durée, tarif…), déroulé
├── layouts/BaseLayout.astro
└── pages/                   # index, catalogue/, formations/[id], [legal], contact, 404
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

- **Domaine** (`domaines.yaml`) : le domaine d'expertise — Préparation de données 3D, 3D précalculée, 3D temps réel, Graphisme 2D, IA générative. Chaque domaine a sa carte sur l'accueil (`description`, `outilsTexte`) et structure le premier filtre du catalogue et la colonne « Formations » du pied de page.
- **Outil** (`outils.yaml`) : Blender, Unreal Engine, VRED, Unity, Illustrator, ComfyUI.
- **Type** (`types.yaml`) : Module, Parcours pipeline, Sensibilisation.

L'`id` de chaque entrée sert de slug dans les URLs et les filtres (`/catalogue/?domaine=3d-temps-reel&outil=unreal-engine`). Le champ `icone` désigne un repère du composant Icon (`src/components/ds/icons.ts`) ; jamais le logo d'un éditeur.

### Ajouter une formation

Créer `src/content/formations/<slug>.md` : le nom du fichier devient l'URL `/formations/<slug>/`. Le frontmatter porte les champs de la fiche, validés au build par `src/content.config.ts` ; le corps du fichier est le **chapô**.

```yaml
titre: 'Blender : modélisation et rendu'
resume: Une phrase pour la carte du catalogue.
type: module # id de types.yaml
domaine: 3d-precalculee # id de domaines.yaml
outils: [blender] # ids de outils.yaml, outil principal en premier ; [] = sans outil imposé
duree: { heures: 21, jours: 3 } # affiché « 21 heures — 3 jours »
niveau: Débutant # Débutant | Intermédiaire | Confirmé | Tous profils
participants: { min: 3, max: 6 }
tarif: 1400 # € net de taxe par participant (inter) ; absent = « Sur devis »
statut: Dates à convenir # | Session confirmée | Session reportée
objectifs: [...] # 3 à 6, à l'infinitif
programme: # une entrée par journée (autant que duree.jours)
  - { titre: modélisation, contenu: Géométrie, modificateurs, topologie. }
prerequis:
  version: Blender 5.2 LTS
  elements:
    - { libelle: Système, valeur: Windows 11 ou macOS 14 }
    - { libelle: Fichiers de travail, valeur: 'C:\Viv\exercices', code: true }
enAvant: true # affichée dans « Formations souvent demandées »
misAJour: 2026-09-03
```

Le **déroulé** affiché sur la fiche ajoute automatiquement le cadrage téléphonique avant les journées et le suivi après (textes dans `src/config/site.ts` → `DEROULE`). Champs facultatifs : `visuel` / `visuelAlt` (rendu ou capture d'un fichier d'exercice, remplace le cadre vide de la carte), `brouillon: true` (masquée en production), `ordre`.

> Les 4 formations actuelles sont des **exemples provisoires** (`provisoire: true`, badge « Exemple provisoire » à l'écran) repris de la maquette : à remplacer par les fiches réelles.

### Règles d'écriture (extrait de la charte)

Vouvoiement ; casse phrase ; versions exactes ; durées écrites en toutes lettres ; aucun emoji. **Jamais** : CPF, sessions au calendrier ou « S'inscrire » (on écrit « Demander des dates » / « Demander un devis »), distanciel, mention Qualiopi.

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

# VIV Formation — design system

VIV Formation est un organisme de formation professionnelle technique : images 2D et 3D (Blender, Unreal Engine, VRED, Unity, Illustrator) et IA générative appliquée au travail quotidien. Tout ce que le système produit — page web, fiche programme, livret, convention, proposition commerciale — doit se lire comme la même maison : une identité chaleureuse au service d'un contenu précis, où une version de logiciel et une configuration machine comptent autant qu'un titre.

**L'intention de la marque** : de la couleur, de la lumière naturelle, des scènes de vie — la dimension humaine au cœur de l'activité. Proximité, énergie, authenticité. Le ton est positif et direct ; la couleur et la lumière habillent, la sobriété porte l'information technique.

**Une contrainte absolue encadre tout cela** : les formations se déroulent souvent chez le client — studios de design automobile, ferroviaire, aéronautique, nautique — sur des projets confidentiels. Rien de ce qui se passe en session ne sort de la salle. L'humain et la chaleur de la marque passent par des images produites hors session, par le ton des textes et par la couleur, jamais par une photo prise sur place.

## Sources

Ce projet centralise un design system commencé dans un autre outil. Tout ce qui suit a été lu et repris depuis un dossier de code monté en lecture seule :

- `DesignSystem/` (dossier local monté par l'utilisateur) — brand book complet (`README.md`, 188 lignes), `tokens.css` et `tokens.json` (108 tokens), `components/bundle.js` et `components/bundle.css` (implémentations de référence), `components/index.d.ts` (contrats de props), un dossier par composant avec son `README.md` et sa `preview.html`, `manifest.json`, `assets/Logos/` (12 fichiers) et `fonts/` (5 fichiers).
- Aucune URL Figma, aucun dépôt GitHub, aucune présentation n'ont été fournis.
- Le brand book source cite une **planche de charte VIV Group** (proportions de la pastille, zone de protection, ligne « doux, amical, grands rayons ») dont le fichier n'était pas dans le dossier ; ses mesures relevées sont conservées telles quelles dans les composants.

Le lecteur de ce readme n'a pas forcément accès à ces sources : tout ce qui compte est recopié ici ou dans les fichiers du projet.

## Fondamentaux de contenu

Comment la marque écrit, repris du brand book source et appliqué dans tous les fichiers de ce projet.

- **Le nom s'écrit « VIV Formation »** : « VIV » en capitales, « Formation » avec une capitale initiale, sur une seule ligne. Jamais « VIV-FORMATION » ni « Viv formation » — le brand book source écrivait « Viv formation », orthographe corrigée depuis par l'organisme.
- **Vouvoiement.** « vous » pour la personne formée, « nous » pour VIV Formation. Évitez « l'apprenant » et « le stagiaire » dans les supports adressés ; gardez-les pour les documents administratifs où le vocabulaire réglementaire s'impose.
- **Objectifs à l'infinitif**, un verbe d'action par ligne, sur un résultat vérifiable au poste de travail : « Déplier les UV d'un modèle simple et y appliquer une texture sans étirement », jamais « Sensibilisation aux UV ».
- **Versions exactes.** « Blender 5.2 LTS », « Unreal Engine 5.7 ». Jamais « dernière version », jamais « Blender 4 ».
- **Termes techniques en toutes lettres à la première occurrence**, abréviation ensuite : « rendu physiquement réaliste (PBR) », « mémoire vidéo (VRAM) ». Les termes anglais du métier restent tels quels : *shader*, *prompt*, *pipeline*.
- **Casse phrase partout, titres compris.** Les capitales ne servent que dans `overline` (sur-titres, numéros de module) et pour les sigles (OPCO, GPU, IA, LTS).
- **Durées et chiffres écrits.** « 21 heures — 3 jours », pas « 21h/3j ». « 8 Go de VRAM », pas « carte graphique récente ». Les tarifs portent le sigle € et la mention « net de taxe » quand elle s'applique.
- **Présent, voix active, depuis le terrain** : « vous modélisez un objet complet dès le premier jour », pas « les participants seront amenés à découvrir la modélisation ». Positif et concret, jamais promotionnel.
- **Sur l'IA générative, factuel** : ce que l'outil fait, ce qu'il coûte en temps de vérification, ce qu'il ne faut pas lui confier. Pas de productivité chiffrée que la formation ne mesure pas, pas de vocabulaire d'annonce (« révolution », « game changer »).
- **Aucun emoji**, ni interface, ni supports, ni e-mails clients.
- **Paragraphes courts** : 3 à 5 lignes en `body`, une idée par paragraphe. Mesure de 60 à 75 caractères.

Ce que le système ne doit **jamais** laisser écrire, parce que ce n'est pas vrai aujourd'hui : **pas de CPF** (les financements sont la prise en charge OPCO et le plan de développement des compétences) ; **pas de session au calendrier** — donc ni places restantes, ni compte à rebours, ni « S'inscrire », mais « Demander des dates » / « Demander un devis », et les statuts « Dates à convenir », « Session confirmée », « Session reportée » ; **présentiel uniquement** (seuls le cadrage préalable et le suivi sont téléphoniques, et cela se dit explicitement) ; **pas encore certifié Qualiopi** — ni mention, ni logo, ni « démarche qualité certifiée » tant que le certificat n'est pas obtenu.

**Marques tierces** : citez Blender, Unreal Engine ou tout autre outil en texte. N'insérez pas le logo d'un éditeur dans une fiche programme, une carte de module ou une couverture, et ne reprenez pas sa palette pour habiller un module.

## Fondations visuelles

**Couleur.** Le dégradé du logo ne compte que deux couleurs, lues dans les SVG : `brand-rose` #daa5bc et `brand-gold` #fbde96. `brand-peach` #edc6a6 est leur milieu, une valeur dérivée absente des fichiers de marque. Ce sont des pastels : ils habillent, ils n'écrivent pas. Le texte et les éléments interactifs passent par `action` #9c3f68 (survol `action-hover`), l'accent doré par `accent-deep` #8f5c0e. Trois niveaux de texte, pas quatre : `ink`, `ink-muted`, `ink-subtle`. Cinq fonds : `surface`, `surface-sunken`, `surface-raised`, `surface-brand`, `surface-accent`, plus `surface-code` pour les blocs techniques. Quatre statuts, `success` / `warning` / `danger` / `info`, chacun avec sa surface pâle. Maximum une ou deux couleurs de fond par support.

**Dégradé.** `--gradient-brand` : `linear-gradient(90deg, var(--brand-rose) 15%, var(--brand-gold) 76%)` — deux arrêts, horizontal, plateaux aux extrémités (le passage précipité par l'orange est ainsi évité). Filet de 4 px sous un en-tête, bandeau de couverture, jaquette de module, barre de progression, **et bande de section pleine largeur**. Il peut porter du texte : l'encre est alors `ink-on-pastel`, jamais `ink-muted` ni une couleur claire, et jamais un texte long — un titre, un chapô, un libellé de bouton. Il n'est plus limité à une occurrence par écran, mais il reste un accent : deux ou trois par page, pas un fond général. **Jamais en vertical ni en diagonale** — l'axe horizontal est celui du logo.

**Typographie.** Deux familles. **Playfair Display Bold Italic** pour les titres et les noms de personnes (`display-xl` 56/58, `display-lg` 40/46, `display-md` 32/38, `identity` 20/28) ; jamais sous 20 px, jamais en texte courant ni en citation. **Noto Sans** pour tout le reste : sous-titres en **italique gras** (`heading-lg/md/sm` — c'est la règle de charte, y compris pour les titres de cartes), corps en Regular (`body-lg` 17/28, `body` 15/24, `body-sm` 13/20), citations en Italic (`quote` 20/32), annotations en Light (`caption` 12/18, portée en `ink-muted`). **Il n'existe pas de gras droit dans les fichiers fournis** : boutons, libellés, badges et sur-titres sont en Regular, la hiérarchie vient de la taille, de la couleur et de l'espacement — n'écrivez jamais `font-weight: 600` sur une face droite. Tout est aligné à gauche : pas de justification, pas de centrage au-delà de trois lignes.

**Espacement.** Échelle de 4 px, `space-1` (4) à `space-16` (64). Padding de carte `space-5`, écart entre cartes `space-6`, entre sections `space-12`, respiration de haut de page `space-16`. Le motif de couverture travaille au pas de `space-8`.

**Rayons.** `radius-sm` 6 px (champs), `radius-md` 10 px (boutons, encarts), `radius-lg` 18 px (cartes, panneaux), `radius-xl` 28 px (blocs de couverture), `radius-pill` (badges, pastilles — l'écho du point sur le i du logo). La ligne générale est douce et amicale, à grands rayons.

**Cartes.** `surface-raised` + filet `border` 1 px + `radius-lg` + `shadow-sm` au repos, `shadow-md` au survol ; `shadow-lg` est réservée aux modales et menus. Une `ModuleCard` ajoute un filet de dégradé de 4 px en tête. Pas de carte à bordure gauche colorée, pas d'ombre empilée (carte dans une carte). En thème sombre, comptez d'abord sur `surface-raised` et `border` : l'ombre s'y voit peu.

**Fonds et arrière-plans.** Aplats plats : ni gradient de fond de page, ni texture, ni motif répété. La seule composition graphique de la marque est le **motif de couverture** : des blocs pastel aux coins `radius-xl`/`radius-lg`, posés au pas de 32 px, dans lesquels des disques et des pilules sont découpés à la couleur du fond (voir la carte « Motif de couverture »). **Verre dépoli.** Une carte peut être posée en verre dépoli — `.viv-glass` : `--glass-surface`, filet `--glass-border`, flou `--glass-blur` de 14 px, rayon `radius-lg`. Il ne s'emploie **que là où quelque chose passe dessous** : sur le dégradé de marque, sur un aplat sombre, sur une image. Sur un fond uni clair, l'effet n'existe pas et la carte ordinaire (`surface-raised` + `border` + `shadow-sm`) est la bonne réponse. Une seule valeur de flou dans tout le système, pas de verre sur du verre, et le repli sans `backdrop-filter` est `surface-raised` — la lisibilité ne dépend jamais du flou.

**Rythme de page.** Une page alterne des bandes claires et des bandes sombres, et cette alternance porte la hiérarchie : sombre en haut (barre de navigation et hero), **clair au milieu pour ce qui compte** (expertises, catalogue, fiches, tableaux), sombre en bas pour ce qui accompagne (offres, contact, pied de page). Une bande sombre s'obtient en posant `data-theme="sombre"` sur la section, jamais avec des couleurs écrites en dur : cartes, boutons et champs s'y repeignent seuls et les contrastes restent garantis. Deux bandes sombres consécutives se distinguent par `surface` et `surface-sunken`, pas par une nouvelle teinte. Une bande de dégradé de marque peut servir de charnière entre deux bandes claires ou sombres.

**Animation.** Trois durées — `--motion-micro` 120 ms (survol, focus, pression), `--motion-state` 200 ms (encart, onglet, correction de quiz), `--motion-panel` 320 ms (modale, menu, tiroir) ; rien au-delà. Trois courbes — `--motion-enter` pour ce qui arrive, `--motion-exit` pour ce qui part, `--motion-standard` pour ce qui se transforme sur place. **Pas de rebond, pas d'élastique.** Amplitude `--motion-shift` 8 px avec gain d'opacité ; une mise à l'échelle ne dépasse pas 1,02. Ne bougent jamais : le logo, le dégradé, les captures d'écran, le texte courant, les objectifs pédagogiques, les mentions réglementaires. Une seule figure de transition entre écrans d'un module (`viv-enter`, `viv-enter--back`). Sous `prefers-reduced-motion: reduce`, toute transition tombe à 1 ms — c'est une règle, pas une option.

**États.** Survol : un cran plus sombre (`action` → `action-hover`) ; un secondaire prend le fond `surface-brand` et son contour passe à `action`. Pressé : la couleur ne change pas, l'ombre diminue. Focus clavier : anneau `focus` de 2 px avec 2 px d'écart, visible sur toutes les surfaces, jamais supprimé sans remplacement. Désactivé : 45 % d'opacité, plus d'ombre, jamais une couleur grise dédiée. Contraste : 4,5:1 pour le texte, 3:1 pour les bordures signifiantes, les anneaux et les pictos, dans les deux thèmes.

**Images.** On ne photographie pas une session : ni la salle, ni les écrans, ni les participants, ni les maquettes ; l'interdiction vaut pour les captures d'écran et les fichiers ouverts en formation. Les captures viennent des **fichiers d'exercice de VIV Formation**, cadrées sur la zone utile, prises dans le thème sombre du logiciel (réglage par défaut de Blender comme d'Unreal Engine). Les portraits sont ceux de l'équipe, en lumière naturelle, gestes de travail réels, avec l'accord des personnes — pas de photo de banque mise en scène. Toute image passe par `Figure` : contour `border`, rayon `radius-lg`, légende en `caption` qui dit ce qu'il faut regarder ; ni ombre portée, ni perspective, ni biseau. La mention « Image générée avec &lt;outil&gt; » figure sur tout visuel produit ou retouché par une IA générative.

**Affichage mobile.** Trois ruptures, pas plus : `--bp-sm` 600 px (téléphone), `--bp-md` 900 px (tablette et petit portable), `--bp-lg` 1180 px (largeur maximale du contenu). Les mises en page passent par les classes de `tokens/layout.css` — `.viv-wrap`, `.viv-section`, `.viv-split--hero|aside|even|form`, `.viv-grid-cards`, `.viv-grid-tiles`, `.viv-form-grid` — et non par des largeurs écrites à la main : elles portent déjà les ruptures.

- **Typographie.** Sous 600 px, les titres se compriment sans s'écraser : `display-xl` 56 → 34, `display-lg` 40 → 28, `display-md` 32 → 24, `heading-lg` 24 → 20. **Le corps ne bouge pas** : 15 px est le plancher lisible, et comme il n'existe pas de gras droit, la hiérarchie tient à la taille — la comprimer davantage la ferait disparaître.
- **Cible tactile.** `--touch-min` 44 px. Sous `pointer: coarse`, boutons et champs sont rehaussés automatiquement, quelle que soit la largeur. Un `Button size="sm"` mesure 34 px au repos : il ne porte jamais l'action principale d'un écran tactile.
- **Navigation.** Sous 900 px, la barre passe en **tiroir plein écran ouvert depuis le haut** (`.viv-drawer`) : entrées à 44 px, fermeture explicite, ouverture en `--motion-panel` avec les 8 px d'amplitude. La barre reste fixe en haut : on doit pouvoir naviguer à tout moment.
- **Mises en page.** Deux colonnes → une seule sous 900 px ; grilles de cartes → une colonne sous 600 px ; une colonne latérale collante redevient statique quand elle s'empile (`.viv-sticky-aside`). Padding de section `space-16` → `space-10`, gouttière `space-8` → `space-5`. L'en-tête descend de 84 à 64 px.
- **Composants.** `SoftwareRequirements` empile ses étiquettes (la colonne fixe de 180 px ne tient pas), `TrainerCard` passe en colonne, les pieds de carte se replient. `ModuleCard` garde son visuel 16:9 et `ProgramSteps` fonctionne tel quel.
- **Verre dépoli.** Repli sur `surface-raised` sous 600 px : le flou coûte cher sur un téléphone d'entrée de gamme, et rien de lisible n'en dépend. Le rythme de bandes claires et sombres, lui, se conserve — c'est lui qui structure le défilement.

**Mise en page.** Le site et l'application posent `surface` en fond, un en-tête collant avec `shadow-md` et le filet de dégradé, des cartes `surface-raised`, et **un seul bouton `action` plein par écran** — les autres en secondaire `border-strong`. Les supports de formation ouvrent chaque chapitre en `display-md`, numérotent les modules en `overline`, posent les objectifs dans un encart `surface-accent` à titre `accent-deep`.

## Iconographie

Le système utilise **Lucide** (licence ISC, lucide.dev) : trait de 2 sur une grille de 24, bouts et jointures arrondis — le « rounded regular » demandé par la charte VIV Group, qui ne nomme aucune bibliothèque. **Trente-trois tracés sont embarqués dans le composant `Icon`** (trente repris tels quels du bundle source, Lucide v1.47.0, plus `menu` pour le tiroir de navigation mobile, `euro` pour l'encart tarifs et `niveau` — barres ascendantes — pour le niveau d'une formation) : les icônes de flux (`check`, `circle-check`, `arrow-right`, `chevron-right`, `x`, `menu`, `info`, `alert`, `clock`, `calendar`, `users`, `monitor`, `cpu`, `download`, `file-text`, `map-pin`, `target`, `diploma`, `sparkles`, `box`, `play`), six repères d'outil (`outil-blender`, `outil-unreal`, `outil-unity`, `outil-vred`, `outil-illustrator`, `outil-comfyui`) et quatre repères de domaine (`domaine-dataprep`, `domaine-precalcule`, `domaine-temps-reel`, `domaine-graphisme-2d` ; l'IA générative utilise `sparkles`).

- Aucune fonte d'icônes, aucun sprite, aucun PNG d'icône : les tracés sont des SVG inline, servis par `Icon`. Pour une icône absente, prenez son SVG sur lucide.dev et passez-le en `path` — ne redessinez jamais un tracé à la main et ne mélangez pas deux jeux sur un même support.
- **Taille** : 20 px dans l'interface, 24 px dans les documents et à l'intérieur d'une pastille. Le trait reste à 2 ; jamais sous 1,5.
- **Couleur** : `currentColor`, donc celle du texte accompagné — `ink`, `ink-muted`, ou la couleur du statut. Une icône porteuse de sens tient 3:1 sur son fond.
- **Dans le flux, sans pastille** : menus, titres secondaires, listes, métadonnées de session. C'est le format par défaut. **En pastille pleine** (1,6 × l'icône, cercle ou carré `radius-md`, sur dégradé, `brand-rose`, `brand-gold`, `action` ou `ink`) : boutons interactifs, actions principales, zones à forte visibilité — jamais pour décorer une ligne de liste.
- **Les repères d'outil ne sont jamais les logos des éditeurs** : un logo Blender ou Unreal dans le catalogue laisserait croire à un partenariat qui n'existe pas. L'icône de repère d'une carte est celle de l'outil principal, pas du domaine ; une sensibilisation, sans outil, prend le repère de son domaine.
- **Jamais une icône seule pour signaler un statut** : le mot reste obligatoire. Aucun emoji, aucun caractère unicode employé comme icône.
- Les fichiers du groupe **Logos** affichés en `<img>` gardent l'encre inscrite dans leur tracé : choisissez la variante (couleur, noir, blanc) selon le fond. En inline, les SVG noir et blanc peuvent être recolorés en remplaçant leur `fill`, mais seulement par `ink`, `ink-inverse` ou une couleur de marque.

## Le logo

Les douze fichiers fournis sont dans `assets/logos/` — **jamais de reconstitution typographique** : le logo est un tracé dessiné. Trois niveaux : le **logo** complet signe un support (en-tête, couverture, tête de document) ; le **monogramme** (le « Viv ») prend le relais quand la place manque ; le **submark** (le V seul) est réservé aux formats minuscules ou carrés (favicon, avatar, filigrane, sticker). Le SVG est le format de référence : `viv-formation-couleur.svg` sur fond clair, `viv-formation-blanc.svg` sur fond sombre, `viv-formation-noir.svg` en monochrome ; le submark n'existe qu'en noir et blanc. **Zone de protection : 0,29 × la hauteur du bloc** sur les quatre côtés — le composant `Logo` la réserve. Taille minimale : 120 px de large pour le logo complet, 24 px pour le monogramme et la pastille. Ne modifiez ni couleurs, ni proportions, ni inclinaison ; n'ajoutez ni ombre, ni contour. En filigrane sur une capture ou une vidéo, submark blanc à 40 % d'opacité dans un angle, sans pastille. `assets/logos/README.md` est le readme d'origine du groupe.

## Composants

Quinze composants, exactement l'inventaire du bundle source — aucun ajout, aucune suppression. Ils sont exposés sur le namespace du système ; chaque dossier porte un `.jsx`, un `.d.ts` (contrat de props), un `.prompt.md` (quoi, quand, exemple) et une carte de démonstration.

`components/base/` — **Button**, **Badge**, **Card**, **Field**, **Callout**, **Logo**, **Icon**, **Figure**.
`components/formation/` — **ModuleCard**, **ObjectivesPanel**, **TrainerCard**, **ProgramSteps**, **SoftwareRequirements**, **Kbd**, **Progress**.

Le source comptait deux entrées supplémentaires qui ne sont pas des composants et n'ont donc pas été portées comme tels : **Motion** (une page de documentation — ses valeurs sont dans `tokens/motion.css` et dans la carte « Mouvement ») et **Cover** (une planche de motif sans implémentation — reprise telle quelle dans la carte « Motif de couverture »).

### Ajouts volontaires

- `--gradient-brand` : le dégradé de marque, jusque-là recopié à l'identique dans six règles du bundle source, est désormais un token. Même valeur, un seul endroit à lire.
- `--glass-surface`, `--glass-border`, `--glass-blur` et la classe `.viv-glass` : le verre dépoli, absent du brand book source, ajouté à la demande de l'organisme. Voir « Verre dépoli » ci-dessus pour ses conditions d'emploi.
- **`ModuleCard` avec visuel** : props `image` / `imagePlaceholder`, `mark` (repère d'outil sur l'angle du visuel) et `href` (carte entièrement cliquable vers la fiche programme), ajoutées à la demande de l'organisme. Sans ces props, la carte est exactement celle du bundle source.
- **Fondations d'affichage mobile** (`tokens/layout.css`) : points de rupture, cible tactile de 44 px, classes de mise en page et tiroir de navigation — absents du brand book source, qui ne traitait que l'écran large.
- **Règles de dégradé assouplies** à la demande de l'organisme : il peut désormais porter du texte (en `ink-on-pastel`) et apparaître plusieurs fois sur une page. L'interdiction du dégradé vertical ou diagonal, elle, est maintenue.
- `.viv-gradient-line` et les classes utilitaires de type (`display-xl`, `body`, `caption`…) sont reprises du source, sans changement de valeurs.

## Index du projet

| Fichier | Contenu |
| --- | --- |
| `styles.css` | Point d'entrée unique : uniquement des `@import`. |
| `tokens/colors.css` | Couleurs, thème clair sur `:root` et thème sombre sur `[data-theme="sombre"]`, avec notes d'usage et contrastes. |
| `tokens/typography.css` | Familles et 19 styles `--text-*`. |
| `tokens/space.css` | Échelle de 4 px et rayons. |
| `tokens/motion.css` | Durées, courbes, amplitude, `prefers-reduced-motion`, transitions d'écran. |
| `tokens/fonts.css` | Les cinq `@font-face`. |
| `tokens/type-classes.css` | Classes utilitaires de la hiérarchie typographique, `.viv-gradient-line`, `.viv-glass`, échelle mobile. |
| `tokens/layout.css` | Points de rupture, cible tactile, classes de mise en page adaptative, tiroir de navigation. |
| `components/components.css` | Feuille de style des quinze composants (reprise de `bundle.css`). |
| `components/base/`, `components/formation/` | Les composants, leurs types, leurs prompts, leurs cartes. |
| `guidelines/*.card.html` | 25 cartes de fondations : Colors (8), Type (5), Spacing (4), Mobile (2), Motion (1), Brand (5). |
| `ui_kits/catalogue/` | Site public : catalogue filtrable, fiche programme, demande de dates. |
| `ui_kits/site-accueil/` | Page d'accueil du site : rythme de bandes claires et sombres, verre dépoli, bande de dégradé. |
| `ui_kits/module-web/` | Module de formation en ligne : leçon, quiz corrigé, fin de module. |
| `templates/fiche-programme/` | Gabarit de fiche programme, réutilisable par un projet consommateur. |
| `assets/logos/` | Les douze fichiers de marque (8 SVG, 4 PNG) et leur readme d'origine. |
| `fonts/` | Les six fichiers de fonte (TTF) : cinq de la charte, plus Noto Sans Mono Regular. |
| `thumbnail.html` | Vignette du système. |
| `SKILL.md` | Enveloppe Agent Skills pour réutiliser ce dossier hors de cet outil. |

## Réserves à lever

- **Les fontes sont des TTF.** Le `tokens.css` source déclarait des `.woff2` que le dossier ne contenait pas ; seuls les cinq TTF étaient présents. Les `@font-face` pointent donc sur les TTF. Si vous avez les WOFF2, déposez-les dans `fonts/` et changez les cinq `src` : le poids de chargement en sera divisé par deux.
- **Noto Sans Mono** est un ajout du système, absent de la charte. Le fichier Regular a été fourni depuis et il est servi par `tokens/fonts.css` ; il n'existe qu'en une graisse — les blocs `code` et `kbd` n'en demandent pas d'autre.
- **Aucune image de marque n'a été fournie** : ni portrait de formateur, ni capture de fichier d'exercice, ni rendu. Les `Figure` des kits affichent des cadres vides légendés. Rien n'a été dessiné ni généré à la place.
- **La planche de charte VIV Group** n'était pas dans le dossier ; ses mesures (pastille, zone de protection) sont reprises des commentaires du bundle source.

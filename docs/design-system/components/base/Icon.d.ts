export type IconName =
  | 'check' | 'circle-check' | 'arrow-right' | 'chevron-right' | 'x' | 'menu' | 'info' | 'alert' | 'euro' | 'niveau'
  | 'clock' | 'calendar' | 'users' | 'monitor' | 'cpu' | 'download' | 'file-text'
  | 'map-pin' | 'target' | 'diploma' | 'sparkles' | 'box' | 'play'
  /** Repères d'outil : marqueurs neutres, jamais les logos des éditeurs. */
  | 'outil-blender' | 'outil-unreal' | 'outil-unity' | 'outil-vred' | 'outil-illustrator' | 'outil-comfyui'
  /** Repères de domaine ; l'IA générative utilise `sparkles`. */
  | 'domaine-dataprep' | 'domaine-precalcule' | 'domaine-temps-reel' | 'domaine-graphisme-2d';

/** Icône Lucide au format du système : grille 24, trait 2, bouts et jointures arrondis, encre héritée du texte. */
export interface IconProps {
  /** Une des icônes embarquées (Lucide v1.47.0, ISC). */
  name?: IconName;
  /** Contenu SVG d'une autre icône Lucide, à la place de `name`. */
  path?: string;
  /** 20 dans l'interface, 24 dans les documents et les pastilles. */
  size?: number;
  /** 2 par défaut ; jamais sous 1,5. */
  strokeWidth?: number;
  /** Pastille pleine : actions principales et zones à forte visibilité. */
  tile?: 'degrade' | 'rose' | 'gold' | 'action' | 'ink';
  /** Forme de la pastille : cercle par défaut. */
  shape?: 'cercle' | 'carre';
  /** Texte alternatif ; sans lui, l'icône est décorative (aria-hidden). */
  label?: string;
  className?: string;
  style?: Record<string, string | number>;
}
export declare function Icon(props: IconProps): JSX.Element;

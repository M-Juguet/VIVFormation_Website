/**
 * Affiche une marque VIV Formation à la bonne taille, avec sa zone de protection
 * (0,29 × la hauteur) ou sa pastille. Jamais de reconstitution typographique.
 */
export interface LogoProps {
  /** `complet` (le logo entier), `monogramme` (le « Viv ») ou `submark` (le V seul). */
  mark?: 'complet' | 'monogramme' | 'submark';
  /** Le submark n'existe qu'en noir et blanc. */
  variant?: 'couleur' | 'noir' | 'blanc';
  /** Hauteur du tracé en pixels ; la largeur suit. Ignoré avec `tile`. Minimum 120 pour `complet`, 24 pour `monogramme`. */
  height?: number;
  /** false retire la zone de protection. À n'utiliser que si le conteneur la porte déjà. */
  clearSpace?: boolean;
  /** Rend le submark dans une pastille carrée : favicon, avatar, filigrane, sticker. */
  tile?: 'degrade' | 'noir' | 'neutre' | 'contour';
  /** Côté de la pastille en pixels (défaut 64, minimum 24). Rayon et marque en découlent. */
  size?: number;
  /** Défaut « VIV Formation ». Passez "" si le logo est décoratif. */
  alt?: string;
  className?: string;
  style?: Record<string, string | number>;
}
export declare function Logo(props: LogoProps): JSX.Element;

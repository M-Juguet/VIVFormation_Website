import type { ReactNode, ButtonHTMLAttributes } from 'react';

/**
 * Déclenche l'action principale d'un écran ou d'un document interactif : demander un devis,
 * demander des dates, télécharger un programme. Un seul `primary` par écran ou par bloc.
 */
export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  /** primary : aplat `action`. secondary : contour `border-strong`. ghost : texte seul. */
  variant?: 'primary' | 'secondary' | 'ghost';
  size?: 'md' | 'sm';
  /** Arrondi `radius-pill` — filtres et sélecteurs de thème. */
  pill?: boolean;
  /** Rend un `a` au lieu d'un `button`. */
  href?: string;
  /** Nœud décoratif placé avant le libellé (aria-hidden). */
  icon?: ReactNode;
  children?: ReactNode;
}
export declare function Button(props: ButtonProps): JSX.Element;

import type { ReactNode } from 'react';

/** Affiche un raccourci clavier dans une phrase, un livret ou une fiche mémo, en kbd sur surface-code. */
export interface KbdProps {
  /** Touches dans l'ordre de pression : ['Shift', 'A']. */
  keys?: string[];
  className?: string;
  children?: ReactNode;
}
export declare function Kbd(props: KbdProps): JSX.Element;

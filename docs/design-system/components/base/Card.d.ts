import type { ReactNode } from 'react';

/** Conteneur générique posé sur une page : bloc de modalités, encadré d'accessibilité, résumé administratif. */
export interface CardProps {
  /** Sur-titre en capitales, style `overline`. */
  overline?: ReactNode;
  title?: ReactNode;
  /** Pied de carte : un texte d'appoint et une action. */
  footer?: ReactNode;
  /** Supprime `shadow-sm` (carte sur `surface-sunken` ou destinée à l'impression). */
  flat?: boolean;
  className?: string;
  children?: ReactNode;
}
export declare function Card(props: CardProps): JSX.Element;

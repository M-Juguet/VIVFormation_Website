import type { ReactNode } from 'react';

/** Encart qui sort une information de son flux : prérequis, confirmation, échéance de financement, report. */
export interface CalloutProps {
  tone?: 'info' | 'success' | 'warning' | 'danger';
  /** Par défaut : le nom de la tonalité en français (Information, Réussite, Attention, Erreur). */
  title?: ReactNode;
  className?: string;
  children?: ReactNode;
}
export declare function Callout(props: CalloutProps): JSX.Element;

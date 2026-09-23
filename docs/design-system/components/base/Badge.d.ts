import type { ReactNode } from 'react';

export type Tone = 'rose' | 'peach' | 'gold' | 'neutral' | 'success' | 'warning' | 'danger' | 'info';

/**
 * Étiquette courte qui qualifie une formation ou une session : outil, modalité, statut
 * d'organisation, financement. Jamais la couleur seule : le mot reste obligatoire.
 */
export interface BadgeProps {
  tone?: Tone;
  icon?: ReactNode;
  className?: string;
  children?: ReactNode;
}
export declare function Badge(props: BadgeProps): JSX.Element;

import type { ReactNode } from 'react';

/** Barre d'avancement d'un module web : où en est le participant dans un parcours, une leçon ou un quiz. */
export interface ProgressProps {
  /** Valeur courante (étape ou pourcentage). */
  value: number;
  /** 100 par défaut, ou le nombre d'étapes. */
  total?: number;
  /** Affiche « Étape 2 sur 5 » au lieu du pourcentage. */
  steps?: boolean;
  /** Libellé explicite, qui remplace le texte calculé. */
  label?: string;
  /** Contexte affiché à droite : module ou parcours. */
  hint?: ReactNode;
  className?: string;
}
export declare function Progress(props: ProgressProps): JSX.Element;

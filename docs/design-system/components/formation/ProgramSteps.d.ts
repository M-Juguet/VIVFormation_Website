import type { ReactNode } from 'react';

export interface ProgramStep {
  title: ReactNode;
  /** Durée et modalité : « 7 heures — présentiel ». */
  meta?: ReactNode;
  body?: ReactNode;
  /** `current` au plus une fois. */
  state?: 'done' | 'current';
}

/** Déroulé d'un parcours en étapes : audit de poste, journées de formation, suivi. */
export interface ProgramStepsProps {
  steps: ProgramStep[];
  className?: string;
}
export declare function ProgramSteps(props: ProgramStepsProps): JSX.Element;

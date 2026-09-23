import type { ReactNode } from 'react';

/**
 * Encart des objectifs pédagogiques, obligatoire sur toute fiche programme et toute convention.
 */
export interface ObjectivesPanelProps {
  /** Défaut : « Objectifs pédagogiques ». */
  title?: ReactNode;
  intro?: ReactNode;
  /** Objectifs à l'infinitif, trois à six. */
  items: string[];
  className?: string;
}
export declare function ObjectivesPanel(props: ObjectivesPanelProps): JSX.Element;

import type { ReactNode } from 'react';

export interface RequirementItem {
  /** « Système », « Carte graphique », « Mémoire vive », « Licence ». */
  label: string;
  value: string;
  /** Rend la valeur en `code` sur `surface-code` : chemin, commande, nom de fichier. */
  mono?: boolean;
}

/**
 * Tableau des prérequis techniques d'un module : version du logiciel, système, machine,
 * fichiers de travail, licence.
 *
 * @startingPoint section="Formation" subtitle="Prérequis techniques d'un module logiciel" viewport="700x380"
 */
export interface SoftwareRequirementsProps {
  /** Défaut : « Prérequis techniques ». À préciser par le logiciel. */
  title?: ReactNode;
  /** Version exacte exigée, p. ex. « Blender 5.2 LTS ». */
  version?: ReactNode;
  items: RequirementItem[];
  /** Encart de pied : ce qui dépend de l'entreprise du participant. */
  note?: ReactNode;
  className?: string;
}
export declare function SoftwareRequirements(props: SoftwareRequirementsProps): JSX.Element;

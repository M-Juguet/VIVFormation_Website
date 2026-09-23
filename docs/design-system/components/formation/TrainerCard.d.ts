import type { ReactNode } from 'react';

/** Fiche d'un formateur : qui anime, avec quelle expérience. Le nom porte Playfair Display Bold Italic. */
export interface TrainerCardProps {
  name: string;
  role?: ReactNode;
  bio?: ReactNode;
  tags?: string[];
  /** Portrait carré ; à défaut, les initiales sur le dégradé de marque. */
  photo?: string;
  className?: string;
  children?: ReactNode;
}
export declare function TrainerCard(props: TrainerCardProps): JSX.Element;

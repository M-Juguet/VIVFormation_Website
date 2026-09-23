import type { ReactNode } from 'react';

/** Cadre commun de toutes les images du système : portrait de formateur, capture d'un fichier d'exercice, rendu. */
export interface FigureProps {
  src?: string;
  /** "" si l'image est décorative et décrite par la légende. */
  alt?: string;
  /** Ce qu'il faut regarder, une phrase. */
  caption?: ReactNode;
  /** Auteur ou provenance : « Photo : VIV Formation, juin 2026 ». */
  credit?: ReactNode;
  /** Nom de l'outil : affiche « Image générée avec <outil> ». Obligatoire pour tout visuel d'IA générative. */
  ai?: string;
  full?: boolean;
  /** false retire contour et rayon (image à fond perdu). */
  frame?: boolean;
  /** Texte du cadre vide, en maquette. */
  placeholder?: ReactNode;
  className?: string;
  children?: ReactNode;
}
export declare function Figure(props: FigureProps): JSX.Element;

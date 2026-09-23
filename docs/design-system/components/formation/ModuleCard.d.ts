import type { ReactNode } from 'react';
import type { Tone } from '../base/Badge';

export interface ModuleMeta {
  /** « Durée », « Niveau », « Groupe », « Dates ». */
  label: string;
  value: string;
}

/**
 * Carte d'une formation ou d'un module dans le catalogue, la fiche programme ou la proposition
 * commerciale. L'ordre d'affichage ne varie jamais : type et domaine en overline, outil principal
 * en tête du titre, puis les badges outil, modalité, statut.
 *
 * @startingPoint section="Formation" subtitle="Carte de catalogue : module, parcours ou sensibilisation" viewport="700x340"
 */
export interface ModuleCardProps {
  overline?: ReactNode;
  title: ReactNode;
  summary?: ReactNode;
  meta?: ModuleMeta[];
  badges?: Array<{ label: string; tone?: Tone }>;
  /** Tarif, p. ex. « 1 400 € ». */
  price?: ReactNode;
  /** Mention accolée au tarif : « net de taxe, par participant ». */
  priceNote?: string;
  action?: ReactNode;
  /** Visuel 16:9 en tête de carte : rendu ou capture d'un fichier d'exercice, jamais une photo de session. */
  image?: string;
  /** "" si le visuel est décoratif et redit par le titre. */
  imageAlt?: string;
  /** Texte du cadre vide, en maquette, à la place de `image`. */
  imagePlaceholder?: ReactNode;
  /** Repère posé sur l'angle du visuel : `<Icon name="outil-blender" size={24} tile="degrade" shape="carre" />`. */
  mark?: ReactNode;
  /** Adresse de la fiche programme : le titre devient un lien et toute la carte est cliquable. */
  href?: string;
  className?: string;
  children?: ReactNode;
}
export declare function ModuleCard(props: ModuleCardProps): JSX.Element;

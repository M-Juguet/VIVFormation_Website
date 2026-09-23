import type { ReactNode, InputHTMLAttributes } from 'react';

/** Champ de formulaire complet : libellé, saisie, aide et message d'erreur reliés par aria-describedby. */
export interface FieldProps extends InputHTMLAttributes<HTMLInputElement> {
  label: ReactNode;
  /** Format attendu, écrit avant la saisie. */
  hint?: ReactNode;
  /** Message d'erreur : bordure `danger` et aria-invalid sur le contrôle. */
  error?: ReactNode;
  required?: boolean;
  multiline?: boolean;
  rows?: number;
}
export declare function Field(props: FieldProps): JSX.Element;

import { readdirSync } from 'node:fs';
import { join } from 'node:path';

/**
 * Catalogue PDF des formations : le fichier public/catalogue/viv-formation-catalogue-AAAA.pdf le plus
 * récent, publié tel quel avec le site (action 3 du plan Qualiopi). Le catalogue d'une nouvelle
 * année remplace le précédent sans changer le code. Sans fichier, ni bouton ni lien.
 */
export function getCatalogue(): { href: string; annee: string } | undefined {
  let fichiers: string[];
  try {
    fichiers = readdirSync(join(process.cwd(), 'public', 'catalogue'));
  } catch {
    return undefined;
  }
  const pdf = fichiers
    .filter((f) => /^viv-formation-catalogue-\d{4}\.pdf$/.test(f))
    .sort()
    .at(-1);
  return pdf ? { href: `/catalogue/${pdf}`, annee: pdf.slice(-8, -4) } : undefined;
}

/*
 * Exporte les données du site dont le skill Claude Desktop « rediger-formation » a besoin pour
 * écrire un fichier formation valide sans accès au dépôt : identifiants des classements et des
 * formateurs, références déjà attribuées, verbes refusés, numéro de déclaration d'activité.
 * Écrit skills/rediger-formation/references/donnees-site.json, et y recopie tels quels le modèle
 * (_modele.md → modele.md) et une formation publiée (→ exemple.md).
 *
 * À relancer (npm run skill:donnees) après tout changement de src/data/*.yaml, de la liste des
 * verbes refusés (src/content.config.ts) ou l'ajout d'une formation, puis réimporter le skill dans
 * Claude Desktop (README, « Skill de rédaction des formations »).
 */
import { copyFileSync, readFileSync, readdirSync, writeFileSync } from 'node:fs';
import yaml from 'js-yaml';

const lire = (chemin) => readFileSync(chemin, 'utf8');
const lireYaml = (chemin) => yaml.load(lire(chemin));
const classement = (chemin) =>
  lireYaml(chemin)
    .sort((a, b) => (a.ordre ?? 0) - (b.ordre ?? 0))
    .map(({ id, label, code, description }) => ({
      id,
      label,
      ...(code ? { code } : {}),
      ...(description ? { description } : {}),
    }));

const config = lire('src/content.config.ts');
// Chaînes entre apostrophes ou entre guillemets ("s'initier" contient une apostrophe).
const verbesRefuses = [
  ...config.match(/const VERBES_REFUSES = \[([\s\S]*?)\];/)[1].matchAll(/'([^']*)'|"([^"]*)"/g),
].map((m) => m[1] ?? m[2]);
const declarationActivite = lire('src/config/site.ts').match(/declarationActivite:\s*'(\d+)'/)[1];

const formations = readdirSync('src/content/formations')
  .filter((f) => f.endsWith('.md') && !f.startsWith('_'))
  .map((f) => {
    const frontmatter = lire(`src/content/formations/${f}`).match(/^---\r?\n([\s\S]*?)\r?\n---/)[1];
    const d = yaml.load(frontmatter);
    return {
      slug: f.replace(/\.md$/, ''),
      reference: d.reference,
      version: d.version,
      titre: d.titre,
    };
  })
  .sort((a, b) => a.reference.localeCompare(b.reference));

const donnees = {
  exporteLe: new Date().toISOString().slice(0, 10),
  declarationActivite,
  domaines: classement('src/data/domaines.yaml'),
  types: classement('src/data/types.yaml'),
  outils: classement('src/data/outils.yaml'),
  formateurs: lireYaml('src/data/formateurs.yaml').map(({ id, nom, fonction, parcours }) => ({
    id,
    nom,
    fonction,
    parcours,
  })),
  formations,
  verbesRefuses,
};

const REFERENCES = 'skills/rediger-formation/references';
writeFileSync(`${REFERENCES}/donnees-site.json`, `${JSON.stringify(donnees, null, 2)}\n`);
copyFileSync('src/content/formations/_modele.md', `${REFERENCES}/modele.md`);
// Exemple : une formation mise en avant (enAvant), à défaut la première qui n'est pas un exemple
// provisoire — pour que l'exemple ne change pas à chaque nouvelle formation.
const texteDe = (f) => lire(`src/content/formations/${f.slug}.md`);
const reelles = formations.filter((f) => !/^provisoire:\s*true/m.test(texteDe(f)));
const exemple = reelles.find((f) => /^enAvant:\s*true/m.test(texteDe(f))) ?? reelles[0];
if (exemple) copyFileSync(`src/content/formations/${exemple.slug}.md`, `${REFERENCES}/exemple.md`);
console.log(
  `donnees-site.json : ${donnees.domaines.length} domaines, ${donnees.outils.length} outils, ${donnees.formateurs.length} formateur(s), ${formations.length} formation(s) ; exemple : ${exemple?.slug ?? 'aucun'}.`,
);

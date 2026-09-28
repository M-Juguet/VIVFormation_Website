import { getCollection, getEntries, getEntry, type CollectionEntry } from 'astro:content';
import type { BadgeTone } from '../components/ds/Badge.astro';

export type Formation = CollectionEntry<'formations'>;
type Ordonnable = { data: { ordre: number; label?: string; titre?: string } };

const parOrdre = (a: Ordonnable, b: Ordonnable) =>
  a.data.ordre - b.data.ordre ||
  (a.data.label ?? a.data.titre ?? '').localeCompare(b.data.label ?? b.data.titre ?? '', 'fr');

/** Formations publiées (les brouillons restent visibles en dev), triées. */
export async function getFormations() {
  const all = await getCollection('formations');
  await verifierFormations(all);
  return all.filter(({ data }) => import.meta.env.DEV || !data.brouillon).sort(parOrdre);
}

/**
 * Contrôles que le schéma de src/content.config.ts ne peut pas faire seul, brouillons compris :
 * corps vide, référence préfixée par le code du domaine, référence unique. Une erreur fait échouer
 * le build.
 */
async function verifierFormations(formations: Formation[]) {
  const erreurs: string[] = [];
  const references = new Map<string, string>();
  for (const f of formations) {
    const fichier = f.filePath ?? f.id;
    if (f.body?.trim()) {
      erreurs.push(`${fichier} : le corps doit rester vide, tout passe par le frontmatter.`);
    }
    const { code } = (await getEntry(f.data.domaine)).data;
    if (
      !f.data.reference.startsWith(code) ||
      !/^\d{2}$/.test(f.data.reference.slice(code.length))
    ) {
      erreurs.push(
        `${fichier} : la référence ${f.data.reference} doit être ${code} + deux chiffres.`,
      );
    }
    const doublon = references.get(f.data.reference);
    if (doublon)
      erreurs.push(`${fichier} : la référence ${f.data.reference} est déjà celle de ${doublon}.`);
    references.set(f.data.reference, fichier);
  }
  if (erreurs.length) throw new Error(`Formations invalides :\n- ${erreurs.join('\n- ')}`);
}

/** Les classements, triés. */
export async function getTaxonomies() {
  const [domaines, outils, types] = await Promise.all([
    getCollection('domaines'),
    getCollection('outils'),
    getCollection('types'),
  ]);
  return {
    domaines: domaines.sort(parOrdre),
    outils: outils.sort(parOrdre),
    types: types.sort(parOrdre),
  };
}

export const formationUrl = (f: Formation) => `/formations/${f.id}/`;

/* ---------- Mise en forme (règles d'écriture de la charte) ---------- */

const pluriel = (n: number, mot: string) => `${n} ${mot}${n > 1 ? 's' : ''}`;

/** « 21 heures — 3 jours » */
export const formatDuree = ({ heures, jours }: Formation['data']['duree']) =>
  `${pluriel(heures, 'heure')} — ${pluriel(jours, 'jour')}`;

const euros = new Intl.NumberFormat('fr-FR', {
  style: 'currency',
  currency: 'EUR',
  maximumFractionDigits: 0,
});
/** « 1 900 € » (HT par personne, inter-entreprises), ou undefined si la formation est sur devis. */
// Espace fine insécable (U+202F) d'Intl remplacée par une insécable : Playfair n'a pas ce glyphe.
export const formatTarif = (tarif?: number) =>
  tarif ? euros.format(tarif).replace(/\u202f/g, '\u00a0') : undefined;

export const formatDate = (d: Date) =>
  d.toLocaleDateString('fr-FR', { day: 'numeric', month: 'long', year: 'numeric' });

export const statutTone = (statut: Formation['data']['statut']): BadgeTone =>
  statut === 'Session confirmée' ? 'success' : statut === 'Session reportée' ? 'danger' : 'info';

/* ---------- Résolution des références ---------- */

/** Résout les classements d'une formation et prépare ce que cartes et fiches affichent. */
export async function resolveFormation(formation: Formation) {
  const d = formation.data;
  const [type, domaine, outils, formateur] = await Promise.all([
    getEntry(d.type),
    getEntry(d.domaine),
    getEntries(d.outils),
    d.formateur ? getEntry(d.formateur) : undefined,
  ]);

  const badges: { label: string; tone: BadgeTone }[] = [
    ...(outils.length
      ? outils.map((o) => ({ label: o.data.label, tone: 'rose' as const }))
      : [{ label: 'Sans outil imposé', tone: 'gold' as const }]),
    { label: 'Présentiel', tone: 'neutral' },
    { label: d.statut, tone: statutTone(d.statut) },
    ...(d.provisoire ? [{ label: 'Exemple provisoire', tone: 'warning' as const }] : []),
  ];

  return {
    formation,
    url: formationUrl(formation),
    type,
    domaine,
    outils,
    formateur,
    /** Repère de la carte : outil principal, sinon domaine (règle de la charte). */
    mark: outils[0]?.data.icone ?? domaine.data.icone,
    overline: `${type.data.label} · ${domaine.data.label}`,
    badges,
    duree: formatDuree(d.duree),
    tarif: formatTarif(d.tarif),
  };
}

export type FormationResolue = Awaited<ReturnType<typeof resolveFormation>>;

/** Formations proches : même domaine d'abord, puis un outil en commun. */
export function formationsProches(cible: FormationResolue, toutes: FormationResolue[], n = 3) {
  const autres = toutes.filter((f) => f.formation.id !== cible.formation.id);
  const memeDomaine = autres.filter((f) => f.domaine.id === cible.domaine.id);
  const outilsCible = new Set(cible.outils.map((o) => o.id));
  const memeOutil = autres.filter(
    (f) => f.domaine.id !== cible.domaine.id && f.outils.some((o) => outilsCible.has(o.id)),
  );
  return [...memeDomaine, ...memeOutil].slice(0, n);
}

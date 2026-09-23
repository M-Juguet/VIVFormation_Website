import { getCollection, getEntries, getEntry, type CollectionEntry } from 'astro:content';
import type { BadgeTone } from '../components/ds/Badge.astro';
import type { ProgramStep } from '../components/ds/ProgramSteps.astro';
import { DEROULE } from '../config/site';

export type Formation = CollectionEntry<'formations'>;
type Ordonnable = { data: { ordre: number; label?: string; titre?: string } };

const parOrdre = (a: Ordonnable, b: Ordonnable) =>
  a.data.ordre - b.data.ordre ||
  (a.data.label ?? a.data.titre ?? '').localeCompare(b.data.label ?? b.data.titre ?? '', 'fr');

/** Formations publiées (les brouillons restent visibles en dev), triées. */
export async function getFormations() {
  const all = await getCollection(
    'formations',
    ({ data }) => import.meta.env.DEV || !data.brouillon,
  );
  return all.sort(parOrdre);
}

/** Les classements, triés. */
export async function getTaxonomies() {
  const [familles, domaines, outils, types] = await Promise.all([
    getCollection('familles'),
    getCollection('domaines'),
    getCollection('outils'),
    getCollection('types'),
  ]);
  return {
    familles: familles.sort(parOrdre),
    domaines: domaines.sort(parOrdre),
    outils: outils.sort(parOrdre),
    types: types.sort(parOrdre),
  };
}

export const formationUrl = (f: Formation) => `/formations/${f.id}/`;

/* ---------- Mise en forme (règles d'écriture de la charte) ---------- */

const pluriel = (n: number, mot: string) => `${n} ${mot}${n > 1 ? 's' : ''}`;
const majuscule = (s: string) => s.charAt(0).toUpperCase() + s.slice(1);

/** « 21 heures — 3 jours » */
export const formatDuree = ({ heures, jours }: Formation['data']['duree']) =>
  `${pluriel(heures, 'heure')} — ${pluriel(jours, 'jour')}`;

/** « 3 à 6 participants » */
export const formatParticipants = ({ min, max }: Formation['data']['participants']) =>
  min === max ? pluriel(min, 'participant') : `${min} à ${max} participants`;

const euros = new Intl.NumberFormat('fr-FR', {
  style: 'currency',
  currency: 'EUR',
  maximumFractionDigits: 0,
});
/** « 1 400 € » (net de taxe), ou undefined si la formation est sur devis. */
export const formatTarif = (tarif?: number) => (tarif ? euros.format(tarif) : undefined);

export const formatDate = (d: Date) =>
  d.toLocaleDateString('fr-FR', { day: 'numeric', month: 'long', year: 'numeric' });

export const statutTone = (statut: Formation['data']['statut']): BadgeTone =>
  statut === 'Session confirmée' ? 'success' : statut === 'Session reportée' ? 'danger' : 'info';

/* ---------- Résolution des références ---------- */

/** Résout les classements d'une formation et prépare ce que cartes et fiches affichent. */
export async function resolveFormation(formation: Formation) {
  const d = formation.data;
  const [type, domaine, outils] = await Promise.all([
    getEntry(d.type),
    getEntry(d.domaine),
    getEntries(d.outils),
  ]);
  const famille = await getEntry(domaine.data.famille);

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
    famille,
    outils,
    /** Repère de la carte : outil principal, sinon domaine (règle de la charte). */
    mark: outils[0]?.data.icone ?? domaine.data.icone,
    overline: `${type.data.label} · ${domaine.data.label}`,
    badges,
    duree: formatDuree(d.duree),
    participants: formatParticipants(d.participants),
    tarif: formatTarif(d.tarif),
  };
}

export type FormationResolue = Awaited<ReturnType<typeof resolveFormation>>;

/** Déroulé complet : cadrage téléphonique, une étape par journée, suivi. */
export function programmeSteps(formation: Formation): ProgramStep[] {
  const { programme, duree } = formation.data;
  const heuresParJour = Math.round((duree.heures / duree.jours) * 10) / 10;
  const journees = programme.map((jour, i) => ({
    title: programme.length > 1 ? `Journée ${i + 1} — ${jour.titre}` : majuscule(jour.titre),
    meta: `${pluriel(heuresParJour, 'heure')} — présentiel`,
    body: jour.contenu,
  }));
  return [DEROULE.cadrage, ...journees, DEROULE.suivi];
}

/** Formations proches : même domaine d'abord, puis même famille. */
export function formationsProches(cible: FormationResolue, toutes: FormationResolue[], n = 3) {
  const autres = toutes.filter((f) => f.formation.id !== cible.formation.id);
  const memeDomaine = autres.filter((f) => f.domaine.id === cible.domaine.id);
  const memeFamille = autres.filter(
    (f) => f.famille.id === cible.famille.id && f.domaine.id !== cible.domaine.id,
  );
  return [...memeDomaine, ...memeFamille].slice(0, n);
}

/**
 * Informations globales et textes partagés du site.
 * Rappels de la charte (docs/design-system/readme.md) : pas de CPF, pas de session au calendrier
 * (« Demander des dates », jamais « S'inscrire »), présentiel uniquement, sans mention de lieu
 * (« Présentiel » seul), pas de mention Qualiopi.
 */
import type { IconName } from '../components/ds/icons';

export const SITE = {
  name: 'VIV Formation',
  description:
    'Formations professionnelles à la conception 3D, au graphisme 2D et à l’IA générative : Blender, Unreal Engine, Unity, Illustrator. En présentiel.',
  locale: 'fr-FR',
  lang: 'fr',
  // Adresse de contact et d'inscription (pied de page, contact, délais d'accès). En cas de
  // changement, la reporter aussi dans les CGV (annulation) et dans le design system (fiches).
  email: 'formation@viv-prod.com',
  adresse: { rue: '14-30 rue de Mantes', codePostal: '92700', ville: 'Colombes' },
  // Adresse de la page LinkedIn de l'organisme ; `null` masque le bouton de l'en-tête tant que
  // la page n'existe pas.
  linkedin: null as string | null,
  declarationActivite: '11923083592',
  /** Référente handicap, seul contact accessibilité, sans variante (fiche programme, déroulé, support). */
  referentHandicap: { nom: 'Mme Morgane CHAUFOURNAIS', email: 'm-chaufournais@viv-prod.com' },
  // Compte du widget d'accessibilité UserWay (identifiant public, visible dans le HTML).
  userwayAccount: 'g7kYGRubh4',
} as const;

export const NAV = [
  { href: '/', label: 'Accueil' },
  { href: '/catalogue/', label: 'Catalogue' },
] as const;

/** Motifs du formulaire de contact, transmis tels quels (`sujet`) au webhook n8n. */
export const CONTACT_SUBJECTS = [
  {
    value: 'dates',
    label: 'Demander des dates',
    hint: 'Nous vous rappelons pour un cadrage d’une heure, puis nous fixons les dates avec vous.',
  },
  {
    value: 'devis',
    label: 'Demander un devis',
    hint: 'Formation visée, nombre de participants, lieu de la formation.',
  },
  {
    value: 'information',
    label: 'Demander des informations',
    hint: 'Votre question, le contexte de votre équipe.',
  },
  {
    value: 'dysfonctionnement',
    label: 'Signaler un problème en session',
    hint: 'Formation, date, lieu et description du problème rencontré.',
  },
] as const;

export type ContactSubject = (typeof CONTACT_SUBJECTS)[number]['value'];

/** Section « Comment se déroule une formation » de l'accueil. */
export const ETAPES_ORGANISATION = [
  {
    titre: 'Besoin et faisabilité',
    meta: '1 heure — entretien téléphonique',
    texte:
      'Nous recueillons vos besoins, définissons avec vous les objectifs et les adaptations nécessaires, et vérifions la faisabilité : matériel, versions installées, délais.',
  },
  {
    titre: 'Programme ajusté',
    meta: 'Sous une semaine',
    texte:
      'Nous vous envoyons le programme adapté, le devis et les prérequis techniques à valider avec votre service informatique.',
  },
  {
    titre: 'Sessions',
    meta: 'Présentiel',
    texte:
      'En petits groupes, sur vos postes : apports théoriques, exercices de mise en situation et quiz, puis un QCM final sur les compétences acquises.',
  },
] as const;

/** Section « Pour qui » de l'accueil. */
export const SECTEURS = [
  { nom: 'Design automobile', detail: 'Revue de design, rendu, temps réel' },
  { nom: 'Ferroviaire', detail: 'Préparation de données CAO' },
  { nom: 'Aéronautique', detail: 'Visualisation temps réel' },
  { nom: 'Nautique', detail: 'Modélisation et rendu produit' },
  { nom: 'Services et bureaux d’études', detail: 'IA générative au quotidien' },
] as const;

/** Repère d'une carte : icône de ICON_PATHS, ou tracé Lucide v1.47.0 (lucide.dev) passé en `path`. */
interface Repere {
  icone?: IconName;
  trace?: string;
}

/**
 * Section « Gage de qualité » de l'accueil : trois engagements, alignés sur le référentiel national
 * qualité (Qualiopi) sans le nommer tant que le certificat n'est pas obtenu — information et
 * adaptation, évaluation des acquis, recueil des appréciations. La mention de certification se
 * placera à droite du titre de la section ; l'accessibilité est dans la section Contact.
 */
export const ENGAGEMENTS_QUALITE: ({ titre: string; texte: string } & Repere)[] = [
  {
    icone: 'target',
    titre: 'Un programme adapté',
    texte:
      'Objectifs, prérequis, durée et tarif publiés pour chaque formation ; le déroulé s’ajuste à votre équipe.',
  },
  {
    icone: 'circle-check',
    titre: 'Des acquis vérifiés',
    texte:
      'Exercices pratiques et QCM final ; un certificat de réalisation pour chaque participant.',
  },
  {
    // Lucide « message-square-text ».
    trace:
      '<path d="M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z" /> <path d="M7 11h10" /> <path d="M7 15h6" /> <path d="M7 7h8" />',
    titre: 'Vos retours pris en compte',
    texte:
      'Questionnaire de satisfaction à la fin de chaque formation ; ses résultats sont publiés ci-dessous, dans les indicateurs qualité.',
  },
];

/**
 * Section « Indicateurs qualité » de l'accueil : indicateurs de résultats, toutes formations
 * confondues (indicateur 2 du référentiel Qualiopi), tirés du questionnaire de satisfaction de fin
 * de session. Valeurs relevées, jamais estimées ni arrondies à la hausse : `null` affiche « Mesure en
 * cours ». À mettre à jour chaque année, avec l'année ou la période couverte (`periode`).
 * Satisfaction : valeur exacte, deux décimales au plus (une note sur 10 se divise par 2, sans arrondi).
 * Pas de nombre de participants : il n'est pas significatif à ce stade.
 */
export const INDICATEURS_QUALITE: {
  /** Année ou période couverte, affichée « Résultats <periode>. » sous le texte (action 15). */
  periode: string | null;
  /** Note moyenne sur 5 donnée à la formation. */
  satisfaction: number | null;
  /** Part, en %, des participants qui répondent « oui » à « Recommanderiez-vous cette formation ? ». */
  recommandation: number | null;
} = {
  periode: '2026',
  satisfaction: 4.65,
  recommandation: 100,
};

/**
 * Informations globales et textes partagés du site.
 * Rappels de la charte (docs/design-system/readme.md) : pas de CPF, pas de session au calendrier
 * (« Demander des dates », jamais « S'inscrire »), présentiel uniquement et chez le client (« dans vos
 * locaux », jamais « notre salle »), pas de mention Qualiopi.
 */
import type { IconName } from '../components/ds/icons';

export const SITE = {
  name: 'VIV Formation',
  description:
    'Formations professionnelles à la conception 3D, au graphisme 2D et à l’IA générative : Blender, Unreal Engine, VRED, Unity, Illustrator. En présentiel, dans vos locaux.',
  locale: 'fr-FR',
  lang: 'fr',
  // Adresse de contact et d'inscription (pied de page, contact, délais d'accès). En cas de
  // changement, la reporter aussi dans les CGV (annulation) et dans le design system (fiches).
  email: 'formation@viv-prod.com',
  adresse: { rue: '14-30 rue de Mantes', codePostal: '92700', ville: 'Colombes' },
  // TODO : adresse réelle de la page LinkedIn de l'organisme.
  linkedin: '#',
  declarationActivite: '11923083592',
  /** Référent handicap, seul contact accessibilité, sans variante (fiche programme, déroulé, support). */
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
    hint: 'Semaines possibles, nombre de participants, versions installées.',
  },
  {
    value: 'devis',
    label: 'Demander un devis',
    hint: 'Formation visée, nombre de participants, adresse de vos locaux.',
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
      'Nous identifions avec vous ce que vos équipes doivent savoir faire après la formation, et vérifions sa faisabilité : niveau des participants, matériel, versions installées, délais.',
  },
  {
    titre: 'Programme ajusté',
    meta: 'Sous une semaine',
    texte:
      'Nous vous envoyons le programme adapté, le devis et les prérequis techniques à valider avec votre service informatique.',
  },
  {
    titre: 'Sessions',
    meta: 'Présentiel, dans vos locaux',
    texte:
      'En petits groupes, sur vos postes : apports théoriques, exercices de mise en situation et quiz, puis un QCM final sur les compétences acquises.',
  },
  {
    titre: 'Suivi',
    meta: 'Après la mise en application',
    texte:
      'Une fois vos équipes en pratique, nous assurons un suivi en production ou des séances de questions-réponses, à un moment fixé avec vous selon vos besoins et vos disponibilités.',
  },
] as const;

/** Section « Pour qui » de l'accueil. */
export const SECTEURS = [
  { nom: 'Design automobile', detail: 'Revue de design, rendu, temps réel' },
  { nom: 'Ferroviaire', detail: 'Préparation de données CAO' },
  { nom: 'Aéronautique', detail: 'Visualisation et configurateurs' },
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
      'Questionnaire de satisfaction en fin de session et suivi après la formation ; les résultats sont publiés ci-dessous.',
  },
];

/**
 * Section « Indicateurs qualité » de l'accueil : indicateurs de résultats, toutes formations
 * confondues (indicateur 2 du référentiel Qualiopi), tirés du questionnaire de satisfaction de fin
 * de session. Valeurs relevées, jamais estimées ni arrondies à la hausse : `null` affiche « Mesure en
 * cours ». À mettre à jour chaque année, avec la date du relevé (`releve`, AAAA-MM-JJ).
 * Pas de nombre de participants : il n'est pas significatif à ce stade.
 */
export const INDICATEURS_QUALITE: {
  releve: string | null;
  /** Note moyenne sur 5 donnée à la formation. */
  satisfaction: number | null;
  /** Part, en %, des participants qui répondent « oui » à « Recommanderiez-vous cette formation ? ». */
  recommandation: number | null;
} = {
  releve: null,
  satisfaction: null,
  recommandation: null,
};

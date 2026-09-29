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
  // Adresse de contact et d'inscription NON CONFIRMÉE (celle des fiches programme) : à mettre à jour
  // ici, dans les CGV et dans le design system dès qu'elle est confirmée ou remplacée.
  email: 'formation@viv-formation.com',
  adresse: { rue: '14 rue de Mantes', codePostal: '92700', ville: 'Colombes' },
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
    titre: 'Cadrage',
    meta: '1 heure — entretien téléphonique',
    texte:
      'Vos postes, vos versions installées, ce que vous produisez et ce qui doit être opérationnel après la formation.',
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
      'Petits groupes, fichiers d’exercice installés la veille, objectifs évalués en fin de journée.',
  },
  {
    titre: 'Suivi',
    meta: '1 heure — entretien téléphonique',
    texte: 'Deux semaines après la session, sur vos premiers fichiers de production.',
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
 * Section « Gage de qualité » de l'accueil : un engagement par exigence du référentiel national
 * qualité (Qualiopi), sans le nommer tant que le certificat n'est pas obtenu — information du public,
 * objectifs adaptés, suivi et évaluation, moyens, compétences des formateurs, recueil des
 * appréciations. L'accessibilité et les réclamations occupent la colonne latérale de la section, où
 * se placera la mention de certification.
 */
export const ENGAGEMENTS_QUALITE: ({ titre: string; texte: string } & Repere)[] = [
  {
    icone: 'file-text',
    titre: 'Une information complète avant votre demande',
    texte:
      'La fiche de chaque formation publie les objectifs, le public, les prérequis, la durée, le tarif, les délais d’accès et les modalités d’évaluation.',
  },
  {
    icone: 'target',
    titre: 'Un programme ajusté à votre équipe',
    texte:
      'Le cadrage d’une heure et l’évaluation de début de parcours situent le niveau de chacun ; le déroulé s’adapte à vos postes, à vos versions et à vos projets.',
  },
  {
    icone: 'circle-check',
    titre: 'Des acquis vérifiés',
    texte:
      'Exercices et quiz pendant la formation, QCM final sur chaque objectif pédagogique, certificat de réalisation remis à chaque participant.',
  },
  {
    icone: 'monitor',
    titre: 'Sur vos postes, dans vos locaux',
    texte:
      'Chaque session se tient sur votre matériel et vos versions de logiciel, avec des fichiers d’exercice installés la veille et 8 participants au maximum.',
  },
  {
    icone: 'users',
    titre: 'Des formateurs du métier',
    texte:
      'Nos formateurs travaillent en production 3D et en intégration d’IA : ils enseignent ce qu’ils pratiquent et tiennent les programmes à jour des versions des logiciels.',
  },
  {
    // Lucide « message-square-text ».
    trace:
      '<path d="M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z" /> <path d="M7 11h10" /> <path d="M7 15h6" /> <path d="M7 7h8" />',
    titre: 'Vos retours pris en compte',
    texte:
      'Un questionnaire de satisfaction clôt chaque session et l’entretien de suivi recueille vos retours de production : ils font évoluer les programmes.',
  },
];

/**
 * Section « Indicateurs qualité » de l'accueil : un indicateur de résultats, toutes formations
 * confondues (indicateur 2 du référentiel Qualiopi) — la note moyenne sur 5 du questionnaire de
 * satisfaction de fin de session. Valeur relevée, jamais estimée ni arrondie à la hausse :
 * `note: null` affiche « Mesure en cours ». À mettre à jour après chaque session, avec la date du
 * relevé (`releve`, AAAA-MM-JJ). Pas de nombre de participants : il n'est pas significatif à ce stade.
 */
export const INDICATEUR_SATISFACTION: { note: number | null; releve: string | null } = {
  note: null,
  releve: null,
};

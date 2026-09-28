/**
 * Informations globales et textes partagés du site.
 * Rappels de la charte (docs/design-system/readme.md) : pas de CPF, pas de session au calendrier
 * (« Demander des dates », jamais « S'inscrire »), présentiel uniquement et chez le client (« dans vos
 * locaux », jamais « notre salle »), pas de mention Qualiopi.
 */
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

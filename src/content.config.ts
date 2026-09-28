import { defineCollection, reference } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';
import { ICON_PATHS, type IconName } from './components/ds/icons';
import { donneesYaml } from './lib/donnees-yaml';

const icone = z.enum(Object.keys(ICON_PATHS) as [IconName, ...IconName[]]);

/**
 * Classements du catalogue (src/data/*.yaml) :
 *   - domaine : le domaine d'expertise, ce que la formation apprend à faire (ex. « 3D temps réel ») ;
 *   - outil   : le ou les logiciels utilisés (ex. « Blender ») ;
 *   - type    : la forme de la formation (ex. « Module », « Sensibilisation »).
 * Les domaines structurent l'accueil, le premier filtre du catalogue et le pied de page.
 * Les `id` servent de slugs dans les URLs et les filtres.
 */
const taxonomie = {
  id: z.string(),
  label: z.string(),
  ordre: z.number().default(0),
};

const domaines = defineCollection({
  loader: donneesYaml('src/data/domaines.yaml'),
  schema: z.object({
    ...taxonomie,
    /** Préfixe des références de formation du domaine : IAG → IAG01. Absent = pas encore de code. */
    code: z
      .string()
      .regex(/^[A-Z0-9]{2,4}$/, 'code : 2 à 4 capitales ou chiffres')
      .optional(),
    icone,
    /** Texte de la carte du domaine sur l'accueil. */
    description: z.string(),
    /** Légende libre sous la carte du domaine (outils couverts). */
    outilsTexte: z.string(),
  }),
});

const outils = defineCollection({
  loader: donneesYaml('src/data/outils.yaml'),
  schema: z.object({ ...taxonomie, icone }),
});

const types = defineCollection({
  loader: donneesYaml('src/data/types.yaml'),
  schema: z.object(taxonomie),
});

/** Formateurs : copie de templates/support-formation/formateurs.md du design system, qui fait foi. */
const formateurs = defineCollection({
  loader: donneesYaml('src/data/formateurs.yaml'),
  schema: z.object({
    id: z.string(),
    nom: z.string(),
    fonction: z.string(),
    parcours: z.array(z.string()).min(1),
    /** Groupes d'expertises, chacun rattaché aux domaines de formation qu'il couvre. */
    expertises: z
      .array(
        z.object({
          groupe: z.string(),
          domaines: z.array(reference('domaines')).min(1),
          items: z.array(z.string()).min(1),
        }),
      )
      .min(1),
    langues: z.string().optional(),
    /** Portrait carré dans public/ (ex. /formateurs/<id>.jpg), pris avec l'accord de la personne. */
    portrait: z.string().optional(),
  }),
});

/**
 * Verbes refusés en tête d'objectif pédagogique : ils ne décrivent pas un résultat observable
 * (règles de la fiche programme et du support, alignées sur la fiche : « naviguer » est admis).
 */
const VERBES_REFUSES = [
  'appréhender',
  'comprendre',
  'connaître',
  'découvrir',
  'décoder',
  'maîtriser',
  'savoir',
  'se familiariser',
  'sensibiliser',
  "s'initier",
];
const verbeRefuse = (objectif: string) => {
  const debut = objectif.toLowerCase().replaceAll('’', "'");
  return VERBES_REFUSES.find((v) => debut === v || debut.startsWith(`${v} `));
};
const mots = (texte: string) => texte.trim().split(/\s+/).length;
const liste = (champ: string, min: number, max: number) =>
  z
    .array(z.string().min(1))
    .min(min, `${champ} : ${min} élément(s) au moins`)
    .max(max, `${champ} : ${max} éléments au plus`);

/**
 * Une formation = un fichier Markdown dans src/content/formations/, source unique de la page du site
 * et de la fiche programme imprimable, et base du déroulé pédagogique et du support. Le nom du
 * fichier donne l'URL (/formations/<nom>/) et ne change plus une fois publié. Tout est dans le
 * frontmatter : le corps reste vide. Les textes fixes (modalités, délais d'accès, accessibilité,
 * sanction, méthodes et évaluation, tarif intra) sont dans src/components/ModalitesFormation.astro,
 * EvaluationFormation.astro et OrganiserFormation.astro.
 * Format complet : docs/format-formation.md.
 */
const formations = defineCollection({
  loader: glob({ pattern: '**/[^_]*.{md,mdx}', base: './src/content/formations' }),
  schema: ({ image }) =>
    z
      .strictObject({
        /* Identité documentaire, commune à la fiche (-PRO), au déroulé (-DP) et au support (-SU). */
        /** Code du domaine + numéro sur deux chiffres : TRL01. */
        reference: z
          .string()
          .regex(/^[A-Z0-9]{2,4}\d{2}$/, 'référence : code du domaine + deux chiffres (ex. IAG01)'),
        /** Année sur deux chiffres, « v », numéro sur deux chiffres : 26v01. */
        version: z.string().regex(/^\d{2}v\d{2}$/, 'version : AAvNN (ex. 26v01)'),
        /** Date de révision du programme. */
        revision: z.coerce.date(),

        /* Présentation */
        titre: z.string().min(1),
        /** Surtitre des pages de la fiche et du déroulé, pied de page du support. */
        titreCourt: z.string().min(1).max(40, 'titreCourt : 40 caractères au plus'),
        /** Une phrase, deux lignes de fiche : sous-titre, carte du catalogue, objectif général. */
        sousTitre: z
          .string()
          .max(180, 'sousTitre : 180 caractères au plus')
          .refine((s) => s.trim().endsWith('.'), 'sousTitre : une phrase complète, avec son point')
          .refine((s) => mots(s) <= 30, 'sousTitre : 30 mots au plus'),

        /* Classement (site) */
        type: reference('types'),
        domaine: reference('domaines'),
        /** Outil principal en premier (il donne le repère de la carte). Vide = sans outil imposé. */
        outils: z.array(reference('outils')).default([]),

        /* Bandeau de repères */
        niveau: z.enum(['Débutant', 'Intermédiaire', 'Confirmé', 'Tous profils']),
        duree: z.object({
          heures: z.number().int().positive(),
          jours: z.number().int().positive(),
        }),
        /** Tarif inter-entreprises en euros HT par personne. Absent = « Sur devis ». */
        tarif: z.number().positive().optional(),
        /** Pour qui. */
        public: liste('public', 1, 4),
        prerequis: liste('prerequis', 1, 4),
        /** Équipement requis, non fourni par VIV : logiciels (version comprise) d'abord, matériel ensuite. */
        equipement: liste('equipement', 1, 4).optional(),
        /** Matériel fourni par VIV, ajouté aux méthodes pédagogiques. */
        materielFourni: liste('materielFourni', 1, 4).optional(),

        /* Objectifs et compétences */
        /** Trois à huit, chacun ouvert par un verbe observable à l'infinitif. */
        objectifs: z
          .array(
            z
              .string()
              .max(180, 'objectif : 180 caractères au plus')
              .refine((o) => !verbeRefuse(o), {
                error: (iss) =>
                  `objectif « ${iss.input} » : « ${verbeRefuse(String(iss.input))} » n'est pas un verbe observable`,
              }),
          )
          .min(3, 'objectifs : 3 à 8')
          .max(8, 'objectifs : 3 à 8'),
        /** Trois à six, chacune avec les numéros (à partir de 1) des objectifs qui y mènent. */
        competences: z
          .array(
            z.strictObject({
              libelle: z.string().min(1).max(180),
              objectifs: z.array(z.number().int().positive()).min(1),
            }),
          )
          .min(3, 'competences : 3 à 6')
          .max(6, 'competences : 3 à 6'),
        /** Programme détaillé : une partie par module du déroulé, sans durée. */
        programme: z
          .array(
            z.strictObject({
              titre: z.string().min(1).max(55, 'titre de partie : 55 caractères au plus'),
              points: z
                .array(z.string().min(1).max(180, 'point : 180 caractères au plus'))
                .min(3, 'points : 3 à 6 par partie')
                .max(6, 'points : 3 à 6 par partie'),
            }),
          )
          .min(1),
        /** Absent = pas de section formateur sur le site, pas de bloc formateur sur la fiche. */
        formateur: reference('formateurs').optional(),

        /* Visuel de couverture : cartes du catalogue, en-tête de la page, image de partage, couverture
           du support. 16:9, 1920 × 1080 px au moins ; rendu ou capture d'un fichier d'exercice VIV
           Formation, jamais une photo de session, un logo d'éditeur ni un élément de projet client. */
        visuel: image().optional(),
        /** Texte alternatif, obligatoire avec un visuel : ce que l'image montre. */
        visuelAlt: z.string().min(1).optional(),
        /** Auteur ou provenance, affiché sous le visuel. */
        visuelCredit: z.string().min(1).optional(),
        /** Outil d'IA qui a produit ou retouché le visuel : affiche « Image générée avec <outil> ». */
        visuelIA: z.string().min(1).optional(),

        /* Site uniquement */
        statut: z
          .enum(['Dates à convenir', 'Session confirmée', 'Session reportée'])
          .default('Dates à convenir'),
        /** Mise en avant dans « Formations souvent demandées » sur l'accueil. */
        enAvant: z.boolean().default(false),
        /** Contenu d'exemple : affiche un badge « Exemple provisoire ». À retirer avant publication. */
        provisoire: z.boolean().default(false),
        ordre: z.number().default(0),
        brouillon: z.boolean().default(false),
      })
      .refine((f) => !f.visuel || f.visuelAlt, {
        message: 'visuelAlt : obligatoire avec un visuel',
        path: ['visuelAlt'],
      })
      .refine(
        (f) => f.competences.every((c) => c.objectifs.every((n) => n <= f.objectifs.length)),
        {
          message: 'competences : un numéro d’objectif dépasse le nombre d’objectifs',
          path: ['competences'],
        },
      ),
});

/**
 * Pages juridiques (mentions légales, CGV) : un fichier Markdown dans src/content/legal/ = une page
 * à la racine du site (/<nom>/), rendue par src/components/PageJuridique.astro depuis la page
 * src/pages/<nom>.astro. Le corps est le texte intégral.
 */
const legal = defineCollection({
  loader: glob({ pattern: '**/[^_]*.md', base: './src/content/legal' }),
  schema: z.object({
    titre: z.string(),
    description: z.string(),
  }),
});

export const collections = { domaines, outils, types, formateurs, formations, legal };

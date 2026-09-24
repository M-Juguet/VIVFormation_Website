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

/**
 * Une formation = un fichier Markdown dans src/content/formations/. Le nom du fichier donne l'URL
 * (/formations/<nom>/) ; le corps du fichier est le chapô de la fiche. Le déroulé fixe (cadrage
 * téléphonique, journées, suivi) est ajouté autour du programme par src/lib/formations.ts.
 */
const formations = defineCollection({
  loader: glob({ pattern: '**/[^_]*.{md,mdx}', base: './src/content/formations' }),
  schema: ({ image }) =>
    z
      .object({
        titre: z.string(),
        /** Résumé d'une phrase, affiché sur la carte du catalogue. */
        resume: z.string().max(220),

        type: reference('types'),
        domaine: reference('domaines'),
        /** Outil principal en premier (il donne le repère de la carte). Vide pour une formation sans outil imposé. */
        outils: z.array(reference('outils')).default([]),

        duree: z.object({
          heures: z.number().int().positive(),
          jours: z.number().int().positive(),
        }),
        niveau: z.enum(['Débutant', 'Intermédiaire', 'Confirmé', 'Tous profils']),
        participants: z
          .object({ min: z.number().int().positive(), max: z.number().int().positive() })
          .refine((p) => p.min <= p.max, 'participants.min doit être ≤ participants.max'),
        /** Tarif inter-entreprises en euros, net de taxe, par participant. Absent = « Sur devis ». */
        tarif: z.number().positive().optional(),
        statut: z
          .enum(['Dates à convenir', 'Session confirmée', 'Session reportée'])
          .default('Dates à convenir'),

        /** Trois à six objectifs, à l'infinitif, vérifiables au poste de travail. */
        objectifs: z.array(z.string()).min(3).max(6),
        /** Une entrée par journée de présentiel. */
        programme: z.array(z.object({ titre: z.string(), contenu: z.string() })).min(1),
        prerequis: z.object({
          /** Version exacte : « Blender 5.2 LTS », jamais « dernière version ». */
          version: z.string(),
          elements: z
            .array(
              z.object({
                libelle: z.string(),
                valeur: z.string(),
                /** Affiche la valeur en police mono (chemin, commande). */
                code: z.boolean().default(false),
              }),
            )
            .min(1),
        }),

        /** Rendu ou capture d'un fichier d'exercice VIV Formation (jamais une photo de session). */
        visuel: image().optional(),
        visuelAlt: z.string().optional(),

        /** Mise en avant dans « Formations souvent demandées » sur l'accueil. */
        enAvant: z.boolean().default(false),
        /** Contenu d'exemple : affiche un badge « Exemple provisoire ». À retirer avant publication. */
        provisoire: z.boolean().default(false),
        misAJour: z.coerce.date().optional(),
        ordre: z.number().default(0),
        brouillon: z.boolean().default(false),
      })
      .refine((f) => f.programme.length === f.duree.jours, {
        message: 'Le programme doit compter une entrée par journée (duree.jours).',
        path: ['programme'],
      }),
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

export const collections = { domaines, outils, types, formations, legal };

import { readFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import type { Loader, LoaderContext } from 'astro/loaders';
import { load } from 'js-yaml';

/**
 * Chargeur des classements (src/data/*.yaml) qui fait échouer le build au moindre problème.
 *
 * Le chargeur `file` d'Astro se contente de journaliser une erreur de syntaxe YAML, un fichier
 * absent ou une entrée sans `id`, puis poursuit avec une collection vide : le site serait publié
 * sans domaines ni filtres, sans alerte. Ici, chacun de ces cas interrompt le build, donc la CI.
 * En développement, une erreur introduite en cours de session est journalisée et les données
 * précédentes restent affichées.
 */
export function donneesYaml(fichier: string): Loader {
  return {
    name: 'donnees-yaml',
    load: async (context) => {
      const chemin = fileURLToPath(new URL(fichier, context.config.root));
      await charger(fichier, chemin, context);
      context.watcher?.add(chemin);
      context.watcher?.on('change', async (modifie) => {
        if (modifie !== chemin) return;
        try {
          await charger(fichier, chemin, context);
          context.logger.info(`${fichier} rechargé.`);
        } catch (e) {
          context.logger.error(e instanceof Error ? e.message : String(e));
        }
      });
    },
  };
}

async function charger(fichier: string, chemin: string, { store, parseData }: LoaderContext) {
  // Erreur de syntaxe : js-yaml lève une exception qui cite la ligne fautive.
  const entrees = load(await readFile(chemin, 'utf-8'), { filename: fichier });
  if (!Array.isArray(entrees) || entrees.length === 0) {
    throw new Error(`${fichier} : une liste d’entrées non vide est attendue.`);
  }

  // Tout est validé (id, schéma) avant de remplacer le contenu de la collection.
  const ids = new Set<string>();
  const valides = [];
  for (const [i, entree] of entrees.entries()) {
    const id: unknown = entree?.id;
    if (typeof id !== 'string' || !id) {
      throw new Error(`${fichier} : l’entrée n° ${i + 1} n’a pas d’id.`);
    }
    if (ids.has(id)) throw new Error(`${fichier} : l’id « ${id} » apparaît deux fois.`);
    ids.add(id);
    valides.push({ id, data: await parseData({ id, data: entree, filePath: fichier }) });
  }

  store.clear();
  for (const { id, data } of valides) store.set({ id, data, filePath: fichier });
}

Champ de formulaire complet : libellé, saisie, aide et message d'erreur reliés par aria-describedby.

    <Field label="Version de Blender installée" hint="Numéro et canal, p. ex. 5.2 LTS" required />
    <Field label="Besoin" multiline rows={4} />

**Props** — `hint` (format attendu, écrit avant la saisie), `error` (bordure `danger` 2px + aria-invalid), `required`, `multiline` / `rows`, `disabled` (45% d'opacité).

**À éviter** — Un placeholder à la place du libellé. Une erreur de couleur sans message explicite. Retirer l'anneau de focus.

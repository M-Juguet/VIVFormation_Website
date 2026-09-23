Déclenche l'action principale d'un écran ou d'un document interactif : demander un devis, demander des dates, télécharger un programme.

    <Button variant="primary" icon={<Icon name="calendar" />}>Demander des dates</Button>

**Variantes** — `variant` : `primary` (aplat `action` + `on-action`), `secondary` (contour `border-strong`, texte `action`), `ghost` (texte seul). `size="sm"` pour les barres d'outils et les pieds de carte. `pill` pour les filtres. `href` rend un `a`.

**À faire** — Un seul `primary` par écran ou par bloc. Libellé verbe d'abord : « Télécharger le programme », pas « Programme ». Jamais « S'inscrire » : les dates se fixent avec le client, le libellé est « Demander des dates » ou « Demander un devis ».

**À éviter** — Un primaire peint en `brand-rose` (le pastel ne tient pas le contraste). Un bouton désactivé sans explication à côté. Un bouton pour une simple navigation dans un texte : utilisez un lien en `action`.

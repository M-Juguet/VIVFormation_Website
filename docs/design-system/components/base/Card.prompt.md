Conteneur générique posé sur une page : bloc de modalités, encadré d'accessibilité, résumé administratif.

    <Card overline="Modalités" title="Organisation de la session" footer={<Button size="sm" variant="secondary">Demander un devis</Button>}>
      <p>Présentiel dans vos locaux ou sur le site du client. Groupe de 3 à 6 participants.</p>
    </Card>

**Props** — `overline` (capitales, `ink-muted`), `title` (italique gras Noto Sans), `footer`, `flat` (retire l'ombre : carte sur `surface-sunken` ou destinée à l'impression).

**À éviter** — Une carte pour une formation : c'est `ModuleCard`. Empiler deux ombres (carte dans une carte).

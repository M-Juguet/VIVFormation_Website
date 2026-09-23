const { Field, Button, Callout, Card, Icon, Badge } = window.VivFormationDesignSystem_81f768;

/* Bande sombre, comme le bas de la page d'accueil : le formulaire en verre dépoli. */
function DemandeScreen({ onBack }) {
  const [sent, setSent] = React.useState(false);
  const [participants, setParticipants] = React.useState('4');
  const invalid = Number(participants) > 6 || Number(participants) < 3;
  return (
    <section className="viv-enter viv-section" data-theme="sombre" style={{ background: 'var(--surface-brand)', color: 'var(--ink)' }}>
      <div className="viv-wrap viv-split viv-split--form">
        <div>
          <p className="overline" style={{ color: 'var(--ink-muted)', margin: 0 }}>Demande</p>
          <h1 className="display-lg" style={{ margin: 'var(--space-2) 0 var(--space-4)' }}>Demander des dates</h1>
          <p className="body-lg" style={{ color: 'var(--ink-muted)', maxWidth: '58ch', margin: '0 0 var(--space-8)' }}>
            Nous vous rappelons pour un cadrage d'une heure : vos postes, vos versions installées, ce que vous produisez. Les dates se fixent ensuite avec vous.
          </p>
          <Card overline="Ce que nous ne faisons pas" title="Pour éviter un malentendu" flat>
            <ul style={{ margin: 0, paddingLeft: '1.1em', display: 'flex', flexDirection: 'column', gap: 'var(--space-2)' }}>
              <li>Pas de session au calendrier : les dates se fixent avec vous.</li>
              <li>Présentiel uniquement. Seuls le cadrage et le suivi sont téléphoniques.</li>
              <li>Pas de financement par le compte personnel de formation.</li>
            </ul>
          </Card>
          <div style={{ display: 'flex', gap: 'var(--space-2)', flexWrap: 'wrap', marginTop: 'var(--space-5)' }}>
            <Badge tone="neutral" icon={<Icon name="map-pin" size={16} />}>Présentiel</Badge>
            <Badge tone="info" icon={<Icon name="calendar" size={16} />}>Dates à convenir</Badge>
            <Badge tone="gold">Prise en charge OPCO</Badge>
          </div>
        </div>

        <div className="viv-glass" style={{ padding: 'var(--space-6)' }}>
          {sent ? (
            <Callout tone="success" title="Demande enregistrée">
              <p style={{ margin: 0 }}>Nous vous rappelons sous deux jours ouvrés pour le cadrage préalable. Vous recevez le programme à jour par courriel.</p>
            </Callout>
          ) : (
            <form
              onSubmit={(e) => { e.preventDefault(); if (!invalid) setSent(true); }}
              className="viv-form-grid"
            >
              <Field label="Formation souhaitée" defaultValue="Blender : modélisation et rendu" required />
              <Field label="Entreprise" placeholder="Raison sociale" required />
              <Field label="Nom et prénom" placeholder="Votre nom" required />
              <Field label="Courriel professionnel" type="email" placeholder="prenom.nom@entreprise.fr" required />
              <Field
                label="Nombre de participants" value={participants}
                onChange={(e) => setParticipants(e.target.value)}
                hint="Entre 3 et 6 pour ce module"
                error={invalid ? 'Indiquez un nombre entre 3 et 6.' : undefined}
              />
              <Field label="Lieu envisagé" defaultValue="Nos locaux" hint="Vos locaux, notre salle, ou à préciser" />
              <Field
                label="Période envisagée et contraintes" multiline rows={4}
                hint="Semaines possibles, versions installées, projets en cours"
                className="viv-form-wide"
              />
              <div className="viv-form-wide" style={{ display: 'flex', flexWrap: 'wrap', gap: 'var(--space-3)', alignItems: 'center' }}>
                <Button type="submit">Envoyer la demande</Button>
                <Button type="button" variant="ghost" onClick={onBack}>Revenir au catalogue</Button>
              </div>
            </form>
          )}
          <p className="caption" style={{ color: 'var(--ink-muted)', margin: 'var(--space-5) 0 0' }}>
            Accessibilité : dites-nous ce qu'il faut adapter, nous organisons la session en conséquence.
          </p>
        </div>
      </div>
    </section>
  );
}

Object.assign(window, { DemandeScreen });

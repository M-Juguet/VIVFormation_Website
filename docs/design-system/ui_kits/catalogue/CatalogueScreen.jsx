const { ModuleCard, Button, Icon } = window.VivFormationDesignSystem_81f768;

function FilterRow({ label, options, value, onChange }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-3)', flexWrap: 'wrap' }}>
      <span className="label" style={{ color: 'var(--ink-muted)', width: 72 }}>{label}</span>
      {['Tous'].concat(options).map((o) => (
        <Button key={o} size="sm" pill variant={value === o ? 'primary' : 'secondary'} onClick={() => onChange(o)}>{o}</Button>
      ))}
    </div>
  );
}

function CatalogueScreen({ onOpen, onDemande }) {
  const { formations, domaines, outils, types } = window.VIV_DATA;
  const [domaine, setDomaine] = React.useState('Tous');
  const [outil, setOutil] = React.useState('Tous');
  const [type, setType] = React.useState('Tous');
  const list = formations.filter((f) =>
    (domaine === 'Tous' || f.domaine === domaine) &&
    (outil === 'Tous' || f.outils.indexOf(outil) !== -1) &&
    (type === 'Tous' || f.type === type)
  );
  const tone = (statut) => (statut === 'Session confirmée' ? 'success' : statut === 'Session reportée' ? 'danger' : 'info');
  return (
    <div className="viv-enter">
      {/* Bande sombre : titre de page et filtres, le panneau de filtres en verre dépoli. */}
      <section className="viv-section" data-theme="sombre" style={{ background: 'var(--surface-brand)', color: 'var(--ink)' }}>
        <div className="viv-wrap">
          <p className="overline" style={{ color: 'var(--ink-muted)', margin: 0 }}>Catalogue</p>
          <h1 className="display-lg" style={{ margin: 'var(--space-2) 0 var(--space-4)', maxWidth: 760 }}>Vingt formations techniques, organisées à la demande</h1>
          <p className="body-lg" style={{ color: 'var(--ink-muted)', maxWidth: '62ch', margin: '0 0 var(--space-10)' }}>
            Une formation se range sur trois dimensions : l'outil, le domaine et le type. Les dates se fixent avec vous ; toutes les sessions se tiennent en présentiel.
          </p>
          <div className="viv-glass" style={{ padding: 'var(--space-5)', display: 'flex', flexDirection: 'column', gap: 'var(--space-3)' }}>
            <FilterRow label="Domaine" options={domaines} value={domaine} onChange={setDomaine} />
            <FilterRow label="Outil" options={outils} value={outil} onChange={setOutil} />
            <FilterRow label="Type" options={types} value={type} onChange={setType} />
          </div>
        </div>
      </section>

      {/* Bande claire : ce qui compte se lit sur surface. */}
      <section className="viv-section viv-section--tight" style={{ background: 'var(--surface)' }}>
        <div className="viv-wrap">
          <p className="body-sm" style={{ color: 'var(--ink-subtle)', margin: '0 0 var(--space-5)' }}>
            {list.length} formation{list.length > 1 ? 's' : ''} sur {formations.length}
          </p>
          <div className="viv-grid-cards">
            {list.map((f) => (
              <ModuleCard
                key={f.id}
                imagePlaceholder={f.visuel || "Rendu ou capture d'un fichier d'exercice"}
                mark={<Icon name={f.icone} size={24} tile="degrade" shape="carre" />}
                overline={f.type + ' · ' + f.domaine}
                title={f.titre}
                summary={f.resume}
                meta={[{ label: 'Durée', value: f.duree }]}
                badges={(f.outils.length ? f.outils.map((o) => ({ label: o, tone: 'rose' })) : [{ label: f.domaine, tone: 'gold' }])
                  .concat([{ label: 'Présentiel', tone: 'neutral' }, { label: f.statut, tone: tone(f.statut) }])}
                price={f.prix}
                priceNote="net de taxe, par participant"
                action={f.objectifs
                  ? <Button size="sm" variant="ghost" icon={<Icon name="arrow-right" size={16} />} onClick={() => onOpen(f.id)}>Voir la fiche</Button>
                  : <Button size="sm" variant="ghost" onClick={onDemande}>Demander des dates</Button>}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

Object.assign(window, { CatalogueScreen });

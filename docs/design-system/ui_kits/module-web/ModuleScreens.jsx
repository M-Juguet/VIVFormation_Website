const { Logo, Progress, Button, Icon, Figure, Kbd, Callout, ObjectivesPanel, Badge } = window.VivFormationDesignSystem_81f768;

function ModuleHeader({ index, total }) {
  return (
    <header style={{ background: 'var(--surface-sunken)', borderBottom: '1px solid var(--border)' }}>
      <div className="viv-wrap" style={{ maxWidth: 880, paddingTop: 'var(--space-4)', paddingBottom: 'var(--space-4)', display: 'flex', alignItems: 'center', gap: 'var(--space-5)' }}>
        <Logo mark="monogramme" height={32} />
        <div style={{ flex: 1 }}>
          <Progress value={index + 1} total={total} steps hint={window.VIV_MODULE.module} />
        </div>
      </div>
    </header>
  );
}

function LessonScreen({ data }) {
  return (
    <>
      <p className="overline" style={{ color: 'var(--ink-muted)', margin: 0 }}>{data.overline}</p>
      <h1 className="display-md" style={{ margin: 'var(--space-2) 0 var(--space-6)' }}>{data.titre}</h1>
      {data.corps.map((p, i) => (
        <p key={i} className="body-lg" style={{ color: 'var(--ink-muted)', maxWidth: '68ch', margin: '0 0 var(--space-5)' }}>{p}</p>
      ))}
      <p className="body" style={{ margin: '0 0 var(--space-8)' }}>
        Chemin de menu : <code className="code" style={{ background: 'var(--surface-code)', borderRadius: 'var(--radius-sm)', padding: '2px 6px' }}>{data.chemin}</code>
        <span style={{ color: 'var(--ink-subtle)' }}> · </span>
        Raccourci : <Kbd keys={data.raccourci} />
      </p>
      <Figure placeholder={data.figure} caption={data.legende} credit="VIV Formation" />
    </>
  );
}

function QuizScreen({ data }) {
  const [picked, setPicked] = React.useState(null);
  const bonne = data.options.findIndex((o) => o.bon);
  return (
    <>
      <p className="overline" style={{ color: 'var(--ink-muted)', margin: 0 }}>{data.overline}</p>
      <h1 className="display-md" style={{ margin: 'var(--space-2) 0 var(--space-6)' }}>{data.titre}</h1>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-3)', maxWidth: 640 }}>
        {data.options.map((o, i) => {
          const chosen = picked === i;
          const reveal = picked !== null;
          const good = reveal && o.bon;
          const bad = reveal && chosen && !o.bon;
          return (
            <button
              key={i} type="button" onClick={() => setPicked(i)} disabled={reveal}
              style={{
                textAlign: 'left', cursor: reveal ? 'default' : 'pointer', font: 'var(--text-body)',
                display: 'flex', alignItems: 'center', gap: 'var(--space-3)',
                padding: 'var(--space-4) var(--space-5)', borderRadius: 'var(--radius-md)',
                border: '1px solid ' + (good ? 'var(--success)' : bad ? 'var(--danger)' : 'var(--border-strong)'),
                background: good ? 'var(--success-surface)' : bad ? 'var(--danger-surface)' : 'var(--surface)',
                color: 'var(--ink)', transition: 'background-color var(--motion-state) var(--motion-standard)'
              }}
            >
              {reveal ? <Icon name={o.bon ? 'circle-check' : chosen ? 'x' : 'chevron-right'} size={20} style={{ color: good ? 'var(--success)' : bad ? 'var(--danger)' : 'var(--ink-subtle)' }} /> : <Icon name="chevron-right" size={20} style={{ color: 'var(--ink-subtle)' }} />}
              <span>{o.texte}</span>
            </button>
          );
        })}
      </div>
      {picked !== null && (
        <div style={{ marginTop: 'var(--space-6)', maxWidth: 640 }} className="viv-enter">
          <Callout tone={data.options[picked].bon ? 'success' : 'warning'} title={data.options[picked].bon ? 'Réponse juste' : 'Réponse à revoir'}>
            <p style={{ margin: 0 }}>{data.options[picked].retour}</p>
            {!data.options[picked].bon && <p style={{ margin: 'var(--space-2) 0 0' }}>La bonne réponse : {data.options[bonne].texte.toLowerCase()}.</p>}
          </Callout>
        </div>
      )}
    </>
  );
}

function FinScreen({ data }) {
  return (
    <>
      <p className="overline" style={{ color: 'var(--ink-muted)', margin: 0 }}>{data.overline}</p>
      <h1 className="display-md" style={{ margin: 'var(--space-2) 0 var(--space-6)' }}>{data.titre}</h1>
      <ObjectivesPanel title="Acquis du module" items={data.acquis} />
      <div style={{ display: 'flex', gap: 'var(--space-3)', marginTop: 'var(--space-8)', flexWrap: 'wrap' }}>
        <Badge tone="success" icon={<Icon name="circle-check" size={16} />}>Module validé</Badge>
        <Badge tone="neutral" icon={<Icon name="file-text" size={16} />}>Fiche mémo disponible</Badge>
      </div>
    </>
  );
}

Object.assign(window, { ModuleHeader, LessonScreen, QuizScreen, FinScreen });

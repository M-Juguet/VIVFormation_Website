const { Button, Badge, Icon, ObjectivesPanel, ProgramSteps, SoftwareRequirements, TrainerCard, Card, Callout, Figure, Kbd } = window.VivFormationDesignSystem_81f768;

function FicheScreen({ id, onBack, onDemande }) {
  const f = window.VIV_DATA.formations.find((x) => x.id === id) || window.VIV_DATA.formations[0];
  return (
    <div className="viv-enter">
      {/* Bande sombre : identité de la formation et carte d'organisation en verre dépoli. */}
      <section className="viv-section" data-theme="sombre" style={{ background: 'var(--surface-brand)', color: 'var(--ink)' }}>
        <div className="viv-wrap">
          <Button variant="ghost" size="sm" icon={<Icon name="chevron-right" size={16} style={{ transform: 'rotate(180deg)' }} />} onClick={onBack}>Retour au catalogue</Button>
          <div className="viv-split viv-split--aside-lg" style={{ marginTop: 'var(--space-6)' }}>
            <div>
              <p className="overline" style={{ color: 'var(--ink-muted)', margin: 0 }}>{f.type} · {f.domaine}</p>
              <h1 className="display-lg" style={{ margin: 'var(--space-2) 0 var(--space-5)' }}>{f.titre}</h1>
              <div style={{ display: 'flex', gap: 'var(--space-2)', flexWrap: 'wrap', marginBottom: 'var(--space-5)' }}>
                {f.outils.map((o) => <Badge key={o} tone="rose">{o}</Badge>)}
                <Badge tone="neutral">Présentiel</Badge>
                <Badge tone="info">{f.statut}</Badge>
              </div>
              <p className="body-lg" style={{ color: 'var(--ink-muted)', maxWidth: '64ch', margin: 0 }}>{f.chapo}</p>
            </div>
            <div className="viv-glass" style={{ padding: 'var(--space-5)' }}>
              <ul style={{ listStyle: 'none', margin: '0 0 var(--space-5)', padding: 0, display: 'flex', flexDirection: 'column', gap: 'var(--space-3)' }}>
                {[
                  { icon: 'clock', label: f.duree },
                  { icon: 'niveau', label: 'Niveau : ' + f.niveau },
                  { icon: 'users', label: f.groupe },
                  { icon: 'map-pin', label: 'Présentiel — vos locaux ou notre salle' },
                  { icon: 'target', label: 'Évaluation : quiz de fin de formation' }
                ].map((r) => (
                  <li key={r.icon} style={{ display: 'flex', gap: 'var(--space-3)', alignItems: 'flex-start' }}>
                    <Icon name={r.icon} size={20} style={{ color: 'var(--action)' }} />
                    <span className="body">{r.label}</span>
                  </li>
                ))}
              </ul>
              <Button onClick={onDemande} style={{ width: '100%' }}>Demander des dates</Button>
              <Button variant="secondary" size="sm" icon={<Icon name="download" size={16} />} style={{ width: '100%', marginTop: 'var(--space-3)' }}>Télécharger le programme</Button>
            </div>
          </div>
        </div>
      </section>

      {/* Bande claire : le contenu pédagogique, celui qui compte. */}
      <section className="viv-section" style={{ background: 'var(--surface)' }}>
        <div className="viv-wrap viv-split viv-split--aside">
          <div>
            <ObjectivesPanel
              intro="À l'issue du module, au poste de travail, vous êtes en mesure de :"
              items={f.objectifs}
            />

            <h2 className="heading-lg" style={{ margin: 'var(--space-12) 0 var(--space-6)' }}>Programme</h2>
            <ProgramSteps steps={f.etapes.map((e) => ({ title: e.titre, meta: e.meta, body: e.corps }))} />

            <h2 className="heading-lg" style={{ margin: 'var(--space-12) 0 var(--space-6)' }}>Prérequis techniques</h2>
            <SoftwareRequirements
              title={'Prérequis techniques — ' + f.outils[0]}
              version={f.version}
              items={f.prerequis}
              note={f.note}
            />

            <h2 className="heading-lg" style={{ margin: 'var(--space-12) 0 var(--space-6)' }}>Ce que vous voyez à l'écran</h2>
            <Figure placeholder="Capture d'un fichier d'exercice VIV Formation" caption="L'éditeur UV après couture des arêtes : le dépliage se lit d'un coup d'œil." credit="VIV Formation" />
            <p className="body" style={{ color: 'var(--ink-muted)', maxWidth: '68ch', marginTop: 'var(--space-5)' }}>
              Le raccourci du menu d'ajout est <Kbd keys={['Shift', 'A']} /> ; le dépliage se lance depuis <code className="code" style={{ background: 'var(--surface-code)', borderRadius: 'var(--radius-sm)', padding: '2px 6px' }}>UV &gt; Unwrap</code>.
            </p>

            <h2 className="heading-lg" style={{ margin: 'var(--space-12) 0 var(--space-6)' }}>Qui anime</h2>
            <TrainerCard
              name="Prénom Nom"
              role="Formateur 3D précalculée"
              bio="Douze ans en studio de design automobile, sur des chaînes Blender et VRED. Anime les modules de modélisation et de rendu depuis 2021."
              tags={['Blender', 'VRED', '3D précalculée']}
            />

            <p className="caption" style={{ color: 'var(--ink-muted)', margin: 'var(--space-12) 0 0' }}>
              {f.maj} — la version du logiciel est vérifiée avant chaque session.
            </p>
          </div>

          <aside className="viv-sticky-aside" style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-5)', position: 'sticky', top: 116, alignSelf: 'start' }}>
            <Card overline="Tarifs" title="Inter entreprise">
              <p style={{ margin: 0 }}>{f.prix} HT par participant*</p>
              <p className="caption" style={{ color: 'var(--ink-subtle)', margin: 'var(--space-1) 0 0' }}>* tarif constitué à partir d'un effectif minimum</p>
              <h3 className="viv-card__title" style={{ marginTop: 'var(--space-5)' }}>Intra entreprise</h3>
              <p style={{ margin: 'var(--space-2) 0 0' }}>Sur devis.</p>
            </Card>
            <Card overline="Calendrier" title="Mise en place sur demande">
              <p style={{ margin: 0 }}>Contacter <a href="mailto:formation@pci-partner.com">formation@pci-partner.com</a>.</p>
            </Card>
            <Card overline="Modalités" title="Ce qui est convenu avant la session">
              <p style={{ margin: 0 }}>Un cadrage téléphonique d'une heure relève vos postes, vos versions installées et ce que vous produisez. Le déroulé s'ajuste là-dessus.</p>
            </Card>
            <Callout tone="info" title="Financement">
              <p style={{ margin: 0 }}>Prise en charge OPCO et plan de développement des compétences de votre entreprise.</p>
            </Callout>
          </aside>
        </div>
      </section>
    </div>
  );
}

Object.assign(window, { FicheScreen });

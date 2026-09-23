const { Button, Badge, Icon, Card, ModuleCard, Figure, Field, Callout } = window.VivFormationDesignSystem_81f768;

function SectionTitle({ overline, titre, intro, sur }) {
  return (
    <div style={{ maxWidth: 720, marginBottom: 'var(--space-10)' }}>
      <p className="overline" style={{ color: sur === 'pastel' ? 'var(--ink-on-pastel)' : 'var(--ink-muted)', margin: 0 }}>{overline}</p>
      <h2 className="display-md" style={{ margin: 'var(--space-2) 0 0', color: sur === 'pastel' ? 'var(--ink-on-pastel)' : 'var(--ink)' }}>{titre}</h2>
      {intro ? <p className="body-lg" style={{ color: sur === 'pastel' ? 'var(--ink-on-pastel)' : 'var(--ink-muted)', margin: 'var(--space-4) 0 0' }}>{intro}</p> : null}
    </div>
  );
}

/* Bande sombre : hero. Le verre dépoli est posé sur l'aplat sombre, là où il a un sens. */
function Hero() {
  return (
    <section className="viv-section" data-theme="sombre" style={{ background: 'var(--surface-brand)', color: 'var(--ink)' }}>
      <div className="viv-wrap viv-split viv-split--hero">
        <div>
          <Badge tone="gold" icon={<Icon name="map-pin" size={16} />}>Présentiel, dans vos locaux ou sur votre site</Badge>
          <h1 className="display-xl" style={{ margin: 'var(--space-5) 0 var(--space-5)' }}>
            Des formations techniques qui tiennent au poste de travail
          </h1>
          <p className="body-lg" style={{ color: 'var(--ink-muted)', maxWidth: '58ch', margin: '0 0 var(--space-8)' }}>
            Image 2D et 3D, temps réel, IA générative. Les sessions s'organisent à la demande, sur vos postes et vos versions de logiciel ; le déroulé s'ajuste après un cadrage d'une heure.
          </p>
          <div style={{ display: 'flex', gap: 'var(--space-4)', flexWrap: 'wrap' }}>
            <Button href="#catalogue" icon={<Icon name="arrow-right" size={18} />}>Voir le catalogue</Button>
            <Button href="#contact" variant="secondary" icon={<Icon name="download" size={18} />}>Télécharger les programmes</Button>
          </div>
        </div>
        <div className="viv-glass" style={{ padding: 'var(--space-5)', display: 'flex', flexDirection: 'column', gap: 'var(--space-4)' }}>
          <Figure placeholder="Rendu issu d'un fichier d'exercice VIV Formation" caption="Aucune image de session : les visuels viennent des fichiers d'exercice." />
          <ul style={{ listStyle: 'none', margin: 0, padding: 0, display: 'flex', flexDirection: 'column', gap: 'var(--space-3)' }}>
            {[
              { i: 'users', t: 'Groupes de 3 à 6 participants' },
              { i: 'clock', t: 'De 7 à 35 heures selon le module' },
              { i: 'target', t: 'Objectifs évalués en fin de journée' }
            ].map((r) => (
              <li key={r.i} style={{ display: 'flex', gap: 'var(--space-3)', alignItems: 'center' }}>
                <Icon name={r.i} size={20} style={{ color: 'var(--action)' }} />
                <span className="body">{r.t}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

/* Bande claire : ce qui compte se lit sur surface. */
function Expertises() {
  return (
    <section id="expertises" className="viv-section" style={{ background: 'var(--surface-sunken)' }}>
      <div className="viv-wrap">
        <SectionTitle overline="Domaines" titre="Cinq domaines, dans l'ordre de la chaîne de production" intro="Une formation porte exactement un domaine : ce que vous venez apprendre à faire, pas le logiciel que vous ouvrez." />
        <div className="viv-grid-tiles">
          {window.VIV_HOME.domaines.map((d) => (
            <Card key={d.nom} title={d.nom}>
              <Icon name={d.icone} size={24} tile="degrade" shape="carre" style={{ marginBottom: 'var(--space-3)' }} />
              <p style={{ margin: 0 }}>{d.texte}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

function Catalogue() {
  const tone = (s) => (s === 'Session confirmée' ? 'success' : 'info');
  return (
    <section id="catalogue" className="viv-section" style={{ background: 'var(--surface)' }}>
      <div className="viv-wrap">
        <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'flex-end', justifyContent: 'space-between', gap: 'var(--space-4)', marginBottom: 'var(--space-10)' }}>
          <SectionTitle overline="Catalogue" titre="Trois formations souvent demandées" />
          <Button variant="ghost" href="#catalogue" icon={<Icon name="arrow-right" size={18} />} style={{ marginBottom: 'var(--space-10)' }}>Voir les vingt formations</Button>
        </div>
        <div className="viv-grid-cards">
          {window.VIV_HOME.formations.map((f) => (
            <ModuleCard
              key={f.titre}
              image={f.image}
              imageAlt=""
              imagePlaceholder={f.visuel}
              mark={<Icon name={f.icone} size={24} tile="degrade" shape="carre" />}
              href="#catalogue"
              overline={f.overline}
              title={f.titre}
              summary={f.resume}
              meta={[{ label: 'Durée', value: f.duree }]}
              badges={(f.outils.length ? f.outils.map((o) => ({ label: o, tone: 'rose' })) : [{ label: 'Sans outil imposé', tone: 'gold' }])
                .concat([{ label: 'Présentiel', tone: 'neutral' }, { label: f.statut, tone: tone(f.statut) }])}
              price={f.prix}
              priceNote="net de taxe, par participant"
              action={<Button size="sm" variant="ghost" href="#catalogue" icon={<Icon name="arrow-right" size={16} />}>Voir la fiche</Button>}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

/* Charnière : bande de dégradé de marque. Elle porte du texte — l'encre est ink-on-pastel. */
function Solutions() {
  return (
    <section id="solutions" className="viv-section" style={{ background: 'var(--gradient-brand)' }}>
      <div className="viv-wrap">
        <SectionTitle sur="pastel" overline="Organisation" titre="Deux façons d'organiser une session" />
        <div className="viv-split viv-split--even" style={{ gap: 'var(--space-6)' }}>
          {window.VIV_HOME.solutions.map((s) => (
            <div key={s.titre} className="viv-glass" style={{ padding: 'var(--space-6)', display: 'flex', gap: 'var(--space-5)', alignItems: 'flex-start' }}>
              <Icon name={s.icone} size={24} tile="ink" />
              <div>
                <h3 className="heading-md" style={{ margin: '0 0 var(--space-2)' }}>{s.titre}</h3>
                <p className="body" style={{ color: 'var(--ink-muted)', margin: 0 }}>{s.texte}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* Bande sombre de bas de page : le contact, moins essentiel que le catalogue. */
function Contact() {
  const [sent, setSent] = React.useState(false);
  return (
    <section id="contact" className="viv-section" data-theme="sombre" style={{ background: 'var(--surface)', color: 'var(--ink)' }}>
      <div className="viv-wrap viv-split viv-split--form">
        <div>
          <SectionTitle overline="Contact" titre="Demander des dates ou un devis" intro="Nous vous rappelons pour un cadrage d'une heure : vos postes, vos versions installées, ce que vous produisez. Les dates se fixent ensuite avec vous." />
          <Callout tone="info" title="Financement">
            <p style={{ margin: 0 }}>Prise en charge OPCO et plan de développement des compétences de votre entreprise. Nous ne proposons pas de financement par le compte personnel de formation.</p>
          </Callout>
        </div>
        <div className="viv-glass" style={{ padding: 'var(--space-6)' }}>
          {sent ? (
            <Callout tone="success" title="Demande enregistrée">
              <p style={{ margin: 0 }}>Nous vous rappelons sous deux jours ouvrés pour le cadrage préalable.</p>
            </Callout>
          ) : (
            <form onSubmit={(e) => { e.preventDefault(); setSent(true); }} className="viv-form-grid">
              <Field label="Entreprise" placeholder="Raison sociale" required />
              <Field label="Nom et prénom" placeholder="Votre nom" required />
              <Field label="Courriel professionnel" type="email" placeholder="prenom.nom@entreprise.fr" required />
              <Field label="Formation visée" defaultValue="Blender : modélisation et rendu" />
              <Field className="viv-form-wide" label="Période envisagée et contraintes" multiline rows={3} hint="Semaines possibles, versions installées, projets en cours" />
              <div className="viv-form-wide">
                <Button type="submit" style={{ width: '100%' }}>Envoyer la demande</Button>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}

Object.assign(window, { Hero, Expertises, Catalogue, Solutions, Contact });

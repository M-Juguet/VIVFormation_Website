const { Logo, Button, Icon } = window.VivFormationDesignSystem_81f768;

const LINKS = [
  { id: 'catalogue', label: 'Catalogue' },
  { id: 'fiche', label: 'Fiches programme' },
  { id: 'demande', label: 'Demander des dates' }
];

/* Bande sombre du haut, identique à celle de la page d'accueil : data-theme sur la section.
   Sous 900px, la navigation passe dans un tiroir plein écran ouvert depuis le haut. */
function SiteHeader({ route, onNavigate }) {
  const [open, setOpen] = React.useState(false);
  return (
    <header data-theme="sombre" style={{ position: 'sticky', top: 0, zIndex: 20, background: 'var(--surface-brand)', boxShadow: 'var(--shadow-md)' }}>
      <div className="viv-wrap viv-header-bar">
        <a href="#" onClick={(e) => { e.preventDefault(); onNavigate('catalogue'); }} style={{ display: 'inline-flex' }}>
          <Logo mark="complet" variant="blanc" height={32} />
        </a>
        <nav className="viv-nav">
          {LINKS.map((l) => (
            <a
              key={l.id} href="#"
              onClick={(e) => { e.preventDefault(); onNavigate(l.id); }}
              style={{ font: 'var(--text-body)', textDecoration: 'none', color: route === l.id ? 'var(--action)' : 'var(--ink-muted)' }}
            >{l.label}</a>
          ))}
          <Button size="sm" onClick={() => onNavigate('demande')} icon={<Icon name="calendar" size={16} />}>Demander un devis</Button>
        </nav>
        <Button className="viv-nav-toggle" variant="ghost" aria-label="Ouvrir le menu" aria-expanded={open} onClick={() => setOpen(true)} icon={<Icon name="menu" size={20} />}>Menu</Button>
      </div>
      <hr className="viv-gradient-line" />
      <div className="viv-drawer" data-theme="sombre" hidden={!open}>
        <div className="viv-drawer__head">
          <Logo mark="monogramme" variant="blanc" height={32} />
          <Button variant="ghost" aria-label="Fermer le menu" onClick={() => setOpen(false)} icon={<Icon name="x" size={20} />}>Fermer</Button>
        </div>
        {LINKS.map((l) => (
          <a key={l.id} href="#" onClick={(e) => { e.preventDefault(); setOpen(false); onNavigate(l.id); }}>{l.label}</a>
        ))}
      </div>
    </header>
  );
}

function SiteFooter() {
  return (
    <footer data-theme="sombre" style={{ background: 'var(--surface-sunken)', color: 'var(--ink)', marginTop: 'var(--space-16)' }}>
      <div className="viv-wrap viv-footer-grid" style={{ paddingTop: 'var(--space-12)', paddingBottom: 'var(--space-12)' }}>
        <div>
          <Logo mark="monogramme" variant="blanc" height={40} />
          <p className="body-sm" style={{ color: 'var(--ink-muted)', margin: 'var(--space-3) 0 0', maxWidth: 300 }}>
            Formations professionnelles à l'image 2D et 3D et à l'IA générative appliquée au travail quotidien. Présentiel, dans nos locaux ou sur votre site.
          </p>
        </div>
        {[
          { t: 'Formations', l: ['Catalogue complet', 'Parcours pipeline', 'Sensibilisations'] },
          { t: 'Financement', l: ['Prise en charge OPCO', 'Plan de développement des compétences'] },
          { t: 'Contact', l: ['contact@viv-formation.com', 'Colombes (92)'] }
        ].map((col) => (
          <div key={col.t}>
            <p className="overline" style={{ color: 'var(--ink-muted)', margin: '0 0 var(--space-3)' }}>{col.t}</p>
            <ul style={{ listStyle: 'none', margin: 0, padding: 0, display: 'flex', flexDirection: 'column', gap: 'var(--space-2)' }}>
              {col.l.map((x) => <li key={x} className="body-sm" style={{ color: 'var(--ink-muted)' }}>{x}</li>)}
            </ul>
          </div>
        ))}
      </div>
      <div style={{ borderTop: '1px solid var(--border)' }}>
        <p className="caption viv-wrap" style={{ color: 'var(--ink-subtle)', paddingTop: 'var(--space-5)', paddingBottom: 'var(--space-5)' }}>
          VIV Formation — numéro de déclaration d'activité 00000000000. Accessibilité : dites-nous ce qu'il faut adapter, nous organisons la session en conséquence. Toutes les formations se tiennent en présentiel ; les dates se fixent avec vous.
        </p>
      </div>
    </footer>
  );
}

Object.assign(window, { SiteHeader, SiteFooter });

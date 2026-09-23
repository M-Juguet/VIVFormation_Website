import React from 'react';
const cx = (...a) => a.filter(Boolean).join(' ');

/* Les fichiers du groupe Logos. Le chemin est résolu depuis le bundle chargé par la page ;
   un projet qui copie les assets ailleurs pose window.VIV_ASSET_BASE = 'mon/chemin/'. */
function base() {
  if (typeof document === 'undefined') return 'assets/logos/';
  if (window.VIV_ASSET_BASE) return window.VIV_ASSET_BASE;
  const s = Array.from(document.querySelectorAll('script[src]')).find((x) => x.src.indexOf('_ds_bundle.js') !== -1);
  return (s ? s.src.replace(/_ds_bundle\.js.*$/, '') : '') + 'assets/logos/';
}
const FILES = {
  'complet-couleur': 'viv-formation-couleur.svg',
  'complet-noir': 'viv-formation-noir.svg',
  'complet-blanc': 'viv-formation-blanc.svg',
  'monogramme-couleur': 'viv-monogramme-couleur.svg',
  'monogramme-noir': 'viv-monogramme-noir.svg',
  'monogramme-blanc': 'viv-monogramme-blanc.svg',
  'submark-noir': 'viv-submark-noir.svg',
  'submark-blanc': 'viv-submark-blanc.svg'
};
const RATIO = { complet: 4340 / 712, monogramme: 1250 / 699, submark: 707 / 699 };
/* Pastille du submark, proportions de la planche de charte VIV Group :
   rayon 0,12 × le côté, marque 0,34 × le côté, centrée. */
const TILE_RADIUS = 0.12;
const TILE_MARK = 0.34;
const TILES = {
  degrade: { background: 'var(--gradient-brand)', ink: 'noir' },
  noir: { background: 'var(--ink)', ink: 'blanc' },
  neutre: { background: 'var(--ink-muted)', ink: 'blanc' },
  contour: { background: 'var(--surface)', boxShadow: 'inset 0 0 0 2px var(--border-strong)', ink: 'noir' }
};
const CLEAR_SPACE = 0.29; /* zone de protection = 0,29 × la hauteur du bloc */

/* Affiche une marque VIV Formation à la bonne taille, avec sa zone de protection ou sa pastille. */
export function Logo({ mark = 'complet', variant, height, clearSpace, tile, size, alt, className, style, ...rest }) {
  const label = alt !== undefined ? alt : 'VIV Formation';
  if (tile) {
    const t = TILES[tile] || TILES.degrade;
    const side = size || 64;
    return (
      <span
        className={cx('viv-logo viv-logo--tile', className)}
        style={{ width: side + 'px', height: side + 'px', borderRadius: Math.round(side * TILE_RADIUS) + 'px', background: t.background, boxShadow: t.boxShadow, ...style }}
        {...rest}
      >
        <img src={base() + FILES['submark-' + (variant || t.ink)]} alt={label} style={{ display: 'block', height: Math.round(side * TILE_MARK) + 'px', width: 'auto' }} />
      </span>
    );
  }
  const v = variant || (mark === 'submark' ? 'noir' : 'couleur');
  const h = height || (mark === 'complet' ? 40 : 48);
  const pad = clearSpace === false ? 0 : Math.round(h * CLEAR_SPACE);
  return (
    <span className={cx('viv-logo', className)} style={{ padding: pad + 'px', ...style }} {...rest}>
      <img src={base() + FILES[mark + '-' + v]} alt={label} height={h} width={Math.round(h * RATIO[mark])} style={{ display: 'block', height: h + 'px', width: 'auto' }} />
    </span>
  );
}

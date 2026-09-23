import React from 'react';
const cx = (...a) => a.filter(Boolean).join(' ');

/* Barre d'avancement d'un module web : où en est le participant dans un parcours, une leçon
   ou un quiz. Elle anime sa largeur, jamais sa couleur. */
export function Progress({ value, total = 100, steps, label, hint, className, ...rest }) {
  const v = Math.max(0, Math.min(value || 0, total));
  const pct = total ? Math.round((v / total) * 100) : 0;
  const text = label || (steps ? 'Étape ' + v + ' sur ' + total : pct + ' %');
  return (
    <div className={cx('viv-progress', className)} {...rest}>
      <div className="viv-progress__head">
        <span className="viv-progress__label">{text}</span>
        {hint ? <span className="viv-progress__hint">{hint}</span> : null}
      </div>
      <div className="viv-progress__track" role="progressbar" aria-valuenow={v} aria-valuemin={0} aria-valuemax={total} aria-valuetext={text}>
        <div className="viv-progress__bar" style={{ width: pct + '%' }}></div>
      </div>
    </div>
  );
}

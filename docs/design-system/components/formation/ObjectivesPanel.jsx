import React from 'react';
const cx = (...a) => a.filter(Boolean).join(' ');

/* Encart des objectifs pédagogiques, obligatoire sur toute fiche programme et toute convention.
   Objectifs à l'infinitif, un verbe d'action par ligne, trois à six. */
export function ObjectivesPanel({ title, intro, items = [], className, ...rest }) {
  return (
    <section className={cx('viv-objectives', className)} {...rest}>
      <h3 className="viv-objectives__title">{title || 'Objectifs pédagogiques'}</h3>
      {intro ? <p className="viv-objectives__intro">{intro}</p> : null}
      <ul className="viv-objectives__list">
        {items.map((item, i) => (
          <li key={i}>
            <span className="viv-objectives__bullet" aria-hidden="true">{i + 1}</span>
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}

import React from 'react';
const cx = (...a) => a.filter(Boolean).join(' ');

/* Conteneur générique posé sur une page : bloc de modalités, encadré d'accessibilité, résumé administratif. */
export function Card({ overline, title, footer, flat, className, children, ...rest }) {
  return (
    <section className={cx('viv-card', flat && 'viv-card--flat', className)} {...rest}>
      {overline || title ? (
        <header className="viv-card__header">
          {overline ? <p className="viv-card__overline">{overline}</p> : null}
          {title ? <h3 className="viv-card__title">{title}</h3> : null}
        </header>
      ) : null}
      <div className="viv-card__body">{children}</div>
      {footer ? <footer className="viv-card__footer">{footer}</footer> : null}
    </section>
  );
}

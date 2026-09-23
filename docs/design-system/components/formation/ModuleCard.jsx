import React from 'react';
import { Badge } from '../base/Badge.jsx';
const cx = (...a) => a.filter(Boolean).join(' ');

/* Carte d'une formation ou d'un module dans le catalogue, la fiche programme ou la proposition
   commerciale. L'ordre d'affichage ne varie jamais : type et domaine en overline, outil principal
   en tête du titre, puis badges outil, modalité, statut.
   Avec `image` (ou `imagePlaceholder`), la carte prend un visuel 16:9 en tête, le repère d'outil
   passe en pastille sur l'angle du visuel et le filet de dégradé se glisse sous l'image. */
export function ModuleCard({ overline, title, summary, meta = [], badges = [], price, priceNote, action, image, imageAlt, imagePlaceholder, mark, href, className, children, ...rest }) {
  const hasMedia = Boolean(image || imagePlaceholder);
  return (
    <article className={cx('viv-module', hasMedia && 'viv-module--media', href && 'viv-module--link', className)} {...rest}>
      {hasMedia ? (
        <div className="viv-module__media">
          {image
            ? <img src={image} alt={imageAlt !== undefined ? imageAlt : ''} loading="lazy" />
            : <div className="viv-module__media-placeholder" aria-hidden="true">{imagePlaceholder}</div>}
          {mark ? <span className="viv-module__mark">{mark}</span> : null}
        </div>
      ) : null}
      <div className="viv-module__strip" aria-hidden="true"></div>
      <div className="viv-module__inner">
        {overline ? <p className="viv-module__overline">{overline}</p> : null}
        <h3 className="viv-module__title">{href ? <a href={href}>{title}</a> : title}</h3>
        {summary ? <p className="viv-module__summary">{summary}</p> : null}
        {meta.length ? (
          <ul className="viv-module__meta">
            {meta.map((m, i) => <li key={i}><span>{m.label} :</span> {m.value}</li>)}
          </ul>
        ) : null}
        {badges.length ? (
          <div className="viv-module__badges">
            {badges.map((b, i) => <Badge key={i} tone={b.tone || 'rose'}>{b.label}</Badge>)}
          </div>
        ) : null}
        {children}
        {price || action ? (
          <div className="viv-module__footer">
            {price
              ? <p className="viv-module__price">{price}{priceNote ? <span> {priceNote}</span> : null}</p>
              : <span></span>}
            {action || null}
          </div>
        ) : null}
      </div>
    </article>
  );
}

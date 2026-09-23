import React from 'react';
const cx = (...a) => a.filter(Boolean).join(' ');

/* Cadre commun de toutes les images du système : portrait de formateur, capture d'un fichier
   d'exercice, rendu. La mention « Image générée avec <outil> » est obligatoire sur tout visuel d'IA. */
export function Figure({ src, alt, caption, credit, ai, full, frame, placeholder, className, children, ...rest }) {
  const notes = [credit, ai ? 'Image générée avec ' + ai : null].filter(Boolean);
  return (
    <figure className={cx('viv-figure', full && 'viv-figure--full', frame === false && 'viv-figure--bare', className)} {...rest}>
      <div className="viv-figure__media">
        {src
          ? <img src={src} alt={alt !== undefined ? alt : ''} loading="lazy" />
          : <div className="viv-figure__placeholder" aria-hidden="true">{placeholder || null}</div>}
      </div>
      {caption || notes.length ? (
        <figcaption className="viv-figure__caption">
          {caption ? <span className="viv-figure__text">{caption}</span> : null}
          {notes.length ? <span className="viv-figure__credit">{notes.join(' · ')}</span> : null}
        </figcaption>
      ) : null}
      {children}
    </figure>
  );
}

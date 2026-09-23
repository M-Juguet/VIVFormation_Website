import React from 'react';
import { Badge } from '../base/Badge.jsx';
const cx = (...a) => a.filter(Boolean).join(' ');
const initials = (name) => String(name || '').split(/\s+/).filter(Boolean).slice(0, 2).map((w) => w.charAt(0).toUpperCase()).join('');

/* Fiche d'un formateur : qui anime, avec quelle expérience. Le nom porte la typographie
   principale (Playfair Display Bold Italic), comme le veut la règle de marque. */
export function TrainerCard({ name, role, bio, tags = [], photo, className, children, ...rest }) {
  return (
    <article className={cx('viv-trainer', className)} {...rest}>
      <div className="viv-trainer__avatar" aria-hidden={photo ? undefined : 'true'}>
        {photo ? <img src={photo} alt={name} /> : initials(name)}
      </div>
      <div>
        <h3 className="viv-trainer__name">{name}</h3>
        {role ? <p className="viv-trainer__role">{role}</p> : null}
        {bio ? <p className="viv-trainer__bio">{bio}</p> : null}
        {tags.length ? (
          <div className="viv-trainer__tags">
            {tags.map((t, i) => <Badge key={i} tone="neutral">{t}</Badge>)}
          </div>
        ) : null}
        {children}
      </div>
    </article>
  );
}

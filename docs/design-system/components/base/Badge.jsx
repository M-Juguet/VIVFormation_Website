import React from 'react';
const cx = (...a) => a.filter(Boolean).join(' ');

/* Étiquette courte qui qualifie une formation ou une session : outil, modalité, statut. */
export function Badge({ tone = 'neutral', icon, className, children, ...rest }) {
  return (
    <span className={cx('viv-badge', 'viv-badge--' + tone, className)} {...rest}>
      {icon ? <span aria-hidden="true">{icon}</span> : null}
      {children}
    </span>
  );
}

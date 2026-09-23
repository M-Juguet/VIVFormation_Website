import React from 'react';
const cx = (...a) => a.filter(Boolean).join(' ');

/* Déclenche l'action principale d'un écran ou d'un document interactif. Un seul `primary` par bloc. */
export function Button({ variant = 'primary', size, pill, className, icon, children, href, ...rest }) {
  const cls = cx('viv-btn', 'viv-btn--' + variant, size === 'sm' && 'viv-btn--sm', pill && 'viv-btn--pill', className);
  const mark = icon ? <span aria-hidden="true">{icon}</span> : null;
  if (href) return <a className={cls} href={href} {...rest}>{mark}{children}</a>;
  return <button className={cls} {...rest} type={rest.type || 'button'}>{mark}{children}</button>;
}

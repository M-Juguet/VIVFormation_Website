import React from 'react';

/* Affiche un raccourci clavier dans une phrase, un livret ou une fiche mémo,
   en kbd sur surface-code. Touches dans l'ordre de pression. */
export function Kbd({ keys, className, children, ...rest }) {
  const list = keys || (children ? [children] : []);
  return (
    <span className={className} {...rest}>
      {list.map((k, i) => [
        i ? <span key={'p' + i} className="viv-kbd__plus" aria-hidden="true">+</span> : null,
        <kbd key={'k' + i} className="viv-kbd">{k}</kbd>
      ])}
    </span>
  );
}

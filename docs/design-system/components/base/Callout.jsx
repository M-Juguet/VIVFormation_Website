import React from 'react';
import { Icon } from './Icon.jsx';
const cx = (...a) => a.filter(Boolean).join(' ');
const MARK = { info: 'info', success: 'circle-check', warning: 'alert', danger: 'x' };
const LABEL = { info: 'Information', success: 'Réussite', warning: 'Attention', danger: 'Erreur' };

/* Encart qui sort une information de son flux : prérequis, confirmation, échéance, report. */
export function Callout({ tone = 'info', title, className, children, ...rest }) {
  return (
    <aside className={cx('viv-callout', 'viv-callout--' + tone, className)} {...rest}>
      <span className="viv-callout__mark"><Icon name={MARK[tone] || 'info'} size={20} /></span>
      <div className="viv-callout__body">
        <p className="viv-callout__title">{title || LABEL[tone]}</p>
        {children}
      </div>
    </aside>
  );
}

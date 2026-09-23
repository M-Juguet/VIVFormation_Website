import React from 'react';
import { Icon } from '../base/Icon.jsx';
const cx = (...a) => a.filter(Boolean).join(' ');

/* Déroulé d'un parcours en étapes : audit de poste, journées de formation, suivi.
   `current` au plus une fois. */
export function ProgramSteps({ steps = [], className, ...rest }) {
  return (
    <ol className={cx('viv-steps', className)} {...rest}>
      {steps.map((s, i) => (
        <li
          key={i}
          className={cx('viv-steps__item', s.state === 'done' && 'viv-steps__item--done', s.state === 'current' && 'viv-steps__item--current')}
          aria-current={s.state === 'current' ? 'step' : undefined}
        >
          <span className="viv-steps__dot">{s.state === 'done' ? <Icon name="check" size={16} /> : i + 1}</span>
          <div>
            <h4 className="viv-steps__title">{s.title}</h4>
            {s.meta ? <p className="viv-steps__meta">{s.meta}</p> : null}
            {s.body ? <p className="viv-steps__body">{s.body}</p> : null}
          </div>
        </li>
      ))}
    </ol>
  );
}

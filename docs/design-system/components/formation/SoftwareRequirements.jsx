import React from 'react';
const cx = (...a) => a.filter(Boolean).join(' ');

/* Tableau des prérequis techniques d'un module : version du logiciel, système, machine, licence.
   La version porte son canal exact : « Blender 5.2 LTS », jamais « dernière version ». */
export function SoftwareRequirements({ title, version, items = [], note, className, ...rest }) {
  return (
    <section className={cx('viv-req', className)} {...rest}>
      <header className="viv-req__header">
        <h3 className="viv-req__title">{title || 'Prérequis techniques'}</h3>
        {version ? <span className="viv-req__version">{version}</span> : null}
      </header>
      <dl className="viv-req__list">
        {items.map((item, i) => [
          <dt key={'dt' + i}>{item.label}</dt>,
          <dd key={'dd' + i}>{item.mono ? <code>{item.value}</code> : item.value}</dd>
        ])}
      </dl>
      {note ? <p className="viv-req__note">{note}</p> : null}
    </section>
  );
}

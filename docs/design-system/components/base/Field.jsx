import React from 'react';
const cx = (...a) => a.filter(Boolean).join(' ');
let seq = 0;

/* Champ de formulaire complet : libellé, saisie, aide et message d'erreur reliés par aria-describedby. */
export function Field({ label, hint, error, required, multiline, rows, disabled, className, id, ...rest }) {
  const fieldId = id || 'viv-field-' + ++seq;
  const hintId = fieldId + '-hint';
  const errId = fieldId + '-error';
  const describedBy = [hint && hintId, error && errId].filter(Boolean).join(' ') || undefined;
  const Control = multiline ? 'textarea' : 'input';
  return (
    <div className={cx('viv-field', error && 'viv-field--invalid', disabled && 'viv-field--disabled', className)}>
      <label className="viv-field__label" htmlFor={fieldId}>
        {label}
        {required ? <span className="viv-field__required" aria-hidden="true">*</span> : null}
      </label>
      <Control
        id={fieldId}
        className="viv-field__control"
        aria-invalid={error ? 'true' : undefined}
        aria-describedby={describedBy}
        disabled={disabled || undefined}
        rows={multiline ? rows || 3 : undefined}
        required={required}
        {...rest}
      />
      {hint ? <p className="viv-field__hint" id={hintId}>{hint}</p> : null}
      {error ? <p className="viv-field__error" id={errId}>{error}</p> : null}
    </div>
  );
}

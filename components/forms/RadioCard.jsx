import React from 'react';
import { Icon } from '../core/Icon.jsx';
export function RadioCard({ title, description, meta, icon, selected, onSelect, style }) {
  return (
    <button type="button" role="radio" aria-checked={!!selected} onClick={onSelect}
      style={{ display: 'flex', alignItems: 'center', gap: 14, width: '100%', textAlign: 'left', padding: '16px 18px', cursor: 'pointer',
        background: 'var(--paper)', border: '1px solid ' + (selected ? 'var(--ink-1000)' : 'var(--border-subtle)'),
        boxShadow: selected ? 'inset 0 0 0 1px var(--ink-1000)' : 'none', transition: 'var(--t-base)', ...style }}>
      <span aria-hidden="true" style={{ width: 17, height: 17, flex: '0 0 17px', borderRadius: '50%', border: '1px solid ' + (selected ? 'var(--ink-1000)' : 'var(--border-default)'), display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}>
        {selected && <span style={{ width: 9, height: 9, borderRadius: '50%', background: 'var(--ink-1000)' }} />}
      </span>
      {icon && <Icon name={icon} size={20} />}
      <span style={{ flex: 1 }}>
        <span style={{ display: 'block', font: 'var(--heading-3)' }}>{title}</span>
        {description && <span style={{ display: 'block', marginTop: 3, font: 'var(--body-sm)', color: 'var(--text-secondary)' }}>{description}</span>}
      </span>
      {meta && <span style={{ font: 'var(--price-md)' }}>{meta}</span>}
    </button>
  );
}

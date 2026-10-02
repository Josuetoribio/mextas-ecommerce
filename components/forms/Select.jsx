import React from 'react';
import { Icon } from '../core/Icon.jsx';
export function Select({ label, options = [], value, onChange, size = 'md', style, wrapStyle, ...rest }) {
  const h = size === 'lg' ? 54 : size === 'sm' ? 38 : 46;
  return (
    <label style={{ display: 'block', ...wrapStyle }}>
      {label && <span style={{ display: 'block', font: 'var(--label-sm)', letterSpacing: 'var(--track-label)', textTransform: 'uppercase', color: 'var(--text-secondary)', marginBottom: 8 }}>{label}</span>}
      <span style={{ position: 'relative', display: 'block' }}>
        <select value={value} onChange={onChange}
          style={{ width: '100%', height: h, padding: '0 40px 0 14px', appearance: 'none', background: 'var(--paper)', border: '1px solid var(--border-default)', borderRadius: 0, font: 'var(--body-md)', color: 'var(--text-primary)', cursor: 'pointer', ...style }} {...rest}>
          {options.map((o) => typeof o === 'string' ? <option key={o} value={o}>{o}</option> : <option key={o.value} value={o.value}>{o.label}</option>)}
        </select>
        <span style={{ position: 'absolute', right: 13, top: '50%', transform: 'translateY(-50%)', pointerEvents: 'none', display: 'flex' }}><Icon name="chevron-down" size={17} /></span>
      </span>
    </label>
  );
}

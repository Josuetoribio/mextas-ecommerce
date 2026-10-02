import React from 'react';
import { Icon } from '../core/Icon.jsx';
export function Input({ label, hint, error, icon, size = 'md', type = 'text', suffix, style, wrapStyle, ...rest }) {
  const [focus, setFocus] = React.useState(false);
  const h = size === 'lg' ? 54 : size === 'sm' ? 38 : 46;
  return (
    <label style={{ display: 'block', ...wrapStyle }}>
      {label && <span style={{ display: 'block', font: 'var(--label-sm)', letterSpacing: 'var(--track-label)', textTransform: 'uppercase', color: 'var(--text-secondary)', marginBottom: 8 }}>{label}</span>}
      <span style={{ display: 'flex', alignItems: 'center', gap: 10, height: h, padding: '0 14px', background: 'var(--paper)',
        border: '1px solid ' + (error ? 'var(--sale-500)' : focus ? 'var(--ink-1000)' : 'var(--border-default)'),
        boxShadow: focus ? 'inset 0 0 0 1px var(--ink-1000)' : 'none', transition: 'var(--t-base)' }}>
        {icon && <Icon name={icon} size={18} color="var(--ink-400)" />}
        <input type={type} onFocus={() => setFocus(true)} onBlur={() => setFocus(false)}
          style={{ flex: 1, minWidth: 0, border: 0, outline: 'none', background: 'transparent', font: 'var(--body-md)', color: 'var(--text-primary)', ...style }} {...rest} />
        {suffix}
      </span>
      {(hint || error) && <span style={{ display: 'block', marginTop: 7, font: 'var(--body-xs)', color: error ? 'var(--sale-500)' : 'var(--text-muted)' }}>{error || hint}</span>}
    </label>
  );
}

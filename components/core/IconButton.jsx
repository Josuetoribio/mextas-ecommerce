import React from 'react';
import { Icon } from './Icon.jsx';

export function IconButton({ icon, label, size = 40, variant = 'ghost', active, badge, onClick, style, ...rest }) {
  const [hover, setHover] = React.useState(false);
  const base = {
    ghost: { background: 'transparent', border: '1px solid transparent', color: 'var(--ink-1000)' },
    outline: { background: 'var(--paper)', border: '1px solid var(--border-default)', color: 'var(--ink-1000)' },
    solid: { background: 'var(--ink-1000)', border: '1px solid var(--ink-1000)', color: 'var(--paper)' },
  }[variant];
  return (
    <button type="button" aria-label={label} aria-pressed={active} onClick={onClick}
      onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}
      style={{ position: 'relative', width: size, height: size, display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
        borderRadius: 'var(--radius-circle)', cursor: 'pointer', transition: 'var(--t-base)',
        ...base,
        ...(active ? { color: 'var(--sale-500)' } : null),
        ...(hover ? (variant === 'solid' ? { background: 'var(--ink-700)' } : { background: 'var(--ink-050)' }) : null),
        ...style }} {...rest}>
      <Icon name={active && icon === 'heart' ? 'heart' : icon} size={Math.round(size * 0.5)} style={active ? { fill: 'var(--sale-500)' } : undefined} />
      {badge != null && badge !== 0 && (
        <span style={{ position: 'absolute', top: -2, right: -2, minWidth: 18, height: 18, padding: '0 5px', borderRadius: 'var(--radius-pill)',
          background: 'var(--ink-1000)', color: 'var(--paper)', font: 'var(--label-sm)', display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}>{badge}</span>
      )}
    </button>
  );
}

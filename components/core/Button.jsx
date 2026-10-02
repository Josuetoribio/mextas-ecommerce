import React from 'react';
import { Icon } from './Icon.jsx';

const SIZES = {
  sm: { height: 36, padding: '0 16px', font: 'var(--label-sm)' },
  md: { height: 44, padding: '0 24px', font: 'var(--label-md)' },
  lg: { height: 54, padding: '0 34px', font: 'var(--label-lg)' },
};
const VARIANTS = {
  primary:   { background: 'var(--ink-1000)', color: 'var(--paper)', border: '1px solid var(--ink-1000)' },
  secondary: { background: 'transparent', color: 'var(--ink-1000)', border: '1px solid var(--ink-1000)' },
  quiet:     { background: 'var(--ink-050)', color: 'var(--ink-1000)', border: '1px solid transparent' },
  ghost:     { background: 'transparent', color: 'var(--ink-1000)', border: '1px solid transparent' },
  sale:      { background: 'var(--sale-500)', color: 'var(--paper)', border: '1px solid var(--sale-500)' },
  inverse:   { background: 'var(--paper)', color: 'var(--ink-1000)', border: '1px solid var(--paper)' },
};
const HOVER = {
  primary: { background: 'var(--ink-700)', borderColor: 'var(--ink-700)' },
  secondary: { background: 'var(--ink-1000)', color: 'var(--paper)' },
  quiet: { background: 'var(--ink-100)' },
  ghost: { background: 'var(--ink-050)' },
  sale: { background: 'var(--sale-600)', borderColor: 'var(--sale-600)' },
  inverse: { background: 'var(--ink-050)', borderColor: 'var(--ink-050)' },
};

export function Button({ children, variant = 'primary', size = 'md', iconLeft, iconRight, fullWidth, loading, disabled, as = 'button', style, onClick, ...rest }) {
  const [hover, setHover] = React.useState(false);
  const [down, setDown] = React.useState(false);
  const Tag = as;
  const s = {
    display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: 10,
    width: fullWidth ? '100%' : undefined, borderRadius: 'var(--radius-none)',
    textTransform: 'uppercase', letterSpacing: 'var(--track-label)', whiteSpace: 'nowrap',
    cursor: disabled || loading ? 'not-allowed' : 'pointer', opacity: disabled ? 0.38 : 1,
    transition: 'var(--t-base)', transform: down && !disabled ? 'scale(.985)' : 'scale(1)',
    ...SIZES[size], ...VARIANTS[variant],
    ...(hover && !disabled && !loading ? HOVER[variant] : null), ...style,
  };
  return (
    <Tag style={s} disabled={Tag === 'button' ? disabled || loading : undefined} aria-busy={loading || undefined}
      onMouseEnter={() => setHover(true)} onMouseLeave={() => { setHover(false); setDown(false); }}
      onMouseDown={() => setDown(true)} onMouseUp={() => setDown(false)}
      onClick={disabled || loading ? undefined : onClick} {...rest}>
      {loading ? <Spinner /> : iconLeft ? <Icon name={iconLeft} size={size === 'lg' ? 20 : 16} /> : null}
      {children}
      {!loading && iconRight ? <Icon name={iconRight} size={size === 'lg' ? 20 : 16} /> : null}
    </Tag>
  );
}

function Spinner() {
  return (
    <span style={{ width: 14, height: 14, borderRadius: '50%', border: '2px solid currentColor', borderTopColor: 'transparent', animation: 'mx-spin .7s linear infinite', display: 'inline-block' }}>
      <style>{'@keyframes mx-spin{to{transform:rotate(360deg)}}'}</style>
    </span>
  );
}

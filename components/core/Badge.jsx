import React from 'react';
const TONES = {
  new: { background: 'var(--ink-1000)', color: 'var(--paper)' },
  sale: { background: 'var(--sale-500)', color: 'var(--paper)' },
  bestseller: { background: 'var(--paper)', color: 'var(--ink-1000)', boxShadow: 'inset 0 0 0 1px var(--ink-1000)' },
  neutral: { background: 'var(--ink-050)', color: 'var(--ink-600)' },
  success: { background: 'var(--success-100)', color: 'var(--success-600)' },
  warning: { background: 'var(--warning-100)', color: 'var(--warning-600)' },
};
export function Badge({ children, tone = 'neutral', style, ...rest }) {
  return (
    <span style={{ display: 'inline-flex', alignItems: 'center', height: 22, padding: '0 9px', borderRadius: 'var(--radius-xs)',
      font: 'var(--label-sm)', letterSpacing: 'var(--track-label)', textTransform: 'uppercase', ...TONES[tone], ...style }} {...rest}>{children}</span>
  );
}

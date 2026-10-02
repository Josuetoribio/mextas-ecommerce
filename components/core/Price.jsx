import React from 'react';
const mxn = (n) => '$' + n.toLocaleString('es-MX') + ' MXN';
export function Price({ value, compareAt, size = 'md', currency = 'MXN', style }) {
  const font = size === 'lg' ? 'var(--price-lg)' : size === 'sm' ? 'var(--label-md)' : 'var(--price-md)';
  const off = compareAt ? Math.round((1 - value / compareAt) * 100) : 0;
  const fmt = (n) => '$' + n.toLocaleString('es-MX') + ' ' + currency;
  return (
    <span style={{ display: 'inline-flex', alignItems: 'baseline', gap: 8, flexWrap: 'wrap', ...style }}>
      {compareAt && <s style={{ font: 'var(--body-sm)', color: 'var(--text-muted)', textDecorationThickness: 1 }}>{fmt(compareAt)}</s>}
      <span style={{ font, letterSpacing: 'var(--track-tight)', color: 'var(--text-primary)' }}>{fmt(value)}</span>
      {off > 0 && <span style={{ font: 'var(--label-sm)', letterSpacing: 'var(--track-label)', color: 'var(--text-sale)' }}>-{off}%</span>}
    </span>
  );
}
export { mxn };

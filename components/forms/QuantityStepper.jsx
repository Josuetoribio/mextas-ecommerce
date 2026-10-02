import React from 'react';
import { Icon } from '../core/Icon.jsx';
export function QuantityStepper({ value = 1, min = 1, max = 99, onChange, size = 'md', style }) {
  const h = size === 'sm' ? 34 : 46;
  const set = (v) => onChange && onChange(Math.min(max, Math.max(min, v)));
  const btn = { width: h, height: h, display: 'inline-flex', alignItems: 'center', justifyContent: 'center', background: 'none', border: 0, cursor: 'pointer', color: 'var(--ink-1000)' };
  return (
    <div style={{ display: 'inline-flex', alignItems: 'center', border: '1px solid var(--border-default)', ...style }}>
      <button type="button" aria-label="Quitar uno" style={{ ...btn, opacity: value <= min ? .3 : 1 }} onClick={() => set(value - 1)}><Icon name="minus" size={15} /></button>
      <span aria-live="polite" style={{ minWidth: 34, textAlign: 'center', font: 'var(--price-md)' }}>{value}</span>
      <button type="button" aria-label="Agregar uno" style={{ ...btn, opacity: value >= max ? .3 : 1 }} onClick={() => set(value + 1)}><Icon name="plus" size={15} /></button>
    </div>
  );
}

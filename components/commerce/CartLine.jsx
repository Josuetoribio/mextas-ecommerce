import React from 'react';
import { QuantityStepper } from '../forms/QuantityStepper.jsx';
import { Icon } from '../core/Icon.jsx';
export function CartLine({ item, onQty, onRemove, readOnly, style }) {
  const it = item || {};
  const fmt = (n) => '$' + n.toLocaleString('es-MX') + ' MXN';
  return (
    <div style={{ display: 'flex', gap: 14, padding: '18px 0', borderBottom: '1px solid var(--border-subtle)', ...style }}>
      <div style={{ width: 84, height: 96, flex: '0 0 84px', background: 'var(--surface-media)', overflow: 'hidden' }}>
        {it.image && <img src={it.image} alt={it.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />}
      </div>
      <div style={{ flex: 1, minWidth: 0, display: 'flex', flexDirection: 'column', gap: 6 }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', gap: 12 }}>
          <span style={{ font: 'var(--body-sm)', fontWeight: 600 }}>{it.name}</span>
          {!readOnly && <button type="button" aria-label="Eliminar producto" onClick={onRemove}
            style={{ background: 'none', border: 0, cursor: 'pointer', color: 'var(--ink-400)', padding: 0, display: 'flex' }}><Icon name="x" size={16} /></button>}
        </div>
        {it.variant && <span style={{ font: 'var(--body-xs)', color: 'var(--text-muted)' }}>{it.variant}</span>}
        <div style={{ marginTop: 'auto', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 12 }}>
          {readOnly ? <span style={{ font: 'var(--body-sm)', color: 'var(--text-secondary)' }}>Cantidad {it.qty}</span>
            : <QuantityStepper size="sm" value={it.qty} onChange={onQty} max={it.stock || 99} />}
          <span style={{ font: 'var(--price-md)' }}>{fmt((it.price || 0) * (it.qty || 1))}</span>
        </div>
      </div>
    </div>
  );
}

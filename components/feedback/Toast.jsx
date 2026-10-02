import React from 'react';
import { Icon } from '../core/Icon.jsx';
export function Toast({ open, title, product, actions, onClose, duration = 4200, style }) {
  React.useEffect(() => {
    if (!open || !duration) return;
    const t = setTimeout(() => onClose && onClose(), duration);
    return () => clearTimeout(t);
  }, [open, duration, onClose]);
  if (!open) return null;
  return (
    <div role="status" aria-live="polite"
      style={{ position: 'fixed', right: 24, bottom: 24, zIndex: 100, width: 'min(360px, calc(100vw - 32px))', background: 'var(--paper)', boxShadow: 'var(--shadow-pop)', border: '1px solid var(--border-subtle)', animation: 'mx-toast var(--dur-3) var(--ease-out)', ...style }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '14px 16px', borderBottom: product ? '1px solid var(--border-subtle)' : 0 }}>
        <Icon name="check" size={16} strokeWidth={2.2} />
        <span style={{ font: 'var(--label-md)', letterSpacing: 'var(--track-label)', textTransform: 'uppercase', flex: 1 }}>{title}</span>
        <button type="button" aria-label="Cerrar" onClick={onClose} style={{ background: 'none', border: 0, cursor: 'pointer', display: 'flex', color: 'var(--ink-400)' }}><Icon name="x" size={15} /></button>
      </div>
      {product && (
        <div style={{ display: 'flex', gap: 12, padding: 16 }}>
          <div style={{ width: 64, height: 72, flex: '0 0 64px', background: 'var(--surface-media)', overflow: 'hidden' }}>
            {product.image && <img src={product.image} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />}
          </div>
          <div style={{ flex: 1, minWidth: 0 }}>
            <div style={{ font: 'var(--body-sm)', fontWeight: 600 }}>{product.name}</div>
            <div style={{ font: 'var(--body-sm)', color: 'var(--text-secondary)', marginTop: 4 }}>{'$' + (product.price || 0).toLocaleString('es-MX') + ' MXN'}</div>
          </div>
        </div>
      )}
      {actions && <div style={{ display: 'flex', gap: 8, padding: '0 16px 16px' }}>{actions}</div>}
      <style>{'@keyframes mx-toast{from{opacity:0;transform:translateY(14px)}to{opacity:1;transform:none}}'}</style>
    </div>
  );
}

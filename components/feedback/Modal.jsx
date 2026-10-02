import React from 'react';
import { Icon } from '../core/Icon.jsx';
export function Modal({ open, title, width = 880, onClose, children, style }) {
  React.useEffect(() => {
    const k = (e) => e.key === 'Escape' && onClose && onClose();
    if (open) window.addEventListener('keydown', k);
    return () => window.removeEventListener('keydown', k);
  }, [open, onClose]);
  if (!open) return null;
  return (
    <div style={{ position: 'fixed', inset: 0, zIndex: 90, display: 'grid', placeItems: 'center', padding: 20 }}>
      <div onClick={onClose} style={{ position: 'absolute', inset: 0, background: 'var(--overlay-scrim)', animation: 'mx-in var(--dur-2) var(--ease-out)' }} />
      <div role="dialog" aria-modal="true" aria-label={title}
        style={{ position: 'relative', width: 'min(' + width + 'px, 100%)', maxHeight: '88vh', overflowY: 'auto', background: 'var(--paper)', boxShadow: 'var(--shadow-pop)', animation: 'mx-pop var(--dur-3) var(--ease-out)', ...style }}>
        <button type="button" aria-label="Cerrar" onClick={onClose}
          style={{ position: 'absolute', top: 14, right: 14, zIndex: 2, width: 36, height: 36, borderRadius: '50%', border: 0, cursor: 'pointer', background: 'var(--paper)', display: 'grid', placeItems: 'center' }}><Icon name="x" size={18} /></button>
        {children}
      </div>
      <style>{'@keyframes mx-in{from{opacity:0}to{opacity:1}}@keyframes mx-pop{from{opacity:0;transform:translateY(12px)}to{opacity:1;transform:none}}'}</style>
    </div>
  );
}

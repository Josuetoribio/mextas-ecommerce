import React from 'react';
import { Icon } from '../core/Icon.jsx';
export function Drawer({ open, title, side = 'right', width = 440, onClose, footer, children, style }) {
  React.useEffect(() => {
    const k = (e) => e.key === 'Escape' && onClose && onClose();
    if (open) window.addEventListener('keydown', k);
    return () => window.removeEventListener('keydown', k);
  }, [open, onClose]);
  return (
    <div aria-hidden={!open} style={{ position: 'fixed', inset: 0, zIndex: 80, pointerEvents: open ? 'auto' : 'none' }}>
      <div onClick={onClose} style={{ position: 'absolute', inset: 0, background: 'var(--overlay-scrim)', opacity: open ? 1 : 0, transition: 'opacity var(--dur-3) var(--ease-out)' }} />
      <aside role="dialog" aria-modal="true" aria-label={title}
        style={{ position: 'absolute', top: 0, bottom: 0, [side]: 0, width: 'min(' + width + 'px, 100%)', background: 'var(--paper)',
          boxShadow: 'var(--shadow-drawer)', display: 'flex', flexDirection: 'column',
          transform: open ? 'translateX(0)' : `translateX(${side === 'right' ? '' : '-'}104%)`, transition: 'transform var(--dur-3) var(--ease-out)', ...style }}>
        <header style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 16, padding: '22px 24px', borderBottom: '1px solid var(--border-subtle)' }}>
          <h2 style={{ margin: 0, font: 'var(--heading-2)', letterSpacing: 'var(--track-label)', textTransform: 'uppercase' }}>{title}</h2>
          <button type="button" aria-label="Cerrar" onClick={onClose} style={{ background: 'none', border: 0, cursor: 'pointer', display: 'flex', padding: 4 }}><Icon name="x" size={20} /></button>
        </header>
        <div style={{ flex: 1, overflowY: 'auto', padding: '4px 24px 24px' }}>{children}</div>
        {footer && <div style={{ borderTop: '1px solid var(--border-subtle)', padding: '20px 24px', background: 'var(--paper)' }}>{footer}</div>}
      </aside>
    </div>
  );
}

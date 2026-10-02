import React from 'react';
import { Icon } from '../core/Icon.jsx';
const DEFAULT = ['Pedido recibido', 'Preparando', 'Enviado', 'En camino', 'Entregado'];
export function OrderTimeline({ steps = DEFAULT, current = 0, style }) {
  return (
    <ol style={{ display: 'flex', listStyle: 'none', margin: 0, padding: 0, gap: 0, ...style }}>
      {steps.map((s, i) => {
        const done = i <= current;
        return (
          <li key={s} style={{ flex: 1, minWidth: 0, display: 'flex', flexDirection: 'column', gap: 10 }}>
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <span style={{ width: 26, height: 26, flex: '0 0 26px', borderRadius: '50%', display: 'grid', placeItems: 'center',
                background: done ? 'var(--ink-1000)' : 'var(--paper)', color: 'var(--paper)', border: '1px solid ' + (done ? 'var(--ink-1000)' : 'var(--border-default)') }}>
                {done && <Icon name="check" size={14} strokeWidth={2.4} />}
              </span>
              {i < steps.length - 1 && <span style={{ flex: 1, height: 1, background: i < current ? 'var(--ink-1000)' : 'var(--border-default)' }} />}
            </div>
            <span style={{ font: 'var(--body-xs)', letterSpacing: 'var(--track-label)', textTransform: 'uppercase', color: done ? 'var(--text-primary)' : 'var(--text-muted)', paddingRight: 10 }}>{s}</span>
          </li>
        );
      })}
    </ol>
  );
}

import React from 'react';
import { Icon } from './Icon.jsx';
export function Accordion({ items = [], defaultOpen = 0, allowMultiple = false, style }) {
  const [open, setOpen] = React.useState(defaultOpen == null ? [] : [defaultOpen]);
  const toggle = (i) => setOpen((o) => o.includes(i) ? o.filter((x) => x !== i) : allowMultiple ? [...o, i] : [i]);
  return (
    <div style={{ borderTop: '1px solid var(--border-subtle)', ...style }}>
      {items.map((it, i) => {
        const isOpen = open.includes(i);
        return (
          <div key={i} style={{ borderBottom: '1px solid var(--border-subtle)' }}>
            <button type="button" onClick={() => toggle(i)} aria-expanded={isOpen}
              style={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 16, padding: '18px 0', background: 'none', border: 0, cursor: 'pointer', textAlign: 'left', font: 'var(--heading-3)', letterSpacing: 'var(--track-tight)', color: 'var(--text-primary)' }}>
              {it.title}
              <Icon name={isOpen ? 'minus' : 'plus'} size={18} />
            </button>
            <div style={{ display: 'grid', gridTemplateRows: isOpen ? '1fr' : '0fr', transition: 'grid-template-rows var(--dur-3) var(--ease-out)' }}>
              <div style={{ overflow: 'hidden' }}>
                <div style={{ paddingBottom: 20, font: 'var(--body-md)', color: 'var(--text-secondary)', maxWidth: '68ch' }}>{it.content}</div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

import React from 'react';
import { Icon } from '../core/Icon.jsx';
export function AnnouncementBar({ messages = [], links = [], interval = 5000, style }) {
  const [i, setI] = React.useState(0);
  React.useEffect(() => {
    if (messages.length < 2) return;
    const t = setInterval(() => setI((v) => (v + 1) % messages.length), interval);
    return () => clearInterval(t);
  }, [messages.length, interval]);
  return (
    <div style={{ background: 'var(--ink-1000)', color: 'var(--paper)', height: 'var(--announce-h)', display: 'flex', alignItems: 'center', ...style }}>
      <div className="mx-container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 20 }}>
        <span key={i} style={{ font: 'var(--label-sm)', letterSpacing: 'var(--track-label)', textTransform: 'uppercase', animation: 'mx-fade var(--dur-3) var(--ease-out)' }}>{messages[i]}</span>
        <nav style={{ display: 'flex', gap: 22, whiteSpace: 'nowrap' }}>
          {links.map((l) => (
            <a key={l.label} href={l.href || '#'} onClick={l.onClick} style={{ display: 'inline-flex', alignItems: 'center', gap: 6, font: 'var(--body-xs)', color: 'rgba(255,255,255,.82)' }}>
              {l.label}{l.caret && <Icon name="chevron-down" size={13} />}
            </a>
          ))}
        </nav>
      </div>
      <style>{'@keyframes mx-fade{from{opacity:0;transform:translateY(4px)}to{opacity:1;transform:none}}'}</style>
    </div>
  );
}

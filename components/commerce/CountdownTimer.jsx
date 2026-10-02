import React from 'react';
export function CountdownTimer({ to, label = 'Termina en', theme = 'dark', style }) {
  const target = React.useMemo(() => new Date(to).getTime(), [to]);
  const [now, setNow] = React.useState(Date.now());
  React.useEffect(() => { const t = setInterval(() => setNow(Date.now()), 1000); return () => clearInterval(t); }, []);
  const d = Math.max(0, target - now);
  const parts = [
    { v: Math.floor(d / 86400000), l: 'Días' },
    { v: Math.floor(d / 3600000) % 24, l: 'Horas' },
    { v: Math.floor(d / 60000) % 60, l: 'Min' },
    { v: Math.floor(d / 1000) % 60, l: 'Seg' },
  ];
  const dark = theme === 'dark';
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 14, ...style }}>
      {label && <span style={{ font: 'var(--label-sm)', letterSpacing: 'var(--track-label)', textTransform: 'uppercase', color: dark ? 'rgba(255,255,255,.65)' : 'var(--text-muted)' }}>{label}</span>}
      <div style={{ display: 'flex', gap: 8 }}>
        {parts.map((p) => (
          <div key={p.l} style={{ minWidth: 58, padding: '9px 8px', textAlign: 'center', background: dark ? 'rgba(255,255,255,.08)' : 'var(--paper)', border: '1px solid ' + (dark ? 'rgba(255,255,255,.18)' : 'var(--border-subtle)'), color: dark ? 'var(--paper)' : 'var(--ink-1000)' }}>
            <div style={{ font: 'var(--price-md)', fontVariantNumeric: 'tabular-nums' }}>{String(p.v).padStart(2, '0')}</div>
            <div style={{ font: 'var(--label-sm)', letterSpacing: 'var(--track-label)', textTransform: 'uppercase', opacity: .6, marginTop: 4 }}>{p.l}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

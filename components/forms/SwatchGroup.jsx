import React from 'react';
export function SwatchGroup({ label, options = [], value, onChange, type = 'color', style }) {
  return (
    <div style={style}>
      {label && (
        <div style={{ display: 'flex', gap: 8, marginBottom: 10 }}>
          <span style={{ font: 'var(--label-sm)', letterSpacing: 'var(--track-label)', textTransform: 'uppercase', color: 'var(--text-secondary)' }}>{label}</span>
          <span style={{ font: 'var(--body-xs)', color: 'var(--text-primary)' }}>{value}</span>
        </div>
      )}
      <div role="radiogroup" aria-label={label} style={{ display: 'flex', flexWrap: 'wrap', gap: 10 }}>
        {options.map((o) => {
          const name = typeof o === 'string' ? o : o.name;
          const on = value === name;
          return type === 'color' ? (
            <button key={name} type="button" role="radio" aria-checked={on} aria-label={name} onClick={() => onChange && onChange(name)}
              style={{ width: 34, height: 34, borderRadius: '50%', cursor: 'pointer', background: (typeof o === 'string' ? '#000' : o.hex), border: '1px solid var(--border-default)', boxShadow: on ? '0 0 0 2px var(--paper) inset, 0 0 0 1.5px var(--ink-1000)' : 'none', transition: 'var(--t-fast)' }} />
          ) : (
            <button key={name} type="button" role="radio" aria-checked={on} onClick={() => onChange && onChange(name)}
              style={{ minWidth: 48, height: 40, padding: '0 14px', cursor: 'pointer', background: on ? 'var(--ink-1000)' : 'var(--paper)', color: on ? 'var(--paper)' : 'var(--ink-1000)', border: '1px solid ' + (on ? 'var(--ink-1000)' : 'var(--border-default)'), font: 'var(--label-md)', letterSpacing: 'var(--track-label)', transition: 'var(--t-fast)' }}>{name}</button>
          );
        })}
      </div>
    </div>
  );
}

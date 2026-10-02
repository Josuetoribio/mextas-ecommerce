import React from 'react';
export function Breadcrumbs({ items = [], onNavigate, style }) {
  return (
    <nav aria-label="Ruta de navegación" style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: 8, font: 'var(--body-xs)', color: 'var(--text-muted)', ...style }}>
      {items.map((it, i) => (
        <React.Fragment key={it.label}>
          {i > 0 && <span aria-hidden="true">/</span>}
          {i === items.length - 1
            ? <span style={{ color: 'var(--text-primary)' }} aria-current="page">{it.label}</span>
            : <a href={it.href || '#'} onClick={(e) => { e.preventDefault(); onNavigate && onNavigate(it); }} style={{ color: 'var(--text-muted)' }}>{it.label}</a>}
        </React.Fragment>
      ))}
    </nav>
  );
}

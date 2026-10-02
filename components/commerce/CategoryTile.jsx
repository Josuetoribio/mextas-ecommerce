import React from 'react';
import { Icon } from '../core/Icon.jsx';
export function CategoryTile({ name, image, icon, active, onClick, style }) {
  const [hover, setHover] = React.useState(false);
  return (
    <button type="button" onClick={onClick} onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}
      style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 12, background: 'none', border: 0, cursor: 'pointer', padding: 0, ...style }}>
      <span style={{ width: 92, height: 92, borderRadius: '50%', overflow: 'hidden', display: 'grid', placeItems: 'center',
        background: active ? 'var(--ink-1000)' : 'var(--ink-050)', color: active ? 'var(--paper)' : 'var(--ink-1000)',
        boxShadow: hover ? '0 0 0 1px var(--ink-1000)' : '0 0 0 1px transparent', transition: 'var(--t-base)' }}>
        {image ? <img src={image} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover', transform: hover ? 'scale(1.07)' : 'scale(1)', transition: 'var(--t-media)' }} />
          : <Icon name={icon || 'sparkles'} size={30} strokeWidth={1.4} />}
      </span>
      <span style={{ font: 'var(--label-sm)', letterSpacing: 'var(--track-label)', textTransform: 'uppercase', color: 'var(--text-primary)' }}>{name}</span>
    </button>
  );
}

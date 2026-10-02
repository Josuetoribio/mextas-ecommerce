import React from 'react';
import { Button } from '../core/Button.jsx';
import { Icon } from '../core/Icon.jsx';
export function PackCard({ name, description, items = [], price, compareAt, image, onAdd, style }) {
  const [hover, setHover] = React.useState(false);
  const saving = compareAt ? compareAt - price : 0;
  const fmt = (n) => '$' + n.toLocaleString('es-MX') + ' MXN';
  return (
    <article onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}
      style={{ display: 'flex', flexDirection: 'column', background: 'var(--ink-025)', transition: 'var(--t-base)', boxShadow: hover ? 'var(--shadow-card)' : 'none', ...style }}>
      <div style={{ overflow: 'hidden', aspectRatio: '16 / 10', background: 'var(--surface-media)' }}>
        {image && <img src={image} alt={name} loading="lazy" style={{ width: '100%', height: '100%', objectFit: 'cover', transform: hover ? 'scale(1.04)' : 'scale(1)', transition: 'var(--t-media)' }} />}
      </div>
      <div style={{ padding: '22px 22px 24px', display: 'flex', flexDirection: 'column', gap: 14, flex: 1 }}>
        <div>
          <h3 style={{ margin: 0, font: 'var(--heading-2)', letterSpacing: 'var(--track-label)', textTransform: 'uppercase' }}>{name}</h3>
          {description && <p style={{ margin: '8px 0 0', font: 'var(--body-sm)', color: 'var(--text-secondary)' }}>{description}</p>}
        </div>
        <ul style={{ margin: 0, padding: 0, listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 7 }}>
          {items.map((it) => (
            <li key={it} style={{ display: 'flex', gap: 9, alignItems: 'center', font: 'var(--body-sm)', color: 'var(--text-primary)' }}>
              <Icon name="check" size={14} strokeWidth={2} />{it}
            </li>
          ))}
        </ul>
        <div style={{ marginTop: 'auto', display: 'flex', alignItems: 'baseline', gap: 10, flexWrap: 'wrap' }}>
          <span style={{ font: 'var(--price-lg)' }}>{fmt(price)}</span>
          {compareAt && <s style={{ font: 'var(--body-sm)', color: 'var(--text-muted)' }}>{fmt(compareAt)}</s>}
          {saving > 0 && <span style={{ font: 'var(--label-sm)', letterSpacing: 'var(--track-label)', color: 'var(--text-sale)' }}>Ahorras {fmt(saving)}</span>}
        </div>
        <Button fullWidth onClick={onAdd}>Agregar pack</Button>
      </div>
    </article>
  );
}

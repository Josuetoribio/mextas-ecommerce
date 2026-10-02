import React from 'react';
import { Icon } from '../core/Icon.jsx';
import { Badge } from '../core/Badge.jsx';
import { Rating } from '../core/Rating.jsx';
import { Price } from '../core/Price.jsx';
import { Button } from '../core/Button.jsx';

export function ProductCard({ product, onAdd, onQuickView, onToggleWishlist, wishlisted, onOpen, compact, style }) {
  const [hover, setHover] = React.useState(false);
  const p = product || {};
  const off = p.compareAtPrice ? Math.round((1 - p.price / p.compareAtPrice) * 100) : 0;
  return (
    <article onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}
      style={{ background: hover ? 'var(--paper)' : 'var(--ink-025)', boxShadow: hover ? 'var(--shadow-card)' : 'none',
        transition: 'var(--t-base)', display: 'flex', flexDirection: 'column', height: '100%', ...style }}>
      <div style={{ position: 'relative', overflow: 'hidden', background: 'var(--surface-media)', aspectRatio: '1 / 1', cursor: 'pointer' }} onClick={onOpen}>
        {p.image && <img src={p.image} alt={p.name} loading="lazy"
          style={{ width: '100%', height: '100%', objectFit: 'cover', transform: hover ? 'scale(1.045)' : 'scale(1)', transition: 'var(--t-media)' }} />}
        <div style={{ position: 'absolute', top: 12, left: 12, display: 'flex', flexDirection: 'column', gap: 6, alignItems: 'flex-start' }}>
          {p.isNew && <Badge tone="new">Nuevo</Badge>}
          {off > 0 && <Badge tone="sale">-{off}%</Badge>}
          {p.isBestSeller && !p.isNew && <Badge tone="bestseller">Más vendido</Badge>}
        </div>
        <button type="button" aria-label={wishlisted ? 'Quitar de favoritos' : 'Guardar en favoritos'} aria-pressed={!!wishlisted}
          onClick={(e) => { e.stopPropagation(); onToggleWishlist && onToggleWishlist(p); }}
          style={{ position: 'absolute', top: 10, right: 10, width: 36, height: 36, display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
            borderRadius: '50%', border: 0, cursor: 'pointer', background: 'rgba(255,255,255,.9)', backdropFilter: 'blur(6px)',
            color: wishlisted ? 'var(--sale-500)' : 'var(--ink-1000)', opacity: hover || wishlisted ? 1 : 0, transform: `translateY(${hover || wishlisted ? 0 : -6}px)`, transition: 'var(--t-base)' }}>
          <Icon name="heart" size={17} style={wishlisted ? { fill: 'var(--sale-500)' } : undefined} />
        </button>
        {onQuickView && (
          <button type="button" onClick={(e) => { e.stopPropagation(); onQuickView(p); }}
            style={{ position: 'absolute', left: 0, right: 0, bottom: 0, height: 42, border: 0, cursor: 'pointer', background: 'rgba(255,255,255,.94)', backdropFilter: 'blur(6px)',
              font: 'var(--label-md)', letterSpacing: 'var(--track-label)', textTransform: 'uppercase', color: 'var(--ink-1000)',
              transform: `translateY(${hover ? 0 : 100}%)`, transition: 'transform var(--dur-3) var(--ease-out)' }}>Vista rápida</button>
        )}
        {p.stock != null && p.stock <= 5 && p.stock > 0 && (
          <span style={{ position: 'absolute', left: 12, bottom: 12, font: 'var(--body-xs)', background: 'var(--paper)', padding: '4px 8px', color: 'var(--ink-700)' }}>Últimas {p.stock} unidades</span>
        )}
      </div>
      <div style={{ padding: compact ? '14px 14px 16px' : '16px 16px 18px', display: 'flex', flexDirection: 'column', gap: 8, flex: 1 }}>
        {p.category && <span style={{ font: 'var(--body-xs)', letterSpacing: 'var(--track-label)', textTransform: 'uppercase', color: 'var(--text-muted)' }}>{p.category}</span>}
        <h3 onClick={onOpen} style={{ margin: 0, font: 'var(--body-md)', fontWeight: 600, cursor: 'pointer', letterSpacing: 'var(--track-tight)' }}>{p.name}</h3>
        <Price value={p.price} compareAt={p.compareAtPrice} />
        <Rating value={p.rating} reviews={p.reviews} />
        {onAdd && <Button fullWidth size="sm" style={{ marginTop: 'auto' }} onClick={() => onAdd(p)}>Agregar al carrito</Button>}
      </div>
    </article>
  );
}

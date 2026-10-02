import React from 'react';
import { Logo } from './Logo.jsx';
import { Icon } from '../core/Icon.jsx';
import { IconButton } from '../core/IconButton.jsx';

export function SiteHeader({ nav = [], activeNav, cartCount = 0, wishlistCount = 0, onSearch, onCart, onWishlist, onAccount, onNav, onMenu, compactAt = 900, style }) {
  const [narrow, setNarrow] = React.useState(typeof window !== 'undefined' && window.innerWidth < compactAt);
  React.useEffect(() => {
    const r = () => setNarrow(window.innerWidth < compactAt);
    window.addEventListener('resize', r); return () => window.removeEventListener('resize', r);
  }, [compactAt]);
  return (
    <header style={{ background: 'var(--paper)', borderBottom: '1px solid var(--border-subtle)', position: 'sticky', top: 0, zIndex: 40, ...style }}>
      <div className="mx-container" style={{ height: 'var(--header-h)', display: 'flex', alignItems: 'center', gap: 28 }}>
        {narrow && <IconButton icon="menu" label="Abrir menú" onClick={onMenu} />}
        <Logo as="a" href="#" size={narrow ? 22 : 30} onClick={(e) => { e.preventDefault(); onNav && onNav('home'); }} />
        {!narrow && (
          <button type="button" onClick={onSearch}
            style={{ flex: 1, maxWidth: 420, height: 44, display: 'flex', alignItems: 'center', gap: 10, padding: '0 16px', cursor: 'text',
              background: 'var(--paper)', border: '1px solid var(--border-default)', color: 'var(--text-muted)', font: 'var(--body-sm)', textAlign: 'left' }}>
            <span style={{ flex: 1 }}>Buscar productos, marcas y más...</span>
            <Icon name="search" size={18} />
          </button>
        )}
        <div style={{ marginLeft: 'auto', display: 'flex', alignItems: 'center', gap: narrow ? 2 : 6 }}>
          {narrow && <IconButton icon="search" label="Buscar" onClick={onSearch} />}
          {!narrow && <HeaderAction icon="user" label="Mi cuenta" onClick={onAccount} />}
          {!narrow && <HeaderAction icon="heart" label="Favoritos" count={wishlistCount} onClick={onWishlist} />}
          <HeaderAction icon="shopping-bag" label="Carrito" count={cartCount} onClick={onCart} compact={narrow} />
        </div>
      </div>
      {!narrow && nav.length > 0 && (
        <nav className="mx-container" style={{ display: 'flex', gap: 30, paddingBottom: 14 }}>
          {nav.map((n) => {
            const on = activeNav === n.key;
            return (
              <a key={n.key} href={n.href || '#'} onClick={(e) => { e.preventDefault(); onNav && onNav(n.key); }}
                style={{ font: 'var(--label-md)', letterSpacing: 'var(--track-label)', textTransform: 'uppercase',
                  color: n.highlight ? 'var(--sale-500)' : 'var(--ink-1000)', paddingBottom: 4,
                  borderBottom: '1px solid ' + (on ? 'var(--ink-1000)' : 'transparent') }}>{n.label}</a>
            );
          })}
        </nav>
      )}
    </header>
  );
}

function HeaderAction({ icon, label, count, onClick, compact }) {
  const [hover, setHover] = React.useState(false);
  return (
    <button type="button" onClick={onClick} aria-label={label}
      onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}
      style={{ display: 'inline-flex', alignItems: 'center', gap: 9, height: 44, padding: '0 12px', background: hover ? 'var(--ink-025)' : 'transparent', border: 0, cursor: 'pointer', transition: 'var(--t-fast)' }}>
      <span style={{ position: 'relative', display: 'flex' }}>
        <Icon name={icon} size={21} />
        {count > 0 && <span style={{ position: 'absolute', top: -6, right: -8, minWidth: 17, height: 17, padding: '0 4px', borderRadius: 'var(--radius-pill)', background: 'var(--ink-1000)', color: 'var(--paper)', font: 'var(--label-sm)', display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}>{count}</span>}
      </span>
      {!compact && <span style={{ font: 'var(--body-sm)' }}>{label}</span>}
    </button>
  );
}

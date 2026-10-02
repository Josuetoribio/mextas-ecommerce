import React from 'react';
import { Logo } from './Logo.jsx';
import { Icon } from '../core/Icon.jsx';
import { Input } from '../forms/Input.jsx';

export function SiteFooter({ columns = [], socials = ['instagram', 'facebook', 'youtube'], onNavigate, onSubscribe, style }) {
  const [email, setEmail] = React.useState('');
  const [sent, setSent] = React.useState(false);
  return (
    <footer style={{ background: 'var(--ink-025)', borderTop: '1px solid var(--border-subtle)', paddingTop: 'var(--space-16)', ...style }}>
      <div className="mx-container" style={{ display: 'grid', gap: 'var(--space-12)', gridTemplateColumns: 'minmax(220px,1.3fr) repeat(auto-fit,minmax(150px,1fr))', paddingBottom: 'var(--space-16)' }}>
        <div style={{ maxWidth: 280 }}>
          <Logo size={28} />
          <p style={{ margin: '18px 0 22px', font: 'var(--body-sm)', color: 'var(--text-secondary)' }}>
            Tecnología, diseño y funcionalidad en productos creados para tu día a día.
          </p>
          <div style={{ display: 'flex', gap: 10 }}>
            {socials.map((s) => (
              <a key={s} href="#" aria-label={s} style={{ width: 36, height: 36, borderRadius: '50%', border: '1px solid var(--border-default)', display: 'grid', placeItems: 'center' }}>
                <Icon name={s} size={16} />
              </a>
            ))}
          </div>
        </div>
        {columns.map((col) => (
          <div key={col.title}>
            <h3 style={{ margin: '0 0 18px', font: 'var(--label-md)', letterSpacing: 'var(--track-label)', textTransform: 'uppercase' }}>{col.title}</h3>
            <ul style={{ margin: 0, padding: 0, listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 11 }}>
              {col.links.map((l) => (
                <li key={l.label}><a href={l.href || '#'} onClick={(e) => { e.preventDefault(); onNavigate && onNavigate(l); }} style={{ font: 'var(--body-sm)', color: 'var(--text-secondary)' }}>{l.label}</a></li>
              ))}
            </ul>
          </div>
        ))}
        <div style={{ minWidth: 220 }}>
          <h3 style={{ margin: '0 0 18px', font: 'var(--label-md)', letterSpacing: 'var(--track-label)', textTransform: 'uppercase' }}>Suscríbete</h3>
          <p style={{ margin: '0 0 14px', font: 'var(--body-sm)', color: 'var(--text-secondary)' }}>Recibe lanzamientos, promociones y novedades directamente en tu correo.</p>
          {sent ? (
            <div style={{ display: 'flex', gap: 8, alignItems: 'center', font: 'var(--body-sm)', color: 'var(--success-600)' }}><Icon name="check" size={16} />Gracias. Te has suscrito correctamente.</div>
          ) : (
            <form onSubmit={(e) => { e.preventDefault(); setSent(true); onSubscribe && onSubscribe(email); }} style={{ display: 'flex' }}>
              <Input placeholder="Tu correo electrónico" type="email" required value={email} onChange={(e) => setEmail(e.target.value)} wrapStyle={{ flex: 1 }} aria-label="Tu correo electrónico" />
              <button type="submit" aria-label="Suscribirme" style={{ width: 46, height: 46, flex: '0 0 46px', background: 'var(--ink-1000)', color: 'var(--paper)', border: 0, cursor: 'pointer', display: 'grid', placeItems: 'center' }}>
                <Icon name="arrow-right" size={18} />
              </button>
            </form>
          )}
        </div>
      </div>
      <div style={{ borderTop: '1px solid var(--border-subtle)' }}>
        <div className="mx-container" style={{ display: 'flex', flexWrap: 'wrap', gap: 16, alignItems: 'center', justifyContent: 'space-between', padding: '20px 24px' }}>
          <span style={{ font: 'var(--body-xs)', color: 'var(--text-muted)' }}>© 2026 MEXTAS. Todos los derechos reservados.</span>
          <div style={{ display: 'flex', gap: 8 }}>
            {['VISA', 'MASTERCARD', 'AMEX', 'PAYPAL'].map((b) => (
              <span key={b} style={{ padding: '6px 10px', border: '1px solid var(--border-subtle)', background: 'var(--paper)', font: 'var(--label-sm)', letterSpacing: 'var(--track-label)', color: 'var(--ink-600)' }}>{b}</span>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

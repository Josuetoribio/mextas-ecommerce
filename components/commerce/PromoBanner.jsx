import React from 'react';
import { Button } from '../core/Button.jsx';
export function PromoBanner({ title, eyebrow, kicker, highlight, cta, image, theme = 'dark', onClick, height = 250, style }) {
  const dark = theme === 'dark';
  return (
    <div style={{ position: 'relative', overflow: 'hidden', minHeight: height, display: 'flex', alignItems: 'center',
      background: dark ? 'var(--ink-1000)' : 'var(--ink-050)', color: dark ? 'var(--paper)' : 'var(--ink-1000)', ...style }}>
      {image && <img src={image} alt="" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'right center' }} />}
      {image && <span style={{ position: 'absolute', inset: 0, background: dark ? 'linear-gradient(90deg,rgba(0,0,0,.92) 18%,rgba(0,0,0,.35) 62%,rgba(0,0,0,0))' : 'linear-gradient(90deg,rgba(242,242,242,.95) 18%,rgba(242,242,242,.4) 60%,rgba(242,242,242,0))' }} />}
      <div style={{ position: 'relative', padding: '38px 40px', maxWidth: 460, display: 'flex', flexDirection: 'column', gap: 14, alignItems: 'flex-start' }}>
        {eyebrow && <span style={{ font: 'var(--label-sm)', letterSpacing: 'var(--track-label)', textTransform: 'uppercase', opacity: .7 }}>{eyebrow}</span>}
        <h3 style={{ margin: 0, font: 'var(--heading-1)', letterSpacing: 'var(--track-label)', textTransform: 'uppercase', lineHeight: 1.18 }}>{title}</h3>
        {kicker && <span style={{ font: 'var(--body-sm)', letterSpacing: 'var(--track-label)', textTransform: 'uppercase', opacity: .75 }}>{kicker}</span>}
        {highlight && <div style={{ font: 'var(--display-3)', letterSpacing: 'var(--track-display)' }}>{highlight}</div>}
        {cta && <Button variant={dark ? 'inverse' : 'primary'} size="sm" onClick={onClick} style={{ marginTop: 6 }}>{cta}</Button>}
      </div>
    </div>
  );
}

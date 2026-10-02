import React from 'react';
import { Icon } from './Icon.jsx';
export function SectionHeading({ title, action, actionHref = '#', onAction, align = 'between', eyebrow, style }) {
  return (
    <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: align === 'center' ? 'center' : 'space-between', gap: 24, marginBottom: 'var(--space-8)', ...style }}>
      <div style={{ textAlign: align === 'center' ? 'center' : 'left' }}>
        {eyebrow && <div style={{ font: 'var(--label-sm)', letterSpacing: 'var(--track-label)', textTransform: 'uppercase', color: 'var(--text-muted)', marginBottom: 10 }}>{eyebrow}</div>}
        <h2 style={{ margin: 0, font: 'var(--heading-1)', letterSpacing: 'var(--track-label)', textTransform: 'uppercase' }}>{title}</h2>
      </div>
      {action && (
        <a href={actionHref} onClick={onAction} style={{ display: 'inline-flex', alignItems: 'center', gap: 8, font: 'var(--label-md)', letterSpacing: 'var(--track-label)', textTransform: 'uppercase', paddingBottom: 3, borderBottom: '1px solid var(--ink-1000)' }}>
          {action}<Icon name="arrow-right" size={15} />
        </a>
      )}
    </div>
  );
}

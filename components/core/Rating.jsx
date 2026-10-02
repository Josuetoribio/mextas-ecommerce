import React from 'react';
export function Rating({ value = 0, reviews, size = 13, showValue = false, style }) {
  const pct = Math.max(0, Math.min(100, (value / 5) * 100));
  const stars = '★★★★★';
  return (
    <span style={{ display: 'inline-flex', alignItems: 'center', gap: 7, ...style }} aria-label={`${value} de 5 estrellas`}>
      <span style={{ position: 'relative', font: `700 ${size}px/1 var(--font-text)`, letterSpacing: '1.5px', color: 'var(--ink-200)' }}>
        {stars}
        <span style={{ position: 'absolute', inset: 0, width: pct + '%', overflow: 'hidden', color: 'var(--ink-1000)', whiteSpace: 'nowrap' }}>{stars}</span>
      </span>
      {showValue && <span style={{ font: 'var(--body-xs)', color: 'var(--text-primary)' }}>{value.toFixed(1)}</span>}
      {reviews != null && <span style={{ font: 'var(--body-xs)', color: 'var(--text-muted)' }}>({reviews})</span>}
    </span>
  );
}

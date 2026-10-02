import React from 'react';
export function Logo({ size = 34, color = 'var(--ink-1000)', as = 'div', style, ...rest }) {
  const Tag = as;
  return (
    <Tag style={{ font: `400 ${size}px/1 var(--font-display)`, letterSpacing: 'var(--track-logo)', textTransform: 'uppercase', color, whiteSpace: 'nowrap', ...style }} {...rest}>MEXTAS</Tag>
  );
}

import React from 'react';
/* Lucide icons, loaded from CDN (see readme → ICONOGRAPHY). Renders a placeholder
   element that lucide's UMD build swaps for an inline SVG. */
export function Icon({ name, size = 20, strokeWidth = 1.6, color = 'currentColor', style, ...rest }) {
  const ref = React.useRef(null);
  React.useEffect(() => {
    const draw = () => window.lucide && window.lucide.createIcons({ nameAttr: 'data-lucide', attrs: {}, icons: undefined });
    if (window.lucide) draw(); else { const t = setInterval(() => { if (window.lucide) { draw(); clearInterval(t); } }, 120); return () => clearInterval(t); }
  }, [name]);
  return (
    <i ref={ref} data-lucide={name} aria-hidden="true"
      style={{ display: 'inline-flex', width: size, height: size, color, strokeWidth, ...style }}
      {...rest} />
  );
}

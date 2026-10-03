import React from 'react';
/* Lucide icons, loaded from CDN (see readme → ICONOGRAPHY). React renders the SVG itself
   from lucide's icon data. lucide.createIcons() would swap the element React owns for a new
   <svg>, and React then crashes the page when it removes or updates that icon. */
const toPascalCase = (s) => s.replace(/(\w)(\w*)(_|-|\s*)/g, (g0, g1, g2) => g1.toUpperCase() + g2.toLowerCase());

export function Icon({ name, size = 20, strokeWidth = 1.6, color = 'currentColor', style, className, ...rest }) {
  const [, redraw] = React.useReducer((n) => n + 1, 0);
  React.useEffect(() => {
    if (window.lucide) return;
    const t = setInterval(() => { if (window.lucide) { clearInterval(t); redraw(); } }, 120);
    return () => clearInterval(t);
  }, []);
  const node = window.lucide && window.lucide.icons[toPascalCase(name)];
  const css = { display: 'inline-flex', width: size, height: size, color, strokeWidth, ...style };
  if (!node) return <i aria-hidden="true" className={className} style={css} {...rest} />;
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor"
      strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"
      className={['lucide', 'lucide-' + name, className].filter(Boolean).join(' ')} style={css} {...rest}>
      {node[2].map(([tag, attrs], i) => React.createElement(tag, { key: i, ...attrs }))}
    </svg>
  );
}

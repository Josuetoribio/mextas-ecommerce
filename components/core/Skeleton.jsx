import React from 'react';
export function Skeleton({ width = '100%', height = 16, radius = 'var(--radius-none)', style }) {
  return (
    <span style={{ display: 'block', width, height, borderRadius: radius, background: 'linear-gradient(90deg,var(--ink-050) 25%,var(--ink-100) 37%,var(--ink-050) 63%)', backgroundSize: '400% 100%', animation: 'mx-shimmer 1.4s ease infinite', ...style }}>
      <style>{'@keyframes mx-shimmer{0%{background-position:100% 0}100%{background-position:0 0}}'}</style>
    </span>
  );
}

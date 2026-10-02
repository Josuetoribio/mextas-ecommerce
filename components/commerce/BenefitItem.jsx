import React from 'react';
import { Icon } from '../core/Icon.jsx';
export function BenefitItem({ icon, title, description, style }) {
  return (
    <div style={{ display: 'flex', gap: 16, alignItems: 'flex-start', ...style }}>
      <Icon name={icon} size={30} strokeWidth={1.2} />
      <div>
        <div style={{ font: 'var(--label-md)', letterSpacing: 'var(--track-label)', textTransform: 'uppercase', marginBottom: 7 }}>{title}</div>
        <div style={{ font: 'var(--body-sm)', color: 'var(--text-secondary)', maxWidth: '26ch' }}>{description}</div>
      </div>
    </div>
  );
}

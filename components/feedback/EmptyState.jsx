import React from 'react';
import { Icon } from '../core/Icon.jsx';
export function EmptyState({ icon = 'package-open', title, description, action, style }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 14, textAlign: 'center', padding: '64px 24px', ...style }}>
      <Icon name={icon} size={40} strokeWidth={1.1} color="var(--ink-300)" />
      <h3 style={{ margin: 0, font: 'var(--heading-2)', letterSpacing: 'var(--track-label)', textTransform: 'uppercase' }}>{title}</h3>
      {description && <p style={{ margin: 0, font: 'var(--body-sm)', color: 'var(--text-secondary)', maxWidth: '40ch' }}>{description}</p>}
      {action && <div style={{ marginTop: 8 }}>{action}</div>}
    </div>
  );
}

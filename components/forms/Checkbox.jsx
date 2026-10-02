import React from 'react';
import { Icon } from '../core/Icon.jsx';
export function Checkbox({ label, count, checked, onChange, disabled, style }) {
  return (
    <label style={{ display: 'flex', alignItems: 'center', gap: 11, cursor: disabled ? 'not-allowed' : 'pointer', opacity: disabled ? .4 : 1, padding: '6px 0', ...style }}>
      <input type="checkbox" checked={!!checked} onChange={onChange} disabled={disabled} style={{ position: 'absolute', opacity: 0, width: 0, height: 0 }} />
      <span aria-hidden="true" style={{ width: 18, height: 18, flex: '0 0 18px', display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
        border: '1px solid ' + (checked ? 'var(--ink-1000)' : 'var(--border-default)'), background: checked ? 'var(--ink-1000)' : 'var(--paper)', color: 'var(--paper)', transition: 'var(--t-fast)' }}>
        {checked && <Icon name="check" size={13} strokeWidth={2.4} />}
      </span>
      <span style={{ font: 'var(--body-sm)', color: 'var(--text-primary)' }}>{label}</span>
      {count != null && <span style={{ marginLeft: 'auto', font: 'var(--body-xs)', color: 'var(--text-muted)' }}>{count}</span>}
    </label>
  );
}

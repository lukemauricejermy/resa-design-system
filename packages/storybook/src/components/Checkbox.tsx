import React from 'react';
import { Icons } from './Icon';

export interface CheckboxProps {
  checked?: boolean;
  disabled?: boolean;
  indeterminate?: boolean;
  onChange?: (checked: boolean) => void;
  label?: string;
  className?: string;
  id?: string;
  name?: string;
  required?: boolean;
}

/**
 * Checkbox component built with design tokens
 * 
 * Design System Rules:
 * - Uses semantic color tokens for all colors
 * - Follows established border radius and width tokens
 * - Supports checked, unchecked, and indeterminate states
 * - Accessible with proper ARIA attributes
 */
export function Checkbox({
  checked = false,
  disabled = false,
  indeterminate = false,
  onChange,
  label,
  className = '',
  id,
  name,
  required = false,
}: CheckboxProps) {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (!disabled && onChange) {
      onChange(event.target.checked);
    }
  };

  const handleClick = (event: React.MouseEvent<HTMLDivElement>) => {
    if (!disabled && onChange) {
      event.preventDefault();
      onChange(!checked);
    }
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
    if (event.key === ' ' || event.key === 'Enter') {
      event.preventDefault();
      if (!disabled && onChange) {
        onChange(!checked);
      }
    }
  };

  // Determine visual state
  const getVisualState = () => {
    if (disabled) return 'disabled';
    if (checked || indeterminate) return 'checked';
    return 'default';
  };

  const visualState = getVisualState();

  // Get styles based on state using design tokens
  const getStateStyles = () => {
    switch (visualState) {
      case 'checked':
        return {
          backgroundColor: 'var(--color-fill-tertiary)',
          border: 'var(--border-width-m) solid var(--color-border-active)',
          borderRadius: 'var(--border-radius-xs)',
        };
      case 'disabled':
        return {
          backgroundColor: 'var(--color-fill-disabled)',
          border: 'var(--border-width-m) solid var(--color-border-disabled)',
          borderRadius: 'var(--border-radius-xs)',
        };
      default:
        return {
          backgroundColor: 'var(--color-fill-tertiary)',
          border: 'var(--border-width-s) solid var(--color-border-default)',
          borderRadius: 'var(--border-radius-xs)',
        };
    }
  };

  const stateStyles = getStateStyles();

  return (
    <div className={`checkbox-container ${className}`} style={{ display: 'flex', alignItems: 'center', gap: 'var(--spacing-xs)' }}>
      <div
        role="checkbox"
        aria-checked={indeterminate ? 'mixed' : checked}
        aria-disabled={disabled}
        aria-required={required}
        tabIndex={disabled ? -1 : 0}
        onClick={handleClick}
        onKeyDown={handleKeyDown}
        style={{
          position: 'relative',
          width: '20px',
          height: '20px',
          cursor: disabled ? 'not-allowed' : 'pointer',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          transition: 'all 0.2s ease',
          ...stateStyles,
        }}
        aria-label={label || (checked ? 'Checked' : 'Unchecked')}
      >
        {/* Check or Indeterminate Icon */}
        {(checked || indeterminate) && (
          <div style={{
            position: 'absolute',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: '12px',
            height: '12px',
            color: disabled ? 'var(--color-content-disabled)' : 'var(--color-content-primary)',
          }}>
            {indeterminate ? (
              <Icons.Minus size={12} strokeWidth={2} />
            ) : (
              <Icons.Check size={12} strokeWidth={2} />
            )}
          </div>
        )}

        {/* Hidden input for form submission */}
        <input
          type="checkbox"
          id={id}
          name={name}
          checked={checked}
          disabled={disabled}
          onChange={handleChange}
          required={required}
          style={{
            position: 'absolute',
            opacity: 0,
            pointerEvents: 'none',
            width: '100%',
            height: '100%',
          }}
        />
      </div>

      {/* Label */}
      {label && (
        <label
          htmlFor={id}
          style={{
            fontFamily: 'var(--font-family-primary)',
            fontSize: 'var(--font-size-xs)',
            fontWeight: 'var(--font-weight-medium)',
            color: disabled ? 'var(--color-content-disabled)' : 'var(--color-content-primary)',
            cursor: disabled ? 'not-allowed' : 'pointer',
            userSelect: 'none',
          }}
          onClick={disabled ? undefined : () => onChange?.(!checked)}
        >
          {label}
        </label>
      )}
    </div>
  );
}

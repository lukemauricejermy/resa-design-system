'use client';

import React from 'react';
import { cn } from '../lib/utils';

export interface CheckboxProps {
  checked?: boolean;
  indeterminate?: boolean;
  disabled?: boolean;
  onChange?: (checked: boolean) => void;
  className?: string;
  id?: string;
  name?: string;
  value?: string;
}

export function Checkbox({ 
  checked = false,
  indeterminate = false,
  disabled = false,
  onChange,
  className,
  id,
  name,
  value
}: CheckboxProps) {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (onChange) {
      onChange(event.target.checked);
    }
  };

  const isChecked = indeterminate ? 'indeterminate' : checked;

  return (
    <div className="relative inline-flex items-center">
      <input
        type="checkbox"
        id={id}
        name={name}
        value={value}
        checked={checked}
        ref={(el) => {
          if (el) {
            el.indeterminate = indeterminate;
          }
        }}
        onChange={handleChange}
        disabled={disabled}
        className={cn(
          'sr-only', // Hide the actual input but keep it accessible
          className
        )}
      />
      <div className={cn(
        'relative inline-flex items-center justify-center',
        'w-5 h-5', // 20px - matches checkbox.size
        'border-2 rounded-xs', // 8px border radius
        'transition-all duration-base', // 200ms transition
        'focus-within:ring-2 focus-within:ring-offset-2',
        'focus-within:ring-fill-primary',
        'disabled:opacity-50 disabled:cursor-not-allowed',
        // Border styles
        checked || indeterminate
          ? 'border-fill-primary bg-fill-primary'
          : 'border-border-default bg-surface-primary',
        // Hover states
        !disabled && !checked && !indeterminate && 'hover:border-border-active',
        !disabled && (checked || indeterminate) && 'hover:bg-fill-primary-hover',
        className
      )}>
        {/* Checkmark icon */}
        {checked && !indeterminate && (
          <svg
            className="w-3 h-3 text-content-inverse" // 12px - matches checkbox.iconSize
            fill="currentColor"
            viewBox="0 0 20 20"
            aria-hidden="true"
          >
            <path
              fillRule="evenodd"
              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
              clipRule="evenodd"
            />
          </svg>
        )}
        
        {/* Indeterminate icon */}
        {indeterminate && (
          <svg
            className="w-3 h-3 text-content-inverse" // 12px - matches checkbox.iconSize
            fill="currentColor"
            viewBox="0 0 20 20"
            aria-hidden="true"
          >
            <path
              fillRule="evenodd"
              d="M3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
              clipRule="evenodd"
            />
          </svg>
        )}
      </div>
    </div>
  );
}

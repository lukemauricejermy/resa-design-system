'use client';

import React from 'react';
import { cn } from '../lib/utils';

export interface ButtonProps {
  variant?: 'primary' | 'secondary' | 'tertiary' | 'ghost' | 'success' | 'warning' | 'error' | 'info';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
  onClick?: () => void;
  disabled?: boolean;
  className?: string;
  type?: 'button' | 'submit' | 'reset';
  leadingIcon?: React.ReactNode;
  trailingIcon?: React.ReactNode;
}

export function Button({ 
  variant = 'primary', 
  size = 'md', 
  children, 
  onClick, 
  disabled = false,
  className = '',
  type = 'button',
  leadingIcon,
  trailingIcon
}: ButtonProps) {
  const baseClasses = cn(
    'inline-flex items-center justify-center',
    'font-medium transition-all duration-base', // 200ms transition
    'focus:outline-none focus:ring-2 focus:ring-offset-2',
    'disabled:opacity-50 disabled:cursor-not-allowed',
    'rounded-xs', // 8px border radius
    'border-2', // 2px border width
    'gap-2' // 8px gap between elements
  );
  
  const sizeClasses = {
    sm: cn(
      'px-l py-micro-sm', // 12px horizontal, 4px vertical padding
      'text-label-extra-small', // 12px font size
      'min-h-8' // 32px minimum height - matches button.height.sm
    ),
    md: cn(
      'px-m py-micro-md', // 16px horizontal, 8px vertical padding
      'text-label-small', // 14px font size
      'min-h-10' // 40px minimum height - matches button.height.md
    ),
    lg: cn(
      'px-l py-l', // 24px horizontal, 12px vertical padding
      'text-label-medium', // 18px font size
      'min-h-12' // 48px minimum height - matches button.height.lg
    ),
  };
  
  const variantClasses = {
    primary: cn(
      'bg-fill-primary text-content-inverse border-fill-primary',
      'hover:bg-fill-primary-hover hover:border-fill-primary-hover',
      'active:bg-fill-primary-active active:border-fill-primary-active',
      'focus:ring-fill-primary',
      'disabled:bg-fill-inactive disabled:border-fill-inactive'
    ),
    secondary: cn(
      'bg-fill-secondary text-content-primary border-fill-secondary',
      'hover:bg-fill-secondary-hover hover:border-fill-secondary-hover',
      'active:bg-fill-secondary-active active:border-fill-secondary-active',
      'focus:ring-fill-secondary',
      'disabled:bg-fill-inactive disabled:border-fill-inactive'
    ),
    tertiary: cn(
      'bg-fill-tertiary text-content-primary border-border-default',
      'hover:bg-fill-tertiary-hover hover:border-border-active',
      'active:bg-fill-tertiary-active active:border-border-active',
      'focus:ring-fill-primary',
      'disabled:bg-fill-inactive disabled:border-border-inactive'
    ),
    ghost: cn(
      'bg-transparent text-content-primary border-transparent',
      'hover:bg-fill-secondary hover:border-fill-secondary',
      'active:bg-fill-secondary-active active:border-fill-secondary-active',
      'focus:ring-fill-secondary',
      'disabled:bg-transparent disabled:border-transparent'
    ),
    success: cn(
      'bg-fill-success text-content-inverse border-fill-success',
      'hover:bg-fill-success-hover hover:border-fill-success-hover',
      'active:bg-fill-success-active active:border-fill-success-active',
      'focus:ring-fill-success',
      'disabled:bg-fill-inactive disabled:border-fill-inactive'
    ),
    warning: cn(
      'bg-fill-warning text-content-inverse border-fill-warning',
      'hover:bg-fill-warning-hover hover:border-fill-warning-hover',
      'active:bg-fill-warning-active active:border-fill-warning-active',
      'focus:ring-fill-warning',
      'disabled:bg-fill-inactive disabled:border-fill-inactive'
    ),
    error: cn(
      'bg-fill-error text-content-inverse border-fill-error',
      'hover:bg-fill-error-hover hover:border-fill-error-hover',
      'active:bg-fill-error-active active:border-fill-error-active',
      'focus:ring-fill-error',
      'disabled:bg-fill-inactive disabled:border-fill-inactive'
    ),
    info: cn(
      'bg-fill-info text-content-inverse border-fill-info',
      'hover:bg-fill-info-hover hover:border-fill-info-hover',
      'active:bg-fill-info-active active:border-fill-info-active',
      'focus:ring-fill-info',
      'disabled:bg-fill-inactive disabled:border-fill-inactive'
    ),
  };
  
  const classes = cn(
    baseClasses,
    sizeClasses[size],
    variantClasses[variant],
    className
  );
  
  return (
    <button
      type={type}
      className={classes}
      onClick={onClick}
      disabled={disabled}
    >
      {leadingIcon && (
        <span className="flex items-center justify-center">
          {leadingIcon}
        </span>
      )}
      {children}
      {trailingIcon && (
        <span className="flex items-center justify-center">
          {trailingIcon}
        </span>
      )}
    </button>
  );
}

import React from 'react';
import './Button.css';
import { Icons } from './Icon';

export interface ButtonProps {
  children?: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'tertiary' | 'ghost' | 'success' | 'warning' | 'error' | 'info';
  size?: 'sm' | 'md' | 'lg';
  leadingIcon?: React.ReactNode;
  trailingIcon?: React.ReactNode;
  disabled?: boolean;
  onClick?: () => void;
  className?: string;
  type?: 'button' | 'submit' | 'reset';
}

export function Button({
  children,
  variant = 'primary',
  size = 'md',
  leadingIcon,
  trailingIcon,
  disabled = false,
  onClick,
  className = '',
  type = 'button',
}: ButtonProps) {
  // Token-based styling - all values reference design tokens
  const baseStyles = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 'var(--spacing-xs)', // 6px gap between elements
    padding: 'var(--spacing-s)', // 8px padding
    borderRadius: 'var(--border-radius-xs)', // 8px border radius
    border: 'none',
    cursor: disabled ? 'not-allowed' : 'pointer',
    fontFamily: 'var(--font-family-primary)',
    fontSize: 'var(--font-size-3xs)', // Label Extra Extra Small
    fontWeight: 'var(--font-weight-medium)', // Medium weight (500) - consistent across all variants
    lineHeight: 1, // Perfect centering (no extra space)
    letterSpacing: 'var(--letter-spacing-none)', // No letter spacing for labels
    transition: 'all 0.2s ease',
    position: 'relative' as const,
    minHeight: '40px',
    minWidth: 'fit-content',
  };

  // Size variations using tokens
  const sizeStyles = {
    sm: {
      padding: 'var(--spacing-xs)', // 6px
      minHeight: '32px',
      fontSize: 'var(--font-size-4xs)', // Smaller label size
    },
    md: {
      padding: 'var(--spacing-s)', // 8px
      minHeight: '40px',
      fontSize: 'var(--font-size-3xs)', // Label Extra Extra Small
    },
    lg: {
      padding: 'var(--spacing-m)', // 16px
      minHeight: '48px',
      fontSize: 'var(--font-size-2xs)', // Label Extra Small
    },
  };

  // Variant styles using semantic color tokens
  const getVariantStyles = () => {
    const baseVariant = variant.toLowerCase();
    
    switch (baseVariant) {
      case 'primary':
        return {
          backgroundColor: 'var(--color-fill-primary)',
          color: 'var(--color-content-inverse)',
        };
      
      case 'secondary':
        return {
          backgroundColor: 'var(--color-fill-secondary)',
          color: 'var(--color-content-primary)',
        };
      
      case 'tertiary':
        return {
          backgroundColor: 'var(--color-fill-tertiary)',
          color: 'var(--color-content-primary)',
          border: 'var(--border-width-s) solid var(--color-border-default)',
        };
      
      case 'ghost':
        return {
          backgroundColor: 'transparent',
          color: 'var(--color-content-primary)',
        };
      
      case 'success':
        return {
          backgroundColor: 'var(--color-fill-success)',
          color: 'var(--color-content-success)',
        };
      
      case 'warning':
        return {
          backgroundColor: 'var(--color-fill-warning)',
          color: 'var(--color-content-warning)',
        };
      
      case 'error':
        return {
          backgroundColor: 'var(--color-fill-error)',
          color: 'var(--color-content-error)',
        };
      
      case 'info':
        return {
          backgroundColor: 'var(--color-fill-info)',
          color: 'var(--color-content-info)',
        };
      
      default:
        return {
          backgroundColor: 'var(--color-fill-primary)',
          color: 'var(--color-content-inverse)',
        };
    }
  };

  const variantStyles = getVariantStyles();
  const currentSizeStyles = sizeStyles[size];

  // Combine all styles
  const buttonStyles = {
    ...baseStyles,
    ...currentSizeStyles,
    ...variantStyles,
    opacity: disabled ? 0.6 : 1,
  };

  return (
    <button
      type={type}
      disabled={disabled}
      onClick={onClick}
      className={`button-component ${className}`}
      style={buttonStyles}
      aria-disabled={disabled}
      data-variant={variant}
    >
      {leadingIcon}
      {children}
      {trailingIcon}
    </button>
  );
}

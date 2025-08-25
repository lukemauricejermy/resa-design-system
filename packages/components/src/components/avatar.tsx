'use client';

import React from 'react';
import { cn } from '../lib/utils';

export interface AvatarProps {
  src?: string;
  alt?: string;
  fallback?: string;
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  className?: string;
}

export function Avatar({ 
  src, 
  alt, 
  fallback, 
  size = 'md',
  className 
}: AvatarProps) {
  const sizeClasses = {
    xs: 'w-6 h-6',      // 24px - matches avatar.size.xs
    sm: 'w-8 h-8',      // 32px - matches avatar.size.sm
    md: 'w-10 h-10',    // 40px - matches avatar.size.md
    lg: 'w-12 h-12',    // 48px - matches avatar.size.lg
    xl: 'w-16 h-16',    // 64px - matches avatar.size.xl
  };

  const textSizeClasses = {
    xs: 'text-label-extra-extra-extra-small', // 10px
    sm: 'text-label-extra-extra-small',       // 11px
    md: 'text-label-extra-small',             // 12px
    lg: 'text-label-small',                   // 14px
    xl: 'text-label-medium',                  // 18px
  };

  const iconSizeClasses = {
    xs: 'w-3 h-3',      // 12px - matches avatar.iconSize
    sm: 'w-3 h-3',      // 12px
    md: 'w-3 h-3',      // 12px
    lg: 'w-4 h-4',      // 16px
    xl: 'w-5 h-5',      // 20px
  };

  return (
    <div className={cn(
      'relative inline-block rounded-full overflow-hidden',
      'bg-surface-recessive',
      'border border-border-default',
      sizeClasses[size],
      className
    )}>
      {src ? (
        <img
          src={src}
          alt={alt || 'Avatar'}
          className="w-full h-full object-cover"
        />
      ) : (
        <div className={cn(
          'w-full h-full',
          'flex items-center justify-center',
          'bg-surface-recessive',
          'text-content-secondary',
          'font-medium'
        )}>
          {fallback ? (
            <span className={cn(
              'font-medium',
              'text-content-secondary',
              textSizeClasses[size]
            )}>
              {fallback}
            </span>
          ) : (
            <svg
              className={cn(
                'text-content-tertiary',
                iconSizeClasses[size]
              )}
              fill="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
            </svg>
          )}
        </div>
      )}
    </div>
  );
}

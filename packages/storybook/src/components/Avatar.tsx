import React from 'react';

export interface AvatarProps {
  /**
   * The initials to display when no image is provided
   */
  initials?: string;
  /**
   * The source URL for the avatar image
   */
  src?: string;
  /**
   * Alt text for the avatar image
   */
  alt?: string;
  /**
   * The size variant of the avatar
   */
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  /**
   * Additional CSS classes
   */
  className?: string;
}

export function Avatar({ 
  initials = 'LJ', 
  src, 
  alt, 
  size = 'md',
  className = '' 
}: AvatarProps) {
  // Size mapping to design tokens
  const sizeMap = {
    xs: { width: '24px', height: '24px', fontSize: '12px' },
    sm: { width: '32px', height: '32px', fontSize: '14px' }, 
    md: { width: '40px', height: '40px', fontSize: '14px' },
    lg: { width: '48px', height: '48px', fontSize: '16px' },
    xl: { width: '64px', height: '64px', fontSize: '18px' }
  };

  const sizeStyles = sizeMap[size];

  if (src) {
    return (
      <div
        className={className}
        style={{
          position: 'relative',
          width: sizeStyles.width,
          height: sizeStyles.height,
          borderRadius: '50%',
          backgroundColor: 'var(--color-fill-info)',
          overflow: 'hidden',
        }}
        role="img"
        aria-label={alt || 'User avatar'}
      >
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          width: '100%',
          height: '100%',
        }}>
          <img
            src={src}
            alt={alt || 'User avatar'}
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              borderRadius: '50%',
            }}
          />
        </div>
        <div
          aria-hidden="true"
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            border: '1px solid var(--color-border-default)',
            borderRadius: '50%',
            pointerEvents: 'none',
          }}
        />
      </div>
    );
  }

  return (
    <div 
      className={className}
      style={{
        position: 'relative',
        width: sizeStyles.width,
        height: sizeStyles.height,
        borderRadius: '50%',
        backgroundColor: 'var(--color-fill-info)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
      role="img"
      aria-label={`Avatar with initials ${initials}`}
    >
      <div style={{
        fontFamily: 'var(--font-family-primary)',
        fontSize: sizeStyles.fontSize,
        fontWeight: 'var(--font-weight-medium)',
        lineHeight: 1,
        color: 'var(--color-content-info)',
        textAlign: 'center',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        height: '100%',
      }}>
        {initials}
      </div>
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          border: '1px solid var(--color-border-info)',
          borderRadius: '50%',
          pointerEvents: 'none',
        }}
      />
    </div>
  );
}

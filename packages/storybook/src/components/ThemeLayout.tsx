import React, { ReactNode } from 'react';
import { useTheme } from '../contexts/ThemeContext';

interface ThemeLayoutProps {
  children: ReactNode;
  title?: string;
  description?: string;
  showThemeToggle?: boolean;
  maxWidth?: string;
}

/**
 * Theme-aware layout component that provides consistent theming
 * for all component stories with proper background and surface colors
 */
export function ThemeLayout({ 
  children, 
  title, 
  description, 
  showThemeToggle = true,
  maxWidth = '1200px'
}: ThemeLayoutProps) {
  const { isDark, toggleTheme } = useTheme();

  return (
    <div style={{
      minHeight: '100vh',
      backgroundColor: 'var(--color-background-primary)',
      padding: 'var(--spacing-xl)',
      transition: 'all 0.3s ease',
    }}>
      <div style={{
        maxWidth,
        margin: '0 auto',
        display: 'flex',
        flexDirection: 'column',
        gap: 'var(--spacing-xl)',
      }}>
        {/* Header with theme toggle */}
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'flex-start',
          gap: 'var(--spacing-m)',
          paddingBottom: 'var(--spacing-l)',
          borderBottom: 'var(--border-width-s) solid var(--color-border-default)',
        }}>
          <div>
            {title && (
              <h1 style={{
                fontFamily: 'var(--font-family-primary)',
                fontSize: 'var(--font-size-3xl)',
                fontWeight: 'var(--font-weight-bold)',
                color: 'var(--color-content-primary)',
                margin: '0 0 var(--spacing-xs) 0',
              }}>
                {title}
              </h1>
            )}
            {description && (
              <p style={{
                fontFamily: 'var(--font-family-primary)',
                fontSize: 'var(--font-size-m)',
                color: 'var(--color-content-secondary)',
                margin: 0,
                maxWidth: '600px',
                lineHeight: 'var(--line-height-relaxed)',
              }}>
                {description}
              </p>
            )}
          </div>

          {/* Theme Toggle */}
          {showThemeToggle && (
            <button
              onClick={toggleTheme}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: 'var(--spacing-xs)',
                padding: 'var(--spacing-xs) var(--spacing-s)',
                backgroundColor: 'var(--color-surface-secondary)',
                border: 'var(--border-width-s) solid var(--color-border-default)',
                borderRadius: 'var(--border-radius-xs)',
                color: 'var(--color-content-primary)',
                fontFamily: 'var(--font-family-primary)',
                fontSize: 'var(--font-size-xs)',
                fontWeight: 'var(--font-weight-medium)',
                cursor: 'pointer',
                transition: 'all 0.2s ease',
              }}
              aria-label={`Switch to ${isDark ? 'light' : 'dark'} mode`}
            >
              {isDark ? '☀️' : '🌙'} {isDark ? 'Light' : 'Dark'} Mode
            </button>
          )}
        </div>

        {/* Main content */}
        <div style={{
          flex: 1,
          display: 'flex',
          flexDirection: 'column',
          gap: 'var(--spacing-xl)',
        }}>
          {children}
        </div>
      </div>
    </div>
  );
}

/**
 * Theme-aware card component for consistent component rendering
 */
export function ThemeCard({ 
  children, 
  title,
  padding = 'var(--spacing-l)',
  margin = '0',
}: {
  children: ReactNode;
  title?: string;
  padding?: string;
  margin?: string;
}) {
  return (
    <div style={{
      backgroundColor: 'var(--color-surface-primary)',
      border: 'var(--border-width-s) solid var(--color-border-default)',
      borderRadius: 'var(--border-radius-m)',
      padding,
      margin,
      transition: 'all 0.3s ease',
    }}>
      {title && (
        <h3 style={{
          fontFamily: 'var(--font-family-primary)',
          fontSize: 'var(--font-size-l)',
          fontWeight: 'var(--font-weight-semibold)',
          color: 'var(--color-content-primary)',
          margin: '0 0 var(--spacing-m) 0',
        }}>
          {title}
        </h3>
      )}
      {children}
    </div>
  );
}

/**
 * Theme-aware section component for organizing content
 */
export function ThemeSection({ 
  children, 
  title,
  description,
}: {
  children: ReactNode;
  title?: string;
  description?: string;
}) {
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--spacing-m)',
    }}>
      {title && (
        <h2 style={{
          fontFamily: 'var(--font-family-primary)',
          fontSize: 'var(--font-size-2xl)',
          fontWeight: 'var(--font-weight-bold)',
          color: 'var(--color-content-primary)',
          margin: '0 0 var(--spacing-xs) 0',
        }}>
          {title}
        </h2>
      )}
      {description && (
        <p style={{
          fontFamily: 'var(--font-family-primary)',
          fontSize: 'var(--font-size-m)',
          color: 'var(--color-content-secondary)',
          margin: '0 0 var(--spacing-m) 0',
          lineHeight: 'var(--line-height-relaxed)',
        }}>
          {description}
        </p>
      )}
      {children}
    </div>
  );
}

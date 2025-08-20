import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

type Theme = 'light' | 'dark';

interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
  isDark: boolean;
  getThemeStyles: () => ThemeStyles;
}

interface ThemeStyles {
  pageBackground: string;
  surfacePrimary: string;
  surfaceSecondary: string;
  cardBackground: string;
  borderColor: string;
  textPrimary: string;
  textSecondary: string;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

interface ThemeProviderProps {
  children: ReactNode;
}

export function ThemeProvider({ children }: ThemeProviderProps) {
  const [theme, setTheme] = useState<Theme>('light');

  useEffect(() => {
    // Apply theme to document body for global CSS variable updates
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => prev === 'light' ? 'dark' : 'light');
  };

  const getThemeStyles = (): ThemeStyles => {
    if (theme === 'dark') {
      return {
        pageBackground: 'var(--color-fill-primary)',
        surfacePrimary: 'var(--color-surface-primary)',
        surfaceSecondary: 'var(--color-fill-secondary)',
        cardBackground: 'var(--color-surface-primary)',
        borderColor: 'var(--color-border-stronger)',
        textPrimary: 'var(--color-content-inverse)',
        textSecondary: 'var(--color-content-secondary)',
      };
    }

    // Light theme
    return {
      pageBackground: 'var(--color-fill-tertiary)',
      surfacePrimary: 'var(--color-surface-primary)',
      surfaceSecondary: 'var(--color-fill-secondary)',
      cardBackground: 'var(--color-surface-primary)',
      borderColor: 'var(--color-border-default)',
      textPrimary: 'var(--color-content-primary)',
      textSecondary: 'var(--color-content-secondary)',
    };
  };

  const value: ThemeContextType = {
    theme,
    toggleTheme,
    isDark: theme === 'dark',
    getThemeStyles,
  };

  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme(): ThemeContextType {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
}

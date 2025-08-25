/**
 * Resa Design System - Design Tokens
 * This file provides programmatic access to all design tokens
 * IMPORTANT: All components must use these tokens, never hardcoded values
 */

// Color Tokens - ALL colors used in components
export const colors = {
  // PRIMITIVE COLORS - Raw hex values (exactly matching Figma)
  primitives: {
    // Base colors
    base: {
      white: '#ffffff',
      black: '#000000',
    },
    // Grey scale
    grey: {
      10: '#1a1a1a',
      20: '#333333',
      30: '#4d4d4d',
      40: '#666666',
      50: '#808080',
      60: '#999999',
      70: '#b3b3b3',
      80: '#cccccc',
      90: '#e0e0e0',
      95: '#f2f2f2',
    },
    // Sand scale
    sand: {
      10: '#201b13',
      20: '#3f3627',
      30: '#5c4d3e',
      40: '#7a6752',
      50: '#93806c',
      60: '#aa9c88',
      70: '#c2b4a3',
      80: '#d8cebf',
      90: '#ece7df',
      95: '#f5f3ef',
    },
    // Orange scale
    orange: {
      10: '#331300',
      20: '#662500',
      30: '#993800',
      40: '#cc4b00',
      50: '#ff5c00',
      60: '#ff7e34',
      70: '#ff9d66',
      80: '#ffbe99',
      90: '#ffdfcc',
      95: '#ffefe5',
    },
    // Red scale
    red: {
      10: '#2a0d0a',
      20: '#531913',
      30: '#7c261d',
      40: '#a63326',
      50: '#d03e2f',
      60: '#d96659',
      70: '#e38c82',
      80: '#ecb3ac',
      90: '#f6dad5',
      95: '#faecea',
    },
    // UI colors
    success: {
      10: '#092711',
      20: '#134e21',
      30: '#1c7532',
      40: '#259b42',
      50: '#2fc253',
      60: '#58cf70',
      70: '#82dd8d',
      80: '#abeaaa',
      90: '#d5f7da',
      95: '#eafbec',
    },
    warning: {
      10: '#302700',
      20: '#604d00',
      30: '#907400',
      40: '#c09a00',
      50: '#f0c100',
      60: '#fad70a',
      70: '#fbe23e',
      80: '#fdec71',
      90: '#fef5b8',
      95: '#fefadc',
    },
    error: {
      10: '#2e0908',
      20: '#5c1110',
      30: '#8b1a18',
      40: '#b92320',
      50: '#e82c28',
      60: '#f06360',
      70: '#f48a88',
      80: '#f8b1b0',
      90: '#fcd8d7',
      95: '#feebeb',
    },
    info: {
      10: '#0b1930',
      20: '#163260',
      30: '#224c91',
      40: '#2d65c1',
      50: '#397ef1',
      60: '#6299f5',
      70: '#8ab3f8',
      80: '#b1cdfa',
      90: '#d8e6fb',
      95: '#ecf3fd',
    },
  },
  
  // SEMANTIC COLORS - Reference primitives by name (exactly matching Figma)
  semantic: {
    // Light mode colors (default)
    light: {
      content: {
        primary: 'grey.10',
        secondary: 'grey.30',
        tertiary: 'grey.40',
        disabled: 'grey.70',
        placeholder: 'grey.30',
        inverse: 'base.white',
        success: 'success.20',
        warning: 'warning.20',
        error: 'error.20',
        info: 'info.20',
      },
      background: {
        primary: 'sand.95',
        secondary: 'base.white',
        contrast: 'grey.10',
        recessive: 'sand.90',
      },
      surface: {
        primary: 'base.white',
        recessive: 'sand.90',
        secondary: 'sand.95',
        inverse: 'grey.10',
        success: 'success.95',
        warning: 'warning.95',
        error: 'error.95',
        info: 'info.95',
      },
      // Fill colors for buttons and interactive elements
      fill: {
        primary: 'grey.10',
        'primary-hover': 'grey.20',
        'primary-active': 'grey.40',
        secondary: 'sand.90',
        'secondary-hover': 'sand.80',
        'secondary-active': 'sand.90',
        tertiary: 'base.white',
        'tertiary-hover': 'sand.95',
        'tertiary-active': 'sand.95',
        success: 'success.90',
        warning: 'warning.90',
        error: 'error.90',
        info: 'info.90',
        'success-hover': 'success.80',
        'success-active': 'success.70',
        'warning-hover': 'warning.80',
        'warning-active': 'warning.70',
        'error-hover': 'error.80',
        'error-active': 'error.70',
        'info-hover': 'info.80',
        'info-active': 'info.70',
        'secondary-pressed': 'sand.70',
        'primary-pressed': 'grey.40',
        'tertiary-pressed': 'sand.90',
        'success-pressed': 'success.60',
        'warning-pressed': 'warning.60',
        'error-pressed': 'error.60',
        'info-pressed': 'info.60',
        inactive: 'grey.95',
        'rating-active': 'orange.60',
        'rating-inactive': 'orange.95',
      },
      // Border colors
      border: {
        default: 'sand.90',
        strong: 'sand.80',
        stronger: 'sand.60',
        active: 'grey.10',
        inactive: 'grey.95',
        filled: 'grey.10',
        success: 'success.80',
        warning: 'warning.80',
        error: 'error.80',
        info: 'info.80',
      },
    },
    // Dark mode colors
    dark: {
      content: {
        primary: 'base.white',
        secondary: 'grey.90',
        tertiary: 'grey.70',
        disabled: 'grey.30',
        placeholder: 'grey.80',
        inverse: 'grey.10',
        success: 'success.95',
        warning: 'warning.95',
        error: 'error.95',
        info: 'info.95',
      },
      background: {
        primary: 'base.black',
        secondary: 'grey.30',
        contrast: 'grey.50',
        recessive: 'grey.10',
      },
      surface: {
        primary: 'grey.10',
        recessive: 'grey.30',
        secondary: 'grey.40',
        inverse: 'grey.80',
        success: 'success.20',
        warning: 'warning.20',
        error: 'error.20',
        info: 'info.20',
      },
      // Fill colors for buttons and interactive elements
      fill: {
        primary: 'base.white',
        'primary-hover': 'grey.80',
        'primary-active': 'grey.70',
        secondary: 'grey.30',
        'secondary-hover': 'grey.40',
        'secondary-active': 'grey.30',
        tertiary: 'grey.30',
        'tertiary-hover': 'grey.30',
        'tertiary-active': 'grey.10',
        success: 'success.30',
        warning: 'warning.30',
        error: 'error.30',
        info: 'info.30',
        'success-hover': 'success.40',
        'success-active': 'success.50',
        'warning-hover': 'warning.40',
        'warning-active': 'warning.50',
        'error-hover': 'error.40',
        'error-active': 'error.50',
        'info-hover': 'info.40',
        'info-active': 'info.50',
        'secondary-pressed': 'grey.20',
        'primary-pressed': 'grey.20',
        'tertiary-pressed': 'grey.20',
        'success-pressed': 'success.10',
        'warning-pressed': 'warning.10',
        'error-pressed': 'error.10',
        'info-pressed': 'info.10',
        inactive: 'grey.30',
        'rating-active': 'orange.70',
        'rating-inactive': 'orange.20',
      },
      // Border colors
      border: {
        default: 'grey.30',
        strong: 'grey.50',
        stronger: 'grey.50',
        active: 'base.white',
        inactive: 'grey.30',
        filled: 'base.white',
        success: 'success.20',
        warning: 'warning.20',
        error: 'error.20',
        info: 'info.20',
      },
    },
  },
  
  // UI COLORS - Reference primitive tokens
  ui: {
    success: {
      95: 'var(--color-primitive-ui-success-95)',
      90: 'var(--color-primitive-ui-success-90)',
      80: 'var(--color-primitive-ui-success-80)',
      70: 'var(--color-primitive-ui-success-70)',
      60: 'var(--color-primitive-ui-success-60)',
      50: 'var(--color-primitive-ui-success-50)',
      40: 'var(--color-primitive-ui-success-40)',
      30: 'var(--color-primitive-ui-success-30)',
      20: 'var(--color-primitive-ui-success-20)',
      10: 'var(--color-primitive-ui-success-10)',
    },
    warning: {
      95: 'var(--color-primitive-ui-warning-95)',
      90: 'var(--color-primitive-ui-warning-90)',
      80: 'var(--color-primitive-ui-warning-80)',
      70: 'var(--color-primitive-ui-warning-70)',
      60: 'var(--color-primitive-ui-warning-60)',
      50: 'var(--color-primitive-ui-warning-50)',
      40: 'var(--color-primitive-ui-warning-40)',
      30: 'var(--color-primitive-ui-warning-30)',
      20: 'var(--color-primitive-ui-warning-20)',
      10: 'var(--color-primitive-ui-warning-10)',
    },
    error: {
      95: 'var(--color-primitive-ui-error-95)',
      90: 'var(--color-primitive-ui-error-90)',
      80: 'var(--color-primitive-ui-error-80)',
      70: 'var(--color-primitive-ui-error-70)',
      60: 'var(--color-primitive-ui-error-60)',
      50: 'var(--color-primitive-ui-error-50)',
      40: 'var(--color-primitive-ui-error-40)',
      30: 'var(--color-primitive-ui-error-30)',
      20: 'var(--color-primitive-ui-error-20)',
      10: 'var(--color-primitive-ui-error-10)',
    },
    info: {
      95: 'var(--color-primitive-ui-info-95)',
      90: 'var(--color-primitive-ui-info-90)',
      80: 'var(--color-primitive-ui-info-80)',
      70: 'var(--color-primitive-ui-info-70)',
      60: 'var(--color-primitive-ui-info-60)',
      50: 'var(--color-primitive-ui-info-50)',
      40: 'var(--color-primitive-ui-info-40)',
      30: 'var(--color-primitive-ui-info-30)',
      20: 'var(--color-primitive-ui-info-20)',
      10: 'var(--color-primitive-ui-info-10)',
    },
  },
} as const;

// Spacing Tokens - ALL spacing used in components
export const spacing = {
  // Original Figma spacing scale
  xxxxl: '0.125rem',    // 2px
  xxxl: '0.25rem',      // 4px
  xxl: '0.375rem',      // 6px
  xl: '0.5rem',         // 8px
  l: '0.75rem',         // 12px
  m: '1rem',            // 16px
  ml: '1.5rem',         // 24px
  s: '2rem',            // 32px
  xs: '3rem',           // 48px
  xxs: '4rem',          // 64px
  xxxs: '6rem',         // 96px
  xxxxs: '7.5rem',      // 120px
  xxxxxs: '15rem',      // 240px
  
  // Additional semantic spacing
  micro: {
    xs: '2px',
    sm: '4px',
    md: '8px',
    lg: '12px',
  },
  component: {
    xs: '16px',
    sm: '24px',
    md: '32px',
    lg: '48px',
    xl: '64px',
  },
  // Additional spacing for specific use cases
  button: {
    sm: '12px 16px',    // px-3 py-1.5
    md: '16px 8px',     // px-4 py-2
    lg: '24px 16px',    // px-6 py-4
  },
  layout: {
    xs: '8px',
    sm: '16px',
    md: '24px',
    lg: '32px',
    xl: '48px',
    '2xl': '64px',
  },
} as const;

// Typography Tokens - ALL typography used in components
export const typography = {
  fontFamily: {
    primary: "'Figtree', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
  },
  fontWeight: {
    regular: '400',
    medium: '500',
    semibold: '600',
    bold: '700',
  },
  // Complete Figma font size scale
  fontSize: {
    '5xs': '0.625rem',   // 10px
    '4xs': '0.688rem',   // 11px
    '3xs': '0.75rem',    // 12px
    '2xs': '0.875rem',   // 14px
    xs: '1rem',          // 16px
    s: '1.125rem',       // 18px
    m: '1.25rem',        // 20px
    l: '1.375rem',       // 22px
    xl: '1.5rem',        // 24px
    '2xl': '2.25rem',    // 36px
    '3xl': '3rem',       // 48px
    '4xl': '4rem',       // 64px
    '5xl': '6rem',       // 96px
  },
  lineHeight: {
    tight: '1.05',
    normal: '1.2',
    relaxed: '1.6',
  },
  letterSpacing: {
    tight: '-0.04em',
    normal: '-0.03em',
    small: '-0.02em',
    micro: '-0.01em',
    none: 'normal',
  },
  // Predefined type styles from Figma
  typeStyles: {
    display: {
      large: {
        fontSize: '6rem',
        fontWeight: '700',
        lineHeight: '1.05',
        letterSpacing: '-0.04em',
      },
      medium: {
        fontSize: '4rem',
        fontWeight: '700',
        lineHeight: '1.05',
        letterSpacing: '-0.04em',
      },
      small: {
        fontSize: '3rem',
        fontWeight: '700',
        lineHeight: '1.05',
        letterSpacing: '-0.04em',
      },
    },
    heading: {
      extraLarge: {
        fontSize: '2.25rem',
        fontWeight: '600',
        lineHeight: '1.2',
        letterSpacing: '-0.03em',
      },
      large: {
        fontSize: '1.5rem',
        fontWeight: '600',
        lineHeight: '1.2',
        letterSpacing: '-0.03em',
      },
      medium: {
        fontSize: '1.375rem',
        fontWeight: '600',
        lineHeight: '1.2',
        letterSpacing: '-0.03em',
      },
      small: {
        fontSize: '1.25rem',
        fontWeight: '600',
        lineHeight: '1.2',
        letterSpacing: '-0.03em',
      },
    },
    title: {
      extraLarge: {
        fontSize: '1.5rem',
        fontWeight: '600',
        lineHeight: '1.2',
        letterSpacing: '-0.02em',
      },
      large: {
        fontSize: '1.375rem',
        fontWeight: '600',
        lineHeight: '1.2',
        letterSpacing: '-0.02em',
      },
      medium: {
        fontSize: '1.25rem',
        fontWeight: '600',
        lineHeight: '1.2',
        letterSpacing: '-0.02em',
      },
      small: {
        fontSize: '1.125rem',
        fontWeight: '600',
        lineHeight: '1.2',
        letterSpacing: '-0.02em',
      },
      extraSmall: {
        fontSize: '1rem',
        fontWeight: '600',
        lineHeight: '1.2',
        letterSpacing: '-0.02em',
      },
    },
    body: {
      extraLarge: {
        fontSize: '1.375rem',
        fontWeight: '400',
        lineHeight: '1.6',
        letterSpacing: 'normal',
      },
      large: {
        fontSize: '1.25rem',
        fontWeight: '400',
        lineHeight: '1.6',
        letterSpacing: 'normal',
      },
      medium: {
        fontSize: '1.125rem',
        fontWeight: '400',
        lineHeight: '1.6',
        letterSpacing: 'normal',
      },
      small: {
        fontSize: '1rem',
        fontWeight: '400',
        lineHeight: '1.6',
        letterSpacing: 'normal',
      },
      extraSmall: {
        fontSize: '0.875rem',
        fontWeight: '400',
        lineHeight: '1.6',
        letterSpacing: 'normal',
      },
      extraExtraSmall: {
        fontSize: '0.75rem',
        fontWeight: '400',
        lineHeight: '1.6',
        letterSpacing: 'normal',
      },
    },
    label: {
      large: {
        fontSize: '1.25rem',
        fontWeight: '500',
        lineHeight: '1.6',
        letterSpacing: 'normal',
      },
      medium: {
        fontSize: '1.125rem',
        fontWeight: '500',
        lineHeight: '1.6',
        letterSpacing: 'normal',
      },
      small: {
        fontSize: '1rem',
        fontWeight: '500',
        lineHeight: '1.6',
        letterSpacing: 'normal',
      },
      extraSmall: {
        fontSize: '0.875rem',
        fontWeight: '500',
        lineHeight: '1.6',
        letterSpacing: 'normal',
      },
      extraExtraSmall: {
        fontSize: '0.75rem',
        fontWeight: '500',
        lineHeight: '1.6',
        letterSpacing: 'normal',
      },
      extraExtraExtraSmall: {
        fontSize: '0.688rem',
        fontWeight: '500',
        lineHeight: '1.6',
        letterSpacing: 'normal',
      },
      extraExtraExtraExtraSmall: {
        fontSize: '0.625rem',
        fontWeight: '500',
        lineHeight: '1.6',
        letterSpacing: 'normal',
      },
    },
  },
} as const;

// Border Radius Tokens - ALL border radius used in components
export const borderRadius = {
  xxs: '0.125rem',      // 2px
  xs: '0.5rem',         // 8px - matches --border-radius-xs
  s: '0.75rem',         // 12px - matches --border-radius-s
  m: '1.25rem',         // 20px - matches --border-radius-m
  l: '3rem',            // 48px - matches --border-radius-l
  none: '0',
  full: '9999px',
} as const;

// Border Width Tokens - ALL border widths used in components
export const borderWidth = {
  s: '0.062rem',        // 1px
  m: '0.125rem',        // 2px
  none: '0',
} as const;

// Shadow Tokens - ALL shadows used in components
export const shadows = {
  sm: '0 1px 2px 0 rgb(0 0 0 / 0.05)',
  base: '0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)',
  md: '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)',
  lg: '0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)',
  xl: '0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)',
} as const;

// Z-Index Tokens - ALL z-index values used in components
export const zIndex = {
  hide: -1,
  auto: 'auto',
  base: 0,
  docked: 10,
  dropdown: 1000,
  sticky: 1100,
  banner: 1200,
  overlay: 1300,
  modal: 1400,
  popover: 1500,
  skipLink: 1600,
  toast: 1700,
  tooltip: 1800,
} as const;

// Animation Tokens - ALL animations used in components
export const animation = {
  duration: {
    fast: '150ms',
    base: '200ms',    // Matches component transitions
    slow: '300ms',
    slower: '500ms',
  },
  easing: {
    linear: 'linear',
    in: 'cubic-bezier(0.4, 0, 1, 1)',
    out: 'cubic-bezier(0, 0, 0.2, 1)',
    inOut: 'cubic-bezier(0.4, 0, 0.2, 1)',
  },
} as const;

// Layout & Responsive Tokens - ALL layout values used in components
export const layout = {
  breakpoints: {
    maxWidth: '90rem',      // 1440px
    minWidth: '61.875rem',  // 990px
    mobile: '47.938rem',    // 767px
    tablet: '48rem',        // 768px
    desktop: '61.875rem',   // 990px
  },
  grid: {
    columns: '0.75rem',     // 12px
    gutter: '2rem',         // 32px
    margin: '2rem',         // 32px
  },
} as const;

// Component-specific tokens - ensuring no hardcoded values
export const components = {
  button: {
    height: {
      sm: '32px',     // min-h-8
      md: '40px',    // min-h-10
      lg: '48px',    // min-h-12
    },
    gap: '8px',      // gap-2
    iconSize: '20px', // Default icon size
  },
  avatar: {
    size: {
      xs: '24px',    // w-6 h-6
      sm: '32px',    // w-8 h-8
      md: '40px',    // w-10 h-10
      lg: '48px',    // w-12 h-12
      xl: '64px',    // w-16 h-16
    },
    iconSize: '12px', // Icon size for initials
  },
  checkbox: {
    size: '20px',    // w-5 h-5
    iconSize: '12px', // Check/indeterminate icon size
    borderWidth: '2px', // border-2
  },
} as const;

// Export all tokens as a single object
export const tokens = {
  colors,
  spacing,
  typography,
  borderRadius,
  borderWidth,
  shadows,
  zIndex,
  animation,
  layout,
  components,
} as const;

// Export default
export default tokens;

// Type exports for TypeScript usage
export type ColorTokens = typeof colors;
export type SpacingTokens = typeof spacing;
export type TypographyTokens = typeof typography;
export type BorderRadiusTokens = typeof borderRadius;
export type BorderWidthTokens = typeof borderWidth;
export type ShadowTokens = typeof shadows;
export type ZIndexTokens = typeof zIndex;
export type AnimationTokens = typeof animation;
export type LayoutTokens = typeof layout;
export type ComponentTokens = typeof components;
export type AllTokens = typeof tokens;

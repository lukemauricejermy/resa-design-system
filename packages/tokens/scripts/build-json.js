#!/usr/bin/env node

/**
 * JSON Build Script for Resa Design System Tokens
 */

const fs = require('fs');
const path = require('path');

const OUTPUT_DIR = path.join(__dirname, '../dist');
const OUTPUT_FILE = path.join(OUTPUT_DIR, 'tokens.json');

// Import tokens from the TypeScript source
// Note: This is a simplified version - in a real setup you might want to use ts-node or similar
const TOKENS = {
  colors: {
    primitives: {
      white: '#FFFFFF',
      black: '#000000',
      grey: {
        10: '#F9FAFB',
        20: '#F3F4F6',
        30: '#E5E7EB',
        40: '#D1D5DB',
        50: '#9CA3AF',
        60: '#6B7280',
        70: '#4B5563',
        80: '#374151',
        90: '#1F2937',
        95: '#111827',
      },
    },
    brand: {
      sand: {
        10: '#f7f3ee',
        20: '#efe8dd',
        30: '#e7ddcc',
        40: '#7a6752',
        50: '#6b5a47',
        60: '#5c4d3c',
        70: '#4d4031',
        80: '#3e3326',
        90: '#2f261b',
        95: '#1f1a10',
      },
    },
    semantic: {
      content: {
        primary: '#1F2937',
        secondary: '#6B7280',
        tertiary: '#9CA3AF',
      },
      background: {
        primary: '#FFFFFF',
        secondary: '#F9FAFB',
        tertiary: '#F3F4F6',
      },
    },
  },
  spacing: {
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
  },
  typography: {
    fontFamily: {
      primary: "'Figtree', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
    },
    fontWeight: {
      regular: '400',
      medium: '500',
      semibold: '600',
      bold: '700',
    },
    fontSize: {
      xs: '0.75rem',
      sm: '0.875rem',
      base: '1rem',
      lg: '1.125rem',
      xl: '1.25rem',
      '2xl': '1.5rem',
      '3xl': '1.875rem',
      '4xl': '2.25rem',
    },
    lineHeight: {
      tight: '1.25',
      snug: '1.375',
      normal: '1.5',
      relaxed: '1.625',
      loose: '2',
    },
  },
  borderRadius: {
    none: '0',
    sm: '0.125rem',
    base: '0.25rem',
    md: '0.375rem',
    lg: '0.5rem',
    xl: '0.75rem',
    '2xl': '1rem',
    '3xl': '1.5rem',
    full: '9999px',
  },
  shadows: {
    sm: '0 1px 2px 0 rgb(0 0 0 / 0.05)',
    base: '0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)',
    md: '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)',
    lg: '0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)',
    xl: '0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)',
  },
  zIndex: {
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
  },
  animation: {
    duration: {
      fast: '150ms',
      base: '300ms',
      slow: '500ms',
      slower: '700ms',
    },
    easing: {
      linear: 'linear',
      in: 'cubic-bezier(0.4, 0, 1, 1)',
      out: 'cubic-bezier(0, 0, 0.2, 1)',
      inOut: 'cubic-bezier(0.4, 0, 0.2, 1)',
    },
  },
};

function ensureDirectoryExists(dir) {
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
}

function writeJSONFile(tokens) {
  ensureDirectoryExists(OUTPUT_DIR);
  const jsonContent = JSON.stringify(tokens, null, 2);
  fs.writeFileSync(OUTPUT_FILE, jsonContent, 'utf8');
  console.log(`✅ JSON tokens generated: ${OUTPUT_FILE}`);
}

function main() {
  try {
    console.log('🎨 Generating JSON tokens for Resa Design System...');
    writeJSONFile(TOKENS);
    console.log('✨ JSON generation complete!');
  } catch (error) {
    console.error('❌ Error generating JSON:', error);
    process.exit(1);
  }
}

if (require.main === module) {
  main();
}

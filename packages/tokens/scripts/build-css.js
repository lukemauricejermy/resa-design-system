#!/usr/bin/env node

/**
 * CSS Build Script for Resa Design System Tokens
 */

const fs = require('fs');
const path = require('path');

const OUTPUT_DIR = path.join(__dirname, '../dist');
const OUTPUT_FILE = path.join(OUTPUT_DIR, 'tokens.css');

// Simple token definitions for now
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
    micro: { xs: '2px', sm: '4px', md: '8px', lg: '12px' },
    component: { xs: '16px', sm: '24px', md: '32px', lg: '48px', xl: '64px' },
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
  },
};

function generateCSS() {
  let css = `/**
 * Resa Design System - Design Tokens
 * Generated: ${new Date().toISOString()}
 */

:root {
  /* Colors */
`;

  // Generate color CSS
  Object.entries(TOKENS.colors.primitives).forEach(([category, values]) => {
    if (typeof values === 'string') {
      css += `  --color-primitives-${category}: ${values};\n`;
    } else {
      Object.entries(values).forEach(([shade, value]) => {
        css += `  --color-primitives-${category}-${shade}: ${value};\n`;
      });
    }
  });

  Object.entries(TOKENS.colors.semantic).forEach(([category, values]) => {
    Object.entries(values).forEach(([variant, value]) => {
      css += `  --color-${category}-${variant}: ${value};\n`;
    });
  });

  // Generate spacing CSS
  css += '\n  /* Spacing */\n';
  Object.entries(TOKENS.spacing).forEach(([category, values]) => {
    Object.entries(values).forEach(([size, value]) => {
      css += `  --spacing-${category}-${size}: ${value};\n`;
    });
  });

  // Generate typography CSS
  css += '\n  /* Typography */\n';
  Object.entries(TOKENS.typography.fontFamily).forEach(([variant, value]) => {
    css += `  --font-family-${variant}: ${value};\n`;
  });
  Object.entries(TOKENS.typography.fontWeight).forEach(([weight, value]) => {
    css += `  --font-weight-${weight}: ${value};\n`;
  });

  css += '}\n';
  return css;
}

function ensureDirectoryExists(dir) {
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
}

function writeCSSFile(css) {
  ensureDirectoryExists(OUTPUT_DIR);
  fs.writeFileSync(OUTPUT_FILE, css, 'utf8');
  console.log(`✅ CSS tokens generated: ${OUTPUT_FILE}`);
}

function main() {
  try {
    console.log('🎨 Generating CSS tokens for Resa Design System...');
    const css = generateCSS();
    writeCSSFile(css);
    console.log('✨ CSS generation complete!');
  } catch (error) {
    console.error('❌ Error generating CSS:', error);
    process.exit(1);
  }
}

if (require.main === module) {
  main();
}

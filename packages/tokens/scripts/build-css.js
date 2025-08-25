#!/usr/bin/env node

/**
 * CSS Build Script for Resa Design System Tokens
 * Generates CSS custom properties from the clean token architecture
 */

const fs = require('fs');
const path = require('path');

const OUTPUT_DIR = path.join(__dirname, '../dist');
const OUTPUT_FILE = path.join(OUTPUT_DIR, 'tokens.css');

// Import tokens from the compiled JavaScript file
const { colors, spacing, typography, layout, effects, borderRadius, borderWidth } = require('../dist/index.js');

/**
 * Resolves a semantic token reference to its primitive value
 * @param {string} reference - e.g., 'grey.10', 'success.80'
 * @param {object} primitives - The primitives object
 * @returns {string} - The resolved hex value
 */
function resolvePrimitiveReference(reference, primitives) {
  const [category, shade] = reference.split('.');
  
  if (!primitives[category]) {
    throw new Error(`Primitive category '${category}' not found`);
  }
  
  if (!primitives[category][shade]) {
    throw new Error(`Primitive shade '${shade}' not found in category '${category}'`);
  }
  
  return primitives[category][shade];
}

/**
 * Generates CSS custom properties from the token structure
 */
function generateCSS() {
  console.log('🎨 Generating CSS tokens for Resa Design System...');
  
  let css = `/**\n * Resa Design System - CSS Custom Properties\n * Generated from design tokens\n */\n\n:root {\n`;
  
  // Generate primitive color variables
  Object.entries(colors.primitives).forEach(([category, categoryColors]) => {
    Object.entries(categoryColors).forEach(([shade, value]) => {
      css += `  --color-primitive-${category}-${shade}: ${value};\n`;
    });
  });
  
  // Generate semantic color variables by resolving references
  Object.entries(colors.semantic).forEach(([theme, themeColors]) => {
    Object.entries(themeColors).forEach(([category, categoryColors]) => {
      Object.entries(categoryColors).forEach(([name, reference]) => {
        try {
          const resolvedValue = resolvePrimitiveReference(reference, colors.primitives);
          const cssVar = `--color-semantic-${theme}-${category}-${name}`;
          css += `  ${cssVar}: ${resolvedValue};\n`;
        } catch (error) {
          console.warn(`⚠️  Warning: Could not resolve reference '${reference}' for ${theme}.${category}.${name}: ${error.message}`);
        }
      });
    });
  });
  
  // Generate spacing variables
  if (spacing) {
    Object.entries(spacing).forEach(([name, value]) => {
      if (typeof value === 'string') {
        css += `  --spacing-${name}: ${value};\n`;
      } else if (typeof value === 'object') {
        Object.entries(value).forEach(([subName, subValue]) => {
          css += `  --spacing-${name}-${subName}: ${subValue};\n`;
        });
      }
    });
  }
  
  // Generate typography variables
  if (typography) {
    Object.entries(typography).forEach(([category, categoryValues]) => {
      if (typeof categoryValues === 'string') {
        css += `  --typography-${category}: ${categoryValues};\n`;
      } else if (category === 'typeStyles') {
        // Handle nested type styles (display, heading, title, body, label)
        Object.entries(categoryValues).forEach(([styleType, styleValues]) => {
          Object.entries(styleValues).forEach(([styleName, styleProps]) => {
            Object.entries(styleProps).forEach(([prop, value]) => {
              css += `  --typography-${category}-${styleType}-${styleName}-${prop}: ${value};\n`;
            });
          });
        });
      } else {
        Object.entries(categoryValues).forEach(([name, value]) => {
          css += `  --typography-${category}-${name}: ${value};\n`;
        });
      }
    });
  }
  
  // Generate layout variables
  if (layout) {
    Object.entries(layout).forEach(([name, value]) => {
      if (typeof value === 'string') {
        css += `  --layout-${name}: ${value};\n`;
      } else if (typeof value === 'object') {
        Object.entries(value).forEach(([subName, subValue]) => {
          css += `  --layout-${name}-${subName}: ${subValue};\n`;
        });
      }
    });
  }
  
  // Generate effects variables (only if effects exists)
  if (effects) {
    Object.entries(effects).forEach(([category, categoryValues]) => {
      if (typeof categoryValues === 'string') {
        css += `  --effects-${category}: ${categoryValues};\n`;
      } else {
        Object.entries(categoryValues).forEach(([name, value]) => {
          css += `  --effects-${category}-${name}: ${value};\n`;
        });
      }
    });
  }
  
  // Generate border radius variables
  if (borderRadius) {
    Object.entries(borderRadius).forEach(([name, value]) => {
      css += `  --border-radius-${name}: ${value};\n`;
    });
  }
  
  // Generate border width variables
  if (borderWidth) {
    Object.entries(borderWidth).forEach(([name, value]) => {
      css += `  --border-width-${name}: ${value};\n`;
    });
  }
  
  css += `}\n`;
  
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


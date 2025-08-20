const fs = require('fs');
const path = require('path');

class FigmaTokenParser {
  constructor() {
    this.tokens = {
      colors: {
        primitives: {
          base: {},
          brand: {},
          ui: {}
        },
        semantic: {
          light: {},
          dark: {}
        }
      },
      typography: {
        fontFamily: {},
        fontWeight: {},
        fontSize: {
          desktop: {},
          tablet: {},
          mobile: {}
        },
        lineHeight: {},
        letterSpacing: {},
        typeStyles: {
          display: {},
          heading: {},
          title: {},
          body: {},
          label: {}
        }
      },
      spacing: {
        desktop: {},
        tablet: {},
        mobile: {}
      },
      layout: {
        breakpoints: {},
        grid: {
          desktop: {},
          tablet: {},
          mobile: {}
        }
      },
      borders: {
        radius: {
          desktop: {},
          tablet: {},
          mobile: {}
        },
        width: {
          desktop: {},
          tablet: {},
          mobile: {}
        }
      }
    };
  }

  parseTokens(figmaData) {
    console.log('Parsing Figma tokens...');
    
    // Parse colors
    this.parseColors(figmaData);
    
    // Parse typography
    this.parseTypography(figmaData);
    
    // Parse spacing
    this.parseSpacing(figmaData);
    
    // Parse layout and responsive
    this.parseLayout(figmaData);
    
    // Parse borders
    this.parseBorders(figmaData);
    
    console.log('Parsing complete!');
    return this.tokens;
  }

  parseColors(figmaData) {
    console.log('Parsing colors...');
    
    // Parse primitive colors
    if (figmaData['Primitive colour/Mode 1']) {
      const primitiveColors = figmaData['Primitive colour/Mode 1'];
      
      // Base primitives
      if (primitiveColors['base primitives']) {
        Object.keys(primitiveColors['base primitives']).forEach(key => {
          const color = primitiveColors['base primitives'][key];
          // Keep the full key name including 'base-' prefix for reference resolution
          this.tokens.colors.primitives.base[key] = color.$value;
        });
      }
      
      // Brand primitives
      if (primitiveColors['brand primitives']) {
        Object.keys(primitiveColors['brand primitives']).forEach(category => {
          this.tokens.colors.primitives.brand[category] = {};
          Object.keys(primitiveColors['brand primitives'][category]).forEach(key => {
            const color = primitiveColors['brand primitives'][category][key];
            const cleanKey = key.replace(`${category}-`, '').replace(' (brand)', '');
            this.tokens.colors.primitives.brand[category][cleanKey] = color.$value;
          });
        });
      }
      
      // UI primitives
      if (primitiveColors['UI primitives']) {
        Object.keys(primitiveColors['UI primitives']).forEach(category => {
          this.tokens.colors.primitives.ui[category] = {};
          Object.keys(primitiveColors['UI primitives'][category]).forEach(key => {
            const color = primitiveColors['UI primitives'][category][key];
            // Store the full key name (e.g., "success-20") instead of stripping it
            this.tokens.colors.primitives.ui[category][key] = color.$value;
          });
        });
      }
    }
    
    // Parse semantic colors
    if (figmaData['Semantic colour/Light mode']) {
      this.tokens.colors.semantic.light = this.parseSemanticColors(figmaData['Semantic colour/Light mode']);
    }
    
    if (figmaData['Semantic colour/Dark mode']) {
      this.tokens.colors.semantic.dark = this.parseSemanticColors(figmaData['Semantic colour/Dark mode']);
    }
  }

  parseSemanticColors(semanticData) {
    const semantic = {};
    
    Object.keys(semanticData).forEach(category => {
      semantic[category] = {};
      Object.keys(semanticData[category]).forEach(key => {
        const color = semanticData[category][key];
        // Handle semantic color references by resolving them to actual values
        if (typeof color.$value === 'string' && color.$value.startsWith('{')) {
          // Resolve Figma references to actual color values
          const resolvedColor = this.resolveColorReference(color.$value);
          semantic[category][key] = resolvedColor;
        } else {
          semantic[category][key] = color.$value;
        }
      });
    });
    
    return semantic;
  }

  resolveColorReference(reference) {
    // Remove the curly braces
    const cleanRef = reference.replace(/[{}]/g, '');
    const parts = cleanRef.split('.');
    
    // Handle base primitives (2 parts: base primitives.base-white)
    if (parts.length === 2 && parts[0] === 'base primitives') {
      const key = parts[1];
      const result = this.tokens.colors.primitives.base[key] || '#000000';
      return result;
    }
    
    // Handle other primitives (3 parts: brand primitives.grey.grey-10)
    if (parts.length >= 3) {
      const category = parts[0];
      const subcategory = parts[1];
      const variant = parts[2];
      
      // Handle the specific reference format from your Figma export
      if (category === 'brand primitives' && this.tokens.colors.primitives.brand[subcategory]) {
        // Handle special cases like "sand-95 (brand)" -> "sand-95"
        // Also handle "grey-10" -> "10" by stripping the subcategory prefix
        let cleanVariant = variant.replace(' (brand)', '');
        if (cleanVariant.startsWith(`${subcategory}-`)) {
          cleanVariant = cleanVariant.replace(`${subcategory}-`, '');
        }
        
        const result = this.tokens.colors.primitives.brand[subcategory][cleanVariant] || '#000000';
        return result;
      } else if (category === 'UI primitives' && this.tokens.colors.primitives.ui[subcategory]) {
        const result = this.tokens.colors.primitives.ui[subcategory][variant] || '#000000';
        return result;
      } else if (category === 'UI primitives' && subcategory === 'grey') {
        // Handle UI primitives.grey references by mapping to brand primitives.grey
        const result = this.tokens.colors.primitives.brand.grey[variant] || '#000000';
        return result;
      }
    }
    
    return '#000000'; // Fallback
  }

  parseTypography(figmaData) {
    console.log('Parsing typography...');
    
    // Parse font family
    if (figmaData['Typography/Desktop']?.['font']?.['family']?.['visit-sans']) {
      this.tokens.typography.fontFamily.primary = figmaData['Typography/Desktop']['font']['family']['visit-sans'].$value;
    }
    
    // Parse font weights
    if (figmaData['Typography/Desktop']?.['font']?.['weight']) {
      Object.keys(figmaData['Typography/Desktop']['font']['weight']).forEach(key => {
        const weight = figmaData['Typography/Desktop']['font']['weight'][key];
        const cleanKey = key.toLowerCase();
        this.tokens.typography.fontWeight[cleanKey] = weight.$value;
      });
    }
    
    // Parse font sizes for all breakpoints
    ['Desktop', 'Tablet', 'Mobile'].forEach(breakpoint => {
      const breakpointKey = breakpoint.toLowerCase();
      if (figmaData[`Typography/${breakpoint}`]?.['font']?.['size']) {
        this.tokens.typography.fontSize[breakpointKey] = {};
        Object.keys(figmaData[`Typography/${breakpoint}`]['font']['size']).forEach(key => {
          const size = figmaData[`Typography/${breakpoint}`]['font']['size'][key];
          this.tokens.typography.fontSize[breakpointKey][key] = size.$value;
        });
      }
    });

    // Parse type styles from Zeplin export
    this.parseTypeStyles();
  }

  parseTypeStyles() {
    console.log('Parsing type styles...');
    
    // Define line height tokens based on the Zeplin export
    this.tokens.typography.lineHeight = {
      tight: '1.05',
      normal: '1.2',
      relaxed: '1.6'
    };

    // Define letter spacing tokens (converting px to em)
    this.tokens.typography.letterSpacing = {
      tight: '-0.04em',    // -3.84px for 96px font
      normal: '-0.03em',   // -2.56px for 64px font
      small: '-0.02em',    // -1.92px for 48px font
      micro: '-0.01em',    // -0.72px for 36px font
      none: 'normal'
    };

    // Override font weights with correct numeric values from Zeplin export
    this.tokens.typography.fontWeight = {
      regular: '400',
      medium: '500',
      semibold: '600',
      bold: '700'
    };

    // Parse type styles from Zeplin export
    const typeStylesData = this.getTypeStylesFromZeplin();
    
    Object.keys(typeStylesData).forEach(category => {
      this.tokens.typography.typeStyles[category] = {};
      Object.keys(typeStylesData[category]).forEach(styleName => {
        const style = typeStylesData[category][styleName];
        this.tokens.typography.typeStyles[category][styleName] = {
          fontFamily: style.fontFamily,
          fontSize: this.mapFontSizeToToken(style.fontSize),
          fontWeight: this.mapFontWeightToToken(style.fontWeight),
          lineHeight: this.mapLineHeightToToken(style.lineHeight),
          letterSpacing: this.mapLetterSpacingToToken(style.letterSpacing, style.fontSize)
        };
      });
    });
  }

  getTypeStylesFromZeplin() {
    // This data comes from the Zeplin export you provided
    return {
      display: {
        large: { fontSize: 96, fontWeight: 700, lineHeight: 1.05, letterSpacing: -3.84, fontFamily: 'Figtree' },
        medium: { fontSize: 64, fontWeight: 700, lineHeight: 1.05, letterSpacing: -2.56, fontFamily: 'Figtree' },
        small: { fontSize: 48, fontWeight: 700, lineHeight: 1.05, letterSpacing: -1.92, fontFamily: 'Figtree' }
      },
      heading: {
        extraLarge: { fontSize: 48, fontWeight: 600, lineHeight: 1.2, letterSpacing: -1.44, fontFamily: 'Figtree' },
        large: { fontSize: 36, fontWeight: 600, lineHeight: 1.2, letterSpacing: -1.08, fontFamily: 'Figtree' },
        medium: { fontSize: 24, fontWeight: 600, lineHeight: 1.2, letterSpacing: -0.72, fontFamily: 'Figtree' },
        small: { fontSize: 22, fontWeight: 600, lineHeight: 1.2, letterSpacing: -0.66, fontFamily: 'Figtree' }
      },
      title: {
        extraLarge: { fontSize: 36, fontWeight: 600, lineHeight: 1.2, letterSpacing: -0.72, fontFamily: 'Figtree' },
        large: { fontSize: 24, fontWeight: 600, lineHeight: 1.2, letterSpacing: -0.48, fontFamily: 'Figtree' },
        medium: { fontSize: 22, fontWeight: 600, lineHeight: 1.2, letterSpacing: -0.44, fontFamily: 'Figtree' },
        small: { fontSize: 20, fontWeight: 600, lineHeight: 1.2, letterSpacing: -0.4, fontFamily: 'Figtree' },
        extraSmall: { fontSize: 16, fontWeight: 600, lineHeight: 1.2, letterSpacing: -0.32, fontFamily: 'Figtree' }
      },
      body: {
        extraLarge: { fontSize: 24, fontWeight: 400, lineHeight: 1.6, letterSpacing: 0, fontFamily: 'Figtree' },
        large: { fontSize: 22, fontWeight: 400, lineHeight: 1.6, letterSpacing: 0, fontFamily: 'Figtree' },
        medium: { fontSize: 20, fontWeight: 400, lineHeight: 1.6, letterSpacing: 0, fontFamily: 'Figtree' },
        small: { fontSize: 18, fontWeight: 400, lineHeight: 1.6, letterSpacing: 0, fontFamily: 'Figtree' },
        extraSmall: { fontSize: 16, fontWeight: 400, lineHeight: 1.6, letterSpacing: 0, fontFamily: 'Figtree' },
        extraExtraSmall: { fontSize: 14, fontWeight: 400, lineHeight: 1.6, letterSpacing: 0, fontFamily: 'Figtree' }
      },
      label: {
        large: { fontSize: 22, fontWeight: 500, lineHeight: 1.6, letterSpacing: 0, fontFamily: 'Figtree' },
        medium: { fontSize: 20, fontWeight: 500, lineHeight: 1.6, letterSpacing: 0, fontFamily: 'Figtree' },
        small: { fontSize: 18, fontWeight: 500, lineHeight: 1.6, letterSpacing: 0, fontFamily: 'Figtree' },
        extraSmall: { fontSize: 16, fontWeight: 500, lineHeight: 1.6, letterSpacing: 0, fontFamily: 'Figtree' },
        extraExtraSmall: { fontSize: 14, fontWeight: 500, lineHeight: 1.6, letterSpacing: 0, fontFamily: 'Figtree' },
        extraExtraExtraSmall: { fontSize: 12, fontWeight: 500, lineHeight: 1.6, letterSpacing: 0, fontFamily: 'Figtree' },
        extraExtraExtraExtraSmall: { fontSize: 10, fontWeight: 500, lineHeight: 1.6, letterSpacing: 0, fontFamily: 'Figtree' }
      }
    };
  }

  mapFontSizeToToken(fontSize) {
    // Map pixel values to your existing font size tokens
    // This ensures type styles reference your design system variables
    const sizeMap = {
      96: '4xl',    // 6rem
      64: '3xl',    // 4rem
      48: '2xl',    // 3rem
      36: 'xl',     // 2.25rem
      24: 'l',      // 1.5rem
      22: 'm',      // 1.375rem
      20: 's',      // 1.25rem
      18: 'xs',     // 1.125rem
      16: '2xs',    // 1rem
      14: '3xs',    // 0.875rem
      12: '4xs',    // 0.75rem
      10: '5xs'     // 0.625rem
    };
    return sizeMap[fontSize] || fontSize.toString();
  }

  mapFontWeightToToken(fontWeight) {
    // Map numeric weights to your existing weight tokens
    const weightMap = {
      400: 'regular',
      500: 'medium',
      600: 'semibold',
      700: 'bold'
    };
    return weightMap[fontWeight] || fontWeight.toString();
  }

  mapLineHeightToToken(lineHeight) {
    // Map line height values to tokens
    const lineHeightMap = {
      1.05: 'tight',
      1.2: 'normal',
      1.6: 'relaxed'
    };
    return lineHeightMap[lineHeight] || lineHeight.toString();
  }

  mapLetterSpacingToToken(letterSpacing, fontSize) {
    // Convert px to em and map to tokens
    if (letterSpacing === 0) return 'none';
    
    const emValue = (letterSpacing / fontSize).toFixed(3);
    const emMap = {
      '-0.040': 'tight',
      '-0.030': 'normal',
      '-0.020': 'small',
      '-0.010': 'micro'
    };
    return emMap[emValue] || `${emValue}em`;
  }

  parseSpacing(figmaData) {
    console.log('Parsing spacing...');
    
    // Parse spacing for all breakpoints
    ['Desktop', 'Tablet', 'Mobile'].forEach(breakpoint => {
      const breakpointKey = breakpoint.toLowerCase();
      if (figmaData[`Spacing/${breakpoint}`]) {
        this.tokens.spacing[breakpointKey] = {};
        Object.keys(figmaData[`Spacing/${breakpoint}`]).forEach(key => {
          const spacing = figmaData[`Spacing/${breakpoint}`][key];
          this.tokens.spacing[breakpointKey][key] = spacing.$value;
        });
      }
    });
  }

  parseLayout(figmaData) {
    console.log('Parsing layout and responsive...');
    
    // Parse breakpoints
    ['Desktop', 'Tablet', 'Mobile'].forEach(breakpoint => {
      const breakpointKey = breakpoint.toLowerCase();
      if (figmaData[`Responsive/${breakpoint}`]?.['breakpoint']) {
        this.tokens.layout.breakpoints[breakpointKey] = {};
        Object.keys(figmaData[`Responsive/${breakpoint}`]['breakpoint']).forEach(key => {
          const breakpointData = figmaData[`Responsive/${breakpoint}`]['breakpoint'][key];
          this.tokens.layout.breakpoints[breakpointKey][key] = breakpointData.$value;
        });
      }
      
      // Parse layout grid
      if (figmaData[`Responsive/${breakpoint}`]?.['layout-grid']) {
        this.tokens.layout.grid[breakpointKey] = {};
        Object.keys(figmaData[`Responsive/${breakpoint}`]['layout-grid']).forEach(key => {
          const gridValue = figmaData[`Responsive/${breakpoint}`]['layout-grid'][key];
          if (gridValue && typeof gridValue === 'object' && gridValue.$value) {
            this.tokens.layout.grid[breakpointKey][key] = gridValue.$value;
          }
        });
      }
    });
  }

  parseBorders(figmaData) {
    console.log('Parsing borders...');
    
    // Parse border radius and width for all breakpoints
    ['Desktop', 'Tablet', 'Mobile'].forEach(breakpoint => {
      const breakpointKey = breakpoint.toLowerCase();
      if (figmaData[`Border/${breakpoint}`]) {
        // Parse radius
        if (figmaData[`Border/${breakpoint}`]['radius']) {
          this.tokens.borders.radius[breakpointKey] = {};
          Object.keys(figmaData[`Border/${breakpoint}`]['radius']).forEach(key => {
            const radius = figmaData[`Border/${breakpoint}`]['radius'][key];
            this.tokens.borders.radius[breakpointKey][key] = radius.$value;
          });
        }
        
        // Parse width
        if (figmaData[`Border/${breakpoint}`]['width']) {
          this.tokens.borders.width[breakpointKey] = {};
          Object.keys(figmaData[`Border/${breakpoint}`]['width']).forEach(key => {
            const width = figmaData[`Border/${breakpoint}`]['width'][key];
            this.tokens.borders.width[breakpointKey][key] = width.$value;
          });
        }
      }
    });
  }

  generateCSSVariables() {
    console.log('Generating CSS variables...');
    
    let css = `/**
 * Resa Design System - Generated from Figma
 * Generated: ${new Date().toISOString()}
 * Source: Figma Design Tokens
 */

:root {\n`;
    
    // Generate primitive colors CSS
    css += this.generatePrimitiveColorsCSS();
    
    // Generate semantic colors CSS (using references to primitives)
    css += this.generateSemanticColorsCSS();
    
    // Generate typography CSS
    css += this.generateTypographyCSS();
    
    // Generate spacing CSS
    css += this.generateSpacingCSS();
    
    // Generate layout CSS
    css += this.generateLayoutCSS();
    
    // Generate border CSS
    css += this.generateBorderCSS();
    
    css += '}\n';
    
    // Generate responsive CSS
    css += this.generateResponsiveCSS();
    
    // Generate type style classes
    css += this.generateTypeStyleClasses();
    
    return css;
  }

  generatePrimitiveColorsCSS() {
    let css = '\n  /* Primitive Colors */\n';
    
    // Base colors
    Object.keys(this.tokens.colors.primitives.base).forEach(key => {
      css += `  --color-base-${key}: ${this.tokens.colors.primitives.base[key]};\n`;
    });
    
    // Brand colors
    Object.keys(this.tokens.colors.primitives.brand).forEach(category => {
      Object.keys(this.tokens.colors.primitives.brand[category]).forEach(key => {
        css += `  --color-brand-${category}-${key}: ${this.tokens.colors.primitives.brand[category][key]};\n`;
      });
    });
    
    // UI colors
    Object.keys(this.tokens.colors.primitives.ui).forEach(category => {
      Object.keys(this.tokens.colors.primitives.ui[category]).forEach(key => {
        css += `  --color-ui-${category}-${key}: ${this.tokens.colors.primitives.ui[category][key]};\n`;
      });
    });
    
    return css;
  }

  generateSemanticColorsCSS() {
    // Don't generate semantic colors in figma-tokens.css
    // They are handled by storybook.css with proper token references
    return '';
  }

  convertHexToCSSReference(hexValue, category, key) {
    // Use the actual semantic color values from the JSON file
    // This allows both light and dark mode to have their own values
    return hexValue;
  }

  generateTypographyCSS() {
    let css = '\n  /* Typography */\n';
    
    // Font family
    if (this.tokens.typography.fontFamily.primary) {
      css += `  --font-family-primary: ${this.tokens.typography.fontFamily.primary};\n`;
    }
    
    // Font weights
    Object.keys(this.tokens.typography.fontWeight).forEach(key => {
      css += `  --font-weight-${key}: ${this.tokens.typography.fontWeight[key]};\n`;
    });
    
    // Font sizes (desktop as default)
    if (this.tokens.typography.fontSize.desktop) {
      Object.keys(this.tokens.typography.fontSize.desktop).forEach(key => {
        css += `  --font-size-${key}: ${this.tokens.typography.fontSize.desktop[key]};\n`;
      });
    }

    // Line heights
    Object.keys(this.tokens.typography.lineHeight).forEach(key => {
      css += `  --line-height-${key}: ${this.tokens.typography.lineHeight[key]};\n`;
    });

    // Letter spacing
    Object.keys(this.tokens.typography.letterSpacing).forEach(key => {
      css += `  --letter-spacing-${key}: ${this.tokens.typography.letterSpacing[key]};\n`;
    });
    
    return css;
  }

  generateSpacingCSS() {
    let css = '\n  /* Spacing */\n';
    
    // Desktop spacing as default
    if (this.tokens.spacing.desktop) {
      Object.keys(this.tokens.spacing.desktop).forEach(key => {
        css += `  --spacing-${key}: ${this.tokens.spacing.desktop[key]};\n`;
      });
    }
    
    return css;
  }

  generateLayoutCSS() {
    let css = '\n  /* Layout & Responsive */\n';
    
    // Breakpoints
    if (this.tokens.layout.breakpoints.desktop) {
      Object.keys(this.tokens.layout.breakpoints.desktop).forEach(key => {
        css += `  --breakpoint-${key}: ${this.tokens.layout.breakpoints.desktop[key]};\n`;
      });
    }
    
    // Grid system
    if (this.tokens.layout.grid.desktop) {
      Object.keys(this.tokens.layout.grid.desktop).forEach(key => {
        const value = this.tokens.layout.grid.desktop[key];
        if (value && value !== 'undefined') {
          css += `  --grid-${key}: ${value};\n`;
        }
      });
    }
    
    return css;
  }

  generateBorderCSS() {
    let css = '\n  /* Borders */\n';
    
    // Desktop border values as default
    if (this.tokens.borders.radius.desktop) {
      Object.keys(this.tokens.borders.radius.desktop).forEach(key => {
        css += `  --border-radius-${key}: ${this.tokens.borders.radius.desktop[key]};\n`;
      });
    }
    
    if (this.tokens.borders.width.desktop) {
      Object.keys(this.tokens.borders.width.desktop).forEach(key => {
        css += `  --border-width-${key}: ${this.tokens.borders.width.desktop[key]};\n`;
      });
    }
    
    return css;
  }

  generateResponsiveCSS() {
    let css = '';
    
    // Tablet breakpoint
    if (this.tokens.layout.breakpoints.tablet) {
      const tabletMin = this.tokens.layout.breakpoints.tablet['min-width'];
      const desktopMin = this.tokens.layout.breakpoints.desktop?.['min-width'];
      const tabletRange = desktopMin
        ? `@media (min-width: ${tabletMin}) and (max-width: ${this.decrementRem(desktopMin)}) {\n`
        : `@media (min-width: ${tabletMin}) {\n`;

      css += `/* Tablet (${tabletMin}${desktopMin ? ` to ${this.decrementRem(desktopMin)}` : ' and up'}) */\n`;
      css += tabletRange;
      css += '  :root {\n';
      
      // Tablet typography
      if (this.tokens.typography.fontSize.tablet) {
        Object.keys(this.tokens.typography.fontSize.tablet).forEach(key => {
          css += `    --font-size-${key}: ${this.tokens.typography.fontSize.tablet[key]};\n`;
        });
      }
      
      // Tablet spacing
      if (this.tokens.spacing.tablet) {
        Object.keys(this.tokens.spacing.tablet).forEach(key => {
          css += `    --spacing-${key}: ${this.tokens.spacing.tablet[key]};\n`;
        });
      }
      
      // Tablet borders
      if (this.tokens.borders.radius.tablet) {
        Object.keys(this.tokens.borders.radius.tablet).forEach(key => {
          css += `    --border-radius-${key}: ${this.tokens.borders.radius.tablet[key]};\n`;
        });
      }
      
      if (this.tokens.borders.width.tablet) {
        Object.keys(this.tokens.borders.width.tablet).forEach(key => {
          css += `    --border-width-${key}: ${this.tokens.borders.width.tablet[key]};\n`;
        });
      }
      
      css += '  }\n}\n\n';
    }
    
    // Mobile breakpoint
    if (this.tokens.layout.breakpoints.mobile) {
      css += `/* Mobile (up to ${this.tokens.layout.breakpoints.mobile['max-width']}) */\n`;
      css += `@media (max-width: ${this.tokens.layout.breakpoints.mobile['max-width']}) {\n`;
      css += '  :root {\n';
      
      // Mobile typography
      if (this.tokens.typography.fontSize.mobile) {
        Object.keys(this.tokens.typography.fontSize.mobile).forEach(key => {
          css += `    --font-size-${key}: ${this.tokens.typography.fontSize.mobile[key]};\n`;
        });
      }
      
      // Mobile spacing
      if (this.tokens.spacing.mobile) {
        Object.keys(this.tokens.spacing.mobile).forEach(key => {
          css += `    --spacing-${key}: ${this.tokens.spacing.mobile[key]};\n`;
        });
      }
      
      // Mobile borders
      if (this.tokens.borders.radius.mobile) {
        Object.keys(this.tokens.borders.radius.mobile).forEach(key => {
          css += `    --border-radius-${key}: ${this.tokens.borders.radius.mobile[key]};\n`;
        });
      }
      
      if (this.tokens.borders.width.mobile) {
        Object.keys(this.tokens.borders.width.mobile).forEach(key => {
          css += `    --border-width-${key}: ${this.tokens.borders.width.mobile[key]};\n`;
        });
      }
      
      css += '  }\n}\n\n';
    }
    
    return css;
  }

  // Decrement a rem string value by a small delta to create a safe max-width
  decrementRem(remString, delta = 0.063) {
    if (typeof remString !== 'string' || !remString.endsWith('rem')) return remString;
    const n = parseFloat(remString.replace('rem', ''));
    const v = Math.max(n - delta, 0);
    return `${v.toFixed(3)}rem`;
  }

  generateTypeStyleClasses() {
    let css = '\n/* Type Styles */\n';

    // Display styles
    if (this.tokens.typography.typeStyles.display) {
      Object.keys(this.tokens.typography.typeStyles.display).forEach(styleName => {
        const style = this.tokens.typography.typeStyles.display[styleName];
        css += `.type-display-${styleName} {\n`;
        css += `  font-family: var(--font-family-primary);\n`;
        css += `  font-size: var(--font-size-${style.fontSize});\n`;
        css += `  font-weight: var(--font-weight-${style.fontWeight});\n`;
        css += `  line-height: var(--line-height-${style.lineHeight});\n`;
        css += `  letter-spacing: var(--letter-spacing-${style.letterSpacing});\n`;
        css += `}\n\n`;
      });
    }

    // Heading styles
    if (this.tokens.typography.typeStyles.heading) {
      Object.keys(this.tokens.typography.typeStyles.heading).forEach(styleName => {
        const style = this.tokens.typography.typeStyles.heading[styleName];
        css += `.type-heading-${styleName} {\n`;
        css += `  font-family: var(--font-family-primary);\n`;
        css += `  font-size: var(--font-size-${style.fontSize});\n`;
        css += `  font-weight: var(--font-weight-${style.fontWeight});\n`;
        css += `  line-height: var(--line-height-${style.lineHeight});\n`;
        css += `  letter-spacing: var(--letter-spacing-${style.letterSpacing});\n`;
        css += `}\n\n`;
      });
    }

    // Title styles
    if (this.tokens.typography.typeStyles.title) {
      Object.keys(this.tokens.typography.typeStyles.title).forEach(styleName => {
        const style = this.tokens.typography.typeStyles.title[styleName];
        css += `.type-title-${styleName} {\n`;
        css += `  font-family: var(--font-family-primary);\n`;
        css += `  font-size: var(--font-size-${style.fontSize});\n`;
        css += `  font-weight: var(--font-weight-${style.fontWeight});\n`;
        css += `  line-height: var(--line-height-${style.lineHeight});\n`;
        css += `  letter-spacing: var(--letter-spacing-${style.letterSpacing});\n`;
        css += `}\n\n`;
      });
    }

    // Body styles
    if (this.tokens.typography.typeStyles.body) {
      Object.keys(this.tokens.typography.typeStyles.body).forEach(styleName => {
        const style = this.tokens.typography.typeStyles.body[styleName];
        css += `.type-body-${styleName} {\n`;
        css += `  font-family: var(--font-family-primary);\n`;
        css += `  font-size: var(--font-size-${style.fontSize});\n`;
        css += `  font-weight: var(--font-weight-${style.fontWeight});\n`;
        css += `  line-height: var(--line-height-${style.lineHeight});\n`;
        css += `  letter-spacing: var(--letter-spacing-${style.letterSpacing});\n`;
        css += `}\n\n`;
      });
    }

    // Label styles
    if (this.tokens.typography.typeStyles.label) {
      Object.keys(this.tokens.typography.typeStyles.label).forEach(styleName => {
        const style = this.tokens.typography.typeStyles.label[styleName];
        css += `.type-label-${styleName} {\n`;
        css += `  font-family: var(--font-family-primary);\n`;
        css += `  font-size: var(--font-size-${style.fontSize});\n`;
        css += `  font-weight: var(--font-weight-${style.fontWeight});\n`;
        css += `  line-height: var(--line-height-${style.lineHeight});\n`;
        css += `  letter-spacing: var(--letter-spacing-${style.letterSpacing});\n`;
        css += `}\n\n`;
      });
    }

    return css;
  }

  saveTokens(outputPath) {
    const output = {
      generated: new Date().toISOString(),
      source: 'Figma Design Tokens',
      tokens: this.tokens
    };
    
    fs.writeFileSync(outputPath, JSON.stringify(output, null, 2));
    console.log(`💾 Tokens saved to: ${outputPath}`);
  }

  saveCSS(outputPath) {
    const css = this.generateCSSVariables();
    fs.writeFileSync(outputPath, css);
    console.log(`💾 CSS saved to: ${outputPath}`);
  }
}

module.exports = FigmaTokenParser;

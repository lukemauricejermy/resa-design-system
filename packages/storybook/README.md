# Resa Design System - Storybook

This Storybook instance showcases the Resa Design System components with Tailwind CSS integration and design tokens.

## 🎨 Design Tokens

The design system now uses a comprehensive token system that provides:

### 1. **Tailwind CSS Classes (Recommended)**
Use Tailwind utility classes for most styling needs:

```tsx
// Button with brand colors
<button className="bg-brand-sand-40 text-white px-4 py-2 rounded-md hover:bg-brand-sand-50">
  Primary Button
</button>

// Card with semantic spacing
<div className="bg-white border border-brand-sand-90 rounded-xl p-8">
  <h3 className="text-xl font-semibold text-brand-sand-10 mb-4">Card Title</h3>
  <p className="text-brand-sand-40">Card content goes here</p>
</div>
```

### 2. **Programmatic Tokens (Dynamic Values)**
Access token values programmatically for dynamic styling:

```tsx
import { tokens } from '@resa/tokens';

// Dynamic button styling
const buttonStyle = {
  backgroundColor: tokens.colors.brand.sand[40],
  padding: tokens.spacing.component.sm,
  borderRadius: tokens.borderRadius.md,
  fontFamily: tokens.typography.fontFamily.primary,
};

<button style={buttonStyle}>Dynamic Button</button>
```

## 🚀 Available Token Categories

### Colors
- **Brand Colors**: `brand-sand-{10|20|30|40|50|60|70|80|90|95}`
- **Semantic Colors**: `content-primary`, `background-secondary`, etc.
- **Primitive Colors**: `white`, `black`, `grey-{10|20|30|40|50|60|70|80|90|95}`

### Spacing
- **Micro**: `xs` (2px), `sm` (4px), `md` (8px), `lg` (12px)
- **Component**: `xs` (16px), `sm` (24px), `md` (32px), `lg` (48px), `xl` (64px)

### Typography
- **Font Family**: `font-primary` (Figtree)
- **Font Weights**: `font-regular`, `font-medium`, `font-semibold`, `font-bold`
- **Font Sizes**: `text-xs`, `text-sm`, `text-base`, `text-lg`, `text-xl`, `text-2xl`, `text-3xl`, `text-4xl`

### Layout
- **Border Radius**: `rounded`, `rounded-md`, `rounded-lg`, `rounded-xl`, `rounded-2xl`, `rounded-3xl`
- **Shadows**: `shadow-sm`, `shadow`, `shadow-md`, `shadow-lg`, `shadow-xl`
- **Z-Index**: Predefined z-index values for layering

## 🎯 Best Practices

### When to Use Tailwind Classes
- **Static styling** (most common use case)
- **Responsive design** (Tailwind's responsive prefixes)
- **Component variants** (different button styles, sizes)
- **Layout and spacing** (grids, flexbox, margins, padding)

### When to Use Programmatic Tokens
- **Dynamic values** (calculated styles, theme switching)
- **Complex animations** (custom keyframes with token values)
- **Third-party integrations** (charts, external libraries)
- **Conditional styling** (complex state-based styles)

### Example: Hybrid Approach
```tsx
import { tokens } from '@resa/tokens';

function DynamicCard({ theme, size }) {
  // Use Tailwind for static styles
  const baseClasses = "rounded-xl border transition-all duration-200";
  
  // Use tokens for dynamic values
  const dynamicStyles = {
    backgroundColor: theme === 'dark' ? tokens.colors.brand.sand[90] : tokens.colors.primitives.white,
    padding: tokens.spacing.component[size] || tokens.spacing.component.md,
  };

  return (
    <div className={baseClasses} style={dynamicStyles}>
      Content
    </div>
  );
}
```

## 🔧 Development

### Adding New Tokens
1. Update `packages/tokens/src/index.ts`
2. Add corresponding Tailwind classes in `tailwind.config.js`
3. Run `npm run build` in the tokens package
4. Sync tokens to Storybook: `npm run sync-tokens`

### Custom Tailwind Classes
The `tailwind.config.js` extends the default theme with our design tokens:

```js
module.exports = {
  theme: {
    extend: {
      colors: {
        brand: {
          sand: {
            10: '#f7f3ee',
            20: '#efe8dd',
            // ... more shades
          }
        }
      },
      spacing: {
        'micro-xs': '2px',
        'component-md': '32px',
        // ... more spacing values
      }
    }
  }
}
```

## 📚 Component Examples

Check out the `TokenDemo` component and its story to see comprehensive examples of:
- Tailwind class usage
- Programmatic token usage
- Hybrid approaches
- Real-world component patterns

## 🎨 Available Components

- **Button**: Multiple variants with Tailwind styling
- **Avatar**: Responsive sizing with Tailwind utilities
- **Checkbox**: Accessible form control with Tailwind
- **Icon**: Lucide icon wrapper with consistent sizing
- **ThemeLayout**: Layout components with theme awareness

## 🚀 Getting Started

1. **Install dependencies**: `npm install`
2. **Start Storybook**: `npm run storybook`
3. **Build tokens**: `npm run sync-tokens` (when tokens change)
4. **Deploy**: `npm run deploy:vercel`

## 🔗 Related Documentation

- [Design Token System](../tokens/README.md)
- [Component Library](../components/README.md)
- [Figma Integration](../tokens/FIGMA_INTEGRATION.md)

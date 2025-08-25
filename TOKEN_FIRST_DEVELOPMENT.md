# 🚨 TOKEN-FIRST DEVELOPMENT - ZERO TOLERANCE POLICY

## ⚠️ CRITICAL RULE: ALL COMPONENTS MUST USE DESIGN TOKENS

**NO EXCEPTIONS. NO HARDCODED VALUES. NO COMPROMISES.**

Every single component in the Resa Design System **MUST** be built using design tokens. This is not a suggestion - it's a requirement.

## 🎯 What This Means

### ✅ **ALLOWED: Token-Based Values**
```tsx
// CORRECT: Using token-based Tailwind classes
className="bg-fill-primary text-content-inverse rounded-xs p-layout-md"

// CORRECT: Using programmatic tokens
style={{ backgroundColor: tokens.colors.semantic.fill.primary }}
```

### ❌ **FORBIDDEN: Hardcoded Values**
```tsx
// WRONG: Hardcoded colors
className="bg-blue-500 text-white rounded-lg p-4"

// WRONG: Hardcoded spacing
className="p-8 m-4 gap-6"

// WRONG: Hardcoded sizes
className="w-10 h-10 text-lg"
```

## 🔧 How to Build Components

### 1. **Define Tokens First**
Before writing any component, ensure all needed values exist in `packages/tokens/src/index.ts`:

```tsx
// Add to tokens if missing
export const colors = {
  semantic: {
    fill: {
      primary: '#1a1a1a',
      'primary-hover': '#333333',
      // ... all needed values
    }
  }
}
```

### 2. **Update Tailwind Config**
Add corresponding Tailwind extensions in `packages/storybook/tailwind.config.js`:

```js
module.exports = {
  theme: {
    extend: {
      colors: {
        fill: {
          primary: '#1a1a1a',        // From tokens
          'primary-hover': '#333333', // From tokens
        }
      },
      spacing: {
        'layout-md': '24px',          // From tokens
        'button-md': '16px 8px',     // From tokens
      }
    }
  }
}
```

### 3. **Build Component Using Only Tokens**
```tsx
export function Button({ variant = 'primary' }) {
  // ONLY token-based classes
  const baseClasses = [
    'bg-fill-primary',           // From tokens
    'text-content-inverse',      // From tokens
    'rounded-xs',                // From tokens
    'p-button-md',               // From tokens
    'min-h-button-md',           // From tokens
    'font-primary',              // From tokens
    'font-medium',               // From tokens
  ];

  return <button className={baseClasses.join(' ')} />;
}
```

## 📋 Required Token Categories

### **Colors** - Every color must come from tokens
- `brand.*` - Brand colors (sand, grey, etc.)
- `semantic.*` - Semantic colors (content, background, fill, border)
- `ui.*` - UI state colors (success, warning, error, info)

### **Spacing** - Every spacing value must come from tokens
- `micro.*` - Micro spacing (2px, 4px, 8px, 12px)
- `component.*` - Component spacing (16px, 24px, 32px, 48px, 64px)
- `layout.*` - Layout spacing (8px, 16px, 24px, 32px, 48px, 64px)
- `button.*` - Button-specific spacing

### **Typography** - Every typography value must come from tokens
- `fontFamily.primary` - Font family
- `fontWeight.*` - Font weights
- `fontSize.*` - Font sizes
- `lineHeight.*` - Line heights

### **Layout** - Every layout value must come from tokens
- `borderRadius.*` - Border radius values
- `shadows.*` - Shadow values
- `zIndex.*` - Z-index values
- `animation.*` - Animation values

### **Components** - Component-specific values
- `components.button.*` - Button dimensions, spacing
- `components.avatar.*` - Avatar sizes, spacing
- `components.checkbox.*` - Checkbox dimensions, spacing

## 🚫 Common Violations to Avoid

### **Hardcoded Colors**
```tsx
// ❌ WRONG
className="bg-blue-500 text-white border-gray-300"

// ✅ CORRECT
className="bg-ui-info-50 text-content-inverse border-border-default"
```

### **Hardcoded Spacing**
```tsx
// ❌ WRONG
className="p-4 m-2 gap-6"

// ✅ CORRECT
className="p-layout-sm m-layout-xs gap-layout-md"
```

### **Hardcoded Sizes**
```tsx
// ❌ WRONG
className="w-10 h-10 text-lg"

// ✅ CORRECT
className="w-avatar-md h-avatar-md text-lg"
```

### **Hardcoded Border Radius**
```tsx
// ❌ WRONG
className="rounded-lg rounded-xl"

// ✅ CORRECT
className="rounded-m rounded-l"
```

## 🔍 Code Review Checklist

Before any component can be merged:

- [ ] **No hardcoded colors** - All colors use token classes
- [ ] **No hardcoded spacing** - All spacing uses token classes
- [ ] **No hardcoded sizes** - All sizes use token classes
- [ ] **No hardcoded typography** - All typography uses token classes
- [ ] **No hardcoded layout** - All layout uses token classes
- [ ] **All needed tokens exist** - No missing token values
- [ ] **Tailwind config updated** - All tokens have corresponding classes

## 🛠️ Development Workflow

### 1. **Plan Component**
- What colors, spacing, sizes, typography does it need?
- Do all these values exist in tokens?

### 2. **Add Missing Tokens**
- Update `packages/tokens/src/index.ts`
- Run `npm run build` in tokens package

### 3. **Update Tailwind Config**
- Add corresponding classes in `tailwind.config.js`
- Ensure all tokens have Tailwind equivalents

### 4. **Build Component**
- Use ONLY token-based classes
- No hardcoded values anywhere

### 5. **Test & Review**
- Verify all styling comes from tokens
- Run code review checklist

## 🚨 Enforcement

### **Automated Checks**
- Linting rules will catch hardcoded values
- Build will fail if tokens are missing
- Storybook will show token usage

### **Code Review**
- Every PR must pass token compliance
- No exceptions for "quick fixes"
- Violations will be rejected immediately

### **Documentation**
- All components must document token usage
- Token references must be clear and traceable

## 📚 Examples

### **Button Component (Token-Based)**
```tsx
export function Button({ variant = 'primary' }) {
  const baseClasses = [
    'inline-flex items-center justify-center',
    'font-medium font-primary',
    'border-none cursor-pointer',
    'transition-all duration-base ease-in-out',
    'min-w-fit',
    'disabled:opacity-60 disabled:cursor-not-allowed',
    'rounded-xs',                    // tokens.borderRadius.xs
    'gap-button',                    // tokens.components.button.gap
  ];

  const sizeClasses = {
    sm: 'px-3 py-1.5 min-h-button-sm text-sm',   // tokens.components.button.height.sm
    md: 'px-4 py-2 min-h-button-md text-base',   // tokens.components.button.height.md
    lg: 'px-6 py-4 min-h-button-lg text-lg',     // tokens.components.button.height.lg
  };

  const variantClasses = {
    primary: 'bg-fill-primary text-content-inverse hover:bg-fill-primary-hover active:bg-fill-primary-active',
    secondary: 'bg-fill-secondary text-content-primary hover:bg-fill-secondary-hover active:bg-fill-secondary-active',
    // ... all variants use tokens
  };

  return <button className={[...baseClasses, sizeClasses[size], variantClasses[variant]].join(' ')} />;
}
```

### **Avatar Component (Token-Based)**
```tsx
export function Avatar({ size = 'md' }) {
  const sizeClasses = {
    xs: 'w-avatar-xs h-avatar-xs text-xs',       // tokens.components.avatar.size.xs
    sm: 'w-avatar-sm h-avatar-sm text-sm',       // tokens.components.avatar.size.sm
    md: 'w-avatar-md h-avatar-md text-sm',       // tokens.components.avatar.size.md
    lg: 'w-avatar-lg h-avatar-lg text-base',     // tokens.components.avatar.size.lg
    xl: 'w-avatar-xl h-avatar-xl text-lg'        // tokens.components.avatar.size.xl
  };

  return (
    <div className={`${sizeClasses[size]} rounded-full bg-ui-info-95`}>
      {/* Content */}
    </div>
  );
}
```

## 🎯 Success Metrics

- **100% Token Usage** - No hardcoded values anywhere
- **Consistent Design** - All components use the same token system
- **Maintainable Code** - Changes to tokens update all components
- **Type Safety** - Full TypeScript support for all tokens
- **Documentation** - Clear token usage in all components

## 🚀 Getting Started

1. **Read this document completely**
2. **Understand the token system**
3. **Plan your component with tokens first**
4. **Build using ONLY token-based classes**
5. **Test and verify compliance**

---

**Remember: Tokens are not optional. They are mandatory. Every component must be built with tokens, or it will not be accepted.**

**This is a design system, not a collection of individual components. Consistency and maintainability are paramount.**

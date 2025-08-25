# Token-First Development Guide

## 🚨 **CRITICAL RULE: ZERO TOLERANCE FOR HARDCODED VALUES**

**Every single component, page, and UI element MUST use design tokens. NO EXCEPTIONS.**

**NO STATIC CLASSES. NO HARDCODED VALUES. NO GENERIC UTILITIES.**

## 🚫 **ABSOLUTELY FORBIDDEN**

### **Static Classes (NEVER USE THESE)**
- ❌ `bg-white`, `text-black`, `p-4`, `m-2`
- ❌ `rounded-lg`, `shadow-md`, `border-gray-300`
- ❌ `flex`, `grid`, `hidden`, `block` (unless in tokens)
- ❌ `text-center`, `text-left`, `text-right`
- ❌ `w-full`, `h-full`, `max-w-md`

### **Hardcoded Values (NEVER USE THESE)**
- ❌ `style={{ color: '#000000' }}`
- ❌ `style={{ padding: '16px' }}`
- ❌ `style={{ borderRadius: '8px' }}`

## ✅ **ONLY ALLOWED**

### **Token-Based Classes (ONLY THESE)**
- ✅ `bg-surface-primary`, `text-content-primary`
- ✅ `p-layout-md`, `m-component-sm`
- ✅ `rounded-m`, `border-border-default`
- ✅ `font-primary`, `text-lg`, `font-semibold`

### **Token-Based Values (ONLY THESE)**
- ✅ `style={{ color: tokens.colors.content.primary }}`
- ✅ `style={{ padding: tokens.spacing.layout.md }}`

## 🎯 **What We've Implemented**

### 1. **Comprehensive Design Token System**
- **Colors**: Complete light/dark mode semantic color tokens
- **Spacing**: Micro, component, button, and layout spacing tokens
- **Typography**: Font families, weights, sizes, and line heights
- **Layout**: Border radius, shadows, z-index, and animation tokens
- **Components**: Button heights, avatar sizes, checkbox dimensions

### 2. **Light/Dark Mode Theme System**
- **Default**: Light mode (as requested)
- **Switching**: Every component responds to theme changes
- **Semantic Colors**: All colors automatically adapt to theme
- **Persistence**: Theme preference saved to localStorage
- **Smooth Transitions**: 200ms transitions for all color changes

### 3. **Token-Based Tailwind Configuration**
- **Extended Colors**: All semantic colors mapped to Tailwind utilities
- **Extended Spacing**: All spacing tokens available as Tailwind classes
- **Extended Typography**: Font families and weights as Tailwind utilities
- **Component Extensions**: Button heights, avatar sizes, checkbox dimensions
- **Generic Utilities Disabled**: No fallback to default Tailwind classes

## 🎨 **How to Use the New System**

### **Theme Switching in Components**
```tsx
import { useTheme, useThemeColors } from '../contexts/ThemeContext';

function MyComponent() {
  const { theme, toggleTheme, setTheme } = useTheme();
  const { colors } = useThemeColors();
  
  return (
    <div className="bg-background-primary text-content-primary">
      <button onClick={toggleTheme}>Toggle Theme</button>
      <p>Current theme: {theme}</p>
    </div>
  );
}
```

### **Token-Based Tailwind Classes (ONLY THESE)**
```tsx
// ✅ CORRECT - Using ONLY token-based classes
<div className="bg-surface-primary text-content-primary p-layout-md rounded-m">
  <button className="bg-fill-primary text-content-inverse px-component-sm py-micro-md rounded-xs">
    Click me
  </button>
</div>

// ❌ WRONG - Using ANY hardcoded values
<div className="bg-white text-black p-6 rounded-lg">
  <button className="bg-gray-800 text-white px-4 py-2 rounded">
    Click me
  </button>
</div>
```

## 🎯 **Available Token Classes (ONLY THESE)**

### **Colors (ONLY these):**
- `bg-background-primary`, `bg-background-secondary`, `bg-background-tertiary`
- `bg-surface-primary`, `bg-surface-secondary`, `bg-surface-tertiary`
- `bg-fill-primary`, `bg-fill-secondary`, `bg-fill-tertiary`
- `text-content-primary`, `text-content-secondary`, `text-content-tertiary`
- `border-border-default`, `border-border-active`, `border-border-disabled`

### **Spacing (ONLY these):**
- `p-micro-xs`, `p-micro-sm`, `p-micro-md`, `p-micro-lg`
- `p-component-xs`, `p-component-sm`, `p-component-md`, `p-component-lg`
- `p-layout-xs`, `p-layout-sm`, `p-layout-md`, `p-layout-lg`, `p-layout-xl`
- `gap-micro-md`, `gap-component-md`, `gap-layout-md`

### **Typography (ONLY these):**
- `font-primary`, `font-regular`, `font-medium`, `font-semibold`, `font-bold`
- `text-xs`, `text-sm`, `text-base`, `text-lg`, `text-xl`, `text-2xl`

### **Layout (ONLY these):**
- `rounded-xs`, `rounded-s`, `rounded-m`, `rounded-l`
- `min-h-button-sm`, `min-h-button-md`, `min-h-button-lg`
- `w-avatar-xs`, `w-avatar-sm`, `w-avatar-md`, `w-avatar-lg`, `w-avatar-xl`

## 🔧 **Component Implementation Requirements**

### **Every Component MUST:**
1. **Use ONLY token-based Tailwind classes** for all styling
2. **Import ThemeProvider** in stories for theme support
3. **Use semantic color tokens** (not hardcoded colors)
4. **Include proper transitions** for theme switching
5. **Test in both light and dark modes**
6. **ZERO hardcoded values anywhere**

### **Example Component Structure (CORRECT)**
```tsx
import React from 'react';
import { useTheme } from '../contexts/ThemeContext';

interface MyComponentProps {
  children: React.ReactNode;
  className?: string;
}

export function MyComponent({ children, className = '' }: MyComponentProps) {
  const { theme } = useTheme();
  
  return (
    <div className={`
      bg-surface-primary 
      text-content-primary 
      border border-border-default 
      rounded-m 
      p-component-md
      transition-colors duration-base
      ${className}
    `}>
      {children}
    </div>
  );
}
```

### **Example Story with Theme Support (REQUIRED)**
```tsx
import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { MyComponent } from '../components/MyComponent';
import { ThemeProvider } from '../contexts/ThemeContext';

const meta: Meta<typeof MyComponent> = {
  title: 'Components/MyComponent',
  component: MyComponent,
  decorators: [
    (Story) => (
      <ThemeProvider defaultTheme="light">
        <Story />
      </ThemeProvider>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: 'Component content',
  },
};

export const DarkMode: Story = {
  args: {
    children: 'Component content',
  },
  decorators: [
    (Story) => (
      <ThemeProvider defaultTheme="dark">
        <Story />
      </ThemeProvider>
    ),
  ],
};
```

## 🚫 **Common Violations (NEVER DO THESE)**

### **Hardcoded Colors (FORBIDDEN)**
```tsx
// ❌ ABSOLUTELY FORBIDDEN
<div className="bg-white text-black border-gray-300">
  <button className="bg-blue-500 text-white hover:bg-blue-600">
    Button
  </button>
</div>

// ✅ ONLY ALLOWED
<div className="bg-surface-primary text-content-primary border-border-default">
  <button className="bg-fill-primary text-content-inverse hover:bg-fill-primary-hover">
    Button
  </button>
</div>
```

### **Hardcoded Spacing (FORBIDDEN)**
```tsx
// ❌ ABSOLUTELY FORBIDDEN
<div className="p-6 m-4 gap-3">
  Content
</div>

// ✅ ONLY ALLOWED
<div className="p-layout-lg m-component-sm gap-micro-md">
  Content
</div>
```

### **Generic Utilities (FORBIDDEN)**
```tsx
// ❌ ABSOLUTELY FORBIDDEN
<div className="flex items-center justify-center text-center">
  Content
</div>

// ✅ ONLY ALLOWED (if flex utilities are defined in tokens)
<div className="flex items-center justify-center">
  Content
</div>
```

## 🔍 **Code Review Checklist (MANDATORY)**

### **Before Submitting PR:**
- [ ] **ZERO hardcoded colors** - All colors use semantic tokens
- [ ] **ZERO hardcoded spacing** - All spacing uses token classes
- [ ] **ZERO hardcoded typography** - All typography uses token classes
- [ ] **ZERO generic utilities** - Only token-based classes
- [ ] **Theme support** - Component works in both light and dark modes
- [ ] **Smooth transitions** - Theme switching has proper animations
- [ ] **Token imports** - All necessary tokens are imported
- [ ] **Story decorators** - Stories include ThemeProvider
- [ ] **Responsive design** - Mobile-first approach with tokens

### **Testing Requirements:**
- [ ] **Light mode** - Component renders correctly in light theme
- [ ] **Dark mode** - Component renders correctly in dark theme
- [ ] **Theme switching** - Smooth transitions between themes
- [ ] **Token validation** - All values come from token system
- [ ] **Accessibility** - Proper contrast ratios in both themes

## 🚀 **Development Workflow (MANDATORY)**

### **1. Create New Component**
```bash
# Create component file
touch src/components/new-component.tsx

# Create story file
touch src/stories/new-component.stories.tsx
```

### **2. Implement with TOKENS ONLY**
```tsx
// Use ONLY token-based Tailwind classes - NO EXCEPTIONS
export function NewComponent() {
  return (
    <div className="bg-surface-primary text-content-primary p-component-md rounded-m">
      Component content
    </div>
  );
}
```

### **3. Add Theme Support (REQUIRED)**
```tsx
// Include ThemeProvider in stories - NO EXCEPTIONS
decorators: [
  (Story) => (
    <ThemeProvider defaultTheme="light">
      <Story />
    </ThemeProvider>
  ),
],
```

### **4. Test Both Themes (REQUIRED)**
- Verify light mode appearance
- Verify dark mode appearance
- Test theme switching
- Ensure smooth transitions

### **5. Submit for Review (MANDATORY)**
- Use code review checklist
- Ensure ZERO hardcoded values
- Verify token usage throughout

## 🎯 **Benefits of This System**

### **Consistency**
- All components use the same design language
- Unified spacing, typography, and color system
- Consistent user experience across the application

### **Maintainability**
- Single source of truth for design values
- Easy to update design system globally
- Reduced design debt and inconsistencies

### **Theme Support**
- Automatic light/dark mode switching
- Semantic color system that adapts to themes
- Professional, polished user experience

### **Developer Experience**
- Clear, predictable class names
- Comprehensive token documentation
- Easy to understand and implement

## 🆘 **Getting Help**

### **When You're Stuck:**
1. **Check available tokens** in `packages/tokens/src/index.ts`
2. **Review Tailwind config** in `packages/storybook/tailwind.config.js`
3. **Look at existing components** for examples
4. **Use the TokenDemo component** as a reference
5. **Ask for help** - token-first development is a team effort

### **Remember:**
- **EVERY value must come from tokens**
- **ZERO hardcoded colors, spacing, or typography**
- **ZERO static classes or generic utilities**
- **Test in both light and dark modes**
- **Use semantic color tokens for theme switching**

## 🚨 **FINAL WARNING**

**This is a ZERO TOLERANCE POLICY. Every component must follow these guidelines to maintain the integrity of our design system.**

**NO EXCEPTIONS. NO COMPROMISES. NO HARDCODED VALUES.**

**EVERY SINGLE COMPONENT, PAGE, AND UI ELEMENT MUST USE DESIGN TOKENS.**

---

**By following these rules, we maintain the integrity of our design system and ensure consistency across all components.**

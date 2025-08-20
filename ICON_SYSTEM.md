# Icon System - Resa Design System

## Overview

The Resa Design System uses **Lucide React** as the foundation for all icons, with standardized sizing and stroke width rules for consistency across the entire design system.

## 🎯 Design System Rules

### **Default Standards:**
- **Size**: `20px` (default for most UI elements)
- **Stroke Width**: `1.5px` (default for most UI elements)
- **Color**: `currentColor` (inherits from parent for consistent theming)

### **When to Deviate:**
- **Small UI elements**: Use `16px` size
- **Large UI elements**: Use `24px` or `32px` size
- **Thin icons**: Use `1px` stroke width for subtle elements
- **Bold icons**: Use `2px` or `3px` stroke width for emphasis

## 🚀 Usage

### **Quick Start with Pre-built Icons:**

```tsx
import { Icons } from '../components/Icon';

// Use with defaults (20px, 1.5px stroke, currentColor)
<Icons.Heart />
<Icons.ArrowRight />
<Icons.Check />

// Customize size and stroke
<Icons.Heart size={16} strokeWidth={1} />
<Icons.ArrowRight size={24} strokeWidth={2} />
```

### **Advanced Usage with Icon Component:**

```tsx
import { Icon } from '../components/Icon';

// Full control over all properties
<Icon 
  name="Heart" 
  size={20} 
  strokeWidth={1.5} 
  color="var(--color-content-primary)"
/>

// Access any Lucide icon
<Icon name="Zap" size={16} />
```

## 📚 Available Icons

### **Navigation Icons:**
- `ArrowRight`, `ArrowLeft`
- `ChevronDown`, `ChevronUp`, `ChevronRight`, `ChevronLeft`

### **Action Icons:**
- `Plus`, `Minus`, `X`, `Check`
- `Edit`, `Trash`, `Search`, `Filter`

### **Status Icons:**
- `AlertCircle`, `AlertTriangle`, `Info`, `HelpCircle`

### **UI Elements:**
- `Eye`, `EyeOff`, `Lock`, `Unlock`
- `Settings`, `User`, `Home`, `Menu`

### **Social Icons:**
- `Heart`, `Share`, `Bookmark`, `Star`

### **File & Media:**
- `Download`, `Upload`, `File`, `Image`, `Video`, `Music`

### **Time Icons:**
- `Clock`, `Calendar`, `Timer`

### **Business Icons:**
- `Building`, `Briefcase`, `CreditCard`, `DollarSign`

### **Technology Icons:**
- `Wifi`, `Battery`, `Zap`, `Cpu`

### **Nature Icons:**
- `Sun`, `Moon`, `Cloud`, `Leaf`

## 🎨 Integration Examples

### **In Button Components:**
```tsx
<Button 
  leadingIcon={<Icons.Heart size={16} />}
  trailingIcon={<Icons.ArrowRight size={16} />}
>
  Click Me
</Button>
```

### **In Form Components:**
```tsx
<div style={{ position: 'relative' }}>
  <Icons.Search size={16} style={{ position: 'absolute', left: '12px', top: '50%', transform: 'translateY(-50%)' }} />
  <input type="text" style={{ paddingLeft: '40px' }} />
</div>
```

### **In Navigation:**
```tsx
<nav>
  <Icons.Home size={20} />
  <Icons.User size={20} />
  <Icons.Settings size={20} />
</nav>
```

## 🔧 Customization

### **Size Variations:**
```tsx
// Common sizes for different contexts
<Icons.Heart size={12} />   // Very small (tooltips, badges)
<Icons.Heart size={16} />   // Small (buttons, form elements)
<Icons.Heart size={20} />   // Default (most UI elements)
<Icons.Heart size={24} />   // Medium (headers, important elements)
<Icons.Heart size={32} />   // Large (hero sections, CTAs)
<Icons.Heart size={48} />   // Extra large (feature sections)
```

### **Stroke Width Variations:**
```tsx
// Stroke width for different visual weights
<Icons.Heart strokeWidth={0.5} />  // Very thin (subtle elements)
<Icons.Heart strokeWidth={1} />    // Thin (secondary elements)
<Icons.Heart strokeWidth={1.5} />  // Default (most UI elements)
<Icons.Heart strokeWidth={2} />    // Medium (emphasis)
<Icons.Heart strokeWidth={3} />    // Bold (strong emphasis)
```

### **Color Customization:**
```tsx
// Use design tokens for consistent theming
<Icons.Heart color="var(--color-content-primary)" />
<Icons.Heart color="var(--color-content-success)" />
<Icons.Heart color="var(--color-content-error)" />

// Or use currentColor for inheritance
<Icons.Heart /> // Inherits from parent element
```

## 📱 Responsive Considerations

### **Mobile-First Approach:**
- **Small screens**: Use `16px` icons by default
- **Medium screens**: Use `20px` icons
- **Large screens**: Use `20px` or `24px` icons

### **Touch Targets:**
- **Interactive icons**: Minimum `44px` touch target
- **Icon size**: `20px` with `12px` padding on each side
- **Accessibility**: Ensure sufficient contrast and size

## ♿ Accessibility

### **Best Practices:**
- **Meaningful icons**: Always pair with descriptive text when possible
- **ARIA labels**: Use `aria-label` for icon-only buttons
- **Focus indicators**: Ensure icons are properly focusable
- **Color contrast**: Maintain sufficient contrast ratios

### **Screen Reader Support:**
```tsx
// For icon-only buttons
<button aria-label="Add to favorites">
  <Icons.Heart />
</button>

// For decorative icons
<Icons.ArrowRight aria-hidden="true" />
```

## 🔄 Migration from Old Icons

### **Before (Custom Icons):**
```tsx
import { SmileIcon } from '../components/icons';
<SmileIcon size={16} />
```

### **After (Standardized Icons):**
```tsx
import { Icons } from '../components/Icon';
<Icons.Heart size={16} />
```

## 📋 Icon Selection Guidelines

### **Choose Icons That:**
- **Match the action**: Use `Plus` for add, `Trash` for delete
- **Are universally understood**: Avoid ambiguous or culture-specific icons
- **Maintain consistency**: Use similar icon styles for similar actions
- **Scale well**: Test at different sizes for clarity

### **Avoid:**
- **Overly complex icons**: Keep them simple and recognizable
- **Mixed metaphors**: Don't mix different icon styles
- **Inconsistent sizing**: Maintain the established size hierarchy
- **Poor contrast**: Ensure icons are visible in all contexts

## 🚀 Future Enhancements

### **Planned Features:**
- **Icon search**: Find icons by name or description
- **Custom icon sets**: Support for additional icon libraries
- **Icon animations**: Hover and interaction effects
- **Icon variants**: Filled, outlined, and duotone versions

### **Contributing:**
- **Adding new icons**: Follow the established naming conventions
- **Icon consistency**: Ensure new icons follow the design system rules
- **Documentation**: Update this guide when adding new icons

---

**Remember**: The goal is consistency and usability. When in doubt, use the defaults (20px size, 1.5px stroke width) and let the design system handle the rest.

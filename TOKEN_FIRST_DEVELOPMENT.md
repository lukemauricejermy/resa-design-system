# 🎯 Token-First Development Guide

## **CRITICAL: Always Reference Design Tokens, Never Use Hardcoded Values**

This guide ensures every component in the Resa Design System uses your design tokens instead of hardcoded CSS values.

## 🚨 **What NOT to Do (Hardcoded Values)**

```tsx
// ❌ WRONG - Hardcoded values
<div className="bg-[#d8e6fb] text-[#163260] border-[#ece7df]">
  Content
</div>

// ❌ WRONG - Hardcoded sizes
<div className="w-10 h-10 text-sm font-medium">
  Content
</div>
```

## ✅ **What TO Do (Token References)**

```tsx
// ✅ CORRECT - Using design tokens
<div className="bg-[var(--color-fill-info)] text-[var(--color-content-info)] border-[var(--color-border-info)]">
  Content
</div>

// ✅ CORRECT - Using typography tokens
<div 
  className="w-10 h-10"
  style={{
    fontSize: 'var(--font-size-3xs)',
    fontWeight: 'var(--font-weight-medium)',
    lineHeight: 'var(--line-height-normal)'
  }}
>
  Content
</div>
```

## 🔍 **Token Reference Checklist**

Before building any component, verify you have tokens for:

### **Colors**
- [ ] Background colors → `var(--color-fill-*)` or `var(--color-surface-*)`
- [ ] Text colors → `var(--color-content-*)`
- [ ] Border colors → `var(--color-border-*)`
- [ ] Fill colors → `var(--color-fill-*)`

### **Typography**
- [ ] Font family → `var(--font-family-primary)`
- [ ] Font size → `var(--font-size-*)`
- [ ] Font weight → `var(--font-weight-*)`
- [ ] Line height → `var(--line-height-*)`
- [ ] Letter spacing → `var(--letter-spacing-*)`

### **Spacing & Layout**
- [ ] Padding → `var(--spacing-*)`
- [ ] Margins → `var(--spacing-*)`
- [ ] Gaps → `var(--spacing-*)`

### **Borders & Radius**
- [ ] Border width → `var(--border-width-*)`
- [ ] Border radius → `var(--border-radius-*)`

## 🎨 **Avatar Component Example (Token-First)**

```tsx
export function Avatar({ initials = 'LJ', src, size = 'md' }: AvatarProps) {
  return (
    <div
      // ✅ Background uses token
      className={`bg-[var(--color-fill-info)] rounded-full ${sizeClasses[size]}`}
    >
      {src ? (
        <img src={src} alt="Avatar" className="w-full h-full object-cover" />
      ) : (
        <div
          // ✅ Typography uses tokens
          style={{
            fontFamily: 'var(--font-family-primary)',
            fontSize: 'var(--font-size-3xs)',
            fontWeight: 'var(--font-weight-medium)',
            lineHeight: 'var(--line-height-normal)',
            color: 'var(--color-content-info)'
          }}
        >
          {initials}
        </div>
      )}
      
      {/* ✅ Border uses token */}
      <div className="absolute inset-0 border border-[var(--color-border-info)] rounded-full" />
    </div>
  );
}
```

## 🔄 **Figma Export Token Resolution Issue**

### **Problem**
Figma's code export often resolves token references to their raw values:
- **Token**: `{fill/info}` 
- **Export**: `#d8e6fb` (resolved value)

### **Solution**
1. **Always check your token system first** before using Figma exports
2. **Map resolved values back to tokens** using your `figma-tokens.css`
3. **Never copy-paste hardcoded values** from Figma exports

### **Mapping Process**
```bash
# 1. Check what the resolved value should be
Figma shows: #d8e6fb

# 2. Find the corresponding token in figma-tokens.css
grep -r "#d8e6fb" packages/tokens/dist/

# 3. Use the token reference
Instead of: bg-[#d8e6fb]
Use: bg-[var(--color-fill-info)]
```

## 📋 **Component Development Workflow**

### **Step 1: Design Analysis**
1. Review Figma design
2. **Identify all design properties** (colors, typography, spacing, etc.)
3. **Check which properties reference tokens** vs. hardcoded values

### **Step 2: Token Verification**
1. **For each design property**, verify you have a corresponding token
2. **If token exists**: Use `var(--token-name)`
3. **If token missing**: Ask user to define it in Figma

### **Step 3: Implementation**
1. **Build component using only token references**
2. **No hardcoded values allowed**
3. **Test in Storybook** to verify token usage

### **Step 4: Documentation**
1. **Include TokenReference story** showing all tokens used
2. **Document any missing tokens** that need to be created
3. **Update this guide** with new patterns

## 🧪 **Testing Token Usage**

### **Storybook TokenReference Story**
Every component should include a story that:
- Lists all design tokens used
- Shows the component with token references highlighted
- Provides debugging information

### **CSS Inspection**
In browser dev tools, verify:
- No hardcoded hex values
- All values reference `var(--token-name)`
- Tokens resolve to expected values

## 🚫 **Common Pitfalls to Avoid**

1. **Copy-pasting from Figma exports** without token mapping
2. **Using Tailwind's color palette** instead of design tokens
3. **Hardcoding spacing values** instead of using `var(--spacing-*)`
4. **Using generic font weights** instead of `var(--font-weight-*)`
5. **Assuming common values** without checking token availability

## 🔧 **Tools & Commands**

### **Check Token Availability**
```bash
# View all available tokens
cat packages/tokens/dist/figma-tokens.css

# Search for specific token types
grep "color-fill" packages/tokens/dist/figma-tokens.css
grep "spacing" packages/tokens/dist/figma-tokens.css
```

### **Update Tokens**
```bash
# Regenerate tokens from Figma
npm run update:tokens

# Rebuild Storybook
npm run update:storybook
```

## 📚 **Resources**

- **Design Tokens**: `packages/tokens/dist/figma-tokens.css`
- **Token Stories**: `packages/storybook/src/stories/DesignTokens.stories.tsx`
- **Component Examples**: `packages/storybook/src/components/`
- **Storybook**: Run `npm run update:storybook` to view

## 🎯 **Remember**

**Every pixel, every color, every font property must reference a design token.**
**No exceptions. No hardcoded values.**
**This ensures consistency, maintainability, and design system integrity.**

---

*Last updated: 2025-08-18*
*Next component: [Component Name]*

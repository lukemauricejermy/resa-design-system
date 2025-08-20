# 🎯 Token-First Quick Reference

## **GOLDEN RULE: NO HARDCODED VALUES**

## 🚨 **NEVER DO THIS**
```tsx
bg-[#d8e6fb]        // ❌ Hardcoded hex
text-[#163260]       // ❌ Hardcoded hex  
border-[#ece7df]     // ❌ Hardcoded hex
w-10 h-10            // ❌ Hardcoded size
text-sm font-medium  // ❌ Generic Tailwind
```

## ✅ **ALWAYS DO THIS**
```tsx
bg-[var(--color-fill-info)]           // ✅ Design token
text-[var(--color-content-info)]      // ✅ Design token
border-[var(--color-border-info)]     // ✅ Design token
w-10 h-10                             // ✅ Size tokens (if available)
style={{
  fontSize: 'var(--font-size-3xs)',   // ✅ Typography token
  fontWeight: 'var(--font-weight-medium)', // ✅ Typography token
  lineHeight: 'var(--line-height-normal)'  // ✅ Typography token
}}
```

## 🔍 **Before Building Any Component**

1. **Check Figma design** for all properties
2. **Map each property to existing tokens**
3. **If token missing → Ask user to define it**
4. **Build using ONLY token references**

## 📋 **Token Categories to Check**

- **Colors**: `--color-fill-*`, `--color-content-*`, `--color-border-*`
- **Typography**: `--font-*`, `--line-height-*`, `--letter-spacing-*`
- **Spacing**: `--spacing-*`
- **Borders**: `--border-*`

## 🎨 **Example: Avatar Component**

```tsx
// ✅ All properties use tokens
<div className="bg-[var(--color-fill-info)] rounded-full">
  <div style={{
    fontFamily: 'var(--font-family-primary)',
    fontSize: 'var(--font-size-3xs)',
    fontWeight: 'var(--font-weight-medium)',
    color: 'var(--color-content-info)'
  }}>
    {initials}
  </div>
  <div className="border border-[var(--color-border-info)]" />
</div>
```

## 🔧 **Quick Commands**

```bash
# View all tokens
cat packages/tokens/dist/figma-tokens.css

# Search tokens
grep "color-fill" packages/tokens/dist/figma-tokens.css

# Update tokens
npm run update:tokens

# View in Storybook
npm run update:storybook
```

## 🚫 **Remember**

**No hardcoded values. Ever.**
**Every property must reference a design token.**
**This is non-negotiable for design system integrity.**

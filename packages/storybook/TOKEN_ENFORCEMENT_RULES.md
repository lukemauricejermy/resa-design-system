# 🚨 TOKEN ENFORCEMENT RULES - ZERO TOLERANCE

## 🚫 **ABSOLUTELY FORBIDDEN**

### **NO STATIC CLASSES**
- ❌ `bg-white`, `text-black`, `p-4`, `m-2`
- ❌ `rounded-lg`, `shadow-md`, `border-gray-300`
- ❌ Any Tailwind utility that doesn't come from our tokens

### **NO HARDCODED VALUES**
- ❌ `style={{ color: '#000000' }}`
- ❌ `style={{ padding: '16px' }}`
- ❌ `style={{ borderRadius: '8px' }}`
- ❌ Any inline styles with hardcoded values

### **NO GENERIC UTILITIES**
- ❌ `flex`, `grid`, `hidden`, `block` (unless specifically defined in tokens)
- ❌ `text-center`, `text-left`, `text-right`
- ❌ `w-full`, `h-full`, `max-w-md`

## ✅ **ONLY ALLOWED**

### **TOKEN-BASED CLASSES ONLY**
- ✅ `bg-surface-primary`, `text-content-primary`
- ✅ `p-layout-md`, `m-component-sm`
- ✅ `rounded-m`, `border-border-default`
- ✅ `font-primary`, `text-lg`, `font-semibold`

### **TOKEN-BASED VALUES ONLY**
- ✅ `style={{ color: tokens.colors.content.primary }}`
- ✅ `style={{ padding: tokens.spacing.layout.md }}`
- ✅ `style={{ borderRadius: tokens.borderRadius.m }}`

## 🔒 **ENFORCEMENT MECHANISMS**

### **1. Tailwind Config Lockdown**
- Only our design token values are available
- Generic utilities are disabled
- No fallback to default Tailwind classes

### **2. Code Review Requirements**
- Every PR must pass token validation
- No hardcoded values in any component
- All styling must reference tokens

### **3. Build Process Validation**
- Automated checks for hardcoded values
- Token usage verification
- Build fails if violations found

## 📋 **COMPONENT REQUIREMENTS**

### **Every Component MUST:**
1. **Import and use theme context** for dynamic values
2. **Use ONLY token-based Tailwind classes**
3. **Reference tokens for any inline styles**
4. **Test in both light and dark modes**
5. **Include proper theme transitions**

### **Example of CORRECT Implementation:**
```tsx
import { useTheme, useThemeColors } from '../contexts/ThemeContext';

export function MyComponent() {
  const { theme } = useTheme();
  const { colors } = useThemeColors();
  
  return (
    <div className="bg-surface-primary text-content-primary p-layout-md rounded-m">
      <button className="bg-fill-primary text-content-inverse px-component-sm py-micro-md rounded-xs">
        Click me
      </button>
    </div>
  );
}
```

### **Example of FORBIDDEN Implementation:**
```tsx
// ❌ ABSOLUTELY FORBIDDEN
export function MyComponent() {
  return (
    <div className="bg-white text-black p-4 rounded-lg">
      <button className="bg-blue-500 text-white px-4 py-2 rounded">
        Click me
      </button>
    </div>
  );
}
```

## 🚨 **VIOLATION CONSEQUENCES**

### **Immediate Actions:**
1. **PR Rejected** - No exceptions
2. **Code Review Failed** - Must be fixed
3. **Build Process Halted** - Until violations resolved

### **Developer Requirements:**
1. **Fix all violations** before resubmission
2. **Convert to token-based approach** completely
3. **Test theme switching** functionality
4. **Verify zero hardcoded values**

## 🔍 **VALIDATION CHECKLIST**

### **Before Submitting Code:**
- [ ] **No `bg-white`, `text-black`** - Use semantic tokens
- [ ] **No `p-4`, `m-2`** - Use spacing tokens
- [ ] **No `rounded-lg`** - Use border radius tokens
- [ ] **No hardcoded colors** - Use color tokens
- [ ] **No generic utilities** - Use only our tokens
- [ ] **Theme context imported** - For dynamic values
- [ ] **Both themes tested** - Light and dark modes
- [ ] **Smooth transitions** - Theme switching animations

## 🎯 **AVAILABLE TOKEN CLASSES**

### **Colors (ONLY these):**
- `bg-surface-primary`, `bg-surface-secondary`, `bg-surface-tertiary`
- `bg-background-primary`, `bg-background-secondary`, `bg-background-tertiary`
- `bg-fill-primary`, `bg-fill-secondary`, `bg-fill-tertiary`
- `text-content-primary`, `text-content-secondary`, `text-content-tertiary`
- `border-border-default`, `border-border-active`, `border-border-disabled`

### **Spacing (ONLY these):**
- `p-micro-xs`, `p-micro-sm`, `p-micro-md`, `p-micro-lg`
- `p-component-xs`, `p-component-sm`, `p-component-md`, `p-component-lg`
- `p-layout-xs`, `p-layout-sm`, `p-layout-md`, `p-layout-lg`, `p-layout-xl`

### **Typography (ONLY these):**
- `font-primary`, `font-regular`, `font-medium`, `font-semibold`, `font-bold`
- `text-xs`, `text-sm`, `text-base`, `text-lg`, `text-xl`, `text-2xl`

### **Layout (ONLY these):**
- `rounded-xs`, `rounded-s`, `rounded-m`, `rounded-l`
- `min-h-button-sm`, `min-h-button-md`, `min-h-button-lg`
- `w-avatar-xs`, `w-avatar-sm`, `w-avatar-md`, `w-avatar-lg`, `w-avatar-xl`

## 🚫 **REMEMBER: ZERO TOLERANCE**

**This is not a suggestion. This is not a guideline. This is a MANDATORY RULE.**

**Every component, every page, every UI element MUST use design tokens.**

**NO EXCEPTIONS. NO COMPROMISES. NO HARDCODED VALUES.**

---

**By following these rules, we maintain the integrity of our design system and ensure consistency across all components.**

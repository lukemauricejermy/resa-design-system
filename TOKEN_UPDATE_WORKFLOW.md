# Token Update Workflow

## Overview
This document outlines the standardized process to follow every time we update design tokens in the Resa Design System. Following this workflow ensures that Storybook always reflects the latest changes and you can visually verify everything is working correctly.

## Prerequisites
- You have the latest Figma JSON export
- You're in the `resa-design-system` project directory

## Step-by-Step Workflow

### 1. Update Token Source
- Place the new Figma JSON export in `packages/tokens/scripts/figma-data.json`
- Or update the JSON data directly in `packages/tokens/scripts/process-figma.js`

### 2. Regenerate Tokens
```bash
cd packages/tokens
npm run build:tokens
```
This will:
- Parse the Figma JSON
- Generate `packages/tokens/dist/figma-tokens.css`
- Generate `packages/tokens/dist/figma-tokens.json`

### 3. Verify Token Generation
Check that the generated files contain:
- All expected token categories (colors, typography, spacing, layout, borders, effects)
- Proper CSS custom property references (semantic tokens should reference primitives)
- Responsive media queries for tablet and mobile
- No raw hex values in semantic tokens (they should use `var(--color-primitive-token)`)

### 4. Update Storybook Stories (if needed)
If new token categories or significant changes were made:
- Update `packages/storybook/src/stories/DesignTokens.stories.tsx`
- Add new stories for new token categories
- Update existing stories to reflect new structure

### 5. Build and Test Storybook
```bash
cd packages/storybook
npm run storybook
```
Navigate to the Design Tokens section and verify:
- All tokens are displaying correctly
- Semantic colors show proper primitive references
- Responsive tokens work across breakpoints
- Dark/light mode switching works
- No console errors

### 6. Visual Verification Checklist
- [ ] Colors display the correct hex values
- [ ] Semantic colors show "References: --color-primitive-token" format
- [ ] Typography scales are correct for all breakpoints
- [ ] Spacing values are accurate
- [ ] Border radius and width values are correct
- [ ] Layout grid values are accurate
- [ ] Responsive media queries work (test viewport resizing)
- [ ] Theme toggle works between light/dark modes

### 7. Commit Changes
```bash
git add .
git commit -m "feat: update design tokens - [brief description of changes]"
```

## Common Issues & Solutions

### Semantic Colors Showing Hex Instead of References
- Check that `generateSemanticColorsCSS()` is being called in the parser
- Verify the `referenceMap` in Storybook matches the generated CSS
- Ensure `convertHexToCSSReference()` is working correctly

### Missing Token Categories
- Check that all parsing functions are being called in `generateCSSVariables()`
- Verify the Figma JSON structure matches expected format
- Check for typos in category names

### Responsive Tokens Not Working
- Verify `generateResponsiveCSS()` is being called
- Check that breakpoint conditions are correct
- Ensure media query syntax is valid

### Storybook Not Updating
- Clear browser cache
- Restart Storybook process
- Check for JavaScript errors in console
- Verify file paths are correct

## Automation Scripts

### Quick Token Update
```bash
# From project root
npm run update:tokens
```

### Full Token + Storybook Update
```bash
# From project root
npm run update:all
```

## File Locations
- **Token Parser**: `packages/tokens/scripts/figma-parser.js`
- **Token Processor**: `packages/tokens/scripts/process-figma.js`
- **Generated CSS**: `packages/tokens/dist/figma-tokens.css`
- **Generated JSON**: `packages/tokens/dist/figma-tokens.json`
- **Storybook Stories**: `packages/storybook/src/stories/DesignTokens.stories.tsx`
- **Storybook CSS**: `packages/storybook/src/storybook.css`

## Best Practices
1. **Always test in Storybook** before committing changes
2. **Keep the referenceMap updated** when adding new semantic colors
3. **Use descriptive commit messages** that explain what changed
4. **Test responsive behavior** across different viewport sizes
5. **Verify both light and dark modes** work correctly
6. **Check console for errors** during development

## Need Help?
If you encounter issues:
1. Check the console for error messages
2. Verify all files are in the correct locations
3. Ensure all dependencies are installed
4. Check that Storybook is running from the correct directory
5. Review the generated CSS and JSON files for anomalies


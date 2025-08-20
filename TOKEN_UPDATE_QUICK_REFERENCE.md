# 🚀 Token Update Quick Reference

## Quick Commands
```bash
# Update tokens from Figma
npm run update:tokens

# Start Storybook to verify
npm run update:storybook

# Get workflow help
npm run workflow:help
```

## Essential Workflow (3 Steps)
1. **Update Source** → Place new Figma JSON in `packages/tokens/scripts/`
2. **Regenerate** → `npm run update:tokens`
3. **Verify** → `npm run update:storybook` → Check Design Tokens section

## What to Check in Storybook
- [ ] Colors show correct hex values
- [ ] Semantic colors show "References: --color-primitive-token"
- [ ] Responsive tokens work (resize viewport)
- [ ] Dark/light mode toggle works
- [ ] No console errors

## Common Issues
- **Hex values instead of references?** → Check `generateSemanticColorsCSS()` in parser
- **Missing tokens?** → Verify all parsing functions are called
- **Storybook not updating?** → Restart process, check file paths

## File Locations
- **Parser**: `packages/tokens/scripts/figma-parser.js`
- **Generated CSS**: `packages/tokens/dist/figma-tokens.css`
- **Stories**: `packages/storybook/src/stories/DesignTokens.stories.tsx`

---
📖 **Full workflow**: See `TOKEN_UPDATE_WORKFLOW.md`
🔧 **Need help?** Run `npm run workflow:help`


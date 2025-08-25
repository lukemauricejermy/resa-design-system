# Resa Design System

A comprehensive design system built with React, TypeScript, and Tailwind CSS, featuring design tokens that perfectly match Figma specifications.

## 🎯 Overview

The Resa Design System provides a complete set of UI components built exclusively with design tokens. No hardcoded values are allowed - every color, spacing, typography, and layout decision comes from our centralized design token system.

## 🏗️ Architecture

```
resa-design-system/
├── packages/
│   ├── components/          # React UI Components
│   ├── tokens/             # Design Token Definitions
│   ├── storybook/          # Component Documentation
│   └── storybook-deploy/   # Deployed Storybook
├── tools/                   # Build and Development Tools
└── docs/                    # Documentation
```

## 🎨 Design Tokens

Our design system is built on a comprehensive token foundation:

- **Colors**: Semantic color system with light/dark theme support
- **Typography**: Complete font scale with predefined type styles
- **Spacing**: Consistent spacing scale from 2px to 240px
- **Layout**: Responsive breakpoints and grid system
- **Components**: Component-specific tokens for consistent sizing

### Token Philosophy

1. **No Hardcoded Values**: Every visual property must reference a design token
2. **Semantic Naming**: Tokens describe their purpose, not their appearance
3. **Theme Support**: Automatic light/dark theme switching via CSS custom properties
4. **Figma Parity**: Tokens exactly match Figma design specifications

## 🧩 Components

### Avatar
Circular avatar component with support for images, fallback initials, and multiple sizes.

```tsx
import { Avatar } from '@resa/components';

<Avatar 
  src="/user.jpg" 
  alt="User avatar" 
  size="lg" 
  fallback="JD"
/>
```

### Button
Versatile button component with 8 variants, 3 sizes, and icon support.

```tsx
import { Button } from '@resa/components';

<Button 
  variant="primary" 
  size="md"
  leadingIcon={<DownloadIcon />}
>
  Download
</Button>
```

### Checkbox
Accessible checkbox with support for indeterminate state and proper labeling.

```tsx
import { Checkbox } from '@resa/components';

<Checkbox 
  checked={isChecked}
  onChange={setIsChecked}
  indeterminate={isIndeterminate}
/>
```

## 🚀 Getting Started

### Installation

```bash
# Clone the repository
git clone https://github.com/your-org/resa-design-system.git
cd resa-design-system

# Install dependencies
npm install

# Start Storybook
npm run storybook
```

### Using Components

```tsx
import { Avatar, Button, Checkbox } from '@resa/components';

function MyComponent() {
  return (
    <div className="space-y-4">
      <Avatar size="lg" fallback="JD" />
      <Button variant="primary">Click me</Button>
      <Checkbox checked={true} />
    </div>
  );
}
```

## 🎭 Storybook

Our comprehensive Storybook documentation includes:

- **Interactive Examples**: All components with live controls
- **Design Token Reference**: Visual examples of our token system
- **Integration Examples**: Components working together in real scenarios
- **Accessibility**: ARIA guidelines and best practices

Visit the deployed Storybook: [https://your-storybook-url.com](https://your-storybook-url.com)

## 🛠️ Development

### Building Components

```bash
cd packages/components
npm run build
```

### Adding New Components

1. Create component in `packages/components/src/components/`
2. Use only design tokens - no hardcoded values
3. Add comprehensive Storybook stories
4. Update package exports

### Design Token Workflow

1. **Update Figma**: Make design changes in Figma
2. **Export Tokens**: Use our Figma token export tools
3. **Generate CSS**: Tokens automatically generate CSS custom properties
4. **Update Components**: Components automatically use new tokens

## 🎨 Design Principles

- **Consistency**: All components follow the same design language
- **Accessibility**: WCAG 2.1 AA compliance built-in
- **Performance**: Optimized for modern web applications
- **Maintainability**: Single source of truth for all design decisions

## 📱 Responsive Design

Our components automatically adapt to different screen sizes using our responsive design tokens:

- **Mobile First**: Components designed for mobile, enhanced for desktop
- **Breakpoint System**: Consistent breakpoints across all components
- **Fluid Typography**: Text scales appropriately across devices

## 🌙 Theme Support

Automatic theme switching with CSS custom properties:

```css
:root {
  --color-semantic-content-primary: #1a1a1a; /* Light theme */
}

[data-theme="dark"] {
  --color-semantic-content-primary: #ffffff; /* Dark theme */
}
```

## 🤝 Contributing

1. **Fork** the repository
2. **Create** a feature branch
3. **Follow** our design token guidelines
4. **Test** with Storybook
5. **Submit** a pull request

### Contribution Guidelines

- **No Hardcoded Values**: All styling must use design tokens
- **Accessibility First**: Components must be accessible by default
- **Comprehensive Stories**: Every component needs Storybook documentation
- **TypeScript**: Full type safety for all components

## 📄 License

MIT License - see [LICENSE](LICENSE) file for details.

## 🆘 Support

- **Documentation**: [Storybook](https://your-storybook-url.com)
- **Issues**: [GitHub Issues](https://github.com/your-org/resa-design-system/issues)
- **Discussions**: [GitHub Discussions](https://github.com/your-org/resa-design-system/discussions)

## 🔮 Roadmap

- [ ] Additional component library expansion
- [ ] Advanced theming system
- [ ] Animation token system
- [ ] Design token validation tools
- [ ] Figma plugin for token management

---

Built with ❤️ by the Resa Design System team

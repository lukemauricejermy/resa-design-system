# @resa/components

This package contains the core UI components for the Resa Design System. All components are built using design tokens and follow the Figma specification exactly.

## Components

### Avatar
A circular avatar component that displays user images or fallback initials/icons.

**Props:**
- `src`: Image source URL
- `alt`: Alt text for the image
- `fallback`: Text to display when no image is provided
- `size`: Size variant ('xs', 'sm', 'md', 'lg', 'xl')
- `className`: Additional CSS classes

**Sizes:**
- `xs`: 24px × 24px
- `sm`: 32px × 32px
- `md`: 40px × 40px (default)
- `lg`: 48px × 48px
- `xl`: 64px × 64px

### Button
A versatile button component with multiple variants and sizes.

**Props:**
- `variant`: Button style ('primary', 'secondary', 'tertiary', 'ghost', 'success', 'warning', 'error', 'info')
- `size`: Button size ('sm', 'md', 'lg')
- `children`: Button content
- `onClick`: Click handler
- `disabled`: Disabled state
- `type`: Button type ('button', 'submit', 'reset')
- `leadingIcon`: Icon before text
- `trailingIcon`: Icon after text

**Variants:**
- `primary`: Primary action button
- `secondary`: Secondary action button
- `tertiary`: Tertiary action button
- `ghost`: Minimal button
- `success`: Success state button
- `warning`: Warning state button
- `error`: Error state button
- `info`: Information state button

**Sizes:**
- `sm`: 32px height
- `md`: 40px height (default)
- `lg`: 48px height

### Checkbox
A checkbox input component with support for indeterminate state.

**Props:**
- `checked`: Checked state
- `indeterminate`: Indeterminate state
- `disabled`: Disabled state
- `onChange`: Change handler
- `id`: Input ID
- `name`: Input name
- `value`: Input value

## Design Tokens

All components use design tokens from the Resa Design System. No hardcoded values are allowed. The components automatically adapt to light/dark themes through CSS custom properties.

## Usage

```tsx
import { Avatar, Button, Checkbox } from '@resa/components';

function MyComponent() {
  return (
    <div>
      <Avatar 
        src="/user.jpg" 
        alt="User avatar" 
        size="lg" 
      />
      
      <Button 
        variant="primary" 
        size="md"
        onClick={() => console.log('clicked')}
      >
        Click me
      </Button>
      
      <Checkbox 
        checked={true}
        onChange={(checked) => console.log(checked)}
      />
    </div>
  );
}
```

## Installation

```bash
npm install @resa/components
```

## Development

```bash
# Install dependencies
npm install

# Build components
npm run build

# Development mode with watch
npm run dev
```

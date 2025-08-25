import type { Meta, StoryObj } from '@storybook/react';
import { Button } from '../components/button';

const meta: Meta<typeof Button> = {
  title: 'Components/Button',
  component: Button,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'A versatile button component with multiple variants and sizes. Uses design tokens for all styling.',
      },
    },
  },
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['primary', 'secondary', 'tertiary', 'ghost', 'success', 'warning', 'error', 'info'],
      description: 'Button style variant',
    },
    size: {
      control: { type: 'select' },
      options: ['sm', 'md', 'lg'],
      description: 'Button size',
    },
    children: {
      control: { type: 'text' },
      description: 'Button content',
    },
    disabled: {
      control: { type: 'boolean' },
      description: 'Disabled state',
    },
    type: {
      control: { type: 'select' },
      options: ['button', 'submit', 'reset'],
      description: 'Button type',
    },
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: 'Button',
    variant: 'primary',
    size: 'md',
  },
};

export const Primary: Story = {
  args: {
    children: 'Primary Button',
    variant: 'primary',
    size: 'md',
  },
};

export const Secondary: Story = {
  args: {
    children: 'Secondary Button',
    variant: 'secondary',
    size: 'md',
  },
};

export const Tertiary: Story = {
  args: {
    children: 'Tertiary Button',
    variant: 'tertiary',
    size: 'md',
  },
};

export const Ghost: Story = {
  args: {
    children: 'Ghost Button',
    variant: 'ghost',
    size: 'md',
  },
};

export const Success: Story = {
  args: {
    children: 'Success Button',
    variant: 'success',
    size: 'md',
  },
};

export const Warning: Story = {
  args: {
    children: 'Warning Button',
    variant: 'warning',
    size: 'md',
  },
};

export const Error: Story = {
  args: {
    children: 'Error Button',
    variant: 'error',
    size: 'md',
  },
};

export const Info: Story = {
  args: {
    children: 'Info Button',
    variant: 'info',
    size: 'md',
  },
};

export const Small: Story = {
  args: {
    children: 'Small Button',
    variant: 'primary',
    size: 'sm',
  },
};

export const Medium: Story = {
  args: {
    children: 'Medium Button',
    variant: 'primary',
    size: 'md',
  },
};

export const Large: Story = {
  args: {
    children: 'Large Button',
    variant: 'primary',
    size: 'lg',
  },
};

export const Disabled: Story = {
  args: {
    children: 'Disabled Button',
    variant: 'primary',
    size: 'md',
    disabled: true,
  },
};

export const WithLeadingIcon: Story = {
  args: {
    children: 'Button with Icon',
    variant: 'primary',
    size: 'md',
    leadingIcon: (
      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.293l-3-3a1 1 0 00-1.414 0l-3 3a1 1 0 001.414 1.414L9 9.414V13a1 1 0 102 0V9.414l1.293 1.293a1 1 0 001.414-1.414z" clipRule="evenodd" />
      </svg>
    ),
  },
};

export const WithTrailingIcon: Story = {
  args: {
    children: 'Button with Icon',
    variant: 'primary',
    size: 'md',
    trailingIcon: (
      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.293l-3-3a1 1 0 00-1.414 0l-3 3a1 1 0 001.414 1.414L9 9.414V13a1 1 0 102 0V9.414l1.293 1.293a1 1 0 001.414-1.414z" clipRule="evenodd" />
      </svg>
    ),
  },
};

export const WithBothIcons: Story = {
  args: {
    children: 'Button with Icons',
    variant: 'primary',
    size: 'md',
    leadingIcon: (
      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.293l-3-3a1 1 0 00-1.414 0l-3 3a1 1 0 001.414 1.414L9 9.414V13a1 1 0 102 0V9.414l1.293 1.293a1 1 0 001.414-1.414z" clipRule="evenodd" />
      </svg>
    ),
    trailingIcon: (
      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.293l-3-3a1 1 0 00-1.414 0l-3 3a1 1 0 001.414 1.414L9 9.414V13a1 1 0 102 0V9.414l1.293 1.293a1 1 0 001.414-1.414z" clipRule="evenodd" />
      </svg>
    ),
  },
};

export const VariantsComparison: Story = {
  render: () => (
    <div className="flex flex-wrap gap-4">
      <Button variant="primary">Primary</Button>
      <Button variant="secondary">Secondary</Button>
      <Button variant="tertiary">Tertiary</Button>
      <Button variant="ghost">Ghost</Button>
      <Button variant="success">Success</Button>
      <Button variant="warning">Warning</Button>
      <Button variant="error">Error</Button>
      <Button variant="info">Info</Button>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'All button variants for comparison.',
      },
    },
  },
};

export const SizesComparison: Story = {
  render: () => (
    <div className="flex items-center gap-4">
      <Button variant="primary" size="sm">Small</Button>
      <Button variant="primary" size="md">Medium</Button>
      <Button variant="primary" size="lg">Large</Button>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'All button sizes for comparison.',
      },
    },
  },
};

export const InteractiveExample: Story = {
  render: () => {
    const handleClick = (variant: string) => {
      console.log(`${variant} button clicked!`);
    };

    return (
      <div className="space-y-4">
        <div className="flex flex-wrap gap-4">
          <Button variant="primary" onClick={() => handleClick('Primary')}>
            Primary Action
          </Button>
          <Button variant="secondary" onClick={() => handleClick('Secondary')}>
            Secondary Action
          </Button>
          <Button variant="tertiary" onClick={() => handleClick('Tertiary')}>
            Tertiary Action
          </Button>
        </div>
        <div className="flex flex-wrap gap-4">
          <Button variant="success" onClick={() => handleClick('Success')}>
            Save Changes
          </Button>
          <Button variant="warning" onClick={() => handleClick('Warning')}>
            Review Changes
          </Button>
          <Button variant="error" onClick={() => handleClick('Error')}>
            Delete Item
          </Button>
        </div>
      </div>
    );
  },
  parameters: {
    docs: {
      description: {
        story: 'Interactive buttons with click handlers.',
      },
    },
  },
};

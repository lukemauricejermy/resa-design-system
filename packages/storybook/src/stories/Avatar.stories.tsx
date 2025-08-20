import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Avatar } from '../components/Avatar';

const meta: Meta<typeof Avatar> = {
  title: 'Components/Avatar',
  component: Avatar,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'Avatar component that displays user images or initials using design tokens for consistent styling.'
      }
    }
  },
  argTypes: {
    size: {
      control: { type: 'select' },
      options: ['xs', 'sm', 'md', 'lg', 'xl'],
      description: 'Size variant of the avatar'
    },
    initials: {
      control: { type: 'text' },
      description: 'Initials to display when no image is provided'
    },
    src: {
      control: { type: 'text' },
      description: 'Source URL for the avatar image'
    },
    alt: {
      control: { type: 'text' },
      description: 'Alt text for accessibility'
    }
  }
};

export default meta;
type Story = StoryObj<typeof meta>;

// Use public folder path for the avatar image
const avatarImage = '/avatar-image.png';

export const Default: Story = {
  args: {
    initials: 'LJ'
  }
};

export const WithImage: Story = {
  args: {
    src: avatarImage,
    alt: 'User avatar'
  }
};

export const ExtraSmall: Story = {
  args: {
    size: 'xs',
    initials: 'AB'
  }
};

export const Small: Story = {
  args: {
    size: 'sm',
    initials: 'CD'
  }
};

export const Medium: Story = {
  args: {
    size: 'md',
    initials: 'EF'
  }
};

export const Large: Story = {
  args: {
    size: 'lg',
    initials: 'GH'
  }
};

export const ExtraLarge: Story = {
  args: {
    size: 'xl',
    initials: 'IJ'
  }
};

export const AllSizes: Story = {
  render: () => (
    <div className="flex items-center gap-4">
      <Avatar size="xs" initials="XS" />
      <Avatar size="sm" initials="SM" />
      <Avatar size="md" initials="MD" />
      <Avatar size="lg" initials="LG" />
      <Avatar size="xl" initials="XL" />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'All available size variants of the Avatar component.'
      }
    }
  }
};

export const WithDifferentInitials: Story = {
  render: () => (
    <div className="flex items-center gap-4">
      <Avatar initials="AB" />
      <Avatar initials="CD" />
      <Avatar initials="EF" />
      <Avatar initials="GH" />
      <Avatar initials="IJ" />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Avatar components with different initials.'
      }
    }
  }
};

export const ImageVariants: Story = {
  render: () => (
    <div className="flex items-center gap-4">
      <Avatar src={avatarImage} alt="User avatar" size="xs" />
      <Avatar src={avatarImage} alt="User avatar" size="sm" />
      <Avatar src={avatarImage} alt="User avatar" size="md" />
      <Avatar src={avatarImage} alt="User avatar" size="lg" />
      <Avatar src={avatarImage} alt="User avatar" size="xl" />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Avatar components with images at different sizes.'
      }
    }
  }
};

export const TokenReference: Story = {
  render: () => (
    <div className="space-y-4">
      <div className="p-4 border border-[var(--color-border-default)] rounded-lg">
        <h3 className="text-[var(--color-content-primary)] font-medium mb-2">
          Design Token References Used:
        </h3>
        <ul className="text-[var(--color-content-secondary)] space-y-1 text-sm">
          <li>• Background: <code className="bg-[var(--color-fill-secondary)] px-1 rounded">var(--color-fill-info)</code></li>
          <li>• Border: <code className="bg-[var(--color-fill-secondary)] px-1 rounded">var(--color-border-info)</code></li>
          <li>• Text: <code className="bg-[var(--color-fill-secondary)] px-1 rounded">var(--color-content-info)</code></li>
          <li>• Font Family: <code className="bg-[var(--color-fill-secondary)] px-1 rounded">var(--font-family-primary)</code></li>
          <li>• Font Size: <code className="bg-[var(--color-fill-secondary)] px-1 rounded">var(--font-size-3xs)</code></li>
          <li>• Font Weight: <code className="bg-[var(--color-fill-secondary)] px-1 rounded">var(--font-weight-medium)</code></li>
          <li>• Line Height: <code className="bg-[var(--color-fill-secondary)] px-1 rounded">var(--line-height-normal)</code></li>
        </ul>
      </div>
      
      <div className="flex items-center gap-4">
        <Avatar initials="TK" />
        <Avatar src={avatarImage} alt="Token Example" />
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'This story shows the design token references used in the Avatar component. All styling is derived from the design system tokens, ensuring consistency and maintainability.'
      }
    }
  }
};

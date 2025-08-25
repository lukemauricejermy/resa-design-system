import type { Meta, StoryObj } from '@storybook/react';
import { Avatar } from '../components/avatar';

const meta: Meta<typeof Avatar> = {
  title: 'Components/Avatar',
  component: Avatar,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'A circular avatar component that displays user images or fallback initials/icons. Uses design tokens for all styling.',
      },
    },
  },
  argTypes: {
    size: {
      control: { type: 'select' },
      options: ['xs', 'sm', 'md', 'lg', 'xl'],
      description: 'Size variant of the avatar',
    },
    src: {
      control: { type: 'text' },
      description: 'Image source URL',
    },
    fallback: {
      control: { type: 'text' },
      description: 'Text to display when no image is provided',
    },
    alt: {
      control: { type: 'text' },
      description: 'Alt text for accessibility',
    },
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    size: 'md',
  },
};

export const WithImage: Story = {
  args: {
    src: 'https://placekitten.com/200/200',
    alt: 'User avatar',
    size: 'md',
  },
};

export const WithFallback: Story = {
  args: {
    fallback: 'JD',
    size: 'md',
  },
};

export const ExtraSmall: Story = {
  args: {
    size: 'xs',
    fallback: 'XS',
  },
};

export const Small: Story = {
  args: {
    size: 'sm',
    fallback: 'SM',
  },
};

export const Medium: Story = {
  args: {
    size: 'md',
    fallback: 'MD',
  },
};

export const Large: Story = {
  args: {
    size: 'lg',
    fallback: 'LG',
  },
};

export const ExtraLarge: Story = {
  args: {
    size: 'xl',
    fallback: 'XL',
  },
};

export const SizeComparison: Story = {
  render: () => (
    <div className="flex items-center gap-4">
      <Avatar size="xs" fallback="XS" />
      <Avatar size="sm" fallback="SM" />
      <Avatar size="md" fallback="MD" />
      <Avatar size="lg" fallback="LG" />
      <Avatar size="xl" fallback="XL" />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'All available avatar sizes for comparison.',
      },
    },
  },
};

export const WithImageSizes: Story = {
  render: () => (
    <div className="flex items-center gap-4">
      <Avatar size="xs" src="https://placekitten.com/100/100" alt="Small avatar" />
      <Avatar size="sm" src="https://placekitten.com/150/150" alt="Small avatar" />
      <Avatar size="md" src="https://placekitten.com/200/200" alt="Medium avatar" />
      <Avatar size="lg" src="https://placekitten.com/250/250" alt="Large avatar" />
      <Avatar size="xl" src="https://placekitten.com/300/300" alt="Extra large avatar" />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Avatar sizes with actual images.',
      },
    },
  },
};

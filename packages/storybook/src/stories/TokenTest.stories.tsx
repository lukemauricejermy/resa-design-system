import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { TokenTest } from '../components/TokenTest';

const meta: Meta<typeof TokenTest> = {
  title: 'Testing/TokenTest',
  component: TokenTest,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'Test component to verify that design tokens are loading correctly in Storybook.'
      }
    }
  }
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {}
};

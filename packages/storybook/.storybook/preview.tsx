import React from 'react';
import '../src/figma-tokens.css';
import '../src/tokens.css';
import '../src/storybook.css';

/** @type { import('@storybook/react').Preview } */
const preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  decorators: [
    (Story) => (
      <Story />
    ),
  ],
};

export default preview;

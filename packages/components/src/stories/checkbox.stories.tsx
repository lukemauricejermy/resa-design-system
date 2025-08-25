import type { Meta, StoryObj } from '@storybook/react';
import { Checkbox } from '../components/checkbox';
import { useState } from 'react';

const meta: Meta<typeof Checkbox> = {
  title: 'Components/Checkbox',
  component: Checkbox,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'A checkbox input component with support for indeterminate state. Uses design tokens for all styling.',
      },
    },
  },
  argTypes: {
    checked: {
      control: { type: 'boolean' },
      description: 'Checked state of the checkbox',
    },
    indeterminate: {
      control: { type: 'boolean' },
      description: 'Indeterminate state of the checkbox',
    },
    disabled: {
      control: { type: 'boolean' },
      description: 'Disabled state of the checkbox',
    },
    onChange: {
      description: 'Change handler function',
    },
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    checked: false,
  },
};

export const Checked: Story = {
  args: {
    checked: true,
  },
};

export const Indeterminate: Story = {
  args: {
    indeterminate: true,
  },
};

export const Disabled: Story = {
  args: {
    checked: false,
    disabled: true,
  },
};

export const DisabledChecked: Story = {
  args: {
    checked: true,
    disabled: true,
  },
};

export const DisabledIndeterminate: Story = {
  args: {
    indeterminate: true,
    disabled: true,
  },
};

export const Interactive: Story = {
  render: () => {
    const [checked, setChecked] = useState(false);
    return (
      <Checkbox
        checked={checked}
        onChange={setChecked}
      />
    );
  },
  parameters: {
    docs: {
      description: {
        story: 'Interactive checkbox that you can click to toggle.',
      },
    },
  },
};

export const WithLabel: Story = {
  render: () => {
    const [checked, setChecked] = useState(false);
    return (
      <label className="flex items-center gap-2 cursor-pointer">
        <Checkbox
          checked={checked}
          onChange={setChecked}
        />
        <span className="text-content-primary">Accept terms and conditions</span>
      </label>
    );
  },
  parameters: {
    docs: {
      description: {
        story: 'Checkbox with a label for better UX.',
      },
    },
  },
};

export const StatesComparison: Story = {
  render: () => (
    <div className="flex flex-col gap-4">
      <div className="flex items-center gap-2">
        <Checkbox checked={false} />
        <span className="text-content-primary">Unchecked</span>
      </div>
      <div className="flex items-center gap-2">
        <Checkbox checked={true} />
        <span className="text-content-primary">Checked</span>
      </div>
      <div className="flex items-center gap-2">
        <Checkbox indeterminate={true} />
        <span className="text-content-primary">Indeterminate</span>
      </div>
      <div className="flex items-center gap-2">
        <Checkbox checked={false} disabled={true} />
        <span className="text-content-disabled">Disabled unchecked</span>
      </div>
      <div className="flex items-center gap-2">
        <Checkbox checked={true} disabled={true} />
        <span className="text-content-disabled">Disabled checked</span>
      </div>
      <div className="flex items-center gap-2">
        <Checkbox indeterminate={true} disabled={true} />
        <span className="text-content-disabled">Disabled indeterminate</span>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'All checkbox states for comparison.',
      },
    },
  },
};

export const FormExample: Story = {
  render: () => {
    const [preferences, setPreferences] = useState({
      email: false,
      sms: true,
      push: false,
      marketing: false,
    });

    const handleChange = (key: keyof typeof preferences) => (checked: boolean) => {
      setPreferences(prev => ({ ...prev, [key]: checked }));
    };

    return (
      <div className="space-y-4 p-4 border border-border-default rounded-xs">
        <h3 className="text-title-small font-semibold text-content-primary">Notification Preferences</h3>
        <div className="space-y-3">
          <label className="flex items-center gap-2 cursor-pointer">
            <Checkbox
              checked={preferences.email}
              onChange={handleChange('email')}
            />
            <span className="text-content-primary">Email notifications</span>
          </label>
          <label className="flex items-center gap-2 cursor-pointer">
            <Checkbox
              checked={preferences.sms}
              onChange={handleChange('sms')}
            />
            <span className="text-content-primary">SMS notifications</span>
          </label>
          <label className="flex items-center gap-2 cursor-pointer">
            <Checkbox
              checked={preferences.push}
              onChange={handleChange('push')}
            />
            <span className="text-content-primary">Push notifications</span>
          </label>
          <label className="flex items-center gap-2 cursor-pointer">
            <Checkbox
              checked={preferences.marketing}
              onChange={handleChange('marketing')}
            />
            <span className="text-content-primary">Marketing communications</span>
          </label>
        </div>
      </div>
    );
  },
  parameters: {
    docs: {
      description: {
        story: 'Example of checkboxes in a form context.',
      },
    },
  },
};

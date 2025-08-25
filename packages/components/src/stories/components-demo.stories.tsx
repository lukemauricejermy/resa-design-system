import type { Meta, StoryObj } from '@storybook/react';
import { Avatar } from '../components/avatar';
import { Button } from '../components/button';
import { Checkbox } from '../components/checkbox';
import { useState } from 'react';

const meta: Meta = {
  title: 'Components/All Components Demo',
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: 'A comprehensive demonstration of all components working together. Shows how the design system components integrate seamlessly.',
      },
    },
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const ComponentShowcase: Story = {
  render: () => {
    const [checkboxStates, setCheckboxStates] = useState({
      notifications: true,
      marketing: false,
      updates: true,
    });

    const handleCheckboxChange = (key: keyof typeof checkboxStates) => (checked: boolean) => {
      setCheckboxStates(prev => ({ ...prev, [key]: checked }));
    };

    return (
      <div className="max-w-4xl mx-auto p-6 space-y-8">
        <div className="text-center">
          <h1 className="text-display-small text-content-primary mb-2">
            Resa Design System
          </h1>
          <p className="text-body-large text-content-secondary">
            A comprehensive collection of components built with design tokens
          </p>
        </div>

        {/* Avatar Section */}
        <section className="space-y-4">
          <h2 className="text-heading-medium text-content-primary">Avatar Components</h2>
          <div className="flex items-center gap-6 p-4 bg-surface-secondary rounded-xs">
            <div className="text-center">
              <Avatar size="xs" fallback="XS" />
              <p className="text-label-extra-small text-content-secondary mt-2">Extra Small</p>
            </div>
            <div className="text-center">
              <Avatar size="sm" fallback="SM" />
              <p className="text-label-extra-small text-content-secondary mt-2">Small</p>
            </div>
            <div className="text-center">
              <Avatar size="md" fallback="MD" />
              <p className="text-label-extra-small text-content-secondary mt-2">Medium</p>
            </div>
            <div className="text-center">
              <Avatar size="lg" fallback="LG" />
              <p className="text-label-extra-small text-content-secondary mt-2">Large</p>
            </div>
            <div className="text-center">
              <Avatar size="xl" fallback="XL" />
              <p className="text-label-extra-small text-content-secondary mt-2">Extra Large</p>
            </div>
          </div>
          
          <div className="flex items-center gap-6 p-4 bg-surface-secondary rounded-xs">
            <div className="text-center">
              <Avatar size="md" src="https://placekitten.com/200/200" alt="User avatar" />
              <p className="text-label-extra-small text-content-secondary mt-2">With Image</p>
            </div>
            <div className="text-center">
              <Avatar size="md" fallback="JD" />
              <p className="text-label-extra-small text-content-secondary mt-2">With Initials</p>
            </div>
            <div className="text-center">
              <Avatar size="md" />
              <p className="text-label-extra-small text-content-secondary mt-2">Default Icon</p>
            </div>
          </div>
        </section>

        {/* Button Section */}
        <section className="space-y-4">
          <h2 className="text-heading-medium text-content-primary">Button Components</h2>
          
          <div className="space-y-4">
            <div>
              <h3 className="text-title-medium text-content-secondary mb-3">Variants</h3>
              <div className="flex flex-wrap gap-3">
                <Button variant="primary">Primary</Button>
                <Button variant="secondary">Secondary</Button>
                <Button variant="tertiary">Tertiary</Button>
                <Button variant="ghost">Ghost</Button>
                <Button variant="success">Success</Button>
                <Button variant="warning">Warning</Button>
                <Button variant="error">Error</Button>
                <Button variant="info">Info</Button>
              </div>
            </div>

            <div>
              <h3 className="text-title-medium text-content-secondary mb-3">Sizes</h3>
              <div className="flex items-center gap-3">
                <Button variant="primary" size="sm">Small</Button>
                <Button variant="primary" size="md">Medium</Button>
                <Button variant="primary" size="lg">Large</Button>
              </div>
            </div>

            <div>
              <h3 className="text-title-medium text-content-secondary mb-3">With Icons</h3>
              <div className="flex flex-wrap gap-3">
                <Button 
                  variant="primary" 
                  leadingIcon={
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.293l-3-3a1 1 0 00-1.414 0l-3 3a1 1 0 001.414 1.414L9 9.414V13a1 1 0 102 0V9.414l1.293 1.293a1 1 0 001.414-1.414z" clipRule="evenodd" />
                    </svg>
                  }
                >
                  Download
                </Button>
                <Button 
                  variant="secondary" 
                  trailingIcon={
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  }
                >
                  Continue
                </Button>
              </div>
            </div>

            <div>
              <h3 className="text-title-medium text-content-secondary mb-3">States</h3>
              <div className="flex flex-wrap gap-3">
                <Button variant="primary">Normal</Button>
                <Button variant="primary" disabled>Disabled</Button>
              </div>
            </div>
          </div>
        </section>

        {/* Checkbox Section */}
        <section className="space-y-4">
          <h2 className="text-heading-medium text-content-primary">Checkbox Components</h2>
          
          <div className="space-y-4">
            <div>
              <h3 className="text-title-medium text-content-secondary mb-3">States</h3>
              <div className="flex flex-wrap gap-6">
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
                  <span className="text-content-disabled">Disabled</span>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-title-medium text-content-secondary mb-3">Interactive Example</h3>
              <div className="p-4 bg-surface-secondary rounded-xs space-y-3">
                <label className="flex items-center gap-2 cursor-pointer">
                  <Checkbox
                    checked={checkboxStates.notifications}
                    onChange={handleCheckboxChange('notifications')}
                  />
                  <span className="text-content-primary">Email notifications</span>
                </label>
                <label className="flex items-center gap-2 cursor-pointer">
                  <Checkbox
                    checked={checkboxStates.marketing}
                    onChange={handleCheckboxChange('marketing')}
                  />
                  <span className="text-content-primary">Marketing communications</span>
                </label>
                <label className="flex items-center gap-2 cursor-pointer">
                  <Checkbox
                    checked={checkboxStates.updates}
                    onChange={handleCheckboxChange('updates')}
                  />
                  <span className="text-content-primary">Product updates</span>
                </label>
              </div>
            </div>
          </div>
        </section>

        {/* Integration Example */}
        <section className="space-y-4">
          <h2 className="text-heading-medium text-content-primary">Integration Example</h2>
          
          <div className="p-6 bg-surface-secondary rounded-xs space-y-4">
            <div className="flex items-center gap-4">
              <Avatar size="lg" src="https://placekitten.com/200/200" alt="User profile" />
              <div className="flex-1">
                <h3 className="text-title-medium text-content-primary">User Profile</h3>
                <p className="text-body-small text-content-secondary">
                  Manage your account settings and preferences
                </p>
              </div>
            </div>
            
            <div className="space-y-3">
              <label className="flex items-center gap-2 cursor-pointer">
                <Checkbox checked={true} />
                <span className="text-content-primary">Two-factor authentication</span>
              </label>
              <label className="flex items-center gap-2 cursor-pointer">
                <Checkbox checked={false} />
                <span className="text-content-primary">Public profile</span>
              </label>
              <label className="flex items-center gap-2 cursor-pointer">
                <Checkbox checked={true} />
                <span className="text-content-primary">Email verification</span>
              </label>
            </div>
            
            <div className="flex gap-3 pt-2">
              <Button variant="primary">Save Changes</Button>
              <Button variant="secondary">Cancel</Button>
              <Button variant="error">Delete Account</Button>
            </div>
          </div>
        </section>

        {/* Design Token Reference */}
        <section className="space-y-4">
          <h2 className="text-heading-medium text-content-primary">Design Token Reference</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-4 bg-surface-secondary rounded-xs">
              <h3 className="text-title-small text-content-primary mb-3">Colors</h3>
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 bg-fill-primary rounded-xs"></div>
                  <span className="text-label-small text-content-secondary">Primary Fill</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 bg-fill-secondary rounded-xs"></div>
                  <span className="text-label-small text-content-secondary">Secondary Fill</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 bg-surface-primary rounded-xs border border-border-default"></div>
                  <span className="text-label-small text-content-secondary">Surface Primary</span>
                </div>
              </div>
            </div>
            
            <div className="p-4 bg-surface-secondary rounded-xs">
              <h3 className="text-title-small text-content-primary mb-3">Typography</h3>
              <div className="space-y-2">
                <p className="text-display-small text-content-primary">Display Small</p>
                <p className="text-heading-medium text-content-primary">Heading Medium</p>
                <p className="text-body-medium text-content-secondary">Body Medium</p>
                <p className="text-label-small text-content-tertiary">Label Small</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  },
  parameters: {
    docs: {
      description: {
        story: 'A comprehensive showcase of all components working together in various scenarios.',
      },
    },
  },
};

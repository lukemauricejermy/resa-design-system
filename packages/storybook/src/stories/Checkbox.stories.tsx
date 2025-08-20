import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Checkbox } from '../components/Checkbox';
import { ThemeLayout, ThemeCard, ThemeSection } from '../components/ThemeLayout';

const meta: Meta<typeof Checkbox> = {
  title: 'Components/Checkbox',
  component: Checkbox,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'A comprehensive checkbox component built with design tokens. Supports checked, unchecked, indeterminate, and disabled states with proper accessibility.',
      },
    },
  },
  argTypes: {
    checked: {
      control: { type: 'boolean' },
      description: 'Whether the checkbox is checked',
    },
    disabled: {
      control: { type: 'boolean' },
      description: 'Whether the checkbox is disabled',
    },
    indeterminate: {
      control: { type: 'boolean' },
      description: 'Whether the checkbox is in indeterminate state',
    },
    label: {
      control: { type: 'text' },
      description: 'Label text for the checkbox',
    },
    required: {
      control: { type: 'boolean' },
      description: 'Whether the checkbox is required',
    },
  },
  args: {
    checked: false,
    disabled: false,
    indeterminate: false,
    label: 'Checkbox label',
    required: false,
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

// Interactive playground - main landing page
export const InteractivePlayground: Story = {
  render: () => {
    const [checkboxes, setCheckboxes] = React.useState({
      default: false,
      checked: true,
      indeterminate: false,
      disabled: false,
      disabledChecked: true,
    });

    const handleChange = (key: string, checked: boolean) => {
      setCheckboxes(prev => ({ ...prev, [key]: checked }));
    };

    const resetAll = () => {
      setCheckboxes({
        default: false,
        checked: true,
        indeterminate: false,
        disabled: false,
        disabledChecked: true,
      });
    };

    return (
      <ThemeLayout 
        title="Checkbox Interactive Playground"
        description="Test all checkbox states and interactions with real-time updates. Toggle between light and dark themes to see how the component adapts."
      >
        <ThemeSection>
          <div style={{ 
            display: 'flex', 
            justifyContent: 'space-between', 
            alignItems: 'center',
            width: '100%',
            marginBottom: 'var(--spacing-s)'
          }}>
            <h2 style={{ 
              fontFamily: 'var(--font-family-primary)', 
              fontSize: 'var(--font-size-2xl)', 
              fontWeight: 'var(--font-weight-bold)',
              color: 'var(--color-content-primary)',
              margin: 0
            }}>
              Interactive States
            </h2>
            <button 
              onClick={resetAll}
              style={{
                padding: 'var(--spacing-xs) var(--spacing-s)',
                backgroundColor: 'var(--color-fill-tertiary)',
                border: 'var(--border-width-s) solid var(--color-border-default)',
                borderRadius: 'var(--border-radius-xs)',
                fontFamily: 'var(--font-family-primary)',
                fontSize: 'var(--font-size-xs)',
                cursor: 'pointer'
              }}
            >
              Reset All
            </button>
          </div>

        <div style={{ 
          display: 'flex', 
          flexDirection: 'column', 
          gap: 'var(--spacing-m)',
          width: '100%'
        }}>
          <ThemeCard title="Default State">
            <div style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}>
              <p style={{ 
                fontFamily: 'var(--font-family-primary)', 
                fontSize: 'var(--font-size-xs)',
                color: 'var(--color-content-secondary)',
                margin: 0
              }}>
                Unchecked checkbox with label
              </p>
              <Checkbox 
                checked={checkboxes.default}
                onChange={(checked) => handleChange('default', checked)}
                label="Accept terms and conditions"
              />
            </div>
          </ThemeCard>

          <ThemeCard title="Checked State">
            <div style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}>
              <p style={{ 
                fontFamily: 'var(--font-family-primary)', 
                fontSize: 'var(--font-size-xs)',
                color: 'var(--color-content-secondary)',
                margin: 0
              }}>
                Checked checkbox with active border
              </p>
              <Checkbox 
                checked={checkboxes.checked}
                onChange={(checked) => handleChange('checked', checked)}
                label="Subscribe to newsletter"
              />
            </div>
          </ThemeCard>

          <ThemeCard title="Indeterminate State">
            <div style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}>
              <p style={{ 
                fontFamily: 'var(--font-family-primary)', 
                fontSize: 'var(--font-size-xs)',
                color: 'var(--color-content-secondary)',
                margin: 0
              }}>
                Partially selected (e.g., parent in tree view)
              </p>
              <Checkbox 
                indeterminate={checkboxes.indeterminate}
                onChange={(checked) => handleChange('indeterminate', checked)}
                label="Select all items"
              />
            </div>
          </ThemeCard>

          <ThemeCard title="Disabled State">
            <div style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}>
              <p style={{ 
                fontFamily: 'var(--font-family-primary)', 
                fontSize: 'var(--font-size-xs)',
                color: 'var(--color-content-secondary)',
                margin: 0
              }}>
                Unchecked and disabled
              </p>
              <Checkbox 
                disabled={true}
                label="This option is not available"
              />
            </div>
          </ThemeCard>

          <ThemeCard title="Disabled Checked">
            <div style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}>
              <p style={{ 
                fontFamily: 'var(--font-family-primary)', 
                fontSize: 'var(--font-size-xs)',
                color: 'var(--color-content-secondary)',
                margin: 0
              }}>
                Checked but disabled
              </p>
              <Checkbox 
                checked={checkboxes.disabledChecked}
                disabled={true}
                label="Previously selected option"
              />
            </div>
          </ThemeCard>
        </div>

        <ThemeCard 
          title="How to Use This Playground"
          padding="var(--spacing-m)"
        >
          <ul style={{ 
            fontFamily: 'var(--font-family-primary)', 
            fontSize: 'var(--font-size-s)',
            margin: 0,
            paddingLeft: 'var(--spacing-m)',
            color: 'var(--color-content-info)'
          }}>
            <li><strong>Click Checkboxes:</strong> Toggle between checked and unchecked states</li>
            <li><strong>Test Interactions:</strong> See how different states behave</li>
            <li><strong>Compare States:</strong> Notice the visual differences between states</li>
            <li><strong>Reset:</strong> Use the Reset button to return to initial states</li>
            <li><strong>Theme Toggle:</strong> Switch between light and dark modes to see how the entire page adapts</li>
          </ul>
        </ThemeCard>
        </ThemeSection>
      </ThemeLayout>
    );
  },
  parameters: {
    docs: {
      description: {
        story: 'Interactive playground showing all checkbox states with real-time updates. Test different interactions and see how each state behaves.',
      },
    },
  }
};

// Basic checkbox states for reference
export const Default: Story = {
  render: (args) => <Checkbox {...args} />,
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
    disabled: true,
  },
};

export const DisabledChecked: Story = {
  args: {
    checked: true,
    disabled: true,
  },
};

// Form examples
export const FormExample: Story = {
  render: () => {
    const [formData, setFormData] = React.useState({
      terms: false,
      newsletter: false,
      marketing: false,
      notifications: false,
    });

    const handleChange = (key: string, checked: boolean) => {
      setFormData(prev => ({ ...prev, [key]: checked }));
    };

    const handleSubmit = (e: React.FormEvent) => {
      e.preventDefault();
      console.log('Form submitted:', formData);
    };

    return (
      <ThemeLayout 
        title="Form Example"
        description="See how checkboxes work in real forms with validation and state management."
      >
        <ThemeCard title="User Preferences Form">
          <form onSubmit={handleSubmit} style={{
            display: 'flex',
            flexDirection: 'column',
            gap: 'var(--spacing-m)',
          }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-s)' }}>
            <Checkbox 
              id="terms"
              name="terms"
              checked={formData.terms}
              onChange={(checked) => handleChange('terms', checked)}
              label="I agree to the terms and conditions"
              required={true}
            />
            
            <Checkbox 
              id="newsletter"
              name="newsletter"
              checked={formData.newsletter}
              onChange={(checked) => handleChange('newsletter', checked)}
              label="Subscribe to our newsletter"
            />
            
            <Checkbox 
              id="marketing"
              name="marketing"
              checked={formData.marketing}
              onChange={(checked) => handleChange('marketing', checked)}
              label="Receive marketing communications"
            />
            
            <Checkbox 
              id="notifications"
              name="notifications"
              checked={formData.notifications}
              onChange={(checked) => handleChange('notifications', checked)}
              label="Enable push notifications"
            />
          </div>
          
          <button
            type="submit"
            disabled={!formData.terms}
            style={{
              padding: 'var(--spacing-s) var(--spacing-m)',
              backgroundColor: formData.terms ? 'var(--color-fill-primary)' : 'var(--color-fill-disabled)',
              color: 'var(--color-content-inverse)',
              border: 'none',
              borderRadius: 'var(--border-radius-xs)',
              fontFamily: 'var(--font-family-primary)',
              fontSize: 'var(--font-size-xs)',
              fontWeight: 'var(--font-weight-medium)',
              cursor: formData.terms ? 'pointer' : 'not-allowed',
              transition: 'all 0.2s ease',
            }}
          >
            Submit Form
          </button>
          
          <div style={{
            fontFamily: 'var(--font-family-primary)',
            fontSize: 'var(--font-size-xs)',
            color: 'var(--color-content-secondary)',
            fontStyle: 'italic'
          }}>
            Form data: {JSON.stringify(formData, null, 2)}
          </div>
        </form>
        </ThemeCard>
      </ThemeLayout>
    );
  },
  parameters: {
    docs: {
      description: {
        story: 'Example of how to use checkboxes in a form with validation and state management.',
      },
    },
  }
};

// Token reference display
export const TokenReference: Story = {
  render: () => (
    <ThemeLayout 
      title="Design Tokens Used"
      description="Complete reference of all design tokens used in the Checkbox component for development and debugging."
    >
      <ThemeSection>
      
      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: '1fr 1fr', 
        gap: 'var(--spacing-m)',
        width: '100%'
      }}>
        <div>
          <h4 style={{ 
            fontFamily: 'var(--font-family-primary)', 
            fontSize: 'var(--font-size-m)', 
            fontWeight: 'var(--font-weight-semibold)',
            margin: '0 0 var(--spacing-xs) 0'
          }}>
            Colors
          </h4>
          <ul style={{ 
            fontFamily: 'var(--font-family-primary)', 
            fontSize: 'var(--font-size-s)',
            margin: 0,
            paddingLeft: 'var(--spacing-m)'
          }}>
            <li><code>--color-fill-tertiary</code> - Checkbox background</li>
            <li><code>--color-border-default</code> - Default border</li>
            <li><code>--color-border-active</code> - Checked state border</li>
            <li><code>--color-border-disabled</code> - Disabled state border</li>
            <li><code>--color-content-primary</code> - Label and icon color</li>
            <li><code>--color-content-disabled</code> - Disabled text color</li>
          </ul>
        </div>
        
        <div>
          <h4 style={{ 
            fontFamily: 'var(--font-family-primary)', 
            fontSize: 'var(--font-size-m)', 
            fontWeight: 'var(--font-weight-semibold)',
            margin: '0 0 var(--spacing-xs) 0'
          }}>
            Layout & Typography
          </h4>
          <ul style={{ 
            fontFamily: 'var(--font-family-primary)', 
            fontSize: 'var(--font-size-s)',
            margin: 0,
            paddingLeft: 'var(--spacing-m)'
          }}>
            <li><code>--border-width-s</code> - Default border width (1px)</li>
            <li><code>--border-width-m</code> - Active border width (2px)</li>
            <li><code>--border-radius-xs</code> - Border radius (2px)</li>
            <li><code>--spacing-xs</code> - Gap between checkbox and label</li>
            <li><code>--font-size-xs</code> - Label font size</li>
            <li><code>--font-weight-medium</code> - Label font weight</li>
          </ul>
        </div>
      </div>
      </ThemeSection>
    </ThemeLayout>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Shows all design tokens used in the Checkbox component for reference and debugging.',
      },
    },
  }
};

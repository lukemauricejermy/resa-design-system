import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Button } from '../components/Button';
import { Icons } from '../components/Icon';
import { ThemeLayout, ThemeCard, ThemeSection } from '../components/ThemeLayout';

const meta: Meta<typeof Button> = {
  title: 'Components/Button',
  component: Button,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'A comprehensive button component built with design tokens. Supports multiple variants, states, and sizes.',
      },
    },
  },
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['primary', 'secondary', 'tertiary', 'ghost', 'success', 'warning', 'error', 'info'],
      description: 'The visual style variant of the button',
    },
    state: {
      control: { type: 'select' },
      options: ['default', 'hover', 'pressed', 'active'],
      description: 'The interactive state of the button',
    },
    size: {
      control: { type: 'select' },
      options: ['sm', 'md', 'lg'],
      description: 'The size of the button',
    },
    disabled: {
      control: { type: 'boolean' },
      description: 'Whether the button is disabled',
    },
    children: {
      control: { type: 'text' },
      description: 'The button label text',
    },
    leadingIcon: {
      control: { type: 'boolean' },
      description: 'Show leading icon',
    },
    trailingIcon: {
      control: { type: 'boolean' },
      description: 'Show trailing icon',
    },
  },
  args: {
    children: 'Button Label',
    variant: 'primary',
    state: 'default',
    size: 'md',
    disabled: false,
    leadingIcon: false,
    trailingIcon: false,
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

// Main interactive playground - all variants with real interactive states
export const InteractivePlayground: Story = {
  args: {
    size: "md",
    leadingIcon: false,
    trailingIcon: false,
  },

  render: (args) => {
    const [clickCounts, setClickCounts] = React.useState<Record<string, number>>({
      primary: 0,
      secondary: 0,
      tertiary: 0,
      ghost: 0,
      success: 0,
      warning: 0,
      error: 0,
      info: 0,
    });

    const handleButtonClick = (variant: string) => {
      setClickCounts(prev => ({ ...prev, [variant]: prev[variant] + 1 }));
    };

    const resetAll = () => {
      setClickCounts({
        primary: 0,
        secondary: 0,
        tertiary: 0,
        ghost: 0,
        success: 0,
        warning: 0,
        error: 0,
        info: 0,
      });
    };

    return (
      <ThemeLayout 
        title="Button Interactive Playground"
        description="Test all button variants with real interactive states. Toggle between light and dark themes to see how the entire page adapts."
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
                color: 'var(--color-content-primary)',
                cursor: 'pointer',
                transition: 'all 0.2s ease',
              }}
            >
              Reset All
            </button>
          </div>

        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
          gap: 'var(--spacing-l)',
          width: '100%'
        }}>
                    {(['primary', 'secondary', 'tertiary', 'ghost', 'success', 'warning', 'error', 'info'] as const).map((variant) => (
            <ThemeCard key={variant} title={`${variant.charAt(0).toUpperCase() + variant.slice(1)} Button`}>
              <div style={{
                display: 'flex',
                flexDirection: 'column',
                gap: 'var(--spacing-s)',
              }}>
              
              <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-xs)' }}>
                <div style={{ 
                  fontFamily: 'var(--font-family-primary)', 
                  fontSize: 'var(--font-size-xs)',
                  fontWeight: 'var(--font-weight-medium)',
                  color: 'var(--color-content-secondary)'
                }}>
                  Interactive: Hover, Click, Focus
                </div>
              </div>

              <div style={{ 
                display: 'flex', 
                justifyContent: 'center', 
                padding: 'var(--spacing-m)',
                backgroundColor: 'var(--color-surface-primary)',
                borderRadius: 'var(--border-radius-xs)',
                border: 'var(--border-width-s) solid var(--color-border-default)'
              }}>
                <Button 
                  variant={variant}
                  onClick={() => handleButtonClick(variant)}
                  leadingIcon={args.leadingIcon ? <Icons.Smile size={16} /> : undefined}
                  trailingIcon={args.trailingIcon ? <Icons.ArrowRight size={16} /> : undefined}
                >
                  {variant.charAt(0).toUpperCase() + variant.slice(1)}
                </Button>
              </div>

              <div style={{ 
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                padding: 'var(--spacing-xs) var(--spacing-s)',
                backgroundColor: 'var(--color-fill-tertiary-hover)',
                borderRadius: 'var(--border-radius-xs)',
                fontFamily: 'var(--font-family-primary)',
                fontSize: 'var(--font-size-xs)',
                color: 'var(--color-content-primary)'
              }}>
                <span>Click Count: <strong>{clickCounts[variant]}</strong></span>
              </div>
              </div>
            </ThemeCard>
          ))}
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
            <li><strong>Hover Over Buttons:</strong> See hover states in real-time</li>
            <li><strong>Click Buttons:</strong> Click any button to see the click counter increase</li>
            <li><strong>Focus Buttons:</strong> Tab to buttons or click to see focus states</li>
            <li><strong>Compare Variants:</strong> See all 8 button variants side by side</li>
            <li><strong>Reset:</strong> Use the Reset button to clear all click counts</li>
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
        story: 'Interactive playground showing all 8 button variants with state controls and click tracking. Test different states and see how each variant behaves.',
      },
    },
  }
};

// Simple story to demonstrate icon controls
export const WithIcons: Story = {
  args: {
    children: 'Button with Icons',
    variant: 'primary',
    size: 'md',
    leadingIcon: true,
    trailingIcon: true,
  },
  render: (args) => (
    <div style={{ 
      display: 'flex', 
      flexDirection: 'column', 
      gap: 'var(--spacing-m)',
      alignItems: 'center'
    }}>
      <div style={{ 
        display: 'flex', 
        gap: 'var(--spacing-m)', 
        flexWrap: 'wrap',
        justifyContent: 'center'
      }}>
        <Button {...args} leadingIcon={<Icons.Smile size={16} />} trailingIcon={<Icons.ArrowRight size={16} />}>
          Both Icons
        </Button>
        <Button {...args} leadingIcon={<Icons.Smile size={16} />}>
          Leading Only
        </Button>
        <Button {...args} trailingIcon={<Icons.ArrowRight size={16} />}>
          Trailing Only
        </Button>
        <Button {...args}>
          No Icons
        </Button>
      </div>
      
      <div style={{ 
        fontFamily: 'var(--font-family-primary)', 
        fontSize: 'var(--font-size-xs)',
        color: 'var(--color-content-secondary)',
        textAlign: 'center',
        maxWidth: '400px'
      }}>
        Use the controls panel to toggle leading and trailing icons on/off for all buttons above.
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Demonstrates button variants with different icon combinations. Use the controls to toggle leading and trailing icons.',
      },
    },
  }
};

// Debug story to compare font weights
export const FontWeightComparison: Story = {
  render: () => (
    <div style={{ 
      display: 'flex', 
      flexDirection: 'column', 
      gap: 'var(--spacing-m)',
      alignItems: 'center'
    }}>
      <h3 style={{ 
        fontFamily: 'var(--font-family-primary)', 
        fontSize: 'var(--font-size-l)',
        fontWeight: 'var(--font-weight-semibold)',
        color: 'var(--color-content-primary)',
        margin: '0 0 var(--spacing-s) 0'
      }}>
        Font Weight Comparison
      </h3>
      
      <div style={{ 
        display: 'flex', 
        gap: 'var(--spacing-m)', 
        flexWrap: 'wrap',
        justifyContent: 'center'
      }}>
        <Button variant="primary">
          Primary Button
        </Button>
        <Button variant="secondary">
          Secondary Button
        </Button>
        <Button variant="tertiary">
          Tertiary Button
        </Button>
        <Button variant="ghost">
          Ghost Button
        </Button>
      </div>
      
      <div style={{ 
        fontFamily: 'var(--font-family-primary)', 
        fontSize: 'var(--font-size-xs)',
        color: 'var(--color-content-secondary)',
        textAlign: 'center',
        maxWidth: '500px',
        padding: 'var(--spacing-s)',
        backgroundColor: 'var(--color-fill-tertiary)',
        borderRadius: 'var(--border-radius-xs)'
      }}>
        <strong>Debug Info:</strong><br/>
        All buttons use: <code>font-weight: var(--font-weight-medium)</code> (500)<br/>
        If the primary button appears heavier, it might be due to:<br/>
        • White text on dark background appearing bolder<br/>
        • Font rendering differences between light/dark backgrounds<br/>
        • Browser antialiasing variations
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Debug story to compare font weights across button variants and identify any visual differences.',
      },
    },
  }
};

// Individual component stories for reference
export const Default: Story = {
  args: {},
};

export const Primary: Story = {
  args: {
    variant: 'primary',
    children: 'Primary Button',
  },
};

export const Secondary: Story = {
  args: {
    variant: 'secondary',
    children: 'Secondary Button',
  },
};

export const Tertiary: Story = {
  args: {
    variant: 'tertiary',
    children: 'Tertiary Button',
  },
};

export const Ghost: Story = {
  args: {
    variant: 'ghost',
    children: 'Ghost Button',
  },
};

export const Success: Story = {
  args: {
    variant: 'success',
    children: 'Success Button',
  },
};

export const Warning: Story = {
  args: {
    variant: 'warning',
    children: 'Warning Button',
  },
};

export const Error: Story = {
  args: {
    variant: 'error',
    children: 'Error Button',
  },
};

export const Info: Story = {
  args: {
    variant: 'info',
    children: 'Info Button',
  },
};

// Size variations
export const Small: Story = {
  args: {
    size: 'sm',
    children: 'Small Button',
  },
};

export const Medium: Story = {
  args: {
    size: 'md',
    children: 'Medium Button',
  },
};

export const Large: Story = {
  args: {
    size: 'lg',
    children: 'Large Button',
  },
};

// Icon variations
export const WithLeadingIcon: Story = {
  args: {
    leadingIcon: <Icons.Smile />,
    children: 'Button with Icon',
  },
};

export const WithTrailingIcon: Story = {
  args: {
    trailingIcon: <Icons.ArrowRight />,
    children: 'Button with Arrow',
  },
};

export const WithBothIcons: Story = {
  args: {
    leadingIcon: <Icons.Check />,
    trailingIcon: <Icons.ArrowRight />,
    children: 'Complete Button',
  },
};

export const SemanticIcons: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-m)', alignItems: 'flex-start' }}>
      <h3 style={{ 
        fontFamily: 'var(--font-family-primary)', 
        fontSize: 'var(--font-size-l)', 
        fontWeight: 'var(--font-weight-semibold)',
        margin: '0 0 var(--spacing-s) 0'
      }}>
        Buttons with Semantic Icons
      </h3>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 'var(--spacing-s)' }}>
        <Button variant="success" leadingIcon={<Icons.Check />}>Success</Button>
        <Button variant="warning" leadingIcon={<Icons.AlertTriangle />}>Warning</Button>
        <Button variant="error" leadingIcon={<Icons.AlertCircle />}>Error</Button>
        <Button variant="info" leadingIcon={<Icons.Info />}>Info</Button>
      </div>
    </div>
  ),
};

// Disabled state
export const Disabled: Story = {
  args: {
    disabled: true,
    children: 'Disabled Button',
  },
};

// Token reference display
export const TokenReference: Story = {
  render: () => (
    <div style={{ 
      display: 'flex', 
      flexDirection: 'column', 
      gap: 'var(--spacing-m)', 
      alignItems: 'flex-start',
      maxWidth: '800px'
    }}>
      <h3 style={{ 
        fontFamily: 'var(--font-family-primary)', 
        fontSize: 'var(--font-size-l)', 
        fontWeight: 'var(--font-weight-semibold)',
        margin: '0 0 var(--spacing-s) 0'
      }}>
        Design Tokens Used
      </h3>
      
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
            <li><code>--color-fill-primary</code> - Primary button background</li>
            <li><code>--color-fill-secondary</code> - Secondary button background</li>
            <li><code>--color-content-inverse</code> - Text on dark backgrounds</li>
            <li><code>--color-content-primary</code> - Text on light backgrounds</li>
            <li><code>--color-border-default</code> - Default border color</li>
          </ul>
        </div>
        
        <div>
          <h4 style={{ 
            fontFamily: 'var(--font-family-primary)', 
            fontSize: 'var(--font-size-m)', 
            fontWeight: 'var(--font-weight-semibold)',
            margin: '0 0 var(--spacing-xs) 0'
          }}>
            Layout & Spacing
          </h4>
          <ul style={{ 
            fontFamily: 'var(--font-family-primary)', 
            fontSize: 'var(--font-size-s)',
            margin: 0,
            paddingLeft: 'var(--spacing-m)'
          }}>
            <li><code>--spacing-s</code> - Button padding (8px)</li>
            <li><code>--spacing-xs</code> - Gap between elements (6px)</li>
            <li><code>--border-radius-xs</code> - Border radius (8px)</li>
            <li><code>--border-width-s</code> - Border width (1px)</li>
          </ul>
        </div>
        
        <div>
          <h4 style={{ 
            fontFamily: 'var(--font-family-primary)', 
            fontSize: 'var(--font-size-m)', 
            fontWeight: 'var(--font-weight-semibold)',
            margin: '0 0 var(--spacing-xs) 0'
          }}>
            Typography
          </h4>
          <ul style={{ 
            fontFamily: 'var(--font-family-primary)', 
            fontSize: 'var(--font-size-s)',
            margin: 0,
            paddingLeft: 'var(--spacing-m)'
          }}>
            <li><code>--font-family-primary</code> - Figtree font family</li>
            <li><code>--font-size-3xs</code> - Button text size (Label Extra Extra Small)</li>
            <li><code>--font-weight-medium</code> - Button text weight (500)</li>
            <li><code>lineHeight: 1</code> - Perfect centering (no extra space)</li>
          </ul>
        </div>
        
        <div>
          <h4 style={{ 
            fontFamily: 'var(--font-family-primary)', 
            fontSize: 'var(--font-size-m)', 
            fontWeight: 'var(--font-weight-semibold)',
            margin: '0 0 var(--spacing-xs) 0'
          }}>
            Interactive States
          </h4>
          <ul style={{ 
            fontFamily: 'var(--font-family-primary)', 
            fontSize: 'var(--font-size-s)',
            margin: 0,
            paddingLeft: 'var(--spacing-m)'
          }}>
            <li><code>--color-fill-primary-hover</code> - Hover state</li>
            <li><code>--color-fill-primary-pressed</code> - Pressed state</li>
            <li><code>--color-fill-primary-active</code> - Active state</li>
            <li><code>--color-border-active</code> - Active border</li>
          </ul>
        </div>
      </div>
      
      <div style={{ 
        marginTop: 'var(--spacing-s)',
        padding: 'var(--spacing-s)',
        backgroundColor: 'var(--color-fill-tertiary-hover)',
        borderRadius: 'var(--border-radius-xs)',
        border: 'var(--border-width-s) solid var(--color-border-default)'
      }}>
        <p style={{ 
          fontFamily: 'var(--font-family-primary)', 
          fontSize: 'var(--font-size-s)',
          margin: 0,
          color: 'var(--color-content-primary)'
        }}>
          <strong>Note:</strong> All button properties reference design tokens. No hardcoded values are used. 
          This ensures consistency with your design system and enables easy theming and customization.
        </p>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'This story shows all the design tokens used in the Button component, demonstrating our token-first approach.',
      },
    },
  },
};

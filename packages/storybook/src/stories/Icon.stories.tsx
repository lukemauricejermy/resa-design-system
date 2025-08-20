import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Icon, Icons } from '../components/Icon';

const meta: Meta<typeof Icon> = {
  title: 'Components/Icon',
  component: Icon,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'Standardized icon component using Lucide React with consistent sizing and stroke width rules.',
      },
    },
  },
  argTypes: {
    name: {
      control: { type: 'select' },
      options: Object.keys(Icons),
      description: 'The icon to display',
    },
    size: {
      control: { type: 'range', min: 12, max: 48, step: 2 },
      description: 'Icon size in pixels',
    },
    strokeWidth: {
      control: { type: 'range', min: 0.5, max: 3, step: 0.25 },
      description: 'Stroke width in pixels',
    },
    color: {
      control: { type: 'color' },
      description: 'Icon color (uses currentColor by default)',
    },
  },
  args: {
    name: 'Heart',
    size: 20,
    strokeWidth: 1.5,
    color: 'currentColor',
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

// Basic icon display
export const Default: Story = {
  render: (args) => (
    <div style={{ 
      display: 'flex', 
      flexDirection: 'column', 
      gap: 'var(--spacing-m)',
      alignItems: 'center'
    }}>
      <Icon {...args} />
      <div style={{ 
        fontFamily: 'var(--font-family-primary)', 
        fontSize: 'var(--font-size-xs)',
        color: 'var(--color-content-secondary)',
        textAlign: 'center'
      }}>
        Icon: {args.name} | Size: {args.size}px | Stroke: {args.strokeWidth}px
      </div>
    </div>
  ),
};

// Icon size variations
export const SizeVariations: Story = {
  render: () => (
    <div style={{ 
      display: 'flex', 
      flexDirection: 'column', 
      gap: 'var(--spacing-l)',
      alignItems: 'center'
    }}>
      <h3 style={{ 
        fontFamily: 'var(--font-family-primary)', 
        fontSize: 'var(--font-size-l)',
        fontWeight: 'var(--font-weight-semibold)',
        margin: '0 0 var(--spacing-s) 0'
      }}>
        Icon Size Variations
      </h3>
      
      <div style={{ 
        display: 'flex', 
        gap: 'var(--spacing-m)', 
        alignItems: 'center',
        flexWrap: 'wrap',
        justifyContent: 'center'
      }}>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 'var(--spacing-xs)' }}>
          <Icon name="Heart" size={12} />
          <span style={{ fontFamily: 'var(--font-family-primary)', fontSize: 'var(--font-size-4xs)' }}>12px</span>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 'var(--spacing-xs)' }}>
          <Icon name="Heart" size={16} />
          <span style={{ fontFamily: 'var(--font-family-primary)', fontSize: 'var(--font-size-4xs)' }}>16px</span>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 'var(--spacing-xs)' }}>
          <Icon name="Heart" size={20} />
          <span style={{ fontFamily: 'var(--font-family-primary)', fontSize: 'var(--font-size-4xs)' }}>20px</span>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 'var(--spacing-xs)' }}>
          <Icon name="Heart" size={24} />
          <span style={{ fontFamily: 'var(--font-family-primary)', fontSize: 'var(--font-size-4xs)' }}>24px</span>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 'var(--spacing-xs)' }}>
          <Icon name="Heart" size={32} />
          <span style={{ fontFamily: 'var(--font-family-primary)', fontSize: 'var(--font-size-4xs)' }}>32px</span>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 'var(--spacing-xs)' }}>
          <Icon name="Heart" size={48} />
          <span style={{ fontFamily: 'var(--font-family-primary)', fontSize: 'var(--font-size-4xs)' }}>48px</span>
        </div>
      </div>
      
      <div style={{ 
        fontFamily: 'var(--font-family-primary)', 
        fontSize: 'var(--font-size-xs)',
        color: 'var(--color-content-info)',
        textAlign: 'center',
        maxWidth: '400px',
        padding: 'var(--spacing-s)',
        backgroundColor: 'var(--color-fill-info)',
        borderRadius: 'var(--border-radius-xs)'
      }}>
        <strong>Design System Rule:</strong> Default size is 20px for most UI elements
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Shows different icon sizes from 12px to 48px. Default size is 20px.',
      },
    },
  }
};

// Stroke width variations
export const StrokeVariations: Story = {
  render: () => (
    <div style={{ 
      display: 'flex', 
      flexDirection: 'column', 
      gap: 'var(--spacing-l)',
      alignItems: 'center'
    }}>
      <h3 style={{ 
        fontFamily: 'var(--font-family-primary)', 
        fontSize: 'var(--font-size-l)',
        fontWeight: 'var(--font-weight-semibold)',
        margin: '0 0 var(--spacing-s) 0'
      }}>
        Stroke Width Variations
      </h3>
      
      <div style={{ 
        display: 'flex', 
        gap: 'var(--spacing-m)', 
        alignItems: 'center',
        flexWrap: 'wrap',
        justifyContent: 'center'
      }}>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 'var(--spacing-xs)' }}>
          <Icon name="Heart" size={24} strokeWidth={0.5} />
          <span style={{ fontFamily: 'var(--font-family-primary)', fontSize: 'var(--font-size-4xs)' }}>0.5px</span>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 'var(--spacing-xs)' }}>
          <Icon name="Heart" size={24} strokeWidth={1} />
          <span style={{ fontFamily: 'var(--font-family-primary)', fontSize: 'var(--font-size-4xs)' }}>1px</span>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 'var(--spacing-xs)' }}>
          <Icon name="Heart" size={24} strokeWidth={1.5} />
          <span style={{ fontFamily: 'var(--font-family-primary)', fontSize: 'var(--font-size-4xs)' }}>1.5px</span>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 'var(--spacing-xs)' }}>
          <Icon name="Heart" size={24} strokeWidth={2} />
          <span style={{ fontFamily: 'var(--font-family-primary)', fontSize: 'var(--font-size-4xs)' }}>2px</span>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 'var(--spacing-xs)' }}>
          <Icon name="Heart" size={24} strokeWidth={3} />
          <span style={{ fontFamily: 'var(--font-family-primary)', fontSize: 'var(--font-size-4xs)' }}>3px</span>
        </div>
      </div>
      
      <div style={{ 
        fontFamily: 'var(--font-family-primary)', 
        fontSize: 'var(--font-size-xs)',
        color: 'var(--color-content-info)',
        textAlign: 'center',
        maxWidth: '400px',
        padding: 'var(--spacing-s)',
        backgroundColor: 'var(--color-fill-info)',
        borderRadius: 'var(--border-radius-xs)'
      }}>
        <strong>Design System Rule:</strong> Default stroke width is 1.5px for most UI elements
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Shows different stroke widths from 0.5px to 3px. Default is 1.5px.',
      },
    },
  }
};

// Icon categories showcase
export const IconCategories: Story = {
  render: () => (
    <div style={{ 
      display: 'flex', 
      flexDirection: 'column', 
      gap: 'var(--spacing-xl)',
      alignItems: 'center',
      maxWidth: '800px'
    }}>
      <h3 style={{ 
        fontFamily: 'var(--font-family-primary)', 
        fontSize: 'var(--font-size-l)',
        fontWeight: 'var(--font-weight-semibold)',
        margin: '0 0 var(--spacing-s) 0'
      }}>
        Icon Categories
      </h3>
      
      {/* Navigation Icons */}
      <div style={{ width: '100%' }}>
        <h4 style={{ 
          fontFamily: 'var(--font-family-primary)', 
          fontSize: 'var(--font-size-m)',
          fontWeight: 'var(--font-weight-medium)',
          margin: '0 0 var(--spacing-s) 0',
          color: 'var(--color-content-primary)'
        }}>
          Navigation
        </h4>
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(80px, 1fr))', 
          gap: 'var(--spacing-s)',
          padding: 'var(--spacing-s)',
          backgroundColor: 'var(--color-fill-tertiary)',
          borderRadius: 'var(--border-radius-xs)'
        }}>
          <Icons.ArrowRight />
          <Icons.ArrowLeft />
          <Icons.ChevronDown />
          <Icons.ChevronUp />
          <Icons.ChevronRight />
          <Icons.ChevronLeft />
        </div>
      </div>
      
      {/* Action Icons */}
      <div style={{ width: '100%' }}>
        <h4 style={{ 
          fontFamily: 'var(--font-family-primary)', 
          fontSize: 'var(--font-size-m)',
          fontWeight: 'var(--font-weight-medium)',
          margin: '0 0 var(--spacing-s) 0',
          color: 'var(--color-content-primary)'
        }}>
          Actions
        </h4>
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(80px, 1fr))', 
          gap: 'var(--spacing-s)',
          padding: 'var(--spacing-s)',
          backgroundColor: 'var(--color-fill-tertiary)',
          borderRadius: 'var(--border-radius-xs)'
        }}>
          <Icons.Plus />
          <Icons.Minus />
          <Icons.X />
          <Icons.Check />
          <Icons.Edit />
          <Icons.Trash />
          <Icons.Search />
          <Icons.Filter />
        </div>
      </div>
      
      {/* Status Icons */}
      <div style={{ width: '100%' }}>
        <h4 style={{ 
          fontFamily: 'var(--font-family-primary)', 
          fontSize: 'var(--font-size-m)',
          fontWeight: 'var(--font-weight-medium)',
          margin: '0 0 var(--spacing-s) 0',
          color: 'var(--color-content-primary)'
        }}>
          Status
        </h4>
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(80px, 1fr))', 
          gap: 'var(--spacing-s)',
          padding: 'var(--spacing-s)',
          backgroundColor: 'var(--color-fill-tertiary)',
          borderRadius: 'var(--border-radius-xs)'
        }}>
          <Icons.AlertCircle />
          <Icons.AlertTriangle />
          <Icons.Info />
          <Icons.HelpCircle />
        </div>
      </div>
      
      {/* UI Elements */}
      <div style={{ width: '100%' }}>
        <h4 style={{ 
          fontFamily: 'var(--font-family-primary)', 
          fontSize: 'var(--font-size-m)',
          fontWeight: 'var(--font-weight-medium)',
          margin: '0 0 var(--spacing-s) 0',
          color: 'var(--color-content-primary)'
        }}>
          UI Elements
        </h4>
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(80px, 1fr))', 
          gap: 'var(--spacing-s)',
          padding: 'var(--spacing-s)',
          backgroundColor: 'var(--color-fill-tertiary)',
          borderRadius: 'var(--border-radius-xs)'
        }}>
          <Icons.Eye />
          <Icons.EyeOff />
          <Icons.Lock />
          <Icons.Unlock />
          <Icons.Settings />
          <Icons.User />
          <Icons.Home />
          <Icons.Menu />
        </div>
      </div>
      
      <div style={{ 
        fontFamily: 'var(--font-family-primary)', 
        fontSize: 'var(--font-size-xs)',
        color: 'var(--color-content-info)',
        textAlign: 'center',
        maxWidth: '600px',
        padding: 'var(--spacing-s)',
        backgroundColor: 'var(--color-fill-info)',
        borderRadius: 'var(--border-radius-xs)'
      }}>
        <strong>Usage:</strong> Import <code>Icons</code> for common icons or <code>Icon</code> component for custom usage.<br/>
        <strong>Defaults:</strong> 20px size, 1.5px stroke width, currentColor for theming
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Showcases all available icon categories with consistent sizing and styling.',
      },
    },
  }
};

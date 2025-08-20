import React from 'react';
import * as LucideIcons from 'lucide-react';

export interface IconProps {
  name: keyof typeof LucideIcons;
  size?: number;
  strokeWidth?: number;
  color?: string;
  className?: string;
}

/**
 * Standardized Icon component that wraps Lucide icons
 * 
 * Design System Rules:
 * - Default size: 20px
 * - Default stroke width: 1.5px
 * - Uses currentColor by default for consistent theming
 * - Maintains aspect ratio and proper scaling
 */
export function Icon({ 
  name, 
  size = 20, 
  strokeWidth = 1.5, 
  color = 'currentColor',
  className = ''
}: IconProps) {
  const LucideIcon = LucideIcons[name];
  
  if (!LucideIcon) {
    console.warn(`Icon "${name}" not found in Lucide icons`);
    return null;
  }

  return (
    <LucideIcon 
      size={size}
      strokeWidth={strokeWidth}
      color={color}
      className={className}
    />
  );
}

// Export commonly used icons for convenience
export const Icons = {
  // Navigation
  ArrowRight: (props: Omit<IconProps, 'name'>) => <Icon name="ArrowRight" {...props} />,
  ArrowLeft: (props: Omit<IconProps, 'name'>) => <Icon name="ArrowLeft" {...props} />,
  ChevronDown: (props: Omit<IconProps, 'name'>) => <Icon name="ChevronDown" {...props} />,
  ChevronUp: (props: Omit<IconProps, 'name'>) => <Icon name="ChevronUp" {...props} />,
  ChevronRight: (props: Omit<IconProps, 'name'>) => <Icon name="ChevronRight" {...props} />,
  ChevronLeft: (props: Omit<IconProps, 'name'>) => <Icon name="ChevronLeft" {...props} />,
  
  // Actions
  Plus: (props: Omit<IconProps, 'name'>) => <Icon name="Plus" {...props} />,
  Minus: (props: Omit<IconProps, 'name'>) => <Icon name="Minus" {...props} />,
  X: (props: Omit<IconProps, 'name'>) => <Icon name="X" {...props} />,
  Check: (props: Omit<IconProps, 'name'>) => <Icon name="Check" {...props} />,
  Edit: (props: Omit<IconProps, 'name'>) => <Icon name="Edit" {...props} />,
  Trash: (props: Omit<IconProps, 'name'>) => <Icon name="Trash" {...props} />,
  Search: (props: Omit<IconProps, 'name'>) => <Icon name="Search" {...props} />,
  Filter: (props: Omit<IconProps, 'name'>) => <Icon name="Filter" {...props} />,
  
  // Communication
  Mail: (props: Omit<IconProps, 'name'>) => <Icon name="Mail" {...props} />,
  Phone: (props: Omit<IconProps, 'name'>) => <Icon name="Phone" {...props} />,
  MessageCircle: (props: Omit<IconProps, 'name'>) => <Icon name="MessageCircle" {...props} />,
  Bell: (props: Omit<IconProps, 'name'>) => <Icon name="Bell" {...props} />,
  
  // Status
  AlertCircle: (props: Omit<IconProps, 'name'>) => <Icon name="AlertCircle" {...props} />,
  AlertTriangle: (props: Omit<IconProps, 'name'>) => <Icon name="AlertTriangle" {...props} />,
  Info: (props: Omit<IconProps, 'name'>) => <Icon name="Info" {...props} />,
  HelpCircle: (props: Omit<IconProps, 'name'>) => <Icon name="HelpCircle" {...props} />,
  
  // UI Elements
  Eye: (props: Omit<IconProps, 'name'>) => <Icon name="Eye" {...props} />,
  EyeOff: (props: Omit<IconProps, 'name'>) => <Icon name="EyeOff" {...props} />,
  Lock: (props: Omit<IconProps, 'name'>) => <Icon name="Lock" {...props} />,
  Unlock: (props: Omit<IconProps, 'name'>) => <Icon name="Unlock" {...props} />,
  Settings: (props: Omit<IconProps, 'name'>) => <Icon name="Settings" {...props} />,
  User: (props: Omit<IconProps, 'name'>) => <Icon name="User" {...props} />,
  Home: (props: Omit<IconProps, 'name'>) => <Icon name="Home" {...props} />,
  Menu: (props: Omit<IconProps, 'name'>) => <Icon name="Menu" {...props} />,
  
  // Social
  Heart: (props: Omit<IconProps, 'name'>) => <Icon name="Heart" {...props} />,
  Smile: (props: Omit<IconProps, 'name'>) => <Icon name="Smile" {...props} />,
  Share: (props: Omit<IconProps, 'name'>) => <Icon name="Share" {...props} />,
  Bookmark: (props: Omit<IconProps, 'name'>) => <Icon name="Bookmark" {...props} />,
  Star: (props: Omit<IconProps, 'name'>) => <Icon name="Star" {...props} />,
  
  // File & Media
  Download: (props: Omit<IconProps, 'name'>) => <Icon name="Download" {...props} />,
  Upload: (props: Omit<IconProps, 'name'>) => <Icon name="Upload" {...props} />,
  File: (props: Omit<IconProps, 'name'>) => <Icon name="File" {...props} />,
  Image: (props: Omit<IconProps, 'name'>) => <Icon name="Image" {...props} />,
  Video: (props: Omit<IconProps, 'name'>) => <Icon name="Video" {...props} />,
  Music: (props: Omit<IconProps, 'name'>) => <Icon name="Music" {...props} />,
  
  // Time
  Clock: (props: Omit<IconProps, 'name'>) => <Icon name="Clock" {...props} />,
  Calendar: (props: Omit<IconProps, 'name'>) => <Icon name="Calendar" {...props} />,
  Timer: (props: Omit<IconProps, 'name'>) => <Icon name="Timer" {...props} />,
  
  // Business
  Building: (props: Omit<IconProps, 'name'>) => <Icon name="Building" {...props} />,
  Briefcase: (props: Omit<IconProps, 'name'>) => <Icon name="Briefcase" {...props} />,
  CreditCard: (props: Omit<IconProps, 'name'>) => <Icon name="CreditCard" {...props} />,
  DollarSign: (props: Omit<IconProps, 'name'>) => <Icon name="DollarSign" {...props} />,
  
  // Technology
  Wifi: (props: Omit<IconProps, 'name'>) => <Icon name="Wifi" {...props} />,
  Battery: (props: Omit<IconProps, 'name'>) => <Icon name="Battery" {...props} />,
  Zap: (props: Omit<IconProps, 'name'>) => <Icon name="Zap" {...props} />,
  Cpu: (props: Omit<IconProps, 'name'>) => <Icon name="Cpu" {...props} />,
  
  // Nature
  Sun: (props: Omit<IconProps, 'name'>) => <Icon name="Sun" {...props} />,
  Moon: (props: Omit<IconProps, 'name'>) => <Icon name="Moon" {...props} />,
  Cloud: (props: Omit<IconProps, 'name'>) => <Icon name="Cloud" {...props} />,
  Leaf: (props: Omit<IconProps, 'name'>) => <Icon name="Leaf" {...props} />,
} as const;

// Export the base Icon component and all Lucide icons for advanced usage
export { LucideIcons };
export default Icon;

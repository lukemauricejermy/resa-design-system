'use client';

import React, { useState, useEffect } from 'react';

interface TokenDemoProps {
  className?: string;
}

export function ComprehensiveTokenDemo({ className }: TokenDemoProps) {
  const [isLightTheme, setIsLightTheme] = useState(true);
  const [isTopbarVisible, setIsTopbarVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const toggleTheme = () => {
    setIsLightTheme(!isLightTheme);
  };

  // Dynamically update CSS custom properties when theme changes
  useEffect(() => {
    const root = document.documentElement;
    const theme = isLightTheme ? 'light' : 'dark';
    
    // Update all semantic color variables to use the current theme
    const colorCategories = ['content', 'background', 'surface', 'fill', 'border'];
    
    colorCategories.forEach(category => {
      // Get all CSS variables for this category from the current theme
      const computedStyle = getComputedStyle(root);
      
      // For each semantic color, update the CSS variable to point to the theme-specific value
      if (category === 'content') {
        root.style.setProperty('--color-semantic-content-primary', `var(--color-semantic-${theme}-content-primary)`);
        root.style.setProperty('--color-semantic-content-secondary', `var(--color-semantic-${theme}-content-secondary)`);
        root.style.setProperty('--color-semantic-content-tertiary', `var(--color-semantic-${theme}-content-tertiary)`);
        root.style.setProperty('--color-semantic-content-disabled', `var(--color-semantic-${theme}-content-disabled)`);
        root.style.setProperty('--color-semantic-content-placeholder', `var(--color-semantic-${theme}-content-placeholder)`);
        root.style.setProperty('--color-semantic-content-inverse', `var(--color-semantic-${theme}-content-inverse)`);
        root.style.setProperty('--color-semantic-content-success', `var(--color-semantic-${theme}-content-success)`);
        root.style.setProperty('--color-semantic-content-warning', `var(--color-semantic-${theme}-content-warning)`);
        root.style.setProperty('--color-semantic-content-error', `var(--color-semantic-${theme}-content-error)`);
        root.style.setProperty('--color-semantic-content-info', `var(--color-semantic-${theme}-content-info)`);
      }
      
      if (category === 'background') {
        root.style.setProperty('--color-semantic-background-primary', `var(--color-semantic-${theme}-background-primary)`);
        root.style.setProperty('--color-semantic-background-secondary', `var(--color-semantic-${theme}-background-secondary)`);
        root.style.setProperty('--color-semantic-background-contrast', `var(--color-semantic-${theme}-background-contrast)`);
        root.style.setProperty('--color-semantic-background-recessive', `var(--color-semantic-${theme}-background-recessive)`);
      }
      
      if (category === 'surface') {
        root.style.setProperty('--color-semantic-surface-primary', `var(--color-semantic-${theme}-surface-primary)`);
        root.style.setProperty('--color-semantic-surface-secondary', `var(--color-semantic-${theme}-surface-secondary)`);
        root.style.setProperty('--color-semantic-surface-recessive', `var(--color-semantic-${theme}-surface-recessive)`);
        root.style.setProperty('--color-semantic-surface-inverse', `var(--color-semantic-${theme}-surface-inverse)`);
        root.style.setProperty('--color-semantic-surface-success', `var(--color-semantic-${theme}-surface-success)`);
        root.style.setProperty('--color-semantic-surface-warning', `var(--color-semantic-${theme}-surface-warning)`);
        root.style.setProperty('--color-semantic-surface-error', `var(--color-semantic-${theme}-surface-error)`);
        root.style.setProperty('--color-semantic-surface-info', `var(--color-semantic-${theme}-surface-info)`);
      }
      
      if (category === 'fill') {
        root.style.setProperty('--color-semantic-fill-primary', `var(--color-semantic-${theme}-fill-primary)`);
        root.style.setProperty('--color-semantic-fill-primary-hover', `var(--color-semantic-${theme}-fill-primary-hover)`);
        root.style.setProperty('--color-semantic-fill-primary-active', `var(--color-semantic-${theme}-fill-primary-active)`);
        root.style.setProperty('--color-semantic-fill-secondary', `var(--color-semantic-${theme}-fill-secondary)`);
        root.style.setProperty('--color-semantic-fill-secondary-hover', `var(--color-semantic-${theme}-fill-secondary-hover)`);
        root.style.setProperty('--color-semantic-fill-secondary-active', `var(--color-semantic-${theme}-fill-secondary-active)`);
        root.style.setProperty('--color-semantic-fill-tertiary', `var(--color-semantic-${theme}-fill-tertiary)`);
        root.style.setProperty('--color-semantic-fill-tertiary-hover', `var(--color-semantic-${theme}-fill-tertiary-hover)`);
        root.style.setProperty('--color-semantic-fill-tertiary-active', `var(--color-semantic-${theme}-fill-tertiary-active)`);
        root.style.setProperty('--color-semantic-fill-success', `var(--color-semantic-${theme}-fill-success)`);
        root.style.setProperty('--color-semantic-fill-warning', `var(--color-semantic-${theme}-fill-warning)`);
        root.style.setProperty('--color-semantic-fill-error', `var(--color-semantic-${theme}-fill-error)`);
        root.style.setProperty('--color-semantic-fill-info', `var(--color-semantic-${theme}-fill-info)`);
        root.style.setProperty('--color-semantic-fill-success-hover', `var(--color-semantic-${theme}-fill-success-hover)`);
        root.style.setProperty('--color-semantic-fill-success-active', `var(--color-semantic-${theme}-fill-success-active)`);
        root.style.setProperty('--color-semantic-fill-warning-hover', `var(--color-semantic-${theme}-fill-warning-hover)`);
        root.style.setProperty('--color-semantic-fill-warning-active', `var(--color-semantic-${theme}-fill-warning-active)`);
        root.style.setProperty('--color-semantic-fill-error-hover', `var(--color-semantic-${theme}-fill-error-hover)`);
        root.style.setProperty('--color-semantic-fill-error-active', `var(--color-semantic-${theme}-fill-error-active)`);
        root.style.setProperty('--color-semantic-fill-info-hover', `var(--color-semantic-${theme}-fill-info-hover)`);
        root.style.setProperty('--color-semantic-fill-info-active', `var(--color-semantic-${theme}-fill-info-active)`);
        root.style.setProperty('--color-semantic-fill-secondary-pressed', `var(--color-semantic-${theme}-fill-secondary-pressed)`);
        root.style.setProperty('--color-semantic-fill-primary-pressed', `var(--color-semantic-${theme}-fill-primary-pressed)`);
        root.style.setProperty('--color-semantic-fill-tertiary-pressed', `var(--color-semantic-${theme}-fill-tertiary-pressed)`);
        root.style.setProperty('--color-semantic-fill-success-pressed', `var(--color-semantic-${theme}-fill-success-pressed)`);
        root.style.setProperty('--color-semantic-fill-warning-pressed', `var(--color-semantic-${theme}-fill-warning-pressed)`);
        root.style.setProperty('--color-semantic-fill-error-pressed', `var(--color-semantic-${theme}-fill-error-pressed)`);
        root.style.setProperty('--color-semantic-fill-info-pressed', `var(--color-semantic-${theme}-fill-info-pressed)`);
        root.style.setProperty('--color-semantic-fill-inactive', `var(--color-semantic-${theme}-fill-inactive)`);
        root.style.setProperty('--color-semantic-fill-rating-active', `var(--color-semantic-${theme}-fill-rating-active)`);
        root.style.setProperty('--color-semantic-fill-rating-inactive', `var(--color-semantic-${theme}-fill-rating-inactive)`);
      }
      
      if (category === 'border') {
        root.style.setProperty('--color-semantic-border-default', `var(--color-semantic-${theme}-border-default)`);
        root.style.setProperty('--color-semantic-border-active', `var(--color-semantic-${theme}-border-active)`);
        root.style.setProperty('--color-semantic-border-filled', `var(--color-semantic-${theme}-border-filled)`);
        root.style.setProperty('--color-semantic-border-success', `var(--color-semantic-${theme}-border-success)`);
        root.style.setProperty('--color-semantic-border-warning', `var(--color-semantic-${theme}-border-warning)`);
        root.style.setProperty('--color-semantic-border-error', `var(--color-semantic-${theme}-border-error)`);
        root.style.setProperty('--color-semantic-border-info', `var(--color-semantic-${theme}-border-info)`);
        root.style.setProperty('--color-semantic-border-strong', `var(--color-semantic-${theme}-border-strong)`);
        root.style.setProperty('--color-semantic-border-stronger', `var(--color-semantic-${theme}-border-stronger)`);
        root.style.setProperty('--color-semantic-border-inactive', `var(--color-semantic-${theme}-border-inactive)`);
      }
    });
  }, [isLightTheme]);

  // Scroll-based topbar visibility
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Show topbar when scrolling up, hide when scrolling down
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsTopbarVisible(false);
      } else {
        setIsTopbarVisible(true);
      }
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [lastScrollY]);

  return (
    <div className={`min-h-screen transition-colors duration-200 bg-background-primary ${className || ''}`}>
      
      {/* Fixed Topbar with Scroll-based Visibility */}
      <div 
        className={`fixed top-0 left-0 right-0 z-50 bg-surface-primary border-b border-border-default shadow-sm transition-transform duration-300 ease-in-out ${
          isTopbarVisible ? 'translate-y-0' : '-translate-y-full'
        }`}
      >
                  <div className="max-w-7xl mx-auto px-layout-md py-1">
          <div className="flex items-center justify-between">
            <h1 className="text-content-primary" style={{
              fontSize: 'var(--typography-typeStyles-display-medium-fontSize)',
              fontWeight: 'var(--typography-typeStyles-display-medium-fontWeight)',
              lineHeight: 'var(--typography-typeStyles-display-medium-lineHeight)',
              letterSpacing: 'var(--typography-typeStyles-display-medium-letterSpacing)'
            }}>
              Design Tokens
            </h1>
            
            {/* Theme Toggle */}
            <button
              className="px-layout-md py-layout-sm bg-fill-primary text-content-inverse rounded-xs text-label font-medium hover:bg-fill-primary-hover transition-colors duration-200"
              onClick={toggleTheme}
            >
              {isLightTheme ? '🌙 Dark Mode' : '☀️ Light Mode'}
            </button>
          </div>
        </div>
      </div>

      {/* Main Content with Top Padding for Fixed Topbar */}
      <main className="pt-28">
        <div className="max-w-7xl mx-auto p-layout-xl">
        
        {/* Color Tokens Section */}
        <section className="mb-layout-2xl">
          <h2 className="text-content-primary mb-layout-lg" style={{
            fontSize: 'var(--typography-typeStyles-heading-extraLarge-fontSize)',
            fontWeight: 'var(--typography-typeStyles-heading-extraLarge-fontWeight)',
            lineHeight: 'var(--typography-typeStyles-heading-extraLarge-lineHeight)',
            letterSpacing: 'var(--typography-typeStyles-heading-extraLarge-letterSpacing)'
          }}>
            Colors
          </h2>
          
          {/* Primitive Colors */}
          <div className="mb-layout-xl">
            <h3 className="text-content-primary mb-layout-md" style={{
              fontSize: 'var(--typography-typeStyles-heading-large-fontSize)',
              fontWeight: 'var(--typography-typeStyles-heading-large-fontWeight)',
              lineHeight: 'var(--typography-typeStyles-heading-large-lineHeight)',
              letterSpacing: 'var(--typography-typeStyles-heading-large-letterSpacing)'
            }}>
              Primitive Colors
            </h3>
            <p className="text-body text-content-secondary mb-layout-lg">
              Raw hex values that form the foundation of our color system
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-layout-lg">
              {/* Grey Scale */}
              <div className="bg-surface-primary rounded-m p-layout-md" style={{ border: 'var(--border-width-s) solid var(--color-semantic-border-default)' }}>
                <h4 className="text-content-primary mb-layout-sm" style={{
                  fontSize: 'var(--typography-typeStyles-title-medium-fontSize)',
                  fontWeight: 'var(--typography-typeStyles-title-medium-fontWeight)',
                  lineHeight: 'var(--typography-typeStyles-title-medium-lineHeight)',
                  letterSpacing: 'var(--typography-typeStyles-title-medium-letterSpacing)'
                }}>Grey Scale</h4>
                <div className="space-y-micro-sm">
                  {[10, 20, 30, 40, 50, 60, 70, 80, 90, 95].map((shade) => (
                    <div key={shade} className="flex items-center gap-layout-sm">
                      <div 
                        className="w-8 h-6 rounded-xs"
                        style={{ border: 'var(--border-width-s) solid var(--color-semantic-border-default)', backgroundColor: `var(--color-primitive-grey-${shade})` }}
                      />
                      <span className="text-label text-content-secondary">Grey {shade}</span>
                      <span className="text-label-small text-content-tertiary">--color-primitive-grey-{shade}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Sand Scale */}
              <div className="bg-surface-primary rounded-m p-layout-md" style={{ border: 'var(--border-width-s) solid var(--color-semantic-border-default)' }}>
                <h4 className="text-content-primary mb-layout-sm" style={{
                  fontSize: 'var(--typography-typeStyles-title-medium-fontSize)',
                  fontWeight: 'var(--typography-typeStyles-title-medium-fontWeight)',
                  lineHeight: 'var(--typography-typeStyles-title-medium-lineHeight)',
                  letterSpacing: 'var(--typography-typeStyles-title-medium-letterSpacing)'
                }}>Sand Scale</h4>
                <div className="space-y-micro-sm">
                  {[10, 20, 30, 40, 50, 60, 70, 80, 90, 95].map((shade) => (
                    <div key={shade} className="flex items-center gap-layout-sm">
                      <div 
                        className="w-8 h-6 rounded-xs"
                        style={{ border: 'var(--border-width-s) solid var(--color-semantic-border-default)', backgroundColor: `var(--color-primitive-sand-${shade})` }}
                      />
                      <span className="text-label text-content-secondary">Sand {shade}</span>
                      <span className="text-label-small text-content-tertiary">--color-primitive-sand-{shade}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Success Scale */}
              <div className="bg-surface-primary rounded-m p-layout-md" style={{ border: 'var(--border-width-s) solid var(--color-semantic-border-default)' }}>
                <h4 className="text-content-primary mb-layout-sm" style={{
                  fontSize: 'var(--typography-typeStyles-title-medium-fontSize)',
                  fontWeight: 'var(--typography-typeStyles-title-medium-fontWeight)',
                  lineHeight: 'var(--typography-typeStyles-title-medium-lineHeight)',
                  letterSpacing: 'var(--typography-typeStyles-title-medium-letterSpacing)'
                }}>Success Scale</h4>
                <div className="space-y-micro-sm">
                  {[10, 20, 30, 40, 50, 60, 70, 80, 90, 95].map((shade) => (
                    <div key={shade} className="flex items-center gap-layout-sm">
                      <div 
                        className="w-8 h-6 rounded-xs"
                        style={{ border: 'var(--border-width-s) solid var(--color-semantic-border-default)', backgroundColor: `var(--color-primitive-success-${shade})` }}
                      />
                      <span className="text-label text-content-secondary">Success {shade}</span>
                      <span className="text-label-small text-content-tertiary">--color-primitive-success-{shade}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Warning Scale */}
              <div className="bg-surface-primary rounded-m p-layout-md" style={{ border: 'var(--border-width-s) solid var(--color-semantic-border-default)' }}>
                <h4 className="text-content-primary mb-layout-sm" style={{
                  fontSize: 'var(--typography-typeStyles-title-medium-fontSize)',
                  fontWeight: 'var(--typography-typeStyles-title-medium-fontWeight)',
                  lineHeight: 'var(--typography-typeStyles-title-medium-lineHeight)',
                  letterSpacing: 'var(--typography-typeStyles-title-medium-letterSpacing)'
                }}>Warning Scale</h4>
                <div className="space-y-micro-sm">
                  {[10, 20, 30, 40, 50, 60, 70, 80, 90, 95].map((shade) => (
                    <div key={shade} className="flex items-center gap-layout-sm">
                      <div 
                        className="w-8 h-6 rounded-xs"
                        style={{ border: 'var(--border-width-s) solid var(--color-semantic-border-default)', backgroundColor: `var(--color-primitive-warning-${shade})` }}
                      />
                      <span className="text-label text-content-secondary">Warning {shade}</span>
                      <span className="text-label-small text-content-tertiary">--color-primitive-warning-{shade}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Error Scale */}
              <div className="bg-surface-primary rounded-m p-layout-md" style={{ border: 'var(--border-width-s) solid var(--color-semantic-border-default)' }}>
                <h4 className="text-content-primary mb-layout-sm" style={{
                  fontSize: 'var(--typography-typeStyles-title-medium-fontSize)',
                  fontWeight: 'var(--typography-typeStyles-title-medium-fontWeight)',
                  lineHeight: 'var(--typography-typeStyles-title-medium-lineHeight)',
                  letterSpacing: 'var(--typography-typeStyles-title-medium-letterSpacing)'
                }}>Error Scale</h4>
                <div className="space-y-micro-sm">
                  {[10, 20, 30, 40, 50, 60, 70, 80, 90, 95].map((shade) => (
                    <div key={shade} className="flex items-center gap-layout-sm">
                      <div 
                        className="w-8 h-6 rounded-xs"
                        style={{ border: 'var(--border-width-s) solid var(--color-semantic-border-default)', backgroundColor: `var(--color-primitive-error-${shade})` }}
                      />
                      <span className="text-label text-content-secondary">Error {shade}</span>
                      <span className="text-label-small text-content-tertiary">--color-primitive-error-{shade}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Info Scale */}
              <div className="bg-surface-primary rounded-m p-layout-md" style={{ border: 'var(--border-width-s) solid var(--color-semantic-border-default)' }}>
                <h4 className="text-content-primary mb-layout-sm" style={{
                  fontSize: 'var(--typography-typeStyles-title-medium-fontSize)',
                  fontWeight: 'var(--typography-typeStyles-title-medium-fontWeight)',
                  lineHeight: 'var(--typography-typeStyles-title-medium-lineHeight)',
                  letterSpacing: 'var(--typography-typeStyles-title-medium-letterSpacing)'
                }}>Info Scale</h4>
                <div className="space-y-micro-sm">
                  {[10, 20, 30, 40, 50, 60, 70, 80, 90, 95].map((shade) => (
                    <div key={shade} className="flex items-center gap-layout-sm">
                      <div 
                        className="w-8 h-6 rounded-xs"
                        style={{ border: 'var(--border-width-s) solid var(--color-semantic-border-default)', backgroundColor: `var(--color-primitive-info-${shade})` }}
                      />
                      <span className="text-label text-content-secondary">Info {shade}</span>
                      <span className="text-label-small text-content-tertiary">--color-primitive-info-{shade}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Orange Scale */}
              <div className="bg-surface-primary rounded-m p-layout-md" style={{ border: 'var(--border-width-s) solid var(--color-semantic-border-default)' }}>
                <h4 className="text-content-primary mb-layout-sm" style={{
                  fontSize: 'var(--typography-typeStyles-title-medium-fontSize)',
                  fontWeight: 'var(--typography-typeStyles-title-medium-fontWeight)',
                  lineHeight: 'var(--typography-typeStyles-title-medium-lineHeight)',
                  letterSpacing: 'var(--typography-typeStyles-title-medium-letterSpacing)'
                }}>Orange Scale</h4>
                <div className="space-y-micro-sm">
                  {[10, 20, 30, 40, 50, 60, 70, 80, 90, 95].map((shade) => (
                    <div key={shade} className="flex items-center gap-layout-sm">
                      <div 
                        className="w-8 h-6 rounded-xs"
                        style={{ border: 'var(--border-width-s) solid var(--color-semantic-border-default)', backgroundColor: `var(--color-primitive-orange-${shade})` }}
                      />
                      <span className="text-label text-content-secondary">Orange {shade}</span>
                      <span className="text-label-small text-content-tertiary">--color-primitive-orange-{shade}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Red Scale */}
              <div className="bg-surface-primary rounded-m p-layout-md" style={{ border: 'var(--border-width-s) solid var(--color-semantic-border-default)' }}>
                <h4 className="text-content-primary mb-layout-sm" style={{
                  fontSize: 'var(--typography-typeStyles-title-medium-fontSize)',
                  fontWeight: 'var(--typography-typeStyles-title-medium-fontWeight)',
                  lineHeight: 'var(--typography-typeStyles-title-medium-lineHeight)',
                  letterSpacing: 'var(--typography-typeStyles-title-medium-letterSpacing)'
                }}>Red Scale</h4>
                <div className="space-y-micro-sm">
                  {[10, 20, 30, 40, 50, 60, 70, 80, 90, 95].map((shade) => (
                    <div key={shade} className="flex items-center gap-layout-sm">
                      <div 
                        className="w-8 h-6 rounded-xs"
                        style={{ border: 'var(--border-width-s) solid var(--color-semantic-border-default)', backgroundColor: `var(--color-primitive-red-${shade})` }}
                      />
                      <span className="text-label text-content-secondary">Red {shade}</span>
                      <span className="text-label-small text-content-tertiary">--color-primitive-red-{shade}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Semantic Colors */}
          <div className="mb-layout-xl">
            <h3 className="text-content-primary mb-layout-md" style={{
              fontSize: 'var(--typography-typeStyles-heading-large-fontSize)',
              fontWeight: 'var(--typography-typeStyles-heading-large-fontWeight)',
              lineHeight: 'var(--typography-typeStyles-heading-large-lineHeight)',
              letterSpacing: 'var(--typography-typeStyles-heading-large-letterSpacing)'
            }}>
              Semantic Colors
            </h3>
            <p className="text-body text-content-secondary mb-layout-lg">
              Contextual colors that automatically adapt to the current theme
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-layout-lg">
              {/* Content Colors */}
              <div className="bg-surface-primary rounded-m p-layout-md" style={{ border: 'var(--border-width-s) solid var(--color-semantic-border-default)' }}>
                <h4 className="text-content-primary mb-layout-sm" style={{
                  fontSize: 'var(--typography-typeStyles-title-medium-fontSize)',
                  fontWeight: 'var(--typography-typeStyles-title-medium-fontWeight)',
                  lineHeight: 'var(--typography-typeStyles-title-medium-lineHeight)',
                  letterSpacing: 'var(--typography-typeStyles-title-medium-letterSpacing)'
                }}>Content Colors</h4>
                <div className="space-y-micro-sm">
                  <div className="text-content-primary text-label">Primary Content</div>
                  <div className="text-label-small text-content-tertiary">--color-semantic-content-primary</div>
                  <div className="text-content-secondary text-label">Secondary Content</div>
                  <div className="text-label-small text-content-tertiary">--color-semantic-content-secondary</div>
                  <div className="text-content-tertiary text-label">Tertiary Content</div>
                  <div className="text-label-small text-content-tertiary">--color-semantic-content-tertiary</div>
                  <div className="text-content-disabled text-label">Disabled Content</div>
                  <div className="text-label-small text-content-tertiary">--color-semantic-content-disabled</div>
                  <div className="text-content-success text-label">Success Content</div>
                  <div className="text-label-small text-content-tertiary">--color-semantic-content-success</div>
                  <div className="text-content-warning text-label">Warning Content</div>
                  <div className="text-label-small text-content-tertiary">--color-semantic-content-warning</div>
                  <div className="text-content-error text-label">Error Content</div>
                  <div className="text-label-small text-content-tertiary">--color-semantic-content-error</div>
                  <div className="text-content-info text-label">Info Content</div>
                  <div className="text-label-small text-content-tertiary">--color-semantic-content-info</div>
                </div>
              </div>

              {/* Background Colors */}
              <div className="bg-surface-primary rounded-m p-layout-md" style={{ border: 'var(--border-width-s) solid var(--color-semantic-border-default)' }}>
                <h4 className="text-content-primary mb-layout-sm" style={{
                  fontSize: 'var(--typography-typeStyles-title-medium-fontSize)',
                  fontWeight: 'var(--typography-typeStyles-title-medium-fontWeight)',
                  lineHeight: 'var(--typography-typeStyles-title-medium-lineHeight)',
                  letterSpacing: 'var(--typography-typeStyles-title-medium-letterSpacing)'
                }}>Background Colors</h4>
                <div className="space-y-micro-sm">
                  <div className="h-6 bg-background-primary rounded-xs" style={{ border: 'var(--border-width-s) solid var(--color-semantic-border-default)' }} />
                  <span className="text-label text-content-secondary">Primary Background</span>
                  <span className="text-label-small text-content-tertiary">--color-semantic-background-primary</span>
                  <div className="h-6 bg-background-secondary rounded-xs" style={{ border: 'var(--border-width-s) solid var(--color-semantic-border-default)' }} />
                  <span className="text-label text-content-secondary">Secondary Background</span>
                  <span className="text-label-small text-content-tertiary">--color-semantic-background-secondary</span>
                  <div className="h-6 bg-background-contrast rounded-xs" style={{ border: 'var(--border-width-s) solid var(--color-semantic-border-default)' }} />
                  <span className="text-label text-content-secondary">Contrast Background</span>
                  <span className="text-label-small text-content-tertiary">--color-semantic-background-contrast</span>
                  <div className="h-6 bg-background-recessive rounded-xs" style={{ border: 'var(--border-width-s) solid var(--color-semantic-border-default)' }} />
                  <span className="text-label text-content-secondary">Recessive Background</span>
                  <span className="text-label-small text-content-tertiary">--color-semantic-background-recessive</span>
                </div>
              </div>

              {/* Surface Colors */}
              <div className="bg-surface-primary rounded-m p-layout-md" style={{ border: 'var(--border-width-s) solid var(--color-semantic-border-default)' }}>
                <h4 className="text-content-primary mb-layout-sm" style={{
                  fontSize: 'var(--typography-typeStyles-title-medium-fontSize)',
                  fontWeight: 'var(--typography-typeStyles-title-medium-fontWeight)',
                  lineHeight: 'var(--typography-typeStyles-title-medium-lineHeight)',
                  letterSpacing: 'var(--typography-typeStyles-title-medium-letterSpacing)'
                }}>Surface Colors</h4>
                <div className="space-y-micro-sm">
                  <div className="h-6 bg-surface-primary rounded-xs" style={{ border: 'var(--border-width-s) solid var(--color-semantic-border-default)' }} />
                  <span className="text-label text-content-secondary">Primary Surface</span>
                  <span className="text-label-small text-content-tertiary">--color-semantic-surface-primary</span>
                  <div className="h-6 bg-surface-secondary rounded-xs" style={{ border: 'var(--border-width-s) solid var(--color-semantic-border-default)' }} />
                  <span className="text-label text-content-secondary">Secondary Surface</span>
                  <span className="text-label-small text-content-tertiary">--color-semantic-surface-secondary</span>
                  <div className="h-6 bg-surface-recessive rounded-xs" style={{ border: 'var(--border-width-s) solid var(--color-semantic-border-default)' }} />
                  <span className="text-label text-content-secondary">Recessive Surface</span>
                  <span className="text-label-small text-content-tertiary">--color-semantic-surface-recessive</span>
                  <div className="h-6 bg-surface-inverse rounded-xs" style={{ border: 'var(--border-width-s) solid var(--color-semantic-border-default)' }} />
                  <span className="text-label text-content-secondary">Inverse Surface</span>
                  <span className="text-label-small text-content-tertiary">--color-semantic-surface-inverse</span>
                </div>
              </div>

              {/* Fill Colors */}
              <div className="bg-surface-primary rounded-m p-layout-md" style={{ border: 'var(--border-width-s) solid var(--color-semantic-border-default)' }}>
                <h4 className="text-content-primary mb-layout-sm" style={{
                  fontSize: 'var(--typography-typeStyles-title-medium-fontSize)',
                  fontWeight: 'var(--typography-typeStyles-title-medium-fontWeight)',
                  lineHeight: 'var(--typography-typeStyles-title-medium-lineHeight)',
                  letterSpacing: 'var(--typography-typeStyles-title-medium-letterSpacing)'
                }}>Fill Colors</h4>
                <div className="space-y-micro-sm">
                  <div className="h-6 bg-fill-primary rounded-xs" style={{ border: 'var(--border-width-s) solid var(--color-semantic-border-default)' }} />
                  <span className="text-label text-content-secondary">Primary Fill</span>
                  <span className="text-label-small text-content-tertiary">--color-semantic-fill-primary</span>
                  <div className="h-6 bg-fill-secondary rounded-xs" style={{ border: 'var(--border-width-s) solid var(--color-semantic-border-default)' }} />
                  <span className="text-label text-content-secondary">Secondary Fill</span>
                  <span className="text-label-small text-content-tertiary">--color-semantic-fill-secondary</span>
                  <div className="h-6 bg-fill-tertiary rounded-xs" style={{ border: 'var(--border-width-s) solid var(--color-semantic-border-default)' }} />
                  <span className="text-label text-content-secondary">Tertiary Fill</span>
                  <span className="text-label-small text-content-tertiary">--color-semantic-fill-tertiary</span>
                  <div className="h-6 bg-fill-success rounded-xs" style={{ border: 'var(--border-width-s) solid var(--color-semantic-border-default)' }} />
                  <span className="text-label text-content-secondary">Success Fill</span>
                  <span className="text-label-small text-content-tertiary">--color-semantic-fill-success</span>
                  <div className="h-6 bg-fill-warning rounded-xs" style={{ border: 'var(--border-width-s) solid var(--color-semantic-border-default)' }} />
                  <span className="text-label text-content-secondary">Warning Fill</span>
                  <span className="text-label-small text-content-tertiary">--color-semantic-fill-warning</span>
                  <div className="h-6 bg-fill-error rounded-xs" style={{ border: 'var(--border-width-s) solid var(--color-semantic-border-default)' }} />
                  <span className="text-label text-content-secondary">Error Fill</span>
                  <span className="text-label-small text-content-tertiary">--color-semantic-fill-error</span>
                  <div className="h-6 bg-fill-info rounded-xs" style={{ border: 'var(--border-width-s) solid var(--color-semantic-border-default)' }} />
                  <span className="text-label text-content-secondary">Info Fill</span>
                  <span className="text-label-small text-content-tertiary">--color-semantic-fill-info</span>
                </div>
              </div>

              {/* Border Colors */}
              <div className="bg-surface-primary rounded-m p-layout-md" style={{ border: 'var(--border-width-s) solid var(--color-semantic-border-default)' }}>
                <h4 className="text-content-primary mb-layout-sm" style={{
                  fontSize: 'var(--typography-typeStyles-title-medium-fontSize)',
                  fontWeight: 'var(--typography-typeStyles-title-medium-fontWeight)',
                  lineHeight: 'var(--typography-typeStyles-title-medium-lineHeight)',
                  letterSpacing: 'var(--typography-typeStyles-title-medium-letterSpacing)'
                }}>Border Colors</h4>
                <div className="space-y-micro-sm">
                  <div className="flex items-center gap-layout-sm">
                    <div className="h-8 w-8 rounded-xs" style={{ border: 'var(--border-width-m) solid var(--color-semantic-border-default)' }} />
                    <span className="text-label text-content-secondary">Default Border</span>
                    <span className="text-label-small text-content-tertiary">--color-semantic-border-default</span>
                  </div>
                  <div className="flex items-center gap-layout-sm">
                    <div className="h-8 w-8 rounded-xs" style={{ border: 'var(--border-width-m) solid var(--color-semantic-border-strong)' }} />
                    <span className="text-label text-content-secondary">Strong Border</span>
                    <span className="text-label-small text-content-tertiary">--color-semantic-border-strong</span>
                  </div>
                  <div className="flex items-center gap-layout-sm">
                    <div className="h-8 w-8 rounded-xs" style={{ border: 'var(--border-width-m) solid var(--color-semantic-border-stronger)' }} />
                    <span className="text-label text-content-secondary">Stronger Border</span>
                    <span className="text-label-small text-content-tertiary">--color-semantic-border-stronger</span>
                  </div>
                  <div className="flex items-center gap-layout-sm">
                    <div className="h-8 w-8 rounded-xs" style={{ border: 'var(--border-width-m) solid var(--color-semantic-border-active)' }} />
                    <span className="text-label text-content-secondary">Active Border</span>
                    <span className="text-label-small text-content-tertiary">--color-semantic-border-active</span>
                  </div>
                  <div className="flex items-center gap-layout-sm">
                    <div className="h-8 w-8 rounded-xs" style={{ border: 'var(--border-width-m) solid var(--color-semantic-border-inactive)' }} />
                    <span className="text-label text-content-secondary">Inactive Border</span>
                    <span className="text-label-small text-content-tertiary">--color-semantic-border-inactive</span>
                  </div>
                  <div className="flex items-center gap-layout-sm">
                    <div className="h-8 w-8 rounded-xs" style={{ border: 'var(--border-width-m) solid var(--color-semantic-border-filled)' }} />
                    <span className="text-label text-content-secondary">Filled Border</span>
                    <span className="text-label-small text-content-tertiary">--color-semantic-border-filled</span>
                  </div>
                  <div className="flex items-center gap-layout-sm">
                    <div className="h-8 w-8 rounded-xs" style={{ border: 'var(--border-width-m) solid var(--color-semantic-border-success)' }} />
                    <span className="text-label text-content-secondary">Success Border</span>
                    <span className="text-label-small text-content-tertiary">--color-semantic-border-success</span>
                    </div>
                  <div className="flex items-center gap-layout-sm">
                    <div className="h-8 w-8 rounded-xs" style={{ border: 'var(--border-width-m) solid var(--color-semantic-border-warning)' }} />
                    <span className="text-label text-content-secondary">Warning Border</span>
                    <span className="text-label-small text-content-tertiary">--color-semantic-border-warning</span>
                  </div>
                  <div className="flex items-center gap-layout-sm">
                    <div className="h-8 w-8 rounded-xs" style={{ border: 'var(--border-width-m) solid var(--color-semantic-border-error)' }} />
                    <span className="text-label text-content-secondary">Error Border</span>
                    <span className="text-label-small text-content-tertiary">--color-semantic-border-error</span>
                  </div>
                  <div className="flex items-center gap-layout-sm">
                    <div className="h-8 w-8 rounded-xs" style={{ border: 'var(--border-width-m) solid var(--color-semantic-border-info)' }} />
                    <span className="text-label text-content-secondary">Info Border</span>
                    <span className="text-label-small text-content-tertiary">--color-semantic-border-info</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Spacing Tokens Section */}
        <section className="mb-layout-2xl">
          <h2 className="text-content-primary mb-layout-lg" style={{
            fontSize: 'var(--typography-typeStyles-heading-extraLarge-fontSize)',
            fontWeight: 'var(--typography-typeStyles-heading-extraLarge-fontWeight)',
            lineHeight: 'var(--typography-typeStyles-heading-extraLarge-lineHeight)',
            letterSpacing: 'var(--typography-typeStyles-heading-extraLarge-letterSpacing)'
          }}>
            Spacing
          </h2>
          <p className="text-body text-content-secondary mb-layout-lg">
            Consistent spacing values used throughout the design system
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-layout-lg">
            {/* Base Spacing */}
            <div className="bg-surface-primary rounded-m p-layout-md" style={{ border: 'var(--border-width-s) solid var(--color-semantic-border-default)' }}>
              <h4 className="text-content-primary mb-layout-md" style={{
              fontSize: 'var(--typography-typeStyles-title-medium-fontSize)',
              fontWeight: 'var(--typography-typeStyles-title-medium-fontWeight)',
              lineHeight: 'var(--typography-typeStyles-title-medium-lineHeight)',
              letterSpacing: 'var(--typography-typeStyles-title-medium-letterSpacing)'
            }}>Base Spacing</h4>
              <div className="space-y-layout-sm">
                <div className="flex items-center gap-layout-sm">
                  <div className="bg-fill-primary h-4" style={{ width: 'var(--spacing-xxxxl)' }} />
                  <span className="text-label text-content-secondary">XXXXL (2px)</span>
                  <span className="text-label-small text-content-tertiary">--spacing-xxxxl</span>
                </div>
                <div className="flex items-center gap-layout-sm">
                  <div className="bg-fill-primary h-4" style={{ width: 'var(--spacing-xxxl)' }} />
                  <span className="text-label text-content-secondary">XXXL (4px)</span>
                  <span className="text-label-small text-content-tertiary">--spacing-xxxl</span>
                </div>
                <div className="flex items-center gap-layout-sm">
                  <div className="bg-fill-primary h-4" style={{ width: 'var(--spacing-xxl)' }} />
                  <span className="text-label text-content-secondary">XXL (6px)</span>
                  <span className="text-label-small text-content-tertiary">--spacing-xxl</span>
                </div>
                <div className="flex items-center gap-layout-sm">
                  <div className="bg-fill-primary h-4" style={{ width: 'var(--spacing-xl)' }} />
                  <span className="text-label text-content-secondary">XL (8px)</span>
                  <span className="text-label-small text-content-tertiary">--spacing-xl</span>
                </div>
                <div className="flex items-center gap-layout-sm">
                  <div className="bg-fill-primary h-4" style={{ width: 'var(--spacing-l)' }} />
                  <span className="text-label text-content-secondary">L (12px)</span>
                  <span className="text-label-small text-content-tertiary">--spacing-l</span>
                </div>
                <div className="flex items-center gap-layout-sm">
                  <div className="bg-fill-primary h-4" style={{ width: 'var(--spacing-m)' }} />
                  <span className="text-label text-content-secondary">M (16px)</span>
                  <span className="text-label-small text-content-tertiary">--spacing-m</span>
                </div>
              </div>
            </div>

            {/* Component Spacing */}
            <div className="bg-surface-primary rounded-m p-layout-md" style={{ border: 'var(--border-width-s) solid var(--color-semantic-border-default)' }}>
              <h4 className="text-content-primary mb-layout-md" style={{
              fontSize: 'var(--typography-typeStyles-title-medium-fontSize)',
              fontWeight: 'var(--typography-typeStyles-title-medium-fontWeight)',
              lineHeight: 'var(--typography-typeStyles-title-medium-lineHeight)',
              letterSpacing: 'var(--typography-typeStyles-title-medium-letterSpacing)'
            }}>Component Spacing</h4>
              <div className="space-y-layout-sm">
                <div className="flex items-center gap-layout-sm">
                  <div className="bg-fill-primary h-4" style={{ width: 'var(--spacing-component-xs)' }} />
                  <span className="text-label text-content-secondary">XS (16px)</span>
                  <span className="text-label-small text-content-tertiary">--spacing-component-xs</span>
                </div>
                <div className="flex items-center gap-layout-sm">
                  <div className="bg-fill-primary h-4" style={{ width: 'var(--spacing-component-sm)' }} />
                  <span className="text-label text-content-secondary">SM (24px)</span>
                  <span className="text-label-small text-content-tertiary">--spacing-component-sm</span>
                </div>
                <div className="flex items-center gap-layout-sm">
                  <div className="bg-fill-primary h-4" style={{ width: 'var(--spacing-component-md)' }} />
                  <span className="text-label text-content-secondary">MD (32px)</span>
                  <span className="text-label-small text-content-tertiary">--spacing-component-md</span>
                </div>
                <div className="flex items-center gap-layout-sm">
                  <div className="bg-fill-primary h-4" style={{ width: 'var(--spacing-component-lg)' }} />
                  <span className="text-label text-content-secondary">LG (48px)</span>
                  <span className="text-label-small text-content-tertiary">--spacing-component-lg</span>
                </div>
                <div className="flex items-center gap-layout-sm">
                  <div className="bg-fill-primary h-4" style={{ width: 'var(--spacing-component-xl)' }} />
                  <span className="text-label text-content-secondary">XL (64px)</span>
                  <span className="text-label-small text-content-tertiary">--spacing-component-xl</span>
                </div>
              </div>
            </div>

            {/* Layout Spacing */}
            <div className="bg-surface-primary rounded-m p-layout-md" style={{ border: 'var(--border-width-s) solid var(--color-semantic-border-default)' }}>
              <h4 className="text-content-primary mb-layout-md" style={{
              fontSize: 'var(--typography-typeStyles-title-medium-fontSize)',
              fontWeight: 'var(--typography-typeStyles-title-medium-fontWeight)',
              lineHeight: 'var(--typography-typeStyles-title-medium-lineHeight)',
              letterSpacing: 'var(--typography-typeStyles-title-medium-letterSpacing)'
            }}>Layout Spacing</h4>
              <div className="space-y-layout-sm">
                <div className="flex items-center gap-layout-sm">
                  <div className="bg-fill-primary h-4" style={{ width: 'var(--spacing-layout-xs)' }} />
                  <span className="text-label text-content-secondary">XS (8px)</span>
                  <span className="text-label-small text-content-tertiary">--spacing-layout-xs</span>
                </div>
                <div className="flex items-center gap-layout-sm">
                  <div className="bg-fill-primary h-4" style={{ width: 'var(--spacing-layout-sm)' }} />
                  <span className="text-label text-content-secondary">SM (16px)</span>
                  <span className="text-label-small text-content-tertiary">--spacing-layout-sm</span>
                </div>
                <div className="flex items-center gap-layout-sm">
                  <div className="bg-fill-primary h-4" style={{ width: 'var(--spacing-layout-md)' }} />
                  <span className="text-label text-content-secondary">MD (24px)</span>
                  <span className="text-label-small text-content-tertiary">--spacing-layout-md</span>
                </div>
                <div className="flex items-center gap-layout-sm">
                  <div className="bg-fill-primary h-4" style={{ width: 'var(--spacing-layout-lg)' }} />
                  <span className="text-label text-content-secondary">LG (32px)</span>
                  <span className="text-label-small text-content-tertiary">--spacing-layout-lg</span>
                </div>
                <div className="flex items-center gap-layout-sm">
                  <div className="bg-fill-primary h-4" style={{ width: 'var(--spacing-layout-xl)' }} />
                  <span className="text-label text-content-secondary">XL (48px)</span>
                  <span className="text-label-small text-content-tertiary">--spacing-layout-xl</span>
                </div>
                <div className="flex items-center gap-layout-sm">
                  <div className="bg-fill-primary h-4" style={{ width: 'var(--spacing-layout-2xl)' }} />
                  <span className="text-label text-content-secondary">2XL (64px)</span>
                  <span className="text-label-small text-content-tertiary">--spacing-layout-2xl</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Typography Tokens Section */}
        <section className="mb-layout-2xl">
          <h2 className="text-content-primary mb-layout-lg" style={{
            fontSize: 'var(--typography-typeStyles-heading-extraLarge-fontSize)',
            fontWeight: 'var(--typography-typeStyles-heading-extraLarge-fontWeight)',
            lineHeight: 'var(--typography-typeStyles-heading-extraLarge-lineHeight)',
            letterSpacing: 'var(--typography-typeStyles-heading-extraLarge-letterSpacing)'
          }}>
            Typography
          </h2>
          <p className="text-body text-content-secondary mb-layout-lg">
            Type styles and font specifications used throughout the design system
          </p>
          
          {/* Typography Attributes */}
          <div className="mb-layout-xl">
            <h3 className="text-content-primary mb-layout-md" style={{
              fontSize: 'var(--typography-typeStyles-heading-large-fontSize)',
              fontWeight: 'var(--typography-typeStyles-heading-large-fontWeight)',
              lineHeight: 'var(--typography-typeStyles-heading-large-lineHeight)',
              letterSpacing: 'var(--typography-typeStyles-heading-large-letterSpacing)'
            }}>
              Typography Attributes
            </h3>
            <p className="text-body text-content-secondary mb-layout-lg">
              Font weights, line heights, letter spacing, and font family specifications
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-layout-lg">
            {/* Font Weights */}
            <div className="bg-surface-primary rounded-m p-layout-md" style={{ border: 'var(--border-width-s) solid var(--color-semantic-border-default)' }}>
              <h4 className="text-content-primary mb-layout-md" style={{
                fontSize: 'var(--typography-typeStyles-title-medium-fontSize)',
                fontWeight: 'var(--typography-typeStyles-title-medium-fontWeight)',
                lineHeight: 'var(--typography-typeStyles-title-medium-lineHeight)',
                letterSpacing: 'var(--typography-typeStyles-title-medium-letterSpacing)'
              }}>Font Weights</h4>
              <div className="space-y-layout-sm">
                <div className="text-body text-content-primary" style={{ fontWeight: 'var(--typography-fontWeight-regular)' }}>
                  Regular (400)
                  <div className="text-label-small text-content-tertiary">--typography-fontWeight-regular</div>
                </div>
                <div className="text-body text-content-primary" style={{ fontWeight: 'var(--typography-fontWeight-medium)' }}>
                  Medium (500)
                  <div className="text-label-small text-content-tertiary">--typography-fontWeight-medium</div>
                </div>
                <div className="text-body text-content-primary" style={{ fontWeight: 'var(--typography-fontWeight-semibold)' }}>
                  Semibold (600)
                  <div className="text-label-small text-content-tertiary">--typography-fontWeight-semibold</div>
                </div>
                <div className="text-body text-content-primary" style={{ fontWeight: 'var(--typography-fontWeight-bold)' }}>
                  Bold (700)
                  <div className="text-label-small text-content-tertiary">--typography-fontWeight-bold</div>
                </div>
              </div>
            </div>

            {/* Line Heights */}
            <div className="bg-surface-primary rounded-m p-layout-md" style={{ border: 'var(--border-width-s) solid var(--color-semantic-border-default)' }}>
              <h4 className="text-content-primary mb-layout-md" style={{
                fontSize: 'var(--typography-typeStyles-title-medium-fontSize)',
                fontWeight: 'var(--typography-typeStyles-title-medium-fontWeight)',
                lineHeight: 'var(--typography-typeStyles-title-medium-lineHeight)',
                letterSpacing: 'var(--typography-typeStyles-title-medium-letterSpacing)'
              }}>Line Heights</h4>
              <div className="space-y-layout-sm">
                <div className="text-body text-content-primary" style={{ lineHeight: 'var(--typography-lineHeight-tight)' }}>
                  Tight (1.05)
                  <div className="text-label-small text-content-tertiary">--typography-lineHeight-tight</div>
                </div>
                <div className="text-body text-content-primary" style={{ lineHeight: 'var(--typography-lineHeight-normal)' }}>
                  Normal (1.2)
                  <div className="text-label-small text-content-tertiary">--typography-lineHeight-normal</div>
                </div>
                <div className="text-body text-content-primary" style={{ lineHeight: 'var(--typography-lineHeight-relaxed)' }}>
                  Relaxed (1.6)
                  <div className="text-label-small text-content-tertiary">--typography-lineHeight-relaxed</div>
                </div>
              </div>
            </div>

            {/* Letter Spacing */}
            <div className="bg-surface-primary rounded-m p-layout-md" style={{ border: 'var(--border-width-s) solid var(--color-semantic-border-default)' }}>
              <h4 className="text-content-primary mb-layout-md" style={{
                fontSize: 'var(--typography-typeStyles-title-medium-fontSize)',
                fontWeight: 'var(--typography-typeStyles-title-medium-fontWeight)',
                lineHeight: 'var(--typography-typeStyles-title-medium-lineHeight)',
                letterSpacing: 'var(--typography-typeStyles-title-medium-letterSpacing)'
              }}>Letter Spacing</h4>
              <div className="space-y-layout-sm">
                <div className="text-body text-content-primary" style={{ letterSpacing: 'var(--typography-letterSpacing-tight)' }}>
                  Tight (-0.04em)
                  <div className="text-label-small text-content-tertiary">--typography-letterSpacing-tight</div>
                </div>
                <div className="text-body text-content-primary" style={{ letterSpacing: 'var(--typography-letterSpacing-normal)' }}>
                  Normal (-0.03em)
                  <div className="text-label-small text-content-tertiary">--typography-letterSpacing-normal</div>
                </div>
                <div className="text-body text-content-primary" style={{ letterSpacing: 'var(--typography-letterSpacing-small)' }}>
                  Small (-0.02em)
                  <div className="text-label-small text-content-tertiary">--typography-letterSpacing-small</div>
                </div>
                <div className="text-body text-content-primary" style={{ letterSpacing: 'var(--typography-letterSpacing-micro)' }}>
                  Micro (-0.01em)
                  <div className="text-label-small text-content-tertiary">--typography-letterSpacing-micro</div>
                </div>
                <div className="text-body text-content-primary" style={{ letterSpacing: 'var(--typography-letterSpacing-none)' }}>
                  None (normal)
                  <div className="text-label-small text-content-tertiary">--typography-letterSpacing-none</div>
                </div>
              </div>
            </div>

            {/* Font Family */}
            <div className="bg-surface-primary rounded-m p-layout-md" style={{ border: 'var(--border-width-s) solid var(--color-semantic-border-default)' }}>
              <h4 className="text-content-primary mb-layout-md" style={{
                fontSize: 'var(--typography-typeStyles-title-medium-fontSize)',
                fontWeight: 'var(--typography-typeStyles-title-medium-fontWeight)',
                lineHeight: 'var(--typography-typeStyles-title-medium-lineHeight)',
                letterSpacing: 'var(--typography-typeStyles-title-medium-letterSpacing)'
              }}>Font Family</h4>
              <div className="space-y-layout-sm">
                <div className="text-body text-content-primary" style={{ fontFamily: 'var(--typography-fontFamily-primary)' }}>
                  Primary Font
                  <div className="text-label-small text-content-tertiary">--typography-fontFamily-primary</div>
                  <div className="text-label text-content-secondary mt-layout-xs">Figtree, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif</div>
                </div>
              </div>
            </div>
          </div>

          {/* Detailed Type Styles */}
          <div className="mt-layout-lg">
            <h3 className="text-content-primary mb-layout-lg" style={{
              fontSize: 'var(--typography-typeStyles-heading-large-fontSize)',
              fontWeight: 'var(--typography-typeStyles-heading-large-fontWeight)',
              lineHeight: 'var(--typography-typeStyles-heading-large-lineHeight)',
              letterSpacing: 'var(--typography-typeStyles-heading-large-letterSpacing)'
            }}>Detailed Type Styles</h3>
            
            {/* Display Styles - Full Width */}
            <div className="bg-surface-primary rounded-m p-layout-md mb-layout-lg" style={{ border: 'var(--border-width-s) solid var(--color-semantic-border-default)' }}>
              <h4 className="text-content-primary mb-layout-md" style={{
                fontSize: 'var(--typography-typeStyles-title-medium-fontSize)',
                fontWeight: 'var(--typography-typeStyles-title-medium-fontWeight)',
                lineHeight: 'var(--typography-typeStyles-title-medium-lineHeight)',
                letterSpacing: 'var(--typography-typeStyles-title-medium-letterSpacing)'
              }}>Display Styles</h4>
              <p className="text-body text-content-secondary mb-layout-lg">Reserved for big callouts and punchy headlines</p>
              <div className="space-y-layout-md">
                <div>
                  <div 
                    className="text-content-primary mb-layout-xs"
                    style={{
                      fontSize: 'var(--typography-typeStyles-display-large-fontSize)',
                      fontWeight: 'var(--typography-typeStyles-display-large-fontWeight)',
                      lineHeight: 'var(--typography-typeStyles-display-large-lineHeight)',
                      letterSpacing: 'var(--typography-typeStyles-display-large-letterSpacing)'
                    }}
                  >
                    Display Large - 96px
                  </div>
                  <p className="text-label-small text-content-tertiary">--typography-typeStyles-display-large</p>
                </div>
                <div>
                  <div 
                    className="text-content-primary mb-layout-xs"
                    style={{
                      fontSize: 'var(--typography-typeStyles-display-medium-fontSize)',
                      fontWeight: 'var(--typography-typeStyles-display-medium-fontWeight)',
                      lineHeight: 'var(--typography-typeStyles-display-medium-lineHeight)',
                      letterSpacing: 'var(--typography-typeStyles-display-medium-letterSpacing)'
                    }}
                  >
                    Display Medium - 64px
                  </div>
                  <p className="text-label-small text-content-tertiary">--typography-typeStyles-display-medium</p>
                </div>
                <div>
                  <div 
                    className="text-content-primary mb-layout-xs"
                    style={{
                      fontSize: 'var(--typography-typeStyles-display-small-fontSize)',
                      fontWeight: 'var(--typography-typeStyles-display-small-fontWeight)',
                      lineHeight: 'var(--typography-typeStyles-display-small-lineHeight)',
                      letterSpacing: 'var(--typography-typeStyles-display-small-letterSpacing)'
                    }}
                  >
                    Display Small - 48px
                  </div>
                  <p className="text-label-small text-content-tertiary">--typography-typeStyles-display-small</p>
                </div>
              </div>
            </div>

            {/* Heading Styles - Full Width */}
            <div className="bg-surface-primary rounded-m p-layout-md mb-layout-lg" style={{ border: 'var(--border-width-s) solid var(--color-semantic-border-default)' }}>
              <h4 className="text-content-primary mb-layout-md" style={{
                fontSize: 'var(--typography-typeStyles-title-medium-fontSize)',
                fontWeight: 'var(--typography-typeStyles-title-medium-fontWeight)',
                lineHeight: 'var(--typography-typeStyles-title-medium-lineHeight)',
                letterSpacing: 'var(--typography-typeStyles-title-medium-letterSpacing)'
              }}>Heading Styles</h4>
              <p className="text-body text-content-secondary mb-layout-lg">Used for categorisation or separation of content</p>
              <div className="space-y-layout-md">
                <div>
                  <div 
                    className="text-content-primary mb-layout-xs"
                    style={{
                      fontSize: 'var(--typography-typeStyles-heading-extraLarge-fontSize)',
                      fontWeight: 'var(--typography-typeStyles-heading-extraLarge-fontWeight)',
                      lineHeight: 'var(--typography-typeStyles-heading-extraLarge-lineHeight)',
                      letterSpacing: 'var(--typography-typeStyles-heading-extraLarge-letterSpacing)'
                    }}
                  >
                    Heading Extra Large - 36px
                  </div>
                  <p className="text-label-small text-content-tertiary">--typography-typeStyles-heading-extra-large</p>
                </div>
                <div>
                  <div 
                    className="text-content-primary mb-layout-xs"
                    style={{
                      fontSize: 'var(--typography-typeStyles-heading-large-fontSize)',
                      fontWeight: 'var(--typography-typeStyles-heading-large-fontWeight)',
                      lineHeight: 'var(--typography-typeStyles-heading-large-lineHeight)',
                      letterSpacing: 'var(--typography-typeStyles-heading-large-letterSpacing)'
                    }}
                  >
                    Heading Large - 24px
                  </div>
                  <p className="text-label-small text-content-tertiary">--typography-typeStyles-heading-large</p>
                </div>
                <div>
                  <div 
                    className="text-content-primary mb-layout-xs"
                    style={{
                      fontSize: 'var(--typography-typeStyles-heading-medium-fontSize)',
                      fontWeight: 'var(--typography-typeStyles-heading-medium-fontWeight)',
                      lineHeight: 'var(--typography-typeStyles-heading-medium-lineHeight)',
                      letterSpacing: 'var(--typography-typeStyles-heading-medium-letterSpacing)'
                    }}
                  >
                    Heading Medium - 22px
                  </div>
                  <p className="text-label-small text-content-tertiary">--typography-typeStyles-heading-medium</p>
                </div>
                <div>
                  <div 
                    className="text-content-primary mb-layout-xs"
                    style={{
                      fontSize: 'var(--typography-typeStyles-heading-small-fontSize)',
                      fontWeight: 'var(--typography-typeStyles-heading-small-fontWeight)',
                      lineHeight: 'var(--typography-typeStyles-heading-small-lineHeight)',
                      letterSpacing: 'var(--typography-typeStyles-heading-small-letterSpacing)'
                    }}
                  >
                    Heading Small - 20px
                  </div>
                  <p className="text-label-small text-content-tertiary">--typography-typeStyles-heading-small</p>
                </div>
              </div>
            </div>

            {/* Title Styles - Full Width */}
            <div className="bg-surface-primary rounded-m p-layout-md mb-layout-lg" style={{ border: 'var(--border-width-s) solid var(--color-semantic-border-default)' }}>
              <h4 className="text-content-primary mb-layout-md" style={{
                fontSize: 'var(--typography-typeStyles-title-medium-fontSize)',
                fontWeight: 'var(--typography-typeStyles-title-medium-fontWeight)',
                lineHeight: 'var(--typography-typeStyles-title-medium-lineHeight)',
                letterSpacing: 'var(--typography-typeStyles-title-medium-letterSpacing)'
              }}>Title Styles</h4>
              <p className="text-body text-content-secondary mb-layout-lg">Names of things within a section that has a heading</p>
              <div className="space-y-layout-md">
                <div>
                  <div 
                    className="text-content-primary mb-layout-xs"
                    style={{
                      fontSize: 'var(--typography-typeStyles-title-extraLarge-fontSize)',
                      fontWeight: 'var(--typography-typeStyles-title-extraLarge-fontWeight)',
                      lineHeight: 'var(--typography-typeStyles-title-extraLarge-lineHeight)',
                      letterSpacing: 'var(--typography-typeStyles-title-extraLarge-letterSpacing)'
                    }}
                  >
                    Title Extra Large - 24px
                  </div>
                  <p className="text-label-small text-content-tertiary">--typography-typeStyles-title-extra-large</p>
                </div>
                <div>
                  <div 
                    className="text-content-primary mb-layout-xs"
                    style={{
                      fontSize: 'var(--typography-typeStyles-title-large-fontSize)',
                      fontWeight: 'var(--typography-typeStyles-title-large-fontWeight)',
                      lineHeight: 'var(--typography-typeStyles-title-large-lineHeight)',
                      letterSpacing: 'var(--typography-typeStyles-title-large-letterSpacing)'
                    }}
                  >
                    Title Large - 22px
                  </div>
                  <p className="text-label-small text-content-tertiary">--typography-typeStyles-title-large</p>
                </div>
                <div>
                  <div 
                    className="text-content-primary mb-layout-xs"
                    style={{
                      fontSize: 'var(--typography-typeStyles-title-medium-fontSize)',
                      fontWeight: 'var(--typography-typeStyles-title-medium-fontWeight)',
                      lineHeight: 'var(--typography-typeStyles-title-medium-lineHeight)',
                      letterSpacing: 'var(--typography-typeStyles-title-medium-letterSpacing)'
                    }}
                  >
                    Title Medium - 20px
                  </div>
                  <p className="text-label-small text-content-tertiary">--typography-typeStyles-title-medium</p>
                </div>
                <div>
                  <div 
                    className="text-content-primary mb-layout-xs"
                    style={{
                      fontSize: 'var(--typography-typeStyles-title-small-fontSize)',
                      fontWeight: 'var(--typography-typeStyles-title-small-fontWeight)',
                      lineHeight: 'var(--typography-typeStyles-title-small-lineHeight)',
                      letterSpacing: 'var(--typography-typeStyles-title-small-letterSpacing)'
                    }}
                  >
                    Title Small - 18px
                  </div>
                  <p className="text-label-small text-content-tertiary">--typography-typeStyles-title-small</p>
                </div>
                <div>
                  <div 
                    className="text-content-primary mb-layout-xs"
                    style={{
                      fontSize: 'var(--typography-typeStyles-title-extraSmall-fontSize)',
                      fontWeight: 'var(--typography-typeStyles-title-extraSmall-fontWeight)',
                      lineHeight: 'var(--typography-typeStyles-title-extraSmall-lineHeight)',
                      letterSpacing: 'var(--typography-typeStyles-title-extraSmall-letterSpacing)'
                    }}
                  >
                    Title Extra Small - 16px
                  </div>
                  <p className="text-label-small text-content-tertiary">--typography-typeStyles-title-extra-small</p>
                </div>
              </div>
            </div>

            {/* Body Styles - Full Width */}
            <div className="bg-surface-primary rounded-m p-layout-md mb-layout-lg" style={{ border: 'var(--border-width-s) solid var(--color-semantic-border-default)' }}>
              <h4 className="text-content-primary mb-layout-md" style={{
                fontSize: 'var(--typography-typeStyles-title-medium-fontSize)',
                fontWeight: 'var(--typography-typeStyles-title-medium-fontWeight)',
                lineHeight: 'var(--typography-typeStyles-title-medium-lineHeight)',
                letterSpacing: 'var(--typography-typeStyles-title-medium-letterSpacing)'
              }}>Body Styles</h4>
              <p className="text-body text-content-secondary mb-layout-lg">Used for paragraphs and lines of text</p>
              <div className="space-y-layout-md">
                <div>
                  <div 
                    className="text-content-primary mb-layout-xs"
                    style={{
                      fontSize: 'var(--typography-typeStyles-body-extraLarge-fontSize)',
                      fontWeight: 'var(--typography-typeStyles-body-extraLarge-fontWeight)',
                      lineHeight: 'var(--typography-typeStyles-body-extraLarge-lineHeight)',
                      letterSpacing: 'var(--typography-typeStyles-body-extraLarge-letterSpacing)'
                    }}
                  >
                    Body Extra Large - 22px
                  </div>
                  <p className="text-label-small text-content-tertiary">--typography-typeStyles-body-extra-large</p>
                </div>
                <div>
                  <div 
                    className="text-content-primary mb-layout-xs"
                    style={{
                      fontSize: 'var(--typography-typeStyles-body-large-fontSize)',
                      fontWeight: 'var(--typography-typeStyles-body-large-fontWeight)',
                      lineHeight: 'var(--typography-typeStyles-body-large-lineHeight)',
                      letterSpacing: 'var(--typography-typeStyles-body-large-letterSpacing)'
                    }}
                  >
                    Body Large - 20px
                  </div>
                  <p className="text-label-small text-content-tertiary">--typography-typeStyles-body-large</p>
                </div>
                <div>
                  <div 
                    className="text-content-primary mb-layout-xs"
                    style={{
                      fontSize: 'var(--typography-typeStyles-body-medium-fontSize)',
                      fontWeight: 'var(--typography-typeStyles-body-medium-fontWeight)',
                      lineHeight: 'var(--typography-typeStyles-body-medium-lineHeight)',
                      letterSpacing: 'var(--typography-typeStyles-body-medium-letterSpacing)'
                    }}
                  >
                    Body Medium - 18px
                  </div>
                  <p className="text-label-small text-content-tertiary">--typography-typeStyles-body-medium</p>
                </div>
                <div>
                  <div 
                    className="text-content-primary mb-layout-xs"
                    style={{
                      fontSize: 'var(--typography-typeStyles-body-small-fontSize)',
                      fontWeight: 'var(--typography-typeStyles-body-small-fontWeight)',
                      lineHeight: 'var(--typography-typeStyles-body-small-lineHeight)',
                      letterSpacing: 'var(--typography-typeStyles-body-small-letterSpacing)'
                    }}
                  >
                    Body Small - 16px
                  </div>
                  <p className="text-label-small text-content-tertiary">--typography-typeStyles-body-small</p>
                </div>
                <div>
                  <div 
                    className="text-content-primary mb-layout-xs"
                    style={{
                      fontSize: 'var(--typography-typeStyles-body-extraSmall-fontSize)',
                      fontWeight: 'var(--typography-typeStyles-body-extraSmall-fontWeight)',
                      lineHeight: 'var(--typography-typeStyles-body-extraSmall-lineHeight)',
                      letterSpacing: 'var(--typography-typeStyles-body-extraSmall-letterSpacing)'
                    }}
                  >
                    Body Extra Small - 14px
                  </div>
                  <p className="text-label-small text-content-tertiary">--typography-typeStyles-body-extra-small</p>
                </div>
                <div>
                  <div 
                    className="text-content-primary mb-layout-xs"
                    style={{
                      fontSize: 'var(--typography-typeStyles-body-extraExtraSmall-fontSize)',
                      fontWeight: 'var(--typography-typeStyles-body-extraExtraSmall-fontWeight)',
                      lineHeight: 'var(--typography-typeStyles-body-extraExtraSmall-lineHeight)',
                      letterSpacing: 'var(--typography-typeStyles-body-extraExtraSmall-letterSpacing)'
                    }}
                  >
                    Body Extra Extra Small - 12px
                  </div>
                  <p className="text-label-small text-content-tertiary">--typography-typeStyles-body-extra-extra-small</p>
                </div>
              </div>
            </div>

            {/* Label Styles - Full Width */}
            <div className="bg-surface-primary rounded-m p-layout-md mb-layout-lg" style={{ border: 'var(--border-width-s) solid var(--color-semantic-border-default)' }}>
              <h4 className="text-content-primary mb-layout-md" style={{
                fontSize: 'var(--typography-typeStyles-title-medium-fontSize)',
                fontWeight: 'var(--typography-typeStyles-title-medium-fontWeight)',
                lineHeight: 'var(--typography-typeStyles-title-medium-lineHeight)',
                letterSpacing: 'var(--typography-typeStyles-title-medium-letterSpacing)'
              }}>Label Styles</h4>
              <p className="text-body text-content-secondary mb-layout-lg">Tiny snippets of supporting text, buttons or links</p>
              <div className="space-y-layout-md">
                <div>
                  <div 
                    className="text-content-primary mb-layout-xs"
                    style={{
                      fontSize: 'var(--typography-typeStyles-label-large-fontSize)',
                      fontWeight: 'var(--typography-typeStyles-label-large-fontWeight)',
                      lineHeight: 'var(--typography-typeStyles-label-large-lineHeight)',
                      letterSpacing: 'var(--typography-typeStyles-label-large-letterSpacing)'
                    }}
                  >
                    Label Large - 20px
                  </div>
                  <p className="text-label-small text-content-tertiary">--typography-typeStyles-label-large</p>
                </div>
                <div>
                  <div 
                    className="text-content-primary mb-layout-xs"
                    style={{
                      fontSize: 'var(--typography-typeStyles-label-medium-fontSize)',
                      fontWeight: 'var(--typography-typeStyles-label-medium-fontWeight)',
                      lineHeight: 'var(--typography-typeStyles-label-medium-lineHeight)',
                      letterSpacing: 'var(--typography-typeStyles-label-medium-letterSpacing)'
                    }}
                  >
                    Label Medium - 18px
                  </div>
                  <p className="text-label-small text-content-tertiary">--typography-typeStyles-label-medium</p>
                </div>
                <div>
                  <div 
                    className="text-content-primary mb-layout-xs"
                    style={{
                      fontSize: 'var(--typography-typeStyles-label-small-fontSize)',
                      fontWeight: 'var(--typography-typeStyles-label-small-fontWeight)',
                      lineHeight: 'var(--typography-typeStyles-label-small-lineHeight)',
                      letterSpacing: 'var(--typography-typeStyles-label-small-letterSpacing)'
                    }}
                  >
                    Label Small - 16px
                  </div>
                  <p className="text-label-small text-content-tertiary">--typography-typeStyles-label-small</p>
                </div>
                <div>
                  <div 
                    className="text-content-primary mb-layout-xs"
                    style={{
                      fontSize: 'var(--typography-typeStyles-label-extraSmall-fontSize)',
                      fontWeight: 'var(--typography-typeStyles-label-extraSmall-fontWeight)',
                      lineHeight: 'var(--typography-typeStyles-label-extraSmall-lineHeight)',
                      letterSpacing: 'var(--typography-typeStyles-label-extraSmall-letterSpacing)'
                    }}
                  >
                    Label Extra Small - 14px
                  </div>
                  <p className="text-label-small text-content-tertiary">--typography-typeStyles-label-extra-small</p>
                </div>
                <div>
                  <div 
                    className="text-content-primary mb-layout-xs"
                    style={{
                      fontSize: 'var(--typography-typeStyles-label-extraExtraSmall-fontSize)',
                      fontWeight: 'var(--typography-typeStyles-label-extraExtraSmall-fontWeight)',
                      lineHeight: 'var(--typography-typeStyles-label-extraExtraSmall-lineHeight)',
                      letterSpacing: 'var(--typography-typeStyles-label-extraExtraSmall-letterSpacing)'
                    }}
                  >
                    Label Extra Extra Small - 12px
                  </div>
                  <p className="text-label-small text-content-tertiary">--typography-typeStyles-label-extra-extra-small</p>
                </div>
                <div>
                  <div 
                    className="text-content-primary mb-layout-xs"
                    style={{
                      fontSize: 'var(--typography-typeStyles-label-extraExtraExtraSmall-fontSize)',
                      fontWeight: 'var(--typography-typeStyles-label-extraExtraExtraSmall-fontWeight)',
                      lineHeight: 'var(--typography-typeStyles-label-extraExtraExtraSmall-lineHeight)',
                      letterSpacing: 'var(--typography-typeStyles-label-extraExtraExtraSmall-letterSpacing)'
                    }}
                  >
                    Label Extra Extra Extra Small - 11px
                  </div>
                  <p className="text-label-small text-content-tertiary">--typography-typeStyles-label-extra-extra-extra-small</p>
                </div>
                <div>
                  <div 
                    className="text-content-primary mb-layout-xs"
                    style={{
                      fontSize: 'var(--typography-typeStyles-label-extraExtraExtraExtraSmall-fontSize)',
                      fontWeight: 'var(--typography-typeStyles-label-extraExtraExtraExtraSmall-fontWeight)',
                      lineHeight: 'var(--typography-typeStyles-label-extraExtraExtraExtraSmall-lineHeight)',
                      letterSpacing: 'var(--typography-typeStyles-label-extraExtraExtraExtraSmall-letterSpacing)'
                    }}
                  >
                    Label Extra Extra Extra Extra Small - 10px
                  </div>
                  <p className="text-label-small text-content-tertiary">--typography-typeStyles-label-extra-extra-extra-extra-small</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Border Radius Tokens Section */}
        <section className="mb-layout-2xl">
          <h2 className="text-content-primary mb-layout-lg" style={{
            fontSize: 'var(--typography-typeStyles-heading-extraLarge-fontSize)',
            fontWeight: 'var(--typography-typeStyles-heading-extraLarge-fontWeight)',
            lineHeight: 'var(--typography-typeStyles-heading-extraLarge-lineHeight)',
            letterSpacing: 'var(--typography-typeStyles-heading-extraLarge-letterSpacing)'
          }}>
            Border Radius
          </h2>
          <p className="text-body text-content-secondary mb-layout-lg">
            Consistent border radius values for rounded corners
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-layout-lg">
            <div className="bg-surface-primary rounded-m p-layout-md" style={{ border: 'var(--border-width-s) solid var(--color-semantic-border-default)' }}>
              <h4 className="text-content-primary mb-layout-md" style={{
              fontSize: 'var(--typography-typeStyles-title-medium-fontSize)',
              fontWeight: 'var(--typography-typeStyles-title-medium-fontWeight)',
              lineHeight: 'var(--typography-typeStyles-title-medium-lineHeight)',
              letterSpacing: 'var(--typography-typeStyles-title-medium-letterSpacing)'
            }}>XXS</h4>
              <div className="bg-fill-primary h-16 w-16 rounded-xxs" />
              <p className="text-label text-content-secondary mt-layout-sm">2px</p>
              <p className="text-label-small text-content-tertiary mt-layout-xs">--border-radius-xxs</p>
            </div>
            <div className="bg-surface-primary rounded-m p-layout-md" style={{ border: 'var(--border-width-s) solid var(--color-semantic-border-default)' }}>
              <h4 className="text-content-primary mb-layout-md" style={{
              fontSize: 'var(--typography-typeStyles-title-medium-fontSize)',
              fontWeight: 'var(--typography-typeStyles-title-medium-fontWeight)',
              lineHeight: 'var(--typography-typeStyles-title-medium-lineHeight)',
              letterSpacing: 'var(--typography-typeStyles-title-medium-letterSpacing)'
            }}>XS</h4>
              <div className="bg-fill-primary h-16 w-16 rounded-xs" />
              <p className="text-label text-content-secondary mt-layout-sm">8px</p>
              <p className="text-label-small text-content-tertiary mt-layout-xs">--border-radius-xs</p>
            </div>
            <div className="bg-surface-primary rounded-m p-layout-md" style={{ border: 'var(--border-width-s) solid var(--color-semantic-border-default)' }}>
              <h4 className="text-content-primary mb-layout-md" style={{
              fontSize: 'var(--typography-typeStyles-title-medium-fontSize)',
              fontWeight: 'var(--typography-typeStyles-title-medium-fontWeight)',
              lineHeight: 'var(--typography-typeStyles-title-medium-lineHeight)',
              letterSpacing: 'var(--typography-typeStyles-title-medium-letterSpacing)'
            }}>S</h4>
              <div className="bg-fill-primary h-16 w-16 rounded-s" />
              <p className="text-label text-content-secondary mt-layout-sm">12px</p>
              <p className="text-label-small text-content-tertiary mt-layout-xs">--border-radius-s</p>
            </div>
            <div className="bg-surface-primary rounded-m p-layout-md" style={{ border: 'var(--border-width-s) solid var(--color-semantic-border-default)' }}>
              <h4 className="text-content-primary mb-layout-md" style={{
              fontSize: 'var(--typography-typeStyles-title-medium-fontSize)',
              fontWeight: 'var(--typography-typeStyles-title-medium-fontWeight)',
              lineHeight: 'var(--typography-typeStyles-title-medium-lineHeight)',
              letterSpacing: 'var(--typography-typeStyles-title-medium-letterSpacing)'
            }}>M</h4>
              <div className="bg-fill-primary h-16 w-16 rounded-m" />
              <p className="text-label text-content-secondary mt-layout-sm">20px</p>
              <p className="text-label-small text-content-tertiary mt-layout-xs">--border-radius-m</p>
            </div>
            <div className="bg-surface-primary rounded-m p-layout-md" style={{ border: 'var(--border-width-s) solid var(--color-semantic-border-default)' }}>
              <h4 className="text-content-primary mb-layout-md" style={{
              fontSize: 'var(--typography-typeStyles-title-medium-fontSize)',
              fontWeight: 'var(--typography-typeStyles-title-medium-fontWeight)',
              lineHeight: 'var(--typography-typeStyles-title-medium-lineHeight)',
              letterSpacing: 'var(--typography-typeStyles-title-medium-letterSpacing)'
            }}>L</h4>
              <div className="bg-fill-primary h-16 w-16 rounded-l" />
              <p className="text-label text-content-secondary mt-layout-sm">48px</p>
              <p className="text-label-small text-content-tertiary mt-layout-xs">--border-radius-l</p>
            </div>
          </div>
        </section>

        {/* Border Width Tokens Section */}
        <section className="mb-layout-2xl">
          <h2 className="text-content-primary mb-layout-lg" style={{
            fontSize: 'var(--typography-typeStyles-heading-extraLarge-fontSize)',
            fontWeight: 'var(--typography-typeStyles-heading-extraLarge-fontWeight)',
            lineHeight: 'var(--typography-typeStyles-heading-extraLarge-lineHeight)',
            letterSpacing: 'var(--typography-typeStyles-heading-extraLarge-letterSpacing)'
          }}>
            Border Width
          </h2>
          <p className="text-body text-content-secondary mb-layout-lg">
            Consistent border width values for borders and outlines
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-layout-lg">
            <div className="bg-surface-primary rounded-m p-layout-md" style={{ border: 'var(--border-width-s) solid var(--color-semantic-border-default)' }}>
              <h4 className="text-content-primary mb-layout-md" style={{
              fontSize: 'var(--typography-typeStyles-title-medium-fontSize)',
              fontWeight: 'var(--typography-typeStyles-title-medium-fontWeight)',
              lineHeight: 'var(--typography-typeStyles-title-medium-lineHeight)',
              letterSpacing: 'var(--typography-typeStyles-title-medium-letterSpacing)'
            }}>None</h4>
              <div className="h-8 w-8 border-0 rounded-xs" style={{ backgroundColor: 'var(--color-semantic-light-fill-secondary)' }} />
              <p className="text-label text-content-secondary mt-layout-sm">0px</p>
              <p className="text-label-small text-content-tertiary mt-layout-xs">No border</p>
            </div>
            <div className="bg-surface-primary rounded-m p-layout-md" style={{ border: 'var(--border-width-s) solid var(--color-semantic-border-default)' }}>
              <h4 className="text-content-primary mb-layout-md" style={{
              fontSize: 'var(--typography-typeStyles-title-medium-fontSize)',
              fontWeight: 'var(--typography-typeStyles-title-medium-fontWeight)',
              lineHeight: 'var(--typography-typeStyles-title-medium-lineHeight)',
              letterSpacing: 'var(--typography-typeStyles-title-medium-letterSpacing)'
            }}>S</h4>
              <div className="h-8 w-8 rounded-xs" style={{ border: 'var(--border-width-s) solid var(--color-semantic-border-active)' }} />
              <p className="text-label text-content-secondary mt-layout-sm">1px</p>
              <p className="text-label-small text-content-tertiary mt-layout-xs">--border-width-s</p>
            </div>
            <div className="bg-surface-primary rounded-m p-layout-md" style={{ border: 'var(--border-width-s) solid var(--color-semantic-border-default)' }}>
              <h4 className="text-content-primary mb-layout-md" style={{
              fontSize: 'var(--typography-typeStyles-title-medium-fontSize)',
              fontWeight: 'var(--typography-typeStyles-title-medium-fontWeight)',
              lineHeight: 'var(--typography-typeStyles-title-medium-lineHeight)',
              letterSpacing: 'var(--typography-typeStyles-title-medium-letterSpacing)'
            }}>M</h4>
              <div className="h-8 w-8 rounded-xs" style={{ border: 'var(--border-width-m) solid var(--color-semantic-border-active)' }} />
              <p className="text-label text-content-secondary mt-layout-sm">2px</p>
              <p className="text-label-small text-content-tertiary mt-layout-xs">--border-width-m</p>
            </div>
          </div>
        </section>
        </div>
      </main>
    </div>
  );
}

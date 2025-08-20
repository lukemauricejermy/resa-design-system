import React, { useState } from 'react';

export default {
  title: 'Design System/Tokens',
  parameters: { layout: 'fullscreen' },
};

interface ThemeToggleProps {
  isDark: boolean;
  onToggle: () => void;
}

function ThemeToggle({ isDark, onToggle }: ThemeToggleProps) {
  return (
    <div style={{ 
      position: 'fixed', 
      top: '1rem', 
      right: '1rem', 
      zIndex: 1000,
      background: 'var(--color-surface-primary)',
      padding: 'var(--spacing-s)',
      borderRadius: 'var(--border-radius-s)',
      border: 'var(--border-width-s) solid var(--color-border-default)'
    }}>
      <button 
        onClick={onToggle}
        style={{
          padding: 'var(--spacing-s) var(--spacing-m)',
          background: isDark ? 'var(--color-fill-secondary)' : 'var(--color-fill-primary)',
          color: isDark ? 'var(--color-content-primary)' : 'var(--color-content-inverse)',
          border: 'none',
          borderRadius: 'var(--border-radius-s)',
          cursor: 'pointer'
        }}
      >
        {isDark ? '☀️ Light' : '🌙 Dark'}
      </button>
    </div>
  );
}



export const PrimitiveColors = () => {
  return (
    <div style={{ 
      padding: 'var(--spacing-m)',
      background: 'var(--color-background-primary)',
      color: 'var(--color-content-primary)',
      minHeight: '100vh'
    }}>
      <h1>Design Tokens - Primitive Colors</h1>
      <p>Foundation colors that semantic colors reference. These are the base values that don't change with theme.</p>
      
      {/* Base Colors */}
      <div style={{ 
        background: 'var(--color-surface-primary)', 
        padding: 'var(--spacing-m)', 
        borderRadius: 'var(--border-radius-m)', 
        marginBottom: 'var(--spacing-m)',
        border: 'var(--border-width-s) solid var(--color-border-default)'
      }}>
        <h2>Base Colors</h2>
        <p>Foundation colors for the design system:</p>
        
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 'var(--spacing-m)' }}>
          <div style={{ padding: 'var(--spacing-m)', background: 'var(--color-base-base-white)', color: 'var(--color-content-primary)', borderRadius: 'var(--border-radius-s)', border: 'var(--border-width-s) solid var(--color-border-default)' }}>
            <strong>Base White</strong>
            <div>CSS: --color-base-base-white</div>
            <div style={{ fontSize: 'var(--font-size-3xs)', color: 'var(--color-content-secondary)' }}>Value: #ffffff</div>
          </div>
          <div style={{ padding: 'var(--spacing-m)', background: 'var(--color-base-base-black)', color: 'var(--color-content-inverse)', borderRadius: 'var(--border-radius-s)', border: 'var(--border-width-s) solid var(--color-border-default)' }}>
            <strong>Base Black</strong>
            <div>CSS: --color-base-base-black</div>
            <div style={{ fontSize: 'var(--font-size-3xs)', color: 'var(--color-content-secondary)' }}>Value: #000000</div>
          </div>
        </div>
      </div>

      {/* Brand Grey Colors */}
      <div style={{ 
        background: 'var(--color-surface-primary)', 
        padding: 'var(--spacing-m)', 
        borderRadius: 'var(--border-radius-m)', 
        marginBottom: 'var(--spacing-m)',
        border: 'var(--border-width-s) solid var(--color-border-default)'
      }}>
        <h2>Brand Grey Colors</h2>
        <p>Neutral grey palette for text, borders, and backgrounds:</p>
        
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 'var(--spacing-m)' }}>
          <div style={{ padding: 'var(--spacing-m)', background: 'var(--color-brand-grey-10)', color: 'var(--color-content-inverse)', borderRadius: 'var(--border-radius-s)', border: 'var(--border-width-s) solid var(--color-border-default)' }}>
            <strong>Grey 10</strong>
            <div>CSS: --color-brand-grey-10</div>
            <div style={{ fontSize: 'var(--font-size-3xs)', color: 'var(--color-content-secondary)' }}>Value: #1a1a1a</div>
          </div>
          <div style={{ padding: 'var(--spacing-m)', background: 'var(--color-brand-grey-20)', color: 'var(--color-content-inverse)', borderRadius: 'var(--border-radius-s)', border: 'var(--border-width-s) solid var(--color-border-default)' }}>
            <strong>Grey 20</strong>
            <div>CSS: --color-brand-grey-20</div>
            <div style={{ fontSize: 'var(--font-size-3xs)', color: 'var(--color-content-secondary)' }}>Value: #333333</div>
          </div>
          <div style={{ padding: 'var(--spacing-m)', background: 'var(--color-brand-grey-30)', color: 'var(--color-content-inverse)', borderRadius: 'var(--border-radius-s)', border: 'var(--border-width-s) solid var(--color-border-default)' }}>
            <strong>Grey 30</strong>
            <div>CSS: --color-brand-grey-30</div>
            <div style={{ fontSize: 'var(--font-size-3xs)', color: 'var(--color-content-secondary)' }}>Value: #4d4d4d</div>
          </div>
          <div style={{ padding: 'var(--spacing-m)', background: 'var(--color-brand-grey-40)', color: 'var(--color-content-inverse)', borderRadius: 'var(--border-radius-s)', border: 'var(--border-width-s) solid var(--color-border-default)' }}>
            <strong>Grey 40</strong>
            <div>CSS: --color-brand-grey-40</div>
            <div style={{ fontSize: 'var(--font-size-3xs)', color: 'var(--color-content-secondary)' }}>Value: #666666</div>
          </div>
          <div style={{ padding: 'var(--spacing-m)', background: 'var(--color-brand-grey-50)', color: 'var(--color-content-inverse)', borderRadius: 'var(--border-radius-s)', border: 'var(--border-width-s) solid var(--color-border-default)' }}>
            <strong>Grey 50</strong>
            <div>CSS: --color-brand-grey-50</div>
            <div style={{ fontSize: 'var(--font-size-3xs)', color: 'var(--color-content-secondary)' }}>Value: #808080</div>
          </div>
          <div style={{ padding: 'var(--spacing-m)', background: 'var(--color-brand-grey-60)', color: 'var(--color-content-primary)', borderRadius: 'var(--border-radius-s)', border: 'var(--border-width-s) solid var(--color-border-default)' }}>
            <strong>Grey 60</strong>
            <div>CSS: --color-brand-grey-60</div>
            <div style={{ fontSize: 'var(--font-size-3xs)', color: 'var(--color-content-secondary)' }}>Value: #999999</div>
          </div>
          <div style={{ padding: 'var(--spacing-m)', background: 'var(--color-brand-grey-70)', color: 'var(--color-content-primary)', borderRadius: 'var(--border-radius-s)', border: 'var(--border-width-s) solid var(--color-border-default)' }}>
            <strong>Grey 70</strong>
            <div>CSS: --color-brand-grey-70</div>
            <div style={{ fontSize: 'var(--font-size-3xs)', color: 'var(--color-content-secondary)' }}>Value: #b3b3b3</div>
          </div>
          <div style={{ padding: 'var(--spacing-m)', background: 'var(--color-brand-grey-80)', color: 'var(--color-content-primary)', borderRadius: 'var(--border-radius-s)', border: 'var(--border-width-s) solid var(--color-border-default)' }}>
            <strong>Grey 80</strong>
            <div>CSS: --color-brand-grey-80</div>
            <div style={{ fontSize: 'var(--font-size-3xs)', color: 'var(--color-content-secondary)' }}>Value: #cccccc</div>
          </div>
          <div style={{ padding: 'var(--spacing-m)', background: 'var(--color-brand-grey-90)', color: 'var(--color-content-primary)', borderRadius: 'var(--border-radius-s)', border: 'var(--border-width-s) solid var(--color-border-default)' }}>
            <strong>Grey 90</strong>
            <div>CSS: --color-brand-grey-90</div>
            <div style={{ fontSize: 'var(--font-size-3xs)', color: 'var(--color-content-secondary)' }}>Value: #e0e0e0</div>
          </div>
          <div style={{ padding: 'var(--spacing-m)', background: 'var(--color-brand-grey-95)', color: 'var(--color-content-primary)', borderRadius: 'var(--border-radius-s)', border: 'var(--border-width-s) solid var(--color-border-default)' }}>
            <strong>Grey 95</strong>
            <div>CSS: --color-brand-grey-95</div>
            <div style={{ fontSize: 'var(--font-size-3xs)', color: 'var(--color-content-secondary)' }}>Value: #f2f2f2</div>
          </div>
        </div>
      </div>

      {/* Brand Sand Colors */}
      <div style={{ 
        background: 'var(--color-surface-primary)', 
        padding: 'var(--spacing-m)', 
        borderRadius: 'var(--border-radius-m)', 
        marginBottom: 'var(--spacing-m)',
        border: 'var(--border-width-s) solid var(--color-border-default)'
      }}>
        <h2>Brand Sand Colors</h2>
        <p>Warm sand palette for backgrounds and subtle elements:</p>
        
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 'var(--spacing-m)' }}>
          <div style={{ padding: 'var(--spacing-m)', background: 'var(--color-brand-sand-10)', color: 'var(--color-content-inverse)', borderRadius: 'var(--border-radius-s)', border: 'var(--border-width-s) solid var(--color-border-default)' }}>
            <strong>Sand 10</strong>
            <div>CSS: --color-brand-sand-10</div>
            <div style={{ fontSize: 'var(--font-size-3xs)', color: 'var(--color-content-secondary)' }}>Value: #201b13</div>
          </div>
          <div style={{ padding: 'var(--spacing-m)', background: 'var(--color-brand-sand-20)', color: 'var(--color-content-inverse)', borderRadius: 'var(--border-radius-s)', border: 'var(--border-width-s) solid var(--color-border-default)' }}>
            <strong>Sand 20</strong>
            <div>CSS: --color-brand-sand-20</div>
            <div style={{ fontSize: 'var(--font-size-3xs)', color: 'var(--color-content-secondary)' }}>Value: #3f3627</div>
          </div>
          <div style={{ padding: 'var(--spacing-m)', background: 'var(--color-brand-sand-30)', color: 'var(--color-content-inverse)', borderRadius: 'var(--border-radius-s)', border: 'var(--border-width-s) solid var(--color-border-default)' }}>
            <strong>Sand 30</strong>
            <div>CSS: --color-brand-sand-30</div>
            <div style={{ fontSize: 'var(--font-size-3xs)', color: 'var(--color-content-secondary)' }}>Value: #5c4d3e</div>
          </div>
          <div style={{ padding: 'var(--spacing-m)', background: 'var(--color-brand-sand-40)', color: 'var(--color-content-inverse)', borderRadius: 'var(--border-radius-s)', border: 'var(--border-width-s) solid var(--color-border-default)' }}>
            <strong>Sand 40</strong>
            <div>CSS: --color-brand-sand-40</div>
            <div style={{ fontSize: 'var(--font-size-3xs)', color: 'var(--color-content-secondary)' }}>Value: #7a6752</div>
          </div>
          <div style={{ padding: 'var(--spacing-m)', background: 'var(--color-brand-sand-50)', color: 'var(--color-content-inverse)', borderRadius: 'var(--border-radius-s)', border: 'var(--border-width-s) solid var(--color-border-default)' }}>
            <strong>Sand 50</strong>
            <div>CSS: --color-brand-sand-50</div>
            <div style={{ fontSize: 'var(--font-size-3xs)', color: 'var(--color-content-secondary)' }}>Value: #93806c</div>
          </div>
          <div style={{ padding: 'var(--spacing-m)', background: 'var(--color-brand-sand-60)', color: 'var(--color-content-primary)', borderRadius: 'var(--border-radius-s)', border: 'var(--border-width-s) solid var(--color-border-default)' }}>
            <strong>Sand 60</strong>
            <div>CSS: --color-brand-sand-60</div>
            <div style={{ fontSize: 'var(--font-size-3xs)', color: 'var(--color-content-secondary)' }}>Value: #aa9c88</div>
          </div>
          <div style={{ padding: 'var(--spacing-m)', background: 'var(--color-brand-sand-70)', color: 'var(--color-content-primary)', borderRadius: 'var(--border-radius-s)', border: 'var(--border-width-s) solid var(--color-border-default)' }}>
            <strong>Sand 70</strong>
            <div>CSS: --color-brand-sand-70</div>
            <div style={{ fontSize: 'var(--font-size-3xs)', color: 'var(--color-content-secondary)' }}>Value: #c2b4a3</div>
          </div>
          <div style={{ padding: 'var(--spacing-m)', background: 'var(--color-brand-sand-80)', color: 'var(--color-content-primary)', borderRadius: 'var(--border-radius-s)', border: 'var(--border-width-s) solid var(--color-border-default)' }}>
            <strong>Sand 80</strong>
            <div>CSS: --color-brand-sand-80</div>
            <div style={{ fontSize: 'var(--font-size-3xs)', color: 'var(--color-content-secondary)' }}>Value: #d8cebf</div>
          </div>
          <div style={{ padding: 'var(--spacing-m)', background: 'var(--color-brand-sand-90)', color: 'var(--color-content-primary)', borderRadius: 'var(--border-radius-s)', border: 'var(--border-width-s) solid var(--color-border-default)' }}>
            <strong>Sand 90</strong>
            <div>CSS: --color-brand-sand-90</div>
            <div style={{ fontSize: 'var(--font-size-3xs)', color: 'var(--color-content-secondary)' }}>Value: #ece7df</div>
          </div>
          <div style={{ padding: 'var(--spacing-m)', background: 'var(--color-brand-sand-95)', color: 'var(--color-content-primary)', borderRadius: 'var(--border-radius-s)', border: 'var(--border-width-s) solid var(--color-border-default)' }}>
            <strong>Sand 95</strong>
            <div>CSS: --color-brand-sand-95</div>
            <div style={{ fontSize: 'var(--font-size-3xs)', color: 'var(--color-content-secondary)' }}>Value: #f5f3ef</div>
          </div>
        </div>
      </div>

      {/* Brand Orange Colors */}
      <div style={{ 
        background: 'var(--color-surface-primary)', 
        padding: 'var(--spacing-m)', 
        borderRadius: 'var(--border-radius-m)', 
        marginBottom: 'var(--spacing-m)',
        border: 'var(--border-width-s) solid var(--color-border-default)'
      }}>
        <h2>Brand Orange Colors</h2>
        <p>Vibrant orange palette for accents and highlights:</p>
        
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 'var(--spacing-m)' }}>
          <div style={{ padding: 'var(--spacing-m)', background: 'var(--color-brand-orange-10)', color: 'var(--color-content-inverse)', borderRadius: 'var(--border-radius-s)', border: 'var(--border-width-s) solid var(--color-border-default)' }}>
            <strong>Orange 10</strong>
            <div>CSS: --color-brand-orange-10</div>
            <div style={{ fontSize: 'var(--font-size-3xs)', color: 'var(--color-content-secondary)' }}>Value: #331300</div>
          </div>
          <div style={{ padding: 'var(--spacing-m)', background: 'var(--color-brand-orange-20)', color: 'var(--color-content-inverse)', borderRadius: 'var(--border-radius-s)', border: 'var(--border-width-s) solid var(--color-border-default)' }}>
            <strong>Orange 20</strong>
            <div>CSS: --color-brand-orange-20</div>
            <div style={{ fontSize: 'var(--font-size-3xs)', color: 'var(--color-content-secondary)' }}>Value: #662500</div>
          </div>
          <div style={{ padding: 'var(--spacing-m)', background: 'var(--color-brand-orange-30)', color: 'var(--color-content-inverse)', borderRadius: 'var(--border-radius-s)', border: 'var(--border-width-s) solid var(--color-border-default)' }}>
            <strong>Orange 30</strong>
            <div>CSS: --color-brand-orange-30</div>
            <div style={{ fontSize: 'var(--font-size-3xs)', color: 'var(--color-content-secondary)' }}>Value: #993800</div>
          </div>
          <div style={{ padding: 'var(--spacing-m)', background: 'var(--color-brand-orange-40)', color: 'var(--color-content-inverse)', borderRadius: 'var(--border-radius-s)', border: 'var(--border-width-s) solid var(--color-border-default)' }}>
            <strong>Orange 40</strong>
            <div>CSS: --color-brand-orange-40</div>
            <div style={{ fontSize: 'var(--font-size-3xs)', color: 'var(--color-content-secondary)' }}>Value: #cc4b00</div>
          </div>
          <div style={{ padding: 'var(--spacing-m)', background: 'var(--color-brand-orange-50)', color: 'var(--color-content-inverse)', borderRadius: 'var(--border-radius-s)', border: 'var(--border-width-s) solid var(--color-border-default)' }}>
            <strong>Orange 50</strong>
            <div>CSS: --color-brand-orange-50</div>
            <div style={{ fontSize: 'var(--font-size-3xs)', color: 'var(--color-content-secondary)' }}>Value: #ff5c00</div>
          </div>
          <div style={{ padding: 'var(--spacing-m)', background: 'var(--color-brand-orange-60)', color: 'var(--color-content-inverse)', borderRadius: 'var(--border-radius-s)', border: 'var(--border-width-s) solid var(--color-border-default)' }}>
            <strong>Orange 60</strong>
            <div>CSS: --color-brand-orange-60</div>
            <div style={{ fontSize: 'var(--font-size-3xs)', color: 'var(--color-content-secondary)' }}>Value: #ff7e34</div>
          </div>
          <div style={{ padding: 'var(--spacing-m)', background: 'var(--color-brand-orange-70)', color: 'var(--color-content-inverse)', borderRadius: 'var(--border-radius-s)', border: 'var(--border-width-s) solid var(--color-border-default)' }}>
            <strong>Orange 70</strong>
            <div>CSS: --color-brand-orange-70</div>
            <div style={{ fontSize: 'var(--font-size-3xs)', color: 'var(--color-content-secondary)' }}>Value: #ff9d66</div>
          </div>
          <div style={{ padding: 'var(--spacing-m)', background: 'var(--color-brand-orange-80)', color: 'var(--color-content-primary)', borderRadius: 'var(--border-radius-s)', border: 'var(--border-width-s) solid var(--color-border-default)' }}>
            <strong>Orange 80</strong>
            <div>CSS: --color-brand-orange-80</div>
            <div style={{ fontSize: 'var(--font-size-3xs)', color: 'var(--color-content-secondary)' }}>Value: #ffbe99</div>
          </div>
          <div style={{ padding: 'var(--spacing-m)', background: 'var(--color-brand-orange-90)', color: 'var(--color-content-primary)', borderRadius: 'var(--border-radius-s)', border: 'var(--border-width-s) solid var(--color-border-default)' }}>
            <strong>Orange 90</strong>
            <div>CSS: --color-brand-orange-90</div>
            <div style={{ fontSize: 'var(--font-size-3xs)', color: 'var(--color-content-secondary)' }}>Value: #ffdfcc</div>
          </div>
          <div style={{ padding: 'var(--spacing-m)', background: 'var(--color-brand-orange-95)', color: 'var(--color-content-primary)', borderRadius: 'var(--border-radius-s)', border: 'var(--border-width-s) solid var(--color-border-default)' }}>
            <strong>Orange 95</strong>
            <div>CSS: --color-brand-orange-95</div>
            <div style={{ fontSize: 'var(--font-size-3xs)', color: 'var(--color-content-secondary)' }}>Value: #ffefe5</div>
          </div>
        </div>
      </div>

      {/* Brand Red Colors */}
      <div style={{ 
        background: 'var(--color-surface-primary)', 
        padding: 'var(--spacing-m)', 
        borderRadius: 'var(--border-radius-m)', 
        marginBottom: 'var(--spacing-m)',
        border: 'var(--border-width-s) solid var(--color-border-default)'
      }}>
        <h2>Brand Red Colors</h2>
        <p>Rich red palette for alerts and emphasis:</p>
        
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 'var(--spacing-m)' }}>
          <div style={{ padding: 'var(--spacing-m)', background: 'var(--color-brand-red-10)', color: 'var(--color-content-inverse)', borderRadius: 'var(--border-radius-s)', border: 'var(--border-width-s) solid var(--color-border-default)' }}>
            <strong>Red 10</strong>
            <div>CSS: --color-brand-red-10</div>
            <div style={{ fontSize: 'var(--font-size-3xs)', color: 'var(--color-content-secondary)' }}>Value: #2a0d0a</div>
          </div>
          <div style={{ padding: 'var(--spacing-m)', background: 'var(--color-brand-red-20)', color: 'var(--color-content-inverse)', borderRadius: 'var(--border-radius-s)', border: 'var(--border-width-s) solid var(--color-border-default)' }}>
            <strong>Red 20</strong>
            <div>CSS: --color-brand-red-20</div>
            <div style={{ fontSize: 'var(--font-size-3xs)', color: 'var(--color-content-secondary)' }}>Value: #531913</div>
          </div>
          <div style={{ padding: 'var(--spacing-m)', background: 'var(--color-brand-red-30)', color: 'var(--color-content-inverse)', borderRadius: 'var(--border-radius-s)', border: 'var(--border-width-s) solid var(--color-border-default)' }}>
            <strong>Red 30</strong>
            <div>CSS: --color-brand-red-30</div>
            <div style={{ fontSize: 'var(--font-size-3xs)', color: 'var(--color-content-secondary)' }}>Value: #7c261d</div>
          </div>
          <div style={{ padding: 'var(--spacing-m)', background: 'var(--color-brand-red-40)', color: 'var(--color-content-inverse)', borderRadius: 'var(--border-radius-s)', border: 'var(--border-width-s) solid var(--color-border-default)' }}>
            <strong>Red 40</strong>
            <div>CSS: --color-brand-red-40</div>
            <div style={{ fontSize: 'var(--font-size-3xs)', color: 'var(--color-content-secondary)' }}>Value: #a63326</div>
          </div>
          <div style={{ padding: 'var(--spacing-m)', background: 'var(--color-brand-red-50)', color: 'var(--color-content-inverse)', borderRadius: 'var(--border-radius-s)', border: 'var(--border-width-s) solid var(--color-border-default)' }}>
            <strong>Red 50</strong>
            <div>CSS: --color-brand-red-50</div>
            <div style={{ fontSize: 'var(--font-size-3xs)', color: 'var(--color-content-secondary)' }}>Value: #d03e2f</div>
          </div>
          <div style={{ padding: 'var(--spacing-m)', background: 'var(--color-brand-red-60)', color: 'var(--color-content-inverse)', borderRadius: 'var(--border-radius-s)', border: 'var(--border-width-s) solid var(--color-border-default)' }}>
            <strong>Red 60</strong>
            <div>CSS: --color-brand-red-60</div>
            <div style={{ fontSize: 'var(--font-size-3xs)', color: 'var(--color-content-secondary)' }}>Value: #d96659</div>
          </div>
          <div style={{ padding: 'var(--spacing-m)', background: 'var(--color-brand-red-70)', color: 'var(--color-content-inverse)', borderRadius: 'var(--border-radius-s)', border: 'var(--border-width-s) solid var(--color-border-default)' }}>
            <strong>Red 70</strong>
            <div>CSS: --color-brand-red-70</div>
            <div style={{ fontSize: 'var(--font-size-3xs)', color: 'var(--color-content-secondary)' }}>Value: #e38c82</div>
          </div>
          <div style={{ padding: 'var(--spacing-m)', background: 'var(--color-brand-red-80)', color: 'var(--color-content-primary)', borderRadius: 'var(--border-radius-s)', border: 'var(--border-width-s) solid var(--color-border-default)' }}>
            <strong>Red 80</strong>
            <div>CSS: --color-brand-red-80</div>
            <div style={{ fontSize: 'var(--font-size-3xs)', color: 'var(--color-content-secondary)' }}>Value: #ecb3ac</div>
          </div>
          <div style={{ padding: 'var(--spacing-m)', background: 'var(--color-brand-red-90)', color: 'var(--color-content-primary)', borderRadius: 'var(--border-radius-s)', border: 'var(--border-width-s) solid var(--color-border-default)' }}>
            <strong>Red 90</strong>
            <div>CSS: --color-brand-red-90</div>
            <div style={{ fontSize: 'var(--font-size-3xs)', color: 'var(--color-content-secondary)' }}>Value: #f6dad5</div>
          </div>
          <div style={{ padding: 'var(--spacing-m)', background: 'var(--color-brand-red-95)', color: 'var(--color-content-primary)', borderRadius: 'var(--border-radius-s)', border: 'var(--border-width-s) solid var(--color-border-default)' }}>
            <strong>Red 95</strong>
            <div>CSS: --color-brand-red-95</div>
            <div style={{ fontSize: 'var(--font-size-3xs)', color: 'var(--color-content-secondary)' }}>Value: #faecea</div>
          </div>
        </div>
      </div>

      {/* UI Success Colors */}
      <div style={{ 
        background: 'var(--color-surface-primary)', 
        padding: 'var(--spacing-m)', 
        borderRadius: 'var(--border-radius-m)', 
        marginBottom: 'var(--spacing-m)',
        border: 'var(--border-width-s) solid var(--color-border-default)'
      }}>
        <h2>UI Success Colors</h2>
        <p>Success state colors for positive feedback and confirmations:</p>
        
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 'var(--spacing-m)' }}>
          <div style={{ padding: 'var(--spacing-m)', background: 'var(--color-ui-success-success-10)', color: 'var(--color-content-inverse)', borderRadius: 'var(--border-radius-s)', border: 'var(--border-width-s) solid var(--color-border-default)' }}>
            <strong>Success 10</strong>
            <div>CSS: --color-ui-success-success-10</div>
            <div style={{ fontSize: 'var(--font-size-3xs)', color: 'var(--color-content-secondary)' }}>Value: #092711</div>
          </div>
          <div style={{ padding: 'var(--spacing-m)', background: 'var(--color-ui-success-success-20)', color: 'var(--color-content-inverse)', borderRadius: 'var(--border-radius-s)', border: 'var(--border-width-s) solid var(--color-border-default)' }}>
            <strong>Success 20</strong>
            <div>CSS: --color-ui-success-success-20</div>
            <div style={{ fontSize: 'var(--font-size-3xs)', color: 'var(--color-content-secondary)' }}>Value: #134e21</div>
          </div>
          <div style={{ padding: 'var(--spacing-m)', background: 'var(--color-ui-success-success-30)', color: 'var(--color-content-inverse)', borderRadius: 'var(--border-radius-s)', border: 'var(--border-width-s) solid var(--color-border-default)' }}>
            <strong>Success 30</strong>
            <div>CSS: --color-ui-success-success-30</div>
            <div style={{ fontSize: 'var(--font-size-3xs)', color: 'var(--color-content-secondary)' }}>Value: #1c7532</div>
          </div>
          <div style={{ padding: 'var(--spacing-m)', background: 'var(--color-ui-success-success-40)', color: 'var(--color-content-inverse)', borderRadius: 'var(--border-radius-s)', border: 'var(--border-width-s) solid var(--color-border-default)' }}>
            <strong>Success 40</strong>
            <div>CSS: --color-ui-success-success-40</div>
            <div style={{ fontSize: 'var(--font-size-3xs)', color: 'var(--color-content-secondary)' }}>Value: #259b42</div>
          </div>
          <div style={{ padding: 'var(--spacing-m)', background: 'var(--color-ui-success-success-50)', color: 'var(--color-content-inverse)', borderRadius: 'var(--border-radius-s)', border: 'var(--border-width-s) solid var(--color-border-default)' }}>
            <strong>Success 50</strong>
            <div>CSS: --color-ui-success-success-50</div>
            <div style={{ fontSize: 'var(--font-size-3xs)', color: 'var(--color-content-secondary)' }}>Value: #2fc253</div>
          </div>
          <div style={{ padding: 'var(--spacing-m)', background: 'var(--color-ui-success-success-60)', color: 'var(--color-content-inverse)', borderRadius: 'var(--border-radius-s)', border: 'var(--border-width-s) solid var(--color-border-default)' }}>
            <strong>Success 60</strong>
            <div>CSS: --color-ui-success-success-60</div>
            <div style={{ fontSize: 'var(--font-size-3xs)', color: 'var(--color-content-secondary)' }}>Value: #58cf70</div>
          </div>
          <div style={{ padding: 'var(--spacing-m)', background: 'var(--color-ui-success-success-70)', color: 'var(--color-content-inverse)', borderRadius: 'var(--border-radius-s)', border: 'var(--border-width-s) solid var(--color-border-default)' }}>
            <strong>Success 70</strong>
            <div>CSS: --color-ui-success-success-70</div>
            <div style={{ fontSize: 'var(--font-size-3xs)', color: 'var(--color-content-secondary)' }}>Value: #82dd8d</div>
          </div>
          <div style={{ padding: 'var(--spacing-m)', background: 'var(--color-ui-success-success-80)', color: 'var(--color-content-inverse)', borderRadius: 'var(--border-radius-s)', border: 'var(--border-width-s) solid var(--color-border-default)' }}>
            <strong>Success 80</strong>
            <div>CSS: --color-ui-success-success-80</div>
            <div style={{ fontSize: 'var(--font-size-3xs)', color: 'var(--color-content-secondary)' }}>Value: #abeaaa</div>
          </div>
          <div style={{ padding: 'var(--spacing-m)', background: 'var(--color-ui-success-success-90)', color: 'var(--color-content-primary)', borderRadius: 'var(--border-radius-s)', border: 'var(--border-width-s) solid var(--color-border-default)' }}>
            <strong>Success 90</strong>
            <div>CSS: --color-ui-success-success-90</div>
            <div style={{ fontSize: 'var(--font-size-3xs)', color: 'var(--color-content-secondary)' }}>Value: #d5f7da</div>
          </div>
          <div style={{ padding: 'var(--spacing-m)', background: 'var(--color-ui-success-success-95)', color: 'var(--color-content-primary)', borderRadius: 'var(--border-radius-s)', border: 'var(--border-width-s) solid var(--color-border-default)' }}>
            <strong>Success 95</strong>
            <div>CSS: --color-ui-success-success-95</div>
            <div style={{ fontSize: 'var(--font-size-3xs)', color: 'var(--color-content-secondary)' }}>Value: #eafbec</div>
          </div>
        </div>
      </div>

      {/* UI Warning Colors */}
      <div style={{ 
        background: 'var(--color-surface-primary)', 
        padding: 'var(--spacing-m)', 
        borderRadius: 'var(--border-radius-m)', 
        marginBottom: 'var(--spacing-m)',
        border: 'var(--border-width-s) solid var(--color-border-default)'
      }}>
        <h2>UI Warning Colors</h2>
        <p>Warning state colors for caution and alerts:</p>
        
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 'var(--spacing-m)' }}>
          <div style={{ padding: 'var(--spacing-m)', background: 'var(--color-ui-warning-warning-10)', color: 'var(--color-content-inverse)', borderRadius: 'var(--border-radius-s)', border: 'var(--border-width-s) solid var(--color-border-default)' }}>
            <strong>Warning 10</strong>
            <div>CSS: --color-ui-warning-warning-10</div>
            <div style={{ fontSize: 'var(--font-size-3xs)', color: 'var(--color-content-secondary)' }}>Value: #302700</div>
          </div>
          <div style={{ padding: 'var(--spacing-m)', background: 'var(--color-ui-warning-warning-20)', color: 'var(--color-content-inverse)', borderRadius: 'var(--border-radius-s)', border: 'var(--border-width-s) solid var(--color-border-default)' }}>
            <strong>Warning 20</strong>
            <div>CSS: --color-ui-warning-warning-20</div>
            <div style={{ fontSize: 'var(--font-size-3xs)', color: 'var(--color-content-secondary)' }}>Value: #604d00</div>
          </div>
          <div style={{ padding: 'var(--spacing-m)', background: 'var(--color-ui-warning-warning-30)', color: 'var(--color-content-inverse)', borderRadius: 'var(--border-radius-s)', border: 'var(--border-width-s) solid var(--color-border-default)' }}>
            <strong>Warning 30</strong>
            <div>CSS: --color-ui-warning-warning-30</div>
            <div style={{ fontSize: 'var(--font-size-3xs)', color: 'var(--color-content-secondary)' }}>Value: #907400</div>
          </div>
          <div style={{ padding: 'var(--spacing-m)', background: 'var(--color-ui-warning-warning-40)', color: 'var(--color-content-inverse)', borderRadius: 'var(--border-radius-s)', border: 'var(--border-width-s) solid var(--color-border-default)' }}>
            <strong>Warning 40</strong>
            <div>CSS: --color-ui-warning-warning-40</div>
            <div style={{ fontSize: 'var(--font-size-3xs)', color: 'var(--color-content-secondary)' }}>Value: #c09a00</div>
          </div>
          <div style={{ padding: 'var(--spacing-m)', background: 'var(--color-ui-warning-warning-50)', color: 'var(--color-content-inverse)', borderRadius: 'var(--border-radius-s)', border: 'var(--border-width-s) solid var(--color-border-default)' }}>
            <strong>Warning 50</strong>
            <div>CSS: --color-ui-warning-warning-50</div>
            <div style={{ fontSize: 'var(--font-size-3xs)', color: 'var(--color-content-secondary)' }}>Value: #f0c100</div>
          </div>
          <div style={{ padding: 'var(--spacing-m)', background: 'var(--color-ui-warning-warning-60)', color: 'var(--color-content-inverse)', borderRadius: 'var(--border-radius-s)', border: 'var(--border-width-s) solid var(--color-border-default)' }}>
            <strong>Warning 60</strong>
            <div>CSS: --color-ui-warning-warning-60</div>
            <div style={{ fontSize: 'var(--font-size-3xs)', color: 'var(--color-content-secondary)' }}>Value: #fad70a</div>
          </div>
          <div style={{ padding: 'var(--spacing-m)', background: 'var(--color-ui-warning-warning-70)', color: 'var(--color-content-primary)', borderRadius: 'var(--border-radius-s)', border: 'var(--border-width-s) solid var(--color-border-default)' }}>
            <strong>Warning 70</strong>
            <div>CSS: --color-ui-warning-warning-70</div>
            <div style={{ fontSize: 'var(--font-size-3xs)', color: 'var(--color-content-secondary)' }}>Value: #fbe23e</div>
          </div>
          <div style={{ padding: 'var(--spacing-m)', background: 'var(--color-ui-warning-warning-80)', color: 'var(--color-content-primary)', borderRadius: 'var(--border-radius-s)', border: 'var(--border-width-s) solid var(--color-border-default)' }}>
            <strong>Warning 80</strong>
            <div>CSS: --color-ui-warning-warning-80</div>
            <div style={{ fontSize: 'var(--font-size-3xs)', color: 'var(--color-content-secondary)' }}>Value: #fdec71</div>
          </div>
          <div style={{ padding: 'var(--spacing-m)', background: 'var(--color-ui-warning-warning-90)', color: 'var(--color-content-primary)', borderRadius: 'var(--border-radius-s)', border: 'var(--border-width-s) solid var(--color-border-default)' }}>
            <strong>Warning 90</strong>
            <div>CSS: --color-ui-warning-warning-90</div>
            <div style={{ fontSize: 'var(--font-size-3xs)', color: 'var(--color-content-secondary)' }}>Value: #fef5b8</div>
          </div>
          <div style={{ padding: 'var(--spacing-m)', background: 'var(--color-ui-warning-warning-95)', color: 'var(--color-content-primary)', borderRadius: 'var(--border-radius-s)', border: 'var(--border-width-s) solid var(--color-border-default)' }}>
            <strong>Warning 95</strong>
            <div>CSS: --color-ui-warning-warning-95</div>
            <div style={{ fontSize: 'var(--font-size-3xs)', color: 'var(--color-content-secondary)' }}>Value: #fefadc</div>
          </div>
        </div>
      </div>

      {/* UI Error Colors */}
      <div style={{ 
        background: 'var(--color-surface-primary)', 
        padding: 'var(--spacing-m)', 
        borderRadius: 'var(--border-radius-m)', 
        marginBottom: 'var(--spacing-m)',
        border: 'var(--border-width-s) solid var(--color-border-default)'
      }}>
        <h2>UI Error Colors</h2>
        <p>Error state colors for negative feedback and alerts:</p>
        
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 'var(--spacing-m)' }}>
          <div style={{ padding: 'var(--spacing-m)', background: 'var(--color-ui-error-error-10)', color: 'var(--color-content-inverse)', borderRadius: 'var(--border-radius-s)', border: 'var(--border-width-s) solid var(--color-border-default)' }}>
            <strong>Error 10</strong>
            <div>CSS: --color-ui-error-error-10</div>
            <div style={{ fontSize: 'var(--font-size-3xs)', color: 'var(--color-content-secondary)' }}>Value: #2e0908</div>
          </div>
          <div style={{ padding: 'var(--spacing-m)', background: 'var(--color-ui-error-error-20)', color: 'var(--color-content-inverse)', borderRadius: 'var(--border-radius-s)', border: 'var(--border-width-s) solid var(--color-border-default)' }}>
            <strong>Error 20</strong>
            <div>CSS: --color-ui-error-error-20</div>
            <div style={{ fontSize: 'var(--font-size-3xs)', color: 'var(--color-content-secondary)' }}>Value: #5c1110</div>
          </div>
          <div style={{ padding: 'var(--spacing-m)', background: 'var(--color-ui-error-error-30)', color: 'var(--color-content-inverse)', borderRadius: 'var(--border-radius-s)', border: 'var(--border-width-s) solid var(--color-border-default)' }}>
            <strong>Error 30</strong>
            <div>CSS: --color-ui-error-error-30</div>
            <div style={{ fontSize: 'var(--font-size-3xs)', color: 'var(--color-content-secondary)' }}>Value: #8b1a18</div>
          </div>
          <div style={{ padding: 'var(--spacing-m)', background: 'var(--color-ui-error-error-40)', color: 'var(--color-content-inverse)', borderRadius: 'var(--border-radius-s)', border: 'var(--border-width-s) solid var(--color-border-default)' }}>
            <strong>Error 40</strong>
            <div>CSS: --color-ui-error-error-40</div>
            <div style={{ fontSize: 'var(--font-size-3xs)', color: 'var(--color-content-secondary)' }}>Value: #b92320</div>
          </div>
          <div style={{ padding: 'var(--spacing-m)', background: 'var(--color-ui-error-error-50)', color: 'var(--color-content-inverse)', borderRadius: 'var(--border-radius-s)', border: 'var(--border-width-s) solid var(--color-border-default)' }}>
            <strong>Error 50</strong>
            <div>CSS: --color-ui-error-error-50</div>
            <div style={{ fontSize: 'var(--font-size-3xs)', color: 'var(--color-content-secondary)' }}>Value: #e82c28</div>
          </div>
          <div style={{ padding: 'var(--spacing-m)', background: 'var(--color-ui-error-error-60)', color: 'var(--color-content-inverse)', borderRadius: 'var(--border-radius-s)', border: 'var(--border-width-s) solid var(--color-border-default)' }}>
            <strong>Error 60</strong>
            <div>CSS: --color-ui-error-error-60</div>
            <div style={{ fontSize: 'var(--font-size-3xs)', color: 'var(--color-content-secondary)' }}>Value: #f06360</div>
          </div>
          <div style={{ padding: 'var(--spacing-m)', background: 'var(--color-ui-error-error-70)', color: 'var(--color-content-primary)', borderRadius: 'var(--border-radius-s)', border: 'var(--border-width-s) solid var(--color-border-default)' }}>
            <strong>Error 70</strong>
            <div>CSS: --color-ui-error-error-70</div>
            <div style={{ fontSize: 'var(--font-size-3xs)', color: 'var(--color-content-secondary)' }}>Value: #f48a88</div>
          </div>
          <div style={{ padding: 'var(--spacing-m)', background: 'var(--color-ui-error-error-80)', color: 'var(--color-content-primary)', borderRadius: 'var(--border-radius-s)', border: 'var(--border-width-s) solid var(--color-border-default)' }}>
            <strong>Error 80</strong>
            <div>CSS: --color-ui-error-error-80</div>
            <div style={{ fontSize: 'var(--font-size-3xs)', color: 'var(--color-content-secondary)' }}>Value: #f8b1b0</div>
          </div>
          <div style={{ padding: 'var(--spacing-m)', background: 'var(--color-ui-error-error-90)', color: 'var(--color-content-primary)', borderRadius: 'var(--border-radius-s)', border: 'var(--border-width-s) solid var(--color-border-default)' }}>
            <strong>Error 90</strong>
            <div>CSS: --color-ui-error-error-90</div>
            <div style={{ fontSize: 'var(--font-size-3xs)', color: 'var(--color-content-secondary)' }}>Value: #fcd8d7</div>
          </div>
          <div style={{ padding: 'var(--spacing-m)', background: 'var(--color-ui-error-error-95)', color: 'var(--color-content-primary)', borderRadius: 'var(--border-radius-s)', border: 'var(--border-width-s) solid var(--color-border-default)' }}>
            <strong>Error 95</strong>
            <div>CSS: --color-ui-error-error-95</div>
            <div style={{ fontSize: 'var(--font-size-3xs)', color: 'var(--color-content-secondary)' }}>Value: #feebeb</div>
          </div>
        </div>
      </div>

      {/* UI Information Colors */}
      <div style={{ 
        background: 'var(--color-surface-primary)', 
        padding: 'var(--spacing-m)', 
        borderRadius: 'var(--border-radius-m)', 
        marginBottom: 'var(--spacing-m)',
        border: 'var(--border-width-s) solid var(--color-border-default)'
      }}>
        <h2>UI Information Colors</h2>
        <p>Information state colors for neutral feedback and alerts:</p>
        
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 'var(--spacing-m)' }}>
          <div style={{ padding: 'var(--spacing-m)', background: 'var(--color-ui-information-info-10)', color: 'var(--color-content-inverse)', borderRadius: 'var(--border-radius-s)', border: 'var(--border-width-s) solid var(--color-border-default)' }}>
            <strong>Info 10</strong>
            <div>CSS: --color-ui-information-info-10</div>
            <div style={{ fontSize: 'var(--font-size-3xs)', color: 'var(--color-content-secondary)' }}>Value: #0b1930</div>
          </div>
          <div style={{ padding: 'var(--spacing-m)', background: 'var(--color-ui-information-info-20)', color: 'var(--color-content-inverse)', borderRadius: 'var(--border-radius-s)', border: 'var(--border-width-s) solid var(--color-border-default)' }}>
            <strong>Info 20</strong>
            <div>CSS: --color-ui-information-info-20</div>
            <div style={{ fontSize: 'var(--font-size-3xs)', color: 'var(--color-content-secondary)' }}>Value: #163260</div>
          </div>
          <div style={{ padding: 'var(--spacing-m)', background: 'var(--color-ui-information-info-30)', color: 'var(--color-content-inverse)', borderRadius: 'var(--border-radius-s)', border: 'var(--border-width-s) solid var(--color-border-default)' }}>
            <strong>Info 30</strong>
            <div>CSS: --color-ui-information-info-30</div>
            <div style={{ fontSize: 'var(--font-size-3xs)', color: 'var(--color-content-secondary)' }}>Value: #224c91</div>
          </div>
          <div style={{ padding: 'var(--spacing-m)', background: 'var(--color-ui-information-info-40)', color: 'var(--color-content-inverse)', borderRadius: 'var(--border-radius-s)', border: 'var(--border-width-s) solid var(--color-border-default)' }}>
            <strong>Info 40</strong>
            <div>CSS: --color-ui-information-info-40</div>
            <div style={{ fontSize: 'var(--font-size-3xs)', color: 'var(--color-content-secondary)' }}>Value: #2d65c1</div>
          </div>
          <div style={{ padding: 'var(--spacing-m)', background: 'var(--color-ui-information-info-50)', color: 'var(--color-content-inverse)', borderRadius: 'var(--border-radius-s)', border: 'var(--border-width-s) solid var(--color-border-default)' }}>
            <strong>Info 50</strong>
            <div>CSS: --color-ui-information-info-50</div>
            <div style={{ fontSize: 'var(--font-size-3xs)', color: 'var(--color-content-secondary)' }}>Value: #397ef1</div>
          </div>
          <div style={{ padding: 'var(--spacing-m)', background: 'var(--color-ui-information-info-60)', color: 'var(--color-content-inverse)', borderRadius: 'var(--border-radius-s)', border: 'var(--border-width-s) solid var(--color-border-default)' }}>
            <strong>Info 60</strong>
            <div>CSS: --color-ui-information-info-60</div>
            <div style={{ fontSize: 'var(--font-size-3xs)', color: 'var(--color-content-secondary)' }}>Value: #6299f5</div>
          </div>
          <div style={{ padding: 'var(--spacing-m)', background: 'var(--color-ui-information-info-70)', color: 'var(--color-content-primary)', borderRadius: 'var(--border-radius-s)', border: 'var(--border-width-s) solid var(--color-border-default)' }}>
            <strong>Info 70</strong>
            <div>CSS: --color-ui-information-info-70</div>
            <div style={{ fontSize: 'var(--font-size-3xs)', color: 'var(--color-content-secondary)' }}>Value: #8ab3f8</div>
          </div>
          <div style={{ padding: 'var(--spacing-m)', background: 'var(--color-ui-information-info-80)', color: 'var(--color-content-primary)', borderRadius: 'var(--border-radius-s)', border: 'var(--border-width-s) solid var(--color-border-default)' }}>
            <strong>Info 80</strong>
            <div>CSS: --color-ui-information-info-80</div>
            <div style={{ fontSize: 'var(--font-size-3xs)', color: 'var(--color-content-secondary)' }}>Value: #b1cdfa</div>
          </div>
          <div style={{ padding: 'var(--spacing-m)', background: 'var(--color-ui-information-info-90)', color: 'var(--color-content-primary)', borderRadius: 'var(--border-radius-s)', border: 'var(--border-width-s) solid var(--color-border-default)' }}>
            <strong>Info 90</strong>
            <div>CSS: --color-ui-information-info-90</div>
            <div style={{ fontSize: 'var(--font-size-3xs)', color: 'var(--color-content-secondary)' }}>Value: #d8e6fb</div>
          </div>
          <div style={{ padding: 'var(--spacing-m)', background: 'var(--color-ui-information-info-95)', color: 'var(--color-content-primary)', borderRadius: 'var(--border-radius-s)', border: 'var(--border-width-s) solid var(--color-border-default)' }}>
            <strong>Info 95</strong>
            <div>CSS: --color-ui-information-info-95</div>
            <div style={{ fontSize: 'var(--font-size-3xs)', color: 'var(--color-content-secondary)' }}>Value: #ecf3fd</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export const Typography = () => {
  const [isDark, setIsDark] = useState(false);

  return (
    <div style={{ 
      padding: 'var(--spacing-m)',
      background: 'var(--color-background-primary)',
      color: 'var(--color-content-primary)',
      minHeight: '100vh'
    }}>
      <ThemeToggle isDark={isDark} onToggle={() => setIsDark(!isDark)} />
      <h1>Design Tokens - Typography ({isDark ? 'Dark' : 'Light'} Mode)</h1>
      
      <div style={{ 
        background: 'var(--color-surface-primary)', 
        padding: 'var(--spacing-m)', 
        borderRadius: 'var(--border-radius-m)', 
        marginBottom: 'var(--spacing-m)',
        border: 'var(--border-width-s) solid var(--color-border-default)'
      }}>
        <h2>Font Weights</h2>
        <p>Typography weight scale for different text styles:</p>
        
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 'var(--spacing-m)' }}>
          <div style={{ padding: 'var(--spacing-m)', background: 'var(--color-fill-secondary)', borderRadius: 'var(--border-radius-s)', border: 'var(--border-width-s) solid var(--color-border-default)' }}>
            <h3 style={{ fontWeight: 'var(--font-weight-regular)', margin: '0 0 var(--spacing-s) 0' }}>Regular Weight</h3>
            <div style={{ fontSize: 'var(--font-size-3xs)', color: 'var(--color-content-secondary)' }}>
              <strong>CSS:</strong> var(--font-weight-regular)<br/>
              <strong>Value:</strong> 400
            </div>
          </div>
          <div style={{ padding: 'var(--spacing-m)', background: 'var(--color-fill-secondary)', borderRadius: 'var(--border-radius-s)', border: 'var(--border-width-s) solid var(--color-border-default)' }}>
            <h3 style={{ fontWeight: 'var(--font-weight-medium)', margin: '0 0 var(--spacing-s) 0' }}>Medium Weight</h3>
            <div style={{ fontSize: 'var(--font-size-3xs)', color: 'var(--color-content-secondary)' }}>
              <strong>CSS:</strong> var(--font-weight-medium)<br/>
              <strong>Value:</strong> 500
            </div>
          </div>
          <div style={{ padding: 'var(--spacing-m)', background: 'var(--color-fill-secondary)', borderRadius: 'var(--border-radius-s)', border: 'var(--border-width-s) solid var(--color-border-default)' }}>
            <h3 style={{ fontWeight: 'var(--font-weight-semibold)', margin: '0 0 var(--spacing-s) 0' }}>Semibold Weight</h3>
            <div style={{ fontSize: 'var(--font-size-3xs)', color: 'var(--color-content-secondary)' }}>
              <strong>CSS:</strong> var(--font-weight-semibold)<br/>
              <strong>Value:</strong> 600
            </div>
          </div>
          <div style={{ padding: 'var(--spacing-m)', background: 'var(--color-fill-secondary)', borderRadius: 'var(--border-radius-s)', border: 'var(--border-width-s) solid var(--color-border-default)' }}>
            <h3 style={{ fontWeight: 'var(--font-weight-bold)', margin: '0 0 var(--spacing-s) 0' }}>Bold Weight</h3>
            <div style={{ fontSize: 'var(--font-size-3xs)', color: 'var(--color-content-secondary)' }}>
              <strong>CSS:</strong> var(--font-weight-bold)<br/>
              <strong>Value:</strong> 700
            </div>
          </div>
        </div>
      </div>

      <div style={{ 
        background: 'var(--color-surface-primary)', 
        padding: 'var(--spacing-m)', 
        borderRadius: 'var(--border-radius-m)', 
        marginBottom: 'var(--spacing-m)',
        border: 'var(--border-width-s) solid var(--color-border-default)'
      }}>
        <h2>Font Sizes</h2>
        <p>Responsive typography scale for different screen sizes:</p>
        
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: 'var(--spacing-m)' }}>
          <div style={{ padding: 'var(--spacing-m)', background: 'var(--color-fill-secondary)', borderRadius: 'var(--border-radius-s)', border: 'var(--border-width-s) solid var(--color-border-default)' }}>
            <h3 style={{ fontSize: 'var(--font-size-5xs)', margin: '0 0 var(--spacing-s) 0' }}>5XS Size</h3>
            <div style={{ fontSize: 'var(--font-size-3xs)', color: 'var(--color-content-secondary)' }}>
              <strong>CSS:</strong> var(--font-size-5xs)<br/>
              <strong>Desktop:</strong> 0.625rem (10px)<br/>
              <strong>Tablet:</strong> 0.688rem (11px)<br/>
              <strong>Mobile:</strong> 0.688rem (11px)
            </div>
          </div>
          <div style={{ padding: 'var(--spacing-m)', background: 'var(--color-fill-secondary)', borderRadius: 'var(--border-radius-s)', border: 'var(--border-width-s) solid var(--color-border-default)' }}>
            <h3 style={{ fontSize: 'var(--font-size-4xs)', margin: '0 0 var(--spacing-s) 0' }}>4XS Size</h3>
            <div style={{ fontSize: 'var(--font-size-3xs)', color: 'var(--color-content-secondary)' }}>
              <strong>CSS:</strong> var(--font-size-4xs)<br/>
              <strong>Desktop:</strong> 0.75rem (12px)<br/>
              <strong>Tablet:</strong> 0.688rem (11px)<br/>
              <strong>Mobile:</strong> 0.688rem (11px)
            </div>
          </div>
          <div style={{ padding: 'var(--spacing-m)', background: 'var(--color-fill-secondary)', borderRadius: 'var(--border-radius-s)', border: 'var(--border-width-s) solid var(--color-border-default)' }}>
            <h3 style={{ fontSize: 'var(--font-size-3xs)', margin: '0 0 var(--spacing-s) 0' }}>3XS Size</h3>
            <div style={{ fontSize: 'var(--font-size-3xs)', color: 'var(--color-content-secondary)' }}>
              <strong>CSS:</strong> var(--font-size-3xs)<br/>
              <strong>Desktop:</strong> 0.875rem (14px)<br/>
              <strong>Tablet:</strong> 0.75rem (12px)<br/>
              <strong>Mobile:</strong> 0.75rem (12px)
            </div>
          </div>
          <div style={{ padding: 'var(--spacing-m)', background: 'var(--color-fill-secondary)', borderRadius: 'var(--border-radius-s)', border: 'var(--border-width-s) solid var(--color-border-default)' }}>
            <h3 style={{ fontSize: 'var(--font-size-2xs)', margin: '0 0 var(--spacing-s) 0' }}>2XS Size</h3>
            <div style={{ fontSize: 'var(--font-size-3xs)', color: 'var(--color-content-secondary)' }}>
              <strong>CSS:</strong> var(--font-size-2xs)<br/>
              <strong>Desktop:</strong> 1rem (16px)<br/>
              <strong>Tablet:</strong> 0.875rem (14px)<br/>
              <strong>Mobile:</strong> 0.875rem (14px)
            </div>
          </div>
          <div style={{ padding: 'var(--spacing-m)', background: 'var(--color-fill-secondary)', borderRadius: 'var(--border-radius-s)', border: 'var(--border-width-s) solid var(--color-border-default)' }}>
            <h3 style={{ fontSize: 'var(--font-size-xs)', margin: '0 0 var(--spacing-s) 0' }}>XS Size</h3>
            <div style={{ fontSize: 'var(--font-size-3xs)', color: 'var(--color-content-secondary)' }}>
              <strong>CSS:</strong> var(--font-size-xs)<br/>
              <strong>Desktop:</strong> 1.125rem (18px)<br/>
              <strong>Tablet:</strong> 1rem (16px)<br/>
              <strong>Mobile:</strong> 1rem (16px)
            </div>
          </div>
          <div style={{ padding: 'var(--spacing-m)', background: 'var(--color-fill-secondary)', borderRadius: 'var(--border-radius-s)', border: 'var(--border-width-s) solid var(--color-border-default)' }}>
            <h3 style={{ fontSize: 'var(--font-size-s)', margin: '0 0 var(--spacing-s) 0' }}>S Size</h3>
            <div style={{ fontSize: 'var(--font-size-3xs)', color: 'var(--color-content-secondary)' }}>
              <strong>CSS:</strong> var(--font-size-s)<br/>
              <strong>Desktop:</strong> 1.25rem (20px)<br/>
              <strong>Tablet:</strong> 1rem (16px)<br/>
              <strong>Mobile:</strong> 1rem (16px)
            </div>
          </div>
          <div style={{ padding: 'var(--spacing-m)', background: 'var(--color-fill-secondary)', borderRadius: 'var(--border-radius-s)', border: 'var(--border-width-s) solid var(--color-border-default)' }}>
            <h3 style={{ fontSize: 'var(--font-size-m)', margin: '0 0 var(--spacing-s) 0' }}>M Size</h3>
            <div style={{ fontSize: 'var(--font-size-3xs)', color: 'var(--color-content-secondary)' }}>
              <strong>CSS:</strong> var(--font-size-m)<br/>
              <strong>Desktop:</strong> 1.375rem (22px)<br/>
              <strong>Tablet:</strong> 1.25rem (20px)<br/>
              <strong>Mobile:</strong> 1.25rem (20px)
            </div>
          </div>
          <div style={{ padding: 'var(--spacing-m)', background: 'var(--color-fill-secondary)', borderRadius: 'var(--border-radius-s)', border: 'var(--border-width-s) solid var(--color-border-default)' }}>
            <h3 style={{ fontSize: 'var(--font-size-l)', margin: '0 0 var(--spacing-s) 0' }}>L Size</h3>
            <div style={{ fontSize: 'var(--font-size-3xs)', color: 'var(--color-content-secondary)' }}>
              <strong>CSS:</strong> var(--font-size-l)<br/>
              <strong>Desktop:</strong> 1.5rem (24px)<br/>
              <strong>Tablet:</strong> 1.125rem (18px)<br/>
              <strong>Mobile:</strong> 1.125rem (18px)
            </div>
          </div>
          <div style={{ padding: 'var(--spacing-m)', background: 'var(--color-fill-secondary)', borderRadius: 'var(--border-radius-s)', border: 'var(--border-width-s) solid var(--color-border-default)' }}>
            <h3 style={{ fontSize: 'var(--font-size-xl)', margin: '0 0 var(--spacing-s) 0' }}>XL Size</h3>
            <div style={{ fontSize: 'var(--font-size-3xs)', color: 'var(--color-content-secondary)' }}>
              <strong>CSS:</strong> var(--font-size-xl)<br/>
              <strong>Desktop:</strong> 2.25rem (36px)<br/>
              <strong>Tablet:</strong> 1.5rem (24px)<br/>
              <strong>Mobile:</strong> 1.5rem (24px)
            </div>
          </div>
          <div style={{ padding: 'var(--spacing-m)', background: 'var(--color-fill-secondary)', borderRadius: 'var(--border-radius-s)', border: 'var(--border-width-s) solid var(--color-border-default)' }}>
            <h3 style={{ fontSize: 'var(--font-size-2xl)', margin: '0 0 var(--spacing-s) 0' }}>2XL Size</h3>
            <div style={{ fontSize: 'var(--font-size-3xs)', color: 'var(--color-content-secondary)' }}>
              <strong>CSS:</strong> var(--font-size-2xl)<br/>
              <strong>Desktop:</strong> 3rem (48px)<br/>
              <strong>Tablet:</strong> 1.5rem (24px)<br/>
              <strong>Mobile:</strong> 1.5rem (24px)
            </div>
          </div>
          <div style={{ padding: 'var(--spacing-m)', background: 'var(--color-fill-secondary)', borderRadius: 'var(--border-radius-s)', border: 'var(--border-width-s) solid var(--color-border-default)' }}>
            <h3 style={{ fontSize: 'var(--font-size-3xl)', margin: '0 0 var(--spacing-s) 0' }}>3XL Size</h3>
            <div style={{ fontSize: 'var(--font-size-3xs)', color: 'var(--color-content-secondary)' }}>
              <strong>CSS:</strong> var(--font-size-3xl)<br/>
              <strong>Desktop:</strong> 4rem (64px)<br/>
              <strong>Tablet:</strong> 3rem (48px)<br/>
              <strong>Mobile:</strong> 3rem (48px)
            </div>
          </div>
          <div style={{ padding: 'var(--spacing-m)', background: 'var(--color-fill-secondary)', borderRadius: 'var(--border-radius-s)', border: 'var(--border-width-s) solid var(--color-border-default)' }}>
            <h3 style={{ fontSize: 'var(--font-size-4xl)', margin: '0 0 var(--spacing-s) 0' }}>4XL Size</h3>
            <div style={{ fontSize: 'var(--font-size-3xs)', color: 'var(--color-content-secondary)' }}>
              <strong>CSS:</strong> var(--font-size-4xl)<br/>
              <strong>Desktop:</strong> 6rem (96px)<br/>
              <strong>Tablet:</strong> 3rem (48px)<br/>
              <strong>Mobile:</strong> 3rem (48px)
            </div>
          </div>
        </div>
      </div>

      <div style={{ 
        background: 'var(--color-surface-primary)', 
        padding: 'var(--spacing-m)', 
        borderRadius: 'var(--border-radius-m)', 
        marginBottom: 'var(--spacing-m)',
        border: 'var(--border-width-s) solid var(--color-border-default)'
      }}>
        <h2>Line Heights</h2>
        <p>Typography line height scale for optimal readability:</p>
        
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 'var(--spacing-m)' }}>
          <div style={{ padding: 'var(--spacing-m)', background: 'var(--color-fill-secondary)', borderRadius: 'var(--border-radius-s)', border: 'var(--border-width-s) solid var(--color-border-default)' }}>
            <h3 style={{ lineHeight: 'var(--line-height-tight)', margin: '0 0 var(--spacing-s) 0' }}>Tight Line Height</h3>
            <div style={{ fontSize: 'var(--font-size-3xs)', color: 'var(--color-content-secondary)' }}>
              <strong>CSS:</strong> var(--line-height-tight)<br/>
              <strong>Value:</strong> 1.05<br/>
              <strong>Usage:</strong> Large headlines, display text
            </div>
          </div>
          <div style={{ padding: 'var(--spacing-m)', background: 'var(--color-fill-secondary)', borderRadius: 'var(--border-radius-s)', border: 'var(--border-width-s) solid var(--color-border-default)' }}>
            <h3 style={{ lineHeight: 'var(--line-height-normal)', margin: '0 0 var(--spacing-s) 0' }}>Normal Line Height</h3>
            <div style={{ fontSize: 'var(--font-size-3xs)', color: 'var(--color-content-secondary)' }}>
              <strong>CSS:</strong> var(--line-height-normal)<br/>
              <strong>Value:</strong> 1.2<br/>
              <strong>Usage:</strong> Headings, titles, buttons
            </div>
          </div>
          <div style={{ padding: 'var(--spacing-m)', background: 'var(--color-fill-secondary)', borderRadius: 'var(--border-radius-s)', border: 'var(--border-width-s) solid var(--color-border-default)' }}>
            <h3 style={{ lineHeight: 'var(--line-height-relaxed)', margin: '0 0 var(--spacing-s) 0' }}>Relaxed Line Height</h3>
            <div style={{ fontSize: 'var(--font-size-3xs)', color: 'var(--color-content-secondary)' }}>
              <strong>CSS:</strong> var(--line-height-relaxed)<br/>
              <strong>Value:</strong> 1.6<br/>
              <strong>Usage:</strong> Body text, long content
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export const AllTypeStyles = () => {
  const [isDark, setIsDark] = useState(false);

  return (
    <div style={{ 
      padding: 'var(--spacing-m)',
      background: 'var(--color-background-primary)',
      color: 'var(--color-content-primary)',
      minHeight: '100vh'
    }}>
      <ThemeToggle isDark={isDark} onToggle={() => setIsDark(!isDark)} />
      <h1>Design Tokens - All Type Styles ({isDark ? 'Dark' : 'Light'} Mode)</h1>
      <p>Complete showcase of all predefined type styles that combine our typography tokens:</p>
      
      <div style={{ 
        background: 'var(--color-surface-primary)', 
        padding: 'var(--spacing-m)', 
        borderRadius: 'var(--border-radius-m)', 
        marginBottom: 'var(--spacing-m)',
        border: 'var(--border-width-s) solid var(--color-border-default)'
      }}>
        <h2>Display Styles</h2>
        <p>Large, impactful text for hero sections and main headlines:</p>
        
        <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-l)' }}>
          <div style={{ 
            padding: 'var(--spacing-m)', 
            background: 'var(--color-fill-secondary)', 
            borderRadius: 'var(--border-radius-s)',
            border: 'var(--border-width-s) solid var(--color-border-default)'
          }}>
            <h1 style={{ 
              fontFamily: 'var(--font-family-primary)',
              fontSize: 'var(--font-size-4xl)',
              fontWeight: 'var(--font-weight-bold)',
              lineHeight: 'var(--line-height-tight)',
              letterSpacing: 'var(--letter-spacing-tight)',
              margin: 0
            }}>
              Display Large
            </h1>
            <div style={{ fontSize: 'var(--font-size-3xs)', color: 'var(--color-content-secondary)', marginTop: 'var(--spacing-s)' }}>
              <strong>Usage:</strong> Hero headlines, main page titles<br/>
              <strong>Class:</strong> .type-display-large
            </div>
          </div>
          
          <div style={{ 
            padding: 'var(--spacing-m)', 
            background: 'var(--color-fill-secondary)', 
            borderRadius: 'var(--border-radius-s)',
            border: 'var(--border-width-s) solid var(--color-border-default)'
          }}>
            <h1 style={{ 
              fontFamily: 'var(--font-family-primary)',
              fontSize: 'var(--font-size-3xl)',
              fontWeight: 'var(--font-weight-bold)',
              lineHeight: 'var(--line-height-tight)',
              letterSpacing: 'var(--letter-spacing-tight)',
              margin: 0
            }}>
              Display Medium
            </h1>
            <div style={{ fontSize: 'var(--font-size-3xs)', color: 'var(--color-content-secondary)', marginTop: 'var(--spacing-s)' }}>
              <strong>Usage:</strong> Large headlines, section titles<br/>
              <strong>Class:</strong> .type-display-medium
            </div>
          </div>
          
          <div style={{ 
            padding: 'var(--spacing-m)', 
            background: 'var(--color-fill-secondary)', 
            borderRadius: 'var(--border-radius-s)',
            border: 'var(--border-width-s) solid var(--color-border-default)'
          }}>
            <h1 style={{ 
              fontFamily: 'var(--font-family-primary)',
              fontSize: 'var(--font-size-2xl)',
              fontWeight: 'var(--font-weight-bold)',
              lineHeight: 'var(--line-height-tight)',
              letterSpacing: 'var(--letter-spacing-tight)',
              margin: 0
            }}>
              Display Small
            </h1>
            <div style={{ fontSize: 'var(--font-size-3xs)', color: 'var(--color-content-secondary)', marginTop: 'var(--spacing-s)' }}>
              <strong>Usage:</strong> Medium headlines, feature titles<br/>
              <strong>Class:</strong> .type-display-small
            </div>
          </div>
        </div>
      </div>

      <div style={{ 
        background: 'var(--color-surface-primary)', 
        padding: 'var(--spacing-m)', 
        borderRadius: 'var(--border-radius-m)', 
        marginBottom: 'var(--spacing-m)',
        border: 'var(--border-width-s) solid var(--color-border-default)'
      }}>
        <h2>Heading Styles</h2>
        <p>Section headers and page titles:</p>
        
        <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-l)' }}>
          <div style={{ 
            padding: 'var(--spacing-m)', 
            background: 'var(--color-fill-secondary)', 
            borderRadius: 'var(--border-radius-s)',
            border: 'var(--border-width-s) solid var(--color-border-default)'
          }}>
            <h2 style={{ 
              fontFamily: 'var(--font-family-primary)',
              fontSize: 'var(--font-size-2xl)',
              fontWeight: 'var(--font-weight-semibold)',
              lineHeight: 'var(--line-height-normal)',
              letterSpacing: 'var(--letter-spacing-normal)',
              margin: 0
            }}>
              Heading Extra Large
            </h2>
            <div style={{ fontSize: 'var(--font-size-3xs)', color: 'var(--color-content-secondary)', marginTop: 'var(--spacing-s)' }}>
              <strong>Usage:</strong> Page titles, major section headers<br/>
              <strong>Class:</strong> .type-heading-extraLarge
            </div>
          </div>
          
          <div style={{ 
            padding: 'var(--spacing-m)', 
            background: 'var(--color-fill-secondary)', 
            borderRadius: 'var(--border-radius-s)',
            border: 'var(--border-width-s) solid var(--color-border-default)'
          }}>
            <h3 style={{ 
              fontFamily: 'var(--font-family-primary)',
              fontSize: 'var(--font-size-xl)',
              fontWeight: 'var(--font-weight-semibold)',
              lineHeight: 'var(--line-height-normal)',
              letterSpacing: 'var(--letter-spacing-normal)',
              margin: 0
            }}>
              Heading Large
            </h3>
            <div style={{ fontSize: 'var(--font-size-3xs)', color: 'var(--color-content-secondary)', marginTop: 'var(--spacing-s)' }}>
              <strong>Usage:</strong> Section headers, major content titles<br/>
              <strong>Class:</strong> .type-heading-large
            </div>
          </div>
          
          <div style={{ 
            padding: 'var(--spacing-m)', 
            background: 'var(--color-fill-secondary)', 
            borderRadius: 'var(--border-radius-s)',
            border: 'var(--border-width-s) solid var(--color-border-default)'
          }}>
            <h4 style={{ 
              fontFamily: 'var(--font-family-primary)',
              fontSize: 'var(--font-size-l)',
              fontWeight: 'var(--font-weight-semibold)',
              lineHeight: 'var(--line-height-normal)',
              letterSpacing: 'var(--letter-spacing-normal)',
              margin: 0
            }}>
              Heading Medium
            </h4>
            <div style={{ fontSize: 'var(--font-size-3xs)', color: 'var(--color-content-secondary)', marginTop: 'var(--spacing-s)' }}>
              <strong>Usage:</strong> Subsection headers, content titles<br/>
              <strong>Class:</strong> .type-heading-medium
            </div>
          </div>
          
          <div style={{ 
            padding: 'var(--spacing-m)', 
            background: 'var(--color-fill-secondary)', 
            borderRadius: 'var(--border-radius-s)',
            border: 'var(--border-width-s) solid var(--color-border-default)'
          }}>
            <h5 style={{ 
              fontFamily: 'var(--font-family-primary)',
              fontSize: 'var(--font-size-m)',
              fontWeight: 'var(--font-weight-semibold)',
              lineHeight: 'var(--line-height-normal)',
              letterSpacing: 'var(--letter-spacing-normal)',
              margin: 0
            }}>
              Heading Small
            </h5>
            <div style={{ fontSize: 'var(--font-size-3xs)', color: 'var(--color-content-secondary)', marginTop: 'var(--spacing-s)' }}>
              <strong>Usage:</strong> Small headers, minor titles<br/>
              <strong>Class:</strong> .type-heading-small
            </div>
          </div>
        </div>
      </div>

      <div style={{ 
        background: 'var(--color-surface-primary)', 
        padding: 'var(--spacing-m)', 
        borderRadius: 'var(--border-radius-m)', 
        marginBottom: 'var(--spacing-m)',
        border: 'var(--border-width-s) solid var(--color-border-default)'
      }}>
        <h2>Title Styles</h2>
        <p>Card titles, form labels, and component headings:</p>
        
        <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-l)' }}>
          <div style={{ 
            padding: 'var(--spacing-m)', 
            background: 'var(--color-fill-secondary)', 
            borderRadius: 'var(--border-radius-s)',
            border: 'var(--border-width-s) solid var(--color-border-default)'
          }}>
            <h4 style={{ 
              fontFamily: 'var(--font-family-primary)',
              fontSize: 'var(--font-size-xl)',
              fontWeight: 'var(--font-weight-semibold)',
              lineHeight: 'var(--line-height-normal)',
              letterSpacing: 'var(--letter-spacing-small)',
              margin: 0
            }}>
              Title Extra Large
            </h4>
            <div style={{ fontSize: 'var(--font-size-3xs)', color: 'var(--color-content-secondary)', marginTop: 'var(--spacing-s)' }}>
              <strong>Usage:</strong> Large card titles, major form sections<br/>
              <strong>Class:</strong> .type-title-extraLarge
            </div>
          </div>
          
          <div style={{ 
            padding: 'var(--spacing-m)', 
            background: 'var(--color-fill-secondary)', 
            borderRadius: 'var(--border-radius-s)',
            border: 'var(--border-width-s) solid var(--color-border-default)'
          }}>
            <h5 style={{ 
              fontFamily: 'var(--font-family-primary)',
              fontSize: 'var(--font-size-l)',
              fontWeight: 'var(--font-weight-semibold)',
              lineHeight: 'var(--line-height-normal)',
              letterSpacing: 'var(--letter-spacing-small)',
              margin: 0
            }}>
              Title Large
            </h5>
            <div style={{ fontSize: 'var(--font-size-3xs)', color: 'var(--color-content-secondary)', marginTop: 'var(--spacing-s)' }}>
              <strong>Usage:</strong> Card titles, form section headers<br/>
              <strong>Class:</strong> .type-title-large
            </div>
          </div>
          
          <div style={{ 
            padding: 'var(--spacing-m)', 
            background: 'var(--color-fill-secondary)', 
            borderRadius: 'var(--border-radius-s)',
            border: 'var(--border-width-s) solid var(--color-border-default)'
          }}>
            <h6 style={{ 
              fontFamily: 'var(--font-family-primary)',
              fontSize: 'var(--font-size-m)',
              fontWeight: 'var(--font-weight-semibold)',
              lineHeight: 'var(--line-height-normal)',
              letterSpacing: 'var(--letter-spacing-small)',
              margin: 0
            }}>
              Title Medium
            </h6>
            <div style={{ fontSize: 'var(--font-size-3xs)', color: 'var(--color-content-secondary)', marginTop: 'var(--spacing-s)' }}>
              <strong>Usage:</strong> Medium titles, form labels<br/>
              <strong>Class:</strong> .type-title-medium
            </div>
          </div>
          
          <div style={{ 
            padding: 'var(--spacing-m)', 
            background: 'var(--color-fill-secondary)', 
            borderRadius: 'var(--border-radius-s)',
            border: 'var(--border-width-s) solid var(--color-border-default)'
          }}>
            <span style={{ 
              fontFamily: 'var(--font-family-primary)',
              fontSize: 'var(--font-size-s)',
              fontWeight: 'var(--font-weight-semibold)',
              lineHeight: 'var(--line-height-normal)',
              letterSpacing: 'var(--letter-spacing-small)'
            }}>
              Title Small
            </span>
            <div style={{ fontSize: 'var(--font-size-3xs)', color: 'var(--color-content-secondary)', marginTop: 'var(--spacing-s)' }}>
              <strong>Usage:</strong> Small titles, form field labels<br/>
              <strong>Class:</strong> .type-title-small
            </div>
          </div>
          
          <div style={{ 
            padding: 'var(--spacing-m)', 
            background: 'var(--color-fill-secondary)', 
            borderRadius: 'var(--border-radius-s)',
            border: 'var(--border-width-s) solid var(--color-border-default)'
          }}>
            <span style={{ 
              fontFamily: 'var(--font-family-primary)',
              fontSize: 'var(--font-size-2xs)',
              fontWeight: 'var(--font-weight-semibold)',
              lineHeight: 'var(--line-height-normal)',
              letterSpacing: 'var(--letter-spacing-small)'
            }}>
              Title Extra Small
            </span>
            <div style={{ fontSize: 'var(--font-size-3xs)', color: 'var(--color-content-secondary)', marginTop: 'var(--spacing-s)' }}>
              <strong>Usage:</strong> Extra small titles, micro labels<br/>
              <strong>Class:</strong> .type-title-extraSmall
            </div>
          </div>
        </div>
      </div>

      <div style={{ 
        background: 'var(--color-surface-primary)', 
        padding: 'var(--spacing-m)', 
        borderRadius: 'var(--border-radius-m)', 
        marginBottom: 'var(--spacing-m)',
        border: 'var(--border-width-s) solid var(--color-border-default)'
      }}>
        <h2>Body Styles</h2>
        <p>Main content text for descriptions and paragraphs:</p>
        
        <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-l)' }}>
          <div style={{ 
            padding: 'var(--spacing-m)', 
            background: 'var(--color-fill-secondary)', 
            borderRadius: 'var(--border-radius-s)',
            border: 'var(--border-width-s) solid var(--color-border-default)'
          }}>
            <p style={{ 
              fontFamily: 'var(--font-family-primary)',
              fontSize: 'var(--font-size-l)',
              fontWeight: 'var(--font-weight-regular)',
              lineHeight: 'var(--line-height-relaxed)',
              letterSpacing: 'var(--letter-spacing-none)',
              margin: 0
            }}>
              Body Extra Large - This is a paragraph using our extra large body typography tokens. It demonstrates how text looks with the proper font family, size, weight, line height, and letter spacing.
            </p>
            <div style={{ fontSize: 'var(--font-size-3xs)', color: 'var(--color-content-secondary)', marginTop: 'var(--spacing-s)' }}>
              <strong>Usage:</strong> Large body text, prominent descriptions<br/>
              <strong>Class:</strong> .type-body-extraLarge
            </div>
          </div>
          
          <div style={{ 
            padding: 'var(--spacing-m)', 
            background: 'var(--color-fill-secondary)', 
            borderRadius: 'var(--border-radius-s)',
            border: 'var(--border-width-s) solid var(--color-border-default)'
          }}>
            <p style={{ 
              fontFamily: 'var(--font-family-primary)',
              fontSize: 'var(--font-size-m)',
              fontWeight: 'var(--font-weight-regular)',
              lineHeight: 'var(--line-height-relaxed)',
              letterSpacing: 'var(--letter-spacing-none)',
              margin: 0
            }}>
              Body Large - This is a paragraph using our large body typography tokens. It demonstrates how text looks with the proper font family, size, weight, line height, and letter spacing.
            </p>
            <div style={{ fontSize: 'var(--font-size-3xs)', color: 'var(--color-content-secondary)', marginTop: 'var(--spacing-s)' }}>
              <strong>Usage:</strong> Large body text, main content<br/>
              <strong>Class:</strong> .type-body-large
            </div>
          </div>
          
          <div style={{ 
            padding: 'var(--spacing-m)', 
            background: 'var(--color-fill-secondary)', 
            borderRadius: 'var(--border-radius-s)',
            border: 'var(--border-width-s) solid var(--color-border-default)'
          }}>
            <p style={{ 
              fontFamily: 'var(--font-family-primary)',
              fontSize: 'var(--font-size-s)',
              fontWeight: 'var(--font-weight-regular)',
              lineHeight: 'var(--line-height-relaxed)',
              letterSpacing: 'var(--letter-spacing-none)',
              margin: 0
            }}>
              Body Medium - This is a paragraph using our medium body typography tokens. It demonstrates how text looks with the proper font family, size, weight, line height, and letter spacing.
            </p>
            <div style={{ fontSize: 'var(--font-size-3xs)', color: 'var(--color-content-secondary)', marginTop: 'var(--spacing-s)' }}>
              <strong>Usage:</strong> Medium body text, standard content<br/>
              <strong>Class:</strong> .type-body-medium
            </div>
          </div>
          
          <div style={{ 
            padding: 'var(--spacing-m)', 
            background: 'var(--color-fill-secondary)', 
            borderRadius: 'var(--border-radius-s)',
            border: 'var(--border-width-s) solid var(--color-border-default)'
          }}>
            <p style={{ 
              fontFamily: 'var(--font-family-primary)',
              fontSize: 'var(--font-size-xs)',
              fontWeight: 'var(--font-weight-regular)',
              lineHeight: 'var(--line-height-relaxed)',
              letterSpacing: 'var(--letter-spacing-none)',
              margin: 0
            }}>
              Body Small - This is a paragraph using our small body typography tokens. It demonstrates how text looks with the proper font family, size, weight, line height, and letter spacing.
            </p>
            <div style={{ fontSize: 'var(--font-size-3xs)', color: 'var(--color-content-secondary)', marginTop: 'var(--spacing-s)' }}>
              <strong>Usage:</strong> Small body text, supporting content<br/>
              <strong>Class:</strong> .type-body-small
            </div>
          </div>
          
          <div style={{ 
            padding: 'var(--spacing-m)', 
            background: 'var(--color-fill-secondary)', 
            borderRadius: 'var(--border-radius-s)',
            border: 'var(--border-width-s) solid var(--color-border-default)'
          }}>
            <p style={{ 
              fontFamily: 'var(--font-family-primary)',
              fontSize: 'var(--font-size-2xs)',
              fontWeight: 'var(--font-weight-regular)',
              lineHeight: 'var(--line-height-relaxed)',
              letterSpacing: 'var(--letter-spacing-none)',
              margin: 0
            }}>
              Body Extra Small - This is a paragraph using our extra small body typography tokens.
            </p>
            <div style={{ fontSize: 'var(--font-size-3xs)', color: 'var(--color-content-secondary)', marginTop: 'var(--spacing-s)' }}>
              <strong>Usage:</strong> Extra small body text, captions<br/>
              <strong>Class:</strong> .type-body-extraSmall
            </div>
          </div>
          
          <div style={{ 
            padding: 'var(--spacing-m)', 
            background: 'var(--color-fill-secondary)', 
            borderRadius: 'var(--border-radius-s)',
            border: 'var(--border-width-s) solid var(--color-border-default)'
          }}>
            <p style={{ 
              fontFamily: 'var(--font-family-primary)',
              fontSize: 'var(--font-size-3xs)',
              fontWeight: 'var(--font-weight-regular)',
              lineHeight: 'var(--line-height-relaxed)',
              letterSpacing: 'var(--letter-spacing-none)',
              margin: 0
            }}>
              Body Extra Extra Small - This is a paragraph using our extra extra small body typography tokens.
            </p>
            <div style={{ fontSize: 'var(--font-size-3xs)', color: 'var(--color-content-secondary)', marginTop: 'var(--spacing-s)' }}>
              <strong>Usage:</strong> Extra extra small body text, micro content<br/>
              <strong>Class:</strong> .type-body-extraExtraSmall
            </div>
          </div>
        </div>
      </div>

      <div style={{ 
        background: 'var(--color-surface-primary)', 
        padding: 'var(--spacing-m)', 
        borderRadius: 'var(--border-radius-m)', 
        marginBottom: 'var(--spacing-m)',
        border: 'var(--border-width-s) solid var(--color-border-default)'
      }}>
        <h2>Label Styles</h2>
        <p>Form labels, small text, and UI elements:</p>
        
        <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-l)' }}>
          <div style={{ 
            padding: 'var(--spacing-m)', 
            background: 'var(--color-fill-secondary)', 
            borderRadius: 'var(--border-radius-s)',
            border: 'var(--border-width-s) solid var(--color-border-default)'
          }}>
            <span style={{ 
              fontFamily: 'var(--font-family-primary)',
              fontSize: 'var(--font-size-m)',
              fontWeight: 'var(--font-weight-medium)',
              lineHeight: 'var(--line-height-relaxed)',
              letterSpacing: 'var(--letter-spacing-none)'
            }}>
              Label Large
            </span>
            <div style={{ fontSize: 'var(--font-size-3xs)', color: 'var(--color-content-secondary)', marginTop: 'var(--spacing-s)' }}>
              <strong>Usage:</strong> Large labels, prominent UI text<br/>
              <strong>Class:</strong> .type-label-large
            </div>
          </div>
          
          <div style={{ 
            padding: 'var(--spacing-m)', 
            background: 'var(--color-fill-secondary)', 
            borderRadius: 'var(--border-radius-s)',
            border: 'var(--border-width-s) solid var(--color-border-default)'
          }}>
            <span style={{ 
              fontFamily: 'var(--font-family-primary)',
              fontSize: 'var(--font-size-s)',
              fontWeight: 'var(--font-weight-medium)',
              lineHeight: 'var(--line-height-relaxed)',
              letterSpacing: 'var(--letter-spacing-none)'
            }}>
              Label Medium
            </span>
            <div style={{ fontSize: 'var(--font-size-3xs)', color: 'var(--color-content-secondary)', marginTop: 'var(--spacing-s)' }}>
              <strong>Usage:</strong> Medium labels, form field labels<br/>
              <strong>Class:</strong> .type-label-medium
            </div>
          </div>
          
          <div style={{ 
            padding: 'var(--spacing-m)', 
            background: 'var(--color-fill-secondary)', 
            borderRadius: 'var(--border-radius-s)',
            border: 'var(--border-width-s) solid var(--color-border-default)'
          }}>
            <span style={{ 
              fontFamily: 'var(--font-family-primary)',
              fontSize: 'var(--font-size-xs)',
              fontWeight: 'var(--font-weight-medium)',
              lineHeight: 'var(--line-height-relaxed)',
              letterSpacing: 'var(--letter-spacing-none)'
            }}>
              Label Small
            </span>
            <div style={{ fontSize: 'var(--font-size-3xs)', color: 'var(--color-content-secondary)', marginTop: 'var(--spacing-s)' }}>
              <strong>Usage:</strong> Small labels, helper text<br/>
              <strong>Class:</strong> .type-label-small
            </div>
          </div>
          
          <div style={{ 
            padding: 'var(--spacing-m)', 
            background: 'var(--color-fill-secondary)', 
            borderRadius: 'var(--border-radius-s)',
            border: 'var(--border-width-s) solid var(--color-border-default)'
          }}>
            <span style={{ 
              fontFamily: 'var(--font-family-primary)',
              fontSize: 'var(--font-size-2xs)',
              fontWeight: 'var(--font-weight-medium)',
              lineHeight: 'var(--line-height-relaxed)',
              letterSpacing: 'var(--letter-spacing-none)'
            }}>
              Label Extra Small
            </span>
            <div style={{ fontSize: 'var(--font-size-3xs)', color: 'var(--color-content-secondary)', marginTop: 'var(--spacing-s)' }}>
              <strong>Usage:</strong> Extra small labels, micro text<br/>
              <strong>Class:</strong> .type-label-extraSmall
            </div>
          </div>
          
          <div style={{ 
            padding: 'var(--spacing-m)', 
            background: 'var(--color-fill-secondary)', 
            borderRadius: 'var(--border-radius-s)',
            border: 'var(--border-width-s) solid var(--color-border-default)'
          }}>
            <span style={{ 
              fontFamily: 'var(--font-family-primary)',
              fontSize: 'var(--font-size-3xs)',
              fontWeight: 'var(--font-weight-medium)',
              lineHeight: 'var(--line-height-relaxed)',
              letterSpacing: 'var(--letter-spacing-none)'
            }}>
              Label Extra Extra Small
            </span>
            <div style={{ fontSize: 'var(--font-size-3xs)', color: 'var(--color-content-secondary)', marginTop: 'var(--spacing-s)' }}>
              <strong>Usage:</strong> Extra extra small labels, micro UI text<br/>
              <strong>Class:</strong> .type-label-extraExtraSmall
            </div>
          </div>
          
          <div style={{ 
            padding: 'var(--spacing-m)', 
            background: 'var(--color-fill-secondary)', 
            borderRadius: 'var(--border-radius-s)',
            border: 'var(--border-width-s) solid var(--color-border-default)'
          }}>
            <span style={{ 
              fontFamily: 'var(--font-family-primary)',
              fontSize: 'var(--font-size-4xs)',
              fontWeight: 'var(--font-weight-medium)',
              lineHeight: 'var(--line-height-relaxed)',
              letterSpacing: 'var(--letter-spacing-none)'
            }}>
              Label Extra Extra Extra Small
            </span>
            <div style={{ fontSize: 'var(--font-size-3xs)', color: 'var(--color-content-secondary)', marginTop: 'var(--spacing-s)' }}>
              <strong>Usage:</strong> Extra extra extra small labels, micro micro text<br/>
              <strong>Class:</strong> .type-label-extraExtraExtraSmall
            </div>
          </div>
          
          <div style={{ 
            padding: 'var(--spacing-m)', 
            background: 'var(--color-fill-secondary)', 
            borderRadius: 'var(--border-radius-s)',
            border: 'var(--border-width-s) solid var(--color-border-default)'
          }}>
            <span style={{ 
              fontFamily: 'var(--font-family-primary)',
              fontSize: 'var(--font-size-5xs)',
              fontWeight: 'var(--font-weight-medium)',
              lineHeight: 'var(--line-height-relaxed)',
              letterSpacing: 'var(--letter-spacing-none)'
            }}>
              Label Extra Extra Extra Extra Small
            </span>
            <div style={{ fontSize: 'var(--font-size-3xs)', color: 'var(--color-content-secondary)', marginTop: 'var(--spacing-s)' }}>
              <strong>Usage:</strong> Extra extra extra extra small labels, micro micro micro text<br/>
              <strong>Class:</strong> .type-label-extraExtraExtraExtraSmall
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export const SemanticColors = () => {
  const [isDark, setIsDark] = useState(false);

  // Apply theme to document element for proper token switching
  React.useEffect(() => {
    document.documentElement.setAttribute('data-theme', isDark ? 'dark' : 'light');
  }, [isDark]);

  return (
    <div style={{ 
      padding: 'var(--spacing-m)',
      background: 'var(--color-background-primary)',
      color: 'var(--color-content-primary)',
      minHeight: '100vh'
    }}>
      <ThemeToggle isDark={isDark} onToggle={() => setIsDark(!isDark)} />
      <h1>Design Tokens - Semantic Colors ({isDark ? 'Dark' : 'Light'} Mode)</h1>
      <p>These colors automatically adapt to the current theme and reference primitive tokens. Toggle between light and dark mode to see them change.</p>
      
      <div style={{ 
        background: 'var(--color-surface-primary)', 
        padding: 'var(--spacing-m)', 
        borderRadius: 'var(--border-radius-m)', 
        marginBottom: 'var(--spacing-m)',
        border: 'var(--border-width-s) solid var(--color-border-default)'
      }}>
        <h2>Fill Colors</h2>
        <p>Colors for interactive elements like buttons, chips, and avatars:</p>
        
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 'var(--spacing-m)' }}>
          {/* Base Fill Colors */}
          <div style={{ padding: 'var(--spacing-m)', background: 'var(--color-fill-primary)', color: 'var(--color-content-inverse)', borderRadius: 'var(--border-radius-s)', border: 'var(--border-width-s) solid var(--color-border-default)' }}>
            <strong>Primary Fill</strong>
            <div>CSS: --color-fill-primary</div>
            <div style={{ fontSize: 'var(--font-size-3xs)', color: 'var(--color-content-secondary)' }}>Main interactive fill</div>
          </div>
          <div style={{ padding: 'var(--spacing-m)', background: 'var(--color-fill-secondary)', color: 'var(--color-content-primary)', borderRadius: 'var(--border-radius-s)', border: 'var(--border-width-s) solid var(--color-border-default)' }}>
            <strong>Secondary Fill</strong>
            <div>CSS: --color-fill-secondary</div>
            <div style={{ fontSize: 'var(--font-size-3xs)', color: 'var(--color-content-secondary)' }}>Secondary interactive fill</div>
          </div>
          <div style={{ padding: 'var(--spacing-m)', background: 'var(--color-fill-tertiary)', color: 'var(--color-content-primary)', borderRadius: 'var(--border-radius-s)', border: 'var(--border-width-s) solid var(--color-border-default)' }}>
            <strong>Tertiary Fill</strong>
            <div>CSS: --color-fill-tertiary</div>
            <div style={{ fontSize: 'var(--font-size-3xs)', color: 'var(--color-content-secondary)' }}>Subtle interactive fill</div>
          </div>
          
          {/* Primary Fill States */}
          <div style={{ padding: 'var(--spacing-m)', background: 'var(--color-fill-primary-hover)', color: 'var(--color-content-inverse)', borderRadius: 'var(--border-radius-s)', border: 'var(--border-width-s) solid var(--color-border-default)' }}>
            <strong>Primary Hover</strong>
            <div>CSS: --color-fill-primary-hover</div>
            <div style={{ fontSize: 'var(--font-size-3xs)', color: 'var(--color-content-secondary)' }}>Primary hover state</div>
          </div>
          <div style={{ padding: 'var(--spacing-m)', background: 'var(--color-fill-primary-active)', color: 'var(--color-content-inverse)', borderRadius: 'var(--border-radius-s)', border: 'var(--border-width-s) solid var(--color-border-default)' }}>
            <strong>Primary Active</strong>
            <div>CSS: --color-fill-primary-active</div>
            <div style={{ fontSize: 'var(--font-size-3xs)', color: 'var(--color-content-secondary)' }}>Primary active state</div>
          </div>
          <div style={{ padding: 'var(--spacing-m)', background: 'var(--color-fill-primary-pressed)', color: 'var(--color-content-inverse)', borderRadius: 'var(--border-radius-s)', border: 'var(--border-width-s) solid var(--color-border-default)' }}>
            <strong>Primary Pressed</strong>
            <div>CSS: --color-fill-primary-pressed</div>
            <div style={{ fontSize: 'var(--font-size-3xs)', color: 'var(--color-content-secondary)' }}>Primary pressed state</div>
          </div>
          
          {/* Secondary Fill States */}
          <div style={{ padding: 'var(--spacing-m)', background: 'var(--color-fill-secondary-hover)', color: 'var(--color-content-primary)', borderRadius: 'var(--border-radius-s)', border: 'var(--border-width-s) solid var(--color-border-default)' }}>
            <strong>Secondary Hover</strong>
            <div>CSS: --color-fill-secondary-hover</div>
            <div style={{ fontSize: 'var(--font-size-3xs)', color: 'var(--color-content-secondary)' }}>Secondary hover state</div>
          </div>
          <div style={{ padding: 'var(--spacing-m)', background: 'var(--color-fill-secondary-active)', color: 'var(--color-content-primary)', borderRadius: 'var(--border-radius-s)', border: 'var(--border-width-s) solid var(--color-border-default)' }}>
            <strong>Secondary Active</strong>
            <div>CSS: --color-fill-secondary-active</div>
            <div style={{ fontSize: 'var(--font-size-3xs)', color: 'var(--color-content-secondary)' }}>Secondary active state</div>
          </div>
          <div style={{ padding: 'var(--spacing-m)', background: 'var(--color-fill-secondary-pressed)', color: 'var(--color-content-primary)', borderRadius: 'var(--border-radius-s)', border: 'var(--border-width-s) solid var(--color-border-default)' }}>
            <strong>Secondary Pressed</strong>
            <div>CSS: --color-fill-secondary-pressed</div>
            <div style={{ fontSize: 'var(--font-size-3xs)', color: 'var(--color-content-secondary)' }}>Secondary pressed state</div>
          </div>
          
          {/* Tertiary Fill States */}
          <div style={{ padding: 'var(--spacing-m)', background: 'var(--color-fill-tertiary-hover)', color: 'var(--color-content-primary)', borderRadius: 'var(--border-radius-s)', border: 'var(--border-width-s) solid var(--color-border-default)' }}>
            <strong>Tertiary Hover</strong>
            <div>CSS: --color-fill-tertiary-hover</div>
            <div style={{ fontSize: 'var(--font-size-3xs)', color: 'var(--color-content-secondary)' }}>Tertiary hover state</div>
          </div>
          <div style={{ padding: 'var(--spacing-m)', background: 'var(--color-fill-tertiary-active)', color: 'var(--color-content-primary)', borderRadius: 'var(--border-radius-s)', border: 'var(--border-width-s) solid var(--color-border-default)' }}>
            <strong>Tertiary Active</strong>
            <div>CSS: --color-fill-tertiary-active</div>
            <div style={{ fontSize: 'var(--font-size-3xs)', color: 'var(--color-content-secondary)' }}>Tertiary active state</div>
          </div>
          <div style={{ padding: 'var(--spacing-m)', background: 'var(--color-fill-tertiary-pressed)', color: 'var(--color-content-primary)', borderRadius: 'var(--border-radius-s)', border: 'var(--border-width-s) solid var(--color-border-default)' }}>
            <strong>Tertiary Pressed</strong>
            <div>CSS: --color-fill-tertiary-pressed</div>
            <div style={{ fontSize: 'var(--font-size-3xs)', color: 'var(--color-content-secondary)' }}>Tertiary pressed state</div>
          </div>
          
          {/* Success Fill States */}
          <div style={{ padding: 'var(--spacing-m)', background: 'var(--color-fill-success)', color: 'var(--color-content-primary)', borderRadius: 'var(--border-radius-s)', border: 'var(--border-width-s) solid var(--color-border-default)' }}>
            <strong>Success Fill</strong>
            <div>CSS: --color-fill-success</div>
            <div style={{ fontSize: 'var(--font-size-3xs)', color: 'var(--color-content-secondary)' }}>Success state fill</div>
          </div>
          <div style={{ padding: 'var(--spacing-m)', background: 'var(--color-fill-success-hover)', color: 'var(--color-content-primary)', borderRadius: 'var(--border-radius-s)', border: 'var(--border-width-s) solid var(--color-border-default)' }}>
            <strong>Success Hover</strong>
            <div>CSS: --color-fill-success-hover</div>
            <div style={{ fontSize: 'var(--font-size-3xs)', color: 'var(--color-content-secondary)' }}>Success hover state</div>
          </div>
          <div style={{ padding: 'var(--spacing-m)', background: 'var(--color-fill-success-active)', color: 'var(--color-content-primary)', borderRadius: 'var(--border-radius-s)', border: 'var(--border-width-s) solid var(--color-border-default)' }}>
            <strong>Success Active</strong>
            <div>CSS: --color-fill-success-active</div>
            <div style={{ fontSize: 'var(--font-size-3xs)', color: 'var(--color-content-secondary)' }}>Success active state</div>
          </div>
          <div style={{ padding: 'var(--spacing-m)', background: 'var(--color-fill-success-pressed)', color: 'var(--color-content-primary)', borderRadius: 'var(--border-radius-s)', border: 'var(--border-width-s) solid var(--color-border-default)' }}>
            <strong>Success Pressed</strong>
            <div>CSS: --color-fill-success-pressed</div>
            <div style={{ fontSize: 'var(--font-size-3xs)', color: 'var(--color-content-secondary)' }}>Success pressed state</div>
          </div>
          
          {/* Warning Fill States */}
          <div style={{ padding: 'var(--spacing-m)', background: 'var(--color-fill-warning)', color: 'var(--color-content-primary)', borderRadius: 'var(--border-radius-s)', border: 'var(--border-width-s) solid var(--color-border-default)' }}>
            <strong>Warning Fill</strong>
            <div>CSS: --color-fill-warning</div>
            <div style={{ fontSize: 'var(--font-size-3xs)', color: 'var(--color-content-secondary)' }}>Warning state fill</div>
          </div>
          <div style={{ padding: 'var(--spacing-m)', background: 'var(--color-fill-warning-hover)', color: 'var(--color-content-primary)', borderRadius: 'var(--border-radius-s)', border: 'var(--border-width-s) solid var(--color-border-default)' }}>
            <strong>Warning Hover</strong>
            <div>CSS: --color-fill-warning-hover</div>
            <div style={{ fontSize: 'var(--font-size-3xs)', color: 'var(--color-content-secondary)' }}>Warning hover state</div>
          </div>
          <div style={{ padding: 'var(--spacing-m)', background: 'var(--color-fill-warning-active)', color: 'var(--color-content-primary)', borderRadius: 'var(--border-radius-s)', border: 'var(--border-width-s) solid var(--color-border-default)' }}>
            <strong>Warning Active</strong>
            <div>CSS: --color-fill-warning-active</div>
            <div style={{ fontSize: 'var(--font-size-3xs)', color: 'var(--color-content-secondary)' }}>Warning active state</div>
          </div>
          <div style={{ padding: 'var(--spacing-m)', background: 'var(--color-fill-warning-pressed)', color: 'var(--color-content-primary)', borderRadius: 'var(--border-radius-s)', border: 'var(--border-width-s) solid var(--color-border-default)' }}>
            <strong>Warning Pressed</strong>
            <div>CSS: --color-fill-warning-pressed</div>
            <div style={{ fontSize: 'var(--font-size-3xs)', color: 'var(--color-content-secondary)' }}>Warning pressed state</div>
          </div>
          
          {/* Error Fill States */}
          <div style={{ padding: 'var(--spacing-m)', background: 'var(--color-fill-error)', color: 'var(--color-content-primary)', borderRadius: 'var(--border-radius-s)', border: 'var(--border-width-s) solid var(--color-border-default)' }}>
            <strong>Error Fill</strong>
            <div>CSS: --color-fill-error</div>
            <div style={{ fontSize: 'var(--font-size-3xs)', color: 'var(--color-content-secondary)' }}>Error state fill</div>
          </div>
          <div style={{ padding: 'var(--spacing-m)', background: 'var(--color-fill-error-hover)', color: 'var(--color-content-primary)', borderRadius: 'var(--border-radius-s)', border: 'var(--border-width-s) solid var(--color-border-default)' }}>
            <strong>Error Hover</strong>
            <div>CSS: --color-fill-error-hover</div>
            <div style={{ fontSize: 'var(--font-size-3xs)', color: 'var(--color-content-secondary)' }}>Error hover state</div>
          </div>
          <div style={{ padding: 'var(--spacing-m)', background: 'var(--color-fill-error-active)', color: 'var(--color-content-primary)', borderRadius: 'var(--border-radius-s)', border: 'var(--border-width-s) solid var(--color-border-default)' }}>
            <strong>Error Active</strong>
            <div>CSS: --color-fill-error-active</div>
            <div style={{ fontSize: 'var(--font-size-3xs)', color: 'var(--color-content-secondary)' }}>Error active state</div>
          </div>
          <div style={{ padding: 'var(--spacing-m)', background: 'var(--color-fill-error-pressed)', color: 'var(--color-content-primary)', borderRadius: 'var(--border-radius-s)', border: 'var(--border-width-s) solid var(--color-border-default)' }}>
            <strong>Error Pressed</strong>
            <div>CSS: --color-fill-error-pressed</div>
            <div style={{ fontSize: 'var(--font-size-3xs)', color: 'var(--color-content-secondary)' }}>Error pressed state</div>
          </div>
          
          {/* Info Fill States */}
          <div style={{ padding: 'var(--spacing-m)', background: 'var(--color-fill-info)', color: 'var(--color-content-primary)', borderRadius: 'var(--border-radius-s)', border: 'var(--border-width-s) solid var(--color-border-default)' }}>
            <strong>Info Fill</strong>
            <div>CSS: --color-fill-info</div>
            <div style={{ fontSize: 'var(--font-size-3xs)', color: 'var(--color-content-secondary)' }}>Info state fill</div>
          </div>
          <div style={{ padding: 'var(--spacing-m)', background: 'var(--color-fill-info-hover)', color: 'var(--color-content-primary)', borderRadius: 'var(--border-radius-s)', border: 'var(--border-width-s) solid var(--color-border-default)' }}>
            <strong>Info Hover</strong>
            <div>CSS: --color-fill-info-hover</div>
            <div style={{ fontSize: 'var(--font-size-3xs)', color: 'var(--color-content-secondary)' }}>Info hover state</div>
          </div>
          <div style={{ padding: 'var(--spacing-m)', background: 'var(--color-fill-info-active)', color: 'var(--color-content-primary)', borderRadius: 'var(--border-radius-s)', border: 'var(--border-width-s) solid var(--color-border-default)' }}>
            <strong>Info Active</strong>
            <div>CSS: --color-fill-info-active</div>
            <div style={{ fontSize: 'var(--font-size-3xs)', color: 'var(--color-content-secondary)' }}>Info active state</div>
          </div>
          <div style={{ padding: 'var(--spacing-m)', background: 'var(--color-fill-info-pressed)', color: 'var(--color-content-primary)', borderRadius: 'var(--border-radius-s)', border: 'var(--border-width-s) solid var(--color-border-default)' }}>
            <strong>Info Pressed</strong>
            <div>CSS: --color-fill-info-pressed</div>
            <div style={{ fontSize: 'var(--font-size-3xs)', color: 'var(--color-content-secondary)' }}>Info pressed state</div>
          </div>
          
          {/* Special Fill Colors */}
          <div style={{ padding: 'var(--spacing-m)', background: 'var(--color-fill-Inactive)', color: 'var(--color-content-disabled)', borderRadius: 'var(--border-radius-s)', border: 'var(--border-width-s) solid var(--color-border-default)' }}>
            <strong>Inactive Fill</strong>
            <div>CSS: --color-fill-Inactive</div>
            <div style={{ fontSize: 'var(--font-size-3xs)', color: 'var(--color-content-secondary)' }}>Inactive/disabled fill</div>
          </div>
          <div style={{ padding: 'var(--spacing-m)', background: 'var(--color-fill-rating-active)', color: 'var(--color-content-primary)', borderRadius: 'var(--border-radius-s)', border: 'var(--border-width-s) solid var(--color-border-default)' }}>
            <strong>Rating Active</strong>
            <div>CSS: --color-fill-rating-active</div>
            <div style={{ fontSize: 'var(--font-size-3xs)', color: 'var(--color-content-secondary)' }}>Active rating fill</div>
          </div>
          <div style={{ padding: 'var(--spacing-m)', background: 'var(--color-fill-rating-inactive)', color: 'var(--color-content-primary)', borderRadius: 'var(--border-radius-s)', border: 'var(--border-width-s) solid var(--color-border-default)' }}>
            <strong>Rating Inactive</strong>
            <div>CSS: --color-fill-rating-inactive</div>
            <div style={{ fontSize: 'var(--font-size-3xs)', color: 'var(--color-content-secondary)' }}>Inactive rating fill</div>
          </div>
        </div>
      </div>

      <div style={{ 
        background: 'var(--color-surface-primary)', 
        padding: 'var(--spacing-m)', 
        borderRadius: 'var(--border-radius-m)', 
        marginBottom: 'var(--spacing-m)',
        border: 'var(--border-width-s) solid var(--color-border-default)'
      }}>
        <h2>Content Colors</h2>
        <p>Colors for text and icons on any surface or background:</p>
        
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 'var(--spacing-m)' }}>
          <div style={{ padding: 'var(--spacing-m)', background: 'var(--color-fill-secondary)', color: 'var(--color-content-primary)', borderRadius: 'var(--border-radius-s)', border: 'var(--border-width-s) solid var(--color-border-default)' }}>
            <strong>Primary Content</strong>
            <div>CSS: --color-content-primary</div>
            <div style={{ fontSize: 'var(--font-size-3xs)', color: 'var(--color-content-secondary)' }}>Main text color</div>
          </div>
          <div style={{ padding: 'var(--spacing-m)', background: 'var(--color-fill-secondary)', color: 'var(--color-content-secondary)', borderRadius: 'var(--border-radius-s)', border: 'var(--border-width-s) solid var(--color-border-default)' }}>
            <strong>Secondary Content</strong>
            <div>CSS: --color-content-secondary</div>
            <div style={{ fontSize: 'var(--font-size-3xs)', color: 'var(--color-content-secondary)' }}>Supporting text</div>
          </div>
          <div style={{ padding: 'var(--spacing-m)', background: 'var(--color-fill-secondary)', color: 'var(--color-content-tertiary)', borderRadius: 'var(--border-radius-s)', border: 'var(--border-width-s) solid var(--color-border-default)' }}>
            <strong>Tertiary Content</strong>
            <div>CSS: --color-content-tertiary</div>
            <div style={{ fontSize: 'var(--font-size-3xs)', color: 'var(--color-content-secondary)' }}>Subtle text</div>
          </div>
          <div style={{ padding: 'var(--spacing-m)', background: 'var(--color-fill-secondary)', color: 'var(--color-content-disabled)', borderRadius: 'var(--border-radius-s)', border: 'var(--border-width-s) solid var(--color-border-default)' }}>
            <strong>Disabled Content</strong>
            <div>CSS: --color-content-disabled</div>
            <div style={{ fontSize: 'var(--font-size-3xs)', color: 'var(--color-content-secondary)' }}>Disabled text</div>
          </div>
          <div style={{ padding: 'var(--spacing-m)', background: 'var(--color-fill-secondary)', color: 'var(--color-content-placeholder)', borderRadius: 'var(--border-radius-s)', border: 'var(--border-width-s) solid var(--color-border-default)' }}>
            <strong>Placeholder Content</strong>
            <div>CSS: --color-content-placeholder</div>
            <div style={{ fontSize: 'var(--font-size-3xs)', color: 'var(--color-content-secondary)' }}>Placeholder text</div>
          </div>
          <div style={{ padding: 'var(--spacing-m)', background: 'var(--color-fill-primary)', color: 'var(--color-content-inverse)', borderRadius: 'var(--border-radius-s)', border: 'var(--border-width-s) solid var(--color-border-default)' }}>
            <strong>Inverse Content</strong>
            <div>CSS: --color-content-inverse</div>
            <div style={{ fontSize: 'var(--font-size-3xs)', color: 'var(--color-content-secondary)' }}>Text on dark backgrounds</div>
          </div>
          <div style={{ padding: 'var(--spacing-m)', background: 'var(--color-surface-success)', color: 'var(--color-content-success)', borderRadius: 'var(--border-radius-s)', border: 'var(--border-width-s) solid var(--color-border-default)' }}>
            <strong>Success Content</strong>
            <div>CSS: --color-content-success</div>
            <div style={{ fontSize: 'var(--font-size-3xs)', color: 'var(--color-content-secondary)' }}>Success state text</div>
          </div>
          <div style={{ padding: 'var(--spacing-m)', background: 'var(--color-surface-warning)', color: 'var(--color-content-warning)', borderRadius: 'var(--border-radius-s)', border: 'var(--border-width-s) solid var(--color-border-default)' }}>
            <strong>Warning Content</strong>
            <div>CSS: --color-content-warning</div>
            <div style={{ fontSize: 'var(--font-size-3xs)', color: 'var(--color-content-secondary)' }}>Warning state text</div>
          </div>
          <div style={{ padding: 'var(--spacing-m)', background: 'var(--color-surface-error)', color: 'var(--color-content-error)', borderRadius: 'var(--border-radius-s)', border: 'var(--border-width-s) solid var(--color-border-default)' }}>
            <strong>Error Content</strong>
            <div>CSS: --color-content-error</div>
            <div style={{ fontSize: 'var(--font-size-3xs)', color: 'var(--color-content-secondary)' }}>Error state text</div>
          </div>
          <div style={{ padding: 'var(--spacing-m)', background: 'var(--color-surface-info)', color: 'var(--color-content-info)', borderRadius: 'var(--border-radius-s)', border: 'var(--border-width-s) solid var(--color-border-default)' }}>
            <strong>Info Content</strong>
            <div>CSS: --color-content-info</div>
            <div style={{ fontSize: 'var(--font-size-3xs)', color: 'var(--color-content-secondary)' }}>Info state text</div>
          </div>
        </div>
      </div>

      {/* Background Colors */}
      <div style={{ 
        background: 'var(--color-surface-primary)', 
        padding: 'var(--spacing-m)', 
        borderRadius: 'var(--border-radius-m)', 
        marginBottom: 'var(--spacing-m)',
        border: 'var(--border-width-s) solid var(--color-border-default)'
      }}>
        <h2>Background Colors</h2>
        <p>Page and section background colors:</p>
        
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 'var(--spacing-m)' }}>
          <div style={{ padding: 'var(--spacing-m)', background: 'var(--color-background-primary)', color: 'var(--color-content-primary)', borderRadius: 'var(--border-radius-s)', border: 'var(--border-width-s) solid var(--color-border-default)' }}>
            <strong>Primary Background</strong>
            <div>CSS: --color-background-primary</div>
            <div style={{ fontSize: 'var(--font-size-3xs)', color: 'var(--color-content-secondary)' }}>Main page background</div>
          </div>
          <div style={{ padding: 'var(--spacing-m)', background: 'var(--color-background-secondary)', color: 'var(--color-content-primary)', borderRadius: 'var(--border-radius-s)', border: 'var(--border-width-s) solid var(--color-border-default)' }}>
            <strong>Secondary Background</strong>
            <div>CSS: --color-background-secondary</div>
            <div style={{ fontSize: 'var(--font-size-3xs)', color: 'var(--color-content-secondary)' }}>Alternative background</div>
          </div>
          <div style={{ padding: 'var(--spacing-m)', background: 'var(--color-background-contrast)', color: 'var(--color-content-inverse)', borderRadius: 'var(--border-radius-s)', border: 'var(--border-width-s) solid var(--color-border-default)' }}>
            <strong>Contrast Background</strong>
            <div>CSS: --color-background-contrast</div>
            <div style={{ fontSize: 'var(--font-size-3xs)', color: 'var(--color-content-secondary)' }}>High contrast background</div>
          </div>
          <div style={{ padding: 'var(--spacing-m)', background: 'var(--color-background-recessive)', color: 'var(--color-content-primary)', borderRadius: 'var(--border-radius-s)', border: 'var(--border-width-s) solid var(--color-border-default)' }}>
            <strong>Recessive Background</strong>
            <div>CSS: --color-background-recessive</div>
            <div style={{ fontSize: 'var(--font-size-3xs)', color: 'var(--color-content-secondary)' }}>Subtle background</div>
          </div>
        </div>
      </div>

      {/* Surface Colors */}
      <div style={{ 
        background: 'var(--color-surface-primary)', 
        padding: 'var(--spacing-m)', 
        borderRadius: 'var(--border-radius-m)', 
        marginBottom: 'var(--spacing-m)',
        border: 'var(--border-width-s) solid var(--color-border-default)'
      }}>
        <h2>Surface Colors</h2>
        <p>Background colors for panels, cards, and containers:</p>
        
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 'var(--spacing-m)' }}>
          <div style={{ padding: 'var(--spacing-m)', background: 'var(--color-surface-primary)', color: 'var(--color-content-primary)', borderRadius: 'var(--border-radius-s)', border: 'var(--border-width-s) solid var(--color-border-default)' }}>
            <strong>Primary Surface</strong>
            <div>CSS: --color-surface-primary</div>
            <div style={{ fontSize: 'var(--font-size-3xs)', color: 'var(--color-content-secondary)' }}>Main surface color</div>
          </div>
          <div style={{ padding: 'var(--spacing-m)', background: 'var(--color-surface-secondary)', color: 'var(--color-content-primary)', borderRadius: 'var(--border-radius-s)', border: 'var(--border-width-s) solid var(--color-border-default)' }}>
            <strong>Secondary Surface</strong>
            <div>CSS: --color-surface-secondary</div>
            <div style={{ fontSize: 'var(--font-size-3xs)', color: 'var(--color-content-secondary)' }}>Alternative surface</div>
          </div>
          <div style={{ padding: 'var(--spacing-m)', background: 'var(--color-surface-recessive)', color: 'var(--color-content-primary)', borderRadius: 'var(--border-radius-s)', border: 'var(--border-width-s) solid var(--color-border-default)' }}>
            <strong>Recessive Surface</strong>
            <div>CSS: --color-surface-recessive</div>
            <div style={{ fontSize: 'var(--font-size-3xs)', color: 'var(--color-content-secondary)' }}>Subtle surface</div>
          </div>
          <div style={{ padding: 'var(--spacing-m)', background: 'var(--color-surface-inverse)', color: 'var(--color-content-inverse)', borderRadius: 'var(--border-radius-s)', border: 'var(--border-width-s) solid var(--color-border-default)' }}>
            <strong>Inverse Surface</strong>
            <div>CSS: --color-surface-inverse</div>
            <div style={{ fontSize: 'var(--font-size-3xs)', color: 'var(--color-content-secondary)' }}>Inverted surface</div>
          </div>
          <div style={{ padding: 'var(--spacing-m)', background: 'var(--color-surface-success)', color: 'var(--color-content-success)', borderRadius: 'var(--border-radius-s)', border: 'var(--border-width-s) solid var(--color-border-default)' }}>
            <strong>Success Surface</strong>
            <div>CSS: --color-surface-success</div>
            <div style={{ fontSize: 'var(--font-size-3xs)', color: 'var(--color-content-secondary)' }}>Success feedback surface</div>
          </div>
          <div style={{ padding: 'var(--spacing-m)', background: 'var(--color-surface-warning)', color: 'var(--color-content-warning)', borderRadius: 'var(--border-radius-s)', border: 'var(--border-width-s) solid var(--color-border-default)' }}>
            <strong>Warning Surface</strong>
            <div>CSS: --color-surface-warning</div>
            <div style={{ fontSize: 'var(--font-size-3xs)', color: 'var(--color-content-secondary)' }}>Warning feedback surface</div>
          </div>
          <div style={{ padding: 'var(--spacing-m)', background: 'var(--color-surface-error)', color: 'var(--color-content-error)', borderRadius: 'var(--border-radius-s)', border: 'var(--border-width-s) solid var(--color-border-default)' }}>
            <strong>Error Surface</strong>
            <div>CSS: --color-surface-error</div>
            <div style={{ fontSize: 'var(--font-size-3xs)', color: 'var(--color-content-secondary)' }}>Error feedback surface</div>
          </div>
          <div style={{ padding: 'var(--spacing-m)', background: 'var(--color-surface-info)', color: 'var(--color-content-info)', borderRadius: 'var(--border-radius-s)', border: 'var(--border-width-s) solid var(--color-border-default)' }}>
            <strong>Info Surface</strong>
            <div>CSS: --color-surface-info</div>
            <div style={{ fontSize: 'var(--font-size-3xs)', color: 'var(--color-content-secondary)' }}>Info feedback surface</div>
          </div>
        </div>
      </div>

      {/* Border Colors */}
      <div style={{ 
        background: 'var(--color-surface-primary)', 
        padding: 'var(--spacing-m)', 
        borderRadius: 'var(--border-radius-m)', 
        marginBottom: 'var(--spacing-m)',
        border: 'var(--border-width-s) solid var(--color-border-default)'
      }}>
        <h2>Border Colors</h2>
        <p>Colors for borders, outlines, and dividers:</p>
        
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 'var(--spacing-m)' }}>
          <div style={{ padding: 'var(--spacing-m)', background: 'var(--color-fill-secondary)', color: 'var(--color-content-primary)', borderRadius: 'var(--border-radius-s)', border: 'var(--border-width-m) solid var(--color-border-default)' }}>
            <strong>Default Border</strong>
            <div>CSS: --color-border-default</div>
            <div style={{ fontSize: 'var(--font-size-3xs)', color: 'var(--color-content-secondary)' }}>Standard border color</div>
          </div>
          <div style={{ padding: 'var(--spacing-m)', background: 'var(--color-fill-secondary)', color: 'var(--color-content-primary)', borderRadius: 'var(--border-radius-s)', border: 'var(--border-width-m) solid var(--color-border-active)' }}>
            <strong>Active Border</strong>
            <div>CSS: --color-border-active</div>
            <div style={{ fontSize: 'var(--font-size-3xs)', color: 'var(--color-content-secondary)' }}>Active/focused border</div>
          </div>
          <div style={{ padding: 'var(--spacing-m)', background: 'var(--color-fill-secondary)', color: 'var(--color-content-primary)', borderRadius: 'var(--border-radius-s)', border: 'var(--border-width-m) solid var(--color-border-strong)' }}>
            <strong>Strong Border</strong>
            <div>CSS: --color-border-strong</div>
            <div style={{ fontSize: 'var(--font-size-3xs)', color: 'var(--color-content-secondary)' }}>Emphasized border</div>
          </div>
          <div style={{ padding: 'var(--spacing-m)', background: 'var(--color-fill-secondary)', color: 'var(--color-content-primary)', borderRadius: 'var(--border-radius-s)', border: 'var(--border-width-m) solid var(--color-border-stronger)' }}>
            <strong>Stronger Border</strong>
            <div>CSS: --color-border-stronger</div>
            <div style={{ fontSize: 'var(--font-size-3xs)', color: 'var(--color-content-secondary)' }}>High emphasis border</div>
          </div>
          <div style={{ padding: 'var(--spacing-m)', background: 'var(--color-fill-secondary)', color: 'var(--color-content-primary)', borderRadius: 'var(--border-radius-s)', border: 'var(--border-width-m) solid var(--color-border-success)' }}>
            <strong>Success Border</strong>
            <div>CSS: --color-border-success</div>
            <div style={{ fontSize: 'var(--font-size-3xs)', color: 'var(--color-content-secondary)' }}>Success state border</div>
          </div>
          <div style={{ padding: 'var(--spacing-m)', background: 'var(--color-fill-secondary)', color: 'var(--color-content-primary)', borderRadius: 'var(--border-radius-s)', border: 'var(--border-width-m) solid var(--color-border-warning)' }}>
            <strong>Warning Border</strong>
            <div>CSS: --color-border-warning</div>
            <div style={{ fontSize: 'var(--font-size-3xs)', color: 'var(--color-content-secondary)' }}>Warning state border</div>
          </div>
          <div style={{ padding: 'var(--spacing-m)', background: 'var(--color-fill-secondary)', color: 'var(--color-content-primary)', borderRadius: 'var(--border-radius-s)', border: 'var(--border-width-m) solid var(--color-border-error)' }}>
            <strong>Error Border</strong>
            <div>CSS: --color-border-error</div>
            <div style={{ fontSize: 'var(--font-size-3xs)', color: 'var(--color-content-secondary)' }}>Error state border</div>
          </div>
          <div style={{ padding: 'var(--spacing-m)', background: 'var(--color-fill-secondary)', color: 'var(--color-content-primary)', borderRadius: 'var(--border-radius-s)', border: 'var(--border-width-m) solid var(--color-border-info)' }}>
            <strong>Info Border</strong>
            <div>CSS: --color-border-info</div>
            <div style={{ fontSize: 'var(--font-size-3xs)', color: 'var(--color-content-secondary)' }}>Info state border</div>
          </div>
          <div style={{ padding: 'var(--spacing-m)', background: 'var(--color-fill-secondary)', color: 'var(--color-content-primary)', borderRadius: 'var(--border-radius-s)', border: 'var(--border-width-m) solid var(--color-border-filled)' }}>
            <strong>Filled Border</strong>
            <div>CSS: --color-border-filled</div>
            <div style={{ fontSize: 'var(--font-size-3xs)', color: 'var(--color-content-secondary)' }}>Filled state border</div>
          </div>
          <div style={{ padding: 'var(--spacing-m)', background: 'var(--color-fill-secondary)', color: 'var(--color-content-primary)', borderRadius: 'var(--border-radius-s)', border: 'var(--border-width-m) solid var(--color-border-inactive)' }}>
            <strong>Inactive Border</strong>
            <div>CSS: --color-border-inactive</div>
            <div style={{ fontSize: 'var(--font-size-3xs)', color: 'var(--color-content-secondary)' }}>Inactive state border</div>
          </div>
        </div>
      </div>


    </div>
  );
};

export const Spacing = () => {
  const [isDark, setIsDark] = useState(false);

  return (
    <div style={{ 
      padding: 'var(--spacing-m)',
      background: 'var(--color-background-primary)',
      color: 'var(--color-content-primary)',
      minHeight: '100vh'
    }}>
      <ThemeToggle isDark={isDark} onToggle={() => setIsDark(!isDark)} />
      <h1>Design Tokens - Spacing ({isDark ? 'Dark' : 'Light'} Mode)</h1>
      
      <div style={{ 
        background: 'var(--color-surface-primary)', 
        padding: 'var(--spacing-m)', 
        borderRadius: 'var(--border-radius-m)', 
        marginBottom: 'var(--spacing-m)',
        border: 'var(--border-width-s) solid var(--color-border-default)'
      }}>
        <h2>Spacing Scale</h2>
        <p>Our spacing tokens provide consistent spacing throughout the design system:</p>
        
        <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-m)' }}>
          {/* Extra Extra Extra Small */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--spacing-m)' }}>
            <div style={{ 
              width: 'var(--spacing-xxxs)', 
              height: 'var(--spacing-xxxs)', 
              background: 'var(--color-fill-primary)', 
              borderRadius: 'var(--border-radius-xs)' 
            }}></div>
            <span><strong>XXXS:</strong> var(--spacing-xxxs) - 0.125rem (2px)</span>
          </div>
          
          {/* Extra Extra Small */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--spacing-m)' }}>
            <div style={{ 
              width: 'var(--spacing-xxs)', 
              height: 'var(--spacing-xxs)', 
              background: 'var(--color-fill-primary)', 
              borderRadius: 'var(--border-radius-xs)' 
            }}></div>
            <span><strong>XXS:</strong> var(--spacing-xxs) - 0.25rem (4px)</span>
          </div>
          
          {/* Extra Small */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--spacing-m)' }}>
            <div style={{ 
              width: 'var(--spacing-xs)', 
              height: 'var(--spacing-xs)', 
              background: 'var(--color-fill-primary)', 
              borderRadius: 'var(--border-radius-xs)' 
            }}></div>
            <span><strong>XS:</strong> var(--spacing-xs) - 0.375rem (6px)</span>
          </div>
          
          {/* Small */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--spacing-m)' }}>
            <div style={{ 
              width: 'var(--spacing-s)', 
              height: 'var(--spacing-s)', 
              background: 'var(--color-fill-primary)', 
              borderRadius: 'var(--border-radius-xs)' 
            }}></div>
            <span><strong>S:</strong> var(--spacing-s) - 0.5rem (8px)</span>
          </div>
          
          {/* Small Medium */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--spacing-m)' }}>
            <div style={{ 
              width: 'var(--spacing-sm)', 
              height: 'var(--spacing-sm)', 
              background: 'var(--color-fill-primary)', 
              borderRadius: 'var(--border-radius-xs)' 
            }}></div>
            <span><strong>SM:</strong> var(--spacing-sm) - 0.75rem (12px)</span>
          </div>
          
          {/* Medium */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--spacing-m)' }}>
            <div style={{ 
              width: 'var(--spacing-m)', 
              height: 'var(--spacing-m)', 
              background: 'var(--color-fill-primary)', 
              borderRadius: 'var(--border-radius-xs)' 
            }}></div>
            <span><strong>M:</strong> var(--spacing-m) - 1rem (16px)</span>
          </div>
          
          {/* Medium Large */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--spacing-m)' }}>
            <div style={{ 
              width: 'var(--spacing-ml)', 
              height: 'var(--spacing-ml)', 
              background: 'var(--color-fill-primary)', 
              borderRadius: 'var(--border-radius-xs)' 
            }}></div>
            <span><strong>ML:</strong> var(--spacing-ml) - 1.5rem (24px)</span>
          </div>
          
          {/* Large */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--spacing-m)' }}>
            <div style={{ 
              width: 'var(--spacing-l)', 
              height: 'var(--spacing-l)', 
              background: 'var(--color-fill-primary)', 
              borderRadius: 'var(--border-radius-xs)' 
            }}></div>
            <span><strong>L:</strong> var(--spacing-l) - 2rem (32px)</span>
          </div>
          
          {/* Extra Large */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--spacing-m)' }}>
            <div style={{ 
              width: 'var(--spacing-xl)', 
              height: 'var(--spacing-xl)', 
              background: 'var(--color-fill-primary)', 
              borderRadius: 'var(--border-radius-xs)' 
            }}></div>
            <span><strong>XL:</strong> var(--spacing-xl) - 3rem (48px)</span>
          </div>
          
          {/* 2X Large */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--spacing-m)' }}>
            <div style={{ 
              width: 'var(--spacing-2xl)', 
              height: 'var(--spacing-2xl)', 
              background: 'var(--color-fill-primary)', 
              borderRadius: 'var(--border-radius-xs)' 
            }}></div>
            <span><strong>2XL:</strong> var(--spacing-2xl) - 4rem (64px)</span>
          </div>
          
          {/* 3X Large */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--spacing-m)' }}>
            <div style={{ 
              width: 'var(--spacing-3xl)', 
              height: 'var(--spacing-3xl)', 
              background: 'var(--color-fill-primary)', 
              borderRadius: 'var(--border-radius-xs)' 
            }}></div>
            <span><strong>3XL:</strong> var(--spacing-3xl) - 6rem (96px)</span>
          </div>
          
          {/* 4X Large */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--spacing-m)' }}>
            <div style={{ 
              width: 'var(--spacing-4xl)', 
              height: 'var(--spacing-4xl)', 
              background: 'var(--color-fill-primary)', 
              borderRadius: 'var(--border-radius-xs)' 
            }}></div>
            <span><strong>4XL:</strong> var(--spacing-4xl) - 7.5rem (120px)</span>
          </div>
          
          {/* 5X Large */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--spacing-m)' }}>
            <div style={{ 
              width: 'var(--spacing-5xl)', 
              height: 'var(--spacing-5xl)', 
              background: 'var(--color-fill-primary)', 
              borderRadius: 'var(--border-radius-xs)' 
            }}></div>
            <span><strong>5XL:</strong> var(--spacing-5xl) - 15rem (240px)</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export const Borders = () => {
  const [isDark, setIsDark] = useState(false);

  return (
    <div style={{ 
      padding: 'var(--spacing-m)',
      background: 'var(--color-background-primary)',
      color: 'var(--color-content-primary)',
      minHeight: '100vh'
    }}>
      <ThemeToggle isDark={isDark} onToggle={() => setIsDark(!isDark)} />
      <h1>Design Tokens - Borders ({isDark ? 'Dark' : 'Light'} Mode)</h1>
      
      <div style={{ 
        background: 'var(--color-surface-primary)', 
        padding: 'var(--spacing-m)', 
        borderRadius: 'var(--border-radius-m)', 
        marginBottom: 'var(--spacing-m)',
        border: 'var(--border-width-s) solid var(--color-border-default)'
      }}>
        <h2>Border Radius</h2>
        <p>Border radius tokens for consistent corner rounding:</p>
        
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 'var(--spacing-m)' }}>
          <div style={{ padding: 'var(--spacing-m)', background: 'var(--color-fill-secondary)', borderRadius: 'var(--border-radius-xxs)', border: 'var(--border-width-s) solid var(--color-border-default)' }}>
            <strong>XXS Radius</strong>
            <div>CSS: --border-radius-xxs</div>
            <div style={{ fontSize: 'var(--font-size-3xs)', color: 'var(--color-content-secondary)' }}>Value: 0.125rem (2px)</div>
          </div>
          <div style={{ padding: 'var(--spacing-m)', background: 'var(--color-fill-secondary)', borderRadius: 'var(--border-radius-xs)', border: 'var(--border-width-s) solid var(--color-border-default)' }}>
            <strong>XS Radius</strong>
            <div>CSS: --border-radius-xs</div>
            <div style={{ fontSize: 'var(--font-size-3xs)', color: 'var(--color-content-secondary)' }}>Value: 0.5rem (8px)</div>
          </div>
          <div style={{ padding: 'var(--spacing-m)', background: 'var(--color-fill-secondary)', borderRadius: 'var(--border-radius-s)', border: 'var(--border-width-s) solid var(--color-border-default)' }}>
            <strong>S Radius</strong>
            <div>CSS: --border-radius-s</div>
            <div style={{ fontSize: 'var(--font-size-3xs)', color: 'var(--color-content-secondary)' }}>Value: 0.75rem (12px)</div>
          </div>
          <div style={{ padding: 'var(--spacing-m)', background: 'var(--color-fill-secondary)', borderRadius: 'var(--border-radius-m)', border: 'var(--border-width-s) solid var(--color-border-default)' }}>
            <strong>M Radius</strong>
            <div>CSS: --border-radius-m</div>
            <div style={{ fontSize: 'var(--font-size-3xs)', color: 'var(--color-content-secondary)' }}>Value: 1.25rem (20px)</div>
          </div>
          <div style={{ padding: 'var(--spacing-m)', background: 'var(--color-fill-secondary)', borderRadius: 'var(--border-radius-l)', border: 'var(--border-width-s) solid var(--color-border-default)' }}>
            <strong>L Radius</strong>
            <div>CSS: --border-radius-l</div>
            <div style={{ fontSize: 'var(--font-size-3xs)', color: 'var(--color-content-secondary)' }}>Value: 3rem (48px)</div>
          </div>
        </div>
      </div>

      <div style={{ 
        background: 'var(--color-surface-primary)', 
        padding: 'var(--spacing-m)', 
        borderRadius: 'var(--border-radius-m)', 
        marginBottom: 'var(--spacing-m)',
        border: 'var(--border-width-s) solid var(--color-border-default)'
      }}>
        <h2>Border Widths</h2>
        <p>Border width tokens for consistent stroke thickness:</p>
        
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 'var(--spacing-m)' }}>
          <div style={{ padding: 'var(--spacing-m)', background: 'var(--color-fill-secondary)', borderRadius: 'var(--border-radius-s)', border: 'var(--border-width-xs) solid var(--color-border-default)' }}>
            <strong>XS Width</strong>
            <div>CSS: --border-width-xs</div>
            <div style={{ fontSize: 'var(--font-size-3xs)', color: 'var(--color-content-secondary)' }}>Value: 0rem (0px)</div>
          </div>
          <div style={{ padding: 'var(--spacing-m)', background: 'var(--color-fill-secondary)', borderRadius: 'var(--border-radius-s)', border: 'var(--border-width-s) solid var(--color-border-default)' }}>
            <strong>S Width</strong>
            <div>CSS: --border-width-s</div>
            <div style={{ fontSize: 'var(--font-size-3xs)', color: 'var(--color-content-secondary)' }}>Value: 0.062rem (1px)</div>
          </div>
          <div style={{ padding: 'var(--spacing-m)', background: 'var(--color-fill-secondary)', borderRadius: 'var(--border-radius-s)', border: 'var(--border-width-m) solid var(--color-border-default)' }}>
            <strong>M Width</strong>
            <div>CSS: --border-width-m</div>
            <div style={{ fontSize: 'var(--font-size-3xs)', color: 'var(--color-content-secondary)' }}>Value: 0.125rem (2px)</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export const Layout = () => {
  const [isDark, setIsDark] = useState(false);

  return (
    <div style={{ 
      padding: 'var(--spacing-m)',
      background: 'var(--color-background-primary)',
      color: 'var(--color-content-primary)',
      minHeight: '100vh'
    }}>
      <ThemeToggle isDark={isDark} onToggle={() => setIsDark(!isDark)} />
      <h1>Design Tokens - Layout ({isDark ? 'Dark' : 'Light'} Mode)</h1>
      
      {/* Breakpoints */}
      <div style={{ 
        background: 'var(--color-surface-primary)', 
        padding: 'var(--spacing-m)', 
        borderRadius: 'var(--border-radius-m)', 
        marginBottom: 'var(--spacing-m)',
        border: 'var(--border-width-s) solid var(--color-border-default)'
      }}>
        <h2>Breakpoints</h2>
        <p>Responsive breakpoints for adaptive layouts:</p>
        
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 'var(--spacing-m)' }}>
          <div style={{ padding: 'var(--spacing-m)', background: 'var(--color-fill-secondary)', borderRadius: 'var(--border-radius-s)', border: 'var(--border-width-s) solid var(--color-border-default)' }}>
            <strong>Max Width</strong>
            <div>CSS: --breakpoint-max-width</div>
            <div style={{ fontSize: 'var(--font-size-3xs)', color: 'var(--color-content-secondary)' }}>Value: 90rem (1440px)</div>
          </div>
          <div style={{ padding: 'var(--spacing-m)', background: 'var(--color-fill-secondary)', borderRadius: 'var(--border-radius-s)', border: 'var(--border-width-s) solid var(--color-border-default)' }}>
            <strong>Min Width</strong>
            <div>CSS: --breakpoint-min-width</div>
            <div style={{ fontSize: 'var(--font-size-3xs)', color: 'var(--color-content-secondary)' }}>Value: 61.875rem (990px)</div>
          </div>
        </div>
      </div>

      {/* Grid System */}
      <div style={{ 
        background: 'var(--color-surface-primary)', 
        padding: 'var(--spacing-m)', 
        borderRadius: 'var(--border-radius-m)', 
        marginBottom: 'var(--spacing-m)',
        border: 'var(--border-width-s) solid var(--color-border-default)'
      }}>
        <h2>Grid System</h2>
        <p>Grid layout tokens for consistent spacing:</p>
        
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 'var(--spacing-m)' }}>
          <div style={{ padding: 'var(--spacing-m)', background: 'var(--color-fill-secondary)', borderRadius: 'var(--border-radius-s)', border: 'var(--border-width-s) solid var(--color-border-default)' }}>
            <strong>Column Width</strong>
            <div>CSS: --grid-columns</div>
            <div style={{ fontSize: 'var(--font-size-3xs)', color: 'var(--color-content-secondary)' }}>Value: 0.75rem (12px)</div>
          </div>
          <div style={{ padding: 'var(--spacing-m)', background: 'var(--color-fill-secondary)', borderRadius: 'var(--border-radius-s)', border: 'var(--border-width-s) solid var(--color-border-default)' }}>
            <strong>Gutter</strong>
            <div>CSS: --grid-gutter</div>
            <div style={{ fontSize: 'var(--font-size-3xs)', color: 'var(--color-content-secondary)' }}>Value: 2rem (32px)</div>
          </div>
          <div style={{ padding: 'var(--spacing-m)', background: 'var(--color-fill-secondary)', borderRadius: 'var(--border-radius-s)', border: 'var(--border-width-s) solid var(--color-border-default)' }}>
            <strong>Margin</strong>
            <div>CSS: --grid-margin</div>
            <div style={{ fontSize: 'var(--font-size-3xs)', color: 'var(--color-content-secondary)' }}>Value: 2rem (32px)</div>
          </div>
        </div>
      </div>
    </div>
  );
};



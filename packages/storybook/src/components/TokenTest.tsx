import React from 'react';

export function TokenTest() {
  return (
    <div className="p-8 space-y-4">
      <h2 className="text-2xl font-bold">Token Loading Test</h2>
      
      {/* Test background tokens */}
      <div className="space-y-2">
        <h3>Background Tokens:</h3>
        <div className="grid grid-cols-2 gap-2">
          <div className="p-4 rounded" style={{ backgroundColor: 'var(--color-fill-info)' }}>
            --color-fill-info
          </div>
          <div className="p-4 rounded" style={{ backgroundColor: 'var(--color-surface-info)' }}>
            --color-surface-info
          </div>
        </div>
      </div>

      {/* Test text tokens */}
      <div className="space-y-2">
        <h3>Text Tokens:</h3>
        <div className="space-y-2">
          <div style={{ color: 'var(--color-content-info)' }}>
            --color-content-info
          </div>
          <div style={{ color: 'var(--color-content-primary)' }}>
            --color-content-primary
          </div>
        </div>
      </div>

      {/* Test border tokens */}
      <div className="space-y-2">
        <h3>Border Tokens:</h3>
        <div className="grid grid-cols-2 gap-2">
          <div className="p-4 border-2 rounded" style={{ borderColor: 'var(--color-border-info)' }}>
            --color-border-info
          </div>
          <div className="p-4 border-2 rounded" style={{ borderColor: 'var(--color-border-default)' }}>
            --color-border-default
          </div>
        </div>
      </div>

      {/* Test typography tokens */}
      <div className="space-y-2">
        <h3>Typography Tokens:</h3>
        <div className="space-y-2">
          <div style={{ fontFamily: 'var(--font-family-primary)' }}>
            Font Family: --font-family-primary
          </div>
          <div style={{ fontSize: 'var(--font-size-3xs)' }}>
            Font Size: --font-size-3xs
          </div>
          <div style={{ fontWeight: 'var(--font-weight-medium)' }}>
            Font Weight: --font-weight-medium
          </div>
        </div>
      </div>

      {/* Raw CSS values for comparison */}
      <div className="space-y-2">
        <h3>Raw CSS Values (for comparison):</h3>
        <div className="text-sm space-y-1">
          <div>--color-fill-info: #d8e6fb</div>
          <div>--color-content-info: #163260</div>
          <div>--color-border-info: #b1cdfa</div>
        </div>
      </div>
    </div>
  );
}

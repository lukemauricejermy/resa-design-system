import React from 'react';
import { Avatar, Button, Checkbox } from './packages/components/src';

function TestComponents() {
  const [checkboxState, setCheckboxState] = React.useState(false);

  return (
    <div className="p-8 space-y-8 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold text-center mb-8">
        Resa Design System Components Test
      </h1>

      {/* Avatar Test */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Avatar Components</h2>
        <div className="flex items-center gap-6">
          <Avatar size="xs" fallback="XS" />
          <Avatar size="sm" fallback="SM" />
          <Avatar size="md" fallback="MD" />
          <Avatar size="lg" fallback="LG" />
          <Avatar size="xl" fallback="XL" />
        </div>
        <div className="flex items-center gap-6">
          <Avatar size="md" src="https://placekitten.com/200/200" alt="User avatar" />
          <Avatar size="md" fallback="JD" />
          <Avatar size="md" />
        </div>
      </section>

      {/* Button Test */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Button Components</h2>
        
        <div>
          <h3 className="text-lg font-medium mb-3">Variants</h3>
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
          <h3 className="text-lg font-medium mb-3">Sizes</h3>
          <div className="flex items-center gap-3">
            <Button variant="primary" size="sm">Small</Button>
            <Button variant="primary" size="md">Medium</Button>
            <Button variant="primary" size="lg">Large</Button>
          </div>
        </div>

        <div>
          <h3 className="text-lg font-medium mb-3">States</h3>
          <div className="flex flex-wrap gap-3">
            <Button variant="primary">Normal</Button>
            <Button variant="primary" disabled>Disabled</Button>
          </div>
        </div>
      </section>

      {/* Checkbox Test */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Checkbox Components</h2>
        
        <div className="space-y-4">
          <div className="flex flex-wrap gap-6">
            <div className="flex items-center gap-2">
              <Checkbox checked={false} />
              <span>Unchecked</span>
            </div>
            <div className="flex items-center gap-2">
              <Checkbox checked={true} />
              <span>Checked</span>
            </div>
            <div className="flex items-center gap-2">
              <Checkbox indeterminate={true} />
              <span>Indeterminate</span>
            </div>
            <div className="flex items-center gap-2">
              <Checkbox checked={false} disabled={true} />
              <span>Disabled</span>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-medium mb-3">Interactive Example</h3>
            <label className="flex items-center gap-2 cursor-pointer">
              <Checkbox
                checked={checkboxState}
                onChange={setCheckboxState}
              />
              <span>Click me to toggle: {checkboxState ? 'Checked' : 'Unchecked'}</span>
            </label>
          </div>
        </div>
      </section>

      {/* Integration Example */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Integration Example</h2>
        
        <div className="p-6 border rounded-lg space-y-4">
          <div className="flex items-center gap-4">
            <Avatar size="lg" src="https://placekitten.com/200/200" alt="User profile" />
            <div className="flex-1">
              <h3 className="text-xl font-semibold">User Profile</h3>
              <p className="text-gray-600">
                Manage your account settings and preferences
              </p>
            </div>
          </div>
          
          <div className="space-y-3">
            <label className="flex items-center gap-2 cursor-pointer">
              <Checkbox checked={true} />
              <span>Two-factor authentication</span>
            </label>
            <label className="flex items-center gap-2 cursor-pointer">
              <Checkbox checked={false} />
              <span>Public profile</span>
            </label>
            <label className="flex items-center gap-2 cursor-pointer">
              <Checkbox checked={true} />
              <span>Email verification</span>
            </label>
          </div>
          
          <div className="flex gap-3 pt-2">
            <Button variant="primary">Save Changes</Button>
            <Button variant="secondary">Cancel</Button>
            <Button variant="error">Delete Account</Button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default TestComponents;

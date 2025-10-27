# @corinvo/elements

Clean authentication UI components for React and Vue. Simple, organized, and easy to use.

## Installation

```bash
pnpm add @corinvo/elements
```

## Quick Start

```tsx
import { SignIn } from '@corinvo/elements/react';

export default function App() {
  return (
    <SignIn
      onSignIn={async (email, password) => {
        // Your API call here
        await fetch('/api/signin', {
          method: 'POST',
          body: JSON.stringify({ email, password }),
        });
      }}
    />
  );
}
```

Done! You have a working sign-in form.

## Components

All in one clean import:

```tsx
import {
  // Auth components
  SignIn,
  SignUp,
  VerifyOTP,

  // Base components
  Button,
  Input,
  Card,
  OTPInput,
} from '@corinvo/elements/react';
```

### Pre-built Auth Components

```tsx
// Sign In
<SignIn
  onSignIn={async (email, password) => {/* ... */}}
  onForgotPassword={() => {/* ... */}}
/>

// Sign Up
<SignUp
  requireName
  onSignUp={async ({ email, password, name }) => {/* ... */}}
/>

// OTP Verification
<VerifyOTP
  onVerify={async (code) => {/* ... */}}
  onResend={async () => {/* ... */}}
/>
```

### Build Your Own

```tsx
<Card>
  <div className="crv-flow">
    <h2>Welcome</h2>
    <Input label="Email" type="email" />
    <Input label="Password" type="password" />
    <Button variant="primary" className="crv-full-width">
      Sign in
    </Button>
  </div>
</Card>
```

## Styling

Styles are included automatically. Built with SCSS and fully customizable.

Dark mode supported out of the box!

## File Structure

```
src/
├── core/              # Utilities & types
├── react/
│   └── components/    # All components in one place
├── vue/               # Vue components
└── styles/            # SCSS files
    ├── _variables.scss
    ├── _mixins.scss
    ├── components.scss
    └── index.scss
```

## Development

```bash
pnpm install
pnpm build        # Vite build
pnpm dev          # Watch mode
pnpm test         # Vitest
pnpm storybook    # Storybook
```

## Philosophy

- ✅ **Simple** - No complex patterns, just components
- ✅ **Organized** - Everything in its place
- ✅ **Clean** - Modern, minimal code
- ✅ **Fast** - Built with Vite

## License

MIT

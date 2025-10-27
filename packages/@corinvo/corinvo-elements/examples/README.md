# Examples

Clean, simple examples showing how to use @corinvo/elements.

## Installation

```bash
pnpm add @corinvo/elements
```

## Usage

```tsx
import { SignIn, Button, Input, Card } from '@corinvo/elements/react';

// Use pre-built components
<SignIn
  onSignIn={async (email, password) => {
    // Your API call
  }}
/>

// Or build your own
<Card>
  <Input label="Email" />
  <Button variant="primary">Sign in</Button>
</Card>
```

## Components

- **SignIn** - Complete sign-in form
- **SignUp** - Complete sign-up form
- **VerifyOTP** - OTP verification
- **Button** - Button component
- **Input** - Input with label, error, hint
- **Card** - Container
- **OTPInput** - Smart OTP input

All components are in one place, no complex imports needed.

## Styling

Styles are included automatically. Customize with SCSS variables if needed.

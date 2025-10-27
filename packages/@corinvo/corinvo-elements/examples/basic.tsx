/**
 * Basic Usage Examples
 */

import { SignIn, SignUp, VerifyOTP, Button, Input, Card } from '@corinvo/elements/react';

// Example 1: Simple Sign In
export function ExampleSignIn() {
  return (
    <SignIn
      onSignIn={async (email, password) => {
        console.log('Sign in:', { email, password });
        // Your API call here
      }}
      onForgotPassword={() => console.log('Forgot password')}
    />
  );
}

// Example 2: Simple Sign Up
export function ExampleSignUp() {
  return (
    <SignUp
      requireName
      onSignUp={async ({ email, password, name }) => {
        console.log('Sign up:', { email, password, name });
        // Your API call here
      }}
    />
  );
}

// Example 3: OTP Verification
export function ExampleVerifyOTP() {
  return (
    <VerifyOTP
      title="Verify your email"
      description="Enter the code we sent you"
      onVerify={async (code) => {
        console.log('Verify:', code);
        // Your API call here
      }}
      onResend={async () => {
        console.log('Resend code');
        // Your API call here
      }}
    />
  );
}

// Example 4: Build your own with components
export function CustomForm() {
  return (
    <Card>
      <div className="crv-flow">
        <h2>Custom Form</h2>
        <Input label="Email" type="email" placeholder="you@example.com" />
        <Input label="Password" type="password" placeholder="••••••••" />
        <Button variant="primary" className="crv-full-width">
          Submit
        </Button>
      </div>
    </Card>
  );
}

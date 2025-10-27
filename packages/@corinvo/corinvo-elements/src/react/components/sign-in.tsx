import React, { useState } from 'react';
import { Button } from './button';
import { Input } from './input';
import { Card } from './card';

export interface SignInProps {
  onSignIn?: (email: string, password: string) => Promise<void>;
  onForgotPassword?: () => void;
  className?: string;
}

export function SignIn({ onSignIn, onForgotPassword, className }: SignInProps) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!onSignIn) return;

    setLoading(true);
    setError('');

    try {
      await onSignIn(email, password);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Sign in failed');
    } finally {
      setLoading(false);
    }
  };

  return (
    <Card className={className}>
      <form onSubmit={handleSubmit} className="crv-flow">
        <h2>Sign in</h2>

        <Input
          type="email"
          label="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="you@example.com"
          required
          autoComplete="email"
        />

        <Input
          type="password"
          label="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="••••••••"
          required
          autoComplete="current-password"
        />

        {error && <div className="crv-error">{error}</div>}

        <Button type="submit" variant="primary" loading={loading} className="crv-full-width">
          Sign in
        </Button>

        {onForgotPassword && (
          <Button type="button" variant="ghost" onClick={onForgotPassword}>
            Forgot password?
          </Button>
        )}
      </form>
    </Card>
  );
}

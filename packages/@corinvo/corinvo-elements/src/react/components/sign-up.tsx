import React, { useState } from 'react';
import { Button } from './button';
import { Input } from './input';
import { Card } from './card';

export interface SignUpProps {
  onSignUp?: (data: { email: string; password: string; name?: string }) => Promise<void>;
  requireName?: boolean;
  className?: string;
}

export function SignUp({ onSignUp, requireName, className }: SignUpProps) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!onSignUp) return;

    setLoading(true);
    setError('');

    try {
      await onSignUp({ email, password, name: name || undefined });
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Sign up failed');
    } finally {
      setLoading(false);
    }
  };

  return (
    <Card className={className}>
      <form onSubmit={handleSubmit} className="crv-flow">
        <h2>Create account</h2>

        {requireName && (
          <Input
            type="text"
            label="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="John Doe"
            required={requireName}
            autoComplete="name"
          />
        )}

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
          autoComplete="new-password"
          hint="At least 8 characters"
        />

        {error && <div className="crv-error">{error}</div>}

        <Button type="submit" variant="primary" loading={loading} className="crv-full-width">
          Create account
        </Button>
      </form>
    </Card>
  );
}

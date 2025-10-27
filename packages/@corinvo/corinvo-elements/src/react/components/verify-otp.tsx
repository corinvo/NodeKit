import React, { useState } from 'react';
import { Button } from './button';
import { OTPInput } from './otp-input';
import { Card } from './card';

export interface VerifyOTPProps {
  onVerify?: (code: string) => Promise<void>;
  onResend?: () => Promise<void>;
  length?: number;
  title?: string;
  description?: string;
  className?: string;
}

export function VerifyOTP({
  onVerify,
  onResend,
  length = 6,
  title = 'Verify your email',
  description = 'Enter the code we sent to your email',
  className,
}: VerifyOTPProps) {
  const [code, setCode] = useState('');
  const [loading, setLoading] = useState(false);
  const [resending, setResending] = useState(false);
  const [error, setError] = useState('');

  const handleVerify = async () => {
    if (!onVerify || code.length !== length) return;

    setLoading(true);
    setError('');

    try {
      await onVerify(code);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Verification failed');
    } finally {
      setLoading(false);
    }
  };

  const handleResend = async () => {
    if (!onResend) return;

    setResending(true);
    setError('');

    try {
      await onResend();
      setCode('');
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to resend code');
    } finally {
      setResending(false);
    }
  };

  return (
    <Card className={className}>
      <div className="crv-flow">
        <h2>{title}</h2>
        <p className="crv-description">{description}</p>

        <OTPInput
          length={length}
          value={code}
          onChange={setCode}
          error={error}
          autoFocus
        />

        <Button
          onClick={handleVerify}
          variant="primary"
          loading={loading}
          disabled={code.length !== length}
          className="crv-full-width"
        >
          Verify
        </Button>

        {onResend && (
          <Button variant="ghost" onClick={handleResend} loading={resending}>
            Resend code
          </Button>
        )}
      </div>
    </Card>
  );
}

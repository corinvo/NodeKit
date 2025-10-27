import React, { useRef, useEffect } from 'react';
import { cn } from '@/core/utils';

export interface OTPInputProps {
  length?: number;
  value: string;
  onChange: (value: string) => void;
  error?: string;
  autoFocus?: boolean;
  className?: string;
}

export function OTPInput({
  length = 6,
  value,
  onChange,
  error,
  autoFocus,
  className,
}: OTPInputProps) {
  const inputsRef = useRef<(HTMLInputElement | null)[]>([]);

  useEffect(() => {
    if (autoFocus && inputsRef.current[0]) {
      inputsRef.current[0].focus();
    }
  }, [autoFocus]);

  const handleChange = (index: number, newValue: string) => {
    const digit = newValue.replace(/\D/g, '').slice(-1);
    const newOTP = value.split('');
    newOTP[index] = digit;
    onChange(newOTP.join(''));

    if (digit && index < length - 1) {
      inputsRef.current[index + 1]?.focus();
    }
  };

  const handleKeyDown = (index: number, e: React.KeyboardEvent) => {
    if (e.key === 'Backspace' && !value[index] && index > 0) {
      inputsRef.current[index - 1]?.focus();
    }
  };

  const handlePaste = (e: React.ClipboardEvent) => {
    e.preventDefault();
    const pastedData = e.clipboardData.getData('text').replace(/\D/g, '').slice(0, length);
    onChange(pastedData);
    const nextIndex = Math.min(pastedData.length, length - 1);
    inputsRef.current[nextIndex]?.focus();
  };

  return (
    <div className="crv-otp-wrapper">
      <div className={cn('crv-otp', className)}>
        {Array.from({ length }, (_, index) => (
          <input
            key={index}
            ref={(el) => (inputsRef.current[index] = el)}
            type="text"
            inputMode="numeric"
            maxLength={1}
            value={value[index] || ''}
            onChange={(e) => handleChange(index, e.target.value)}
            onKeyDown={(e) => handleKeyDown(index, e)}
            onPaste={handlePaste}
            className={cn('crv-otp-input', error && 'crv-otp-input-error')}
            aria-label={`Digit ${index + 1}`}
          />
        ))}
      </div>
      {error && <span className="crv-error">{error}</span>}
    </div>
  );
}

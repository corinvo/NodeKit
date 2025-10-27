import React from 'react';
import { cn } from '@/core/utils';

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  hint?: string;
}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ label, error, hint, className, ...props }, ref) => {
    return (
      <div className="crv-input-wrapper">
        {label && <label className="crv-label">{label}</label>}
        <input
          ref={ref}
          className={cn('crv-input', error && 'crv-input-error', className)}
          aria-invalid={error ? 'true' : 'false'}
          {...props}
        />
        {hint && !error && <span className="crv-hint">{hint}</span>}
        {error && <span className="crv-error">{error}</span>}
      </div>
    );
  }
);

Input.displayName = 'Input';

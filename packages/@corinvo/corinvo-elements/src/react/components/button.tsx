import React from 'react';
import { cn } from '@/core/utils';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  loading?: boolean;
}

export function Button({
  children,
  variant = 'primary',
  size = 'md',
  loading,
  disabled,
  className,
  ...props
}: ButtonProps) {
  return (
    <button
      className={cn('crv-btn', `crv-btn-${variant}`, `crv-btn-${size}`, className)}
      disabled={disabled || loading}
      {...props}
    >
      {loading ? 'Loading...' : children}
    </button>
  );
}

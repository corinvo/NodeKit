import React from 'react';
import { cn } from '@/core/utils';

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {}

export function Card({ className, ...props }: CardProps) {
  return <div className={cn('crv-card', className)} {...props} />;
}

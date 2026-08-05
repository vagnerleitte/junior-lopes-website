import type { HTMLAttributes } from 'react';
import { cn } from '@/lib/utils';

export function Section({ className, ...props }: HTMLAttributes<HTMLElement>) {
  return <section className={cn('py-20 md:py-28', className)} {...props} />;
}

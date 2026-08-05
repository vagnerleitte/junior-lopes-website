import type { ElementType, HTMLAttributes } from 'react';
import { cn } from '@/lib/utils';

type Props = HTMLAttributes<HTMLElement> & {
  as?: ElementType;
  variant?: 'display' | 'title' | 'subtitle' | 'body' | 'caption';
};
export function Typography({
  as: Comp = 'p',
  variant = 'body',
  className,
  ...props
}: Props) {
  return (
    <Comp
      className={cn(
        {
          'font-display text-petroleum-900 text-4xl font-bold tracking-[-0.04em] md:text-6xl':
            variant === 'display',
          'font-display text-petroleum-900 text-3xl font-semibold tracking-[-0.03em] md:text-4xl':
            variant === 'title',
          'font-display text-petroleum-900 text-xl font-semibold md:text-2xl':
            variant === 'subtitle',
          'text-base leading-7 text-zinc-600': variant === 'body',
          'text-sm leading-6 text-zinc-500': variant === 'caption',
        },
        className,
      )}
      {...props}
    />
  );
}

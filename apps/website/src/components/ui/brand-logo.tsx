import Image from 'next/image';
import { cn } from '@/lib/utils';

export function BrandLogo({ className }: { className?: string }) {
  return (
    <Image
      src="/images/junior-logo.png"
      alt=""
      width={46}
      height={40}
      className={cn('h-9 w-auto shrink-0 object-contain', className)}
      aria-hidden="true"
    />
  );
}

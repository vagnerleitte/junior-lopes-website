import Image from 'next/image';
import { cn } from '@/lib/utils';

export function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <Image
      src="/images/social-whatsapp.png"
      alt=""
      width={20}
      height={20}
      className={cn('size-5 shrink-0', className)}
      aria-hidden="true"
    />
  );
}

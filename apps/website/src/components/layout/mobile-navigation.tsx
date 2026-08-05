'use client';

import { Menu, X } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { WhatsAppIcon } from '@/components/ui/whatsapp-icon';
import { navigation, siteConfig } from '@/config/site';

export function MobileNavigation() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative lg:hidden">
      <button
        type="button"
        className="text-petroleum-900 hover:bg-petroleum-50 relative z-[60] grid size-11 place-items-center rounded-md"
        aria-label={isOpen ? 'Fechar menu' : 'Abrir menu'}
        aria-expanded={isOpen}
        aria-controls="mobile-navigation"
        onClick={() => setIsOpen((open) => !open)}
      >
        {isOpen ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
      </button>

      {isOpen && (
        <>
          <button
            type="button"
            className="fixed inset-0 z-40 cursor-default bg-transparent"
            aria-label="Fechar menu"
            data-testid="mobile-menu-backdrop"
            onClick={() => setIsOpen(false)}
          />
          <nav
            id="mobile-navigation"
            className="absolute right-0 top-14 z-50 flex w-64 flex-col rounded-lg border bg-white p-3 shadow-xl"
            aria-label="Navegação móvel"
          >
            {navigation.map((item) => (
              <Link
                className="hover:bg-petroleum-50 rounded-md px-4 py-3 text-sm text-zinc-700"
                key={item.href}
                href={item.href}
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <Button asChild className="mt-2">
              <a
                href={`https://wa.me/${siteConfig.whatsapp}`}
                target="_blank"
                rel="noreferrer"
                onClick={() => setIsOpen(false)}
              >
                <WhatsAppIcon /> Agendar consulta
              </a>
            </Button>
          </nav>
        </>
      )}
    </div>
  );
}

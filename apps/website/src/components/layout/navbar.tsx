import { Menu } from 'lucide-react';
import Link from 'next/link';
import { Container } from './container';
import { Button } from '@/components/ui/button';
import { WhatsAppIcon } from '@/components/ui/whatsapp-icon';
import { navigation, siteConfig } from '@/config/site';

export function Navbar() {
  return (
    <header
      className="sticky top-0 z-50 border-b bg-white/95 backdrop-blur"
      data-testid="navbar"
    >
      <Container className="h-18 flex items-center justify-between">
        <Link
          href="/"
          className="font-display text-petroleum-900 text-lg font-bold"
          aria-label="Página inicial de Junior Lopes Advocacia"
        >
          JL <span className="ml-2 hidden text-sm sm:inline">Junior Lopes</span>
        </Link>
        <nav
          className="hidden items-center gap-7 lg:flex"
          aria-label="Navegação principal"
        >
          {navigation.map((item) => (
            <Link
              className="hover:text-petroleum-900 text-sm text-zinc-600 transition-colors"
              key={item.href}
              href={item.href}
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <Button asChild className="hidden sm:inline-flex">
          <a
            href={`https://wa.me/${siteConfig.whatsapp}`}
            target="_blank"
            rel="noreferrer"
          >
            <WhatsAppIcon /> Agendar consulta
          </a>
        </Button>
        <details className="group relative lg:hidden">
          <summary
            className="text-petroleum-900 hover:bg-petroleum-50 grid size-11 cursor-pointer list-none place-items-center rounded-md"
            aria-label="Abrir menu"
          >
            <Menu />
          </summary>
          <nav
            className="absolute right-0 top-14 flex w-64 flex-col rounded-lg border bg-white p-3 shadow-xl"
            aria-label="Navegação móvel"
          >
            {navigation.map((item) => (
              <Link
                className="hover:bg-petroleum-50 rounded-md px-4 py-3 text-sm text-zinc-700"
                key={item.href}
                href={item.href}
              >
                {item.label}
              </Link>
            ))}
            <Button asChild className="mt-2">
              <a
                href={`https://wa.me/${siteConfig.whatsapp}`}
                target="_blank"
                rel="noreferrer"
              >
                <WhatsAppIcon /> Agendar consulta
              </a>
            </Button>
          </nav>
        </details>
      </Container>
    </header>
  );
}

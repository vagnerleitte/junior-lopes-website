import Link from 'next/link';
import { Container } from './container';
import { MobileNavigation } from './mobile-navigation';
import { BrandLogo } from '@/components/ui/brand-logo';
import { Button } from '@/components/ui/button';
import { WhatsAppIcon } from '@/components/ui/whatsapp-icon';
import { navigation, siteConfig } from '@/config/site';

export function Navbar() {
  return (
    <header
      className="sticky top-0 z-50 border-b bg-white"
      data-testid="navbar"
    >
      <Container className="h-18 flex items-center justify-between">
        <Link
          href="/"
          className="font-display text-petroleum-900 flex items-center gap-2 text-lg font-bold"
          aria-label="Página inicial de Junior Lopes Advocacia"
        >
          <BrandLogo />
          <span className="hidden text-sm sm:inline">Junior Lopes</span>
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
        <MobileNavigation />
      </Container>
    </header>
  );
}

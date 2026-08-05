import Link from 'next/link';
import { Container } from './container';
import { navigation, siteConfig } from '@/config/site';

export function Footer() {
  return (
    <footer className="bg-surface border-t py-12">
      <Container className="grid gap-10 md:grid-cols-3">
        <div>
          <p className="font-display text-petroleum-900 text-lg font-bold">
            Junior Lopes
          </p>
          <p className="mt-3 max-w-xs text-sm leading-6 text-zinc-500">
            Atendimento jurídico especializado, ético e próximo.
          </p>
        </div>
        <div>
          <p className="mb-3 text-sm font-semibold">Navegação</p>
          {navigation.slice(1).map((item) => (
            <Link
              className="hover:text-petroleum-900 mr-4 text-sm text-zinc-500"
              key={item.href}
              href={item.href}
            >
              {item.label}
            </Link>
          ))}
        </div>
        <div className="md:text-right">
          <p className="mb-3 text-sm font-semibold">Legal</p>
          <Link className="mr-4 text-sm text-zinc-500" href="/privacidade">
            Política de Privacidade
          </Link>
          <Link className="text-sm text-zinc-500" href="/termos">
            Termos de Uso
          </Link>
        </div>
      </Container>
      <Container className="mt-10 border-t pt-6 text-xs text-zinc-500">
        © {new Date().getFullYear()} Junior Lopes Advocacia. {siteConfig.oab}.
        Conteúdo meramente informativo.
      </Container>
    </footer>
  );
}

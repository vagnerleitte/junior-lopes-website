import Link from 'next/link';
import { Container } from '@/components/layout/container';
import { Button } from '@/components/ui/button';

export default function NotFound() {
  return (
    <Container className="flex min-h-[65vh] flex-col items-center justify-center text-center">
      <p className="font-display text-emerald-accent text-sm font-semibold">
        Erro 404
      </p>
      <h1 className="font-display text-petroleum-900 mt-4 text-4xl font-bold">
        Página não encontrada
      </h1>
      <p className="mt-4 text-zinc-600">
        O endereço informado não existe ou foi alterado.
      </p>
      <Button asChild className="mt-8">
        <Link href="/">Voltar ao início</Link>
      </Button>
    </Container>
  );
}

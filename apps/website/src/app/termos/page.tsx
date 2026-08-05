import { Container } from '@/components/layout/container';
import { createMetadata } from '@/lib/metadata';

export const metadata = createMetadata(
  'Termos de Uso',
  'Condições para utilização do site Junior Lopes Advocacia.',
  '/termos',
);
export default function TermsPage() {
  return (
    <Container className="max-w-3xl py-20">
      <article>
        <h1 className="font-display text-petroleum-900 text-4xl font-bold">
          Termos de Uso
        </h1>
        <p className="mt-6 leading-7 text-zinc-600">
          O conteúdo deste site possui caráter exclusivamente informativo e não
          substitui consulta jurídica individualizada. O envio de mensagem não
          estabelece, por si só, relação advogado-cliente.
        </p>
        <h2 className="font-display text-petroleum-900 mt-10 text-2xl font-semibold">
          Uso responsável
        </h2>
        <p className="mt-4 leading-7 text-zinc-600">
          Ao navegar, você concorda em utilizar as informações de maneira
          lícita. Este texto é um modelo e deverá passar por revisão jurídica
          antes da publicação.
        </p>
      </article>
    </Container>
  );
}

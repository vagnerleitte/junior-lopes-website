import { Container } from '@/components/layout/container';
import { createMetadata } from '@/lib/metadata';

export const metadata = createMetadata(
  'Política de Privacidade',
  'Saiba como tratamos os dados pessoais enviados pelo site.',
  '/privacidade',
);
export default function PrivacyPage() {
  return (
    <Container className="max-w-3xl py-20">
      <article className="prose prose-zinc">
        <h1 className="font-display text-petroleum-900 text-4xl font-bold">
          Política de Privacidade
        </h1>
        <p className="mt-6 leading-7 text-zinc-600">
          Esta página descreve, de forma transparente, como dados enviados
          voluntariamente por formulários de contato podem ser usados para
          responder solicitações e prestar atendimento jurídico.
        </p>
        <h2 className="font-display text-petroleum-900 mt-10 text-2xl font-semibold">
          Dados e finalidade
        </h2>
        <p className="mt-4 leading-7 text-zinc-600">
          Nome, contato e mensagem são tratados somente para retorno e análise
          inicial da solicitação, de acordo com a legislação aplicável. Este
          conteúdo é um modelo e deverá passar por revisão jurídica antes da
          publicação.
        </p>
      </article>
    </Container>
  );
}

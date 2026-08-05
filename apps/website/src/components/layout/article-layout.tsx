import { Container } from './container';
import type { Article } from '@/content/articles';

export function ArticleLayout({ article }: { article: Article }) {
  return (
    <Container className="max-w-3xl py-20">
      <article>
        <p className="text-emerald-accent text-sm">Informação jurídica</p>
        <h1 className="font-display text-petroleum-900 mt-4 text-4xl font-bold">
          {article.title}
        </h1>
        <p className="mt-4 text-zinc-500">
          Publicado em{' '}
          {new Intl.DateTimeFormat('pt-BR', { dateStyle: 'long' }).format(
            new Date(article.publishedAt),
          )}
        </p>
        <div className="mt-10 space-y-6">
          {article.content.map((paragraph) => (
            <p className="text-lg leading-8 text-zinc-600" key={paragraph}>
              {paragraph}
            </p>
          ))}
        </div>
      </article>
    </Container>
  );
}

import { ArticleCard } from '@/components/cards/article-card';
import { Container } from '@/components/layout/container';
import { articles } from '@/content/articles';
import { createMetadata } from '@/lib/metadata';

export const metadata = createMetadata(
  'Artigos',
  'Conteúdo jurídico informativo para decisões mais conscientes.',
  '/artigos',
);
export default function ArticlesPage() {
  return (
    <Container className="py-20">
      <h1 className="font-display text-petroleum-900 text-4xl font-bold">
        Artigos
      </h1>
      <p className="mt-4 text-zinc-600">
        Informação clara e responsável sobre temas jurídicos.
      </p>
      <div className="mt-10 grid gap-5 md:grid-cols-2">
        {articles.map((article) => (
          <ArticleCard key={article.slug} article={article} />
        ))}
      </div>
    </Container>
  );
}

import Link from 'next/link';
import type { Article } from '@/content/articles';

export function ArticleCard({ article }: { article: Article }) {
  return (
    <article className="rounded-lg border bg-white p-6">
      <p className="text-xs text-zinc-500">
        {new Intl.DateTimeFormat('pt-BR', { dateStyle: 'long' }).format(
          new Date(article.publishedAt),
        )}
      </p>
      <h2 className="font-display text-petroleum-900 mt-3 text-xl font-semibold">
        <Link href={`/artigos/${article.slug}`}>{article.title}</Link>
      </h2>
      <p className="mt-3 leading-7 text-zinc-600">{article.excerpt}</p>
    </article>
  );
}

import article from './contratos-seguros.json';
export type Article = typeof article;
export const articles: Article[] = [article];
export function getArticle(slug: string) {
  return articles.find((item) => item.slug === slug);
}

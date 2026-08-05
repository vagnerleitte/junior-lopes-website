import type { MetadataRoute } from 'next';
import { siteConfig } from '@/config/site';
export default function sitemap(): MetadataRoute.Sitemap {
  return ['', '/privacidade', '/termos', '/artigos'].map((path) => ({
    url: `${siteConfig.url}${path}`,
    lastModified: new Date(),
    changeFrequency: path === '' ? 'monthly' : 'yearly',
    priority: path === '' ? 1 : 0.5,
  }));
}

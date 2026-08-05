import type { Metadata } from 'next';
import { siteConfig } from '@/config/site';

export const socialImageMetadata = {
  url: siteConfig.socialImage,
  width: 1254,
  height: 1254,
  alt: 'Junior Lopes, advogado civil, em seu escritório',
} as const;

export function createMetadata(
  title: string,
  description: string,
  path = '/',
): Metadata {
  const url = new URL(path, siteConfig.url).toString();
  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      title,
      description,
      url,
      siteName: siteConfig.name,
      locale: 'pt_BR',
      type: 'website',
      images: [socialImageMetadata],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [socialImageMetadata],
    },
  };
}

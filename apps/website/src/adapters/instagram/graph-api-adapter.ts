import type { InstagramAdapter } from './instagram-adapter';
import type { InstagramPost } from '@/types/content';

type ApiItem = {
  id: string;
  caption?: string;
  media_url: string;
  permalink: string;
  timestamp: string;
  media_type: InstagramPost['mediaType'];
};

export class InstagramGraphApiAdapter implements InstagramAdapter {
  constructor(private readonly accessToken: string) {}
  async getLatestPosts(limit = 3): Promise<InstagramPost[]> {
    const url = new URL('https://graph.instagram.com/me/media');
    url.searchParams.set(
      'fields',
      'id,caption,media_url,permalink,timestamp,media_type',
    );
    url.searchParams.set('limit', String(limit));
    url.searchParams.set('access_token', this.accessToken);
    const response = await fetch(url, {
      next: { revalidate: 21600, tags: ['instagram'] },
    });
    if (!response.ok) throw new Error('Instagram indisponível');
    const payload = (await response.json()) as { data: ApiItem[] };
    return payload.data.map((item) => ({
      id: item.id,
      caption: item.caption ?? 'Publicação no Instagram',
      image: item.media_url,
      permalink: item.permalink,
      timestamp: item.timestamp,
      mediaType: item.media_type,
    }));
  }
}

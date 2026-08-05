import { unstable_cache } from 'next/cache';
import { InstagramGraphApiAdapter } from '@/adapters/instagram/graph-api-adapter';
import { mockInstagramPosts } from './mock-posts';

export const getLatestPosts = unstable_cache(
  async () => {
    const token = process.env.INSTAGRAM_ACCESS_TOKEN;
    if (!token) return mockInstagramPosts;
    try {
      return await new InstagramGraphApiAdapter(token).getLatestPosts();
    } catch {
      return mockInstagramPosts;
    }
  },
  ['latest-instagram-posts'],
  { revalidate: 21600, tags: ['instagram'] },
);

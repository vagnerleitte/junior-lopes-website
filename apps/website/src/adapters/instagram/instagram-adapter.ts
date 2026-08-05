import type { InstagramPost } from '@/types/content';

export interface InstagramAdapter {
  getLatestPosts(limit?: number): Promise<InstagramPost[]>;
}

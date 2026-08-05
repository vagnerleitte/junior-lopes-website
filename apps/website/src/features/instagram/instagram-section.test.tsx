import { render, screen } from '@testing-library/react';
import { expect, it, vi } from 'vitest';
import { mockInstagramPosts } from '@/services/instagram/mock-posts';
import { InstagramSection } from './instagram-section';

vi.mock('next/image', () => ({
  default: (props: React.ImgHTMLAttributes<HTMLImageElement>) => (
    <span role="img" aria-label={props.alt} />
  ),
}));
vi.mock('@/services/instagram/get-latest-posts', () => ({
  getLatestPosts: async () => mockInstagramPosts,
}));

it('usa o feed desacoplado e exibe publicações', async () => {
  render(await InstagramSection());
  expect(screen.getAllByRole('link')).toHaveLength(4);
});

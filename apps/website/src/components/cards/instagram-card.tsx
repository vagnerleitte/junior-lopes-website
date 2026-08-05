import Image from 'next/image';
import type { InstagramPost } from '@/types/content';

export function InstagramCard({ post }: { post: InstagramPost }) {
  return (
    <a
      href={post.permalink}
      target="_blank"
      rel="noreferrer"
      className="group block overflow-hidden rounded-lg border bg-white"
    >
      <div className="relative aspect-[4/3] overflow-hidden">
        <Image
          src={post.image}
          alt={post.caption}
          fill
          sizes="(max-width: 768px) 100vw, 33vw"
          className="object-cover transition duration-500 group-hover:scale-105"
        />
      </div>
      <p className="p-4 text-sm leading-6 text-zinc-600">{post.caption}</p>
    </a>
  );
}

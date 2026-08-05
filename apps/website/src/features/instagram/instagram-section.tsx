import { Instagram } from 'lucide-react';
import { InstagramCard } from '@/components/cards/instagram-card';
import { Container } from '@/components/layout/container';
import { Section } from '@/components/layout/section';
import { Button } from '@/components/ui/button';
import { Typography } from '@/components/ui/typography';
import { siteConfig } from '@/config/site';
import { getLatestPosts } from '@/services/instagram/get-latest-posts';

export async function InstagramSection() {
  const posts = await getLatestPosts();
  return (
    <Section className="bg-surface" data-testid="instagram">
      <Container>
        <div className="text-center">
          <Typography as="h2" variant="title">
            Acompanhe no Instagram
          </Typography>
          <Typography className="mt-3">
            Informações jurídicas de valor para o seu dia a dia.
          </Typography>
        </div>
        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {posts.map((post) => (
            <InstagramCard key={post.id} post={post} />
          ))}
        </div>
        <div className="mt-8 text-center">
          <Button asChild variant="secondary">
            <a href={siteConfig.instagram} target="_blank" rel="noreferrer">
              <Instagram size={16} /> Seguir {siteConfig.instagramHandle}
            </a>
          </Button>
        </div>
      </Container>
    </Section>
  );
}

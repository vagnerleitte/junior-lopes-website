import { Container } from '@/components/layout/container';
import { Section } from '@/components/layout/section';
import { PracticeCard } from '@/components/cards/practice-card';
import { Typography } from '@/components/ui/typography';
import { Reveal } from '@/components/ui/reveal';
import { practiceAreas } from '@/content/home';

export function PracticeAreas() {
  return (
    <Section
      id="areas"
      className="bg-petroleum-900 text-white"
      data-testid="practice-areas"
    >
      <Container>
        <Reveal>
          <p className="text-xs font-semibold uppercase tracking-[.2em] text-white/60">
            Especialidades
          </p>
          <Typography as="h2" variant="title" className="mt-3 text-white">
            Áreas de Atuação
          </Typography>
          <p className="mt-4 max-w-xl text-white/70">
            Experiência técnica para entregar as melhores soluções jurídicas.
          </p>
        </Reveal>
        <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {practiceAreas.map((area) => (
            <PracticeCard key={area.title} area={area} />
          ))}
        </div>
      </Container>
    </Section>
  );
}

import Image from 'next/image';
import { Container } from '@/components/layout/container';
import { Section } from '@/components/layout/section';
import { Typography } from '@/components/ui/typography';
import { siteConfig } from '@/config/site';

export function AboutSection() {
  return (
    <Section id="sobre" data-testid="about">
      <Container className="grid items-center gap-12 lg:grid-cols-[.8fr_1.2fr]">
        <div className="relative aspect-square overflow-hidden">
          <Image
            src="/images/junior-institucional.png"
            alt="Junior Lopes, advogado civil, em seu escritório"
            fill
            sizes="(max-width: 1024px) 100vw, 40vw"
            className="object-cover"
          />
        </div>
        <div>
          <Typography as="h2" variant="title">
            Sobre o profissional
          </Typography>
          <Typography className="mt-6">
            Junior Lopes atua na advocacia civil com atendimento jurídico
            personalizado e estratégico. O trabalho prioriza a ética, a
            transparência e a busca pelos caminhos mais adequados para cada
            cliente.
          </Typography>
          <dl className="mt-8 grid gap-4 text-sm sm:grid-cols-2">
            <div>
              <dt className="text-zinc-500">Especialização</dt>
              <dd className="mt-1 font-semibold">{siteConfig.education}</dd>
            </div>
            <div>
              <dt className="text-zinc-500">Inscrição</dt>
              <dd className="mt-1 font-semibold">{siteConfig.oab}</dd>
            </div>
            <div>
              <dt className="text-zinc-500">Atuação</dt>
              <dd className="mt-1 font-semibold">
                {siteConfig.professionalTitle}
              </dd>
            </div>
            <div>
              <dt className="text-zinc-500">Atendimento</dt>
              <dd className="mt-1 font-semibold">Online e presencial</dd>
            </div>
          </dl>
        </div>
      </Container>
    </Section>
  );
}

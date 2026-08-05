import { ArrowRight, CheckCircle2 } from 'lucide-react';
import Image from 'next/image';
import { Container } from '@/components/layout/container';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Typography } from '@/components/ui/typography';
import { WhatsAppIcon } from '@/components/ui/whatsapp-icon';
import { siteConfig } from '@/config/site';

export function Hero() {
  return (
    <section className="overflow-hidden bg-white" data-testid="hero">
      <Container className="grid min-h-[680px] items-stretch gap-12 py-12 lg:grid-cols-[1fr_.88fr] lg:gap-0 lg:py-0">
        <div className="flex flex-col justify-center py-10 lg:pr-16">
          <Badge className="mb-8 w-fit">
            <CheckCircle2 size={13} /> Advocacia especializada
          </Badge>
          <Typography
            as="h1"
            variant="display"
            className="max-w-[12ch] text-balance"
          >
            Atendimento jurídico personalizado para proteger seus direitos.
          </Typography>
          <Typography className="mt-7 max-w-xl">
            Prevenção de riscos e soluções estratégicas para conflitos cíveis e
            criminais, com clareza em cada etapa.
          </Typography>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <Button asChild size="lg">
              <a
                href={`https://wa.me/${siteConfig.whatsapp}`}
                target="_blank"
                rel="noreferrer"
              >
                <WhatsAppIcon /> Agendar consulta <ArrowRight size={16} />
              </a>
            </Button>
            <Button asChild variant="secondary" size="lg">
              <a href="#areas">Conhecer áreas de atuação</a>
            </Button>
          </div>
          <dl className="mt-12 grid grid-cols-3 gap-5 border-t pt-6">
            <div>
              <dt className="text-xs text-zinc-500">Atendimento</dt>
              <dd className="font-display text-petroleum-900 mt-1 font-semibold">
                Online e presencial
              </dd>
            </div>
            <div>
              <dt className="text-xs text-zinc-500">Abordagem</dt>
              <dd className="font-display text-petroleum-900 mt-1 font-semibold">
                Estratégica
              </dd>
            </div>
            <div>
              <dt className="text-xs text-zinc-500">Relação</dt>
              <dd className="font-display text-petroleum-900 mt-1 font-semibold">
                Próxima
              </dd>
            </div>
          </dl>
        </div>
        <div className="relative min-h-[480px] overflow-hidden rounded-xl lg:min-h-full lg:rounded-none">
          <Image
            src="/images/junior-institucional.png"
            alt="Junior Lopes, advogado civil, em seu escritório"
            fill
            priority
            sizes="(max-width: 1024px) 100vw, 45vw"
            className="object-cover"
          />
          <div className="absolute inset-x-5 bottom-5 max-w-sm rounded-lg bg-white/95 p-5 shadow-xl backdrop-blur">
            <p className="text-sm leading-6 text-zinc-600">
              “Atendimento responsável é transformar complexidade em caminhos
              claros e decisões conscientes.”
            </p>
            <p className="text-petroleum-900 mt-3 text-xs font-semibold">
              Junior Lopes · {siteConfig.professionalTitle}
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}

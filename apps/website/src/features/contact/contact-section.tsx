import { Mail, MapPin, Phone } from 'lucide-react';
import { Container } from '@/components/layout/container';
import { Section } from '@/components/layout/section';
import { Typography } from '@/components/ui/typography';
import { siteConfig } from '@/config/site';
import { MapSection } from '@/features/maps/map-section';
import { ContactForm } from './contact-form';

export function ContactSection() {
  return (
    <Section
      id="contato"
      className="bg-petroleum-900 text-white"
      data-testid="contact"
    >
      <Container>
        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <Typography as="h2" variant="title" className="text-white">
              Entre em contato
            </Typography>
            <p className="mt-4 max-w-md text-white/70">
              Estamos prontos para analisar o seu caso e oferecer a melhor
              estratégia jurídica.
            </p>
            <ul className="mt-8 space-y-4 text-sm">
              <li className="flex gap-3">
                <Phone size={18} /> {siteConfig.phone}
              </li>
              <li className="flex gap-3">
                <Mail size={18} /> {siteConfig.email}
              </li>
              <li className="flex gap-3">
                <MapPin size={18} /> {siteConfig.address}
              </li>
            </ul>
          </div>
          <ContactForm />
        </div>
        <div className="mt-12">
          <MapSection />
        </div>
      </Container>
    </Section>
  );
}

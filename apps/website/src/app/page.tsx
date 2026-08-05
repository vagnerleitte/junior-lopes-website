import { Suspense } from 'react';
import { AboutSection } from '@/features/about/about-section';
import { ContactSection } from '@/features/contact/contact-section';
import { FaqSection } from '@/features/faq/faq-section';
import { Hero } from '@/features/home/hero';
import { HowItWorks } from '@/features/home/how-it-works';
import { PracticeAreas } from '@/features/home/practice-areas';
import { InstagramSection } from '@/features/instagram/instagram-section';
import { createMetadata } from '@/lib/metadata';

export const metadata = createMetadata(
  'Advocacia estratégica e personalizada',
  'Soluções jurídicas em Direito Civil, Contratos e Defesa Criminal, com atendimento próximo e transparente.',
);

export default function HomePage() {
  return (
    <>
      <Hero />
      <PracticeAreas />
      <HowItWorks />
      <AboutSection />
      <Suspense
        fallback={
          <div
            className="bg-surface min-h-96"
            aria-label="Carregando publicações"
          />
        }
      >
        <InstagramSection />
      </Suspense>
      <FaqSection />
      <ContactSection />
    </>
  );
}

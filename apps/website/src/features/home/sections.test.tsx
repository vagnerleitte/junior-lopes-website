import { render, screen } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';
import { AboutSection } from '@/features/about/about-section';
import { ContactSection } from '@/features/contact/contact-section';
import { FaqSection } from '@/features/faq/faq-section';
import { Hero } from './hero';
import { HowItWorks } from './how-it-works';
import { PracticeAreas } from './practice-areas';

vi.mock('next/image', () => ({
  default: (props: React.ImgHTMLAttributes<HTMLImageElement>) => (
    <span role="img" aria-label={props.alt} />
  ),
}));
vi.mock('@/features/maps/map-section', () => ({
  MapSection: () => <div>Mapa</div>,
}));

describe('seções principais', () => {
  it('apresenta a proposta de valor no hero', () => {
    render(<Hero />);
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(
      'Atendimento jurídico',
    );
  });
  it('lista as áreas de atuação', () => {
    render(<PracticeAreas />);
    expect(screen.getByText('Direito Civil')).toBeInTheDocument();
  });
  it('explica o processo de atendimento', () => {
    render(<HowItWorks />);
    expect(screen.getByText('Primeiro contato')).toBeInTheDocument();
  });
  it('apresenta o profissional', () => {
    render(<AboutSection />);
    expect(
      screen.getByRole('heading', { name: /sobre o profissional/i }),
    ).toBeInTheDocument();
  });
  it('oferece respostas acessíveis no FAQ', () => {
    render(<FaqSection />);
    expect(
      screen.getByRole('button', { name: /primeira consulta/i }),
    ).toBeInTheDocument();
  });
  it('oferece formulário e canais de contato', () => {
    render(<ContactSection />);
    expect(
      screen.getByRole('button', { name: /enviar mensagem/i }),
    ).toBeInTheDocument();
  });
});

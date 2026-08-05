import { Container } from '@/components/layout/container';
import { Section } from '@/components/layout/section';
import { Typography } from '@/components/ui/typography';
import { timeline } from '@/content/home';

export function HowItWorks() {
  return (
    <Section
      id="como-funciona"
      className="section-grid bg-surface"
      data-testid="how-it-works"
    >
      <Container>
        <div className="text-center">
          <Typography as="h2" variant="title">
            Como funciona o atendimento
          </Typography>
          <Typography className="mx-auto mt-4 max-w-xl">
            Um processo transparente e eficiente para resolver o seu problema.
          </Typography>
        </div>
        <ol className="relative mt-14 grid gap-4 md:grid-cols-5">
          {timeline.map((step, index) => (
            <li
              className="relative rounded-lg border bg-white p-5 shadow-sm"
              key={step.title}
            >
              <span className="bg-petroleum-900 grid size-8 place-items-center rounded-full text-xs font-bold text-white">
                {index + 1}
              </span>
              <h3 className="font-display text-petroleum-900 mt-5 text-sm font-semibold">
                {step.title}
              </h3>
              <p className="mt-2 text-xs leading-5 text-zinc-500">
                {step.description}
              </p>
            </li>
          ))}
        </ol>
      </Container>
    </Section>
  );
}

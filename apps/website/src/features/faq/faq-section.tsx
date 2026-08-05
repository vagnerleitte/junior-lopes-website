'use client';

import * as Accordion from '@radix-ui/react-accordion';
import { ChevronDown } from 'lucide-react';
import { Container } from '@/components/layout/container';
import { Section } from '@/components/layout/section';
import { Typography } from '@/components/ui/typography';
import { faqItems } from '@/content/home';

export function FaqSection() {
  return (
    <Section id="faq" data-testid="faq">
      <Container className="max-w-3xl">
        <Typography as="h2" variant="title" className="text-center">
          Perguntas frequentes
        </Typography>
        <Accordion.Root type="single" collapsible className="mt-10 space-y-3">
          {faqItems.map((item, index) => (
            <Accordion.Item
              key={item.question}
              value={`item-${index}`}
              className="rounded-lg border bg-white px-5"
            >
              <Accordion.Header>
                <Accordion.Trigger className="text-petroleum-900 group flex min-h-16 w-full items-center justify-between gap-4 text-left text-sm font-semibold">
                  {item.question}
                  <ChevronDown
                    size={17}
                    className="shrink-0 transition group-data-[state=open]:rotate-180"
                  />
                </Accordion.Trigger>
              </Accordion.Header>
              <Accordion.Content className="overflow-hidden pb-5 text-sm leading-6 text-zinc-600 data-[state=closed]:animate-none">
                {item.answer}
              </Accordion.Content>
            </Accordion.Item>
          ))}
        </Accordion.Root>
      </Container>
    </Section>
  );
}

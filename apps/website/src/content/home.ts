import {
  BriefcaseBusiness,
  FileCheck2,
  Landmark,
  Scale,
  ShieldCheck,
} from 'lucide-react';
import type { FaqItem, PracticeArea, TimelineStep } from '@/types/content';

export const practiceAreas: PracticeArea[] = [
  {
    title: 'Direito Civil',
    description:
      'Resolução de conflitos patrimoniais, familiares e obrigacionais, com orientação preventiva e contenciosa.',
    icon: Landmark,
  },
  {
    title: 'Contratos',
    description:
      'Elaboração, revisão e análise de instrumentos contratuais para garantir relações jurídicas mais seguras.',
    icon: FileCheck2,
  },
  {
    title: 'Defesa Criminal',
    description:
      'Atuação técnica e estratégica na defesa de direitos fundamentais em investigações e processos.',
    icon: ShieldCheck,
  },
  {
    title: 'Indenizações',
    description:
      'Análise responsável de danos materiais e morais e das medidas jurídicas adequadas.',
    icon: Scale,
  },
  {
    title: 'Consultoria Jurídica',
    description:
      'Pareceres e orientação para decisões pessoais e empresariais mais conscientes.',
    icon: BriefcaseBusiness,
  },
];

export const timeline: TimelineStep[] = [
  {
    title: 'Primeiro contato',
    description:
      'Agendamento por WhatsApp ou formulário para entendermos sua necessidade.',
  },
  {
    title: 'Análise inicial',
    description:
      'Estudo preliminar dos documentos e da viabilidade jurídica do caso.',
  },
  {
    title: 'Reunião de alinhamento',
    description:
      'Encontro presencial ou online para apresentação do cenário e opções.',
  },
  {
    title: 'Estratégia jurídica',
    description:
      'Elaboração das peças, contratos ou defesas com base no plano traçado.',
  },
  {
    title: 'Acompanhamento',
    description:
      'Atualizações periódicas sobre o andamento e os próximos passos.',
  },
];

export const faqItems: FaqItem[] = [
  {
    question: 'Como funciona a primeira consulta?',
    answer:
      'É uma conversa reservada para compreender o contexto, avaliar documentos iniciais e indicar os próximos passos possíveis.',
  },
  {
    question: 'O atendimento pode ser online?',
    answer:
      'Sim. As reuniões podem ocorrer por videoconferência, com a mesma atenção e confidencialidade do atendimento presencial.',
  },
  {
    question: 'Quais documentos preciso levar?',
    answer:
      'Depende do caso. Após o primeiro contato, você receberá uma lista objetiva com os documentos relevantes.',
  },
  {
    question: 'Como são definidos os honorários?',
    answer:
      'Os honorários consideram a complexidade, o tempo estimado e a natureza do serviço, sempre apresentados antes da contratação.',
  },
  {
    question: 'Vocês atuam em outras áreas além de Civil e Criminal?',
    answer:
      'A atuação é concentrada nas áreas apresentadas. Quando necessário, indicamos profissionais parceiros de confiança.',
  },
];

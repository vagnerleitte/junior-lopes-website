export const siteConfig = {
  name: 'Junior Lopes Advocacia',
  shortName: 'Junior Lopes',
  description:
    'Junior Lopes, advogado civil, com atendimento jurídico personalizado em Tupã.',
  url:
    process.env.NEXT_PUBLIC_SITE_URL ??
    'https://junior-lopes-advocacia.niltonjuniorlopes.workers.dev',
  socialImage: '/images/junior-institucional.png',
  email: 'contato@juniorlopes.adv.br',
  phone: '+55 14 99776-9758',
  whatsapp: '5514997769758',
  address: 'Rua México, 325 — Jardim América, Tupã — SP',
  instagram: 'https://www.instagram.com/adv.juniorlopes',
  instagramHandle: '@adv.juniorlopes',
  oab: 'OAB/SP 484.956',
  professionalTitle: 'Advogado Civil',
  education: 'Pós-graduado em Direito Civil e Direito Penal',
} as const;

export const navigation = [
  { label: 'Início', href: '/' },
  { label: 'Áreas de Atuação', href: '/#areas' },
  { label: 'Como funciona', href: '/#como-funciona' },
  { label: 'Sobre', href: '/#sobre' },
  { label: 'Contato', href: '/#contato' },
] as const;

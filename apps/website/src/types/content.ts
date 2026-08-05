import type { LucideIcon } from 'lucide-react';

export type PracticeArea = {
  title: string;
  description: string;
  icon: LucideIcon;
};
export type TimelineStep = { title: string; description: string };
export type FaqItem = { question: string; answer: string };
export type InstagramPost = {
  id: string;
  caption: string;
  image: string;
  permalink: string;
  timestamp: string;
  mediaType: 'IMAGE' | 'VIDEO' | 'CAROUSEL_ALBUM';
};

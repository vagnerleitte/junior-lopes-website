import type { PracticeArea } from '@/types/content';

export function PracticeCard({ area }: { area: PracticeArea }) {
  const Icon = area.icon;
  return (
    <article className="group rounded-lg border border-white/10 bg-white/[.055] p-6 transition hover:-translate-y-1 hover:bg-white/[.09]">
      <span
        className="mb-8 grid size-10 place-items-center rounded-md bg-white/10"
        aria-hidden="true"
      >
        <Icon size={18} />
      </span>
      <h3 className="font-display text-lg font-semibold">{area.title}</h3>
      <p className="mt-3 text-sm leading-6 text-white/70">{area.description}</p>
    </article>
  );
}

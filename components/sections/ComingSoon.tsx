import ScrollReveal from '@/components/ScrollReveal';
import { comingSoon } from '@/content/site';

export default function ComingSoon() {
  return (
    <section id="coming-soon" className="relative bg-linen py-20 sm:py-24">
      <div className="container-editorial">
        <ScrollReveal className="mx-auto flex max-w-2xl flex-col items-center gap-4 text-center">
          <p className="font-body text-[0.7rem] font-semibold uppercase tracking-widest2 text-stone">
            {comingSoon.label}
          </p>
          <h2 className="font-display text-3xl italic text-bark/70 sm:text-4xl">{comingSoon.headline}</h2>
          <p className="font-body text-sm leading-relaxed text-bark/50 sm:text-base">{comingSoon.body}</p>
          <span className="mt-1 font-hand text-xl text-stone">{comingSoon.note}</span>
        </ScrollReveal>
      </div>
    </section>
  );
}

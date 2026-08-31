import ScrollReveal from '@/components/ScrollReveal';
import SectionLabel from '@/components/SectionLabel';
import { outcome } from '@/content/site';
import { staggerChildren, fadeUp } from '@/lib/motion';

export default function Outcome() {
  return (
    <section className="relative bg-cream py-24 sm:py-32">
      <div className="container-editorial">
        <SectionLabel numeral="✦">{outcome.label}</SectionLabel>

        <div className="mt-8 flex flex-col gap-3">
          <ScrollReveal>
            <h2 className="font-body text-display-2 font-black uppercase leading-[0.98] tracking-tight text-bark/25">
              {outcome.headline}
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <p className="font-display text-display-3 italic leading-[1.02] text-bark">{outcome.statement}</p>
          </ScrollReveal>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-12 border-t border-bark/10 pt-12 sm:mt-20 lg:grid-cols-2 lg:gap-8">
          <ScrollReveal variants={staggerChildren(0.1)} className="flex flex-col gap-4">
            {outcome.stops.map((line) => (
              <ScrollReveal key={line} variants={fadeUp} className="flex items-start gap-3">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-bark/25" aria-hidden />
                <p className="font-body text-lg text-bark/45 sm:text-xl">{line}</p>
              </ScrollReveal>
            ))}
          </ScrollReveal>

          <div className="flex flex-col gap-4">
            <ScrollReveal>
              <p className="font-body text-xs font-semibold uppercase tracking-widest2 text-sage">
                {outcome.insteadLabel}
              </p>
            </ScrollReveal>
            <ScrollReveal variants={staggerChildren(0.1)} delay={0.05} className="flex flex-col gap-4">
              {outcome.instead.map((line) => (
                <ScrollReveal key={line} variants={fadeUp} className="flex items-start gap-3">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-sage" aria-hidden />
                  <p className="font-display text-xl italic text-bark sm:text-2xl">{line}</p>
                </ScrollReveal>
              ))}
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}

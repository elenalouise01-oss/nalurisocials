import ScrollReveal from '@/components/ScrollReveal';
import { chapters } from '@/content/site';

const [, buildConfidence] = chapters;

export default function QuoteBreak() {
  return (
    <section className="relative overflow-hidden bg-bark py-24 text-cream sm:py-32">
      <div className="pointer-events-none absolute inset-0 opacity-[0.05]" aria-hidden>
        <div
          className="h-full w-full"
          style={{ backgroundImage: 'radial-gradient(circle, #FFFAEC 1px, transparent 1px)', backgroundSize: '28px 28px' }}
        />
      </div>

      <div className="container-editorial relative flex flex-col items-center text-center">
        <ScrollReveal>
          <p className="font-body text-[0.72rem] font-semibold uppercase tracking-widest2 text-rose">
            The mindset shift
          </p>
        </ScrollReveal>
        <ScrollReveal delay={0.1}>
          <p className="mt-6 max-w-3xl font-display text-3xl italic leading-tight text-cream sm:text-4xl lg:text-5xl">
            {buildConfidence.statement}
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
}

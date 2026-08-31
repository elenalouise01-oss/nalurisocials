import ScrollReveal from '@/components/ScrollReveal';
import { bigIdea } from '@/content/site';
import { staggerChildren, fadeUp } from '@/lib/motion';

export default function BigIdea() {
  return (
    <section className="relative overflow-hidden bg-bark py-28 text-cream sm:py-40">
      <div className="pointer-events-none absolute inset-0 opacity-[0.05]" aria-hidden>
        <div className="h-full w-full" style={{ backgroundImage: 'radial-gradient(circle, #FFFAEC 1px, transparent 1px)', backgroundSize: '28px 28px' }} />
      </div>

      <div className="container-editorial relative">
        <ScrollReveal>
          <p className="font-body text-[0.72rem] font-semibold uppercase tracking-widest2 text-rose">{bigIdea.kicker}</p>
        </ScrollReveal>

        <div className="mt-6 sm:mt-10">
          <ScrollReveal variants={staggerChildren(0.08)}>
            <h2 className="font-display text-display-1 leading-[0.9] text-cream">
              <ScrollReveal as="span" variants={fadeUp} className="block">
                You are the
              </ScrollReveal>
              <ScrollReveal as="span" variants={fadeUp} className="block italic text-zing-yellow">
                content.
              </ScrollReveal>
            </h2>
          </ScrollReveal>
        </div>

        <div className="mt-10 flex flex-col gap-1 sm:mt-14">
          {bigIdea.substatement.map((line, i) => (
            <ScrollReveal key={line} delay={0.1 + i * 0.08}>
              <p className={`font-display text-2xl sm:text-3xl ${i === bigIdea.substatement.length - 1 ? 'italic text-rose' : 'text-cream/50'}`}>
                {line}
              </p>
            </ScrollReveal>
          ))}
        </div>

        <div className="mt-16 grid grid-cols-1 gap-8 border-t border-cream/15 pt-12 sm:mt-20 lg:grid-cols-12">
          {bigIdea.body.map((paragraph, i) => (
            <ScrollReveal
              key={paragraph}
              delay={i * 0.1}
              className={`font-body text-base leading-relaxed text-cream/70 sm:text-lg ${
                i === 0 ? 'lg:col-span-6' : i === 1 ? 'lg:col-span-6 lg:col-start-7' : 'lg:col-span-8'
              }`}
            >
              <p>{paragraph}</p>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}

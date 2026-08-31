import Button from '@/components/Button';
import Marquee from '@/components/Marquee';
import ScrollReveal from '@/components/ScrollReveal';
import SectionLabel from '@/components/SectionLabel';
import { hero, problem } from '@/content/site';
import { staggerChildren, fadeUp } from '@/lib/motion';

export default function Problem() {
  return (
    <section className="relative overflow-hidden bg-porcelain">
      <div className="border-b border-bark/10 py-5">
        <Marquee
          items={hero.marquee.map((item) => item.toUpperCase())}
          textClassName="font-body font-black uppercase tracking-tight text-3xl text-bark/20 sm:text-4xl"
        />
      </div>

      <div className="container-editorial py-24 sm:py-32">
        <SectionLabel numeral="✦">The Problem</SectionLabel>

        <div className="mt-8 grid grid-cols-1 gap-10 lg:grid-cols-12">
          <ScrollReveal className="flex flex-col items-start gap-6 lg:col-span-7">
            <h2 className="font-display text-display-3 leading-[1.02] text-bark">{problem.headline}</h2>
            <Button href="#work-with-me" variant="pastel" tone="rose">
              See the fix
            </Button>
          </ScrollReveal>
          <ScrollReveal delay={0.15} className="flex flex-col justify-end gap-2 lg:col-span-5">
            {problem.intro.map((line) => (
              <p key={line} className="font-body text-base text-bark/60">
                {line}
              </p>
            ))}
          </ScrollReveal>
        </div>

        <ScrollReveal
          variants={staggerChildren(0.14)}
          className="mt-16 grid grid-cols-1 gap-px overflow-hidden rounded-[2px] border border-bark/10 bg-bark/10 sm:grid-cols-3"
        >
          {problem.advice.map((item, i) => (
            <ScrollReveal
              key={item.quote}
              variants={fadeUp}
              className={`flex flex-col justify-between gap-8 bg-porcelain p-8 sm:p-10 ${i === 1 ? 'sm:translate-y-6' : ''}`}
            >
              <p className="font-display text-2xl italic leading-snug text-bark sm:text-[1.65rem]">{item.quote}</p>
              <p className="font-body text-sm text-bark/55">{item.reality}</p>
            </ScrollReveal>
          ))}
        </ScrollReveal>

        <div className="mt-20 flex flex-col items-start gap-8 sm:mt-28 lg:flex-row lg:items-center lg:justify-between">
          <ScrollReveal>
            <p className="font-body text-xs font-semibold uppercase tracking-widest2 text-bark/50">
              {problem.cycleLabel}
            </p>
            <p className="mt-2 font-hand text-4xl text-sage sm:text-5xl">{problem.cycleName}</p>
          </ScrollReveal>

          <ScrollReveal
            delay={0.1}
            variants={staggerChildren(0.1)}
            className="flex flex-wrap items-center gap-3 sm:gap-4"
          >
            {problem.cycleSteps.map((step, i) => (
              <ScrollReveal key={step} variants={fadeUp} as="span" className="flex items-center gap-3 sm:gap-4">
                <span className="whitespace-nowrap rounded-full border border-bark/20 px-4 py-2 font-body text-xs font-medium text-bark/70 sm:text-sm">
                  {step}
                </span>
                {i < problem.cycleSteps.length - 1 && (
                  <span className="text-bark/30" aria-hidden>
                    →
                  </span>
                )}
              </ScrollReveal>
            ))}
          </ScrollReveal>
        </div>

        <ScrollReveal delay={0.1} className="mt-14 sm:mt-16">
          <p className="font-display text-3xl italic text-bark/40 sm:text-4xl">{problem.closing}</p>
        </ScrollReveal>
      </div>
    </section>
  );
}

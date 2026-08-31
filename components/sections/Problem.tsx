import Button from '@/components/Button';
import Marquee from '@/components/Marquee';
import ScrollReveal from '@/components/ScrollReveal';
import SectionLabel from '@/components/SectionLabel';
import { hero, problem } from '@/content/site';

export default function Problem() {
  const bodyParagraphs = [
    problem.intro.join(' '),
    ...problem.advice.map((item) => `${item.quote} ${item.reality}`),
    `${problem.cycleLabel} ${problem.cycleName}: ${problem.cycleSteps.join(', ').toLowerCase()}. ${problem.closing}`,
  ];

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
          <ScrollReveal className="flex flex-col items-start gap-6 lg:col-span-6">
            <h2 className="font-body text-display-3 font-black uppercase leading-[1.02] tracking-tight text-bark">
              {problem.headline}
            </h2>
            <Button href="#work-with-me" variant="pastel" tone="rose">
              See the fix
            </Button>
          </ScrollReveal>

          <ScrollReveal delay={0.12} className="flex flex-col gap-6 lg:col-span-6 lg:col-start-7">
            {bodyParagraphs.map((paragraph) => (
              <p key={paragraph} className="font-body text-base leading-relaxed text-bark/70 sm:text-lg">
                {paragraph}
              </p>
            ))}
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}

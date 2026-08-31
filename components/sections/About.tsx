import PlaceholderImage from '@/components/PlaceholderImage';
import PullQuote from '@/components/PullQuote';
import ScrollReveal from '@/components/ScrollReveal';
import SectionLabel from '@/components/SectionLabel';
import { about } from '@/content/site';

export default function About() {
  return (
    <section id="about" className="relative overflow-hidden bg-porcelain py-24 sm:py-32">
      <div className="container-editorial">
        <SectionLabel numeral="✦">{about.label}</SectionLabel>

        <div className="mt-10 grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-8">
          <ScrollReveal className="relative order-2 lg:order-1 lg:col-span-5">
            <div className="relative aspect-[4/5] w-full overflow-hidden sm:aspect-[3/4]">
              <PlaceholderImage
                alt="Elena, founder of Naluri Socials"
                label="Add your portrait here"
                tone="rose"
                className="h-full w-full"
              />
            </div>
            <span
              aria-hidden
              className="absolute -bottom-6 -right-4 rounded-full bg-cream px-5 py-3 font-hand text-lg text-sage shadow-sm sm:-right-8 sm:text-xl"
              style={{ transform: 'rotate(-6deg)' }}
            >
              that&rsquo;s me!
            </span>
          </ScrollReveal>

          <div className="order-1 flex flex-col gap-8 lg:order-2 lg:col-span-7">
            <ScrollReveal>
              <h2 className="font-display text-display-3 text-bark">{about.greeting}</h2>
            </ScrollReveal>

            <ScrollReveal delay={0.08} className="flex flex-col gap-4">
              {about.intro.map((line) => (
                <p key={line} className="font-body text-base leading-relaxed text-bark/70 sm:text-lg">
                  {line}
                </p>
              ))}
            </ScrollReveal>

            <ScrollReveal delay={0.14}>
              <p className="font-body text-base leading-relaxed text-bark/70 sm:text-lg">{about.shift}</p>
            </ScrollReveal>

            <ScrollReveal delay={0.2} className="border-l-2 border-sage/40 pl-6">
              <PullQuote>{about.pullquote}</PullQuote>
            </ScrollReveal>

            <ScrollReveal delay={0.26} className="flex flex-col gap-4">
              {about.closing.map((line) => (
                <p key={line} className="font-body text-base leading-relaxed text-bark/70 sm:text-lg">
                  {line}
                </p>
              ))}
              <p className="font-display text-2xl italic text-bark sm:text-3xl">{about.finalLine}</p>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}

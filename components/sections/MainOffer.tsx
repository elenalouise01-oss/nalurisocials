import Button from '@/components/Button';
import PlaceholderImage from '@/components/PlaceholderImage';
import ScrollReveal from '@/components/ScrollReveal';
import SectionLabel from '@/components/SectionLabel';
import { mainOffer } from '@/content/site';

export default function MainOffer() {
  return (
    <section id="work-with-me" className="relative bg-cream py-16 sm:py-24">
      <div className="container-editorial">
        <div className="grid grid-cols-1 gap-8 rounded-[2rem] bg-porcelain p-6 sm:p-10 lg:grid-cols-12 lg:gap-12 lg:p-14">
          <ScrollReveal className="relative aspect-[4/5] overflow-hidden rounded-[1.5rem] lg:col-span-5 lg:aspect-auto">
            <PlaceholderImage
              alt="Elena working alongside a client on content"
              label="Working-together shot"
              tone="rose"
              className="h-full w-full"
            />
            <span
              className="absolute left-5 top-5 -rotate-6 rounded-full bg-zing-yellow px-4 py-1.5 font-hand text-base text-bark shadow-sm"
              aria-hidden
            >
              let&rsquo;s create ✦
            </span>
          </ScrollReveal>

          <div className="flex flex-col justify-center gap-6 lg:col-span-7">
            <ScrollReveal>
              <SectionLabel numeral="✦">{mainOffer.eyebrow}</SectionLabel>
            </ScrollReveal>

            <ScrollReveal delay={0.06}>
              <h2 className="font-display text-display-2 leading-[0.95] text-bark">{mainOffer.headline}</h2>
            </ScrollReveal>

            <ScrollReveal delay={0.12}>
              <p className="font-display text-xl italic leading-snug text-sage sm:text-2xl">{mainOffer.lede}</p>
            </ScrollReveal>

            <div className="flex flex-col gap-4">
              {mainOffer.body.map((paragraph, i) => (
                <ScrollReveal key={paragraph} delay={0.16 + i * 0.06}>
                  <p className="font-body text-base leading-relaxed text-bark/70 sm:text-lg">{paragraph}</p>
                </ScrollReveal>
              ))}
            </div>

            <ScrollReveal delay={0.3} className="pt-2">
              <Button href="#apply" variant="pastel" tone="sage">
                {mainOffer.cta}
              </Button>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}

import Button from '@/components/Button';
import PlaceholderImage from '@/components/PlaceholderImage';
import ScrollReveal from '@/components/ScrollReveal';
import SectionLabel from '@/components/SectionLabel';
import { mainOffer } from '@/content/site';

export default function MainOffer() {
  return (
    <section id="work-with-me" className="relative overflow-hidden bg-sand py-24 sm:py-32">
      <div className="container-editorial">
        <SectionLabel numeral="✦">{mainOffer.eyebrow}</SectionLabel>

        <div className="mt-8 grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-6">
          <ScrollReveal className="lg:col-span-7">
            <h2 className="font-display text-display-2 leading-[0.95] text-bark">{mainOffer.headline}</h2>
          </ScrollReveal>

          <ScrollReveal delay={0.12} className="flex flex-col justify-end lg:col-span-5">
            <p className="font-display text-xl italic leading-snug text-sage sm:text-2xl">{mainOffer.lede}</p>
          </ScrollReveal>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-10 lg:mt-20 lg:grid-cols-12 lg:gap-8">
          <ScrollReveal className="relative aspect-[4/5] overflow-hidden lg:col-span-5">
            <PlaceholderImage
              alt="Elena working alongside a client on content"
              label="Working-together shot"
              tone="rose"
              className="h-full w-full"
            />
          </ScrollReveal>

          <div className="flex flex-col justify-between gap-10 lg:col-span-6 lg:col-start-7">
            <div className="flex flex-col gap-6">
              {mainOffer.body.map((paragraph, i) => (
                <ScrollReveal key={paragraph} delay={0.08 + i * 0.08}>
                  <p className="font-body text-base leading-relaxed text-bark/70 sm:text-lg">{paragraph}</p>
                </ScrollReveal>
              ))}
            </div>
            <ScrollReveal delay={0.2}>
              <Button href="#apply">{mainOffer.cta}</Button>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}

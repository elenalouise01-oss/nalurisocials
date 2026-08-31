import ImageCarousel from '@/components/ImageCarousel';
import ScrollReveal from '@/components/ScrollReveal';
import SectionLabel from '@/components/SectionLabel';
import { followUs } from '@/content/site';

export default function FollowUs() {
  return (
    <section className="relative overflow-hidden bg-porcelain py-20 sm:py-28">
      <div className="container-editorial flex flex-col items-center text-center">
        <SectionLabel numeral="✦" tone="sage">
          {followUs.label}
        </SectionLabel>
        <ScrollReveal>
          <h2 className="mt-4 font-body text-display-2 font-black uppercase leading-[0.95] tracking-tight text-bark">
            {followUs.headline}
          </h2>
        </ScrollReveal>
      </div>

      <ScrollReveal delay={0.1} className="mt-14 sm:mt-16">
        <ImageCarousel items={[...followUs.items]} />
      </ScrollReveal>
    </section>
  );
}

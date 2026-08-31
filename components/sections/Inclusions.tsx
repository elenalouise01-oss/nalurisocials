import ImageCarousel from '@/components/ImageCarousel';
import ScrollReveal from '@/components/ScrollReveal';
import SectionLabel from '@/components/SectionLabel';
import { inclusions } from '@/content/site';
import { staggerChildren, fadeUp } from '@/lib/motion';

const sizeCycle = [
  'text-2xl sm:text-3xl',
  'text-xl sm:text-2xl',
  'text-3xl sm:text-4xl',
  'text-lg sm:text-xl',
];

const colorCycle = ['text-bark', 'text-sage', 'text-bark', 'text-rose', 'text-bark'];

const galleryTones = ['rose', 'sage', 'porcelain', 'sand'] as const;
const galleryBadges = ['Find Your Voice', 'Build Confidence', 'Stay Consistent'];

export default function Inclusions() {
  const gallery = inclusions.items.slice(0, 8).map((item, i) => ({
    title: item,
    badge: galleryBadges[i % galleryBadges.length],
    tone: galleryTones[i % galleryTones.length],
  }));

  return (
    <section className="relative overflow-hidden bg-linen py-24 sm:py-32">
      <ScrollReveal className="mb-14 sm:mb-16">
        <ImageCarousel items={gallery} />
      </ScrollReveal>

      <div className="container-editorial">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <SectionLabel numeral="✦">{inclusions.label}</SectionLabel>
          <ScrollReveal>
            <p className="max-w-sm font-body text-sm text-bark/55 sm:text-right">{inclusions.intro}</p>
          </ScrollReveal>
        </div>

        <ScrollReveal
          variants={staggerChildren(0.04)}
          className="mt-14 flex flex-wrap items-baseline gap-x-3 gap-y-4 sm:mt-16 sm:gap-x-5"
        >
          {inclusions.items.map((item, i) => (
            <ScrollReveal
              key={item}
              variants={fadeUp}
              as="span"
              className={`font-display italic leading-none ${sizeCycle[i % sizeCycle.length]} ${colorCycle[i % colorCycle.length]}`}
            >
              {item}
              {i < inclusions.items.length - 1 && (
                <span className="ml-3 align-middle text-base not-italic text-bark/25 sm:ml-5">✦</span>
              )}
            </ScrollReveal>
          ))}
        </ScrollReveal>
      </div>
    </section>
  );
}

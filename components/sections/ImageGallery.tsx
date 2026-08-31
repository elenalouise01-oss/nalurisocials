import ImageCarousel from '@/components/ImageCarousel';
import ScrollReveal from '@/components/ScrollReveal';
import { inclusions } from '@/content/site';

const galleryTones = ['rose', 'sage', 'porcelain', 'sand'] as const;
const galleryBadges = ['Find Your Voice', 'Build Confidence', 'Stay Consistent'];

export default function ImageGallery() {
  const gallery = inclusions.items.slice(0, 8).map((item, i) => ({
    title: item,
    badge: galleryBadges[i % galleryBadges.length],
    tone: galleryTones[i % galleryTones.length],
  }));

  return (
    <section className="relative overflow-hidden bg-linen py-16 sm:py-20">
      <ScrollReveal>
        <ImageCarousel items={gallery} />
      </ScrollReveal>
    </section>
  );
}

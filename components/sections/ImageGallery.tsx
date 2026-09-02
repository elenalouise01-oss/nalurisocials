import ImageCarousel from '@/components/ImageCarousel';
import ScrollReveal from '@/components/ScrollReveal';
import { inclusions } from '@/content/site';

const galleryTones = ['rose', 'sage', 'porcelain', 'sand'] as const;
const galleryBadges = ['Find Your Voice', 'Build Confidence', 'Stay Consistent'];

// Real photos, keyed by the inclusions.items title they replace.
// Add an entry here as each photo comes in — falls back to the
// placeholder gradient for any title not listed.
const galleryPhotos: Record<string, string> = {
  'Voice & Story Discovery': '/images/gallery/storytelling-hooks.jpg',
  'Brand Voice & Messaging': '/images/gallery/brand-voice.jpg',
  'Content Strategy': '/images/gallery/content-strategy.jpg',
  'Content Pillars & Ideas': '/images/gallery/content-pillars-ideas.jpg',
  'Co-Creating Content': '/images/gallery/co-creating-content.jpg',
  'Storytelling & Hooks': '/images/gallery/voice-story-discovery.jpg',
  'Camera Confidence': '/images/gallery/camera-confidence.jpg',
  'Content Creation': '/images/gallery/content-creation.jpg',
};

export default function ImageGallery() {
  const gallery = inclusions.items.slice(0, 8).map((item, i) => ({
    title: item,
    badge: galleryBadges[i % galleryBadges.length],
    tone: galleryTones[i % galleryTones.length],
    src: galleryPhotos[item],
  }));

  return (
    <section className="relative overflow-hidden bg-linen py-16 sm:py-20">
      <ScrollReveal>
        <ImageCarousel items={gallery} />
      </ScrollReveal>
    </section>
  );
}

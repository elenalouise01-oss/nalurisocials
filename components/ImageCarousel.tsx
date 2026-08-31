import PlaceholderImage from '@/components/PlaceholderImage';

type Tone = 'sage' | 'porcelain' | 'rose' | 'bark' | 'sand';

type CarouselItem = {
  title: string;
  badge?: string;
  tone?: Tone;
};

type ImageCarouselProps = {
  items: CarouselItem[];
  speed?: 'slow' | 'normal';
};

const badgeTones = ['bg-zing-yellow text-bark', 'bg-sage text-cream', 'bg-rose text-bark', 'bg-zing-pink text-bark'];

function Card({ item, index }: { item: CarouselItem; index: number }) {
  return (
    <div className="relative aspect-[3/4] w-[78vw] max-w-xs flex-none overflow-hidden rounded-2xl sm:w-80">
      <PlaceholderImage
        alt={item.title}
        label={item.title}
        tone={item.tone ?? 'porcelain'}
        className="h-full w-full"
        compact
      />
      <div className="absolute inset-0 bg-gradient-to-t from-bark/80 via-bark/5 to-transparent" />
      <p className="absolute bottom-6 left-5 right-5 font-body text-lg font-black uppercase leading-tight text-cream">
        {item.title}
      </p>
      {item.badge && (
        <span
          className={`absolute left-5 top-5 -rotate-6 rounded-full px-3 py-1 font-body text-[0.65rem] font-bold uppercase tracking-wide shadow-sm ${badgeTones[index % badgeTones.length]}`}
        >
          {item.badge}
        </span>
      )}
    </div>
  );
}

export default function ImageCarousel({ items, speed = 'normal' }: ImageCarouselProps) {
  return (
    <div className="relative overflow-hidden no-scrollbar">
      <div
        className={`flex w-max gap-5 ${speed === 'slow' ? 'animate-marquee-slow' : 'animate-marquee'} motion-reduce:animate-none`}
      >
        {[0, 1].map((set) => (
          <div key={set} className="flex flex-none gap-5 pr-5">
            {items.map((item, i) => (
              <Card key={`${set}-${item.title}`} item={item} index={i} />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

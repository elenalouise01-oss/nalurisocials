'use client';

import { useRef } from 'react';
import ScrollReveal from '@/components/ScrollReveal';
import SectionLabel from '@/components/SectionLabel';
import { testimonials } from '@/content/site';

const cardTones = [
  'bg-sage text-cream',
  'bg-zing-yellow text-bark',
  'bg-rose text-bark',
  'bg-zing-pink text-bark',
];

function TestimonialCard({
  testimonial,
  tone,
}: {
  testimonial: (typeof testimonials)[number];
  tone: string;
}) {
  return (
    <div
      className={`flex h-[26rem] w-[85vw] flex-none snap-center flex-col justify-between rounded-2xl p-8 sm:h-[30rem] sm:w-[38vw] sm:p-10 lg:w-[26vw] ${tone}`}
    >
      <p className="font-display text-xl italic leading-snug sm:text-2xl">&quot;{testimonial.quote}&quot;</p>
      <div>
        <p className="font-display text-base font-semibold">{testimonial.name}</p>
        <p className="font-body text-xs uppercase tracking-widest2 opacity-60">{testimonial.role}</p>
        {testimonial.placeholder && (
          <p className="mt-3 font-body text-[0.62rem] font-semibold uppercase tracking-widest2 opacity-50">
            Placeholder — swap for a real testimonial
          </p>
        )}
      </div>
    </div>
  );
}

export default function SocialProof() {
  const trackRef = useRef<HTMLDivElement>(null);

  const scrollByCard = (direction: 1 | -1) => {
    const el = trackRef.current;
    if (!el) return;
    const card = el.querySelector('[data-card]') as HTMLElement | null;
    const step = (card?.offsetWidth ?? 320) + 20;
    el.scrollBy({ left: step * direction, behavior: 'smooth' });
  };

  return (
    <section className="relative overflow-hidden bg-bark py-24 text-cream sm:py-32">
      <div className="container-editorial flex flex-col items-center text-center">
        <SectionLabel numeral="✦" tone="cream">
          What Clients Say
        </SectionLabel>
        <ScrollReveal delay={0.06}>
          <p className="mx-auto mt-6 max-w-2xl font-display text-2xl italic leading-snug text-cream sm:text-3xl lg:text-4xl">
            It looks like content that finally sounds like the person behind it.
          </p>
        </ScrollReveal>

        <div className="mt-8 flex items-center gap-3">
          <button
            type="button"
            onClick={() => scrollByCard(-1)}
            aria-label="Previous testimonial"
            className="flex h-11 w-11 items-center justify-center rounded-full border border-cream/25 text-cream transition-colors hover:border-cream hover:bg-cream hover:text-bark"
          >
            ←
          </button>
          <button
            type="button"
            onClick={() => scrollByCard(1)}
            aria-label="Next testimonial"
            className="flex h-11 w-11 items-center justify-center rounded-full border border-cream/25 text-cream transition-colors hover:border-cream hover:bg-cream hover:text-bark"
          >
            →
          </button>
        </div>
      </div>

      <ScrollReveal delay={0.14} className="mt-14 sm:mt-16">
        <div
          ref={trackRef}
          className="flex snap-x snap-mandatory gap-5 overflow-x-auto px-6 pb-2 no-scrollbar sm:px-10 lg:px-16"
        >
          {testimonials.map((testimonial, i) => (
            <div key={testimonial.name + i} data-card>
              <TestimonialCard testimonial={testimonial} tone={cardTones[i % cardTones.length]} />
            </div>
          ))}
        </div>
      </ScrollReveal>
    </section>
  );
}

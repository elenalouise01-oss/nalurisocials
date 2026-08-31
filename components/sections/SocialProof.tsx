'use client';

import { useRef } from 'react';
import PlaceholderImage from '@/components/PlaceholderImage';
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
      className={`flex w-[85vw] max-w-sm flex-none snap-center flex-col justify-between gap-10 rounded-2xl p-8 sm:w-96 sm:p-10 ${tone}`}
    >
      <p className="font-display text-xl italic leading-snug sm:text-2xl">“{testimonial.quote}”</p>
      <div>
        <div className="flex items-center gap-3">
          <div className="relative h-12 w-12 shrink-0 overflow-hidden rounded-full">
            <PlaceholderImage alt={`${testimonial.name} portrait placeholder`} tone="porcelain" className="h-full w-full" compact />
          </div>
          <div>
            <p className="font-display text-base">{testimonial.name}</p>
            <p className="font-body text-xs uppercase tracking-widest2 opacity-60">{testimonial.role}</p>
          </div>
        </div>
        {testimonial.placeholder && (
          <p className="mt-4 font-body text-[0.62rem] font-semibold uppercase tracking-widest2 opacity-50">
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
      <div className="container-editorial flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <SectionLabel numeral="✦" tone="cream">
            What Clients Say
          </SectionLabel>
          <ScrollReveal delay={0.06}>
            <p className="mt-6 max-w-2xl font-display text-2xl italic leading-snug text-cream sm:text-3xl lg:text-4xl">
              It looks like content that finally sounds like the person behind it.
            </p>
          </ScrollReveal>
        </div>

        <div className="hidden shrink-0 items-center gap-3 sm:flex">
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
        <div ref={trackRef} className="container-editorial flex snap-x snap-mandatory gap-5 overflow-x-auto pb-2 no-scrollbar">
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

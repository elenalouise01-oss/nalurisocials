import PlaceholderImage from '@/components/PlaceholderImage';
import ScrollReveal from '@/components/ScrollReveal';
import SectionLabel from '@/components/SectionLabel';
import { testimonials } from '@/content/site';

export default function SocialProof() {
  return (
    <section className="relative overflow-hidden bg-bark py-24 text-cream sm:py-32">
      <div className="container-editorial">
        <SectionLabel numeral="✦" tone="cream">
          What Clients Say
        </SectionLabel>

        <div className="mt-14 flex flex-col divide-y divide-cream/15 sm:mt-16">
          {testimonials.map((testimonial, i) => (
            <ScrollReveal
              key={testimonial.name + i}
              className={`grid grid-cols-1 gap-8 py-12 sm:py-16 lg:grid-cols-12 lg:gap-6 ${
                i % 2 === 1 ? 'lg:text-right' : ''
              }`}
            >
              <div
                className={`flex items-center gap-4 lg:col-span-3 ${
                  i % 2 === 1 ? 'lg:order-2 lg:flex-row-reverse' : ''
                }`}
              >
                <div className="relative h-16 w-16 shrink-0 overflow-hidden rounded-full sm:h-20 sm:w-20">
                  <PlaceholderImage
                    alt={`${testimonial.name} portrait placeholder`}
                    tone={i % 2 === 0 ? 'sage' : 'rose'}
                    className="h-full w-full"
                    compact
                  />
                </div>
                <div>
                  <p className="font-display text-lg text-cream">{testimonial.name}</p>
                  <p className="font-body text-xs uppercase tracking-widest2 text-cream/50">{testimonial.role}</p>
                </div>
              </div>

              <div className={`lg:col-span-9 ${i % 2 === 1 ? 'lg:order-1' : ''}`}>
                <p className="font-display text-2xl italic leading-snug text-cream sm:text-3xl lg:text-4xl">
                  “{testimonial.quote}”
                </p>
                {testimonial.placeholder && (
                  <p className="mt-4 font-body text-[0.65rem] font-semibold uppercase tracking-widest2 text-rose/70">
                    Placeholder — swap for a real client testimonial
                  </p>
                )}
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}

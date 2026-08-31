import Button from '@/components/Button';
import ScrollReveal from '@/components/ScrollReveal';
import { finalCta } from '@/content/site';

export default function FinalCta() {
  return (
    <section id="apply" className="relative overflow-hidden bg-blush py-28 sm:py-40">
      <div className="pointer-events-none absolute -left-20 top-1/2 h-72 w-72 -translate-y-1/2 rounded-full bg-rose/40 blur-3xl sm:h-[28rem] sm:w-[28rem]" aria-hidden />
      <div className="pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full bg-sage/15 blur-3xl" aria-hidden />

      <div className="container-editorial relative flex flex-col items-center text-center">
        <ScrollReveal>
          <span className="font-hand text-2xl text-sage sm:text-3xl">let&rsquo;s make it happen</span>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <h2 className="mt-6 max-w-4xl font-display text-display-2 leading-[0.98] text-bark">
            {finalCta.headline}
          </h2>
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          <p className="mt-6 max-w-xl font-body text-base leading-relaxed text-bark/70 sm:text-lg">{finalCta.body}</p>
        </ScrollReveal>

        <ScrollReveal delay={0.3} className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <Button href="mailto:hello@nalurisocials.com?subject=Application%20%E2%80%94%20Naluri%20Socials">
            {finalCta.ctaPrimary}
          </Button>
          <Button href="https://instagram.com" variant="secondary">
            {finalCta.ctaSecondary}
          </Button>
        </ScrollReveal>

        <ScrollReveal delay={0.38}>
          <p className="mt-8 font-body text-xs uppercase tracking-widest2 text-bark/45">{finalCta.supporting}</p>
        </ScrollReveal>
      </div>
    </section>
  );
}

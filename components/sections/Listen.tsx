import ScrollReveal from '@/components/ScrollReveal';
import SectionLabel from '@/components/SectionLabel';
import { listen } from '@/content/site';

export default function Listen() {
  return (
    <section className="relative overflow-hidden bg-cream py-20 sm:py-28">
      <div className="container-editorial flex flex-col items-center text-center">
        <SectionLabel numeral="♪" tone="sage">
          {listen.label}
        </SectionLabel>
        <ScrollReveal>
          <h2 className="mt-4 font-body text-display-2 font-black uppercase leading-[0.95] tracking-tight text-bark">
            {listen.headline}
          </h2>
        </ScrollReveal>
        <ScrollReveal delay={0.1} className="mt-10 w-full max-w-xl">
          <iframe
            title={listen.title}
            src={listen.embedSrc}
            width="100%"
            height="352"
            style={{ borderRadius: 12, border: 0 }}
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
          />
        </ScrollReveal>
      </div>
    </section>
  );
}

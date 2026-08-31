import ScrollReveal from '@/components/ScrollReveal';
import SectionLabel from '@/components/SectionLabel';
import { transformation } from '@/content/site';

export default function Transformation() {
  return (
    <section className="relative bg-cream py-24 sm:py-32">
      <div className="container-editorial">
        <SectionLabel numeral="✦">{transformation.label}</SectionLabel>
        <ScrollReveal>
          <h2 className="mt-6 font-body text-display-2 font-black uppercase tracking-tight text-bark">
            {transformation.headline}
          </h2>
        </ScrollReveal>

        <div className="mt-16 divide-y divide-bark/10 border-t border-bark/10 sm:mt-20">
          {transformation.items.map((item, i) => (
            <ScrollReveal key={item.number} delay={Math.min(i * 0.06, 0.24)}>
              <div
                className={`group grid grid-cols-1 items-baseline gap-3 py-8 sm:grid-cols-12 sm:gap-6 sm:py-10 ${
                  i % 2 === 1 ? 'sm:text-right' : ''
                }`}
              >
                <span
                  className={`col-span-2 font-display text-5xl italic text-bark/15 transition-colors duration-500 group-hover:text-rose/60 sm:text-6xl ${
                    i % 2 === 1 ? 'sm:order-3 sm:text-right' : ''
                  }`}
                >
                  {item.number}
                </span>
                <h3
                  className={`col-span-4 font-display text-2xl text-bark sm:text-3xl lg:text-4xl ${
                    i % 2 === 1 ? 'sm:order-2' : ''
                  }`}
                >
                  {item.title}
                </h3>
                <p
                  className={`col-span-6 font-body text-sm text-bark/60 sm:text-base ${
                    i % 2 === 1 ? 'sm:order-1' : ''
                  }`}
                >
                  {item.body}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}

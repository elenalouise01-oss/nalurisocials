import type { ReactNode } from 'react';
import PlaceholderImage from '@/components/PlaceholderImage';
import ScrollReveal from '@/components/ScrollReveal';

type Tone = 'blush' | 'sage' | 'porcelain' | 'rose' | 'bark';

type OfferChapterProps = {
  number: string;
  tag: string;
  headline: string;
  includes: readonly string[];
  reverse?: boolean;
  imageTone?: Tone;
  children?: ReactNode;
};

export default function OfferChapter({
  number,
  tag,
  headline,
  includes,
  reverse = false,
  imageTone = 'blush',
  children,
}: OfferChapterProps) {
  return (
    <div className="relative py-16 sm:py-24">
      <div
        className={`grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-8 ${
          reverse ? 'lg:[direction:rtl]' : ''
        }`}
      >
        <div className={`relative lg:col-span-5 ${reverse ? 'lg:[direction:ltr]' : ''}`}>
          <ScrollReveal className="relative aspect-[4/5] overflow-hidden">
            <PlaceholderImage alt={`${tag} — Naluri Socials`} label={tag} tone={imageTone} className="h-full w-full" />
          </ScrollReveal>
        </div>

        <div className={`relative flex flex-col gap-8 lg:col-span-7 ${reverse ? 'lg:[direction:ltr]' : ''}`}>
          <span
            aria-hidden
            className="pointer-events-none absolute -top-10 right-0 select-none font-display text-[7rem] italic leading-none text-outline text-bark/10 sm:text-[9rem]"
          >
            {number}
          </span>

          <ScrollReveal className="relative flex flex-col gap-4">
            <p className="font-body text-[0.7rem] font-semibold uppercase tracking-widest2 text-sage">
              Chapter {number}
            </p>
            <h3 className="font-display text-display-3 leading-[1.02] text-bark">{tag}</h3>
          </ScrollReveal>

          <ScrollReveal delay={0.08} className="relative max-w-xl">
            <p className="font-body text-base leading-relaxed text-bark/70 sm:text-lg">{headline}</p>
          </ScrollReveal>

          {children}

          <ScrollReveal delay={0.16} className="relative flex flex-wrap gap-2 pt-2">
            {includes.map((item) => (
              <span
                key={item}
                className="rounded-full border border-bark/15 bg-cream/60 px-4 py-1.5 font-body text-xs text-bark/65 sm:text-[0.8rem]"
              >
                {item}
              </span>
            ))}
          </ScrollReveal>
        </div>
      </div>
    </div>
  );
}

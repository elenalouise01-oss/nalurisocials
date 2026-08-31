import OfferChapter from '@/components/OfferChapter';
import ScrollReveal from '@/components/ScrollReveal';
import SectionLabel from '@/components/SectionLabel';
import { chapters } from '@/content/site';

export default function HowWeWork() {
  const [findVoice, buildConfidence, stayConsistent] = chapters;

  return (
    <section className="relative overflow-hidden bg-cream py-24 sm:py-32">
      <div className="container-editorial">
        <SectionLabel numeral="✦">How We Work Together</SectionLabel>
        <ScrollReveal>
          <h2 className="mt-6 max-w-3xl font-display text-display-2 leading-[0.95] text-bark">
            Voice, then confidence,
            <br />
            <span className="italic text-sage">then consistency.</span>
          </h2>
        </ScrollReveal>

        <div className="mt-4 divide-y divide-bark/10 sm:mt-8">
          <OfferChapter
            number={findVoice.number}
            tag={findVoice.tag}
            headline={findVoice.headline}
            includes={findVoice.includes}
            imageTone="blush"
          >
            <ScrollReveal delay={0.12} className="relative flex flex-col gap-2 border-l-2 border-rose/50 pl-5">
              <p className="font-body text-xs font-semibold uppercase tracking-widest2 text-bark/40">
                {findVoice.clarityLabel}
              </p>
              <ul className="flex flex-col gap-1">
                {findVoice.clarityLines.map((line) => (
                  <li key={line} className="font-display text-lg italic text-bark/80 sm:text-xl">
                    {line}
                  </li>
                ))}
              </ul>
            </ScrollReveal>
          </OfferChapter>

          <OfferChapter
            number={buildConfidence.number}
            tag={buildConfidence.tag}
            headline={buildConfidence.headline}
            includes={buildConfidence.includes}
            reverse
            imageTone="rose"
          >
            <ScrollReveal delay={0.12} className="relative max-w-lg border-l-2 border-sage/50 pl-5">
              <p className="font-display text-xl italic leading-snug text-sage sm:text-2xl">
                {buildConfidence.statement}
              </p>
            </ScrollReveal>
          </OfferChapter>

          <OfferChapter
            number={stayConsistent.number}
            tag={stayConsistent.tag}
            headline={stayConsistent.headline}
            includes={stayConsistent.includes}
            imageTone="sage"
          >
            <ScrollReveal delay={0.1} className="relative flex flex-col gap-6">
              <p className="font-body text-base leading-relaxed text-bark/70 sm:text-lg">{stayConsistent.body}</p>

              <div className="flex flex-col gap-2 rounded-[2px] border border-bark/15 bg-porcelain/60 p-5 sm:p-6">
                <p className="font-body text-xs font-semibold uppercase tracking-widest2 text-bark/45">
                  {stayConsistent.automation.label}
                </p>
                <p className="font-display text-2xl italic text-bark sm:text-3xl">{stayConsistent.automation.statement}</p>
              </div>

              <p className="font-body text-sm leading-relaxed text-bark/60 sm:text-base">{stayConsistent.goal}</p>

              <div>
                <p className="font-body text-xs font-semibold uppercase tracking-widest2 text-bark/45">
                  {stayConsistent.builtAroundLabel}
                </p>
                <div className="mt-2 flex flex-wrap gap-x-2 gap-y-1">
                  {stayConsistent.builtAround.map((word, i) => (
                    <span key={word} className="font-display text-lg italic text-sage sm:text-xl">
                      {word}
                      {i < stayConsistent.builtAround.length - 1 && <span className="mx-1 text-bark/30">·</span>}
                    </span>
                  ))}
                </div>
              </div>

              <p className="font-hand text-xl text-bark/50 sm:text-2xl">{stayConsistent.caveat}</p>

              <p className="font-display text-2xl italic text-bark sm:text-3xl">{stayConsistent.statement}</p>
            </ScrollReveal>
          </OfferChapter>
        </div>
      </div>
    </section>
  );
}

'use client';

import { motion } from 'framer-motion';
import Button from '@/components/Button';
import Marquee from '@/components/Marquee';
import PlaceholderImage from '@/components/PlaceholderImage';
import { hero } from '@/content/site';
import { EASE } from '@/lib/motion';
import { useReducedMotion } from '@/lib/useReducedMotion';

export default function Hero() {
  const reduced = useReducedMotion();

  // Target values never change based on `reduced` — only the transition
  // timing does — so a reduced-motion state flip mid-animation can never
  // strand an element short of its final, visible state.
  const t = (duration: number, delay = 0) => ({
    duration: reduced ? 0.01 : duration,
    delay: reduced ? 0 : delay,
    ease: EASE,
  });

  return (
    <section id="top" className="relative overflow-hidden bg-cream pt-28 sm:pt-32">
      <div className="pointer-events-none absolute -right-24 top-16 h-64 w-64 rounded-full bg-blush/60 blur-3xl sm:h-96 sm:w-96" aria-hidden />
      <div className="pointer-events-none absolute -left-16 bottom-0 h-48 w-48 rounded-full bg-sage/15 blur-3xl" aria-hidden />

      <div className="container-editorial relative">
        <motion.p
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={t(0.7)}
          className="font-body text-[0.72rem] font-semibold uppercase tracking-widest2 text-sage"
        >
          {hero.eyebrow}
        </motion.p>

        <div className="mt-6 grid grid-cols-1 gap-6 lg:grid-cols-12 lg:items-end lg:gap-4">
          <motion.h1
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={t(0.85, 0.08)}
            className="col-span-12 font-display text-display-1 text-bark lg:col-span-9"
          >
            {hero.headlineLines[0]}
            <br />
            <span className="italic text-sage">{hero.headlineLines[1]}</span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={t(0.7, 0.3)}
            className="col-span-12 flex flex-col gap-6 lg:col-span-3 lg:pb-4"
          >
            <p className="max-w-sm font-body text-base leading-relaxed text-bark/75 sm:text-lg">{hero.sub}</p>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={t(0.7, 0.42)}
          className="mt-10 grid grid-cols-1 gap-8 border-t border-bark/10 pt-8 sm:grid-cols-[1fr_auto] sm:items-center"
        >
          <p className="max-w-md font-body text-sm text-bark/60 sm:text-[0.95rem]">{hero.audience}</p>
          <div className="flex flex-wrap items-center gap-4">
            <Button href="#apply">{hero.ctaPrimary}</Button>
            <Button href="#work-with-me" variant="ghost">
              {hero.ctaSecondary}
            </Button>
          </div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={t(1, 0.6)}
        className="relative mt-16 grid grid-cols-1 gap-0 sm:mt-20 lg:grid-cols-12"
      >
        <div className="relative col-span-12 aspect-[16/10] overflow-hidden sm:aspect-[21/9] lg:col-span-8 lg:col-start-1">
          <PlaceholderImage
            alt="Elena filming content — behind the scenes"
            label="Hero editorial image"
            tone="blush"
            className="h-full w-full"
            priority
          />
        </div>
        <div className="relative col-span-12 hidden aspect-square overflow-hidden lg:col-span-4 lg:block">
          <PlaceholderImage alt="Naluri content details" label="Detail shot" tone="sage" className="h-full w-full" />
        </div>
      </motion.div>

      <div className="mt-12 border-y border-bark/10 bg-cream py-4 sm:mt-16">
        <Marquee
          items={hero.marquee}
          textClassName="font-display italic text-3xl text-bark/25 sm:text-4xl"
        />
      </div>
    </section>
  );
}

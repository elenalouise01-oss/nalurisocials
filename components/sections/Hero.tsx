'use client';

import { motion } from 'framer-motion';
import Button from '@/components/Button';
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
    <section id="top" className="relative">
      {/* Pinned full-bleed photo/video — stays in place while the next section's
          solid background scrolls up over it. */}
      <div className="fixed inset-0 -z-10 h-screen w-full">
        <div className="absolute inset-0">
          {hero.videoSrc ? (
            <video
              className="h-full w-full object-cover"
              autoPlay
              muted
              loop
              playsInline
              preload="auto"
            >
              <source src={hero.videoSrc.replace(/\.mp4$/, '.webm')} type="video/webm" />
              <source src={hero.videoSrc} type="video/mp4" />
            </video>
          ) : (
            <PlaceholderImage
              alt="Elena filming content — behind the scenes"
              label="Hero editorial image — full-bleed"
              tone="sage"
              className="h-full w-full"
              priority
              compact
            />
          )}
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-bark/45 via-bark/10 to-bark/25" />

        <div className="relative z-10 flex h-full flex-col items-center justify-center px-6 pt-[16vh] text-center sm:pt-[20vh]">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={t(0.7)}
            className="font-body text-[0.72rem] font-semibold uppercase tracking-widest2 text-cream/80"
          >
            {hero.eyebrow}
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={t(0.85, 0.08)}
            className="mt-6 max-w-3xl font-body text-display-2 font-black uppercase leading-[0.95] tracking-tight text-cream"
          >
            {hero.headlineLines[0]} {hero.headlineLines[1]}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={t(0.7, 0.3)}
            className="mt-7 max-w-xl font-body text-base leading-relaxed text-cream/85 sm:text-lg"
          >
            {hero.sub}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={t(0.7, 0.42)}
            className="mt-9 flex flex-wrap items-center justify-center gap-4"
          >
            <Button href="#apply" variant="pastel" tone="yellow">
              {hero.ctaPrimary}
            </Button>
            <Button href="#work-with-me" variant="pastel" tone="sage">
              {hero.ctaSecondary}
            </Button>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={t(0.7, 0.55)}
            className="mt-8 max-w-sm font-body text-xs text-cream/60 sm:text-sm"
          >
            {hero.audience}
          </motion.p>
        </div>
      </div>

      {/* Spacer reserving the pinned photo's height in normal document flow. */}
      <div className="h-screen w-full" aria-hidden />
    </section>
  );
}

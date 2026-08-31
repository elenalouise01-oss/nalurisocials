'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { AnimatePresence, motion } from 'framer-motion';
import { nav } from '@/content/site';

const logoClasses =
  'font-logo shrink-0 rounded-full bg-cream px-4 py-2 text-lg lowercase tracking-wide text-rose sm:text-xl';
const ctaClasses =
  'shrink-0 rounded-full bg-zing-yellow px-5 py-2.5 font-body text-[0.68rem] font-semibold uppercase tracking-widest2 text-bark transition-colors duration-300 hover:bg-cream sm:px-6 sm:text-[0.7rem]';

export default function Navigation() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div className="container-editorial flex justify-center pt-4 sm:pt-6">
        <div className="w-full max-w-4xl rounded-full bg-bark/95 py-2 pl-2 pr-2 shadow-[0_8px_30px_rgba(59,45,14,0.25)] backdrop-blur-md sm:pl-3">
          {/* Mobile: hamburger — centered logo — CTA */}
          <div className="grid grid-cols-3 items-center md:hidden">
            <button
              type="button"
              onClick={() => setOpen((o) => !o)}
              aria-expanded={open}
              aria-label={open ? 'Close menu' : 'Open menu'}
              className="relative z-50 flex h-9 w-9 flex-col items-center justify-center justify-self-start gap-[5px]"
            >
              <span
                className={`block h-px w-5 bg-cream transition-transform duration-300 ${open ? 'translate-y-[3px] rotate-45' : ''}`}
              />
              <span
                className={`block h-px w-5 bg-cream transition-transform duration-300 ${open ? '-translate-y-[3px] -rotate-45' : ''}`}
              />
            </button>

            <Link href="#top" className={`${logoClasses} justify-self-center`}>
              {nav.logo}
            </Link>

            <Link href="#apply" className={`${ctaClasses} justify-self-end`}>
              {nav.cta}
            </Link>
          </div>

          {/* Desktop: logo — links — CTA */}
          <div className="hidden items-center justify-between gap-4 md:flex">
            <Link href="#top" className={logoClasses}>
              {nav.logo}
            </Link>

            <nav className="flex items-center gap-7">
              {nav.links.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="font-body text-[0.72rem] font-semibold uppercase tracking-widest2 text-cream/85 transition-colors hover:text-zing-yellow"
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            <Link href="#apply" className={ctaClasses}>
              {nav.cta}
            </Link>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="container-editorial mt-2 flex justify-center md:hidden"
          >
            <nav className="flex w-full max-w-4xl flex-col gap-5 rounded-3xl bg-bark/95 p-6 shadow-[0_8px_30px_rgba(59,45,14,0.25)] backdrop-blur-md">
              {nav.links.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="font-display text-2xl text-cream"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

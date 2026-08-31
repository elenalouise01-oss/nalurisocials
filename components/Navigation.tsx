'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { AnimatePresence, motion } from 'framer-motion';
import { nav } from '@/content/site';

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ease-editorial ${
        scrolled || open ? 'bg-cream/90 backdrop-blur-md shadow-[0_1px_0_rgba(59,45,14,0.08)]' : 'bg-transparent'
      }`}
    >
      <div className="container-editorial flex h-20 items-center justify-between sm:h-24">
        <Link href="#top" className="font-logo text-2xl tracking-wide text-bark sm:text-3xl">
          {nav.logo}
        </Link>

        <nav className="hidden items-center gap-10 md:flex">
          {nav.links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="font-body text-[0.72rem] font-semibold uppercase tracking-widest2 text-bark/80 transition-colors hover:text-sage"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="#apply"
            className="rounded-full bg-bark px-6 py-2.5 font-body text-[0.7rem] font-semibold uppercase tracking-widest2 text-cream transition-colors duration-300 hover:bg-sage"
          >
            {nav.cta}
          </Link>
        </nav>

        <button
          type="button"
          onClick={() => setOpen((o) => !o)}
          aria-expanded={open}
          aria-label={open ? 'Close menu' : 'Open menu'}
          className="relative z-50 flex h-10 w-10 flex-col items-center justify-center gap-[5px] md:hidden"
        >
          <span
            className={`block h-px w-6 bg-bark transition-transform duration-300 ${open ? 'translate-y-[3px] rotate-45' : ''}`}
          />
          <span
            className={`block h-px w-6 bg-bark transition-transform duration-300 ${open ? '-translate-y-[3px] -rotate-45' : ''}`}
          />
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden bg-cream md:hidden"
          >
            <nav className="container-editorial flex flex-col gap-6 pb-10 pt-4">
              {nav.links.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="font-display text-3xl text-bark"
                >
                  {link.label}
                </Link>
              ))}
              <Link
                href="#apply"
                onClick={() => setOpen(false)}
                className="mt-2 inline-flex w-fit items-center rounded-full bg-bark px-7 py-3 font-body text-[0.72rem] font-semibold uppercase tracking-widest2 text-cream"
              >
                {nav.cta}
              </Link>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

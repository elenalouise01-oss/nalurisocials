import Link from 'next/link';
import Button from '@/components/Button';
import { footer, nav } from '@/content/site';

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-bark text-cream">
      <div className="container-editorial flex flex-col gap-16 pt-20 sm:pt-24">
        <div className="flex flex-col items-start justify-between gap-10 border-b border-cream/15 pb-16 sm:flex-row sm:items-end">
          <div>
            <p className="font-hand text-2xl text-zing-yellow">still here?</p>
            <h2 className="mt-2 font-display text-4xl leading-[0.95] sm:text-6xl lg:text-7xl">
              {footer.tagline}
            </h2>
          </div>
          <Button href="#apply" variant="pastel" tone="pink" className="shrink-0">
            {footer.cta}
          </Button>
        </div>

        <div className="grid grid-cols-2 gap-10 sm:grid-cols-4">
          <div>
            <p className="font-logo italic lowercase text-2xl text-rose">{nav.logo}</p>
          </div>
          <div className="flex flex-col gap-3">
            <p className="font-body text-[0.65rem] font-semibold uppercase tracking-widest2 text-cream/50">Explore</p>
            {footer.links.map((link) => (
              <Link key={link.href} href={link.href} className="font-body text-sm text-cream/80 transition-colors hover:text-rose">
                {link.label}
              </Link>
            ))}
          </div>
          <div className="flex flex-col gap-3">
            <p className="font-body text-[0.65rem] font-semibold uppercase tracking-widest2 text-cream/50">Follow</p>
            {footer.socials.map((social) => (
              <a
                key={social.href}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="font-body text-sm text-cream/80 transition-colors hover:text-rose"
              >
                {social.label}
              </a>
            ))}
          </div>
          <div className="flex flex-col gap-3">
            <p className="font-body text-[0.65rem] font-semibold uppercase tracking-widest2 text-cream/50">Say hi</p>
            <a href="mailto:hello@nalurisocials.com" className="font-body text-sm text-cream/80 transition-colors hover:text-rose">
              hello@nalurisocials.com
            </a>
          </div>
        </div>
      </div>

      <div className="relative mt-4 select-none overflow-hidden">
        <p
          aria-hidden
          className="font-logo italic lowercase leading-none text-cream"
          style={{ fontSize: 'clamp(5rem, 21vw, 15rem)' }}
        >
          {nav.logo}
        </p>
        <p className="absolute right-6 top-6 hidden font-display text-sm italic text-cream/50 sm:block sm:right-10 sm:top-10 sm:text-base">
          {nav.tagline}
        </p>
      </div>

      <div className="container-editorial flex flex-col items-start justify-between gap-3 border-t border-cream/15 py-6 sm:flex-row sm:items-center">
        <p className="font-body text-xs text-cream/40">{footer.legal}</p>
        <div className="flex items-center gap-5">
          {footer.socials.map((social) => (
            <a
              key={social.href}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="font-body text-xs uppercase tracking-widest2 text-cream/50 transition-colors hover:text-rose"
            >
              {social.label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}

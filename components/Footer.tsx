import Link from 'next/link';
import Button from '@/components/Button';
import { footer, nav } from '@/content/site';

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-bark text-cream">
      <div className="container-editorial flex flex-col gap-16 py-20 sm:py-24">
        <div className="flex flex-col items-start justify-between gap-10 border-b border-cream/15 pb-16 sm:flex-row sm:items-end">
          <div>
            <p className="font-hand text-2xl text-zing-yellow">still here?</p>
            <h2 className="mt-2 font-display text-4xl leading-[0.95] sm:text-6xl lg:text-7xl">
              {footer.tagline}
            </h2>
          </div>
          <Button href="#apply" variant="secondary" className="!border-cream/30 !text-cream hover:!bg-cream hover:!text-bark shrink-0">
            {footer.cta}
          </Button>
        </div>

        <div className="grid grid-cols-2 gap-10 sm:grid-cols-4">
          <div>
            <p className="font-logo text-2xl">{nav.logo}</p>
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

        <p className="font-body text-xs text-cream/40">{footer.legal}</p>
      </div>
    </footer>
  );
}

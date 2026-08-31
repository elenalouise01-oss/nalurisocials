import { footer, nav } from '@/content/site';

const socialIcons: Record<string, React.ReactNode> = {
  Instagram: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
  ),
  TikTok: (
    <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
      <path d="M16.6 5.82c-.8-.87-1.24-2.01-1.24-3.19h-3.05v13.42c0 1.53-1.25 2.78-2.78 2.78s-2.78-1.25-2.78-2.78 1.25-2.78 2.78-2.78c.29 0 .56.04.82.12v-3.1c-.27-.04-.54-.06-.82-.06-3.24 0-5.86 2.62-5.86 5.86s2.62 5.86 5.86 5.86 5.86-2.62 5.86-5.86V9.01a8.16 8.16 0 0 0 4.71 1.5V7.46c-1.24 0-2.39-.42-3.3-1.13-.06-.05-.13-.1-.2-.16z" />
    </svg>
  ),
};

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-porcelain">
      <div className="container-editorial flex flex-col items-center gap-9 pt-24 text-center sm:gap-10 sm:pt-32">
        <h2 className="max-w-2xl font-display text-3xl italic leading-tight text-bark sm:text-5xl">
          {footer.tagline}
        </h2>

        <div className="flex w-full max-w-lg items-center justify-between gap-2 rounded-full bg-cream py-2 pl-6 pr-2 shadow-[0_8px_30px_rgba(59,45,14,0.08)]">
          <span className="font-body text-sm text-bark/50 sm:text-base">{footer.ctaLabel}</span>
          <a
            href="#apply"
            className="shrink-0 rounded-full bg-sage px-6 py-3 font-body text-[0.68rem] font-semibold uppercase tracking-widest2 text-cream transition-colors duration-300 hover:bg-bark sm:px-7"
          >
            {footer.cta}
          </a>
        </div>
      </div>

      <div className="relative mt-16 select-none overflow-hidden sm:mt-20">
        <p
          aria-hidden
          className="-mx-1 font-logo lowercase leading-none text-bark"
          style={{ fontSize: 'clamp(6rem, 24vw, 18rem)' }}
        >
          {nav.logo}
        </p>
      </div>

      <div className="container-editorial flex flex-col items-center justify-between gap-3 border-t border-bark/10 py-6 sm:flex-row">
        <p className="font-body text-xs text-bark/45">{footer.legal}</p>
        <div className="flex items-center gap-3">
          {footer.socials.map((social) => (
            <a
              key={social.href}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={social.label}
              className="flex h-9 w-9 items-center justify-center rounded-full bg-bark/5 text-bark transition-colors hover:bg-bark hover:text-cream"
            >
              {socialIcons[social.label]}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}

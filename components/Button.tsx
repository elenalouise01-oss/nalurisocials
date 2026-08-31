import Link from 'next/link';
import type { ReactNode } from 'react';

type Tone = 'yellow' | 'sage' | 'rose' | 'pink';

type ButtonProps = {
  href: string;
  children: ReactNode;
  variant?: 'primary' | 'secondary' | 'ghost' | 'pastel';
  tone?: Tone;
  className?: string;
};

const base =
  'group relative inline-flex items-center justify-center gap-2 rounded-full px-7 py-3.5 text-[0.72rem] font-body font-semibold uppercase tracking-widest2 transition-all duration-500 ease-editorial focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-bark';

const variants: Record<'primary' | 'secondary' | 'ghost', string> = {
  primary: 'bg-bark text-cream hover:bg-sage active:scale-[0.97]',
  secondary:
    'border border-bark/30 text-bark hover:border-bark hover:bg-bark hover:text-cream active:scale-[0.97]',
  ghost: 'text-bark underline decoration-1 underline-offset-8 hover:decoration-sage hover:text-sage',
};

// Naluri's own pastel accents, standing in for RIPE's rotating solid pill
// colors — never RIPE's actual yellow/pink.
const pastelTones: Record<Tone, string> = {
  yellow: 'bg-zing-yellow text-bark hover:bg-bark hover:text-zing-yellow active:scale-[0.97]',
  sage: 'bg-sage text-cream hover:bg-bark hover:text-sage active:scale-[0.97]',
  rose: 'bg-rose text-bark hover:bg-bark hover:text-rose active:scale-[0.97]',
  pink: 'bg-zing-pink text-bark hover:bg-bark hover:text-zing-pink active:scale-[0.97]',
};

export default function Button({ href, children, variant = 'primary', tone, className = '' }: ButtonProps) {
  const isExternal = href.startsWith('http') || href.startsWith('mailto');
  const content = (
    <span className="relative z-10 flex items-center gap-2">
      {children}
      <span aria-hidden className="inline-block transition-transform duration-500 ease-editorial group-hover:translate-x-1">
        →
      </span>
    </span>
  );

  const fill = variant === 'pastel' ? pastelTones[tone ?? 'yellow'] : variants[variant];
  const classes = `${base} ${fill} ${className}`;

  if (isExternal) {
    return (
      <a href={href} className={classes} target="_blank" rel="noopener noreferrer">
        {content}
      </a>
    );
  }

  return (
    <Link href={href} className={classes}>
      {content}
    </Link>
  );
}

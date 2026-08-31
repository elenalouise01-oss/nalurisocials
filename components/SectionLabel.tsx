type SectionLabelProps = {
  children: React.ReactNode;
  numeral?: string;
  tone?: 'bark' | 'cream' | 'sage';
  className?: string;
};

const toneClasses: Record<NonNullable<SectionLabelProps['tone']>, string> = {
  bark: 'text-bark/70',
  cream: 'text-cream/70',
  sage: 'text-sage',
};

export default function SectionLabel({ children, numeral, tone = 'bark', className = '' }: SectionLabelProps) {
  return (
    <div className={`flex items-center gap-3 font-body text-[0.7rem] font-semibold uppercase tracking-widest2 ${toneClasses[tone]} ${className}`}>
      {numeral && <span className="font-display italic text-base normal-case tracking-normal text-rose">{numeral}</span>}
      <span className="h-px w-8 bg-current opacity-40" aria-hidden />
      {children}
    </div>
  );
}

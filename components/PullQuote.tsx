import type { ReactNode } from 'react';

type PullQuoteProps = {
  children: ReactNode;
  className?: string;
};

export default function PullQuote({ children, className = '' }: PullQuoteProps) {
  return (
    <p className={`font-display text-3xl italic leading-tight text-sage sm:text-4xl lg:text-5xl ${className}`}>
      “{children}”
    </p>
  );
}

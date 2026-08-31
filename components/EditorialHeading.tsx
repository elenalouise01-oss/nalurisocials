import type { ElementType, ReactNode } from 'react';

type Scale = 1 | 2 | 3 | 4;

type EditorialHeadingProps = {
  children: ReactNode;
  as?: ElementType;
  scale?: Scale;
  italic?: boolean;
  className?: string;
};

const scaleClasses: Record<Scale, string> = {
  1: 'text-display-1 leading-[0.92]',
  2: 'text-display-2 leading-[0.95]',
  3: 'text-display-3 leading-[1.02]',
  4: 'text-display-4 leading-[1.05]',
};

export default function EditorialHeading({
  children,
  as: Component = 'h2',
  scale = 2,
  italic = false,
  className = '',
}: EditorialHeadingProps) {
  return (
    <Component className={`font-display text-bark ${scaleClasses[scale]} ${italic ? 'italic' : ''} ${className}`}>
      {children}
    </Component>
  );
}

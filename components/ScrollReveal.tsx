'use client';

import { motion, type Variants } from 'framer-motion';
import type { ReactNode } from 'react';
import { EASE, fadeUp, viewportOnce } from '@/lib/motion';
import { useReducedMotion } from '@/lib/useReducedMotion';

type ScrollRevealProps = {
  children: ReactNode;
  className?: string;
  variants?: Variants;
  delay?: number;
  as?: 'div' | 'span';
};

export default function ScrollReveal({
  children,
  className,
  variants = fadeUp,
  delay = 0,
  as = 'div',
}: ScrollRevealProps) {
  const reduced = useReducedMotion();
  const MotionTag = as === 'span' ? motion.span : motion.div;
  const show = variants.show;

  // whileInView stays active unconditionally so content is guaranteed to
  // reveal once scrolled into view — reduced motion only shortens the
  // transition rather than gating visibility, so a mistimed preference
  // check can never leave content permanently hidden.
  const appliedVariants: Variants = {
    hidden: variants.hidden,
    show: {
      ...(typeof show === 'object' ? show : {}),
      transition: {
        ...(typeof show === 'object' ? (show as any).transition : {}),
        ease: EASE,
        delay: reduced ? 0 : delay,
        ...(reduced ? { duration: 0.01 } : {}),
      },
    },
  };

  return (
    <MotionTag
      className={className}
      initial="hidden"
      whileInView="show"
      viewport={viewportOnce}
      variants={appliedVariants}
    >
      {children}
    </MotionTag>
  );
}

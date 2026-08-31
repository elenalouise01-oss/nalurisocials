'use client';

import { useEffect, useState } from 'react';

// framer-motion's own useReducedMotion() reads a module-level singleton that
// isn't reliably reset across Next.js's server/client module graphs, which can
// leave it permanently reporting `null`. This reads the media query directly.
function getInitial(): boolean {
  if (typeof window === 'undefined') return false;
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
}

export function useReducedMotion(): boolean {
  // Lazy-initialized so the CLIENT's first render (hydration) already
  // reflects the real preference — waiting on useEffect alone means the
  // first render always assumes motion is fine, which can let an in-flight
  // framer-motion animation lock in the "full duration" timing before the
  // corrected value ever has a chance to apply.
  const [reduced, setReduced] = useState(getInitial);

  useEffect(() => {
    const query = window.matchMedia('(prefers-reduced-motion: reduce)');
    const onChange = () => setReduced(query.matches);
    query.addEventListener('change', onChange);
    return () => query.removeEventListener('change', onChange);
  }, []);

  return reduced;
}

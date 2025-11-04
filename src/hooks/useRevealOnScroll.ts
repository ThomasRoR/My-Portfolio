import { useEffect, useRef, useState } from 'react';

interface RevealOptions extends IntersectionObserverInit {
  /** Minimum delay in milliseconds before flagging the section visible once intersecting */
  revealDelay?: number;
}

export function useRevealOnScroll(options?: RevealOptions) {
  const revealDelay = options?.revealDelay ?? 0;
  const threshold = options?.threshold ?? 0.2;
  const root = options?.root ?? null;
  const rootMargin = options?.rootMargin;
  const sectionRef = useRef<HTMLElement | null>(null);
  const [hasRevealed, setHasRevealed] = useState(false);

  useEffect(() => {
    const node = sectionRef.current;
    if (!node || hasRevealed) {
      return;
    }

    let timeoutId: number | null = null;

    const observer = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting) {
        return;
      }

      if (revealDelay > 0) {
        timeoutId = window.setTimeout(() => {
          setHasRevealed(true);
        }, revealDelay);
      } else {
        setHasRevealed(true);
      }

      observer.unobserve(entry.target);
  }, { threshold, root, rootMargin });

    observer.observe(node);

    return () => {
      observer.disconnect();
      if (timeoutId !== null) {
        window.clearTimeout(timeoutId);
      }
    };
  }, [hasRevealed, revealDelay, threshold, root, rootMargin]);

  return { ref: sectionRef, hasRevealed };
}

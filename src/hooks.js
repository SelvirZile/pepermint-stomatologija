import { useEffect, useState } from 'react';

/** SSR-safe scroll state: which section is active + whether the page is scrolled. */
export function useScrollSpy(ids, offset = 120) {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState('');

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 8);
      const mark = y + offset;
      let found = '';
      for (const id of ids) {
        const el = document.getElementById(id);
        if (el && el.offsetTop <= mark) found = id;
      }
      setActive(found);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, [ids, offset]);

  return { scrolled, active };
}

/** Locks body scroll while a modal is open. */
export function useBodyLock(locked) {
  useEffect(() => {
    if (!locked) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => { document.body.style.overflow = prev; };
  }, [locked]);
}

/** Horizontal swipe for the services carousel. */
export function useSwipe(onLeft, onRight, threshold = 40) {
  let startX = null;
  return {
    onTouchStart: (e) => { startX = e.touches?.[0]?.clientX ?? null; },
    onTouchEnd: (e) => {
      const x = e.changedTouches?.[0]?.clientX;
      if (startX == null || x == null) return;
      const dx = x - startX;
      startX = null;
      if (Math.abs(dx) < threshold) return;
      dx < 0 ? onLeft() : onRight();
    }
  };
}

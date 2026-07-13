"use client";

import { RefObject, useEffect, useMemo, useState, useSyncExternalStore } from "react";

export function useReducedMotion() {
  return useSyncExternalStore(
    (onStoreChange) => {
      const query = window.matchMedia("(prefers-reduced-motion: reduce)");
      query.addEventListener("change", onStoreChange);

      return () => query.removeEventListener("change", onStoreChange);
    },
    () => window.matchMedia("(prefers-reduced-motion: reduce)").matches,
    () => false,
  );
}

export function useInViewOnce<T extends Element>(
  ref: RefObject<T | null>,
  options?: IntersectionObserverInit,
) {
  const [inView, setInView] = useState(false);
  const reducedMotion = useReducedMotion();
  const observerOptions = useMemo(
    () => ({
      rootMargin: "0px 0px -12% 0px",
      threshold: 0.12,
      ...options,
    }),
    [options],
  );

  useEffect(() => {
    const element = ref.current;

    if (!element || inView || reducedMotion) {
      return;
    }

    const observer = new IntersectionObserver(([entry]) => {
      if (entry?.isIntersecting) {
        setInView(true);
        observer.disconnect();
      }
    }, observerOptions);

    observer.observe(element);

    return () => observer.disconnect();
  }, [inView, observerOptions, reducedMotion, ref]);

  return { inView: inView || reducedMotion, reducedMotion };
}

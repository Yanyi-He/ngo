"use client";

import { ReactNode, useEffect, useRef } from "react";
import { useReducedMotion } from "@/components/motion/use-in-view-once";

type ParallaxVisualProps = {
  children: ReactNode;
  className?: string;
  strength?: number;
};

export function ParallaxVisual({
  children,
  className = "",
  strength = 28,
}: ParallaxVisualProps) {
  const ref = useRef<HTMLDivElement | null>(null);
  const reducedMotion = useReducedMotion();

  useEffect(() => {
    const element = ref.current;
    const supportsMotion = !reducedMotion && window.matchMedia("(min-width: 768px)").matches;

    if (!element || !supportsMotion) {
      return;
    }

    let frame = 0;

    const update = () => {
      frame = 0;
      const rect = element.getBoundingClientRect();
      const viewportCenter = window.innerHeight / 2;
      const elementCenter = rect.top + rect.height / 2;
      const progress = Math.max(-1, Math.min(1, (viewportCenter - elementCenter) / window.innerHeight));
      element.style.setProperty("--parallax-y", `${Math.round(progress * strength)}px`);
    };

    const requestUpdate = () => {
      if (!frame) {
        frame = requestAnimationFrame(update);
      }
    };

    update();
    window.addEventListener("scroll", requestUpdate, { passive: true });
    window.addEventListener("resize", requestUpdate);

    return () => {
      window.removeEventListener("scroll", requestUpdate);
      window.removeEventListener("resize", requestUpdate);
      if (frame) {
        cancelAnimationFrame(frame);
      }
    };
  }, [reducedMotion, strength]);

  return (
    <div ref={ref} className={`parallax-visual ${className}`}>
      {children}
    </div>
  );
}

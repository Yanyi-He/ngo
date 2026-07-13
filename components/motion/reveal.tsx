"use client";

import { CSSProperties, ElementType, ReactNode, useRef } from "react";
import { useEnhancedMotion } from "@/components/motion/use-enhanced-motion";
import { useInViewOnce } from "@/components/motion/use-in-view-once";

type RevealDirection = "up" | "down" | "left" | "right" | "none";

type RevealProps<T extends ElementType = "div"> = {
  as?: T;
  children: ReactNode;
  className?: string;
  direction?: RevealDirection;
  delay?: number;
  id?: string;
};

export function Reveal<T extends ElementType = "div">({
  as,
  children,
  className = "",
  direction = "up",
  delay = 0,
  id,
}: RevealProps<T>) {
  const ref = useRef<HTMLDivElement | null>(null);
  const { inView } = useInViewOnce(ref);
  const enhanced = useEnhancedMotion();
  void as;

  return (
    <div
      id={id}
      ref={ref}
      data-reveal-state={!enhanced || inView ? "visible" : "hidden"}
      data-motion-enhanced={enhanced ? "true" : "false"}
      data-reveal-direction={direction}
      className={`motion-reveal ${className}`}
      style={{ "--reveal-delay": `${delay}s` } as CSSProperties}
    >
      {children}
    </div>
  );
}

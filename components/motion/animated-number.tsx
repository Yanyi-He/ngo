"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "@/lib/motion";
import { useInViewOnce } from "@/components/motion/use-in-view-once";

type AnimatedNumberProps = {
  value: number;
  suffix?: string;
  label: string;
  className?: string;
};

export function AnimatedNumber({
  value,
  suffix = "",
  label,
  className = "",
}: AnimatedNumberProps) {
  const ref = useRef<HTMLSpanElement | null>(null);
  const { inView, reducedMotion } = useInViewOnce(ref);
  const [displayValue, setDisplayValue] = useState(value);

  useEffect(() => {
    if (!inView || reducedMotion) {
      return;
    }

    let animationFrame = 0;
    const start = performance.now();
    const tick = (now: number) => {
      const progress = Math.min((now - start) / motion.duration.counter, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setDisplayValue(Math.round(value * eased));

      if (progress < 1) {
        animationFrame = requestAnimationFrame(tick);
      }
    };

    animationFrame = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(animationFrame);
    };
  }, [inView, reducedMotion, value]);

  return (
    <span ref={ref} className={className} aria-label={`${value}${suffix} ${label}`}>
      {displayValue}
      {suffix}
    </span>
  );
}

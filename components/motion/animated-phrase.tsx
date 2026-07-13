"use client";

import { useEffect, useState } from "react";
import { useReducedMotion } from "@/components/motion/use-in-view-once";

type AnimatedPhraseProps = {
  phrases: string[];
  intervalMs?: number;
  className?: string;
};

export function AnimatedPhrase({
  phrases,
  intervalMs = 3200,
  className = "",
}: AnimatedPhraseProps) {
  const reducedMotion = useReducedMotion();
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (reducedMotion || phrases.length <= 1) {
      return;
    }

    const interval = window.setInterval(() => {
      setIndex((current) => (current + 1) % phrases.length);
    }, intervalMs);

    return () => window.clearInterval(interval);
  }, [intervalMs, phrases.length, reducedMotion]);

  const phrase = reducedMotion ? phrases[0] : phrases[index];

  return (
    <span className={`animated-phrase ${className}`} aria-live="off">
      <span className="sr-only">{phrases[0]}</span>
      <span aria-hidden="true" key={phrase} className="animated-phrase__item">
        {phrase}
      </span>
    </span>
  );
}

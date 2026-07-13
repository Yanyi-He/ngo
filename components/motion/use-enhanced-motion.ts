"use client";

import { useEffect, useState } from "react";

export function useEnhancedMotion() {
  const [enhanced, setEnhanced] = useState(false);

  useEffect(() => {
    const frame = requestAnimationFrame(() => setEnhanced(true));
    return () => cancelAnimationFrame(frame);
  }, []);

  return enhanced;
}

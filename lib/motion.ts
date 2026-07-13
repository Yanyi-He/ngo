export const motion = {
  duration: {
    fast: 140,
    default: 200,
    slow: 280,
    reveal: 520,
    route: 260,
    counter: 950,
  },
  easing: {
    standard: "cubic-bezier(0.2, 0, 0, 1)",
    entrance: "cubic-bezier(0.16, 1, 0.3, 1)",
    softOut: "cubic-bezier(0.33, 1, 0.68, 1)",
  },
  revealOffset: {
    small: 12,
    default: 18,
    large: 24,
  },
  stagger: {
    default: 0.08,
    tight: 0.06,
  },
} as const;

export type MotionTokens = typeof motion;

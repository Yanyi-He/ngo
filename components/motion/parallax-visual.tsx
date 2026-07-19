import { ReactNode } from "react";

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
  void strength;

  return (
    <div className={`parallax-visual ${className}`}>
      {children}
    </div>
  );
}

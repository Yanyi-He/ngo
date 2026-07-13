import { Children, ReactNode } from "react";
import { Reveal } from "@/components/motion/reveal";
import { motion } from "@/lib/motion";

type StaggerGroupProps = {
  children: ReactNode;
  className?: string;
  childClassName?: string;
  interval?: number;
  direction?: "up" | "down" | "left" | "right" | "none";
};

export function StaggerGroup({
  children,
  className = "",
  childClassName = "",
  interval = motion.stagger.default,
  direction = "up",
}: StaggerGroupProps) {
  return (
    <div className={className}>
      {Children.map(children, (child, index) => (
        <Reveal
          className={childClassName}
          direction={direction}
          delay={Math.min(index * interval, 0.36)}
        >
          {child}
        </Reveal>
      ))}
    </div>
  );
}

type AmbientBackgroundProps = {
  variant?: "hero" | "cta" | "footer";
};

export function AmbientBackground({ variant = "hero" }: AmbientBackgroundProps) {
  return (
    <div className={`ambient-background ambient-background--${variant}`} aria-hidden="true">
      <span className="ambient-background__network">
        <span />
        <span />
        <span />
        <span />
      </span>
    </div>
  );
}

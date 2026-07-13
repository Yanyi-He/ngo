import Link from "next/link";
import Image from "next/image";
import type { ReactNode } from "react";
import { Reveal } from "@/components/motion/reveal";

type LinkButtonProps = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary" | "subtle";
};

export function LinkButton({
  href,
  children,
  variant = "primary",
}: LinkButtonProps) {
  const variants = {
    primary:
      "border-brand-blue bg-brand-blue text-white shadow-sm hover:-translate-y-0.5 hover:bg-brand-blue-strong hover:shadow-md",
    secondary:
      "border-brand-blue bg-white text-brand-blue hover:-translate-y-0.5 hover:bg-brand-blue-soft hover:shadow-sm",
    subtle:
      "border-line bg-white text-foreground hover:-translate-y-0.5 hover:border-brand-blue hover:text-brand-blue",
  };

  return (
    <Link
      href={href}
      className={`motion-button inline-flex min-h-11 items-center justify-center rounded-md border px-5 py-2.5 text-sm font-semibold focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-red ${variants[variant]}`}
    >
      {children}
    </Link>
  );
}

type ButtonProps = {
  children: ReactNode;
  type?: "button" | "submit";
  variant?: "primary" | "secondary";
};

export function Button({ children, type = "button", variant = "primary" }: ButtonProps) {
  const variants = {
    primary: "border-brand-blue bg-brand-blue text-white hover:bg-brand-blue-strong",
    secondary: "border-brand-blue bg-white text-brand-blue hover:bg-brand-blue-soft",
  };

  return (
    <button
      type={type}
      className={`motion-button min-h-11 rounded-md border px-5 py-2.5 text-sm font-semibold focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-red ${variants[variant]}`}
    >
      {children}
    </button>
  );
}

export function Container({
  children,
  width = "wide",
}: {
  children: ReactNode;
  width?: "wide" | "content";
}) {
  const widths = {
    wide: "max-w-7xl",
    content: "max-w-5xl",
  };

  return (
    <div className={`mx-auto w-full ${widths[width]} px-4 sm:px-6 lg:px-8`}>
      {children}
    </div>
  );
}

export function Section({
  children,
  tone = "default",
}: {
  children: ReactNode;
  tone?: "default" | "white" | "muted";
}) {
  const tones = {
    default: "bg-background",
    white: "border-y border-line bg-white",
    muted: "border-y border-line bg-muted",
  };

  return (
    <section className={`${tones[tone]} py-14 sm:py-16 lg:py-20`}>
      {children}
    </section>
  );
}

type SectionHeaderProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  action?: ReactNode;
};

export function SectionHeader({
  eyebrow,
  title,
  description,
  action,
}: SectionHeaderProps) {
  return (
    <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
      <div className="max-w-3xl">
        {eyebrow ? (
          <p className="mb-3 text-sm font-semibold uppercase tracking-normal text-brand-red">
            {eyebrow}
          </p>
        ) : null}
        <h2 className="text-2xl font-semibold leading-tight text-brand-blue sm:text-3xl">
          {title}
        </h2>
        {description ? (
          <p className="mt-4 text-base leading-7 text-slate-700">
            {description}
          </p>
        ) : null}
      </div>
      {action ? <div className="shrink-0">{action}</div> : null}
    </div>
  );
}

export function PageHero({
  eyebrow,
  title,
  description,
  primaryAction,
  secondaryAction,
}: {
  eyebrow: string;
  title: string;
  description: string;
  primaryAction?: ReactNode;
  secondaryAction?: ReactNode;
}) {
  return (
    <section className="border-b border-line bg-white py-12 sm:py-14">
      <Container>
        <Reveal className="max-w-4xl">
          <p className="text-sm font-semibold uppercase tracking-normal text-brand-red">
            {eyebrow}
          </p>
          <h1 className="mt-4 text-3xl font-semibold leading-tight text-brand-blue sm:text-4xl">
            {title}
          </h1>
          <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-700">
            {description}
          </p>
          {primaryAction || secondaryAction ? (
            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              {primaryAction}
              {secondaryAction}
            </div>
          ) : null}
        </Reveal>
      </Container>
    </section>
  );
}

type InfoCardProps = {
  title: string;
  description: string;
  href?: string;
  meta?: string;
  footer?: string;
  actionLabel?: string;
};

export function InfoCard({
  title,
  description,
  href,
  meta,
  footer,
  actionLabel,
}: InfoCardProps) {
  const content = (
    <article className="motion-card flex h-full flex-col rounded-md border border-line bg-white p-6 shadow-sm hover:border-brand-blue hover:shadow-md group-hover:border-brand-blue group-hover:shadow-md">
      {meta ? (
        <p className="mb-3 text-sm font-semibold text-brand-red">{meta}</p>
      ) : null}
      <h3 className="text-lg font-semibold text-brand-blue">{title}</h3>
      <p className="mt-3 text-sm leading-6 text-slate-700">{description}</p>
      {footer ? (
        <p className="mt-5 border-t border-line pt-4 text-xs font-semibold text-slate-600">
          {footer}
        </p>
      ) : null}
      {href && actionLabel ? (
        <span className="mt-auto pt-5 text-sm font-semibold text-brand-blue group-hover:text-brand-blue-strong">
          {actionLabel}
        </span>
      ) : null}
    </article>
  );

  if (!href) {
    return content;
  }

  return (
    <Link
      href={href}
      className="group block h-full rounded-md focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-red"
    >
      {content}
    </Link>
  );
}

export function ImagePanel({
  src,
  alt,
  caption,
  priority = false,
}: {
  src: string;
  alt: string;
  caption?: string;
  priority?: boolean;
}) {
  return (
    <figure className="motion-image-frame overflow-hidden rounded-lg border border-line bg-white shadow-md">
      <div className="relative aspect-[16/10] overflow-hidden">
        <Image
          src={src}
          alt={alt}
          fill
          priority={priority}
          sizes="(min-width: 1024px) 560px, 100vw"
          className="motion-image object-cover"
        />
      </div>
      {caption ? (
        <figcaption className="border-t border-line px-5 py-3 text-sm font-medium text-slate-700">
          {caption}
        </figcaption>
      ) : null}
    </figure>
  );
}

export function Notice({
  title,
  children,
  tone = "info",
}: {
  title: string;
  children: ReactNode;
  tone?: "info" | "warning" | "success";
}) {
  const tones = {
    info: "border-brand-blue/30 bg-blue-50 text-slate-800",
    warning: "border-warning/40 bg-amber-50 text-slate-900",
    success: "border-success/40 bg-green-50 text-slate-900",
  };

  return (
    <aside className={`rounded-md border p-5 ${tones[tone]}`}>
      <h2 className="text-base font-semibold text-brand-blue">{title}</h2>
      <div className="mt-2 text-sm leading-6">{children}</div>
    </aside>
  );
}

export function StatusBadge({ children }: { children: ReactNode }) {
  return (
    <span className="inline-flex rounded-md bg-muted px-2.5 py-1 text-xs font-semibold uppercase text-brand-blue">
      {children}
    </span>
  );
}

type FieldProps = {
  label: string;
  type?: string;
  placeholder?: string;
  textarea?: boolean;
  options?: string[];
};

export function Field({
  label,
  type = "text",
  placeholder,
  textarea,
  options,
}: FieldProps) {
  const inputClass =
    "mt-2 w-full rounded-md border border-line bg-white px-3 py-2.5 text-sm text-foreground outline-none transition duration-200 focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/20 disabled:cursor-not-allowed disabled:bg-muted disabled:text-slate-500";

  return (
    <label className="block text-sm font-semibold text-slate-800">
      {label}
      {textarea ? (
        <textarea className={`${inputClass} min-h-28`} placeholder={placeholder} aria-label={label} />
      ) : options ? (
        <select className={inputClass} defaultValue="" aria-label={label}>
          <option value="" disabled>
            Select
          </option>
          {options.map((option) => (
            <option key={option}>{option}</option>
          ))}
        </select>
      ) : (
        <input className={inputClass} type={type} placeholder={placeholder} aria-label={label} />
      )}
    </label>
  );
}

"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { BrandLogo } from "@/components/brand-logo";
import { navItems } from "@/lib/content";
import { LinkButton } from "@/components/ui";

function isActivePath(pathname: string, href: string) {
  if (href === "/") {
    return pathname === "/";
  }

  return pathname === href || pathname.startsWith(`${href}/`);
}

export function SiteHeader() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const menuButtonRef = useRef<HTMLButtonElement | null>(null);

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsOpen(false);
        window.requestAnimationFrame(() => menuButtonRef.current?.focus());
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [isOpen]);

  return (
    <header className="sticky top-0 z-40 border-b border-line bg-white/95 shadow-sm backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 sm:px-6 lg:px-8">
        <BrandLogo />

        <nav
          className="hidden items-center gap-1 text-sm font-semibold text-slate-700 xl:flex"
          aria-label="Primary navigation"
        >
          {navItems.map((item) => {
            const active = isActivePath(pathname, item.href);

            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={active ? "page" : undefined}
                className={`relative rounded-md px-3 py-2 transition-colors duration-200 after:absolute after:inset-x-3 after:bottom-1 after:h-0.5 after:origin-left after:rounded-full after:bg-brand-red after:transition-transform after:duration-200 hover:bg-brand-blue-soft hover:text-brand-blue focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-red ${
                  active
                    ? "bg-brand-blue-soft text-brand-blue after:scale-x-100"
                    : "text-slate-700 after:scale-x-0"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
          <div className="ml-2">
            <LinkButton href="/volunteer" variant="secondary">
              Join Us
            </LinkButton>
          </div>
          <button
            type="button"
            disabled
            className="ml-1 min-h-11 cursor-not-allowed rounded-md border border-line bg-muted px-3 py-2 text-xs font-semibold text-brand-blue opacity-90"
            title="Chinese language content is coming soon"
          >
            中文即将上线
          </button>
        </nav>

        <button
          type="button"
          ref={menuButtonRef}
          className="motion-button inline-flex min-h-11 items-center gap-2 rounded-md border border-line bg-white px-3 py-2 text-sm font-semibold text-brand-blue shadow-sm hover:bg-brand-blue-soft focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-red xl:hidden"
          aria-expanded={isOpen}
          aria-controls="mobile-navigation"
          onClick={() => setIsOpen((open) => !open)}
        >
          <span className="relative h-[18px] w-[18px]" aria-hidden="true">
            <Menu
              size={18}
              className={`absolute inset-0 transition duration-200 ${
                isOpen ? "rotate-90 opacity-0" : "rotate-0 opacity-100"
              }`}
            />
            <X
              size={18}
              className={`absolute inset-0 transition duration-200 ${
                isOpen ? "rotate-0 opacity-100" : "-rotate-90 opacity-0"
              }`}
            />
          </span>
          Menu
        </button>
      </div>

      {isOpen ? (
        <nav
          id="mobile-navigation"
          className="animate-mobile-menu-in border-t border-line bg-white px-4 py-3 shadow-sm sm:px-6 xl:hidden"
          aria-label="Mobile navigation"
        >
          <div className="mx-auto grid max-w-7xl gap-1">
            {navItems.map((item) => {
              const active = isActivePath(pathname, item.href);

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  aria-current={active ? "page" : undefined}
                  onClick={() => setIsOpen(false)}
                  className={`rounded-md px-3 py-3 text-sm font-semibold transition hover:bg-brand-blue-soft hover:text-brand-blue focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-red ${
                    active
                      ? "bg-brand-blue-soft text-brand-blue"
                      : "text-slate-700"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
            <Link
              href="/volunteer"
              onClick={() => setIsOpen(false)}
              className="mt-2 rounded-md border border-brand-blue bg-brand-blue px-3 py-3 text-center text-sm font-semibold text-white transition hover:bg-brand-blue-strong focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-red"
            >
              Join Us
            </Link>
            <button
              type="button"
              disabled
              className="mt-2 min-h-11 cursor-not-allowed rounded-md border border-line bg-muted px-3 py-2 text-sm font-semibold text-brand-blue"
              title="Chinese language content is coming soon"
            >
              中文即将上线
            </button>
          </div>
        </nav>
      ) : null}
    </header>
  );
}

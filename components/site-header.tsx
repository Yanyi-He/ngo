"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowRight, Menu, X } from "lucide-react";
import { useCallback, useEffect, useRef, useState } from "react";
import { BrandLogo } from "@/components/brand-logo";
import { navItems } from "@/lib/content";

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

  const closeMobileMenu = useCallback((returnFocus = false) => {
    setIsOpen(false);
    if (returnFocus) {
      window.requestAnimationFrame(() => menuButtonRef.current?.focus());
    }
  }, []);

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        closeMobileMenu(true);
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [closeMobileMenu, isOpen]);

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = originalOverflow;
    };
  }, [isOpen]);

  return (
    <header className="site-header sticky top-0 z-40 border-b border-brand-blue/10 bg-white/95 shadow-sm transition-all duration-200">
      <div className="h-0.5 bg-gradient-to-r from-brand-blue via-brand-blue-link to-[#2d9c95]" />
      <div className="mx-auto flex h-[70px] max-w-7xl items-center justify-between gap-4 px-4 transition-all duration-200 sm:px-6 lg:h-[76px] lg:px-8 xl:grid xl:grid-cols-[minmax(250px,290px)_1fr_auto] xl:gap-6">
        <BrandLogo />

        <nav
          className="hidden items-center justify-center gap-1 text-[16px] font-semibold text-slate-700 xl:flex"
          aria-label="Primary navigation"
        >
          {navItems.map((item) => {
            const active = isActivePath(pathname, item.href);

            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={active ? "page" : undefined}
                className={`nav-link motion-button relative inline-flex min-h-11 items-center rounded-md px-3.5 py-2 transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-red ${
                  active
                    ? "nav-link--active bg-brand-blue-soft text-brand-blue"
                    : "text-slate-700 hover:bg-brand-blue-soft hover:text-brand-blue"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="hidden items-center justify-end gap-3 xl:flex">
          <Link
            href="/volunteer"
            className="group motion-button inline-flex min-h-12 items-center justify-center gap-2 rounded-md border border-brand-blue bg-brand-blue px-5 py-2.5 text-sm font-bold text-white shadow-sm transition hover:bg-brand-blue-strong hover:shadow-md focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-red"
          >
            Join Us
            <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" aria-hidden="true" />
          </Link>
          <button
            type="button"
            disabled
            aria-disabled="true"
            className="min-h-11 cursor-not-allowed rounded-md border border-line bg-muted px-3 py-2 text-xs font-semibold text-slate-600 opacity-90"
            title="Chinese-language support is planned for a future release"
          >
            中文即将上线
          </button>
        </div>

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
          className="animate-mobile-menu-in border-t border-line bg-white px-4 py-4 shadow-md sm:px-6 xl:hidden"
          aria-label="Mobile navigation"
        >
          <div className="mx-auto grid max-w-7xl gap-2">
            {navItems.map((item) => {
              const active = isActivePath(pathname, item.href);

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  aria-current={active ? "page" : undefined}
                  onClick={() => closeMobileMenu(true)}
                  className={`nav-link relative rounded-md px-3 py-3 text-sm font-semibold transition hover:bg-brand-blue-soft hover:text-brand-blue focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-red ${
                    active
                      ? "nav-link--active bg-brand-blue-soft text-brand-blue"
                      : "text-slate-700"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
            <Link
              href="/volunteer"
              onClick={() => closeMobileMenu(true)}
              className="motion-button mt-2 inline-flex min-h-12 items-center justify-center gap-2 rounded-md border border-brand-blue bg-brand-blue px-3 py-3 text-center text-sm font-bold text-white shadow-sm transition hover:bg-brand-blue-strong focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-red"
            >
              Join Us
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
            <button
              type="button"
              disabled
              aria-disabled="true"
              className="mt-2 min-h-11 cursor-not-allowed rounded-md border border-line bg-muted px-3 py-2 text-sm font-semibold text-slate-600"
              title="Chinese-language support is planned for a future release"
            >
              中文即将上线
            </button>
          </div>
        </nav>
      ) : null}
    </header>
  );
}

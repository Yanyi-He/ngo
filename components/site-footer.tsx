import Link from "next/link";
import { AmbientBackground } from "@/components/motion/ambient-background";
import { Reveal } from "@/components/motion/reveal";
import { footerSections, organization } from "@/lib/content";

export function SiteFooter() {
  return (
    <footer className="relative overflow-hidden border-t border-line bg-brand-blue-strong text-white">
      <AmbientBackground variant="footer" />
      <Reveal className="relative z-10">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 py-10 sm:px-6 lg:grid-cols-[1.4fr_repeat(3,1fr)] lg:px-8">
          <div>
            <h2 className="text-lg font-semibold">{organization.acronym}</h2>
            <p className="mt-3 max-w-xl text-sm leading-6 text-blue-100">
              {organization.footerSummary}
            </p>
            <p className="mt-5 text-sm leading-6 text-blue-100">
              {organization.email}
              <br />
              {organization.location}
            </p>
          </div>
          {footerSections.map((section) => (
            <div key={section.title}>
              <h3 className="text-sm font-semibold uppercase text-blue-100">
                {section.title}
              </h3>
              <div className="mt-3 grid gap-2 text-sm">
                {section.links.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="rounded-sm transition-colors hover:text-white hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-red"
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Reveal>
      <div className="relative z-10 border-t border-white/15 px-4 py-4 text-center text-xs text-blue-100">
        Follow COAN: LinkedIn | Instagram | WeChat
      </div>
      <div className="relative z-10 border-t border-white/15 px-4 py-4 text-center text-xs text-blue-100">
        Copyright 2026 Canadian Observers and Activists Network. General
        information only.
      </div>
    </footer>
  );
}

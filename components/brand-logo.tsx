import Image from "next/image";
import Link from "next/link";

export function BrandLogo() {
  return (
    <Link
      href="/"
      className="inline-flex shrink-0 rounded-md p-1 transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-red"
      aria-label="COAN home"
    >
      {/* TODO: Replace this large whitespace-heavy PNG with a transparent SVG or optimized PNG supplied by the design team. */}
      <span className="relative block h-12 w-[184px] overflow-hidden rounded-md bg-white sm:w-[220px] lg:h-[54px] lg:w-[250px] xl:w-[270px]">
        <Image
          src="/coan-logo.png"
          alt="Canadian Observers and Activists Network logo"
          fill
          priority
          sizes="(min-width: 1280px) 270px, (min-width: 1024px) 250px, (min-width: 640px) 220px, 184px"
          className="object-cover object-center"
        />
      </span>
    </Link>
  );
}

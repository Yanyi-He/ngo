import Image from "next/image";
import Link from "next/link";

export function BrandLogo() {
  return (
    <Link
      href="/"
      className="inline-flex shrink-0 rounded-md p-1 transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-red"
      aria-label="COAN home"
    >
      {/* TODO: Replace this JPG-style logo export with a transparent SVG or PNG supplied by the design team. */}
      <Image
        src="/coan-logo.png"
        alt="Canadian Observers and Activists Network logo"
        width={720}
        height={180}
        priority
        sizes="(min-width: 1024px) 300px, (min-width: 640px) 240px, 190px"
        className="h-auto w-[190px] object-contain sm:w-[240px] lg:w-[300px]"
      />
    </Link>
  );
}

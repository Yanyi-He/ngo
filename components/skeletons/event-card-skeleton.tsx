import { SkeletonBlock } from "@/components/skeletons/base";

export function EventCardSkeleton() {
  return (
    <article className="grid gap-5 rounded-md border border-line bg-white p-6 shadow-sm lg:grid-cols-[86px_1fr]" aria-label="Loading event">
      <SkeletonBlock className="h-20 w-20" />
      <div>
        <div className="flex gap-2">
          <SkeletonBlock className="h-6 w-20" />
          <SkeletonBlock className="h-5 w-24" />
        </div>
        <SkeletonBlock className="mt-4 h-6 w-3/4" />
        <SkeletonBlock className="mt-4 h-4 w-full" />
        <SkeletonBlock className="mt-2 h-4 w-5/6" />
        <SkeletonBlock className="mt-6 h-10 w-36" />
      </div>
    </article>
  );
}

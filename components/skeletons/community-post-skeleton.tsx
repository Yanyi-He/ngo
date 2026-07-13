import { SkeletonBlock } from "@/components/skeletons/base";

export function CommunityPostSkeleton() {
  return (
    <article className="rounded-md border border-line bg-white p-5 shadow-sm" aria-label="Loading community post">
      <div className="flex gap-2">
        <SkeletonBlock className="h-6 w-24" />
        <SkeletonBlock className="h-6 w-28" />
      </div>
      <SkeletonBlock className="mt-4 h-6 w-4/5" />
      <SkeletonBlock className="mt-4 h-4 w-full" />
      <SkeletonBlock className="mt-2 h-4 w-5/6" />
      <SkeletonBlock className="mt-5 h-4 w-40" />
    </article>
  );
}

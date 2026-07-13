import { SkeletonBlock } from "@/components/skeletons/base";

export function ProfileSkeleton() {
  return (
    <article className="rounded-md border border-line bg-white p-6 shadow-sm" aria-label="Loading profile">
      <div className="flex gap-2">
        <SkeletonBlock className="h-6 w-24" />
        <SkeletonBlock className="h-6 w-20" />
      </div>
      <SkeletonBlock className="mt-5 h-6 w-2/3" />
      <SkeletonBlock className="mt-3 h-4 w-1/2" />
      <SkeletonBlock className="mt-4 h-4 w-full" />
      <SkeletonBlock className="mt-2 h-4 w-4/5" />
    </article>
  );
}

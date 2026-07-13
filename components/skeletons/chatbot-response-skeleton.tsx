import { SkeletonBlock } from "@/components/skeletons/base";

export function ChatbotResponseSkeleton() {
  return (
    <div className="rounded-md border border-line bg-white p-4" aria-label="Loading chatbot response">
      <div className="mb-4 flex gap-1" aria-hidden="true">
        <span className="typing-dot" />
        <span className="typing-dot" />
        <span className="typing-dot" />
      </div>
      <SkeletonBlock className="h-4 w-full" />
      <SkeletonBlock className="mt-2 h-4 w-11/12" />
      <SkeletonBlock className="mt-2 h-4 w-4/5" />
      <SkeletonBlock className="mt-5 h-16 w-full" />
    </div>
  );
}

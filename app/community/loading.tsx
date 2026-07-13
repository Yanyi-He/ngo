import { Container, Section } from "@/components/ui";
import { CommunityPostSkeleton } from "@/components/skeletons/community-post-skeleton";

export default function CommunityLoading() {
  return (
    <Section>
      <Container>
        <div className="skeleton-block h-8 w-64" />
        <div className="mt-8 grid gap-4">
          {Array.from({ length: 5 }).map((_, index) => (
            <CommunityPostSkeleton key={index} />
          ))}
        </div>
      </Container>
    </Section>
  );
}

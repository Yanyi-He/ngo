import { Container, Section } from "@/components/ui";
import { ResourceCardSkeleton } from "@/components/skeletons/resource-card-skeleton";

export default function Loading() {
  return (
    <Section>
      <Container>
        <div className="max-w-3xl">
          <div className="skeleton-block h-5 w-40" />
          <div className="skeleton-block mt-4 h-10 w-4/5" />
          <div className="skeleton-block mt-4 h-5 w-full" />
        </div>
        <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {Array.from({ length: 4 }).map((_, index) => (
            <ResourceCardSkeleton key={index} />
          ))}
        </div>
      </Container>
    </Section>
  );
}

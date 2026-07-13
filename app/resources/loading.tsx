import { Container, Section } from "@/components/ui";
import { ResourceCardSkeleton } from "@/components/skeletons/resource-card-skeleton";

export default function ResourcesLoading() {
  return (
    <Section>
      <Container>
        <div className="skeleton-block h-8 w-64" />
        <div className="mt-8 grid gap-5 md:grid-cols-2">
          {Array.from({ length: 6 }).map((_, index) => (
            <ResourceCardSkeleton key={index} />
          ))}
        </div>
      </Container>
    </Section>
  );
}

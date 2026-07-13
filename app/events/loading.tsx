import { Container, Section } from "@/components/ui";
import { EventCardSkeleton } from "@/components/skeletons/event-card-skeleton";

export default function EventsLoading() {
  return (
    <Section>
      <Container>
        <div className="skeleton-block h-8 w-64" />
        <div className="mt-8 grid gap-5 md:grid-cols-2">
          {Array.from({ length: 4 }).map((_, index) => (
            <EventCardSkeleton key={index} />
          ))}
        </div>
      </Container>
    </Section>
  );
}

import { Container, Section } from "@/components/ui";
import { ProfileSkeleton } from "@/components/skeletons/profile-skeleton";

export default function VolunteerLoading() {
  return (
    <Section>
      <Container>
        <div className="skeleton-block h-8 w-72" />
        <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {Array.from({ length: 6 }).map((_, index) => (
            <ProfileSkeleton key={index} />
          ))}
        </div>
      </Container>
    </Section>
  );
}

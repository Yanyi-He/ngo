import { communityGuidelines } from "@/lib/content";
import { Container, Notice, PageHero, Section, SectionHeader } from "@/components/ui";

export const metadata = {
  title: "Community Guidelines",
  description:
    "Guidelines for respectful, privacy-aware participation in COAN community spaces.",
};

export default function CommunityGuidelinesPage() {
  return (
    <>
      <PageHero
        eyebrow="Community guidelines"
        title="A constructive space for newcomer support"
        description="COAN community spaces are designed for responsible questions, practical resource sharing, and respectful peer support that complements official information."
      />

      <Section>
        <Container width="content">
          <SectionHeader
            title="Participation expectations"
            description="Community participation should protect privacy, avoid misinformation, and make it easier for newcomers and volunteers to find reliable next steps."
          />
          <ul className="mt-8 grid gap-4">
            {communityGuidelines.map((guideline) => (
              <li
                key={guideline}
                className="card-surface rounded-md border border-line bg-white p-5 text-sm font-medium leading-6 text-slate-800 shadow-sm"
              >
                {guideline}
              </li>
            ))}
          </ul>
        </Container>
      </Section>

      <Section tone="white">
        <Container width="content">
          <Notice title="Professional advice boundary">
            Community posts are for general information and peer support only.
            Do not share private identity, health, immigration, housing,
            financial, tax, or legal details in public discussions.
          </Notice>
        </Container>
      </Section>
    </>
  );
}

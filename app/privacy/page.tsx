import { Container, PageHero, Section, SectionHeader } from "@/components/ui";

export const metadata = {
  title: "Privacy",
};

export default function PrivacyPage() {
  return (
    <>
      <PageHero
        eyebrow="Privacy"
        title="Privacy principles for COAN services"
        description="COAN collects only the information needed to provide community services, protects sensitive newcomer data, and stores chatbot logs only when users consent."
      />
      <Section>
        <Container width="content">
          <SectionHeader
            title="How COAN handles personal information"
            description="COAN uses consent records, role-based access, retention rules, admin review practices, and clear user-facing explanations before collecting personal information for volunteer matching, events, community moderation, or chatbot improvement."
          />
        </Container>
      </Section>
    </>
  );
}

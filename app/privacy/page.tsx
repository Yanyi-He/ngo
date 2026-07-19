import { Container, InfoCard, Notice, PageHero, Section, SectionHeader } from "@/components/ui";

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
          <div className="mt-8 grid gap-4 md:grid-cols-2">
            <InfoCard
              title="Data minimization"
              description="Forms and future backend workflows should collect only the information needed for a specific service, event, matching, or consent-based support request."
            />
            <InfoCard
              title="Consent-aware records"
              description="Volunteer applications, event registrations, community posts, and chatbot logs should clearly explain when information is stored and why."
            />
            <InfoCard
              title="Limited access"
              description="Future admin tools should use role-based access so sensitive newcomer information is visible only to trained reviewers."
            />
            <InfoCard
              title="Contact path"
              description="Users should be able to contact COAN about privacy questions, corrections, retention, or consent withdrawal."
            />
          </div>
          <div className="mt-8">
            <Notice title="Contact COAN">
              Privacy questions can be directed to hello@coan-canada.org. This
              MVP page should be reviewed by qualified counsel before public
              launch.
            </Notice>
          </div>
        </Container>
      </Section>
    </>
  );
}

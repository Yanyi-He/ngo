import { Container, InfoCard, Notice, PageHero, Section, SectionHeader } from "@/components/ui";

export const metadata = {
  title: "Terms",
};

export default function TermsPage() {
  return (
    <>
      <PageHero
        eyebrow="Terms"
        title="Terms of use for general information services"
        description="COAN content and chatbot responses provide general information only and should not replace qualified legal, medical, financial, tax, or immigration advice."
      />
      <Section>
        <Container width="content">
          <SectionHeader
            title="Community and service expectations"
            description="Users should participate respectfully, avoid posting sensitive personal information, verify important decisions with official sources, and understand that moderation may remove unsafe or inappropriate content."
          />
          <div className="mt-8 grid gap-4 md:grid-cols-2">
            <InfoCard
              title="General information"
              description="COAN resources, community posts, and chatbot responses are educational starting points, not professional advice."
            />
            <InfoCard
              title="Respectful participation"
              description="Users should avoid harassment, discrimination, spam, misleading claims, and disclosure of private personal details."
            />
            <InfoCard
              title="Moderation"
              description="COAN may hide or remove unsafe, discriminatory, spam, misleading, or privacy-risk content in community spaces."
            />
            <InfoCard
              title="Future services"
              description="Authenticated workflows, chatbot logging, and matching tools should add clearer terms before production use."
            />
          </div>
          <div className="mt-8">
            <Notice title="Review before public launch" tone="warning">
              This MVP terms page is plain-language project content and should
              be reviewed by qualified counsel before COAN relies on it publicly.
            </Notice>
          </div>
        </Container>
      </Section>
    </>
  );
}

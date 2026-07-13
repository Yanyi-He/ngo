import { Container, PageHero, Section, SectionHeader } from "@/components/ui";

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
        </Container>
      </Section>
    </>
  );
}

import { Container, InfoCard, PageHero, Section, SectionHeader } from "@/components/ui";

export const metadata = {
  title: "Accessibility",
  description:
    "COAN accessibility commitments for readable, keyboard-friendly, bilingual-ready public-service information.",
};

const accessibilityCommitments = [
  {
    title: "Readable information",
    description:
      "COAN uses plain language, clear headings, sufficient contrast, and readable line lengths so public-service information is easier to scan and understand.",
  },
  {
    title: "Keyboard access",
    description:
      "Navigation, forms, links, and actions are designed with visible focus states and practical target sizes for keyboard and assistive-technology users.",
  },
  {
    title: "Responsible motion",
    description:
      "Motion is restrained, informational, and respects reduced-motion preferences so interface feedback does not interfere with access to content.",
  },
  {
    title: "Bilingual readiness",
    description:
      "The visual system supports English and Simplified Chinese text, including longer labels, readable form fields, and flexible content layouts.",
  },
];

export default function AccessibilityPage() {
  return (
    <>
      <PageHero
        eyebrow="Accessibility"
        title="Designed for clear and respectful access"
        description="COAN aims to make newcomer information, community participation, and volunteer pathways usable for people with different devices, abilities, languages, and confidence levels."
      />

      <Section>
        <Container>
          <SectionHeader
            title="Accessibility commitments"
            description="These commitments guide the public website while future backend, authentication, and chatbot integrations are added."
          />
          <div className="mt-8 grid gap-5 md:grid-cols-2">
            {accessibilityCommitments.map((item) => (
              <InfoCard
                key={item.title}
                title={item.title}
                description={item.description}
              />
            ))}
          </div>
        </Container>
      </Section>
    </>
  );
}

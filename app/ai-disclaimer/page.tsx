import { Container, InfoCard, Notice, PageHero, Section, SectionHeader } from "@/components/ui";

export const metadata = {
  title: "AI Disclaimer",
  description:
    "COAN AI assistant disclaimer for general information, official-source verification, consent, and professional advice boundaries.",
};

const aiBoundaries = [
  {
    title: "General information only",
    description:
      "The assistant can help users prepare questions and understand broad systems, but it does not provide legal, medical, financial, tax, or immigration advice.",
  },
  {
    title: "Verify important decisions",
    description:
      "Users should check official federal, provincial, municipal, campus, or community sources before making decisions that affect rights, money, health, status, or housing.",
  },
  {
    title: "Use consent carefully",
    description:
      "Chat information should be stored only when a user consents, and sensitive personal details should be minimized in prompts and service records.",
  },
];

export default function AiDisclaimerPage() {
  return (
    <>
      <PageHero
        eyebrow="AI disclaimer"
        title="Responsible use of COAN’s information assistant"
        description="COAN’s AI assistant is a public-service support tool for general newcomer questions. It is designed to encourage careful reading, official-source verification, and respectful use of community information."
      />

      <Section>
        <Container>
          <SectionHeader
            title="What the assistant can and cannot do"
            description="The assistant should help users orient themselves, not replace qualified advice or official decision-making sources."
          />
          <div className="mt-8 grid gap-5 md:grid-cols-3">
            {aiBoundaries.map((item) => (
              <InfoCard
                key={item.title}
                title={item.title}
                description={item.description}
              />
            ))}
          </div>
        </Container>
      </Section>

      <Section tone="white">
        <Container width="content">
          <Notice title="For urgent or high-stakes situations" tone="warning">
            If a question affects legal rights, immigration status, housing
            security, health, finances, tax obligations, or personal safety,
            consult official sources or a qualified professional.
          </Notice>
        </Container>
      </Section>
    </>
  );
}

import { departments, organization, values } from "@/lib/content";
import {
  Container,
  ImagePanel,
  InfoCard,
  Notice,
  PageHero,
  Section,
  SectionHeader,
} from "@/components/ui";

export const metadata = {
  title: "About Us",
  description:
    "Learn about COAN's mission, values, departments, and community-rooted approach to newcomer support in Canada.",
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About COAN"
        title="A community-rooted network for trustworthy newcomer support"
        description={`${organization.name} helps Chinese-speaking newcomers understand Canadian society, public services, community rules, public policy, and civic participation.`}
      />

      <Section>
        <Container>
          <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
            <div>
              <SectionHeader
                title="Why COAN exists"
                description="COAN turns complex public information into practical, culturally aware guidance. The platform supports newcomers, students, families, and volunteers with plain-language resources, respectful community learning, and opportunities to participate in Canadian civic life."
              />
              <div className="mt-7 grid gap-4 sm:grid-cols-2">
                <InfoCard
                  title="Who COAN serves"
                  description="Chinese-speaking newcomers, students, families, mentors, volunteers, and community members looking for reliable public-service orientation."
                />
                <InfoCard
                  title="How COAN works"
                  description="Content, events, moderated discussion, volunteer support, and AI-assisted information access are connected by consent, source awareness, and careful review."
                />
              </div>
            </div>
            <ImagePanel
              src="/coan-planning.png"
              alt="COAN volunteers reviewing public-service information and planning community resources"
              caption="Volunteer-driven planning keeps public information practical and community-aware."
            />
          </div>
        </Container>
      </Section>

      <Section tone="white">
        <Container>
          <div className="grid gap-8 lg:grid-cols-[1.15fr_0.85fr]">
            <div>
              <SectionHeader
                title="Governance and working teams"
                description="COAN separates oversight, technical operations, content production, campus partnerships, and volunteer management so public-service work can grow responsibly."
              />
              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                {departments.map((department) => (
                  <InfoCard
                    key={department.title}
                    title={department.title}
                    description={department.description}
                  />
                ))}
              </div>
            </div>

            <aside className="card-surface rounded-md border border-line bg-white p-6 shadow-sm">
              <h2 className="text-xl font-semibold text-brand-blue">Values</h2>
              <ul className="mt-5 grid gap-3">
                {values.map((value) => (
                  <li
                    key={value}
                    className="rounded-md bg-muted px-4 py-3 text-sm font-medium text-slate-800"
                  >
                    {value}
                  </li>
                ))}
              </ul>
            </aside>
          </div>
        </Container>
      </Section>

      <Section>
        <Container width="content">
          <Notice title="Future development direction">
            COAN is designed to remain content-driven while future secure
            integrations add authenticated volunteer workflows, admin review,
            consent-aware chatbot logs, and source-oriented resource publishing.
          </Notice>
        </Container>
      </Section>
    </>
  );
}

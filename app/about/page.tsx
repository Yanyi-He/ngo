import { departments, organization, values } from "@/lib/content";
import {
  Container,
  InfoCard,
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
        <Container width="content">
          <SectionHeader
            title="Mission"
            description="COAN turns complex public information into practical, culturally aware guidance. We support newcomers, students, families, and volunteers with plain-language resources, respectful community learning, and opportunities to participate in Canadian civic life."
          />
        </Container>
      </Section>

      <Section tone="white">
        <Container>
          <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
            <div>
              <SectionHeader title="Organizational structure" />
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

            <aside className="rounded-md border border-line bg-white p-6">
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
    </>
  );
}

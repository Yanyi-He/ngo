import {
  featuredResources,
  resourceCategories,
  resourceCollections,
} from "@/lib/content";
import Link from "next/link";
import {
  Container,
  Field,
  InfoCard,
  LinkButton,
  PageHero,
  Section,
  SectionHeader,
  StatusBadge,
} from "@/components/ui";

export const metadata = {
  title: "Resources",
  description:
    "Browse COAN's source-oriented resource portal for housing, healthcare, tax and benefits, community life, public policy, civic engagement, and student support.",
};

export default function ResourcesPage() {
  const popularResources = featuredResources.filter((resource) => resource.popular);

  return (
    <>
      <PageHero
        eyebrow="Resource portal"
        title="A practical knowledge hub for newcomer life in Canada"
        description="Search curated articles, browse by life area, and use source-oriented summaries to decide what to do next."
        primaryAction={<LinkButton href="#resource-search">Search resources</LinkButton>}
      />

      <Section>
        <Container>
          <div
            id="resource-search"
            className="grid gap-4 rounded-md border border-line bg-white p-5 md:grid-cols-[1fr_260px]"
          >
            <Field label="Search resources" placeholder="Search by topic or keyword" />
            <Field label="Category" options={resourceCategories} />
          </div>
        </Container>
      </Section>

      <Section tone="white">
        <Container>
          <SectionHeader
            title="Browse by category"
            description="Categories mirror the real information needs newcomers often bring to settlement and community organizations."
          />
          <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {resourceCategories.map((category) => (
              <button
                key={category}
                type="button"
                className="motion-card rounded-md border border-line bg-white px-4 py-3 text-left text-sm font-semibold text-brand-blue hover:border-brand-blue hover:bg-brand-blue-soft focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-red"
              >
                {category}
              </button>
            ))}
          </div>
        </Container>
      </Section>

      <Section>
        <Container>
          <SectionHeader
            title="Featured articles"
            description="Each article is written to help users understand the issue, identify what matters, and know where to verify official information."
          />
          <div className="mt-8 grid gap-5 md:grid-cols-2">
            {featuredResources.map((resource) => (
              <InfoCard
                key={resource.title}
                title={resource.title}
                description={resource.summary}
                href={`/resources/${resource.slug}`}
                meta={`${resource.category} | ${resource.type}`}
                footer={`Source orientation: ${resource.source}`}
                actionLabel="View resource"
              />
            ))}
          </div>
        </Container>
      </Section>

      <Section tone="white">
        <Container>
          <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
            <div>
              <SectionHeader title="Popular resources" />
              <div className="mt-6 grid gap-4">
                {popularResources.map((resource) => (
                  <Link
                    key={resource.title}
                    href={`/resources/${resource.slug}`}
                    className="motion-card group block rounded-md border border-line bg-white p-5 hover:border-brand-blue hover:shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-red"
                  >
                    <StatusBadge>{resource.category}</StatusBadge>
                    <h3 className="mt-3 font-semibold text-brand-blue group-hover:text-brand-blue-strong">
                      {resource.title}
                    </h3>
                    <p className="mt-2 text-sm leading-6 text-slate-700">
                      {resource.summary}
                    </p>
                    <span className="mt-4 inline-flex text-sm font-semibold text-brand-blue underline">
                      View resource
                    </span>
                  </Link>
                ))}
              </div>
            </div>

            <div>
              <SectionHeader title="Resource collections" />
              <div className="mt-6 grid gap-4">
                {resourceCollections.map((collection) => (
                  <InfoCard
                    key={collection.title}
                    title={collection.title}
                    description={collection.description}
                    footer={collection.label}
                  />
                ))}
              </div>
            </div>
          </div>
        </Container>
      </Section>

      <Section>
        <Container>
          <SectionHeader
            title="Related next steps"
            description="When an article is not enough, users should be routed to the right support surface."
          />
          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <LinkButton href="/chatbot" variant="secondary">
              Ask the information assistant
            </LinkButton>
            <LinkButton href="/events" variant="secondary">
              Attend a workshop
            </LinkButton>
            <LinkButton href="/volunteer" variant="secondary">
              Request mentor support
            </LinkButton>
          </div>
        </Container>
      </Section>
    </>
  );
}

import {
  featuredResources,
  resourceCategories,
  resourceCollections,
} from "@/lib/content";
import Link from "next/link";
import { BookOpen, FileText, Search } from "lucide-react";
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
  const featured = popularResources[0] ?? featuredResources[0];
  const supportingResources = featuredResources.filter((resource) => resource.slug !== featured.slug);

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
            className="card-surface grid gap-4 rounded-md border border-line bg-white p-5 shadow-sm lg:grid-cols-[1fr_280px_auto]"
          >
            <Field label="Search resources" placeholder="Search by topic or keyword" />
            <Field label="Category" options={resourceCategories} />
            <div className="flex items-end">
              <button
                type="button"
                className="motion-button inline-flex min-h-11 w-full items-center justify-center gap-2 rounded-md border border-brand-blue bg-brand-blue px-4 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-brand-blue-strong focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-red lg:w-auto"
              >
                <Search className="h-4 w-4" aria-hidden="true" />
                Search
              </button>
            </div>
          </div>
        </Container>
      </Section>

      <Section tone="white">
        <Container>
          <div className="grid gap-8 lg:grid-cols-[260px_1fr]">
            <aside className="card-surface h-fit rounded-md border border-line bg-white p-5 shadow-sm">
              <h2 className="text-base font-semibold text-brand-blue">
                Topic filters
              </h2>
              <div className="mt-4 grid gap-2 sm:grid-cols-2 lg:grid-cols-1">
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
            </aside>

            <div>
              <SectionHeader
                title="Featured resource"
                description="Resource entries show category, reading time, source orientation, and the practical question each article helps answer."
              />
              <Link
                href={`/resources/${featured.slug}`}
                className="group mt-6 grid gap-6 rounded-md border border-line bg-white p-6 shadow-sm transition hover:border-brand-blue hover:shadow-md focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-red lg:grid-cols-[1fr_220px]"
              >
                <div>
                  <div className="flex flex-wrap gap-2">
                    <StatusBadge>{featured.category}</StatusBadge>
                    <StatusBadge>{featured.type}</StatusBadge>
                  </div>
                  <h3 className="mt-4 text-2xl font-semibold text-brand-blue">
                    {featured.title}
                  </h3>
                  <p className="mt-3 text-sm leading-6 text-slate-700">
                    {featured.summary}
                  </p>
                  <p className="mt-5 text-xs font-semibold text-slate-600">
                    Official-source orientation: {featured.source}
                  </p>
                </div>
                <div className="rounded-md bg-brand-blue-soft p-5">
                  <BookOpen className="h-7 w-7 text-brand-blue" aria-hidden="true" />
                  <p className="mt-4 text-sm font-semibold text-brand-blue">
                    6 min read
                  </p>
                  <p className="mt-2 text-sm leading-6 text-slate-700">
                    Built for scanning before users verify official details.
                  </p>
                  <span className="mt-5 inline-flex text-sm font-semibold text-brand-blue underline">
                    View resource
                  </span>
                </div>
              </Link>
            </div>
          </div>
        </Container>
      </Section>

      <Section>
        <Container>
          <SectionHeader
            title="Resource library"
            description="Compact rows keep the portal scannable while preserving source context and route-ready article links."
          />
          <div className="mt-8 grid gap-3">
            {supportingResources.slice(0, 10).map((resource, index) => (
              <Link
                key={resource.title}
                href={`/resources/${resource.slug}`}
                className="motion-card card-surface grid gap-4 rounded-md border border-line bg-white p-5 shadow-sm hover:border-brand-blue hover:shadow-md focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-red lg:grid-cols-[180px_1fr_auto]"
              >
                <div className="flex flex-wrap gap-2 lg:block">
                  <StatusBadge>{resource.category}</StatusBadge>
                  <p className="mt-0 text-xs font-semibold text-slate-500 lg:mt-3">
                    {resource.type} | {index + 4} min read
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-brand-blue">
                    {resource.title}
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-slate-700">
                    {resource.summary}
                  </p>
                  <p className="mt-3 text-xs leading-5 text-slate-600">
                    Source orientation: {resource.source}
                  </p>
                </div>
                <span className="inline-flex items-center gap-2 text-sm font-semibold text-brand-blue">
                  <FileText className="h-4 w-4" aria-hidden="true" />
                  View
                </span>
              </Link>
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
          <div className="notice-surface mt-8 rounded-md border border-line bg-white p-5 text-sm leading-6 text-slate-700">
            <h3 className="font-semibold text-brand-blue">No-results state</h3>
            <p className="mt-2">
              If a search has no matches, COAN should suggest related topics,
              official-source checks, and a path to ask the information assistant.
            </p>
          </div>
        </Container>
      </Section>
    </>
  );
}

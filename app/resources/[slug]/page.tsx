import { notFound } from "next/navigation";
import { resources } from "@/lib/content";
import {
  Container,
  LinkButton,
  Notice,
  PageHero,
  Section,
  StatusBadge,
} from "@/components/ui";

export function generateStaticParams() {
  return resources.map((resource) => ({ slug: resource.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const resource = resources.find((item) => item.slug === slug);

  return {
    title: resource ? resource.title : "Resource",
    description: resource?.summary,
  };
}

export default async function ResourceDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const resource = resources.find((item) => item.slug === slug);

  if (!resource) {
    notFound();
  }

  return (
    <>
      <PageHero
        eyebrow={resource.category}
        title={resource.title}
        description={resource.summary}
        primaryAction={
          <LinkButton href="/resources" variant="secondary">
            Back to resources
          </LinkButton>
        }
      />

      <Section>
        <Container width="content">
          <article className="card-surface rounded-md border border-line bg-white p-6 shadow-sm sm:p-8">
            <div className="flex flex-wrap gap-2">
              <StatusBadge>{resource.category}</StatusBadge>
              <StatusBadge>{resource.type}</StatusBadge>
            </div>
            <h2 className="mt-6 text-2xl font-semibold text-brand-blue">
              What this resource helps with
            </h2>
            <p className="mt-4 text-base leading-8 text-slate-700">
              {resource.summary}
            </p>
            <div className="mt-8 border-t border-line pt-6">
              <h2 className="text-xl font-semibold text-brand-blue">
                Source orientation
              </h2>
              <p className="mt-3 text-sm leading-6 text-slate-700">
                {resource.source}
              </p>
            </div>
          </article>
        </Container>
      </Section>

      <Section tone="white">
        <Container width="content">
          <Notice title="General information boundary">
            COAN resources are designed to help users understand common systems
            and prepare better questions. For decisions that affect rights,
            health, finances, taxes, immigration status, or housing security,
            verify official sources or consult a qualified professional.
          </Notice>
        </Container>
      </Section>
    </>
  );
}

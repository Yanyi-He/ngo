import { notFound } from "next/navigation";
import { events } from "@/lib/content";
import { Button, Container, Field, LinkButton, PageHero, Section } from "@/components/ui";

export function generateStaticParams() {
  return events.map((event) => ({ slug: event.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const event = events.find((item) => item.slug === slug);

  return {
    title: event ? event.title : "Event",
  };
}

export default async function EventDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const event = events.find((item) => item.slug === slug);

  if (!event) {
    notFound();
  }

  return (
    <>
      <PageHero eyebrow="Event" title={event.title} description={event.description} />

      <Section>
        <Container>
          <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr]">
            <aside className="rounded-md border border-line bg-white p-6">
              <h2 className="text-xl font-semibold text-brand-blue">Details</h2>
              <dl className="mt-5 grid gap-4 text-sm">
                <div>
                  <dt className="font-semibold text-slate-800">Date and time</dt>
                  <dd className="mt-1 text-slate-700">
                    {event.date} at {event.time}
                  </dd>
                </div>
                <div>
                  <dt className="font-semibold text-slate-800">Location</dt>
                  <dd className="mt-1 text-slate-700">{event.location}</dd>
                </div>
                <div>
                  <dt className="font-semibold text-slate-800">Capacity</dt>
                  <dd className="mt-1 text-slate-700">{event.capacity}</dd>
                </div>
                <div>
                  <dt className="font-semibold text-slate-800">
                    Registration deadline
                  </dt>
                  <dd className="mt-1 text-slate-700">{event.deadline}</dd>
                </div>
              </dl>
            </aside>

            <form className="rounded-md border border-line bg-white p-6">
              <h2 className="text-xl font-semibold text-brand-blue">
                Register for this event
              </h2>
              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                <Field label="Name" placeholder="Full name" />
                <Field label="Email" type="email" placeholder="name@example.com" />
                <Field label="City" placeholder="City" />
                <Field
                  label="Preferred language"
                  options={["English", "Mandarin", "Cantonese", "Other"]}
                />
              </div>
              <label className="mt-5 flex gap-3 text-sm text-slate-700">
                <input type="checkbox" className="mt-1 h-4 w-4" />
                I consent to COAN contacting me about this event registration.
              </label>
              <div className="mt-6">
                <Button>Submit registration</Button>
              </div>
              <p className="mt-4 text-xs leading-5 text-slate-600">
                COAN uses registration information only to manage attendance,
                event updates, accessibility needs, and participant follow-up.
              </p>
            </form>
          </div>
        </Container>
      </Section>

      <Section tone="white">
        <Container>
          <LinkButton href="/events" variant="subtle">
            Back to events
          </LinkButton>
        </Container>
      </Section>
    </>
  );
}

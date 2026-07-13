import { events } from "@/lib/content";
import {
  Container,
  LinkButton,
  Notice,
  PageHero,
  Section,
  StatusBadge,
} from "@/components/ui";

export const metadata = {
  title: "Events",
  description:
    "Explore COAN workshops, roundtables, orientations, and community sessions for Chinese-speaking newcomers and volunteers.",
};

export default function EventsPage() {
  return (
    <>
      <PageHero
        eyebrow="Events"
        title="Workshops, roundtables, and community sessions"
        description="COAN events help newcomers ask better questions, meet community members, and find official next steps for settlement and civic life."
      />

      <Section>
        <Container>
          <div className="grid gap-5 md:grid-cols-2">
            {events.map((event) => {
              const [month, day] = event.date.split(" ");
              const format =
                event.location === "Online"
                  ? "Online"
                  : event.location.includes("Online")
                    ? "Hybrid"
                    : "In-person";

              return (
                <article
                  key={event.slug}
                  className="motion-card grid gap-5 rounded-md border border-line bg-white p-6 shadow-sm hover:border-brand-blue hover:shadow-md lg:grid-cols-[86px_1fr]"
                >
                  <div className="h-fit w-20 rounded-md border border-line bg-brand-blue-soft px-3 py-3 text-center">
                    <p className="text-xs font-bold uppercase text-brand-blue">
                      {month}
                    </p>
                    <p className="text-2xl font-bold text-brand-blue">
                      {day?.replace(",", "")}
                    </p>
                  </div>
                  <div>
                    <div className="flex flex-wrap items-center gap-2">
                      <StatusBadge>{format}</StatusBadge>
                      <span className="text-sm font-semibold text-brand-red">
                        {event.time}
                      </span>
                    </div>
                    <h2 className="mt-3 text-xl font-semibold text-brand-blue">
                      {event.title}
                    </h2>
                    <p className="mt-3 text-sm leading-6 text-slate-700">
                      {event.description}
                    </p>
                    <dl className="mt-4 grid gap-2 border-t border-line pt-4 text-sm text-slate-700 sm:grid-cols-2">
                      <div>
                        <dt className="font-semibold text-slate-800">Location</dt>
                        <dd>{event.location}</dd>
                      </div>
                      <div>
                        <dt className="font-semibold text-slate-800">Capacity</dt>
                        <dd>{event.capacity}</dd>
                      </div>
                      <div className="sm:col-span-2">
                        <dt className="font-semibold text-slate-800">
                          Register by
                        </dt>
                        <dd>{event.deadline}</dd>
                      </div>
                    </dl>
                    <div className="mt-5">
                      <LinkButton href={`/events/${event.slug}`} variant="secondary">
                        View event details
                      </LinkButton>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </Container>
      </Section>

      <Section tone="white">
        <Container width="content">
          <Notice title="Admin workflow readiness">
            COAN events are designed for clear registration, capacity limits,
            consent-based communication, and practical follow-up resources for
            participants after each workshop.
          </Notice>
        </Container>
      </Section>
    </>
  );
}

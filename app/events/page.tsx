import { events } from "@/lib/content";
import {
  Container,
  LinkButton,
  Notice,
  PageHero,
  Section,
  StatusBadge,
} from "@/components/ui";
import { CalendarDays, MapPin, Users } from "lucide-react";

export const metadata = {
  title: "Events",
  description:
    "Explore COAN workshops, roundtables, orientations, and community sessions for Chinese-speaking newcomers and volunteers.",
};

export default function EventsPage() {
  const highlightedEvent =
    events.find((event) => event.slug === "healthcare-navigation-session") ??
    events[0];
  const supportingEvents = events.filter(
    (event) => event.slug !== highlightedEvent.slug,
  );

  return (
    <>
      <PageHero
        eyebrow="Events"
        title="Workshops, roundtables, and community sessions"
        description="COAN events help newcomers ask better questions, meet community members, and find official next steps for settlement and civic life."
      />

      <Section>
        <Container>
          <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
            <article className="card-surface rounded-md border border-line bg-white p-6 shadow-sm">
              <StatusBadge>Highlighted session</StatusBadge>
              <h2 className="mt-4 text-2xl font-semibold text-brand-blue">
                {highlightedEvent.title}
              </h2>
              <p className="mt-3 text-sm leading-6 text-slate-700">
                {highlightedEvent.description}
              </p>
              <dl className="mt-6 grid gap-3 text-sm text-slate-700 sm:grid-cols-2">
                <div className="rounded-md bg-brand-blue-soft p-4">
                  <dt className="flex items-center gap-2 font-semibold text-brand-blue">
                    <CalendarDays className="h-4 w-4" aria-hidden="true" />
                    Date
                  </dt>
                  <dd className="mt-1">
                    {highlightedEvent.date} at {highlightedEvent.time}
                  </dd>
                </div>
                <div className="rounded-md bg-muted p-4">
                  <dt className="flex items-center gap-2 font-semibold text-brand-blue">
                    <MapPin className="h-4 w-4" aria-hidden="true" />
                    Format
                  </dt>
                  <dd className="mt-1">{highlightedEvent.location}</dd>
                </div>
                <div className="rounded-md bg-muted p-4">
                  <dt className="flex items-center gap-2 font-semibold text-brand-blue">
                    <Users className="h-4 w-4" aria-hidden="true" />
                    Capacity
                  </dt>
                  <dd className="mt-1">{highlightedEvent.capacity} seats</dd>
                </div>
                <div className="rounded-md bg-brand-red-soft p-4">
                  <dt className="font-semibold text-brand-red">Register by</dt>
                  <dd className="mt-1">{highlightedEvent.deadline}</dd>
                </div>
              </dl>
              <div className="mt-6">
                <LinkButton href={`/events/${highlightedEvent.slug}`}>
                  Register
                </LinkButton>
              </div>
            </article>

            <div>
              <div className="mb-4 flex flex-wrap gap-2">
                {["All", "Online", "In-person", "Hybrid"].map((filter) => (
                  <button
                    key={filter}
                    type="button"
                    className="motion-button rounded-md border border-line bg-white px-3 py-2 text-sm font-semibold text-brand-blue hover:bg-brand-blue-soft focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-red"
                  >
                    {filter}
                  </button>
                ))}
              </div>
              <div className="grid gap-4">
            {supportingEvents.map((event) => {
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
                  className="motion-card card-surface grid gap-5 rounded-md border border-line bg-white p-6 shadow-sm hover:border-brand-blue hover:shadow-md lg:grid-cols-[86px_1fr]"
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
                        View details
                      </LinkButton>
                    </div>
                  </div>
                </article>
              );
            })}
              </div>
            </div>
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
          <div className="mt-5">
            <LinkButton href="/volunteer" variant="secondary">
              Help organize an event
            </LinkButton>
          </div>
        </Container>
      </Section>
    </>
  );
}

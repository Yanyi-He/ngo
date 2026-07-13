import Image from "next/image";
import Link from "next/link";
import {
  BookOpen,
  Bot,
  CalendarDays,
  CheckCircle2,
  FileText,
  Globe2,
  Landmark,
  MessageCircle,
  ShieldCheck,
  Users,
} from "lucide-react";
import { AmbientBackground } from "@/components/motion/ambient-background";
import { AnimatedNumber } from "@/components/motion/animated-number";
import { AnimatedPhrase } from "@/components/motion/animated-phrase";
import { ChatbotPreview } from "@/components/motion/chatbot-preview";
import { ParallaxVisual } from "@/components/motion/parallax-visual";
import { Reveal } from "@/components/motion/reveal";
import { StaggerGroup } from "@/components/motion/stagger-group";
import {
  events,
  featuredResources,
  homeSections,
  howCoanHelps,
  impactMetrics,
  services,
  trustSafetyItems,
} from "@/lib/content";
import {
  Container,
  ImagePanel,
  LinkButton,
  Section,
  SectionHeader,
  StatusBadge,
} from "@/components/ui";

const serviceIcons = {
  "Newcomer Resource Library": BookOpen,
  "Volunteer and Mentor Support": Users,
  "Workshops and Events": CalendarDays,
  "AI Information Assistant": Bot,
  "Civic Learning": Landmark,
  "Moderated Community": MessageCircle,
};

const heroTrustIndicators = [
  { label: "Community-led", Icon: Users },
  { label: "Bilingual-ready", Icon: Globe2 },
  { label: "Official-source oriented", Icon: ShieldCheck },
];

const heroPhrases = [
  "Understand Canadian systems",
  "Access trusted resources",
  "Connect with your community",
  "Participate with confidence",
];

export const metadata = {
  title: "Home",
  description:
    "COAN helps Chinese-speaking newcomers understand Canadian public services, community rules, public policy, and civic participation through resources, events, community support, and careful technology.",
};

export default function Home() {
  return (
    <>
      <section className="relative overflow-hidden border-b border-line bg-white">
        <AmbientBackground />
        <Container>
          <div className="relative z-10 grid gap-10 py-12 sm:py-16 lg:grid-cols-[1.02fr_0.98fr] lg:items-center lg:py-20">
            <div className="max-w-3xl">
              <Reveal as="p" direction="up" className="text-sm font-semibold uppercase tracking-normal text-brand-red">
                Community-led newcomer support
              </Reveal>
              <Reveal as="div" delay={0.04}>
                <h1 className="mt-4 text-4xl font-semibold leading-tight text-brand-blue sm:text-5xl">
                  Helping newcomers understand Canada and build stronger
                  community connections
                </h1>
              </Reveal>
              <Reveal as="p" delay={0.12} className="mt-6 max-w-2xl text-lg leading-8 text-slate-700">
                COAN turns complex public information into clear, practical
                guidance and creates opportunities for Chinese-speaking
                newcomers, volunteers, students, and community members to learn
                and connect.
              </Reveal>
              <Reveal as="p" delay={0.18} className="mt-4 text-base font-semibold text-brand-blue">
                <AnimatedPhrase phrases={heroPhrases} />
              </Reveal>
              <Reveal delay={0.24} className="mt-8 flex flex-col gap-3 sm:flex-row">
                <LinkButton href="/resources">Explore resources</LinkButton>
                <LinkButton href="/volunteer" variant="secondary">
                  Join our volunteer network
                </LinkButton>
              </Reveal>
              <StaggerGroup
                className="mt-8 flex flex-wrap gap-3"
                interval={0.06}
              >
                {heroTrustIndicators.map(({ label, Icon }) => (
                  <span
                    key={label}
                    className="inline-flex min-h-10 items-center gap-2 rounded-md border border-line bg-white px-3 py-2 text-sm font-semibold text-brand-blue shadow-sm"
                  >
                    <Icon className="h-4 w-4" aria-hidden="true" />
                    {label}
                  </span>
                ))}
              </StaggerGroup>
            </div>

            <Reveal delay={0.28} direction="left">
              <ParallaxVisual>
                <figure className="motion-image-frame relative overflow-hidden rounded-lg border border-line bg-white p-3 shadow-md">
                  <div className="relative aspect-[4/3] overflow-hidden rounded-md bg-muted">
                    <Image
                      src="/coan-volunteers.png"
                      alt="COAN volunteers welcoming a newcomer at a community outreach event"
                      fill
                      priority
                      sizes="(min-width: 1024px) 580px, 100vw"
                      className="motion-image object-cover"
                    />
                  </div>
                  <figcaption className="border-t border-line px-2 py-4 text-sm font-medium text-slate-700">
                    Community connection, practical learning, and public-service
                    orientation in one platform.
                  </figcaption>
                  <div className="absolute bottom-20 left-6 hidden max-w-60 rounded-md border border-line bg-white p-4 shadow-md sm:block">
                    <p className="text-xs font-semibold uppercase text-brand-red">
                      Platform indicator
                    </p>
                    <p className="mt-1 text-sm font-semibold leading-5 text-brand-blue">
                      20+ prepared newcomer resource topics
                    </p>
                  </div>
                </figure>
              </ParallaxVisual>
            </Reveal>
          </div>
        </Container>
      </section>

      <Section>
        <Container>
          <StaggerGroup className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {impactMetrics.map((metric) => (
              <article
                key={metric.label}
                className="motion-card h-full rounded-lg border border-line bg-white p-6 shadow-sm hover:border-brand-blue hover:shadow-md"
              >
                <p className="text-3xl font-bold text-brand-blue">
                  <AnimatedNumber
                    value={Number.parseInt(metric.value, 10)}
                    suffix={metric.value.includes("+") ? "+" : ""}
                    label={metric.label}
                  />
                </p>
                <h2 className="mt-3 text-base font-semibold text-slate-900">
                  {metric.label}
                </h2>
                <p className="mt-2 text-sm leading-6 text-slate-600">
                  {metric.note}
                </p>
              </article>
            ))}
          </StaggerGroup>
          <p className="mt-4 text-sm leading-6 text-slate-600">
            These are platform preparation indicators for the MVP demo, not
            verified outcome statistics.
          </p>
        </Container>
      </Section>

      <Section tone="white">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
            <Reveal>
              <ImagePanel
                src="/coan-workshop.png"
                alt="A presenter explaining Canadian systems to newcomer participants"
                caption="COAN turns complex systems into practical learning moments."
              />
            </Reveal>
            <Reveal delay={0.08}>
              <SectionHeader
                eyebrow="Mission"
                title="Reliable civic and settlement information for newcomers"
                description={homeSections.mission}
              />
              <StaggerGroup className="mt-7 grid gap-3 sm:grid-cols-2" interval={0.06}>
                {homeSections.trustSignals.map((signal) => (
                  <div
                    key={signal}
                    className="motion-card flex h-full items-start gap-3 rounded-md border border-line bg-white p-4 hover:border-brand-blue hover:shadow-sm"
                  >
                    <CheckCircle2
                      className="mt-0.5 h-5 w-5 shrink-0 text-success"
                      aria-hidden="true"
                    />
                    <p className="text-sm font-semibold leading-6 text-brand-blue">
                      {signal}
                    </p>
                  </div>
                ))}
              </StaggerGroup>
            </Reveal>
          </div>
        </Container>
      </Section>

      <Section>
        <Container>
          <Reveal>
            <SectionHeader
              title="Core services"
              description="COAN organizes services around practical questions newcomers ask when they are settling, studying, volunteering, and participating in community life."
            />
          </Reveal>
          <StaggerGroup className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {services.map((service) => {
              const Icon = serviceIcons[service.title as keyof typeof serviceIcons];

              return (
                <Link
                  key={service.title}
                  href={service.href}
                  className="motion-card group flex min-h-56 flex-col rounded-lg border border-line bg-white p-6 shadow-sm hover:border-brand-blue hover:shadow-md focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-red"
                >
                  <span className="flex h-12 w-12 items-center justify-center rounded-lg bg-brand-blue-soft text-brand-blue transition group-hover:bg-brand-blue group-hover:text-white">
                    <Icon className="h-6 w-6" aria-hidden="true" />
                  </span>
                  <h3 className="mt-5 text-xl font-semibold text-brand-blue">
                    {service.title}
                  </h3>
                  <p className="mt-3 flex-1 text-sm leading-6 text-slate-700">
                    {service.description}
                  </p>
                  <span className="mt-5 text-sm font-semibold text-brand-blue underline">
                    View service
                  </span>
                </Link>
              );
            })}
          </StaggerGroup>
        </Container>
      </Section>

      <Section tone="white">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
            <Reveal>
              <SectionHeader
                title="How COAN helps"
                description="The platform is designed around a simple support journey: ask, understand, participate, and connect."
              />
              <div className="flow-timeline flow-timeline--horizontal mt-8 grid gap-4 pl-14 md:gap-5 md:pl-0">
                {howCoanHelps.map((step, index) => (
                  <article
                    key={step.title}
                    className="relative grid gap-4 rounded-lg border border-line bg-white p-5 shadow-sm md:pt-14"
                  >
                    <div className="flow-step-marker absolute -left-14 top-0 flex h-12 w-12 items-center justify-center rounded-lg bg-brand-blue text-lg font-bold text-white md:left-5 md:top-0">
                      {index + 1}
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-brand-blue">
                        {step.title}
                      </h3>
                      <p className="mt-2 text-sm leading-6 text-slate-700">
                        {step.description}
                      </p>
                    </div>
                  </article>
                ))}
              </div>
            </Reveal>
            <Reveal delay={0.1}>
              <ImagePanel
                src="/coan-planning.png"
                alt="COAN volunteers reviewing documents and planning public-service resources"
                caption="Resource planning, review, and volunteer coordination."
              />
            </Reveal>
          </div>
        </Container>
      </Section>

      <Section>
        <Container>
          <Reveal>
            <SectionHeader
              title="Featured resources"
              description="Resource cards are designed for scanning: category, source orientation, reading time, and a clear next step."
              action={
                <LinkButton href="/resources" variant="secondary">
                  Browse all resources
                </LinkButton>
              }
            />
          </Reveal>
          <StaggerGroup className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {featuredResources.slice(0, 4).map((resource, index) => (
              <Link
                key={resource.title}
                href={`/resources/${resource.slug}`}
                className="motion-card group flex min-h-80 flex-col rounded-lg border border-line bg-white p-6 shadow-sm hover:border-brand-blue hover:shadow-md focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-red"
              >
                <div className="flex flex-wrap gap-2">
                  <StatusBadge>{resource.category}</StatusBadge>
                  <span className="inline-flex rounded-md bg-brand-red-soft px-2.5 py-1 text-xs font-semibold uppercase text-brand-red">
                    {resource.type}
                  </span>
                </div>
                <div className="mt-5 flex items-center gap-2 text-xs font-semibold text-slate-500">
                  <FileText className="h-4 w-4" aria-hidden="true" />
                  {index + 4} min read
                </div>
                <h3 className="mt-3 text-lg font-semibold text-brand-blue">
                  {resource.title}
                </h3>
                <p className="mt-3 flex-1 text-sm leading-6 text-slate-700">
                  {resource.summary}
                </p>
                <div className="mt-5 border-t border-line pt-4">
                  <p className="text-xs leading-5 text-slate-600">
                    Source orientation: {resource.source}
                  </p>
                  <span className="mt-3 inline-flex text-sm font-semibold text-brand-blue underline group-hover:text-brand-blue-strong">
                    View resource
                  </span>
                </div>
              </Link>
            ))}
          </StaggerGroup>
        </Container>
      </Section>

      <Section tone="white">
        <Container>
          <Reveal>
            <SectionHeader
              title="Upcoming events"
              description="Event cards make logistics visible so participants can quickly understand format, capacity, deadline, and topic."
              action={
                <LinkButton href="/events" variant="secondary">
                  View all events
                </LinkButton>
              }
            />
          </Reveal>
          <StaggerGroup className="mt-8 grid gap-5 lg:grid-cols-3">
            {events.slice(0, 3).map((event) => {
              const format =
                event.location === "Online"
                  ? "Online"
                  : event.location.includes("Online")
                    ? "Hybrid"
                    : "In-person";
              const [month, day] = event.date.split(" ");

              return (
                <article
                  key={event.slug}
                  className="motion-card grid min-h-72 gap-5 rounded-lg border border-line bg-white p-6 shadow-sm hover:border-brand-blue hover:shadow-md"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="rounded-lg border border-line bg-brand-blue-soft px-4 py-3 text-center">
                      <p className="text-xs font-bold uppercase text-brand-blue">
                        {month}
                      </p>
                      <p className="text-2xl font-bold text-brand-blue">
                        {day?.replace(",", "")}
                      </p>
                    </div>
                    <StatusBadge>{format}</StatusBadge>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-brand-blue">
                      {event.title}
                    </h3>
                    <p className="mt-3 text-sm leading-6 text-slate-700">
                      {event.description}
                    </p>
                  </div>
                  <div className="mt-auto border-t border-line pt-4 text-sm text-slate-600">
                    <p>
                      {event.time} | Capacity: {event.capacity}
                    </p>
                    <p>Register by {event.deadline}</p>
                    <Link
                      href={`/events/${event.slug}`}
                      className="mt-3 inline-flex rounded-sm font-semibold text-brand-blue underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-red"
                    >
                      Register
                    </Link>
                  </div>
                </article>
              );
            })}
          </StaggerGroup>
        </Container>
      </Section>

      <Section>
        <Container>
          <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
            <Reveal>
              <SectionHeader
                eyebrow="AI information desk"
                title="A public-service assistant for general newcomer questions"
                description="The chatbot section is designed as a source-oriented information assistant, not a replacement for professional advice."
                action={<LinkButton href="/chatbot">Ask a question</LinkButton>}
              />
              <p className="mt-5 max-w-2xl text-sm leading-6 text-slate-600">
                Users can ask about housing, healthcare, tax and benefits,
                public services, community rules, student support, and civic
                participation. Answers point users toward official sources and
                qualified help where appropriate.
              </p>
            </Reveal>
            <Reveal delay={0.08}>
              <ChatbotPreview />
            </Reveal>
          </div>
        </Container>
      </Section>

      <Section tone="white">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <Reveal>
              <div className="relative overflow-hidden rounded-xl border border-line bg-brand-blue-soft p-8 shadow-sm">
                <AmbientBackground variant="cta" />
                <div className="relative z-10">
                  <p className="text-sm font-semibold uppercase text-brand-red">
                    Volunteer recruitment
                  </p>
                  <h2 className="mt-3 text-3xl font-bold text-brand-blue">
                    Help build a clearer path for newcomers in Canada
                  </h2>
                  <p className="mt-4 max-w-3xl text-base leading-7 text-slate-700">
                    COAN welcomes volunteers in design, translation, video
                    production, platform operations, web development, mentoring,
                    and community outreach.
                  </p>
                  <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                    <LinkButton href="/volunteer">Apply to volunteer</LinkButton>
                    <LinkButton href="/volunteer" variant="secondary">
                      Learn about roles
                    </LinkButton>
                  </div>
                </div>
              </div>
            </Reveal>
            <Reveal delay={0.1}>
              <ParallaxVisual strength={20}>
                <ImagePanel
                  src="/coan-community-event.png"
                  alt="A community event sign reading Stronger together, Better tomorrow"
                  caption="Community events create trusted spaces for learning and connection."
                />
              </ParallaxVisual>
            </Reveal>
          </div>
        </Container>
      </Section>

      <Section>
        <Container>
          <Reveal>
            <SectionHeader
              title="Trust and safety by design"
              description="Nonprofit credibility depends on clear boundaries, privacy awareness, and careful community practices."
            />
          </Reveal>
          <StaggerGroup className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-5" interval={0.06}>
            {trustSafetyItems.map((item) => (
              <article
                key={item.title}
                className="motion-card h-full rounded-lg border border-line bg-white p-5 shadow-sm hover:border-brand-blue hover:shadow-md"
              >
                <Globe2 className="h-6 w-6 text-brand-blue" aria-hidden="true" />
                <h3 className="mt-4 font-semibold text-brand-blue">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-6 text-slate-700">
                  {item.description}
                </p>
              </article>
            ))}
          </StaggerGroup>
        </Container>
      </Section>

      <section className="relative overflow-hidden border-y border-line bg-brand-blue-strong">
        <AmbientBackground variant="footer" />
        <Container>
          <Reveal className="relative z-10 py-14 sm:py-16">
            <div className="max-w-3xl">
              <p className="text-sm font-semibold uppercase text-blue-100">
                Join the platform
              </p>
              <h2 className="mt-3 text-3xl font-bold text-white sm:text-4xl">
                Help build a clearer path for newcomers in Canada.
              </h2>
              <p className="mt-4 text-base leading-7 text-blue-100">
                COAN combines resources, community learning, volunteer support,
                and careful technology into one public-service platform for
                Chinese-speaking newcomers in Canada.
              </p>
              <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                <LinkButton href="/resources">Explore resources</LinkButton>
                <LinkButton href="/community" variant="secondary">
                  Visit community
                </LinkButton>
              </div>
            </div>
          </Reveal>
        </Container>
      </section>
    </>
  );
}

import {
  volunteerPositions,
  volunteerProfiles,
  volunteerStatuses,
} from "@/lib/content";
import {
  Button,
  Container,
  Field,
  ImagePanel,
  Notice,
  PageHero,
  Section,
  SectionHeader,
  StatusBadge,
} from "@/components/ui";
import { HeartHandshake, Users, Wrench } from "lucide-react";

export const metadata = {
  title: "Volunteer Matching",
  description:
    "Apply as a COAN volunteer or mentor, request mentee support, and learn about consent-based matching workflow states.",
};

export default function VolunteerPage() {
  const pathways = [
    {
      title: "Volunteer with COAN",
      description:
        "Support events, translation, design, content production, community outreach, and platform operations.",
      Icon: HeartHandshake,
    },
    {
      title: "Become a mentor",
      description:
        "Share lived experience and help newcomers prepare better questions before seeking official or professional support.",
      Icon: Users,
    },
    {
      title: "Join technical and content teams",
      description:
        "Help improve accessible frontend surfaces, admin readiness, resource workflows, and bilingual content systems.",
      Icon: Wrench,
    },
  ];

  return (
    <>
      <PageHero
        eyebrow="Volunteer platform"
        title="Apply as a mentor or request support as a mentee"
        description="COAN reviews applications manually and prepares matches based on city, language, needs, availability, urgency, and consent."
      />

      <Section>
        <Container>
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <ImagePanel
              src="/coan-community-event.png"
              alt="Community event signage for a COAN-supported newcomer gathering"
              caption="Volunteer support should feel practical, welcoming, and consent-aware."
            />
            <div>
              <SectionHeader
                title="Choose the pathway that fits your capacity"
                description="COAN welcomes creative, language, technical, mentoring, and community operations support. Each pathway is reviewed manually before anyone is matched or assigned."
              />
              <div className="mt-7 grid gap-4">
                {pathways.map(({ title, description, Icon }) => (
                  <article
                    key={title}
                    className="card-surface flex gap-4 rounded-md border border-line bg-white p-5 shadow-sm"
                  >
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-md bg-brand-blue-soft text-brand-blue">
                      <Icon className="h-5 w-5" aria-hidden="true" />
                    </span>
                    <div>
                      <h2 className="font-semibold text-brand-blue">{title}</h2>
                      <p className="mt-2 text-sm leading-6 text-slate-700">
                        {description}
                      </p>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </Section>

      <Section tone="white">
        <Container>
          <SectionHeader
            title="Matching workflow states"
            description="COAN uses a careful review process so volunteers, mentors, and mentees understand expectations before taking part."
          />
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {volunteerStatuses.map((item) => (
              <div key={item.status} className="card-surface rounded-md border border-line bg-white p-5 shadow-sm">
                <StatusBadge>{item.status}</StatusBadge>
                <p className="mt-3 text-sm leading-6 text-slate-700">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      <Section>
        <Container>
          <SectionHeader
            title="Volunteer positions"
            description="COAN welcomes volunteers with creative, technical, language, mentoring, and community operations skills."
          />
          <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {volunteerPositions.map((position) => (
              <div
                key={position.title}
                className="motion-card card-surface rounded-md border border-line bg-white p-6 shadow-sm hover:border-brand-blue hover:shadow-md"
              >
                <h3 className="text-lg font-semibold text-brand-blue">
                  {position.title}
                </h3>
                <p className="mt-3 text-sm leading-6 text-slate-700">
                  {position.description}
                </p>
                <p className="mt-5 border-t border-line pt-4 text-xs font-semibold text-slate-600">
                  Typical commitment: {position.commitment}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      <Section tone="white">
        <Container>
          <SectionHeader
            title="Volunteer profiles"
            description="The demo data below represents the range of people who can support COAN’s programs, including creative, technical, translation, mentoring, and community operations roles."
          />
          <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {volunteerProfiles.map((volunteer) => (
              <article
                key={`${volunteer.name}-${volunteer.role}`}
                className="motion-card card-surface rounded-md border border-line bg-white p-6 shadow-sm hover:border-brand-blue hover:shadow-md"
              >
                <div className="flex flex-wrap items-center gap-2">
                  <StatusBadge>{volunteer.role}</StatusBadge>
                  <StatusBadge>{volunteer.status}</StatusBadge>
                </div>
                <h3 className="mt-4 text-lg font-semibold text-brand-blue">
                  {volunteer.name}
                </h3>
                <p className="mt-2 text-sm text-slate-700">
                  {volunteer.city} | {volunteer.languages.join(", ")}
                </p>
                <p className="mt-3 text-sm leading-6 text-slate-700">
                  {volunteer.focus}
                </p>
                <p className="mt-5 border-t border-line pt-4 text-xs font-semibold text-slate-600">
                  Availability: {volunteer.availability}
                </p>
              </article>
            ))}
          </div>
        </Container>
      </Section>

      <Section>
        <Container>
          <SectionHeader
            title="Applications"
            description="Forms are static in this MVP, but the structure is ready for validation, loading, success, and error states when backend workflows are connected."
          />
          <div className="mt-8 grid gap-8 xl:grid-cols-2">
            <VolunteerForm type="mentor" />
            <VolunteerForm type="mentee" />
          </div>
        </Container>
      </Section>

      <Section>
        <Container width="content">
          <Notice title="Privacy and consent">
            Volunteer information can include sensitive personal context. COAN
            should store only what is needed for matching, restrict admin access,
            and allow inactive or rejected records to be archived according to a
            retention policy.
          </Notice>
        </Container>
      </Section>
    </>
  );
}

function VolunteerForm({ type }: { type: "mentor" | "mentee" }) {
  const isMentor = type === "mentor";

  return (
    <form className="card-surface rounded-md border border-line bg-white p-6 shadow-sm">
      <h2 className="text-xl font-semibold text-brand-blue">
        {isMentor ? "Mentor application" : "Mentee application"}
      </h2>
      <p className="mt-3 text-sm leading-6 text-slate-700">
        {isMentor
            ? "Tell us where and how you can support newcomers."
            : "Tell us what kind of support would help right now."}
      </p>
      <fieldset className="mt-6 grid gap-4">
        <legend className="text-sm font-semibold text-slate-800">
          Contact details
        </legend>
        <div className="grid gap-4 sm:grid-cols-2">
          <Field label="Name" placeholder="Full name" />
          <Field label="Email" type="email" placeholder="name@example.com" />
          <Field label="City" placeholder="City" />
        </div>
      </fieldset>
      <fieldset className="mt-6 grid gap-4">
        <legend className="text-sm font-semibold text-slate-800">
          {isMentor ? "Support capacity" : "Support request"}
        </legend>
        {isMentor ? (
          <>
            <Field label="Language" placeholder="Languages you can support" />
            <Field
              label="Areas of support"
              textarea
              placeholder="Housing, healthcare, tax and benefits, community life, public policy, civic engagement, student support"
            />
            <Field label="Availability" placeholder="Weekdays, weekends, evenings" />
            <Field
              label="Background"
              textarea
              placeholder="Briefly describe your experience and motivation"
            />
          </>
        ) : (
          <>
            <Field
              label="Needs"
              textarea
              placeholder="Tell us what kind of support would help"
            />
            <Field
              label="Preferred language"
              options={["English", "Mandarin", "Cantonese", "Other"]}
            />
            <Field
              label="Urgency level"
              options={["Low", "Medium", "High", "Time-sensitive"]}
            />
          </>
        )}
      </fieldset>
      <div className="notice-surface mt-5 rounded-md border border-brand-blue/20 bg-brand-blue-soft p-4 text-sm leading-6 text-slate-700">
        COAN reviews applications manually before matching or assigning work.
        Backend success, error, and loading states should connect to this surface.
      </div>
      <label className="mt-5 flex gap-3 text-sm text-slate-700">
        <input type="checkbox" className="mt-1 h-4 w-4" />I consent to COAN
        storing and reviewing this application for volunteer matching.
      </label>
      <div className="mt-6">
        <Button>{isMentor ? "Submit mentor application" : "Submit mentee application"}</Button>
      </div>
    </form>
  );
}

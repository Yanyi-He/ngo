import {
  volunteerPositions,
  volunteerProfiles,
  volunteerStatuses,
} from "@/lib/content";
import {
  Button,
  Container,
  Field,
  Notice,
  PageHero,
  Section,
  SectionHeader,
  StatusBadge,
} from "@/components/ui";

export const metadata = {
  title: "Volunteer Matching",
  description:
    "Apply as a COAN volunteer or mentor, request mentee support, and learn about consent-based matching workflow states.",
};

export default function VolunteerPage() {
  return (
    <>
      <PageHero
        eyebrow="Volunteer platform"
        title="Apply as a mentor or request support as a mentee"
        description="COAN reviews applications manually and prepares matches based on city, language, needs, availability, urgency, and consent."
      />

      <Section>
        <Container>
          <SectionHeader
            title="Matching workflow states"
            description="COAN uses a careful review process so volunteers, mentors, and mentees understand expectations before taking part."
          />
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {volunteerStatuses.map((item) => (
              <div key={item.status} className="rounded-md border border-line bg-white p-5">
                <StatusBadge>{item.status}</StatusBadge>
                <p className="mt-3 text-sm leading-6 text-slate-700">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      <Section tone="white">
        <Container>
          <SectionHeader
            title="Volunteer positions"
            description="COAN welcomes volunteers with creative, technical, language, mentoring, and community operations skills."
          />
          <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {volunteerPositions.map((position) => (
              <div
                key={position.title}
                className="rounded-md border border-line bg-white p-6"
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

      <Section>
        <Container>
          <SectionHeader
            title="Volunteer profiles"
            description="The demo data below represents the range of people who can support COAN’s programs, including creative, technical, translation, mentoring, and community operations roles."
          />
          <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {volunteerProfiles.map((volunteer) => (
              <article
                key={`${volunteer.name}-${volunteer.role}`}
                className="rounded-md border border-line bg-white p-6"
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

      <Section tone="white">
        <Container>
          <div className="grid gap-8 lg:grid-cols-2">
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
    <form className="rounded-md border border-line bg-white p-6">
      <h2 className="text-xl font-semibold text-brand-blue">
        {isMentor ? "Mentor application" : "Mentee application"}
      </h2>
      <p className="mt-3 text-sm leading-6 text-slate-700">
        {isMentor
            ? "Tell us where and how you can support newcomers."
            : "Tell us what kind of support would help right now."}
      </p>
      <div className="mt-6 grid gap-4">
        <Field label="Name" placeholder="Full name" />
        <Field label="Email" type="email" placeholder="name@example.com" />
        <Field label="City" placeholder="City" />
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

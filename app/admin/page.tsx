import {
  communityPosts,
  events,
  featuredResources,
  menteeProfiles,
  mentorProfiles,
  volunteerProfiles,
} from "@/lib/content";
export const metadata = {
  title: "Admin Dashboard",
  robots: {
    index: false,
    follow: false,
  },
};

const applicationRows = [
  ...mentorProfiles.slice(0, 2).map((profile) => ({
    type: "Mentor",
    name: profile.name,
    city: profile.city,
    language: profile.languages.join(", "),
    status: profile.status,
  })),
  ...menteeProfiles.slice(0, 2).map((profile) => ({
    type: "Mentee",
    name: profile.name,
    city: profile.city,
    language: profile.preferredLanguage,
    status: profile.status,
  })),
  ...volunteerProfiles.slice(0, 2).map((profile) => ({
    type: "Volunteer",
    name: profile.name,
    city: profile.city,
    language: profile.languages.join(", "),
    status: profile.status,
  })),
];

export default function AdminPage() {
  return (
    <>
      <section className="border-b border-line bg-white">
        <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-normal text-brand-red">
            Admin
          </p>
          <h1 className="mt-4 text-3xl font-semibold leading-tight text-brand-blue sm:text-4xl lg:text-5xl">
            COAN content and operations dashboard
          </h1>
          <p className="mt-5 max-w-3xl text-base leading-7 text-slate-700">
            Protected-area placeholder for future authenticated tools: resource
            management, events, volunteer applications, community moderation,
            and consent-aware chatbot analytics.
          </p>
          <div className="notice-surface mt-6 rounded-md border border-warning/40 bg-amber-50 p-5 text-sm leading-6 text-slate-800">
            This frontend placeholder is not an authentication boundary. Backend
            access control, role permissions, and audit logging should be added
            before operational use.
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {[
            ["Resources", featuredResources.length.toString()],
            ["Events", events.length.toString()],
            ["Applications", (mentorProfiles.length + menteeProfiles.length + volunteerProfiles.length).toString()],
            ["Posts to review", communityPosts.filter((post) => post.status === "pending review").length.toString()],
          ].map(([label, value]) => (
            <div
              key={label}
              className="card-surface rounded-md border border-line bg-white p-5 shadow-sm"
            >
              <p className="text-sm font-semibold text-slate-600">{label}</p>
              <p className="mt-3 text-3xl font-semibold text-brand-blue">
                {value}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-8 grid gap-8 lg:grid-cols-2">
          <AdminPanel title="Volunteer applications">
            <AdminTable
              headers={["Type", "Name", "City", "Language", "Status"]}
              rows={applicationRows.map((row) => [
                row.type,
                row.name,
                row.city,
                row.language,
                row.status,
              ])}
            />
          </AdminPanel>

          <AdminPanel title="Manual matching workflow">
            <div className="grid gap-3 text-sm text-slate-700">
              <p>1. Review mentor and mentee applications.</p>
              <p>2. Add internal notes and change status to reviewing.</p>
              <p>3. Create a match request and assign both profile records.</p>
              <p>4. Notify participants with clear expectations and boundaries.</p>
            </div>
          </AdminPanel>

          <AdminPanel title="Resource CMS">
            <AdminTable
              headers={["Title", "Category", "Status"]}
              rows={featuredResources.map((resource) => [
                resource.title,
                resource.category,
                "published",
              ])}
            />
          </AdminPanel>

          <AdminPanel title="Event management">
            <AdminTable
              headers={["Title", "Date", "Capacity"]}
              rows={events.map((event) => [
                event.title,
                event.date,
                event.capacity.toString(),
              ])}
            />
          </AdminPanel>

          <AdminPanel title="Post review">
            <AdminTable
              headers={["Post", "Status"]}
              rows={communityPosts
                .filter((post) => post.status === "pending review")
                .map((post) => [post.title, post.status])}
            />
          </AdminPanel>

          <AdminPanel title="Chatbot usage logs">
            <div className="rounded-md bg-muted p-4 text-sm leading-6 text-slate-700">
              Store chat sessions and messages only when the user consents.
              Admins can review topic, timestamp, consent status, and safety
              flags without exposing secrets in the frontend.
            </div>
          </AdminPanel>
        </div>
      </section>
    </>
  );
}

function AdminPanel({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="card-surface rounded-md border border-line bg-white p-6 shadow-sm">
      <h2 className="text-xl font-semibold text-brand-blue">{title}</h2>
      <div className="mt-5">{children}</div>
    </section>
  );
}

function AdminTable({
  headers,
  rows,
}: {
  headers: string[];
  rows: string[][];
}) {
  return (
    <div className="overflow-x-auto">
      <table className="w-full min-w-[520px] border-collapse text-left text-sm">
        <thead>
          <tr className="border-b border-line text-slate-600">
            {headers.map((header) => (
              <th key={header} className="py-3 pr-4 font-semibold">
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row) => (
            <tr key={row.join("-")} className="border-b border-line last:border-0">
              {row.map((cell) => (
                <td key={cell} className="py-3 pr-4 text-slate-700">
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

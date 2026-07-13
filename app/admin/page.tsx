import {
  communityPosts,
  events,
  featuredResources,
  menteeProfiles,
  mentorProfiles,
  volunteerProfiles,
} from "@/lib/content";
import { SectionHeader } from "@/components/ui";

export const metadata = {
  title: "Admin Dashboard",
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
          <SectionHeader
            eyebrow="Admin"
            title="COAN content and operations dashboard"
            description="A management workspace for reviewing volunteer applications, publishing resources, coordinating events, moderating community posts, and monitoring consent-based chatbot activity."
          />
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
              className="rounded-md border border-line bg-white p-5"
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
    <section className="rounded-md border border-line bg-white p-6">
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

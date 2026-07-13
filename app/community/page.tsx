import {
  communityGuidelines,
  communityPosts,
  postCategories,
} from "@/lib/content";
import { communityPostPath } from "@/lib/routes";
import Link from "next/link";
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
  title: "Community Posts",
  description:
    "Join moderated COAN community discussions focused on responsible newcomer support, resource sharing, and practical questions.",
};

export default function CommunityPage() {
  return (
    <>
      <PageHero
        eyebrow="Moderated community"
        title="Ask practical questions and share responsible newcomer support"
        description="Community posts are designed for constructive discussion, resource sharing, and moderated peer support."
      />

      <Section>
        <Container>
          <Notice title="Moderation notice">
            COAN community spaces are not professional advice channels.
            Moderators may hide unsafe, discriminatory, spam, or misleading
            content. Avoid posting private identity, health, immigration, or
            financial details.
          </Notice>
        </Container>
      </Section>

      <Section tone="white">
        <Container>
          <div className="grid gap-8 lg:grid-cols-[1fr_380px]">
            <div>
              <SectionHeader title="Recent community posts" />
              <div className="mt-6 grid gap-4">
                {communityPosts.map((post) => (
                  <Link
                    key={post.title}
                    href={communityPostPath(post.title)}
                    className="motion-card group block rounded-md border border-line bg-white p-5 hover:border-brand-blue hover:shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-red"
                  >
                    <div className="flex flex-wrap items-center gap-2">
                      <StatusBadge>{post.category}</StatusBadge>
                      <StatusBadge>{post.status}</StatusBadge>
                    </div>
                    <h2 className="mt-3 text-xl font-semibold text-brand-blue group-hover:text-brand-blue-strong">
                      {post.title}
                    </h2>
                    <p className="mt-3 text-sm leading-6 text-slate-700">
                      {post.excerpt}
                    </p>
                    <p className="mt-3 text-sm text-slate-600">
                      Posted by {post.author} | {post.replies} comments
                    </p>
                    <span className="mt-4 inline-flex text-sm font-semibold text-brand-blue underline">
                      View discussion
                    </span>
                  </Link>
                ))}
              </div>
            </div>

            <aside className="grid gap-6">
              <section className="rounded-md border border-line bg-white p-6">
                <h2 className="text-xl font-semibold text-brand-blue">
                  Create a post
                </h2>
                <form className="mt-5 grid gap-4">
                  <Field label="Title" placeholder="What would you like to discuss?" />
                  <Field label="Category" options={postCategories} />
                  <Field
                    label="Post body"
                    textarea
                    placeholder="Share context, what you have already checked, and what kind of support would help"
                  />
                  <Button>Submit for review</Button>
                </form>
                <p className="mt-4 text-xs leading-5 text-slate-600">
                  Posts are reviewed for respectful language, privacy, safety,
                  and whether they may require official or professional support.
                </p>
              </section>

              <section className="rounded-md border border-line bg-white p-6">
                <h2 className="text-xl font-semibold text-brand-blue">
                  Community guidelines
                </h2>
                <ul className="mt-4 grid gap-3 text-sm leading-6 text-slate-700">
                  {communityGuidelines.map((guideline) => (
                    <li key={guideline}>{guideline}</li>
                  ))}
                </ul>
              </section>
            </aside>
          </div>
        </Container>
      </Section>
    </>
  );
}

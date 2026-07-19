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
  const featuredPost = communityPosts[0];
  const remainingPosts = communityPosts.slice(1);

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
          <div className="grid min-w-0 gap-8 lg:grid-cols-[minmax(0,1fr)_380px]">
            <div className="min-w-0">
              <SectionHeader
                title="Moderated discussion board"
                description="Posts are organized for practical questions and careful resource sharing. The board avoids popularity-driven ranking."
              />
              <div className="mt-6 flex max-w-full gap-2 overflow-x-auto pb-2">
                {postCategories.slice(0, 8).map((category) => (
                  <button
                    key={category}
                    type="button"
                    className="motion-button shrink-0 rounded-md border border-line bg-white px-3 py-2 text-sm font-semibold text-brand-blue hover:bg-brand-blue-soft focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-red"
                  >
                    {category}
                  </button>
                ))}
              </div>

              <Link
                href={communityPostPath(featuredPost.title)}
                className="card-surface mt-6 block rounded-md border border-line bg-white p-6 shadow-sm transition hover:border-brand-blue hover:shadow-md focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-red"
              >
                <div className="flex flex-wrap items-center gap-2">
                  <StatusBadge>{featuredPost.category}</StatusBadge>
                  <StatusBadge>{featuredPost.status}</StatusBadge>
                </div>
                <h2 className="mt-4 text-2xl font-semibold text-brand-blue">
                  {featuredPost.title}
                </h2>
                <p className="mt-3 text-sm leading-6 text-slate-700">
                  {featuredPost.excerpt}
                </p>
                <p className="mt-4 text-sm text-slate-600">
                  Posted by {featuredPost.author}. {featuredPost.replies} comments.
                </p>
              </Link>

              <div className="mt-5 grid gap-3">
                {remainingPosts.slice(0, 9).map((post) => (
                  <Link
                    key={post.title}
                    href={communityPostPath(post.title)}
                    className="motion-card group grid min-w-0 gap-4 rounded-md border border-line bg-white p-5 hover:border-brand-blue hover:shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-red md:grid-cols-[150px_minmax(0,1fr)_auto]"
                  >
                    <div className="flex flex-wrap content-start gap-2">
                      <StatusBadge>{post.category}</StatusBadge>
                      <StatusBadge>{post.status}</StatusBadge>
                    </div>
                    <div>
                      <h3 className="break-words font-semibold text-brand-blue group-hover:text-brand-blue-strong">
                        {post.title}
                      </h3>
                      <p className="mt-2 text-sm leading-6 text-slate-700">
                        {post.excerpt}
                      </p>
                      <p className="mt-3 text-sm text-slate-600">
                        Posted by {post.author}. {post.replies} comments.
                      </p>
                    </div>
                    <span className="text-sm font-semibold text-brand-blue underline">
                      View
                    </span>
                  </Link>
                ))}
              </div>
              <div className="notice-surface mt-5 rounded-md border border-line bg-white p-5 text-sm leading-6 text-slate-700">
                <h3 className="font-semibold text-brand-blue">Empty state</h3>
                <p className="mt-2">
                  When no posts match a filter, COAN should show related
                  categories, guidelines, and a clear path to submit a question.
                </p>
              </div>
            </div>

            <aside className="grid min-w-0 gap-6">
              <section className="card-surface rounded-md border border-line bg-white p-6 shadow-sm">
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

              <section className="card-surface rounded-md border border-line bg-white p-6 shadow-sm">
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

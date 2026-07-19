import { notFound } from "next/navigation";
import { communityPosts } from "@/lib/content";
import { slugify } from "@/lib/routes";
import {
  Container,
  LinkButton,
  Notice,
  PageHero,
  Section,
  StatusBadge,
} from "@/components/ui";

export function generateStaticParams() {
  return communityPosts.map((post) => ({ id: slugify(post.title) }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const post = communityPosts.find((item) => slugify(item.title) === id);

  return {
    title: post ? post.title : "Community Discussion",
    description: post?.excerpt,
  };
}

export default async function CommunityPostPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const post = communityPosts.find((item) => slugify(item.title) === id);

  if (!post) {
    notFound();
  }

  return (
    <>
      <PageHero
        eyebrow={post.category}
        title={post.title}
        description={post.excerpt}
        primaryAction={
          <LinkButton href="/community" variant="secondary">
            Back to community
          </LinkButton>
        }
      />

      <Section>
        <Container width="content">
          <article className="card-surface rounded-md border border-line bg-white p-6 shadow-sm sm:p-8">
            <div className="flex flex-wrap gap-2">
              <StatusBadge>{post.category}</StatusBadge>
              <StatusBadge>{post.status}</StatusBadge>
            </div>
            <p className="mt-6 text-sm font-semibold text-slate-600">
              Posted by {post.author} | {post.replies} comments
            </p>
            <h2 className="mt-6 text-2xl font-semibold text-brand-blue">
              Discussion summary
            </h2>
            <p className="mt-4 text-base leading-8 text-slate-700">
              {post.excerpt}
            </p>
          </article>
        </Container>
      </Section>

      <Section tone="white">
        <Container width="content">
          <Notice title="Moderation reminder">
            COAN community posts are for constructive discussion and resource
            sharing. Avoid posting private identity, health, immigration,
            financial, or address details.
          </Notice>
        </Container>
      </Section>
    </>
  );
}

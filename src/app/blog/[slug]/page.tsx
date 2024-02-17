import { notFound } from "next/navigation";
import { me } from "@/data/authors/default";
import PostLayout from "@/layouts/PostLayout";
import { allBlogs } from "contentlayer/generated";

import { Mdx } from "@/components/mdx";
import PageTitle from "@/components/PageTitle";
import { api } from "@/trpc/server";
import { type Blog as BlogPost } from ".contentlayer/generated";

export async function generateStaticParams() {
  return allBlogs.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}) {
  const post = allBlogs.find((post) => post.slug === params.slug);
  return { title: post?.title ?? "Blog" };
}

export default async function BlogPostPage({
  params,
}: {
  params: { slug: string };
}) {
  const postIndex = allBlogs.findIndex((post) => post.slug === params.slug);
  const post: BlogPost | undefined = allBlogs.find(
    (post) => post._raw.flattenedPath === params.slug,
  );
  const next = allBlogs[postIndex - 1] ?? null;
  const prev = allBlogs[postIndex + 1] ?? null;

  const authorDetails = me;

  if (!post) {
    notFound();
  }

  if (post.draft) {
    return (
      <div className="mt-24 text-center">
        <PageTitle>
          Under Construction{" "}
          <span role="img" aria-label="roadwork sign">
            🚧
          </span>
        </PageTitle>
      </div>
    );
  }

  let postDetails:
    | {
        id: number;
        name: string | null;
        slug: string | null;
        views: number | null;
        createdAt: Date;
        updatedAt: Date | null;
      }
    | undefined;
  try {
    postDetails = await api.post.getPost.query({ slug: post.slug });
  } catch (err) {
    console.error(err);
  }

  if (!postDetails) {
    try {
      await api.post.createPost.mutate({ name: post.title, slug: post.slug });
    } catch (err) {
      console.error(err);
    }
  }

  const views = !postDetails ? 0 : postDetails?.views ?? 0;

  return (
    <PostLayout
      slug={post.slug}
      date={post.date}
      title={post.title}
      author={authorDetails}
      views={views}
      next={next}
      prev={prev}
    >
      <Mdx code={post.body.code} />
    </PostLayout>
  );
}

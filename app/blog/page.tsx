import Link from "next/link";
import { allBlogs } from "contentlayer/generated";

export const metadata = {
  title: "Blog",
  description: "Read my thoughts about software development or other topics",
};

export default async function BlogPage() {
  return (
    <section>
      <h1 className="font-bold text-3xl font-serif">{metadata.title}</h1>
      <p className="text-lg text-neutral-500 mb-5">{metadata.description}</p>
      {allBlogs
        .sort((a, b) => {
          if (new Date(a.publishedAt) > new Date(b.publishedAt)) {
            return -1;
          }
          return 1;
        })
        .map((post) => (
          <Link
            key={post.slug}
            className="flex flex-col space-y-1 mb-4"
            href={`/blog/${post.slug}`}
          >
            <div className="w-full flex flex-row">
              <p className="mr-8 text-neutral-500">{post.publishedAt}</p>
              <p>{post.title}</p>
            </div>
          </Link>
        ))}
    </section>
  );
}

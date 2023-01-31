import Link from "next/link";
import { allBlogs } from "contentlayer/generated";
// import ViewCounter from './view-counter';

// export const metadata = {
//   title: 'Blog',
//   description: 'Read my thoughts on software development, design, and more.',
// };

export default async function BlogPage() {
  // console.log(allBlogs)

  return (
    <section>
      <h1 className="font-bold text-3xl font-serif mb-5">Blog</h1>
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

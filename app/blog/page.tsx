import { allBlogs } from '@/.contentlayer/generated';
import { compareDesc } from 'date-fns';

import formatDate from '@/lib/formatDate';
import FeatureItem from '@/components/feature-item';
import Link from '@/components/Link';

export const metadata = {
  title: 'Blog',
};

const getAllPosts = () => {
  return allBlogs.sort((a, b) => {
    return compareDesc(new Date(a.date), new Date(b.date));
  });
};

export default async function BlogPage() {
  const posts = getAllPosts();

  return (
    <section className="w-full">
      <div className="divide-y">
        <div className="space-y-2 pt-6 pb-4">
          <h1 className="text-2xl font-extrabold leading-9 tracking-tight md:text-3xl">Blog</h1>
          <p className="text-lg leading-7 text-muted-foreground">
            Showcase of my thoughts and interests
          </p>
        </div>
        <ul className="w-full pt-4 flex flex-col space-y-4">
          {!posts.length && 'No posts found.'}
          {posts.map((post) => {
            const { slug, date, title } = post;
            return (
              <li key={`blog-${slug}`} className="w-full">
                <Link href={`/blog/${slug}`} className="text-left w-full">
                  <FeatureItem title={title} description={formatDate(date)} />
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}

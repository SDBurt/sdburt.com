import { cache } from 'react';
import projectsData from '@/data/projectsData';
import { allBlogs } from 'contentlayer/generated';
import { compareDesc } from 'date-fns';

import formatDate from '@/lib/formatDate';
import FeatureItem from '@/components/feature-item';
import Link from '@/components/Link';

const MAX_DISPLAY = 5;

export const metadata = {
  title: 'Home',
};

const getAllPosts = cache(() => {
  return allBlogs.sort((a, b) => {
    return compareDesc(new Date(a.date), new Date(b.date));
  });
});

export default async function HomePage() {
  const posts = getAllPosts();

  return (
    <section className="w-full">
      <div className="divide-y">
        {/* Header */}
        <div className="space-y-2 pt-6 pb-8">
          <h1 className="text-2xl font-extrabold leading-9 tracking-tight md:text-3xl">Hello 👋</h1>
          <p className="leading-7 text-muted-foreground">
            Welcome to my site. I'm Sean, a software engineer with three years of professional
            experience in web development and two years of professional experience in machine
            learning. I have experience collaborating in a startup environment, am quick to
            productivity, and continually seek the opportunity to learn.
          </p>
        </div>

        {/* Featured Projects */}
        <section>
          <div className="space-y-2 pt-6 pb-8">
            <h2 className="text-2xl font-bold leading-9 tracking-tight text-primary ">
              Featured Projects 🔨
            </h2>
            <ul className="w-full flex flex-col space-y-4">
              {!projectsData.length && 'No posts found.'}
              {projectsData.slice(0, MAX_DISPLAY).map((frontMatter) => {
                const { title, description, href } = frontMatter;
                return (
                  <li key={`project-${href}`} className="w-full">
                    <Link href={href} className="w-full">
                      <FeatureItem title={title} description={description} />
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        </section>

        {/* Latest Posts */}
        <section>
          <div className="space-y-2 pt-6 pb-8 w-full">
            <h2 className="text-2xl font-bold leading-9 tracking-tight text-primary">
              Latest Posts 📝
            </h2>
            <ul className="w-full flex flex-col space-y-4">
              {!posts.length && 'No posts found.'}
              {posts.slice(0, MAX_DISPLAY).map((frontMatter) => {
                const { slug, date, title } = frontMatter;
                return (
                  <li key={`blog-${slug}`} className="w-full">
                    <Link href={`/blog/${slug}`} className="w-full">
                      <FeatureItem title={title} description={formatDate(date)} />
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        </section>
      </div>
      <div>
        {posts.length > MAX_DISPLAY && (
          <div className="flex justify-end text-base font-medium leading-6">
            <Link href="/blog" className="text-primary  " aria-label="all posts">
              All Posts &rarr;
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}

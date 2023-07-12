import { cache } from 'react';
import projectsData from '@/data/projectsData';
import { allBlogs } from 'contentlayer/generated';
import { compareDesc } from 'date-fns';

import formatDate from '@/lib/formatDate';
import Link from '@/components/Link';
import { Card, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

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
    <>
      <div className="divide-y">
        {/* Header */}
        <div className="space-y-2 pt-6 pb-8 md:space-y-5">
          <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-primary sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
            Hello
          </h1>
          <p className="text-lg leading-7 text-muted-foreground">
            Welcome to my site. I'm Sean, a software engineer with three years of experience in web
            development and two years of experience in machine learning. I have experience
            collaborating in a startup environment, am quick to productivity, and continually seek
            the opportunity to learn.
          </p>
        </div>

        {/* Featured Projects */}
        <div className="space-y-2 pt-6 pb-8 md:space-y-5">
          <h2 className="text-2xl font-bold leading-9 tracking-tight text-primary sm:text-4xl sm:leading-10 md:text-4xl md:leading-14">
            Featured Projects
          </h2>
          <ul className="w-full flex flex-col space-y-4">
            {!projectsData.length && 'No posts found.'}
            {projectsData.slice(0, MAX_DISPLAY).map((frontMatter) => {
              const { title, description, href } = frontMatter;
              return (
                <li key={`project-${href}`} className="w-full">
                  <Link href={href} className="w-full">
                    <Card className="w-full">
                      <CardHeader className="p-6 w-full">
                        <CardTitle>{title}</CardTitle>
                        <CardDescription>{description}</CardDescription>
                      </CardHeader>
                    </Card>
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>

        {/* Latest Posts */}
        <div className="space-y-2 pt-6 pb-8 md:space-y-5 w-full">
          <h2 className="text-2xl font-bold leading-9 tracking-tight text-primary sm:text-4xl sm:leading-10 md:text-4xl md:leading-14">
            Latest Posts
          </h2>
          <ul className="w-full flex flex-col space-y-4">
            {!posts.length && 'No posts found.'}
            {posts.slice(0, MAX_DISPLAY).map((frontMatter) => {
              const { slug, date, title } = frontMatter;
              return (
                <li key={`blog-${slug}`} className="w-full">
                  <Link href={`/blog/${slug}`} className="text-left w-full">
                    <Card className="w-full">
                      <CardHeader className="p-6 w-full">
                        <CardTitle>{title}</CardTitle>
                        <CardDescription>{formatDate(date)}</CardDescription>
                      </CardHeader>
                    </Card>
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </div>

      {posts.length > MAX_DISPLAY && (
        <div className="flex justify-end text-base font-medium leading-6">
          <Link href="/blog" className="text-primary  " aria-label="all posts">
            All Posts &rarr;
          </Link>
        </div>
      )}
    </>
  );
}

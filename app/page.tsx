import Link from '@/components/Link';
import Tag from '@/components/Tag';

import formatDate from '@/lib/formatDate';
import projectsData from '@/data/projectsData';

import { compareDesc } from 'date-fns';
import { allBlogs } from 'contentlayer/generated';

const MAX_DISPLAY = 5;

export const revalidate = 60;
export const metadata = {
  description: 'Developer, writer, and creator.',
  openGraph: {
    title: 'Sean Burt',
    description: 'Developer, writer, and creator.',
    url: 'https://sdburt.com',
    siteName: 'Lee Robinson',
    images: [
      {
        url: 'https://sdburt.com/og.jpg',
        width: 1920,
        height: 1080,
      },
    ],
    locale: 'en-US',
    type: 'website',
  },
};

export default async function HomePage() {
  const posts = allBlogs.sort((a, b) => {
    return compareDesc(new Date(a.date), new Date(b.date));
  });

  return (
    <>
      <div className="divide-y divide-gray-500 dark:divide-gray-400">
        {/* Header */}
        <div className="space-y-2 pt-6 pb-8 md:space-y-5">
          <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
            Hello
          </h1>
          <p className="text-lg leading-7 text-gray-500 dark:text-gray-400">
            Welcome to my site. I'm Sean, a software engineer with two years of experience
            specializing in web development and machine learning. I have experience collaborating in
            a startup environment, am quick to productivity, and continually seek the opportunity to
            learn.
          </p>
        </div>

        {/* Featured Projects */}
        <div className="space-y-2 pt-6 pb-8 md:space-y-5">
          <h2 className="text-2xl font-bold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-4xl md:leading-14">
            Featured Projects
          </h2>
          <ul>
            {!projectsData.length && 'No posts found.'}
            {projectsData.slice(0, MAX_DISPLAY).map((frontMatter) => {
              const { title, description, href } = frontMatter;
              return (
                <li key={`project-${href}`} className="py-8">
                  <article>
                    <div className="space-y-2 xl:grid xl:grid-cols-4 xl:items-baseline xl:space-y-0">
                      <div className="space-y-2 xl:col-span-3">
                        <div className="space-y-2">
                          <div>
                            <h2 className="text-2xl font-bold leading-8 tracking-tight">
                              <Link href={href} className="text-gray-900 dark:text-gray-100">
                                {title}
                              </Link>
                            </h2>
                          </div>
                          <p className="prose max-w-none text-gray-500 dark:text-gray-400">
                            {description}
                          </p>
                        </div>
                        <div className="text-base font-medium leading-6">
                          {!href && <p className="text-primary-500">WIP, Link soon.</p>}
                          {href && (
                            <Link
                              href={href}
                              className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
                              aria-label={`Check out "${title}"`}
                            >
                              Check out &rarr;
                            </Link>
                          )}
                        </div>
                      </div>
                    </div>
                  </article>
                </li>
              );
            })}
          </ul>
        </div>

        {/* Latest Posts */}
        <div className="space-y-2 pt-6 pb-8 md:space-y-5">
          <h2 className="text-2xl font-bold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-4xl md:leading-14">
            Latest Posts
          </h2>
          <ul>
            {!posts.length && 'No posts found.'}
            {posts.slice(0, MAX_DISPLAY).map((frontMatter) => {
              const { slug, date, title, summary, tags } = frontMatter;
              return (
                <li key={`blog-${slug}`} className="py-8">
                  <article>
                    <div className="space-y-2 xl:grid xl:grid-cols-4 xl:items-baseline xl:space-y-0">
                      <dl>
                        <dt className="sr-only">Published on</dt>
                        <dd className="text-base font-medium leading-6 text-gray-500 dark:text-gray-400">
                          <time dateTime={date}>{formatDate(date)}</time>
                        </dd>
                      </dl>
                      <div className="space-y-5 xl:col-span-3">
                        <div className="space-y-6">
                          <div>
                            <h2 className="text-2xl font-bold leading-8 tracking-tight">
                              <Link
                                href={`/blog/${slug}`}
                                className="text-gray-900 dark:text-gray-100"
                              >
                                {title}
                              </Link>
                            </h2>
                            <div className="flex flex-wrap">
                              {tags.map((tag) => (
                                <Tag key={tag} text={tag} />
                              ))}
                            </div>
                          </div>
                          <p className="prose max-w-none text-gray-500 dark:text-gray-400">
                            {summary}
                          </p>
                        </div>
                        <div className="text-base font-medium leading-6">
                          <Link
                            href={`/blog/${slug}`}
                            className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
                            aria-label={`Read "${title}"`}
                          >
                            Read more &rarr;
                          </Link>
                        </div>
                      </div>
                    </div>
                  </article>
                </li>
              );
            })}
          </ul>
        </div>
      </div>

      {posts.length > MAX_DISPLAY && (
        <div className="flex justify-end text-base font-medium leading-6">
          <Link
            href="/blog"
            className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
            aria-label="all posts"
          >
            All Posts &rarr;
          </Link>
        </div>
      )}
    </>
  );
}

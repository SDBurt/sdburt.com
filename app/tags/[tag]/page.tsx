import Link from '@/components/Link';
import Tag from '@/components/Tag';
import formatDate from '@/lib/formatDate';

import { getAllTags } from '@/lib/tags';
import kebabCase from '@/lib/kebabCase';

import { allBlogs } from '@/.contentlayer/generated/index.mjs';

export async function generateStaticParams() {
  const tags = getAllTags(allBlogs);
  return Object.keys(tags).map((tag) => ({ tag }));
}

export default function TagPage({ params }) {
  const filteredBlogs = allBlogs.filter(
    (post) => post.draft !== true && post.tags.map((t) => kebabCase(t)).includes(params.tag)
  );

  // Capitalize first letter and convert space to dash
  // const title = tag[0].toUpperCase() + tag.split(' ').join('-').slice(1);
  return (
    <>
      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        <div className="space-y-2 pt-6 pb-8 md:space-y-5">
          <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
            Tag: {params.tag}
          </h1>
        </div>
        <ul>
          {!filteredBlogs.length && 'No posts found.'}
          {filteredBlogs.map((post) => {
            const { slug, date, title, summary, tags } = post;
            return (
              <li key={slug} className="py-4">
                <article className="space-y-2 xl:grid xl:grid-cols-4 xl:items-baseline xl:space-y-0">
                  <dl>
                    <dt className="sr-only">Published on</dt>
                    <dd className="text-base font-medium leading-6 text-gray-500 dark:text-gray-400">
                      <time dateTime={date}>{formatDate(date)}</time>
                    </dd>
                  </dl>
                  <div className="space-y-3 xl:col-span-3">
                    <div>
                      <h3 className="text-2xl font-bold leading-8 tracking-tight">
                        <Link href={`/blog/${slug}`} className="text-gray-900 dark:text-gray-100">
                          {title}
                        </Link>
                      </h3>
                      <div className="flex flex-wrap">
                        {tags.map((tag) => (
                          <Tag key={tag} text={tag} />
                        ))}
                      </div>
                    </div>
                    <div className="prose max-w-none text-gray-500 dark:text-gray-400">
                      {summary}
                    </div>
                  </div>
                </article>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
}

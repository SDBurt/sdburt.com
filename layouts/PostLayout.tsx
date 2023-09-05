import { siteConfig } from '@/config/site';
import Image from '@/components/Image';
import Link from '@/components/Link';
import PageTitle from '@/components/PageTitle';
import ScrollTop from '@/components/ScrollTop';

const postDateTemplate: Intl.DateTimeFormatOptions = {
  weekday: 'long',
  year: 'numeric',
  month: 'long',
  day: 'numeric',
};

export default function PostLayout({ authors, slug, date, title, children, next, prev }) {
  return (
    <section>
      <ScrollTop />
      <article className="w-full">
        <div className="flex flex-col space-y-6 items-center">
          <header className="pt-6">
            <div className="flex flex-col-reverse sm:flex-col">
              <div className="space-y-1 text-center">
                <dl className="space-y-6">
                  <div>
                    <dt className="sr-only">Published on</dt>
                    <dd className="text-base font-medium leading-6 text-muted-foreground">
                      <time dateTime={date}>
                        {new Date(date).toLocaleDateString(siteConfig.locale, postDateTemplate)}
                      </time>
                    </dd>
                  </div>
                </dl>
                <div>
                  <PageTitle>{title}</PageTitle>
                </div>
              </div>
            </div>
          </header>
          <div className="py-8" style={{ gridTemplateRows: 'auto 1fr' }}>
            <dl className="pt-3 pb-6 xl:border-b xl:border-gray-200 xl:pt-6 xl:dark:border-gray-700">
              <dt className="sr-only">Author</dt>
              <dd>
                <ul className="flex justify-center space-x-8 sm:space-x-12 xl:block xl:space-x-0 xl:space-y-8">
                  {authors &&
                    authors.map((author) => (
                      <li className="flex items-center space-x-2" key={author.name}>
                        {author.avatar && (
                          <Image
                            src={author.avatar}
                            width={38}
                            height={38}
                            alt="avatar"
                            className="h-10 w-10 rounded-full"
                          />
                        )}
                        <dl className="whitespace-nowrap text-sm font-medium leading-5">
                          <dt className="sr-only">Name</dt>
                          <dd className="text-primary">{author.name}</dd>
                          <dt className="sr-only">Twitter</dt>
                          <dd>
                            {author.twitter && (
                              <Link href={author.twitter} className="text-primary  ">
                                {author.twitter.replace('https://twitter.com/', '@')}
                              </Link>
                            )}
                          </dd>
                        </dl>
                      </li>
                    ))}
                </ul>
              </dd>
            </dl>

            <div className="divide-y xl:pb-0 w-full">
              <div className="text-muted-foreground pt-6 pb-6 ">{children}</div>
            </div>
            <footer>
              <div className=" text-sm font-medium leading-5 xl:col-start-1 xl:row-start-2 xl:divide-y">
                {(next || prev) && (
                  <div className="flex justify-between py-4 xl:block xl:space-y-8 xl:py-8">
                    {prev && (
                      <div>
                        <h2 className="text-xs uppercase tracking-wide text-muted-foreground">
                          Previous Article
                        </h2>
                        <div className="text-primary  ">
                          <Link href={prev.slug}>{prev.title}</Link>
                        </div>
                      </div>
                    )}
                    {next && (
                      <div>
                        <h2 className="text-xs uppercase tracking-wide text-muted-foreground">
                          Next Article
                        </h2>
                        <div className="text-primary  ">
                          <Link href={next.slug}>{next.title}</Link>
                        </div>
                      </div>
                    )}
                  </div>
                )}
              </div>
              <div className="pt-4 xl:pt-8">
                <Link href="/blog" className="text-primary  ">
                  &larr; Back to the blog
                </Link>
              </div>
            </footer>
          </div>
        </div>
      </article>
    </section>
  );
}

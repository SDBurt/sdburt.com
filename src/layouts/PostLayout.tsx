"use client";

import { siteConfig } from "@/config/site";
import Image from "@/components/Image";
import PageTitle from "@/components/PageTitle";
import ScrollTop from "@/components/ScrollTop";
import { type ReactNode } from "react";
import { type Blog } from "contentlayer/generated";
import { type Author } from "@/types";
import { api } from "@/trpc/react";
import Link from "next/link";

const postDateTemplate: Intl.DateTimeFormatOptions = {
  weekday: "long",
  year: "numeric",
  month: "long",
  day: "numeric",
};

interface PostLayoutProps {
  author: Author;
  slug: string;
  views: number;
  date: string;
  title: string;
  children: ReactNode;
  next: Blog | null;
  prev: Blog | null;
}

export default function PostLayout({
  author,
  slug,
  views,
  date,
  title,
  children,
  next,
  prev,
}: PostLayoutProps) {
  if (typeof window !== "undefined") {
    const incrementViews = api.post.incrememntViews.useMutation();

    const viewed = window.localStorage.getItem(`sdburt-post-viewed_${slug}`);

    if (!viewed) {
      window.localStorage.setItem(
        `sdburt-post-viewed_${slug}`,
        JSON.stringify("viewed"),
      );
      incrementViews.mutate({ slug: slug });
    }
  }

  return (
    <section>
      <ScrollTop />
      <article className="w-full">
        <div className="flex flex-col items-center space-y-6">
          <header className="pt-6">
            <div className="flex flex-col-reverse sm:flex-col">
              <div className="space-y-1 text-center">
                <dl className="space-y-6">
                  <div>
                    <dt className="sr-only">Published on</dt>
                    <dd className="text-base font-medium leading-6 text-muted-foreground">
                      <time dateTime={date}>
                        {new Date(date).toLocaleDateString(
                          siteConfig.locale,
                          postDateTemplate,
                        )}
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
          <div className="py-8" style={{ gridTemplateRows: "auto 1fr" }}>
            <dl className="pb-6 pt-3 xl:border-b xl:border-gray-200 xl:pt-6 xl:dark:border-gray-700">
              <dt className="sr-only">Author</dt>
              <dd className="flex flex-row items-center justify-between">
                <ul className="flex justify-center space-x-8 sm:space-x-12 xl:block xl:space-x-0 xl:space-y-8">
                  {author && (
                    <li
                      className="flex items-center space-x-2"
                      key={author.name}
                    >
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
                            <Link
                              href={author.twitter}
                              className="text-primary  "
                            >
                              {author.twitter.replace(
                                "https://twitter.com/",
                                "@",
                              )}
                            </Link>
                          )}
                        </dd>
                      </dl>
                    </li>
                  )}
                </ul>
                <dl className="text-muted-foreground">{views} Views</dl>
              </dd>
            </dl>

            <div className="w-full divide-y xl:pb-0">
              <div className="pb-6 pt-6 text-muted-foreground ">{children}</div>
            </div>
            <footer>
              <div className=" text-sm font-medium leading-5 xl:col-start-1 xl:row-start-2 xl:divide-y">
                {(next ?? prev) && (
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
                        <div className="text-primary">
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

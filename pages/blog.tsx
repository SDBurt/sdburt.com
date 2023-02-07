import { allBlogs } from '@/.contentlayer/generated';
import Layout from '@/components/layout';
import Head from 'next/head';
import Link from 'next/link';

export const POSTS_PER_PAGE = 5;

export async function getStaticProps() {
  return { props: { posts: allBlogs } };
}

export default function BlogPage({ posts }) {
  return (
    <Layout>
      <Head>
        <title>SDBurt - Blog</title>
        <meta name="description" content="Portfolio site" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <section>
        <ul className="flex flex-col space-y-6">
          {posts.map((post) => {
            return (
              <li key={post.title} className="">
                <article>
                  <Link href={post.slug}>
                    <h2 className="font-semibold">{post.title}</h2>
                    <p className="prose prose-neutral prose-quoteless dark:prose-invert">
                      {post.summary}
                    </p>
                  </Link>
                </article>
              </li>
            );
          })}
        </ul>
      </section>
    </Layout>
  );
}

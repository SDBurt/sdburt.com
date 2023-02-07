import lodash from 'lodash';
import { allBlogs } from 'contentlayer/generated';
import { Mdx } from '@/components/mdx';
import Balancer from 'react-wrap-balancer';
import { format, parseISO, parse } from 'date-fns';
import Layout from '@/components/layout';
import Head from 'next/head';

export async function getStaticPaths() {
  const paths = allBlogs.map((post) => post.slug);
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const postIndex = allBlogs.findIndex((post) => post._raw.flattenedPath === params.slug);
  const post = allBlogs.find((post) => post._raw.flattenedPath === params.slug);
  const next = allBlogs[postIndex - 1] || null;
  const prev = allBlogs[postIndex + 1] || null;

  return {
    props: {
      post,
      prev,
      next,
    },
  };
}

export default function Blog({ post, next, prev }) {
  return (
    <Layout>
      <Head>
        <title>SDBurt - {post.title}</title>
        <meta name="description" content="Portfolio site" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <h1 className="max-w-[650px] font-serif text-3xl font-bold">
          <Balancer>{post.title}</Balancer>
        </h1>
        <div className="mt-4 mb-8 grid max-w-[650px] grid-cols-[auto_1fr_auto] items-center font-mono text-sm">
          <div className="rounded-md bg-neutral-100 px-2 py-1 tracking-tighter dark:bg-neutral-800">
            <time dateTime={post.date}>{post.date}</time>
          </div>
          <div className="mx-2 h-[0.2em] bg-neutral-50 dark:bg-neutral-800" />
          {/* <ViewCounter slug={post.slug} trackView /> */}
        </div>
        <Mdx code={post.body.code} />
      </div>
    </Layout>
  );
}

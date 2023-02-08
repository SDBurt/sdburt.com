import lodash from 'lodash';
import PageTitle from '@/components/PageTitle';

import { notFound } from 'next/navigation';
import { authors } from '@/data/authors/default';

import { allBlogs } from 'contentlayer/generated';
import { Mdx } from '@/components/mdx';
import PostLayout from '@/layouts/PostLayout';

export async function getStaticPaths() {
  const paths = allBlogs.map((post) => `/blog/${post.slug}`);
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const postIndex = allBlogs.findIndex((post) => post.slug === params.slug);
  const post = allBlogs.find((post) => post._raw.flattenedPath === params.slug);
  const next = allBlogs[postIndex - 1] || null;
  const prev = allBlogs[postIndex + 1] || null;

  const authorList = lodash.get(post, 'authors', ['default']);

  const authorDetails = authorList.map((author) => {
    return lodash.get(authors, author);
  });

  return {
    props: {
      post,
      authorDetails,
      prev,
      next,
    },
  };
}

export default function Blog({ post, authorDetails, next, prev }) {
  if (!post) {
    notFound();
  }

  return (
    <>
      {post.draft !== true ? (
        <>
          <PostLayout
            slug={post.slug}
            date={post.date}
            title={post.title}
            tags={post.tags}
            authors={authorDetails}
            next={next}
            prev={prev}
          >
            <Mdx code={post.body.code} />
          </PostLayout>
        </>
      ) : (
        <div className="mt-24 text-center">
          <PageTitle>
            Under Construction{' '}
            <span role="img" aria-label="roadwork sign">
              🚧
            </span>
          </PageTitle>
        </div>
      )}
    </>
  );
}

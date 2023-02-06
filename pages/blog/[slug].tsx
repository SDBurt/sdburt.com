import lodash from 'lodash'
import PageTitle from '@/components/PageTitle'

import { authors } from '@/data/authors/default'

import { allBlogs } from 'contentlayer/generated'
import { Mdx } from '@/components/mdx'
import PostLayout from '@/layouts/PostLayout'

export async function getStaticPaths() {
  const paths = allBlogs.map((post) => post.slug)
  return {
    paths,
    fallback: false,
  }
}

export async function getStaticProps({ params }) {
  const postIndex = allBlogs.findIndex((post) => post._raw.flattenedPath === params.slug)
  const post = allBlogs.find((post) => post._raw.flattenedPath === params.slug)
  const next = allBlogs[postIndex - 1] || null
  const prev = allBlogs[postIndex + 1] || null
  // console.log(post)
  const authorList = lodash.get(post, 'authors', ['default'])

  const authorDetails = authorList.map((author) => {
    return lodash.get(authors, author)
  })

  return {
    props: {
      post,
      authorDetails,
      prev,
      next,
    },
  }
}

export default function Blog({ post, authorDetails, next, prev }) {
  return (
    <>
      {post.draft !== true ? (
        // <MDXLayoutRenderer
        //   layout={frontMatter.layout || DEFAULT_LAYOUT}
        //   toc={toc}
        //   mdxSource={mdxSource}
        //   frontMatter={frontMatter}
        //   authorDetails={authorDetails}
        //   prev={prev}
        //   next={next}
        // />
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
          {/* <section>
          <h1 className="font-bold text-3xl font-serif max-w-[650px]">
            <Balancer>{post.title}</Balancer>
          </h1>
          <div className="grid grid-cols-[auto_1fr_auto] items-center mt-4 mb-8 font-mono text-sm max-w-[650px]">
            <div className="bg-neutral-100 dark:bg-neutral-800 rounded-md px-2 py-1 tracking-tighter">
              {post.date}
            </div>
            <div className="h-[0.2em] bg-neutral-50 dark:bg-neutral-800 mx-2" />
            <ViewCounter slug={post.slug} trackView />
          </div>
          <Mdx code={post.body.code} />
        </section> */}
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
  )
}

import { siteMetadata } from '@/data/siteMetadata'
import ListLayout from '@/layouts/ListLayout'
import { PageSEO } from '@/components/SEO'
import { allBlogs } from '@/.contentlayer/generated'

export const POSTS_PER_PAGE = 5

export async function getStaticProps() {
  const initialDisplayPosts = allBlogs.slice(0, POSTS_PER_PAGE)
  const pagination = {
    currentPage: 1,
    totalPages: Math.ceil(allBlogs.length / POSTS_PER_PAGE),
  }

  return { props: { initialDisplayPosts, posts: allBlogs, pagination } }
}

export default function BlogPage({ posts, initialDisplayPosts, pagination }) {
  return (
    <>
      <PageSEO title={`Blog - ${siteMetadata.author}`} description={siteMetadata.description} />
      <ListLayout
        posts={posts}
        initialDisplayPosts={initialDisplayPosts}
        pagination={pagination}
        title="All Posts"
      />
    </>
  )
}

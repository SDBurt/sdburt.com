import { TagSEO } from '@/components/SEO'
import { siteMetadata } from '@/data/siteMetadata'
import ListLayout from '@/layouts/ListLayout'
import { getAllTags } from '@/lib/tags'
import kebabCase from '@/lib/kebabCase'

import { allBlogs } from '@/.contentlayer/generated/index.mjs'

const root = process.cwd()

export async function getStaticPaths() {
  const tags = getAllTags(allBlogs)

  return {
    paths: Object.keys(tags).map((tag) => ({
      params: {
        tag,
      },
    })),
    fallback: false,
  }
}

export async function getStaticProps({ params }) {
  const filteredPosts = allBlogs.filter(
    (post) => post.draft !== true && post.tags.map((t) => kebabCase(t)).includes(params.tag)
  )

  // const allPosts = await getAllFilesFrontMatter('blog')
  // const filteredPosts = allPosts.filter(
  //   (post) => post.draft !== true && post.tags.map((t) => kebabCase(t)).includes(params.tag)
  // )

  return { props: { posts: filteredPosts, tag: params.tag } }
}

export default function Tag({ posts, tag }) {
  // Capitalize first letter and convert space to dash
  const title = tag[0].toUpperCase() + tag.split(' ').join('-').slice(1)
  return (
    <>
      <TagSEO
        title={`${tag} - ${siteMetadata.author}`}
        description={`${tag} tags - ${siteMetadata.author}`}
      />
      <ListLayout posts={posts} title={`Tag: ${title}`} />
    </>
  )
}

import { getAllTags } from '@/lib/tags';
import kebabCase from '@/lib/kebabCase';

import { allBlogs } from '@/.contentlayer/generated/index.mjs';
import Link from 'next/link';

export async function getStaticPaths() {
  const tags = getAllTags(allBlogs);

  return {
    paths: Object.keys(tags).map((tag) => ({
      params: {
        tag,
      },
    })),
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const filteredPosts = allBlogs.filter(
    (post) => post.draft !== true && post.tags.map((t) => kebabCase(t)).includes(params.tag)
  );

  // const allPosts = await getAllFilesFrontMatter('blog')
  // const filteredPosts = allPosts.filter(
  //   (post) => post.draft !== true && post.tags.map((t) => kebabCase(t)).includes(params.tag)
  // )

  return { props: { posts: filteredPosts, tag: params.tag } };
}

export default function Tag({ posts, tag }) {
  // Capitalize first letter and convert space to dash
  const title = tag[0].toUpperCase() + tag.split(' ').join('-').slice(1);
  return (
    <>
      <h2>{title}</h2>
      <ul>
        {posts.map((post) => {
          return (
            <li key={post.id}>
              <div>
                <h4>{post.title}</h4>
                <p>{post.summary}</p>
                <Link href={post.slug}>Go</Link>
              </div>
            </li>
          );
        })}
      </ul>
    </>
  );
}

import { allBlogs } from '@/.contentlayer/generated';
import Link from 'next/link';

export const POSTS_PER_PAGE = 5;

export async function getStaticProps() {
  return { props: { posts: allBlogs } };
}

export default function BlogPage({ posts }) {
  return (
    <ul>
      {posts.map((post) => {
        return (
          <li key={post.id}>
            <ul>
              <Link href={post.slug}>{post.title}</Link>
              <p>{post.summary}</p>
            </ul>
          </li>
        );
      })}
    </ul>
  );
}

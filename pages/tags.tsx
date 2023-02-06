import Tag from '@/components/Tag';
import kebabCase from '@/lib/kebabCase';

import { allBlogs } from '@/.contentlayer/generated';
import { getAllTags } from '@/lib/tags';
import Link from 'next/link';

export async function getStaticProps() {
  const tags = getAllTags(allBlogs);
  return { props: { tags } };
}

export default function Tags({ tags }) {
  const sortedTags = Object.keys(tags).sort((a, b) => tags[b] - tags[a]);
  return (
    <div>
      <ul>
        {Object.keys(tags).length === 0 && 'No tags found.'}
        {sortedTags.map((t) => {
          return (
            <li key={t}>
              <Link href={`/tags/${kebabCase(t)}`}>
                <Tag text={t} /> {`(${tags[t]})`}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

import Link from 'next/link';
import kebabCase from '@/lib/kebabCase';

const Tag = ({ text }) => {
  return (
    <Link href={`/tags/${kebabCase(text)}`}>
      <div>{text.split(' ').join('-')}</div>
    </Link>
  );
};

export default Tag;

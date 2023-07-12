import Link from 'next/link';

import kebabCase from '@/lib/kebabCase';

const Tag = ({ text }) => {
  return (
    <Link href={`/tags/${kebabCase(text)}`}>
      <div className="mr-3 text-sm font-medium uppercase text-primary  ">
        {text.split(' ').join('-')}
      </div>
    </Link>
  );
};

export default Tag;

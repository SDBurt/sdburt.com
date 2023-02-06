'use client';

import clsx from 'clsx';
import { usePathname } from 'next/navigation';
import Link from 'next/link';

const navItems = {
  '/': {
    name: 'home',
  },
  '/projects': {
    name: 'projects',
  },
  '/about': {
    name: 'about',
  },
  '/blog': {
    name: 'blog',
  },
  '/tags': {
    name: 'tags',
  },
};

export default function Navbar() {
  let pathname = usePathname();
  if (pathname.includes('/blog/')) {
    pathname = '/blog';
  }

  return (
    <nav className="mb-8 flex flex-row space-x-2">
      {Object.entries(navItems).map(([path, { name }]) => {
        const isActive = path === pathname;

        return (
          <Link
            key={path}
            href={path}
            className={clsx({
              'text-neutral-500': !isActive,
              'font-bold': isActive,
            })}
          >
            {name}
          </Link>
        );
      })}
    </nav>
  );
}

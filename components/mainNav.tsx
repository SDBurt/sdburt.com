'use client';

import { usePathname } from 'next/navigation';
import Link from 'next/link';

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu';

import { buttonVariants } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { ThemeToggle } from './theme-toggle';

const variant = 'ghost';
const size = 'default';

export function TopNav() {
  let pathname = usePathname();
  if (pathname.includes('/blog/')) {
    pathname = '/blog';
  }

  const navItems = [
    { label: 'Home', href: '/' },
    { label: 'Projects', href: '/projects' },
    { label: 'Blog', href: '/blog' },
    { label: 'About', href: '/about' },
  ];

  return (
    <NavigationMenu>
      <NavigationMenuList className="space-x-1">
        {navItems.map((item) => (
          <NavigationMenuItem key={item.href}>
            <Link href={item.href} legacyBehavior passHref>
              <NavigationMenuLink
                className={cn(
                  navigationMenuTriggerStyle(),
                  buttonVariants({ variant, size }),
                  item.href === pathname ? 'bg-neutral-50 font-bold dark:bg-neutral-800' : ''
                )}
              >
                {item.label}
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
        ))}
        <NavigationMenuItem>
          <ThemeToggle />
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}

export default TopNav;

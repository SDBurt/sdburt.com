'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import headerNavLinks from '@/data/headerNavLinks';

import { cn } from '@/lib/utils';
import MobileNav from '@/components/MobileNav';
import ThemeSwitch from '@/components/ThemeSwitch';
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu';

function NavItem({ href, text }) {
  const path = usePathname();
  const isActive = path === href;

  return (
    <NavigationMenuItem>
      <Link href={href} legacyBehavior passHref>
        <NavigationMenuLink
          className={cn(
            navigationMenuTriggerStyle(),
            'hidden sm:inline-block',
            isActive ? 'bg-gray-100 font-bold dark:bg-neutral-800' : 'font-normal'
          )}
        >
          {text}
        </NavigationMenuLink>
      </Link>
    </NavigationMenuItem>
  );
}

const Navbar = () => {
  return (
    <>
      <div className="flex items-center text-base leading-5">
        {/* shadcn's nav */}
        <NavigationMenu className="hidden md:flex">
          <NavigationMenuList className="space-x-1">
            {headerNavLinks.map((link) => (
              <NavItem key={link.href} text={link.title} href={link.href} />
            ))}
          </NavigationMenuList>
        </NavigationMenu>
        <ThemeSwitch />
        <MobileNav />
      </div>
    </>
  );
};

export default Navbar;

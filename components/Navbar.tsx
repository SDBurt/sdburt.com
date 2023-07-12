'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { MainNavItem } from 'types';
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
            isActive ? 'text-foreground' : 'text-foreground/60'
          )}
        >
          {text}
        </NavigationMenuLink>
      </Link>
    </NavigationMenuItem>
  );
}

interface MainNavProps {
  items: MainNavItem[];
}

const Navbar = ({ items }: MainNavProps) => {
  return (
    <>
      <div className="flex items-center text-base leading-5 gap-3 justify-between w-full">
        {/* shadcn's nav */}
        <NavigationMenu className="hidden md:flex">
          <NavigationMenuList className="hidden md:flex gap-3">
            {items.map((link) => (
              <NavItem key={link.href} text={link.title} href={link.href} />
            ))}
          </NavigationMenuList>
        </NavigationMenu>
        <MobileNav items={items} />
        <ThemeSwitch />
      </div>
    </>
  );
};

export default Navbar;

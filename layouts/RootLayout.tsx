'use client';

import React from 'react';
import Link from 'next/link';

import { siteMetadata } from '@/data/siteMetadata';
import headerNavLinks from '@/data/headerNavLinks';
import Footer from '@/components/Footer';
import MobileNav from '@/components/MobileNav';
import ThemeSwitch from '@/components/ThemeSwitch';

import { cn } from '@/lib/utils';

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu';

import { usePathname } from 'next/navigation';
import Navbar from '@/components/Navbar';

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

const RootLayout = ({ children }) => {
  return (
    <>
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        <div className="flex h-screen flex-col justify-between">
          <header className="flex items-center justify-between py-2 md:py-10 ">
            <div>
              <Link href="/" aria-label={siteMetadata.headerTitle}>
                <div className="flex items-center justify-between">
                  {typeof siteMetadata.headerTitle === 'string' ? (
                    <div className="hidden h-6 text-2xl font-bold sm:flex sm:items-center">
                      {siteMetadata.headerTitle}
                    </div>
                  ) : (
                    siteMetadata.headerTitle
                  )}
                </div>
              </Link>
            </div>
            {/* <div className="flex items-center text-base leading-5"> */}
            <Navbar />
            {/* </div> */}
          </header>
          <main className="mb-auto">{children}</main>
          <Footer />
        </div>
      </div>
    </>
  );
};

export default RootLayout;

'use client'

import React from 'react'
import { siteMetadata } from '@/data/siteMetadata'
import headerNavLinks from '@/data/headerNavLinks'
import Link from 'next/link'
import SectionContainer from '@/components/SectionContainer'
import Footer from '@/components/Footer'
import MobileNav from '@/components/MobileNav'
import ThemeSwitch from '@/components/ThemeSwitch'
// import { useRouter } from 'next/router'
import { cn } from '@/lib/utils'

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu'

import { useRouter } from 'next/router'

function NavItem({ href, text }) {
  const router = useRouter()
  const isActive = router.asPath === href

  return (
    <NavigationMenuItem>
      <Link href={href} legacyBehavior passHref>
        <NavigationMenuLink
          className={cn(
            navigationMenuTriggerStyle(),
            'hidden sm:inline-block',
            isActive ? 'font-bold' : 'font-normal'
          )}
        >
          {text}
        </NavigationMenuLink>
      </Link>
    </NavigationMenuItem>

    // <NextLink
    //   href={href}
    //   className={cn(
    //     isActive
    //       ? 'font-semibold text-gray-800 dark:text-gray-200'
    //       : 'font-normal text-gray-600 dark:text-gray-400',
    //     'hidden rounded-lg p-1 transition-all hover:bg-gray-200 dark:hover:bg-gray-800 sm:px-3 sm:py-2 md:inline-block'
    //   )}
    // >
    //   <span className="capsize">{text}</span>
    // </NextLink>
  )
}

const LayoutWrapper = ({ children }) => {
  return (
    <>
      <SectionContainer>
        <div className="flex h-screen flex-col justify-between">
          <header className="flex items-center justify-between py-10">
            <div>
              <Link href="/" aria-label={siteMetadata.headerTitle}>
                <div className="flex items-center justify-between">
                  {typeof siteMetadata.headerTitle === 'string' ? (
                    <div className="hidden h-6 text-2xl font-semibold sm:block">
                      {siteMetadata.headerTitle}
                    </div>
                  ) : (
                    siteMetadata.headerTitle
                  )}
                </div>
              </Link>
            </div>
            <div className="flex items-center text-base leading-5">
              {/* <div className="hidden sm:block">
                {headerNavLinks.map((link) => (
                  <NavItem key={link.title} href={link.href} text={link.title} />
                ))}
              </div> */}

              {/* shadcn's nav */}
              <NavigationMenu>
                <NavigationMenuList>
                  {headerNavLinks.map((link) => (
                    <NavItem key={link.href} text={link.title} href={link.href} />
                  ))}
                </NavigationMenuList>
              </NavigationMenu>

              <ThemeSwitch />
              <MobileNav />
            </div>
          </header>
          <main className="mb-auto">{children}</main>
          <Footer />
        </div>
      </SectionContainer>
    </>
  )
}

export default LayoutWrapper

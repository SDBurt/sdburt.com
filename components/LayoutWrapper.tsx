'use client'

import React from 'react'
import Link from 'next/link'

import { siteMetadata } from '@/data/siteMetadata'
import headerNavLinks from '@/data/headerNavLinks'
import SectionContainer from '@/components/SectionContainer'
import Footer from '@/components/Footer'
import MobileNav from '@/components/MobileNav'
import ThemeSwitch from '@/components/ThemeSwitch'

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

"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { cn } from "@/lib/utils";
import MobileNav from "@/components/MobileNav";
import ThemeSwitch from "@/components/ThemeSwitch";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import type { MainNavItem } from "@/types";

function NavItem({ href, text }) {
  const path = usePathname();
  const isActive = path === href;

  return (
    <NavigationMenuItem>
      <Link href={href} legacyBehavior passHref>
        <NavigationMenuLink
          className={cn(
            navigationMenuTriggerStyle(),
            "hidden sm:inline-block",
            isActive ? "text-foreground" : "text-foreground/60",
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
      <div className="flex w-full items-center justify-between gap-3 text-base leading-5">
        {/* shadcn's nav */}
        <NavigationMenu className="hidden md:flex">
          <NavigationMenuList className="hidden gap-3 md:flex">
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

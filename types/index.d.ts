export type SiteConfig = {
  name: string;
  description: string;
  author?: string;
  url: string;
  ogImage: string;
  language: string;
  locale: string;
  links: {
    twitter?: string;
    github?: string;
    linkedin?: string;
  };
  mainNav: MainNavItem[];
};

export type NavItem = {
  title: string;
  href: string;
  disabled?: boolean;
};

export type MainNavItem = NavItem;

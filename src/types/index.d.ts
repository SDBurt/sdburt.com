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

export type Author = {
  name: string;
  avatar: string;
  occupation: string;
  company: string;
  email: string;
  twitter: string;
  linkedin: string;
  github: string;
  kaggle: string;
  bio: string;
};

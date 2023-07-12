import { SiteConfig } from '@/types';

export const siteConfig: SiteConfig = {
  name: 'Sean Burt',
  description: 'A blog and portfolio site created with Next.js and Tailwind.css',
  url: 'https://sdburt.com',
  author: 'Sean Burt',
  language: 'en-us',
  locale: 'en-US',
  ogImage: 'https://sdburt.com/og.png',
  links: {
    twitter: 'https://twitter.com/SeanBurt8',
    github: 'https://github.com/sdburt/sdburt.com',
    linkedin: 'https://linkedin.com/in/seandburt/',
  },
  mainNav: [
    { href: '/', title: 'Home' },
    { href: '/projects', title: 'Projects' },
    { href: '/blog', title: 'Blog' },
    { href: '/about', title: 'About' },
  ],
};

export default siteConfig;

import './tailwind.css';
import React from 'react';
import { Inter as FontSans } from 'next/font/google';
import RootLayout from '@/layouts/RootLayout';

import { siteConfig } from '@/config/site';
import { absoluteUrl, cn } from '@/lib/utils';
import Analytics from '@/components/analytics';
import { ThemeProvider } from '@/components/theme-provider';

const fontSans = FontSans({
  subsets: ['latin'],
  variable: '--font-inter',
});

interface RootLayoutProps {
  children: React.ReactNode;
}

export const metadata = {
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: [
    'Next.js',
    'React',
    'Tailwind CSS',
    'Server Components',
    'Radix UI',
    'Blog',
    'Projects',
  ],
  authors: [
    {
      name: 'sdburt',
      url: 'https://sdburt.com',
    },
  ],
  creator: 'sdburt',
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: 'white' },
    { media: '(prefers-color-scheme: dark)', color: 'black' },
  ],
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: siteConfig.url,
    title: siteConfig.name,
    description: siteConfig.description,
    siteName: siteConfig.name,
    images: [
      {
        url: absoluteUrl('/og.png'),
        width: 1200,
        height: 630,
        alt: siteConfig.name,
      },
    ],
  },
  twitter: {
    title: siteConfig.name,
    card: 'summary_large_image',
    description: siteConfig.description,
    images: [`${siteConfig.url}/og.png`],
    creator: '@SeanBurt8',
  },
  icons: {
    shortcut: '/favicon.ico',
    icon: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
};

export default function Layout({ children }: RootLayoutProps) {
  return (
    <html
      lang="en"
      className={cn('scroll-smooth antialiased font-sans', fontSans.variable)}
      suppressHydrationWarning
    >
      <body className="bg-white text-black dark:bg-gray-900 dark:text-white">
        <ThemeProvider attribute="class" defaultTheme="dark">
          <main>
            <RootLayout>{children}</RootLayout>
            <Analytics />
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}

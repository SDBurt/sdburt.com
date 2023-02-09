import React from 'react';

import Analytics from '../components/analytics';
import { ThemeProvider } from '@/components/theme-provider';
import LayoutWrapper from '@/components/LayoutWrapper';

import '@/css/tailwind.css';
import '@fontsource/inter/variable-full.css';

export const metadata = {
  title: {
    default: 'Sean Burt',
    template: '%s | Sean Burt',
  },
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
  twitter: {
    title: 'Sean Burt',
    card: 'summary_large_image',
  },
  icons: {
    shortcut: '/favicon.ico',
  },
};

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body className="bg-white text-black antialiased dark:bg-gray-900 dark:text-white">
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <main className="mt-6 flex min-w-0 flex-auto flex-col px-2 md:mt-0 md:px-0">
            <LayoutWrapper>{children}</LayoutWrapper>
          </main>

          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  );
}

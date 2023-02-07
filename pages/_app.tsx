import type { AppProps } from 'next/app';
import { Inter as FontSans } from '@next/font/google';
import { ThemeProvider } from 'next-themes';

import Analytics from '@/components/analytics';
import Layout from '@/components/layout';

import '@/styles/globals.css';

const fontSans = FontSans({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <style jsx global>{`
				:root {
					--font-sans: ${fontSans.style.fontFamily};
				}
			}`}</style>
      <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
        <Component {...pageProps} />
        <Analytics />
      </ThemeProvider>
    </>
  );
}

import localFont from "next/font/local";
import { GeistMono } from "geist/font/mono";
// import { Inter as FontSans } from 'next/font/google';
import { GeistSans } from "geist/font/sans";

import "@/styles/globals.css";

import React from "react";
import { type Viewport } from "next";
import RootLayout from "@/layouts/RootLayout";

import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";
import { Analytics } from "@/components/analytics";
import { TailwindIndicator } from "@/components/tailwind-indicator";
import { ThemeProvider } from "@/components/theme-provider";
import { cookies } from "next/headers";
import { TRPCReactProvider } from "@/trpc/react";
import { SpeedInsights } from "@vercel/speed-insights/next";

const fontHeading = localFont({
  src: "../assets/fonts/CalSans-SemiBold.woff2",
  variable: "--font-heading",
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
    "Next.js",
    "React",
    "Tailwind CSS",
    "Server Components",
    "Radix UI",
    "Blog",
    "Projects",
  ],
  authors: [
    {
      name: "sdburt",
      url: "https://sdburt.com",
    },
  ],
  creator: "sdburt",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.url,
    title: siteConfig.name,
    description: siteConfig.description,
    siteName: siteConfig.name,
  },
  twitter: {
    title: siteConfig.name,
    card: "summary_large_image",
    description: siteConfig.description,
    images: [`${siteConfig.url}/og.png`],
    creator: "@SeanBurt8",
  },
  icons: {
    shortcut: "/favicon.ico",
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
};

export default function Layout({ children }: RootLayoutProps) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body
        className={cn(
          "min-h-screen w-full bg-background font-sans antialiased sm:w-screen sm:overflow-x-hidden",
          fontHeading.variable,
          GeistSans.variable,
          GeistMono.variable,
        )}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <TRPCReactProvider cookies={cookies().toString()}>
            <RootLayout>{children}</RootLayout>
            <Analytics />
            <SpeedInsights />
            <TailwindIndicator />
          </TRPCReactProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}

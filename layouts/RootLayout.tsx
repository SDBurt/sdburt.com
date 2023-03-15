import React from 'react';
import Link from 'next/link';
import { siteMetadata } from '@/data/siteMetadata';

import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';

const RootLayout = ({ children }) => {
  return (
    <div className="mx-auto max-w-5xl min-w-0 px-2 md:px-6">
      <div className="flex h-screen flex-col justify-between">
        <header className="flex items-center justify-between py-2 md:py-10 ">
          <div>
            <Link href="/" aria-label={siteMetadata.headerTitle}>
              <div className="flex items-center justify-between">
                {typeof siteMetadata.headerTitle === 'string' ? (
                  <div className="hidden h-6 text-2xl font-bold sm:flex sm:items-center">
                    {siteMetadata.headerTitle}
                  </div>
                ) : (
                  siteMetadata.headerTitle
                )}
              </div>
            </Link>
          </div>
          <Navbar />
        </header>
        <div className="mb-auto">{children}</div>
        <Footer />
      </div>
    </div>
  );
};

export default RootLayout;

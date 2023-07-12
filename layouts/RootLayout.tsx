import React from 'react';

import { siteConfig } from '@/config/site';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';

const RootLayout = ({ children }) => {
  return (
    <div className="flex min-h-screen flex-col space-y-6">
      <header className="sticky top-0 z-40 bg-background">
        <div className="container flex h-16  items-center justify-between py-4">
          <Navbar items={siteConfig.mainNav} />
        </div>
      </header>
      <div className="container flex-1">
        <main className="flex w-full flex-1 flex-col overflow-hidden">{children}</main>
      </div>
      <div className="container">
        <Footer />
      </div>
    </div>
  );
};

export default RootLayout;

import React from 'react';
import TopNav from '@/components/mainNav';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="mx-auto mt-2 mb-auto max-w-2xl p-6 antialiased sm:mt-10 sm:p-2">
      <TopNav />
      <div className="mt-10">{children}</div>
    </div>
  );
}

import React from 'react';
import Nav from '@/components/nav';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="mx-auto mt-20 mb-auto max-w-lg antialiased">
      <Nav />
      <div className="prose prose-neutral">{children}</div>
    </div>
  );
}

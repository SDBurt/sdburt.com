'use client';

import { useEffect, useState } from 'react';
import useSWR from 'swr';

type PostView = {
  slug: string;
  count: string;
};

async function fetcher<JSON = any>(input, init): Promise<JSON> {
  const res = await fetch(input, init);
  return res.json();
}

export default function ViewCounter({ slug, trackView }: { slug: string; trackView: boolean }) {
  const { data } = useSWR<PostView[]>('/api/views', fetcher);

  const viewsForSlug = data && data.find((view) => view.slug === slug);
  const views = new Number(viewsForSlug?.count || 0);

  useEffect(() => {
    const registerView = () => {
      console.log('register called', slug);
      fetch(`/api/views/${slug}`, {
        method: 'POST',
      });
    };

    if (slug && trackView && process.env.NODE_ENV !== 'development') {
      registerView();
    }
  }, [slug, trackView]);

  return (
    <p className="text-sm font-semibold tracking-tighter text-gray-500 dark:text-gray-400">
      {data ? `${views.toLocaleString()} views` : '​'}
    </p>
  );
}

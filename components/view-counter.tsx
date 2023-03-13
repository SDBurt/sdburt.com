'use client';

import { useEffect } from 'react';
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
  const { data, isLoading } = useSWR<PostView[]>('/api/views', fetcher);
  const viewsForSlug = data && data.find((view) => view.slug === slug);
  const views = new Number(viewsForSlug?.count || 0);

  useEffect(() => {
    const registerView = () =>
      fetch(`/api/views/${slug}`, {
        method: 'POST',
      });

    if (slug && trackView && process.env.NODE_ENV !== 'development') {
      registerView();
    }
  }, [slug, trackView]);

  return (
    <p className="text-sm font-semibold tracking-tighter text-gray-500 dark:text-gray-400">
      {isLoading ? `Loading...` : data ? `${views.toLocaleString()} views` : '​'}
    </p>
  );
}

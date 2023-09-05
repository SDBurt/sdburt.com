'use client';

import { Suspense } from 'react';
import fetcher from 'lib/fetcher';
import { TopTracks } from 'lib/types';
import useSWR from 'swr';

import Track from '@/components/spotify/track/Track';
import { Skeleton } from '../ui/skeleton';

export default function Tracks() {
  const { data, isLoading } = useSWR<TopTracks>('/api/spotify/top-tracks', fetcher);

  if (!data || !data.tracks) {
    return null;
  }

  return (
    <div className="w-full">
      <Suspense fallback={<Skeleton className="w-full h-[100px]" />}>
        {isLoading ? (
          <Skeleton className="w-[60px] h-[20px]" />
        ) : (
          data.tracks.map((track, index) => (
            <Track ranking={index + 1} key={`track-${index + 1}`} {...track} />
          ))
        )}
      </Suspense>
    </div>
  );
}

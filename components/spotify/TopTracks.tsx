'use client';

import fetcher from 'lib/fetcher';
import { TopTracks } from 'lib/types';
import useSWR from 'swr';

import Track from '@/components/spotify/track/Track';

export default function Tracks() {
  const { data, isLoading } = useSWR<TopTracks>('/api/spotify/top-tracks', fetcher);

  if (!data || !data.tracks) {
    return null;
  }

  return (
    <>
      {isLoading
        ? `Loading...`
        : data.tracks.map((track, index) => (
            <Track ranking={index + 1} key={`track-${index + 1}`} {...track} />
          ))}
    </>
  );
}

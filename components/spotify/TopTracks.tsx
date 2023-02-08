import useSWR from 'swr';

import fetcher from 'lib/fetcher';
import { TopTracks } from 'lib/types';
import Track from '@/components/spotify/track/Track';

export default function Tracks() {
  const { data } = useSWR<TopTracks>('/api/spotify/top-tracks', fetcher);

  if (!data || !data.tracks) {
    return null;
  }

  return (
    <>
      {data.tracks.map((track, index) => (
        <Track ranking={index + 1} key={`track-${index + 1}`} {...track} />
      ))}
    </>
  );
}

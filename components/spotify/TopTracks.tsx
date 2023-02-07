import useSWR from 'swr';

import fetcher from 'lib/fetcher';
import { TopTracks } from 'lib/types';
import Track from '@/components/spotify/track/Track';

export default function Tracks() {
  const { data } = useSWR<TopTracks>('/api/top-tracks', fetcher);

  if (!data || !data.tracks) {
    return null;
  }

  return (
    <div className="flex flex-col space-y-2">
      {data.tracks.map((track, index) => (
        <Track ranking={index + 1} key={`track-${index + 1}`} {...track} />
      ))}
    </div>
  );
}

import TopTracks from '@/components/spotify/TopTracks';
import { author } from '@/data/authors/defaultAuthor';

export default function About() {
  return (
    <>
      <p>{author.bio}</p>
      <div>
        <div>
          <p>Curious what I'm currently listening to? Here's my top tracks on Spotify!</p>
          <TopTracks />
        </div>
      </div>
    </>
  );
}

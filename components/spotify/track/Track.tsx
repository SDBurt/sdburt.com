import Image from 'next/image';
import Link from 'next/link';

export default function Track(track) {
  return (
    <div className="flex flex-row items-center justify-start space-x-4">
      <div className="w-4">{track.ranking}</div>
      <Image src={track.thumbnail} alt={`Album cover of ${track.name}`} height={64} width={64} />
      <div>
        <Link
          className="truncate font-medium "
          href={track.songUrl}
          target="_blank"
          rel="noopener noreferrer"
        >
          {track.title}
        </Link>
        <div>{track.artist}</div>
      </div>
    </div>
  );
}

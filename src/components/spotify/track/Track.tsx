import Image from "next/image";

export default function Track(track) {
  return (
    <div className="mt-4 flex w-full flex-row items-center border-b pb-4">
      <p className="text-sm font-bold text-muted-foreground">{track.ranking}</p>
      <div className="flex flex-col object-center pl-3">
        <Image
          src={track.thumbnail}
          alt={`Album cover of ${track.name}`}
          height={64}
          width={64}
        />
      </div>
      <div className="flex flex-col pl-3">
        <a
          className="w-full truncate font-medium text-primary"
          href={track.songUrl}
          target="_blank"
          rel="noopener noreferrer"
        >
          {track.title}
        </a>
        <p className="w-full truncate text-muted-foreground" color="gray.500">
          {track.artist}
        </p>
      </div>
    </div>
  );
}

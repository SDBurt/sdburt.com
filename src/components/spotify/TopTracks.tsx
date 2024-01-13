"use client";

import { Suspense } from "react";
import fetcher from "@/lib/fetcher";
import { type TopTracks } from "@/lib/types";
import useSWR from "swr";

import Track from "@/components/spotify/track/Track";
import { Skeleton } from "../ui/skeleton";

export default function Tracks() {
  const { data, isLoading } = useSWR<TopTracks>(
    "/api/spotify/top-tracks",
    fetcher,
  );

  if (!data ?? !data?.tracks) {
    return null;
  }

  return (
    <div className="w-full">
      <Suspense fallback={<Skeleton className="h-[100px] w-full" />}>
        {isLoading ? (
          <Skeleton className="h-[20px] w-[60px]" />
        ) : (
          data?.tracks.map((track, index) => (
            <Track ranking={index + 1} key={`track-${index + 1}`} {...track} />
          ))
        )}
      </Suspense>
    </div>
  );
}

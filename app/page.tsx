import Image from "next/image";
import { name, about, avatar } from "lib/info";
import { GitHubIcon, TwitterIcon, ViewsIcon } from "@/components/icons";

export const revalidate = 60;

export default async function HomePage() {
  // const [nowPlaying] = await Promise.all([
  //   getNowPlaying(),
  // ]);

  // console.log(nowPlaying)

  return (
    <section className="">
      <div>
        <Image
          alt={name}
          className="rounded-full"
          src={avatar}
          placeholder="blur"
          width={100}
          priority
        />
        <h1 className="font-bold text-3xl mt-2 font-serif">{name}</h1>
      </div>

      <p className="my-5 text-neutral-800 dark:text-neutral-200">{about()}</p>

      {/* <div className="my-8">
        <div className="flex flex-row space-x-4 text-neutral-500 dark:text-neutral-400">
        <TwitterIcon height={24} width={24}/>
        <GitHubIcon />
        <ViewsIcon />
        </div>
      </div> */}
    </section>
  );
}

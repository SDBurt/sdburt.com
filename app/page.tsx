import Image from "next/image";
import { name, about, avatar } from "lib/info";
import { Technologies } from "@/components/technologies";

export const revalidate = 60;

export default async function HomePage() {
  return (
    <section>
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
      <h1 className="font-bold text-3xl mt-2 mb-4 font-serif">Technologies</h1>
      <p className="my-5 text-neutral-800 dark:text-neutral-200">
        Some of the technologies that I work with
      </p>
      <div className="py-2">
        <Technologies />
      </div>
    </section>
  );
}

import { notFound } from "next/navigation";
import { allProjects } from "@/data/projects";

import Balancer from "react-wrap-balancer";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export async function generateStaticParams() {
  return allProjects.map((project) => ({
    slug: project.slug,
  }));
}

export default async function Project({ params }) {
  const post = allProjects.find((post) => post.slug === params.slug);

  if (!post) {
    notFound();
  }

  return (
    <section>
      <h1 className="font-bold text-3xl font-serif max-w-[650px]">
        <Balancer>{post.label}</Balancer>
      </h1>
      <div className="grid grid-cols-[auto_1fr_auto] items-center mt-4 mb-8 font-mono text-sm max-w-[650px]">
        <div className="bg-neutral-100 dark:bg-neutral-800 rounded-md px-2 py-1 tracking-tighter">
          {post.date}
        </div>
        <div className="h-[0.2em] bg-neutral-50 dark:bg-neutral-800 mx-2" />
      </div>
      <p>{post.description}</p>
      <div className="space-x-2">
        <Link
          target="_blank"
          rel="noreferrer"
          href={post.href}
          className={cn(
            buttonVariants({ variant: "default", size: "lg" }),
            "mt-2"
          )}
        >
          Go to Project
        </Link>
        <Link
          target="_blank"
          rel="noreferrer"
          href={post.code}
          className={cn(
            buttonVariants({ variant: "outline", size: "lg" }),
            "mt-2"
          )}
        >
          See Code
        </Link>
      </div>
    </section>
  );
}

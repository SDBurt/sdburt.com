import Link from "next/link";
import { allProjects } from "@/data/projects";

export const metadata = {
  title: "Projects",
  description: "Learn about some of the work I have been up to",
};

export default async function ProjectPage() {
  return (
    <section>
      <h1 className="font-bold text-3xl font-serif">{metadata.title}</h1>
      <p className="text-lg text-neutral-500 mb-5">{metadata.description}</p>
      {allProjects
        .sort((a, b) => {
          if (new Date(a.date) > new Date(b.date)) {
            return -1;
          }
          return 1;
        })
        .map((project) => (
          <Link
            key={project.slug}
            className="flex flex-col space-y-1 mb-4"
            href={`/projects/${project.slug}`}
          >
            <div className="w-full flex flex-row space-x-2">
              <p className="text-neutral-500 w-48">{project.date}</p>
              <p className="font-bold w-48">{project.label}</p>
              <p className="w-full">{project.description}</p>
            </div>
          </Link>
        ))}
    </section>
  );
}

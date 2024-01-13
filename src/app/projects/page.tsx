import projectsData from "@/data/projectsData";

import FeatureItem from "@/components/feature-item";
import Link from "@/components/Link";

export const metadata = {
  title: "Projects",
};

export default async function ProjectsPage() {
  return (
    <section className="w-full">
      <div className="divide-y">
        <div className="space-y-2 pb-8 pt-6 md:space-y-5">
          <h1 className="text-2xl font-extrabold leading-9 tracking-tight md:text-3xl">
            Projects
          </h1>
          <p className="text-lg leading-7 text-muted-foreground">
            Showcase of my projects
          </p>
        </div>
        <ul className="flex flex-col space-y-4 pt-4">
          {projectsData.map((d) => (
            <li key={`project-${d.href}`}>
              <Link href={d.href} className="w-full text-left">
                <FeatureItem title={d.title} description={d.description} />
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

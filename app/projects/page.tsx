import projectsData from '@/data/projectsData';

import FeatureItem from '@/components/feature-item';
import Link from '@/components/Link';
import { Card, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

export const metadata = {
  title: 'Projects',
};

export default async function ProjectsPage() {
  return (
    <section className="w-full">
      <div className="divide-y">
        <div className="space-y-2 pt-6 pb-8 md:space-y-5">
          <h1 className="text-2xl font-extrabold leading-9 tracking-tight md:text-3xl">Projects</h1>
          <p className="text-lg leading-7 text-muted-foreground">Showcase of my projects</p>
        </div>
        <ul className="pt-4 flex flex-col space-y-4">
          {projectsData.map((d) => (
            <li key={`project-${d.href}`}>
              <Link href={d.href} className="text-left w-full">
                <FeatureItem title={d.title} description={d.description} />
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

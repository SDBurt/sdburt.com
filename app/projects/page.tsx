import projectsData from '@/data/projectsData';

import Link from '@/components/Link';
import { Card, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

export const metadata = {
  title: 'Projects',
};

export default async function ProjectsPage() {
  return (
    <div className="divide-y divide-gray-200 dark:divide-gray-700">
      <div className="space-y-2 pt-6 pb-8 md:space-y-5">
        <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-primary sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
          Projects
        </h1>
        <p className="text-lg leading-7 text-muted-foreground">Showcase of my projects</p>
      </div>
      <ul className="pt-4 flex flex-col space-y-4">
        {projectsData.map((d) => (
          <li key={`project-${d.href}`}>
            <Link href={d.href} className="text-left w-full">
              <Card className="w-full">
                <CardHeader className="p-6 w-full">
                  <CardTitle>{d.title}</CardTitle>
                  <CardDescription>{d.description}</CardDescription>
                </CardHeader>
              </Card>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

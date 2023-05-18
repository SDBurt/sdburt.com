import projectsData from '@/data/projectsData';

import Card from '@/components/Card';

export const metadata = {
  title: 'Projects',
};

export default async function ProjectsPage() {
  return (
    <div className="divide-y divide-gray-200 dark:divide-gray-700">
      <div className="space-y-2 pt-6 pb-8 md:space-y-5">
        <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
          Projects
        </h1>
        <p className="text-lg leading-7 text-gray-500 dark:text-gray-400">
          Showcase of my projects
        </p>
      </div>
      <div className="container py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2">
          {projectsData.map((d) => (
            <div key={d.title} className="w-full h-full col-span-1">
              <Card title={d.title} description={d.description} href={d.href} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

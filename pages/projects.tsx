import projectsData from '@/data/projectsData';
import Link from 'next/link';

export default function ProjectsPage() {
  return (
    <ul>
      {projectsData.map((project) => {
        return (
          <li key={project.title}>
            <ul>
              <Link href={project.href}>{project.title}</Link>
              <p>{project.description}</p>
            </ul>
          </li>
        );
      })}
    </ul>
  );
}

import Layout from '@/components/layout';
import projectsData from '@/data/projectsData';
import Head from 'next/head';
import Link from 'next/link';

export default function ProjectsPage() {
  return (
    <Layout>
      <Head>
        <title>SDBurt - Projects</title>
        <meta name="description" content="Portfolio site" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <section>
        <ul className="flex flex-col space-y-6">
          {projectsData.map((post) => {
            return (
              <li key={post.title}>
                <div>
                  <Link href={post.href} rel="noopener noreferrer" target="_blank">
                    <h2 className="font-semibold">{post.title}</h2>
                    <p className="prose prose-neutral prose-quoteless dark:prose-invert">
                      {post.description}
                    </p>
                  </Link>
                </div>
              </li>
            );
          })}
        </ul>
      </section>
    </Layout>
  );
}

import Layout from '@/components/layout';
import Head from 'next/head';

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>SDBurt</title>
        <meta name="description" content="Portfolio site" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <section>
        <div className="flex flex-col space-y-2">
          <h1 className="text-3xl font-extrabold">Hello</h1>
          <p className="prose prose-neutral prose-quoteless dark:prose-invert">
            Welcome to my site. I'm Sean, a software engineer with two years of experience
            specializing in web development and machine learning. I have experience collaborating in
            a startup environment, am quick to productivity, and continually seek the opportunity to
            learn new skills and technologies.
          </p>
        </div>
      </section>
    </Layout>
  );
}

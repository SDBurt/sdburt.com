import Layout from '@/components/layout';
import TopTracks from '@/components/spotify/TopTracks';
import { author } from '@/data/authors/defaultAuthor';
import Head from 'next/head';

export default function About() {
  return (
    <Layout>
      <Head>
        <title>SDBurt - Projects</title>
        <meta name="description" content="Portfolio site" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <section>
        <h1 className="mb-2 text-3xl font-bold">About Me</h1>
        <div className="prose prose-neutral prose-quoteless mb-8 dark:prose-invert">
          <p>{author.intro}</p>
          <p>{author.bio}</p>
          <p>{author.conclusion}</p>
        </div>
        <div className=" mb-8">
          <h1 className="mb-2 text-3xl font-bold">Spotify</h1>
          <p className="prose prose-neutral prose-quoteless mb-8 dark:prose-invert">
            Curious what I'm currently listening to? Here's my top tracks on Spotify!
          </p>
          <TopTracks />
        </div>
      </section>
    </Layout>
  );
}

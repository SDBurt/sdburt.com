import Image from 'next/image';
import Link from 'next/link';
import { sean } from '@/data/authors/default';

import Icons from '@/components/icons';
import TopTracks from '@/components/spotify/TopTracks';

export const metadata = {
  title: 'About',
};

export default async function AboutPage() {
  const { name, avatar, occupation, company, email, twitter, linkedin, github, bio } = sean;

  return (
    <section className="w-full">
      <div className="divide-y">
        <div className="space-y-2 pt-6 pb-8 md:space-y-5">
          <h1 className="text-2xl font-extrabold leading-9 tracking-tight md:text-3xl">About</h1>
        </div>
        <div className="flex flex-col items-center space-y-2">
          <div className="flex flex-col items-center pt-8">
            <Image
              src={avatar}
              alt="avatar"
              width={192}
              height={192}
              className="h-48 w-48 rounded-full"
            />
            <h3 className="pt-4 pb-2 text-2xl font-bold leading-8 tracking-tight">{name}</h3>
            <div className="text-muted-foreground">{occupation}</div>
            <div className="text-muted-foreground">{company}</div>
            <div className="flex space-x-3 pt-6">
              <Link href={`mailto:${email}`} className={'hover:text-primary'}>
                <Icons.mail size={20} />
              </Link>
              <Link href={linkedin} className={'hover:text-primary'}>
                <Icons.linkedin height={20} width={20} />
              </Link>
              <Link href={github} className={'hover:text-primary'}>
                <Icons.github height={20} width={20} />
              </Link>
              <Link href={twitter} className={'hover:text-primary'}>
                <Icons.twitter height={20} width={20} />
              </Link>
            </div>
            <p className="text-muted-foreground pt-6">
              Schedule a call with me!{' '}
              <Link
                className="text-primary underline"
                href="https://cal.com/sdburt"
                target="_blank"
                rel="noopener noreferrer"
              >
                cal.com/sdburt
              </Link>
            </p>
          </div>
          <div className="text-muted-foreground prose pt-8 pb-8 dark:prose-dark">{bio}</div>
        </div>
      </div>
      <div className="flex flex-col items-center space-y-2 w-full">
        <div className="flex flex-col items-start justify-center w-full">
          <h2 className="mb-4 mt-4 text-3xl font-bold tracking-tight">Top Tracks</h2>
          <p className="mb-4 text-muted-foreground">
            Curious what I'm currently listening to? Here's my top tracks on Spotify!
          </p>
          <TopTracks />
        </div>
      </div>
    </section>
  );
}

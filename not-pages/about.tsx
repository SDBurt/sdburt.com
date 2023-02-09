import TopTracks from '@/components/spotify/TopTracks';
import { PageSEO } from '@/components/SEO';
import { sean } from '@/data/authors/default';

import Image from 'next/image';
import Link from 'next/link';
import Icons from '@/components/icons';

export default function About() {
  const { name, avatar, occupation, company, email, twitter, kaggle, linkedin, github, bio } = sean;

  return (
    <>
      <PageSEO title={`About - ${name}`} description={`About me - ${name}`} />
      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        <div className="space-y-2 pt-6 pb-8 md:space-y-5">
          <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
            About
          </h1>
        </div>
        <div className="items-start space-y-2 xl:grid xl:grid-cols-3 xl:gap-x-8 xl:space-y-0">
          <div className="flex flex-col items-center pt-8">
            <Image
              src={avatar}
              alt="avatar"
              width={192}
              height={192}
              className="h-48 w-48 rounded-full"
            />
            <h3 className="pt-4 pb-2 text-2xl font-bold leading-8 tracking-tight">{name}</h3>
            <div className="text-gray-500 dark:text-gray-400">{occupation}</div>
            <div className="text-gray-500 dark:text-gray-400">{company}</div>
            <div className="flex space-x-3 pt-6">
              <Link href={`mailto:${email}`} className={'hover:text-primary-500'}>
                <Icons.mail size={20} />
              </Link>
              <Link href={linkedin} className={'hover:text-primary-500'}>
                <Icons.linkedin height={20} width={20} />
              </Link>
              <Link href={github} className={'hover:text-primary-500'}>
                <Icons.github height={20} width={20} />
              </Link>
              <Link href={twitter} className={'hover:text-primary-500'}>
                <Icons.twitter height={20} width={20} />
              </Link>
            </div>
          </div>
          <div className="prose max-w-none pt-8 pb-8 dark:prose-dark xl:col-span-2">{bio}</div>
        </div>
      </div>
      <div className="items-start space-y-2 xl:grid xl:grid-cols-3 xl:gap-x-8 xl:space-y-0">
        <div className="flex flex-col items-start justify-center xl:col-span-2 xl:col-start-2">
          <h2 className="mb-4 mt-4 text-3xl font-bold tracking-tight text-black dark:text-white">
            Top Tracks
          </h2>
          <p className="mb-4 text-gray-600 dark:text-gray-400">
            Curious what I'm currently listening to? Here's my top tracks on Spotify!
          </p>
          <TopTracks />
        </div>
      </div>
    </>
  );
}

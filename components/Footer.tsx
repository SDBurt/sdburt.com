import Link from 'next/link';
import { siteMetadata } from '@/data/siteMetadata';

import NowPlaying from '@/components/spotify/NowPlaying';
import Icons from './icons';
import { Separator } from './ui/separator';

export default function Footer() {
  return (
    <footer>
      <div className="mt-16 flex flex-col items-center">
        <div className="justify-left flex w-full flex-col items-center py-4 ">
          <NowPlaying />
        </div>

        <Separator />
        <div className="flex w-full flex-row items-center justify-between space-x-2 text-gray-500 dark:text-gray-400">
          <div className="flex flex-row space-x-2 pb-4 pt-3">
            <div>
              Made with{' '}
              <b className="cursor-default text-xl font-semibold hover:text-red-600">♥️</b> by{' '}
              {siteMetadata.author}
            </div>
          </div>
          <div className="flex items-center justify-center py-4">
            <div className="flex flex-row space-x-4">
              <Link href={siteMetadata.linkedin} className={'hover:text-primary-500'}>
                <Icons.linkedin height={20} width={20} />
              </Link>
              <Link href={siteMetadata.github} className={'hover:text-primary-500'}>
                <Icons.github height={20} width={20} />
              </Link>
              <Link href={siteMetadata.twitter} className={'hover:text-primary-500'}>
                <Icons.twitter height={20} width={20} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

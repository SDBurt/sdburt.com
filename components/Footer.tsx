import Link from 'next/link';

import { siteConfig } from '@/config/site';
import NowPlaying from '@/components/spotify/NowPlaying';
import Icons from './icons';

export default function Footer() {
  return (
    <footer>
      <div className="mt-16 flex flex-col items-center">
        <div className="justify-left flex w-full flex-col items-center py-4 ">
          <NowPlaying />
        </div>

        <div className="flex w-full flex-row items-center justify-between space-x-2 text-muted-foreground">
          <div className="flex flex-row space-x-2 pb-4 pt-3">
            <div>
              Made with{' '}
              <b className="cursor-default text-xl font-semibold hover:text-red-600">♥️</b> by{' '}
              {siteConfig.author}
            </div>
          </div>
          <div className="flex items-center justify-center py-4">
            <div className="flex flex-row space-x-4">
              {siteConfig.links.linkedin && (
                <Link href={siteConfig.links.linkedin} className={'hover:text-primary'}>
                  <Icons.linkedin height={20} width={20} />
                </Link>
              )}
              {siteConfig.links.github && (
                <Link href={siteConfig.links.github} className={'hover:text-primary'}>
                  <Icons.github height={20} width={20} />
                </Link>
              )}
              {siteConfig.links.twitter && (
                <Link href={siteConfig.links.twitter} className={'hover:text-primary'}>
                  <Icons.twitter height={20} width={20} />
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

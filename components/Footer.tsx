import Link from './Link'
import siteMetadata from '@/data/siteMetadata'
import SocialIcon from '@/components/social-icons'
import NowPlaying from '@/components/spotify/NowPlaying'

const ExternalLink = ({ href, children }) => (
  <a
    className="text-gray-500 transition hover:text-gray-600"
    target="_blank"
    rel="noopener noreferrer"
    href={href}
  >
    {children}
  </a>
)

export default function Footer() {
  return (
    <footer>
      <div className="mt-16 flex flex-col items-center">
        <hr className="border-1 mb-8 w-full border-gray-200 dark:border-gray-800" />
        <NowPlaying />
        <div className="grid w-full max-w-2xl grid-cols-1 gap-4 pb-8 sm:grid-cols-4">
          <div className="flex flex-col space-y-4">
            <Link href="/" className="text-gray-500 transition hover:text-gray-600">
              Home
            </Link>
            <Link href="/blog" className="text-gray-500 transition hover:text-gray-600">
              Blog
            </Link>
          </div>
          <div className="flex flex-col space-y-4">
            <Link href="/tags" className="text-gray-500 transition hover:text-gray-600">
              Tags
            </Link>
            <Link href="/about" className="text-gray-500 transition hover:text-gray-600">
              About
            </Link>
          </div>
          <div className="flex flex-col space-y-4">
            <ExternalLink href={siteMetadata.twitter}>Twitter</ExternalLink>
            <ExternalLink href={siteMetadata.github}>GitHub</ExternalLink>
          </div>
          <div className="flex flex-col space-y-4">
            <ExternalLink href={siteMetadata.linkedin}>Linkedin</ExternalLink>
            <ExternalLink href={siteMetadata.kaggle}>Kaggle</ExternalLink>
          </div>
        </div>
        {/* <div className="mb-1 flex space-x-4">
          <SocialIcon kind="mail" href={`mailto:${siteMetadata.email}`} size={6} />
          <SocialIcon kind="github" href={siteMetadata.github} size={6} />
          <SocialIcon kind="kaggle" href={siteMetadata.kaggle} size={6} />
          <SocialIcon kind="linkedin" href={siteMetadata.linkedin} size={6} />
          <SocialIcon kind="twitter" href={siteMetadata.twitter} size={6} />
        </div> */}
        <hr className="border-1 mb-4 w-full border-gray-200 dark:border-gray-800" />
        <div className="mb-4 flex space-x-2 text-sm text-gray-500 dark:text-gray-400">
          <div>{siteMetadata.author}</div>
          <div>{` • `}</div>
          <div>{`© ${new Date().getFullYear()}`}</div>
          <div>{` • `}</div>
          <Link href="/">{siteMetadata.title}</Link>
        </div>
      </div>
    </footer>
  )
}

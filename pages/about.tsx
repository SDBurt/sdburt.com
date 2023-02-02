import { MDXLayoutRenderer } from '@/components/MDXComponents'
import { getFileBySlug } from '@/lib/mdx'
import TopTracks from '@/components/spotify/TopTracks'

const DEFAULT_LAYOUT = 'AuthorLayout'

export async function getStaticProps() {
  const authorDetails = await getFileBySlug('authors', ['default'])
  return { props: { authorDetails } }
}

export default function About({ authorDetails }) {
  const { mdxSource, frontMatter } = authorDetails

  return (
    <>
      <MDXLayoutRenderer
        layout={frontMatter.layout || DEFAULT_LAYOUT}
        mdxSource={mdxSource}
        frontMatter={frontMatter}
      />
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
  )
}

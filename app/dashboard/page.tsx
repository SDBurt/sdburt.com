// import TopTracks from '@/components/spotify/TopTracks'

export default async function DashboardPage() {
  return (
    <div>
      <div className="mx-auto mb-16 flex max-w-2xl flex-col items-start justify-center">
        <h1 className="mb-4 text-3xl font-bold tracking-tight text-black dark:text-white md:text-5xl">
          Dashboard
        </h1>
        <div className="mb-8">
          <p className="mb-4 text-gray-600 dark:text-gray-400">
            {`This is my personal dashboard, built with Next.js API routes deployed as serverless
            functions. I use this dashboard to track various metrics across platforms and will be
            adding more metrics as I expand my technologies.`}
          </p>
        </div>
        <h2 className="mb-4 mt-4 text-3xl font-bold tracking-tight text-black dark:text-white">
          {`Top Tracks`}
        </h2>
        <p className="mb-4 text-gray-600 dark:text-gray-400">
          {`Curious what I'm currently listening to? Here\'s my top tracks on Spotify!`}
        </p>
        {/* <TopTracks /> */}
      </div>
    </div>
  );
}

export default async function Loading() {
  return (
    <section>
      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        <div className="space-y-2 pt-6 pb-8 md:space-y-5">
          <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-primary sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
            About
          </h1>
        </div>
        <div className="items-start space-y-2 xl:grid xl:grid-cols-3 xl:gap-x-8 xl:space-y-0">
          <div className="flex flex-col items-center pt-8">
            <p>Loading...</p>
            <h3 className="pt-4 pb-2 text-2xl font-bold leading-8 tracking-tight">
              <p>Loading...</p>
            </h3>
            <div className="text-muted-foreground">
              <p>Loading...</p>
            </div>
            <div className="text-muted-foreground">
              <p>Loading...</p>
            </div>
            <div className="flex space-x-3 pt-6">
              <p>Loading...</p>
            </div>
          </div>
          <div className="prose pt-8 pb-8 dark:prose-dark xl:col-span-2">
            <p>Loading...</p>
          </div>
        </div>
      </div>
      <div className="items-start space-y-2 xl:grid xl:grid-cols-3 xl:gap-x-8 xl:space-y-0">
        <div className="flex flex-col items-start justify-center xl:col-span-2 xl:col-start-2">
          <h2 className="mb-4 mt-4 text-3xl font-bold tracking-tight text-black dark:text-white">
            Top Tracks
          </h2>
          <p className="mb-4 text-muted-foreground">
            Curious what I'm currently listening to? Here's my top tracks on Spotify!
          </p>
          <p>Loading...</p>
        </div>
      </div>
    </section>
  );
}

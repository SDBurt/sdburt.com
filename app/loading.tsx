export default async function Loading() {
  return (
    <>
      <div className="divide-y divide-gray-500 dark:divide-gray-400">
        {/* Header */}
        <div className="space-y-2 pt-6 pb-8 md:space-y-5">
          <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-primary sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
            Hello
          </h1>
          <p className="text-lg leading-7 text-muted-foreground">
            Welcome to my site. I'm Sean, a software engineer with two years of experience
            specializing in web development and machine learning. I have experience collaborating in
            a startup environment, am quick to productivity, and continually seek the opportunity to
            learn.
          </p>
        </div>

        {/* Featured Projects */}
        <div className="space-y-2 pt-6 pb-8 md:space-y-5">
          <h2 className="text-2xl font-bold leading-9 tracking-tight text-primary sm:text-4xl sm:leading-10 md:text-4xl md:leading-14">
            Featured Projects
          </h2>
          <p>Loading...</p>
        </div>

        {/* Latest Posts */}
        <div className="space-y-2 pt-6 pb-8 md:space-y-5">
          <h2 className="text-2xl font-bold leading-9 tracking-tight text-primary sm:text-4xl sm:leading-10 md:text-4xl md:leading-14">
            Latest Posts
          </h2>
          <p>Loading...</p>
        </div>
      </div>
    </>
  );
}

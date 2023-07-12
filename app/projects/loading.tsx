export default async function Loading() {
  return (
    <>
      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        <div className="space-y-2 pt-6 pb-8 md:space-y-5">
          <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-primary sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
            Projects
          </h1>
          <p className="text-lg leading-7 text-muted-foreground">Showcase of my projects</p>
        </div>
        <div className="container py-12">
          <div className="-m-4 flex flex-wrap">
            <p>Loading...</p>
          </div>
        </div>
      </div>
    </>
  );
}

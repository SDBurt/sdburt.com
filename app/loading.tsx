import { Skeleton } from '@/components/ui/skeleton';

export default async function Loading() {
  return (
    <>
      <div className="divide-y divide-gray-500 dark:divide-gray-400">
        {/* Header */}
        <div className="space-y-2 pt-6 pb-8 md:space-y-5">
          <h1 className="text-2xl font-extrabold leading-9 tracking-tight md:text-3xl">
            <Skeleton className="w-full h-[50px]" />
          </h1>
          <p className="text-lg leading-7 text-muted-foreground">
            <Skeleton className="w-full h-[50px]" />
          </p>
        </div>

        {/* Featured Projects */}
        <div className="space-y-2 pt-6 pb-8 md:space-y-5">
          <h2 className="text-2xl font-bold leading-9 tracking-tight text-primary ">
            <Skeleton className="w-full h-[50px]" />
          </h2>
          <Skeleton className="w-full h-[50px]" />
        </div>

        {/* Latest Posts */}
        <div className="space-y-2 pt-6 pb-8 md:space-y-5">
          <h2 className="text-2xl font-bold leading-9 tracking-tight text-primary ">
            <Skeleton className="w-full h-[50px]" />
          </h2>
          <Skeleton className="w-full h-[50px]" />
        </div>
      </div>
    </>
  );
}

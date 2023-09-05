import { Skeleton } from '@/components/ui/skeleton';

export default async function Loading() {
  return (
    <section>
      <div className="divide-y">
        <div className="space-y-2 pt-6 pb-8 md:space-y-5">
          <h1 className="text-2xl font-extrabold leading-9 tracking-tight md:text-3xl">
            <Skeleton className="w-[100px] h-[40px]" />
          </h1>
        </div>
        <div className="items-start space-y-2 xl:grid xl:grid-cols-3 xl:gap-x-8 xl:space-y-0">
          <div className="flex flex-col items-center pt-8">
            <Skeleton className="h-48 w-48 rounded-full" />
            <h3 className="pt-4 pb-2 text-2xl font-bold leading-8 tracking-tight">
              <Skeleton className="w-[100px] h-9" />
            </h3>
            <div className="text-muted-foreground">
              <Skeleton className="w-[100px] h-9" />
            </div>
            <div className="text-muted-foreground">
              <Skeleton className="w-[100px] h-9" />
            </div>
            <div className="flex space-x-3 pt-6">
              <Skeleton className="w-full h-[200px]" />
            </div>
          </div>
          <div className="prose pt-8 pb-8 dark:prose-dark xl:col-span-2">
            <Skeleton className="w-full h-[200px]" />
          </div>
        </div>
      </div>
      <div className="items-start space-y-2 xl:grid xl:grid-cols-3 xl:gap-x-8 xl:space-y-0">
        <div className="flex flex-col items-start justify-center xl:col-span-2 xl:col-start-2">
          <h2 className="mb-4 mt-4 text-3xl font-bold tracking-tight text-black dark:text-white">
            <Skeleton className="w-full h-[200px]" />
          </h2>
          <p className="mb-4 text-muted-foreground">
            <Skeleton className="w-full h-[200px]" />
          </p>
          <Skeleton className="w-full h-[200px]" />
        </div>
      </div>
    </section>
  );
}

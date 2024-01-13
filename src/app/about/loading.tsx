import { Skeleton } from "@/components/ui/skeleton";

export default async function Loading() {
  return (
    <section>
      <div className="divide-y">
        <div className="space-y-2 pb-8 pt-6 md:space-y-5">
          <div className="text-2xl font-extrabold leading-9 tracking-tight md:text-3xl">
            <Skeleton className="h-[40px] w-[100px]" />
          </div>
        </div>
        <div className="items-start space-y-2 xl:grid xl:grid-cols-3 xl:gap-x-8 xl:space-y-0">
          <div className="flex flex-col items-center pt-8">
            <Skeleton className="h-48 w-48 rounded-full" />
            <h3 className="pb-2 pt-4 text-2xl font-bold leading-8 tracking-tight">
              <Skeleton className="h-9 w-[100px]" />
            </h3>
            <div className="text-muted-foreground">
              <Skeleton className="h-9 w-[100px]" />
            </div>
            <div className="text-muted-foreground">
              <Skeleton className="h-9 w-[100px]" />
            </div>
            <div className="flex space-x-3 pt-6">
              <Skeleton className="h-[200px] w-full" />
            </div>
          </div>
          <div className="dark:prose-dark prose pb-8 pt-8 xl:col-span-2">
            <Skeleton className="h-[200px] w-full" />
          </div>
        </div>
      </div>
      <div className="items-start space-y-2 xl:grid xl:grid-cols-3 xl:gap-x-8 xl:space-y-0">
        <div className="flex flex-col items-start justify-center xl:col-span-2 xl:col-start-2">
          <div className="mb-4 mt-4 text-3xl font-bold tracking-tight text-black dark:text-white">
            <Skeleton className="h-[200px] w-full" />
          </div>
          <div className="mb-4 text-muted-foreground">
            <Skeleton className="h-[200px] w-full" />
          </div>
          <Skeleton className="h-[200px] w-full" />
        </div>
      </div>
    </section>
  );
}

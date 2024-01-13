import { Skeleton } from "@/components/ui/skeleton";

export default async function Loading() {
  return (
    <>
      <div className="divide-y divide-gray-500 dark:divide-gray-400">
        {/* Header */}
        <div className="space-y-2 pb-8 pt-6 md:space-y-5">
          <div className="text-2xl font-extrabold leading-9 tracking-tight md:text-3xl">
            <Skeleton className="h-[50px] w-full" />
          </div>
          <div className="text-lg leading-7 text-muted-foreground">
            <Skeleton className="h-[50px] w-full" />
          </div>
        </div>

        {/* Featured Projects */}
        <div className="space-y-2 pb-8 pt-6 md:space-y-5">
          <div className="text-2xl font-bold leading-9 tracking-tight text-primary ">
            <Skeleton className="h-[50px] w-full" />
          </div>
          <Skeleton className="h-[50px] w-full" />
        </div>

        {/* Latest Posts */}
        <div className="space-y-2 pb-8 pt-6 md:space-y-5">
          <div className="text-2xl font-bold leading-9 tracking-tight text-primary ">
            <Skeleton className="h-[50px] w-full" />
          </div>
          <Skeleton className="h-[50px] w-full" />
        </div>
      </div>
    </>
  );
}

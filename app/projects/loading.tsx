import { Skeleton } from '@/components/ui/skeleton';

export default async function Loading() {
  return (
    <>
      <div className="divide-y">
        <div className="space-y-2 pt-6 pb-8 md:space-y-5">
          <Skeleton className="w-full h-[50px]" />
          <Skeleton className="w-full h-[50px]" />
        </div>
        <div className="container py-12">
          <div className="flex flex-wrap">
            <Skeleton className="w-full h-[50px]" />
          </div>
        </div>
      </div>
    </>
  );
}

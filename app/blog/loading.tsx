import { Skeleton } from '@/components/ui/skeleton';

export default async function Loading() {
  return (
    <section>
      <div className="divide-y">
        <div className="space-y-2 pt-6 pb-8 md:space-y-5">
          <Skeleton className="w-full h-[50px]" />
        </div>
        <Skeleton className="w-full h-[50px]" />
      </div>
    </section>
  );
}

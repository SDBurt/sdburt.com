import { Skeleton } from "@/components/ui/skeleton";

export default async function Loading() {
  return (
    <section>
      <div className="divide-y">
        <div className="space-y-2 pb-8 pt-6 md:space-y-5">
          <Skeleton className="h-[50px] w-full" />
        </div>
        <Skeleton className="h-[50px] w-full" />
      </div>
    </section>
  );
}

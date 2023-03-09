import { Button } from '@/components/ui/button';

export default async function Loading() {
  return (
    <section>
      <div className="pt-6 pb-8">
        <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
          Guestbook
        </h1>
      </div>
      <div className="space-y-1 pt-6 pb-6">
        <Button disabled>Loading...</Button>
      </div>
      <p>Loading</p>
    </section>
  );
}

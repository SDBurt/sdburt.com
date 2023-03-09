import { cache } from 'react';
import { SignIn, SignOut } from '@/app/guestbook/actions';
import Form from '@/app/guestbook/form';
import { queryBuilder } from 'lib/planetscale';
import { getServerSession } from 'next-auth/next';
import { authOptions } from 'pages/api/auth/[...nextauth]';

import { Database } from '@/lib/planetscale';

type Guestbook = Database['guestbook'] & { id: number };

const getGetBookItems = cache(async () => {
  return await queryBuilder
    .selectFrom('guestbook')
    .select(['id', 'body', 'created_by', 'updated_at'])
    .orderBy('updated_at', 'desc')
    .limit(20)
    .execute();
});

export const metadata = {
  title: 'Guestbook',
};

export const dynamic = 'force-dynamic';

export default async function GuestbookPage() {
  let entries: unknown[] = [];
  let session;

  try {
    const [guestbookRes, sessionRes] = await Promise.allSettled([
      getGetBookItems(),
      getServerSession(authOptions),
    ]);

    if (guestbookRes.status === 'fulfilled' && guestbookRes.value[0]) {
      entries = guestbookRes.value;
    } else {
      console.error(guestbookRes);
    }

    if (sessionRes.status === 'fulfilled') {
      session = sessionRes.value;
    } else {
      console.error(sessionRes);
    }
  } catch (error) {
    console.error(error);
  }

  return (
    <section>
      <div className="pt-6 pb-8">
        <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
          Guestbook
        </h1>
      </div>
      <div className="space-y-1 pt-6 pb-6">
        {session?.user ? (
          <>
            <Form />
            <SignOut />
          </>
        ) : (
          <SignIn />
        )}
      </div>
      <ul>
        {entries.map((item: Guestbook) => {
          return (
            <li key={item.id} className="flex flex-row space-x-1 py-2">
              <p>
                <span className="text-neutral-400">{item.created_by}: </span>
                {item.body}
              </p>
            </li>
          );
        })}
        <li></li>
      </ul>
    </section>
  );
}

import type { NextApiRequest, NextApiResponse } from 'next';
import { queryBuilder } from 'lib/planetscale';
import { Session } from 'next-auth';
import { getSession } from 'next-auth/react';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const session: Session | null = await getSession({ req });

    if (!session || !session.user) {
      return res.status(403).send('Unauthorized');
    }

    const { email, name } = session.user as { email: string; name: string; image: string };

    if (req.method === 'POST') {
      await queryBuilder
        .insertInto('guestbook')
        .values({
          email,
          body: (req.body.body || '').slice(0, 500),
          created_by: name,
          created_at: new Date(),
          updated_at: new Date(),
        })
        .execute();

      return res.status(200).json({ error: null });
    }

    if (req.method === 'DELETE') {
      await queryBuilder
        .deleteFrom('guestbook')
        .where('id', '=', req.body.id)
        .where('email', '=', email)
        .execute();

      return res.status(204).json({});
    }

    return res.send('Method not allowed.');
  } catch (e) {
    console.log(e);
    return res.status(500).json({ message: e.message });
  }
}

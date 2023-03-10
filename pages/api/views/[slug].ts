import type { NextApiRequest, NextApiResponse } from 'next';
import { queryBuilder } from 'lib/planetscale';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    if (!req.query.slug) {
      return res.status(500).json({ message: 'Slug is empty or does not exist' });
    }

    const slug = req.query.slug.toString();

    const data = await queryBuilder
      .selectFrom('views')
      .where('slug', '=', slug)
      .select(['count'])
      .execute();

    const views = !data.length ? 0 : Number(data[0].count);

    if (req.method === 'POST') {
      await queryBuilder
        .insertInto('views')
        .values({ slug, count: 1 })
        .onDuplicateKeyUpdate({ count: views + 1 })
        .execute();

      console.log('success');

      return res.status(200).json({
        total: views + 1,
      });
    } else if (req.method === 'GET') {
      return res.status(200).json({ total: views });
    }
  } catch (e) {
    console.log(e);
    return res.status(500).json({ message: e.message });
  }
}

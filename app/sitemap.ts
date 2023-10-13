import { MetadataRoute } from 'next';
import { allBlogs } from 'contentlayer/generated';

type TChangeFrequency =
  | 'never'
  | 'yearly'
  | 'always'
  | 'hourly'
  | 'daily'
  | 'weekly'
  | 'monthly'
  | undefined;

export default function sitemap(): MetadataRoute.Sitemap {
  const posts = allBlogs.map((post) => ({
    url: `https://sdburt.com/blog/${post.slug}`,
    lastModified: new Date(),
    changeFrequency: 'never' as TChangeFrequency,
    priority: 0.1,
  }));

  return [
    {
      url: 'https://sdburt.com',
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 1,
    },
    {
      url: 'https://sdburt.com/about',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: 'https://sdburt.com/blog',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.5,
    },
    ...posts,
  ];
}

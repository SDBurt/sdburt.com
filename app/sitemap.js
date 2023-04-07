// app/sitemap.js

import { allBlogs } from 'contentlayer/generated';

// import { getAllTags } from '@/lib/tags';

export default async function sitemap() {
  const posts = allBlogs.map((post) => ({
    url: `https://sdburt.com/blog/${post.slug}`,
    lastModified: post.date,
  }));

  // const tagCounts = getAllTags();

  // const tags = Object.keys(tagCounts).map((tag) => ({
  //   url: `https://sdburt.com/tags/${tag}`,
  //   lastModified: new Date().toISOString(),
  // }));

  const routes = ['', '/projects', '/blog', '/tags', '/guestbook', '/about'].map((route) => ({
    url: `https://sdburt.com${route}`,
    lastModified: new Date().toISOString(),
  }));

  return [...routes, ...posts];
  // return [...routes, ...posts, ...tags];
}

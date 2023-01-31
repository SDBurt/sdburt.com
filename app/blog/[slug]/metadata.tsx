import { allBlogs } from "contentlayer/generated";

// Currently, params isn't correctly passted to `generateMetadata`.
// Once that's fixed, I can remove `head.tsx`.
export async function generateMetadata({ params }) {
  const post = allBlogs.find((post) => post.slug === params.slug);
  const {
    title: postTitle,
    publishedAt: publishedTime,
    summary: description,
    // image,
    slug,
  } = post;
  const title = `${postTitle} - Sean Burt`;
  // const ogImage = image ? image : `https://sdburt.com/api/og?title=${title}`;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: "article",
      publishedTime,
      url: `https://sdburt.com/blog/${slug}`,
      // images: [
      //   {
      //     url: ogImage,
      //   },
      // ],
    },
    twitter: {
      title,
    },
  };
}

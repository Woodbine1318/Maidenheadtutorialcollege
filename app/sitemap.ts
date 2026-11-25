import type { MetadataRoute } from 'next';
import { getBlogPostCount, getBlogPosts, postsPerPage } from '@lib/contentful/blogPost';
import { getPageSlugs } from '@lib/contentful/page';

export const revalidate = 3600;

const siteUrl = 'https://maidenheadcollege.co.uk';
const reservedPageSlugs = new Set(['blog', 'contact-us']);

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const [pageSlugs, posts, totalPosts] = await Promise.all([
    getPageSlugs(),
    getBlogPosts({ limit: 1000 }),
    getBlogPostCount(),
  ]);

  const urls: MetadataRoute.Sitemap = [
    { url: siteUrl },
    { url: `${siteUrl}/blog` },
    { url: `${siteUrl}/contact-us` },
  ];

  for (const slug of pageSlugs) {
    if (reservedPageSlugs.has(slug)) continue;

    urls.push({ url: `${siteUrl}/${slug}` });
  }

  const totalPages = Math.ceil(totalPosts / postsPerPage);

  for (let page = 2; page <= totalPages; page += 1) {
    urls.push({ url: `${siteUrl}/blog/page/${page}` });
  }

  for (const post of posts) {
    if (!post.fields.slug) continue;

    urls.push({ url: `${siteUrl}/blog/${post.fields.slug}` });
  }

  return urls;
}

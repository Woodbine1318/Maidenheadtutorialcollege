import { cache } from 'react';
import { contentfulClient } from '@utils/contentful';
import { TypeBlogPostSkeleton } from '../../contentful';
import { contentfulCache } from './cache';

export const postsPerPage = Number(process.env.POSTS_PER_PAGE || 15);

const loadBlogPosts = contentfulCache(async (limit: number, skip: number) => {
  const contentful = contentfulClient({});

  const response = await contentful.getEntries<TypeBlogPostSkeleton>({
    content_type: 'blogPost',
    limit,
    skip,
    order: ['-sys.createdAt'],
  });

  return response.items ?? [];
}, ['contentful-blog-posts']);

const loadBlogPostCount = contentfulCache(async () => {
  const contentful = contentfulClient({});

  const response = await contentful.getEntries<TypeBlogPostSkeleton>({
    content_type: 'blogPost',
    include: 0,
    limit: 1,
    select: ['fields.slug'],
  });

  return response.total;
}, ['contentful-blog-post-count']);

const loadBlogPost = contentfulCache(async (slug: string) => {
  const contentful = contentfulClient({});

  const response = await contentful.getEntries<TypeBlogPostSkeleton>({
    content_type: 'blogPost',
    'fields.slug': slug,
    limit: 1,
    include: 2,
  });

  const [post] = response.items ?? [];

  return post ?? null;
}, ['contentful-blog-post']);

export const getBlogPosts = cache(({ limit = 1000, skip = 0 }: { limit?: number; skip?: number }) =>
  loadBlogPosts(limit, skip)
);

export const getBlogPostCount = cache(() => loadBlogPostCount());

export const getBlogPost = cache((slug: string) => loadBlogPost(slug));

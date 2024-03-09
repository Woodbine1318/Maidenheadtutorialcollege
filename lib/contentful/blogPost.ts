import { contentfulClient } from '@utils/contentful';
import { TypeBlogPostSkeleton } from '../../contentful';

export const getBlogPosts = async ({ limit, skip = 0 }: { limit?: number; skip?: number }) => {
  const contentful = contentfulClient({});

  const response = await contentful.getEntries<TypeBlogPostSkeleton>({
    content_type: 'blogPost',
    limit,
    skip,
    order: ['-sys.createdAt'],
  });

  const posts = response.items ?? [];

  return posts;
};

export const getBlogPostCount = async () => {
  const contentful = contentfulClient({});

  const response = await contentful.getEntries<TypeBlogPostSkeleton>({
    content_type: 'blogPost',
    include: 0,
    select: ['fields.slug'],
  });

  return response.total;
};

export const getBlogPost = async (slug: string) => {
  const contentful = contentfulClient({});

  const response = await contentful.getEntries<TypeBlogPostSkeleton>({
    content_type: 'blogPost',
    'fields.slug': slug,
    limit: 1,
    include: 2,
  });

  const [post] = response.items ?? [];

  return post;
};

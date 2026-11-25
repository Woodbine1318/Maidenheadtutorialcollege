import BlogPostCard from '@components/BlogPostCard';
import Container from '@components/Container';
import PageSections from '@components/PageSections';
import Pagination from '@components/Pagination';
import { getBlogPostCount, getBlogPosts, postsPerPage } from '@lib/contentful/blogPost';
import { getPage } from '@lib/contentful/page';
import { notFound } from 'next/navigation';
import { FC } from 'react';

export const revalidate = 3600;

export const dynamicParams = false;

export const generateStaticParams = async () => {
  const totalPosts = await getBlogPostCount();
  const totalPages = Math.ceil(totalPosts / postsPerPage);

  return Array.from({ length: totalPages }, (_, index) => ({ index: String(index + 1) }));
};

const PaginatedBlogPage: FC<{ params: { index: string } }> = async ({ params }) => {
  const page = await getPage('blog');
  const totalPosts = await getBlogPostCount();

  const currentPage = Number(params.index);

  if (!page || !currentPage) return notFound();

  const totalPages = Math.ceil(totalPosts / postsPerPage);
  const skip = postsPerPage * (currentPage - 1);
  const posts = await getBlogPosts({ limit: postsPerPage, skip });

  return (
    <>
      <PageSections sections={page.sections} />

      <Container
        variant="lg"
        className="grid grid-cols-1 items-stretch justify-center md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-8 py-8"
      >
        {posts.map((post) => (
          <BlogPostCard post={post} key={post.fields.slug} />
        ))}
      </Container>

      <Container className="flex justify-center py-8">
        <Pagination totalPages={totalPages} currentPage={currentPage} />
      </Container>
    </>
  );
};

export default PaginatedBlogPage;

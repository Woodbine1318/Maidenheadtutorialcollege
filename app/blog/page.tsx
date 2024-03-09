import BlogPostCard from '@components/BlogPostCard';
import Container from '@components/Container';
import Header from '@components/Header';
import PageSections from '@components/PageSections';
import Pagination from '@components/Pagination';
import { getBlogPostCount, getBlogPosts } from '@lib/contentful/blogPost';
import { getPage } from '@lib/contentful/page';
import getTheme from '@lib/contentful/theme';
import { notFound } from 'next/navigation';

const postsPerPage = Number(process.env.POSTS_PER_PAGE || 15);

const BlogPage = async () => {
  const theme = await getTheme();
  const page = await getPage('blog');
  const totalPosts = await getBlogPostCount();

  if (!page) return notFound();

  const totalPages = Math.ceil(totalPosts / postsPerPage);
  const posts = await getBlogPosts({ limit: postsPerPage, skip: 0 });

  return (
    <div className="min-h-screen">
      <Header theme={theme} />

      <PageSections sections={page.sections} />

      <Container
        variant="lg"
        className="grid grid-cols-1 items-stretch justify-center md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-8 py-8 lg:pb-12"
      >
        {posts.map((post) => (
          <BlogPostCard post={post} key={post.fields.slug} />
        ))}
      </Container>

      {totalPages > 1 && (
        <Container className="flex justify-center py-8">
          <Pagination totalPages={totalPages} currentPage={1} />
        </Container>
      )}
    </div>
  );
};

export default BlogPage;

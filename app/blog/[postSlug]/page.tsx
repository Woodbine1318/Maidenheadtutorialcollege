import { Metadata } from 'next';
import { FC } from 'react';
import getTheme from '@lib/contentful/theme';
import { notFound } from 'next/navigation';
import Header from '@components/Header';
import { parseContentImage } from '@lib/contentful/asset';
import { getBlogPost, getBlogPosts } from '@lib/contentful/blogPost';
import Container from '@components/Container';
import Markdown from 'react-markdown';

interface PageProps {
  params: { postSlug: string };
}

export const generateStaticParams = async () => {
  const posts = await getBlogPosts({});

  return posts.map((post) => ({ postSlug: post.fields.slug }));
};

export const generateMetadata = async ({ params }: PageProps): Promise<Metadata> => {
  const post = await getBlogPost(params.postSlug);

  return {
    title: post.fields.title,
    description: post.fields.summary,
    openGraph: {
      url: post.fields.cover ? parseContentImage(post.fields.cover)?.src : '',
    },
  };
};

const PostPage: FC<PageProps> = async ({ params }) => {
  const theme = await getTheme();
  const post = await getBlogPost(params.postSlug);

  if (!post) return notFound();

  const image = post.fields.cover ? parseContentImage(post.fields.cover) : null;

  return (
    <div className="min-h-screen">
      <Header theme={theme} />

      <header>
        <Container variant="lg" className="flex flex-col items-center text-center mb-8 pt-16 pb-12 md:pt-20">
          <h1 className="text-3xl font-semibold mb-4 md:text-4xl">{post.fields.title}</h1>
          <p className="text-md font-light max-w-screen-sm">{post.fields.summary}</p>
        </Container>

        <Container>
          {image && (
            <img
              src={image.src}
              width={image.width}
              height={image.height}
              alt={image.alt}
              loading="eager"
              srcSet={`${image.src}?w=300 1x, ${image.src} 2x`}
              className="w-full h-full object-cover rounded-xl max-w-screen-lg mx-auto md:max-h-[32rem]"
            />
          )}
        </Container>
      </header>

      <section className="py-16 px-4 max-w-screen-md mx-auto">
        <Markdown className="c-markdown">{post.fields.content}</Markdown>
      </section>
    </div>
  );
};

export default PostPage;

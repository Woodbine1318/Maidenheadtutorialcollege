import { contentfulClient } from '@utils/contentful';
import { TypePageSkeleton } from '../../contentful';
import { FC } from 'react';
import Header from '@components/Header';
import getTheme from '@lib/contentful/theme';
import { getPage } from '@lib/contentful/page';
import { notFound } from 'next/navigation';
import PageSections from '@components/PageSections';
import { Metadata } from 'next';

interface PageProps {
  params: { pageSlug: string };
}

export const generateStaticParams = async () => {
  const contentful = contentfulClient({});

  const response = await contentful.getEntries<TypePageSkeleton>({
    content_type: 'page',
  });

  return response.items.map((page) => ({ pageSlug: page.fields.slug }));
};

export const generateMetadata = async ({ params }: PageProps): Promise<Metadata> => {
  const contentful = contentfulClient({});

  const response = await contentful.getEntries<TypePageSkeleton>({
    content_type: 'page',
    'fields.slug': params.pageSlug,
    limit: 1,
  });

  const [page] = response.items ?? [];

  return {
    title: page.fields.title,
    description: page.fields.metadataDescription ?? '',
  };
};

const ContentPage: FC<PageProps> = async ({ params }) => {
  const theme = await getTheme();
  const page = await getPage(params.pageSlug);

  if (!page) return notFound();

  return (
    <div className="min-h-screen">
      <Header theme={theme} />

      <PageSections sections={page.sections} />
    </div>
  );
};

export default ContentPage;

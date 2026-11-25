import { FC } from 'react';
import { getContentPageParams, getPage } from '@lib/contentful/page';
import { notFound } from 'next/navigation';
import PageSections from '@components/PageSections';
import { Metadata } from 'next';
import DesktopMenu from '@components/DesktopMenu';
import getHeader from '@lib/contentful/header';

interface PageProps {
  params: { pageSlug: string };
}

export const revalidate = 3600;

// Addresses that are not real pages 404 from the saved shell and do not call Contentful.
export const dynamicParams = false;

export const generateStaticParams = async () => getContentPageParams();

export const generateMetadata = async ({ params }: PageProps): Promise<Metadata> => {
  const page = await getPage(params.pageSlug);

  if (!page) return { title: 'Page not found' };

  return {
    title: page.title,
    description: page.metadataDescription ?? '',
  };
};

const ContentPage: FC<PageProps> = async ({ params }) => {
  const page = await getPage(params.pageSlug);

  if (!page) return notFound();

  const header = await getHeader();

  if (!header) return null;

  return (
    <div className="min-h-screen">
      <div className="hidden md:block lg:hidden">
        <DesktopMenu
          topLevelLinks={header.navigation!.links.slice(0, 3)}
          secondaryLinks={header.navigation!.links.slice(3)}
        />
      </div>
      <div className="hidden lg:block">
        <DesktopMenu
          topLevelLinks={header.navigation!.links.slice(0, 5)}
          secondaryLinks={header.navigation!.links.slice(5)}
        />
      </div>
      <PageSections sections={page.sections} />
    </div>
  );
};

export default ContentPage;

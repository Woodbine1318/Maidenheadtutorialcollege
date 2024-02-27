import { UnresolvedLink } from 'contentful';
import { ContentPage, PageEntry } from '../../types';
import { contentfulClient } from '@utils/contentful';
import { TypePageSkeleton } from '../../contentful';
import { parseHero } from './hero';

export const parsePage = (entry: UnresolvedLink<'Entry'> | PageEntry): ContentPage | null => {
  if (!('fields' in entry)) return null;

  const sections =
    entry.fields.sections
      ?.map((section) => {
        if (!('fields' in section)) return null;

        if (section.sys.contentType.sys.id === 'hero') return parseHero(section);

        return null;
      })
      .filter(Boolean) ?? [];

  return {
    slug: entry.fields.slug,
    title: entry.fields.title,
    sections: sections as ContentPage['sections'],
  };
};

export const getPage = async (slug: string) => {
  const contentful = contentfulClient({});

  const response = await contentful.getEntries<TypePageSkeleton>({
    content_type: 'page',
    'fields.slug': slug,
    include: 10,
  });

  const [page] = response.items ?? [];

  return page ? parsePage(page) : null;
};

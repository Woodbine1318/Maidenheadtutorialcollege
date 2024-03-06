import { UnresolvedLink } from 'contentful';
import {
  ContentPage,
  EditorialSectionEntry,
  HeroEntry,
  ImageMarqueeEntry,
  PageEntry,
  RichTextEntry,
  TextWithImageBlockEntry,
} from '../../types';
import { contentfulClient } from '@utils/contentful';
import { TypePageSkeleton } from '../../contentful';

export const parsePage = (entry: UnresolvedLink<'Entry'> | PageEntry): ContentPage | null => {
  if (!('fields' in entry)) return null;

  const sections =
    entry.fields.sections
      ?.map((section) => {
        if (!('fields' in section)) return null;

        if (section.sys.contentType.sys.id === 'hero') return section as HeroEntry;
        if (section.sys.contentType.sys.id === 'richText') return section as RichTextEntry;
        if (section.sys.contentType.sys.id === 'textWithImageBlock') return section as TextWithImageBlockEntry;
        if (section.sys.contentType.sys.id === 'imageMarquee') return section as ImageMarqueeEntry;
        if (section.sys.contentType.sys.id === 'editorialSection') return section as EditorialSectionEntry;

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

import { cache } from 'react';
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
import { contentfulCache } from './cache';

const isPublicSlug = (slug: unknown): slug is string =>
  typeof slug === 'string' && slug.length > 0 && !slug.includes('/') && !slug.includes('\\');

/** These URLs are real routes of their own, so they must not also be generated as [pageSlug]. */
const RESERVED_SLUGS = new Set(['blog', 'contact-us']);

export const parsePage = (entry: UnresolvedLink<'Entry'> | PageEntry): ContentPage | null => {
  if (!('fields' in entry)) return null;

  const sections =
    entry.fields.sections
      ?.map((section) => {
        if (!section || !('fields' in section)) return null;

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
    metadataDescription: entry.fields.metadataDescription,
    sections: sections as ContentPage['sections'],
  };
};

const loadPage = contentfulCache(async (slug: string) => {
  const contentful = contentfulClient({});

  const response = await contentful.getEntries<TypePageSkeleton>({
    content_type: 'page',
    'fields.slug': slug,
    include: 10,
    limit: 1,
  });

  const [page] = response.items ?? [];

  return page ? parsePage(page) : null;
}, ['contentful-page']);

const loadPageSlugs = contentfulCache(async () => {
  const contentful = contentfulClient({});

  const response = await contentful.getEntries<TypePageSkeleton>({
    content_type: 'page',
    select: ['fields.slug'],
    limit: 1000,
  });

  return (response.items ?? []).map((page) => page.fields.slug).filter(isPublicSlug);
}, ['contentful-page-slugs']);

export const getPage = cache((slug: string) => loadPage(slug));

export const getPageSlugs = cache(() => loadPageSlugs());

export const getContentPageParams = async () => {
  const slugs = await getPageSlugs();

  return slugs.filter((slug) => !RESERVED_SLUGS.has(slug)).map((pageSlug) => ({ pageSlug }));
};

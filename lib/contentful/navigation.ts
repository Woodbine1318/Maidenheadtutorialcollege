import { cache } from 'react';
import { contentfulClient } from '@utils/contentful';
import { UnresolvedLink } from 'contentful';
import { TypeNavigationSkeleton } from '../../contentful';
import { ContentLink, ContentNavigation, NavigationEntry } from '../../types';
import { parseLink } from './link';
import { contentfulCache } from './cache';

export const parseNavigation = (entry: UnresolvedLink<'Entry'> | NavigationEntry): ContentNavigation | null => {
  if (!entry || !('fields' in entry)) {
    return null;
  }

  return {
    links: (entry.fields.links?.map((entry) => parseLink(entry)).filter(Boolean) as ContentLink[]) ?? [],
  };
};

const loadNavigation = contentfulCache(async (slug: string) => {
  const contentful = contentfulClient({});

  const navigationResult = await contentful.getEntries<TypeNavigationSkeleton>({
    content_type: 'navigation',
    'fields.slug': slug,
    include: 5,
    limit: 1,
  });

  return parseNavigation(navigationResult.items[0]);
}, ['contentful-navigation']);

const getNavigation = cache((slug: string) => loadNavigation(slug));

export default getNavigation;

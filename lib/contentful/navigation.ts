import { contentfulClient } from '@utils/contentful';
import { UnresolvedLink } from 'contentful';
import { TypeNavigationSkeleton } from '../../contentful';
import { ContentLink, ContentNavigation, NavigationEntry } from '../../types';
import { parseLink } from './link';

export const parseNavigation = (entry: UnresolvedLink<'Entry'> | NavigationEntry): ContentNavigation | null => {
  if (!entry || !('fields' in entry)) {
    return null;
  }

  return {
    links: (entry.fields.links?.map((entry) => parseLink(entry)).filter(Boolean) as ContentLink[]) ?? [],
  };
};

const getNavigation = async (slug: string) => {
  const contentful = contentfulClient({});

  const navigationResult = await contentful.getEntries<TypeNavigationSkeleton>({
    content_type: 'navigation',
    'fields.slug': slug,
    include: 5,
  });

  return parseNavigation(navigationResult.items[0]);
};

export default getNavigation;

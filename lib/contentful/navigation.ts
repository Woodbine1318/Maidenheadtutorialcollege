import { UnresolvedLink } from 'contentful';
import { ContentLink, ContentNavigation, NavigationEntry } from '../../types';
import { parseLink } from './link';

export const parseNavigation = (entry: UnresolvedLink<'Entry'> | NavigationEntry): ContentNavigation | null => {
  if (!('fields' in entry)) {
    return null;
  }

  return {
    links: (entry.fields.links?.map((entry) => parseLink(entry)).filter(Boolean) as ContentLink[]) ?? [],
  };
};

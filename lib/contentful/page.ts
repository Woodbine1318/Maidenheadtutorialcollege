import { UnresolvedLink } from 'contentful';
import { ContentPage, PageEntry } from '../../types';

export const parsePage = (entry: UnresolvedLink<'Entry'> | PageEntry): ContentPage | null => {
  if (!('fields' in entry)) return null;

  return {
    slug: entry.fields.slug,
    title: entry.fields.title,
  };
};

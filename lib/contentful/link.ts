import { UnresolvedLink } from 'contentful';
import { ContentLink, LinkEntry } from '../../types';
import { parsePage } from './page';

export const parseLink = (entry: UnresolvedLink<'Entry'> | LinkEntry): ContentLink | null => {
  if (!('fields' in entry)) {
    return null;
  }

  return {
    name: entry.fields.name,
    type: entry.fields.type,
    page: entry.fields.page ? parsePage(entry.fields.page) : null,
    url: entry.fields.url,
    text: entry.fields.text,
  };
};

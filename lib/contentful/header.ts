import { cache } from 'react';
import { contentfulClient } from '@utils/contentful';
import { TypeHeaderSkeleton } from '../../contentful';
import { HeaderEntry, ContentHeader } from '../../types';
import { parseContentImage } from './asset';
import { parseAnnouncement } from './announcement';
import { parseNavigation } from './navigation';
import { contentfulCache } from './cache';

export const parseHeader = (fields: HeaderEntry['fields']): ContentHeader | null => {
  if (!fields) return null;

  return {
    title: fields.title,
    logo: fields.logo ? parseContentImage(fields.logo) : null,
    announcement: fields.announcement ? parseAnnouncement(fields.announcement) : null,
    navigation: fields.navigation ? parseNavigation(fields.navigation) : null,
  };
};

const loadHeader = contentfulCache(async () => {
  const contentful = contentfulClient({});

  const headerResult = await contentful.getEntries<TypeHeaderSkeleton>({
    content_type: 'header',
    'fields.slug': 'main',
    include: 5,
    limit: 1,
  });

  return parseHeader(headerResult.items[0]?.fields);
}, ['contentful-header']);

const getHeader = cache(() => loadHeader());

export default getHeader;

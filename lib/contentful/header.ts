import { contentfulClient } from '@utils/contentful';
import { TypeHeaderSkeleton } from '../../contentful';
import { AnnouncementEntry, ContentHeader, HeaderEntry, NavigationEntry } from '../../types';
import { parseContentImage } from './asset';
import { parseAnnouncement } from './announcement';
import { parseNavigation } from './navigation';

export const parseHeader = (fields: HeaderEntry['fields']): ContentHeader | null => {
  if (!fields) return null;

  return {
    title: fields.title,
    logo: fields.logo ? parseContentImage(fields.logo) : null,
    announcement: fields.announcement ? parseAnnouncement(fields.announcement) : null,
    navigation: fields.navigation ? parseNavigation(fields.navigation) : null,
  };
};

const getHeader = async () => {
  const contentful = contentfulClient({});

  const headerResult = await contentful.getEntries<TypeHeaderSkeleton>({
    content_type: 'header',
    'fields.slug': 'main',
    include: 5,
  });

  return parseHeader(headerResult.items[0]?.fields);
};

export default getHeader;

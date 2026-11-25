import { cache } from 'react';
import { contentfulClient } from '@utils/contentful';
import { TypeThemeSkeleton } from '../../contentful';
import { contentfulCache } from './cache';

const loadTheme = contentfulCache(async () => {
  const contentful = contentfulClient({});

  const themeResult = await contentful.getEntries<TypeThemeSkeleton>({
    content_type: 'theme',
    'fields.slug': 'primary-theme',
    limit: 1,
  });

  const fields = themeResult.items[0]?.fields;

  if (!fields) {
    throw new Error('Contentful theme "primary-theme" was not found');
  }

  return fields;
}, ['contentful-theme']);

const getTheme = cache(() => loadTheme());

export default getTheme;

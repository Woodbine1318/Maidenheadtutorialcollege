import { cache } from 'react';
import { contentfulClient } from '@utils/contentful';
import { TypeMetadataSkeleton } from '../../contentful';
import { contentfulCache } from './cache';

const loadMetadata = contentfulCache(async () => {
  const contentful = contentfulClient({});

  const response = await contentful.getEntries<TypeMetadataSkeleton>({
    content_type: 'metadata',
    'fields.slug': 'metadata',
    include: 1,
    limit: 1,
  });

  const fields = response.items[0]?.fields;

  if (!fields) {
    throw new Error('Contentful metadata entry "metadata" was not found');
  }

  return {
    email: fields.email,
    phone: fields.phone,
    address: fields.address,
    notes: fields.contactNotes,
  };
}, ['contentful-metadata']);

const getMetadata = cache(() => loadMetadata());

export default getMetadata;

import { contentfulClient } from '@utils/contentful';
import { TypeMetadataSkeleton } from '../../contentful';

const getMetadata = async () => {
  const contentful = contentfulClient({});

  const response = await contentful.getEntries<TypeMetadataSkeleton>({
    content_type: 'metadata',
    'fields.slug': 'metadata',
    include: 1,
  });

  const fields = response.items[0]?.fields;

  return {
    email: fields.email,
    phone: fields.phone,
    address: fields.address,
    notes: fields.contactNotes,
  };
};

export default getMetadata;

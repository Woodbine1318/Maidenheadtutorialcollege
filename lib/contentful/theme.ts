import { contentfulClient } from '@utils/contentful';
import { TypeThemeSkeleton } from '../../contentful';

const getTheme = async () => {
  const contentful = contentfulClient({});

  const themeResult = await contentful.getEntries<TypeThemeSkeleton>({
    content_type: 'theme',
    'fields.slug': 'primary-theme',
  });

  return themeResult.items[0]?.fields;
};

export default getTheme;

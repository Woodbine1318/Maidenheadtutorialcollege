import { FC } from 'react';
import { ContentPage, HeroEntry, RichTextEntry, TextWithImageBlockEntry } from '../types';
import Hero from './Hero';
import RichText from './RichText';
import TextWithImageBlock from './TextWithImageBlock';

const PageSections: FC<{ sections: ContentPage['sections'] }> = ({ sections }) => {
  if (!sections) return null;

  return (
    <>
      {sections.map((section) => {
        if (section.sys.contentType.sys.id === 'hero')
          return <Hero hero={section as HeroEntry} key={section.fields.name} />;

        if (section.sys.contentType.sys.id === 'richText')
          return <RichText section={section as RichTextEntry} key={section.fields.name} />;

        if (section.sys.contentType.sys.id === 'textWithImageBlock')
          return <TextWithImageBlock section={section as TextWithImageBlockEntry} key={section.fields.name} />;

        return null;
      })}
    </>
  );
};

export default PageSections;

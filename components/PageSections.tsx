import { FC } from 'react';
import {
  ContentPage,
  EditorialSectionEntry,
  HeroEntry,
  ImageMarqueeEntry,
  RichTextEntry,
  TextWithImageBlockEntry,
} from '../types';
import Hero from './Hero';
import RichText from './RichText';
import TextWithImageBlock from './TextWithImageBlock';
import ImageMarquee from './ImageMarquee';
import EditorialSection from './EditorialSection';

const PageSections: FC<{ sections: ContentPage['sections'] }> = ({ sections }) => {
  if (!sections || !sections.length) return null;

  return (
    <>
      {sections.map((section) => {
        if (section.sys.contentType.sys.id === 'hero')
          return <Hero hero={section as HeroEntry} key={section.fields.name} />;

        if (section.sys.contentType.sys.id === 'richText')
          return <RichText section={section as RichTextEntry} key={section.fields.name} />;

        if (section.sys.contentType.sys.id === 'textWithImageBlock')
          return <TextWithImageBlock section={section as TextWithImageBlockEntry} key={section.fields.name} />;

        if (section.sys.contentType.sys.id === 'imageMarquee')
          return <ImageMarquee section={section as ImageMarqueeEntry} key={section.fields.name} />;

        if (section.sys.contentType.sys.id === 'editorialSection')
          return <EditorialSection section={section as EditorialSectionEntry} key={section.fields.name} />;

        return null;
      })}
    </>
  );
};

export default PageSections;

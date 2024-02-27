import { FC } from 'react';
import { ContentPage } from '../types';
import Hero from './Hero';

const PageSections: FC<{ sections: ContentPage['sections'] }> = ({ sections }) => {
  if (!sections) return null;

  return (
    <>
      {sections.map((section) => {
        if (section.type === 'hero') return <Hero hero={section} key={section.name} />;

        return null;
      })}
    </>
  );
};

export default PageSections;

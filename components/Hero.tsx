/* eslint-disable @next/next/no-img-element */
import { CSSProperties, FC } from 'react';
import { HeroEntry } from '../types';
import classNames from 'classnames';
import { parseContentImage } from '@lib/contentful/asset';
import { getAlignmentClassnames } from '@utils/getAlignmentClassnames';
import Container from './Container';

const Hero: FC<{ hero: HeroEntry }> = ({ hero: { fields: hero } }) => {
  const backgroundImage = hero.backgroundImage && parseContentImage(hero.backgroundImage);

  return (
    <section
      className={classNames('w-full h-64 relative md:flex-row md:items-start min-h-[20rem] md:min-h-[25rem] bg-ww-first-section-bg', getAlignmentClassnames(hero.alignment!))}
      style={
        hero.textColor
          ? ({
              '--ww-text-color': hero.textColor,
            } as CSSProperties)
          : {}
      }
      
    >
      <div className="flex-1 py-32" >
      <Container className="text-ww-text">
        {hero.heading && <h1 className="text-4xl md:text-5xl lg:text-7xl">{hero.heading}</h1>}
        {hero.body && <p>{hero.body}</p>}
      </Container>
      </div>
      <div className="flex-1  w-full h-full ">
      {backgroundImage && (
        <>
          <img
            src={backgroundImage.src}
            width={backgroundImage.width}
            height={backgroundImage.height}
            alt={backgroundImage.alt}
            loading="eager"
            className=" w-full h-full h-full"
          />
           
        </>
      )}
      
      </div>
    </section>
  );
};

export default Hero;

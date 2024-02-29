/* eslint-disable @next/next/no-img-element */
import { CSSProperties, FC } from 'react';
import { HeroEntry } from '../types';
import Container from './Container';
import classNames from 'classnames';
import { parseContentImage } from '@lib/contentful/asset';
import { getAlignmentClassnames } from '@utils/getAlignmentClassnames';

const Hero: FC<{ hero: HeroEntry }> = ({ hero: { fields: hero } }) => {
  const backgroundImage = hero.backgroundImage && parseContentImage(hero.backgroundImage);

  return (
    <section
      className={classNames('w-full relative min-h-[20rem] md:min-h-[25rem]', getAlignmentClassnames(hero.alignment!))}
      style={
        hero.textColor
          ? ({
              '--ww-text-color': hero.textColor,
            } as CSSProperties)
          : {}
      }
    >
      {backgroundImage && (
        <>
          <img
            src={backgroundImage.src}
            width={backgroundImage.width}
            height={backgroundImage.height}
            alt={backgroundImage.alt}
            loading="eager"
            srcSet={`${backgroundImage.src}?w=300 1x, ${backgroundImage.src} 2x`}
            className="absolute w-full h-full object-cover"
          />

          <div
            className="absolute w-full h-full top-0 left-0 bg-black"
            style={{ opacity: (hero.overlayOpacity ?? 0) / 100 }}
          />
        </>
      )}

      <Container className="relative text-ww-text">
        {hero.heading && <h1 className="text-4xl md:text-5xl lg:text-7xl">{hero.heading}</h1>}
        {hero.body && <p>{hero.body}</p>}
      </Container>
    </section>
  );
};

export default Hero;

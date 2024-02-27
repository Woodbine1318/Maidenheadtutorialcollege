import { CSSProperties, FC } from 'react';
import { ContentHero } from '../types';
import Container from './Container';
import classNames from 'classnames';

const Hero: FC<{ hero: ContentHero }> = ({ hero }) => {
  return (
    <header
      className={classNames('w-full relative min-h-[20rem] flex flex-col md:min-h-[25rem]', {
        'justify-start items-start text-left': hero.alignment === 'Top Left',
        'justify-start items-center text-center': hero.alignment === 'Top Center',
        'justify-start items-end text-right': hero.alignment === 'Top Right',
        'justify-center items-start text-left': hero.alignment === 'Middle Left',
        'justify-center items-center text-center': hero.alignment === 'Middle Center',
        'justify-center items-end text-right': hero.alignment === 'Middle Right',
        'justify-end items-start text-left': hero.alignment === 'Bottom Left',
        'justify-end items-center text-center': hero.alignment === 'Bottom Center',
        'justify-end items-end text-right': hero.alignment === 'Bottom Right',
      })}
      style={
        hero.textColor
          ? ({
              '--ww-text-color': hero.textColor,
            } as CSSProperties)
          : {}
      }
    >
      {hero.backgroundImage && (
        <>
          <img
            src={hero.backgroundImage.src}
            width={hero.backgroundImage.width}
            height={hero.backgroundImage.height}
            alt={hero.backgroundImage.alt}
            loading="eager"
            srcSet={`${hero.backgroundImage.src}?w=300 1x, ${hero.backgroundImage.src} 2x`}
            className="absolute w-full h-full object-cover"
          />

          <div
            className="absolute w-full h-full top-0 left-0 bg-black"
            style={{ opacity: hero.overlayOpacity / 100 }}
          />
        </>
      )}

      <Container className="relative text-ww-text">
        {hero.heading && <h1 className="text-4xl md:text-5xl lg:text-7xl">{hero.heading}</h1>}
        {hero.body && <p>{hero.body}</p>}
      </Container>
    </header>
  );
};

export default Hero;

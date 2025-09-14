/* eslint-disable @next/next/no-img-element */
import { CSSProperties, FC } from 'react';
import { HeroEntry } from '../types';
import classNames from 'classnames';
import { parseContentImage } from '@lib/contentful/asset';
import { getAlignmentClassnames } from '@utils/getAlignmentClassnames';
import Container from './Container';
import getHeader from '@lib/contentful/header';
import SectionMenu from './SectionMenu';

const Hero: FC<{ hero: HeroEntry }> = async ({ hero: { fields: hero } }) => {
  const backgroundImage = hero.backgroundImage && parseContentImage(hero.backgroundImage);
  const header = await getHeader();

  if (!header) return null;
  
  return (
    <section
      className={classNames('w-full h-full relative md:flex-row md:items-center md:min-h-[25rem] bg-ww-first-section-bg', getAlignmentClassnames(hero.alignment!))}
      style={
        hero.textColor
          ? ({
              '--ww-text-color': hero.textColor,
            } as CSSProperties)
          : {}
      }
      
    >
      <div className="w-full flex-1" >
      <Container className="text-ww-text">
        {hero.heading && <h1 className="text-4xl md:text-5xl lg:text-7xl">{hero.heading}</h1>}
        {hero.body && <p>{hero.body}</p>}

         {hero.heading === "Tutorial College" && (
        <>
          <div className="hidden md:block lg:hidden mt-10">
              <SectionMenu
                topLevelLinks={header.navigation!.links.slice(0, 3)}
                secondaryLinks={header.navigation!.links.slice(3)}
              />
            </div>
            <div className="hidden lg:block mt-10">
              <SectionMenu
                topLevelLinks={header.navigation!.links.slice(0, 5)}
                secondaryLinks={header.navigation!.links.slice(5)}
              />
          </div>
        </>
      )} 
       
      </Container>
      </div>
      <div className="flex-1 ">
      {backgroundImage && (
        <>
          <img
            src={backgroundImage.src}
            width={backgroundImage.width}
            height={backgroundImage.height}
            alt={backgroundImage.alt}
            loading="eager"
            className="w-full max-h-[25rem] min-h-[25rem] "
          />
        </>
      )}
      
      </div>
    </section>
  );
};

export default Hero;

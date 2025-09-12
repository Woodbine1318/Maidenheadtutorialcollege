/* eslint-disable @next/next/no-img-element */
import { CSSProperties, FC } from 'react';
import { HeroEntry } from '../types';
import classNames from 'classnames';
import { parseContentImage } from '@lib/contentful/asset';
import { getAlignmentClassnames } from '@utils/getAlignmentClassnames';
import Container from './Container';
import DesktopMenu from './DesktopMenu';
import getHeader from '@lib/contentful/header';
import SectionMenu from './SectionMenu';

const Hero: FC<{ hero: HeroEntry }> = async ({ hero: { fields: hero } }) => {
  const backgroundImage = hero.backgroundImage && parseContentImage(hero.backgroundImage);
  const header = await getHeader();

  if (!header) return null;
  
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

        {/* {hero.heading === "Tutorial College" && (
        <>
          <div className="hidden md:block lg:hidden">
              <SectionMenu
                topLevelLinks={header.navigation!.links.slice(0, 3)}
              />
            </div>

            <div className="hidden lg:block">
              <SectionMenu
                topLevelLinks={header.navigation!.links.slice(0, 5)}
              />
          </div>
        </>
      )} */}
       
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
            className="w-full h-full object-cover"
          />
           
        </>
      )}
      
      </div>
    </section>
  );
};

export default Hero;

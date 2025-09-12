import { CSSProperties, FC } from 'react';
import Container from './Container';
import { getTextColor } from '@utils/colors';
import { ThemedSSComponent } from '../types';
import getHeader from '@lib/contentful/header';
import AnnouncementBar from './AnnouncementBar';
import MobileMenu from './MobileMenu';
import DesktopMenu from './DesktopMenu';
import Link from 'next/link';

const Header: FC<ThemedSSComponent> = async ({ theme }) => {
  const header = await getHeader();

  if (!header) return null;

  return (
    <>
      {/* {!!header.announcement && <AnnouncementBar announcement={header.announcement} theme={theme} />}  */}

      <header
        className="w-full text-ww-text"
        style={{ '--ww-contrast-text-color': getTextColor(theme.textColor) } as CSSProperties}
      >   
        <Container variant="md" className="flex flex-row nowrap items-center py-9 md:justify-between">
          <div className="md:hidden mr-4">
            <MobileMenu navigation={header.navigation!} theme={theme} />
          </div>
          
          {header.title && !header.logo && <Link className="text-2xl text-ww-tittle-text font-semibold" href="/">{header.title}</Link>}

           {/* <div className="flex-1 hidden md:block lg:hidden">
            <DesktopMenu
              topLevelLinks={header.navigation!.links.slice(0, 3)}
              secondaryLinks={header.navigation!.links.slice(3)}
            />
          </div>

          <div className="flex-1 hidden lg:block">
            <DesktopMenu
              topLevelLinks={header.navigation!.links.slice(0, 5)}
              secondaryLinks={header.navigation!.links.slice(5)}
            />
          </div>  */}
        </Container>
      </header>
    </>
  );
};

export default Header;

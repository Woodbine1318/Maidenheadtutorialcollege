'use client';

import { FC } from 'react';
import { ContentLink as IContentLink, ThemedSSComponent } from '../types';
import ContentLink from './ContentLink';
import { Button, Menu, MenuItem, MenuTrigger, Popover } from 'react-aria-components';

const DesktopMenu: FC<{ topLevelLinks: IContentLink[]; secondaryLinks: IContentLink[] }> = ({
  topLevelLinks,
  secondaryLinks,
}) => {
  return (
    <nav className="flex flex-row flex-nowrap items-center justify-end gap-4 text-sm">
      <ul className="flex-1 flex flex-row flex-nowrap items-center justify-end gap-4">
        {topLevelLinks.map((link) => (
          <li key={link.name}>
            <ContentLink link={link} />
          </li>
        ))}
      </ul>

      <MenuTrigger>
        <Button aria-label="See More" className="font-semibold">
          More
        </Button>

        <Popover className="bg-ww-menu-bg shadow-md text-sm text-ww-menu-text py-2 rounded-sm">
          <Menu>
            {secondaryLinks.map((link) => (
              <MenuItem key={link.name}>
                <ContentLink link={link} className="block py-1 px-4" />
              </MenuItem>
            ))}
          </Menu>
        </Popover>
      </MenuTrigger>
    </nav>
  );
};

export default DesktopMenu;

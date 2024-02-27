'use client';

import { Drawer } from 'vaul';
import MenuIcon from '@assets/icons/menu.svg';
import CloseIcon from '@assets/icons/x.svg';
import { CSSProperties, FC } from 'react';
import classNames from 'classnames';
import { ContentNavigation, ThemedSSComponent } from '../types';
import { getTextColor } from '@utils/colors';
import ContentLink from './ContentLink';

const MobileMenu: FC<ThemedSSComponent & { navigation: ContentNavigation }> = ({ theme, navigation }) => {
  return (
    <Drawer.Root direction="left">
      <Drawer.Trigger aria-label="Open navigation" className="align-middle">
        <MenuIcon
          className={classNames('w-4 h-4', {
            'u-icon-stroke-white': getTextColor(theme.menuBackgroundColor) === '#ffffff',
            'u-icon-stroke-black': getTextColor(theme.menuBackgroundColor) === '#000000',
          })}
        />
      </Drawer.Trigger>

      <Drawer.Portal>
        <Drawer.Overlay className="fixed inset-0 z-10 bg-black/40" />

        <Drawer.Content
          className="fixed bottom-0 left-0 top-0 z-20 h-screen flex flex-col w-full pt-8 px-4 md:max-sm bg-ww-menu-bg text-ww-contrast-text overflow-y-auto"
          style={{ '--ww-contrast-text-color': theme.menuTextColor } as CSSProperties}
        >
          <Drawer.Close aria-label="Close navigation">
            <CloseIcon
              className={classNames('w-6 h-6', {
                'u-icon-stroke-white': getTextColor(theme.menuBackgroundColor) === '#ffffff',
                'u-icon-stroke-black': getTextColor(theme.menuBackgroundColor) === '#000000',
              })}
            />
          </Drawer.Close>

          <ul className="grid grid-cols-1 gap-2 py-8">
            {navigation.links.map((link) => (
              <li
                className="font-semibold border-b border-white py-2 border-opacity-20 last-of-type:border-0"
                key={link.name}
              >
                <ContentLink link={link} />
              </li>
            ))}
          </ul>
        </Drawer.Content>
      </Drawer.Portal>
    </Drawer.Root>
  );
};

export default MobileMenu;

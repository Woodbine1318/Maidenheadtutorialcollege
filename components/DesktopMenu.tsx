'use client';

import { FC, useState } from 'react';
import { ContentLink as IContentLink } from '../types';
import ContentLink from './ContentLink';
import * as DropdownMenu from '@radix-ui/react-dropdown-menu';

const DesktopMenu: FC<{ topLevelLinks: IContentLink[]; secondaryLinks: IContentLink[] }> = ({
  topLevelLinks,
  secondaryLinks,
}) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <nav className="flex flex-row flex-nowrap items-center justify-end gap-4 text-sm">
      <ul className="flex-1 flex flex-row flex-nowrap items-center justify-end gap-4">
        {topLevelLinks.map((link) => (
          <li key={link.name}>
            <ContentLink link={link} />
          </li>
        ))}
      </ul>

      <DropdownMenu.Root open={isOpen} onOpenChange={setIsOpen}>
        <DropdownMenu.Trigger asChild>
          <button className="font-semibold outline-none">More</button>
        </DropdownMenu.Trigger>

        <DropdownMenu.Portal>
          <DropdownMenu.Content
            sideOffset={12}
            align="end"
            alignOffset={-24}
            className="bg-ww-menu-bg shadow-md text-sm text-ww-menu-text py-2 rounded-sm"
          >
            {secondaryLinks.map((link) => (
              <DropdownMenu.Item className="outline-none" key={link.name}>
                <ContentLink onClick={() => setIsOpen(false)} link={link} className="block py-1 px-4" />
              </DropdownMenu.Item>
            ))}
          </DropdownMenu.Content>
        </DropdownMenu.Portal>
      </DropdownMenu.Root>
    </nav>
  );
};

export default DesktopMenu;

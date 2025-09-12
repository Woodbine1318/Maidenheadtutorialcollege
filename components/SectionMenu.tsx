'use client';

import { FC } from 'react';
import { ContentLink as IContentLink } from '../types';
import ContentLink from './ContentLink';

const SectionMenu: FC<{ topLevelLinks: IContentLink[]; secondaryLinks: IContentLink[] }> = ({
  topLevelLinks,
}) => {
  return (
    <nav className="flex flex-row flex-nowrap items-center justify-center gap-4 text-sm">
    <ul className="flex flex-row flex-nowrap items-center justify-center gap-4">
      {topLevelLinks.slice(0, 4).map((link) => (
        <li key={link.name}>
          <ContentLink className='rounded-3xl bg-ww-section-bg text-ww-tittle-text px-6 py-3' link={link} />
        </li>
      ))}
    </ul>
  </nav>
  );
};

export default SectionMenu;

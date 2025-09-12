'use client';

import { FC } from 'react';
import { ContentLink as IContentLink } from '../types';
import ContentLink from './ContentLink';

const SectionMenu: FC<{ topLevelLinks: IContentLink[]}> = ({
  topLevelLinks,
}) => {

  return (
    <nav className="w-full flex flex-row">
      <ul className="flex-1">
        {topLevelLinks.slice(0, 2).map((link) => (
          <li className='my-8' key={link.name}>
            <ContentLink className='bg-ww-cta-background text-ww-cta-text px-10 py-3' link={link} />
          </li>
        ))}  
      </ul>
      <ul className="flex-1">
        {topLevelLinks.slice(2, 4).map((link) => (
          <li className='my-8' key={link.name}>
            <ContentLink className='rounded-x1 bg-ww-cta-background text-ww-cta-text px-10 py-3 ' link={link} />
          </li>
        ))}
        
      </ul>
    </nav>
  );
};

export default SectionMenu;

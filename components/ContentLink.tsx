import { FC } from 'react';
import { ContentLink } from '../types';
import Link from 'next/link';
import classNames from 'classnames';

const ContentLink: FC<{ link: ContentLink; className?: string }> = ({ link, className }) => {
  if (link.type === 'External' && link.url)
    return (
      <Link
        target="_blank"
        href={link.url}
        className={classNames('hover:opacity-80 transition-all duration-300', className)}
      >
        {link.text}
      </Link>
    );

  if (link.type === 'Page' && link.page)
    return (
      <Link
        href={'/' + link.page.slug}
        className={classNames('hover:opacity-80 transition-all duration-300', className)}
      >
        {link.text}
      </Link>
    );

  return null;
};

export default ContentLink;

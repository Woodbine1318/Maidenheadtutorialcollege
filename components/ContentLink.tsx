'use client';
import classNames from 'classnames';
import Link from 'next/link';
import { FC } from 'react';
import { ContentLink } from '../types';

const ContentLink: FC<{ link: ContentLink; className?: string; onClick?: () => void }> = ({
  link,
  className,
  onClick = () => {},
}) => {
  if (link.type === 'External' && link.url)
    return (
      <Link
        target="_blank"
        href={link.url}
        onClick={onClick}
        className={classNames('hover:opacity-50 transition-all duration-300', className)}
      >
        {link.text}
      </Link>
    );

  if (link.type === 'Page' && link.page)
    return (
      <Link
        href={'/' + link.page.slug}
        onClick={onClick}
        className={classNames('hover:opacity-50 transition-all duration-300', className)}
      >
        {link.text}
      </Link>
    );

  return null;
};

export default ContentLink;

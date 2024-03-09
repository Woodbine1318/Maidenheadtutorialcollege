import { FC } from 'react';
import { BlogPostEntry } from '../types';
import { parseContentImage } from '@lib/contentful/asset';
import Link from 'next/link';

const BlogPostCard: FC<{ post: BlogPostEntry }> = ({ post }) => {
  const link = `/blog/${post.fields.slug}`;
  const image = post.fields.cover ? parseContentImage(post.fields.cover) : null;

  return (
    <article className="flex flex-col shadow-md border border-black/20 rounded-3xl overflow-hidden" key={post.sys.id}>
      <div className="relative h-[12rem] bg-ww-accent bg-opacity-20">
        {image && (
          <Link href={link}>
            <img
              src={image.src}
              width={image.width}
              height={image.height}
              alt={image.alt}
              loading="eager"
              srcSet={`${image.src}?w=300 1x, ${image.src} 2x`}
              className="absolute w-full h-full object-cover"
            />
          </Link>
        )}
      </div>

      <div className="flex-1 flex flex-col py-3 px-4">
        <div className="flex-1">
          <h2 className="font-semibold mb-2">
            <Link href={link}>{post.fields.title}</Link>
          </h2>

          <p className="text-sm opacity-80 mb-3">{post.fields.summary}</p>
        </div>

        <Link className="text-ww-accent font-semibold text-sm" href={link}>
          Read More
        </Link>
      </div>
    </article>
  );
};

export default BlogPostCard;

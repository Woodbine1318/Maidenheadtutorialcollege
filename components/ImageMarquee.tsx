import { FC } from 'react';
import { ImageMarqueeEntry } from '../types';
import Marquee from 'react-fast-marquee';
import { parseContentImage } from '@lib/contentful/asset';
import classNames from 'classnames';
import Container from './Container';

const ImageMarquee: FC<{ section: ImageMarqueeEntry }> = ({ section: { fields } }) => {
  return (
    <section
      className={classNames({
        'py-12': fields.spacing === 'Both',
        'pt-12': fields.spacing === 'Top',
        'pb-12': fields.spacing === 'Bottom',
      })}
    >
      {fields.play ? (
        <Marquee>
          {fields.images.map((image) => {
            const img = parseContentImage(image);

            return (
              <img
                src={img!.src}
                width={img!.width}
                height={img!.height}
                alt={img!.alt}
                loading="eager"
                srcSet={`${img!.src}?w=300 1x, ${img!.src} 2x`}
                className="w-full h-24 object-contain mx-4 lg:mx-8 lg:h-28"
                key={img!.src}
              />
            );
          })}
        </Marquee>
      ) : (
        <Container className="flex justify-center items-stretch">
          {fields.images.map((image) => {
            const img = parseContentImage(image);

            return (
              <img
                src={img!.src}
                width={img!.width}
                height={img!.height}
                alt={img!.alt}
                loading="eager"
                srcSet={`${img!.src}?w=300 1x, ${img!.src} 2x`}
                className="w-full h-24 object-contain lg:h-28"
                key={img!.src}
              />
            );
          })}
        </Container>
      )}
    </section>
  );
};

export default ImageMarquee;

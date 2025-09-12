import { CSSProperties, FC } from 'react';
import { TextWithImageBlockEntry } from '../types';
import classNames from 'classnames';
import { getAlignmentClassnames } from '@utils/getAlignmentClassnames';
import { parseContentImage } from '@lib/contentful/asset';
import Container from './Container';
import Markdown from 'react-markdown';
import ContentLink from './ContentLink';
import { parseLink } from '@lib/contentful/link';

const TextWithImageBlock: FC<{ section: TextWithImageBlockEntry }> = ({ section: { fields } }) => {
  const image = fields.image && parseContentImage(fields.image);
  const cta = fields.button ? parseLink(fields.button) : null;

  return (
    <section
      style={
        {
          '--ww-cta-bg-color': fields.buttonBackgroundColor,
          '--ww-cta-text-color': fields.buttonTextColor,
        } as CSSProperties
      }
    >
      <Container
        variant="lg"
        className={classNames('flex flex-col md:flex-row md:items-center bg-ww-section-bg', {
          'py-12': fields.spacing === 'Both',
          'pt-12': fields.spacing === 'Top',
          'pb-12': fields.spacing === 'Bottom',
        })}
      >
        <div
          className={classNames('h-[20rem] md:flex-1 md:mr-12 lg:mr-16', {
            'md:order-2': fields.imagePosition === 'Right',
          })}
        >
          <img
            src={image!.src}
            width={image!.width}
            height={image!.height}
            alt={image!.alt}
            loading="eager"
            srcSet={`${image!.src}?w=300 1x, ${image!.src} 2x`}
            className="w-full h-full object-contain"
          />
        </div>

        <div className={classNames(getAlignmentClassnames(fields.alignment), 'md:flex-1')}>
          <Container className="text-ww-text py-8">
            {fields.heading && <h1 className="text-2xl text-ww-tittle-text md:text-3xl lg:text-3xl">{fields.heading}</h1>}
            {fields.body && <Markdown className="c-markdown mt-8 max-w-[75ch] inline-block">{fields.body}</Markdown>}

            {cta && (
              <div className="mt-8">
                <ContentLink link={cta} className="rounded-2xl bg-ww-first-section-bg text-ww-cta-text px-4 py-2" />
              </div>
            )}
          </Container>
        </div>
      </Container>
    </section>
  );
};

export default TextWithImageBlock;

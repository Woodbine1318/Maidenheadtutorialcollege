import { CSSProperties, FC } from 'react';
import { EditorialSectionEntry } from '../types';
import Container from './Container';
import classNames from 'classnames';
import Markdown from 'react-markdown';
import ContentLink from './ContentLink';
import { parseLink } from '@lib/contentful/link';

const EditorialSection: FC<{ section: EditorialSectionEntry }> = ({ section: { fields } }) => {
  const cta = fields.button ? parseLink(fields.button) : null;

  return (
    <section
      className={classNames({
        'py-12': fields.spacing === 'Both',
        'pt-12': fields.spacing === 'Top',
        'pb-12': fields.spacing === 'Bottom',
      })}
      style={
        {
          '--ww-cta-bg-color': fields.buttonBackgroundColor,
          '--ww-cta-text-color': fields.buttonTextColor,
        } as CSSProperties
      }
    >
      <Container variant="lg" className="text-ww-text md:flex flex-row items-center gap-8 bg-ww-section-bg py-10">
        <div
          className={classNames('flex-1', {
            'md:order-2 md:pr-8 md:ml-8': fields.headingAlignment === 'Right',
            'md:pl-8 md:mr-8': fields.headingAlignment === 'Left',
          })}
        >
          {fields.heading && <h1 className="text-3xl text-ww-tittle-text md:text-3xl lg:text-3xl">{fields.heading}</h1>}
        </div>

        <div
          className={classNames('flex-2', {
            'pl-8': fields.headingAlignment === 'Right',
          })}
        >
          {fields.body && <Markdown className="c-markdown mt-8 max-w-[75ch] inline-block">{fields.body}</Markdown>}

          {cta && (
            <div className="mt-8">
              <ContentLink link={cta} className="rounded-2xl bg-ww-first-section-bg text-ww-cta-text px-4 py-2" />
            </div>
          )}
        </div>
      </Container>
    </section>
  );
};

export default EditorialSection;

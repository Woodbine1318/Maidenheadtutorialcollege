import { UnresolvedLink } from 'contentful';
import { AlignmentValue, ContentHero, HeroEntry } from '../../types';
import { parseContentImage } from './asset';
import { parseLink } from './link';

export const parseHero = (entry: UnresolvedLink<'Entry'> | HeroEntry): ContentHero | null => {
  if (!('fields' in entry)) return null;

  return {
    type: 'hero',
    name: entry.fields.name,
    heading: entry.fields.heading,
    body: entry.fields.body,
    backgroundImage: entry.fields.backgroundImage ? parseContentImage(entry.fields.backgroundImage) : null,
    backgroundColor: entry.fields.backgroundColor,
    overlayOpacity: entry.fields.overlayOpacity ?? 0,
    alignment: entry.fields.alignment as unknown as AlignmentValue,
    callToAction: entry.fields.callToAction ? parseLink(entry.fields.callToAction) : null,
    textColor: entry.fields.textColor,
  };
};

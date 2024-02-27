import { UnresolvedLink } from 'contentful';
import { AnnouncementEntry } from '../../types';

export const parseAnnouncement = (
  entry: UnresolvedLink<'Entry'> | AnnouncementEntry
): AnnouncementEntry['fields'] | null => {
  if (!('fields' in entry)) {
    return null;
  }

  return entry.fields;
};

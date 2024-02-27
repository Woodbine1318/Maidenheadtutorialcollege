import { Entry } from 'contentful';
import {
  TypeAnnouncementSkeleton,
  TypeHeaderSkeleton,
  TypeLinkSkeleton,
  TypeNavigationSkeleton,
  TypePageSkeleton,
} from './contentful';

export interface IThemeContext {
  accentColor: string;
  backgroundColor: string;
  textColor: string;
  menuBackgroundColor: string;
  menuTextColor: string;
}

export interface ThemedSSComponent {
  theme: IThemeContext;
}

export type HeaderEntry = Entry<TypeHeaderSkeleton, undefined, string>;
export type AnnouncementEntry = Entry<TypeAnnouncementSkeleton, undefined, string>;
export type NavigationEntry = Entry<TypeNavigationSkeleton, undefined, string>;
export type LinkEntry = Entry<TypeLinkSkeleton, undefined, string>;
export type PageEntry = Entry<TypePageSkeleton, undefined, string>;
export interface ContentHeader {
  title: string;
  logo?: ContentImage | null;
  announcement?: AnnouncementEntry['fields'] | null;
  navigation: ContentNavigation | null;
}

export interface ContentImage {
  src: string;
  alt?: string;
  width: number;
  height: number;
}

export interface ContentNavigation {
  links: ContentLink[];
}

export interface ContentPage {
  title: string;
  slug: string;
}
export interface ContentLink {
  name: string;
  type: 'Page' | 'External';
  text: string;
  url?: string;
  page?: ContentPage | null;
}

import { Entry } from 'contentful';
import {
  TypeAnnouncementSkeleton,
  TypeBlogPostSkeleton,
  TypeEditorialSectionSkeleton,
  TypeHeaderSkeleton,
  TypeHeroSkeleton,
  TypeImageMarqueeSkeleton,
  TypeLinkSkeleton,
  TypeNavigationSkeleton,
  TypePageFields,
  TypePageSkeleton,
  TypeRichTextSkeleton,
  TypeTextWithImageBlockSkeleton,
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
export type HeroEntry = Entry<TypeHeroSkeleton, undefined, string>;
export type RichTextEntry = Entry<TypeRichTextSkeleton, undefined, string>;
export type TextWithImageBlockEntry = Entry<TypeTextWithImageBlockSkeleton, undefined, string>;
export type ImageMarqueeEntry = Entry<TypeImageMarqueeSkeleton, undefined, string>;
export type EditorialSectionEntry = Entry<TypeEditorialSectionSkeleton, undefined, string>;
export type BlogPostEntry = Entry<TypeBlogPostSkeleton, undefined, string>;

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
  sections: Entry<
    | TypeHeroSkeleton
    | TypeRichTextSkeleton
    | TypeTextWithImageBlockSkeleton
    | TypeImageMarqueeSkeleton
    | TypeEditorialSectionSkeleton,
    undefined,
    string
  >[];
}
export interface ContentLink {
  name: string;
  type: 'Page' | 'External';
  text: string;
  url?: string;
  page?: ContentPage | null;
}

export type AlignmentValue =
  | 'Top Left'
  | 'Top Center'
  | 'Top Right'
  | 'Middle Left'
  | 'Middle Center'
  | 'Middle Right'
  | 'Bottom Left'
  | 'Bottom Center'
  | 'Bottom Right';

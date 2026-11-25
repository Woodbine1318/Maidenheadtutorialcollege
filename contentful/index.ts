import type { EntryFieldTypes, EntrySkeletonType } from 'contentful';

type Alignment =
  | 'Top Left'
  | 'Top Center'
  | 'Top Right'
  | 'Middle Left'
  | 'Middle Center'
  | 'Middle Right'
  | 'Bottom Left'
  | 'Bottom Center'
  | 'Bottom Right';

export interface TypeAnnouncementFields {
  content?: EntryFieldTypes.Text;
}

export type TypeAnnouncementSkeleton = EntrySkeletonType<TypeAnnouncementFields, 'announcement'>;

export interface TypeLinkFields {
  name: EntryFieldTypes.Symbol;
  type: EntryFieldTypes.Symbol<'Page' | 'External'>;
  text: EntryFieldTypes.Symbol;
  url?: EntryFieldTypes.Symbol;
  page?: EntryFieldTypes.EntryLink<TypePageSkeleton>;
}

export type TypeLinkSkeleton = EntrySkeletonType<TypeLinkFields, 'link'>;

export interface TypeNavigationFields {
  slug?: EntryFieldTypes.Symbol;
  links?: EntryFieldTypes.Array<EntryFieldTypes.EntryLink<TypeLinkSkeleton>>;
}

export type TypeNavigationSkeleton = EntrySkeletonType<TypeNavigationFields, 'navigation'>;

export interface TypeHeroFields {
  name: EntryFieldTypes.Symbol;
  heading?: EntryFieldTypes.Symbol;
  body?: EntryFieldTypes.Text;
  backgroundImage?: EntryFieldTypes.AssetLink;
  overlayOpacity?: EntryFieldTypes.Number;
  alignment: EntryFieldTypes.Symbol<Alignment>;
  textColor?: EntryFieldTypes.Symbol;
}

export type TypeHeroSkeleton = EntrySkeletonType<TypeHeroFields, 'hero'>;

export interface TypeRichTextFields {
  name: EntryFieldTypes.Symbol;
  heading?: EntryFieldTypes.Symbol;
  body?: EntryFieldTypes.Text;
  alignment: EntryFieldTypes.Symbol<Alignment>;
  spacing?: EntryFieldTypes.Symbol;
  button?: EntryFieldTypes.EntryLink<TypeLinkSkeleton>;
  buttonBackgroundColor?: EntryFieldTypes.Symbol;
  buttonTextColor?: EntryFieldTypes.Symbol;
}

export type TypeRichTextSkeleton = EntrySkeletonType<TypeRichTextFields, 'richText'>;

export interface TypeTextWithImageBlockFields {
  name: EntryFieldTypes.Symbol;
  heading?: EntryFieldTypes.Symbol;
  body?: EntryFieldTypes.Text;
  image?: EntryFieldTypes.AssetLink;
  imagePosition?: EntryFieldTypes.Symbol;
  alignment: EntryFieldTypes.Symbol<Alignment>;
  spacing?: EntryFieldTypes.Symbol;
  button?: EntryFieldTypes.EntryLink<TypeLinkSkeleton>;
  buttonBackgroundColor?: EntryFieldTypes.Symbol;
  buttonTextColor?: EntryFieldTypes.Symbol;
}

export type TypeTextWithImageBlockSkeleton = EntrySkeletonType<TypeTextWithImageBlockFields, 'textWithImageBlock'>;

export interface TypeImageMarqueeFields {
  name: EntryFieldTypes.Symbol;
  images: EntryFieldTypes.Array<EntryFieldTypes.AssetLink>;
  play?: EntryFieldTypes.Boolean;
  spacing?: EntryFieldTypes.Symbol;
}

export type TypeImageMarqueeSkeleton = EntrySkeletonType<TypeImageMarqueeFields, 'imageMarquee'>;

export interface TypeEditorialSectionFields {
  name: EntryFieldTypes.Symbol;
  heading?: EntryFieldTypes.Symbol;
  body?: EntryFieldTypes.Text;
  headingAlignment?: EntryFieldTypes.Symbol;
  spacing?: EntryFieldTypes.Symbol;
  button?: EntryFieldTypes.EntryLink<TypeLinkSkeleton>;
  buttonBackgroundColor?: EntryFieldTypes.Symbol;
  buttonTextColor?: EntryFieldTypes.Symbol;
}

export type TypeEditorialSectionSkeleton = EntrySkeletonType<TypeEditorialSectionFields, 'editorialSection'>;

export interface TypePageFields {
  title: EntryFieldTypes.Symbol;
  slug: EntryFieldTypes.Symbol;
  metadataDescription?: EntryFieldTypes.Text;
  sections?: EntryFieldTypes.Array<
    EntryFieldTypes.EntryLink<
      | TypeHeroSkeleton
      | TypeRichTextSkeleton
      | TypeTextWithImageBlockSkeleton
      | TypeImageMarqueeSkeleton
      | TypeEditorialSectionSkeleton
    >
  >;
}

export type TypePageSkeleton = EntrySkeletonType<TypePageFields, 'page'>;

export interface TypeBlogPostFields {
  title: EntryFieldTypes.Symbol;
  slug: EntryFieldTypes.Symbol;
  summary?: EntryFieldTypes.Text;
  content?: EntryFieldTypes.Text;
  cover?: EntryFieldTypes.AssetLink;
}

export type TypeBlogPostSkeleton = EntrySkeletonType<TypeBlogPostFields, 'blogPost'>;

export interface TypeHeaderFields {
  title: EntryFieldTypes.Symbol;
  slug?: EntryFieldTypes.Symbol;
  logo?: EntryFieldTypes.AssetLink;
  announcement?: EntryFieldTypes.EntryLink<TypeAnnouncementSkeleton>;
  navigation?: EntryFieldTypes.EntryLink<TypeNavigationSkeleton>;
}

export type TypeHeaderSkeleton = EntrySkeletonType<TypeHeaderFields, 'header'>;

export interface TypeThemeFields {
  slug?: EntryFieldTypes.Symbol;
  accentColor: EntryFieldTypes.Symbol;
  backgroundColor: EntryFieldTypes.Symbol;
  textColor: EntryFieldTypes.Symbol;
  menuBackgroundColor: EntryFieldTypes.Symbol;
  menuTextColor: EntryFieldTypes.Symbol;
  secondBackgroundColor: EntryFieldTypes.Symbol;
  sectionBackgroundColor: EntryFieldTypes.Symbol;
  titleTextColor: EntryFieldTypes.Symbol;
  secondMenuBackgroundColor: EntryFieldTypes.Symbol;
}

export type TypeThemeSkeleton = EntrySkeletonType<TypeThemeFields, 'theme'>;

export interface TypeMetadataFields {
  slug?: EntryFieldTypes.Symbol;
  email: EntryFieldTypes.Symbol;
  phone: EntryFieldTypes.Symbol;
  address: EntryFieldTypes.Symbol;
  contactNotes?: EntryFieldTypes.Text;
}

export type TypeMetadataSkeleton = EntrySkeletonType<TypeMetadataFields, 'metadata'>;

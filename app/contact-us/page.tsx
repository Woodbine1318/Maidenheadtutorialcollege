import ContactDetails from '@components/ContactDetails';
import PageSections from '@components/PageSections';
import { getPage } from '@lib/contentful/page';
import getTheme from '@lib/contentful/theme';
import { notFound } from 'next/navigation';

const ContactPage = async () => {
  const theme = await getTheme();
  const page = await getPage('contact-us');

  if (!page) return notFound();

  const hero = page.sections.find((section) => section.sys.contentType.sys.id === 'hero');
  const notHeroSections = page.sections.filter((section) => section.sys.contentType.sys.id !== 'hero');

  return (
    <>
      {hero && <PageSections sections={[hero]} />}

      <ContactDetails />

      <PageSections sections={notHeroSections} />
    </>
  );
};

export default ContactPage;

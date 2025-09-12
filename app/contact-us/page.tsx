import ContactDetails from '@components/ContactDetails';
import DesktopMenu from '@components/DesktopMenu';
import PageSections from '@components/PageSections';
import getHeader from '@lib/contentful/header';
import { getPage } from '@lib/contentful/page';
import { notFound } from 'next/navigation';

const ContactPage = async () => {
  const page = await getPage('contact-us');

  if (!page) return notFound();

  const header = await getHeader();

  if (!header) return null;

  const hero = page.sections.find((section) => section.sys.contentType.sys.id === 'hero');
  const notHeroSections = page.sections.filter((section) => section.sys.contentType.sys.id !== 'hero');

  return (
    <>
      <div className="w-full"></div>
        <div className="hidden md:block lg:hidden">
          <DesktopMenu
            topLevelLinks={header.navigation!.links.slice(0, 3)}
            secondaryLinks={header.navigation!.links.slice(3)}
          />
        </div>

        <div className="hidden lg:block">
          <DesktopMenu
            topLevelLinks={header.navigation!.links.slice(0, 5)}
            secondaryLinks={header.navigation!.links.slice(5)}
          />
        </div>
        {hero && <PageSections sections={[hero]} />}
      <div>
        <ContactDetails />
      </div>

      <PageSections sections={notHeroSections} />
    </>
  );
};

export default ContactPage;
export const dynamic = 'force-dynamic';

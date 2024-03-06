import ContactDetails from '@components/ContactDetails';
import Container from '@components/Container';
import Header from '@components/Header';
import PageSections from '@components/PageSections';
import { getPage } from '@lib/contentful/page';
import getTheme from '@lib/contentful/theme';

const HomePage = async () => {
  const themePromise = getTheme();
  const pagePromise = getPage('home');

  const [theme, page] = await Promise.all([themePromise, pagePromise]);

  const sections = page!.sections;
  const [firstSection, secondSection, ...restOfSections] = sections;

  return (
    <div className="min-h-screen">
      <Header theme={theme} />

      <PageSections sections={[firstSection]} />

      <div className="grid grid-cols-1 items-center px-0 md:grid-cols-2">
        <ContactDetails />

        {secondSection && <PageSections sections={[secondSection]} />}
      </div>

      <PageSections sections={restOfSections} />
    </div>
  );
};

export default HomePage;

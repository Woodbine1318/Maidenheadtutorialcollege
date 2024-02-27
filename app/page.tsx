import Header from '@components/Header';
import PageSections from '@components/PageSections';
import { getPage } from '@lib/contentful/page';
import getTheme from '@lib/contentful/theme';

const HomePage = async () => {
  const theme = await getTheme();
  const page = await getPage('home');

  return (
    <div className="min-h-screen">
      <Header theme={theme} />

      <PageSections sections={page!.sections} />
    </div>
  );
};

export default HomePage;

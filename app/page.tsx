import Header from '@components/Header';
import getTheme from '@lib/contentful/theme';

const HomePage = async () => {
  const theme = await getTheme();

  return (
    <div className="min-h-screen">
      <Header theme={theme} />
    </div>
  );
};

export default HomePage;

import Header from '@components/Header';

const theme = {
  accentColor: 'rgba(129,71,147,1)',
  backgroundColor: '#ffffff',
  textColor: '#000000',
  menuBackgroundColor: '#000000',
  menuTextColor: '#ffffff',
};

const HomePage = () => {
  return (
    <div className="min-h-screen">
      <Header theme={theme} />
    </div>
  );
};

export default HomePage;

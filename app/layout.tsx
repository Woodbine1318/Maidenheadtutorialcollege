import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import ThemeProvider from '@components/ThemeProvider';
import getTheme from '@lib/contentful/theme';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });

export const metadata: Metadata = {
  title: 'Maidenhead Tutorial College',
  description:
    'Email info@maidenheadcollege.co.uk Telephone 01753 463 648 Find us Maidenhead Tutorial College, 69 Maidenhead High Street, SL6 1JX JCQ exam centre number: 51534 ',
};

export const RootLayout = async ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  const theme = await getTheme();

  return (
    <html lang="en">
      <body className={inter.variable}>
        <ThemeProvider theme={theme}>{children}</ThemeProvider>
      </body>
    </html>
  );
};

export default RootLayout;

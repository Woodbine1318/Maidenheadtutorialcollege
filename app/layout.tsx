import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import ThemeProvider from '@components/ThemeProvider';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });

export const metadata: Metadata = {
  title: 'Maidenhead Tutorial College',
  description:
    'Email info@maidenheadcollege.co.uk Telephone 01753 463 648 Find us Maidenhead Tutorial College, 69 Maidenhead High Street, SL6 1JX JCQ exam centre number: 51534 ',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.variable}>
        <ThemeProvider
          theme={{
            accentColor: 'rgba(129,71,147,1)',
            backgroundColor: '#ffffff',
            textColor: '#000000',
            menuBackgroundColor: '#000000',
            menuTextColor: '#ffffff',
          }}
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}

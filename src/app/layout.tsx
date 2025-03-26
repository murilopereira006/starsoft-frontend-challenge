import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';

import Header from './components/Header';
import './globals.css';

const poppins = Poppins({
  weight: ['300', '400', '500', '600'],
  subsets: ['latin'],
  variable: '--font-poppins',
});

export const metadata: Metadata = {
  title: 'Starsoft challenge by Murilo Pereira',
  description:
    'This is a front-end challenge for Starsoft develop by Murilo Pereira',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <body className={poppins.className}>
        <header>
          <Header />
        </header>
        <main>{children}</main>
      </body>
    </html>
  );
}

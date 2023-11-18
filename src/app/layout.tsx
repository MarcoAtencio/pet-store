import type { Metadata } from 'next';
import './globals.css';
import { SessionProvider } from 'next-auth/react';
import Header from './components/layout/header';
import Footer from './components/layout/footer';
import { inter } from '@/app/components/fonts';

export const metadata: Metadata = {
  title: 'Pet Store',
  description: 'Pagina en construcción',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <SessionProvider>
          <Header />
          {children}
          <Footer />
        </SessionProvider>
      </body>
    </html>
  );
}

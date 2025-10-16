import type { Metadata } from 'next';
import './globals.css';
import localFont from 'next/font/local';
import Providers from '@/components/provider/Providers';
import { Toaster } from 'sonner';

export const metadata: Metadata = {
  title: 'RoofToken',
  description: 'RWA marketplace for properties.',
};

const aspekta = localFont({
  src: [
    {
      path: '../../public/fonts/Aspekta-350.ttf',
      weight: '350',
      style: 'semilight',
    },
    {
      path: '../../public/fonts/Aspekta-400.ttf',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../../public/fonts/Aspekta-450.ttf',
      weight: '450',
      style: 'seminormal',
    },
    {
      path: '../../public/fonts/Aspekta-500.ttf',
      weight: '500',
      style: 'medium',
    },
    {
      path: '../../public/fonts/Aspekta-550.ttf',
      weight: '550',
      style: 'semimedium',
    },
    {
      path: '../../public/fonts/Aspekta-600.ttf',
      weight: '600',
      style: 'semibold',
    },
    {
      path: '../../public/fonts/Aspekta-650.ttf',
      weight: '650',
      style: 'mid-semibold',
    },
    {
      path: '../../public/fonts/Aspekta-700.ttf',
      weight: '700',
      style: 'bold',
    },
    {
      path: '../../public/fonts/Aspekta-800.ttf',
      weight: '800',
      style: 'extrabold',
    },
  ],
  variable: '--font-aspekta',
  display: 'swap',
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={aspekta.className}>
      <body className={`antialiased scroll-smooth`}>
        <Toaster closeButton position='top-center' richColors  />
        <Providers>
          <main className="flex flex-col">{children}</main>
        </Providers>
      </body>
    </html>
  );
}

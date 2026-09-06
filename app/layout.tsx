import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Farhan — Flutter Developer',
  authors: [{ name: 'Muhammed Farhan Sadique Mahi' }],
  icons: { icon: '/favicon.svg' },
  openGraph: {
    title: 'Farhan — Flutter Developer',
    description:
      'Thoughtful mobile and desktop apps. Explore personal projects, experience and applied AI research.',
    type: 'website',
    locale: 'en_US',
  },
  description:
    'Muhammed Farhan Sadique Mahi is a Flutter developer in Dhaka, building thoughtful mobile and desktop apps. Explore personal projects, open-source work and applied AI research.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}

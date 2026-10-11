import type { Metadata, Viewport } from 'next';
import { BIRTHDAY_CONFIG } from '@/config/birthday.config';
import { MusicProvider } from '@/components/music-player/MusicContext';
import './globals.css';

export const metadata: Metadata = {
  title: BIRTHDAY_CONFIG.meta.title,
  description: BIRTHDAY_CONFIG.meta.description,
  openGraph: {
    title: BIRTHDAY_CONFIG.meta.title,
    description: BIRTHDAY_CONFIG.meta.description,
    type: 'website',
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  themeColor: '#0d0f1d',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body className="antialiased bg-[#0d0f1d] text-slate-100 overflow-x-hidden">
        <MusicProvider>{children}</MusicProvider>
      </body>
    </html>
  );
}

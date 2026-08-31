import type { Metadata } from 'next';
import { Playfair_Display, Montserrat, Gochi_Hand } from 'next/font/google';
import './globals.css';

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
  style: ['normal', 'italic'],
  weight: ['400', '500', '600', '700', '800', '900'],
});

const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-montserrat',
  display: 'swap',
  weight: ['300', '400', '500', '600', '700'],
});

const gochi = Gochi_Hand({
  subsets: ['latin'],
  variable: '--font-gochi',
  display: 'swap',
  weight: '400',
});

const siteUrl = 'https://www.nalurisocials.com';
const title = 'Naluri Socials — Live Freely, Create Confidently';
const description =
  'Naluri Socials helps entrepreneurs and personal brands find their voice, build confidence and create a content flow that makes showing up online feel like them — not a performance.';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: title,
    template: '%s — Naluri Socials',
  },
  description,
  keywords: [
    'social media content strategy',
    'personal brand content',
    'content creation for entrepreneurs',
    'authentic social media',
    'brand voice',
    'content systems',
  ],
  openGraph: {
    title,
    description,
    url: siteUrl,
    siteName: 'Naluri Socials',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title,
    description,
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${playfair.variable} ${montserrat.variable} ${gochi.variable}`}>
      <body>{children}</body>
    </html>
  );
}

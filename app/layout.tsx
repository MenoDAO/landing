import type { Metadata } from 'next';
import { Inter, Outfit } from 'next/font/google';
import './globals.css';
import Analytics from './components/Analytics';
import StructuredData from './components/StructuredData';

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const outfit = Outfit({ 
  subsets: ['latin'],
  variable: '--font-outfit',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'MenoDAO - Affordable Dental Care for All Kenyans | Dental Sacco',
  description: 'MenoDAO is Kenya\'s first community-led dental care SACCO. Get affordable dental treatment, teeth cleaning, dental checkups & emergency care. Quality dental services for low-income families. Join today!',
  keywords: [
    // Brand keywords
    'menodao', 'MenoDAO', 'Meno DAO', 'meno', 'dao', 'dental sacco',
    // Service keywords
    'dental care', 'dental clinic', 'dental treatment', 'teeth cleaning',
    'dental checkup', 'dental services', 'oral health', 'dental health',
    'tooth extraction', 'dental filling', 'root canal', 'dental crown',
    // Location keywords
    'dental care Kenya', 'dental clinic Kenya', 'dental care Nairobi',
    'dentist near me', 'dental clinic near me', 'dental care near me',
    'affordable dentist Nairobi', 'cheap dental care Kenya',
    // Target audience keywords
    'affordable dental care', 'low cost dental treatment',
    'dental care for families', 'community dental care',
    'dental insurance alternative', 'dental membership Kenya',
    'budget dental care', 'quality dental care affordable',
    // Problem/Solution keywords
    'affordable teeth treatment', 'cheap dental services',
    'dental care low income', 'dental sacco Kenya',
    'community health membership', 'dental savings plan',
    // Swahili keywords for local SEO
    'matibabu ya meno', 'daktari wa meno', 'afya ya meno',
  ],
  authors: [{ name: 'MenoDAO', url: 'https://menodao.org' }],
  creator: 'MenoDAO',
  publisher: 'MenoDAO',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/logo.png', sizes: '192x192', type: 'image/png' },
    ],
    shortcut: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
  manifest: '/manifest.json',
  themeColor: '#2563eb',
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 5,
  },
  verification: {
    // Add your verification codes when available
    // google: 'your-google-verification-code',
    // yandex: 'your-yandex-verification-code',
  },
  openGraph: {
    type: 'website',
    locale: 'en_KE',
    url: 'https://menodao.org',
    siteName: 'MenoDAO',
    title: 'MenoDAO - Affordable Dental Care for All Kenyans',
    description: 'Join Kenya\'s first community-led dental care SACCO. Affordable dental treatment, teeth cleaning, checkups & emergency care for low-income families.',
    images: [
      {
        url: '/logo.png',
        width: 800,
        height: 600,
        alt: 'MenoDAO - Community Dental Care',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'MenoDAO - Affordable Dental Care Kenya',
    description: 'Community-led dental care SACCO. Quality dental services for all income levels.',
    images: ['/logo.png'],
    creator: '@menodao',
  },
  alternates: {
    canonical: 'https://menodao.org',
  },
  category: 'Healthcare',
  classification: 'Dental Care Services',
  other: {
    'geo.region': 'KE',
    'geo.placename': 'Kenya',
    'og:locale:alternate': 'sw_KE',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${outfit.variable}`}>
      <head>
        <StructuredData />
      </head>
      <body className="antialiased">
        <Analytics />
        {children}
      </body>
    </html>
  );
}


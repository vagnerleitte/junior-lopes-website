import type { Metadata } from 'next';
import { Inter, Montserrat } from 'next/font/google';
import { Footer } from '@/components/layout/footer';
import { Navbar } from '@/components/layout/navbar';
import { JsonLd } from '@/components/ui/json-ld';
import { siteConfig } from '@/config/site';
import { socialImageMetadata } from '@/lib/metadata';
import '@/styles/globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});
const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-montserrat',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: { default: siteConfig.name, template: `%s | ${siteConfig.shortName}` },
  description: siteConfig.description,
  openGraph: {
    images: [socialImageMetadata],
  },
  twitter: {
    card: 'summary_large_image',
    images: [socialImageMetadata],
  },
  robots: { index: true, follow: true },
  manifest: '/manifest.webmanifest',
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: '32x32' },
      {
        url: '/icons/favicon-16x16.png',
        sizes: '16x16',
        type: 'image/png',
      },
      {
        url: '/icons/favicon-32x32.png',
        sizes: '32x32',
        type: 'image/png',
      },
    ],
    apple: [
      {
        url: '/icons/apple-touch-icon.png',
        sizes: '180x180',
        type: 'image/png',
      },
    ],
  },
  appleWebApp: {
    capable: true,
    statusBarStyle: 'default',
    title: siteConfig.shortName,
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const schemas = [
    {
      '@context': 'https://schema.org',
      '@type': ['Organization', 'LegalService', 'LocalBusiness'],
      name: siteConfig.name,
      url: siteConfig.url,
      image: new URL(siteConfig.socialImage, siteConfig.url).toString(),
      email: siteConfig.email,
      telephone: siteConfig.phone,
      address: {
        '@type': 'PostalAddress',
        streetAddress: siteConfig.address,
        addressCountry: 'BR',
      },
    },
    {
      '@context': 'https://schema.org',
      '@type': 'Attorney',
      name: 'Junior Lopes',
      image: new URL(siteConfig.socialImage, siteConfig.url).toString(),
      worksFor: { '@type': 'Organization', name: siteConfig.name },
      url: siteConfig.url,
    },
  ];
  return (
    <html lang="pt-BR">
      <body className={`${inter.variable} ${montserrat.variable} antialiased`}>
        <JsonLd data={schemas} />
        <a
          href="#conteudo"
          className="sr-only z-[100] bg-white p-3 focus:not-sr-only focus:fixed focus:left-3 focus:top-3"
        >
          Pular para o conteúdo
        </a>
        <Navbar />
        <main id="conteudo">{children}</main>
        <Footer />
      </body>
    </html>
  );
}

// Developed by doctorcodex / drferdiiskandar
// Root layout with sentra/ui brand tokens

import '@/app/globals.css';
import BreadcrumbCollapsed from '@/components/breadcrumb_collapsed';
import SiteFooter from '@/components/site_footer';
import SiteHeader from '@/components/site_header';
import type { Metadata } from 'next';
import { Manrope } from 'next/font/google';

export const metadata: Metadata = {
  title: 'AADI - Augmented Artificial Intelligent Diagnostic Integrated',
  description:
    'Sistem pendukung keputusan klinis yang merevolusi cara dokter bekerja: cepat, akurat, dan transparan. Protokol 7: Transformasi Diagnostik Terpadu.',
};

const manrope = Manrope({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${manrope.className} font-medium text-[17px] leading-[1.75] text-gray-900`}>
        <a href="#main" className="visually-hidden">
          Skip to content
        </a>
        <SiteHeader />
        <main id="main">{children}</main>
        <SiteFooter />
        <BreadcrumbCollapsed />
      </body>
    </html>
  );
}

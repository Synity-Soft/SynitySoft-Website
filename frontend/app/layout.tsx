import type { Metadata } from 'next';
import { ThemeProvider } from '@/context/ThemeContext';
import './globals.css';
import { LanguageProvider } from '@/context/LanguageContext';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { ScrollProgress } from '@/components/ui/ScrollProgress';

export const metadata: Metadata = {
  metadataBase: new URL('https://synitysoft.com'),
  title: {
    default: 'SynitySoft — Built Around Need | Official Website',
    template: '%s | SynitySoft',
  },
  description: 'SynitySoft is an ambitious technology and software company creating purpose-driven digital solutions, offline-first architectures, and intelligent systems.',
  keywords: [
    'SynitySoft',
    'Software Company Bangladesh',
    'Offline-First Architecture',
    'HealthTech AI',
    'Retail Inventory AI',
    'Next.js Development',
    'Built Around Need',
    'Dhaka Software Company',
    'HAAT-BAZAAR',
    'Niramoy',
  ],
  authors: [{ name: 'SynitySoft' }],
  creator: 'SynitySoft',
  openGraph: {
    title: 'SynitySoft — Built Around Need',
    description: 'We transform real-world challenges into meaningful digital solutions through software engineering, innovation and thoughtful problem-solving.',
    url: 'https://synitysoft.com',
    siteName: 'SynitySoft',
    images: [
      {
        url: '/brand/icon-512-lime.png',
        width: 512,
        height: 512,
        alt: 'SynitySoft Official Logo',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  icons: {
    icon: '/favicon.ico',
    apple: '/brand/icon-192-lime.png',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var m=localStorage.getItem('synitysoft_theme_mode');var d=m==='dark'||(m!=='light'&&window.matchMedia('(prefers-color-scheme: dark)').matches);document.documentElement.classList.add(d?'dark':'light');document.documentElement.style.colorScheme=d?'dark':'light'}catch(e){}})();`,
          }}
        />
      </head>
      <body className="bg-brand-forest text-brand-offwhite antialiased min-h-screen flex flex-col">
        <ScrollProgress />
        <ThemeProvider>
        <LanguageProvider>
          <Navbar />
          <main className="flex-grow">
            {children}
          </main>
          <Footer />
        </LanguageProvider>
      </ThemeProvider>
      </body>
    </html>
  );
}

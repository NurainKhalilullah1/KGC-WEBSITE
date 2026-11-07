import type {Metadata} from 'next';
import {Fraunces, Plus_Jakarta_Sans} from 'next/font/google';
import './globals.css';

const fraunces = Fraunces({
  subsets: ['latin'],
  variable: '--font-fraunces',
  display: 'swap',
  weight: ['500', '600', '700'],
});

const googleSansFallback = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-google-sans-fallback',
  display: 'swap',
  weight: ['400', '500', '600', '700'],
});

export const metadata: Metadata = {
  title: 'Temitope Nurain — Design, Engineering, Motion & AI Portfolio',
  description:
    'Personal portfolio of a Product Designer, Frontend Developer, Motion Graphic Designer, and AI Enthusiast.',
  openGraph: {
    title: 'Temitope Nurain — Design, Engineering, Motion & AI Portfolio',
    description:
      'Personal portfolio of a Product Designer, Frontend Developer, Motion Graphic Designer, and AI Enthusiast.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Temitope Nurain — Design, Engineering, Motion & AI Portfolio',
    description:
      'Personal portfolio of a Product Designer, Frontend Developer, Motion Graphic Designer, and AI Enthusiast.',
  },
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html
      lang="en"
      className={`${fraunces.variable} ${googleSansFallback.variable} scroll-smooth`}
    >
      <body
        suppressHydrationWarning
        className="bg-[#FAF8F5] text-[#111110] antialiased selection:bg-[#D9381E] selection:text-white"
      >
        {children}
      </body>
    </html>
  );
}

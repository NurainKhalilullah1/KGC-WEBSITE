import type {Metadata} from 'next';
import './globals.css';

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
    <html lang="en" className="scroll-smooth">
      <body
        suppressHydrationWarning
        className="bg-[#FAF8F5] text-[#111110] antialiased selection:bg-[#D9381E] selection:text-white"
      >
        {children}
      </body>
    </html>
  );
}

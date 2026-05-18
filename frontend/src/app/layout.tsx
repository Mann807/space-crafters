import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/Navbar';
import SplashScreen from '@/components/SplashScreen';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Space Crafters | Premium Interior Design',
  description: 'Elevating spaces with modern, dynamic, and breathtaking interior design.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} bg-background text-foreground antialiased`}>
        <SplashScreen>
          <Navbar />
          {children}
        </SplashScreen>
      </body>
    </html>
  );
}

import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Valencia Tech - Desarrollo Web & IA',
  description: 'Empresa tecnológica en Valencia especializada en desarrollo web a medida y automatización con inteligencia artificial.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body className={inter.className + " bg-background text-textPrimary"}>
        {children}
      </body>
    </html>
  );
}
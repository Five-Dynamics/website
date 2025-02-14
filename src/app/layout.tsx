import type { Metadata } from 'next';
import { Inter, Geist_Mono } from 'next/font/google';
import './style/globals.css';
import './style/custom-font.css';
import Header from './components/header';
import Scene from './components/scene';
import styles from './style/Home.module.css';

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${geistMono.variable} antialiased custom-font`}
      >
        <div className="header">
          <Header />
        </div>
        <div className="relative">
          <Scene />
          <div className={styles.textTopRight}>
            <h2>ENGINEERING</h2>
            <h2>THE</h2>
          </div>
          <div className={styles.textBottomLeft}>
            <h2>EXTRA</h2>
            <h2>ORDINARY</h2>
          </div>
        </div>
        {children}
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import localFont from 'next/font/local';
import "./globals.css";

const roboto = Roboto({
  weight: ['700'],
  subsets: ['latin', 'cyrillic'],
  display: 'swap',
  variable: '--font-roboto',
});

const gotham = localFont({
  src: './assets/fonts/gotham.otf', 
  weight: '400',
  style: 'normal',
  display: 'swap',
  variable: '--font-gotham',
});

export const metadata: Metadata = {
  title: "NOOR",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${roboto.variable} ${gotham.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}

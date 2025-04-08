import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import Header from './components/header/Header'
import Footer from './components/footer/Footer'

export const metadata: Metadata = {
  title: "Portfilio Graphic designer",
  description: "SIGRIANSKAYA YANA",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}

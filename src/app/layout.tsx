import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import React from 'react';
import ToasterProvider from '@/providers/ToasterProvider';
import Navbar from '@/components/navbar/Navbar';
import { ThemeProvider } from '@/providers/Theme-provider';
import getCurrentUser from './actions/getCurrentUser';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'e-commerce-admin',
  description: 'E commerce admin application',
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const currentUser = await getCurrentUser();
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar currentUser={currentUser} />
          <ToasterProvider />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}

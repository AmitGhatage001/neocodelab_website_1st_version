// app/layout.js
import './globals.css';
import React from 'react';
import { Inter } from 'next/font/google';

// Example: Using a Google font
const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'NeoCodeLab | Creating Impact',
  description: 'Building the future, one solution at a time',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {/* You can add a Navbar or other layout components here */}
        {children}
      </body>
    </html>
  );
}

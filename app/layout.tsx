import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Big Christmas Tree',
  description: 'An opulent holiday centerpiece for the Big Christmas Tree luxury brand.'
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

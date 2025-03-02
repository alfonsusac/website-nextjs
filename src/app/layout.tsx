import type { Metadata } from 'next';
import { GeistSans } from 'geist/font/sans';
import { GeistMono } from 'geist/font/mono';
import './globals.css';
import { Header } from '@/components/layout/header';
import { LayoutRoot } from '@/components/layout/layout-root';
import { Footer } from '@/components/layout/footer';

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
    <html
      lang="en"
      className={`${ GeistSans.variable } ${ GeistMono.variable }`}
      style={{
        scrollBehavior: 'smooth',
      }}
    >
      <body
        className="h-full min-h-screen text-[var(--foreground-hex)] bg-[var(--background-hex)]"
      >
        <style>
          {`
:root {
  --foreground-hex: #c7cbd1;
  --background-hex: #15181d;

  --primary: #3cb0ca;

  --mw-page: 1080px;
  --mw-content: 860px;
  --mw-content-sm: 720px;

  --px-page: 1.5rem;
}
@media (min-width: 640px) {
  :root {
    --px-page: 2rem;
  }
}
          `}
        </style>
        <LayoutRoot>
          <Header />
          <main className="flex w-full flex-1 flex-col contain-layout">{children}</main>
          <Footer />
        </LayoutRoot>
      </body>
    </html>
  );
}


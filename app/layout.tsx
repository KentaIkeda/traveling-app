import type { Metadata } from 'next';
import { Noto_Sans_JP } from 'next/font/google';
import './globals.css';
import Header from '@/components/Header';

const notoSansJP = Noto_Sans_JP({
  subsets: ['latin'],
  weight: ['100', '400', '700'],
});

export const metadata: Metadata = {
  title: 'フライサーチ',
  description:
    '行きたい観光名所が見つかるWEBサービス。アカウントを作成してお気に入りに保存しよう！',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={`${notoSansJP.className} min-h-screen min-w-full`}>
        <Header />
        {children}
      </body>
    </html>
  );
}

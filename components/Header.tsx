'use client';

import Link from 'next/link';
import Navigation from './Navigation';

export default function Header() {
  return (
    <header className='w-full h-20 bg-blue-500 text-blue-50 flex items-center justify-between px-40'>
      <Link href='/'>
        <h1 className='text-xl'>フライサーチ</h1>
      </Link>
      <Navigation />
    </header>
  );
}

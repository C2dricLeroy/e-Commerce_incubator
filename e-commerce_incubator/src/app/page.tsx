import React from 'react';
// @ts-ignore
import Header from '@/app/components/Header/Header.tsx';
// @ts-ignore
import TopProducts from '@/app/components/TopProducts/TopProducts.tsx';

export default function Home() {
  return (
        <main className="flex flex-col justify-center items-center">
            <Header />
            <TopProducts />
        </main>
  );
}

'use client';

import React from 'react';
// @ts-ignore
import Header from '@/app/components/Header/Header.tsx';
// @ts-ignore
import TopProducts from '@/app/components/TopProducts/TopProducts.tsx';
// @ts-ignore
import ProductsComponents from '@/app/components/products/allProducts/productsComponent.tsx';
// @ts-ignore
import { AuthProvider } from '@/app/context/AuthContext.tsx';

export default function Home() {
  return (
        <main className="flex flex-col justify-center items-center">
                <Header />
                <TopProducts />
                <ProductsComponents />
        </main>
  );
}

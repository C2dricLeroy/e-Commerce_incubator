'use client';

// @ts-ignore
import useProductsViewModel from '@/viewmodels/ProductViewModel.ts';
import { useEffect } from 'react';
import styles from './styles.module.css';

export default function TopProducts() {
  const productsViewModel = useProductsViewModel();

  return (
        <div className={styles.container} key="uniquevalue">
            <div className={styles.topContainer}>
                <h1 className={styles.title}>Nos meilleurs produits</h1>
                <div className={styles.cardContainer}>
                    {productsViewModel.products
                        && productsViewModel.products.map((product: any) => (
                        <p key={product.name}>{product.name}</p>
                        ))}
                </div>
            </div>
        </div>
  );
}

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
                    {productsViewModel.products ? <p>ok</p> : <p>loading</p>}
                </div>

            </div>
        </div>
  );
}

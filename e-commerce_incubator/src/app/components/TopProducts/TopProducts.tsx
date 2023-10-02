'use client';

// @ts-ignore
import useProductsViewModel from '@/viewmodels/ProductViewModel.ts';
import { useRouter } from 'next/navigation';
import styles from './styles.module.css';

export default function TopProducts() {
  const productsViewModel = useProductsViewModel();
  const router = useRouter();

  return (
        <div className={styles.container} key="uniquevalue">
            <div className={styles.topContainer}>
                <h1 className={styles.title}>Nos meilleurs produits</h1>
                <div className={styles.cardContainer}>
                    {productsViewModel.topProducts
                        && productsViewModel.topProducts.map((product: any) => (
                        <div className={styles.card} key={product.name}>
                            <div className={styles.product}>
                                <p className={styles.category}>{product.product_type.name}</p>
                                <img onClick={() => router.push(`/products/${product.product_id}`)} className={styles.productImage} src={`/products_images/${product.image_path}`} alt={`${product.name} image`} />
                            </div>
                            <div className={styles.productText} onClick={() => router.push(`/products/${product.product_id}`)}>
                                <h2 className={styles.productTitle}>{product.name}</h2>
                                <p className={styles.productPrice}>{product.price} €</p>
                            </div>
                        </div>
                        ))}
                </div>
            </div>
        </div>
  );
}

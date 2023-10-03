// @ts-ignore
import useProductsViewModel from '@/viewmodels/ProductViewModel.ts';
// @ts-ignore
import SearchBar from '@/app/components/Header/searchBar.tsx';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import styles from './styles.module.css';

export default function ProductsComponents() {
  const router = useRouter();
  const productsViewModel = useProductsViewModel();

  return (
      <div className={styles.container} key="uniquevalue2">
          <div className={styles.topContainer}>
              <h1 className={styles.title}>Tous nos produits</h1>
              <div className={styles.parameters}>
                  <SearchBar></SearchBar>
                  <div className={styles.categoryFilter}>
                      <p>Filtrer par catégorie :</p>
                      <select
                          value={productsViewModel.selectedCategory}
                          onChange={(e) => productsViewModel.setSelectedCategory(e.target.value)}
                      >
                          <option value="">Toutes</option>
                          <option value="1">Instruments</option>
                          <option value="2">CD</option>
                          <option value="3">Vinyls</option>
                          <option value="4">Concerts</option>
                      </select>
                  </div>
              </div>
              <div className={styles.cardContainer}>
                  {productsViewModel.products
                      && productsViewModel.products.map((product: any) => (
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

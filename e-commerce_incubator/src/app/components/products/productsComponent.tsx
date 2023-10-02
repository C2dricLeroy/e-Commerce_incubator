// @ts-ignore
import useProductsViewModel from '@/viewmodels/ProductViewModel.ts';
import styles from './styles.module.css';

export default function ProductsComponents() {
  const productsViewModel = useProductsViewModel();

  return (
      <div className={styles.container} key="uniquevalue2">
          <div className={styles.topContainer}>
              <h1 className={styles.title}>Tous nos produits</h1>
              <div className={styles.cardContainer}>
                  {productsViewModel.products
                      && productsViewModel.products.map((product: any) => (
                          <div className={styles.card} key={product.name}>
                              <div className={styles.product}>
                                  <p className={styles.category}>{product.product_type.name}</p>
                                  <img className={styles.productImage} src={`/products_images/${product.image_path}`} alt={`${product.name} image`} />
                              </div>
                              <div className={styles.productText}>
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

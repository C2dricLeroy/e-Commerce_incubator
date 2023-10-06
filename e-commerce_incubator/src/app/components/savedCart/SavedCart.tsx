'use client';

// @ts-ignore
import useSavedCartViewModel from '@/viewmodels/savedCartViewModel.ts';
import styles from './style.module.css';

export default function SavedCart() {
  const savedCartViewModel = useSavedCartViewModel();
  return (
      <div className={styles.container}>
          <h1>Mes paniers sauvegardés</h1>
          <div className={styles.CartContainer}>
              {savedCartViewModel.saveCart && savedCartViewModel.saveCart.length > 0 ? (

                savedCartViewModel.saveCart.map((cart: any) => (
                          <div className={styles.card} key={cart.id}>
                              <div className={styles.product}>
                                  <img className={styles.productImage} src={`/products_images/${cart.image_path}`} alt={`${cart.name} image`} />
                                  <p className={styles.category}>{cart.product_type.name}</p>
                              </div>
                              <div className={styles.productText}>
                                  <h2 className={styles.productTitle}>{cart.name}</h2>
                                  <p className={styles.productPrice}>{cart.price} €</p>
                              </div>
                              <button className={styles.select}>Sélectionner</button>
                          </div>
                ))) : (
                      <p>Aucun panier sauvegardé</p>
              )
              }
          </div>
          <p>Charger plus</p>
      </div>
  );
}

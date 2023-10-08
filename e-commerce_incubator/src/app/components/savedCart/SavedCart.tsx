'use client';

// @ts-ignore
import useSavedCartViewModel from '@/viewmodels/savedCartViewModel.ts';
import styles from './style.module.css';

export default function SavedCart() {
  const savedCartViewModel = useSavedCartViewModel();
  return (
      <div className={styles.container}>
          <h1>Mes paniers sauvegardés</h1>
          <div className={styles.cartContainer}>
              {savedCartViewModel.saveCart && savedCartViewModel.saveCart.length > 0 ? (
                savedCartViewModel.saveCart.map((cart: any) => {
                  const totalPrice = cart.cart_item.reduce((accumulator: number, cartItem: any) => {
                    const itemPrice = cartItem.quantity * cartItem.product.price;
                    return accumulator + itemPrice;
                  }, 0);

                  return (
                          <div className={styles.card} key={cart.cart_id}>
                              <div className={styles.product}>
                                  <img className={styles.productImage} src={`/products_images/${cart.cart_item[0].product.image_path}`} alt={`${cart.cart_item[0].product.name} image`} />
                                  <p className={styles.price}>{cart.cart_name}</p>
                              </div>
                              <div className={styles.productText}>
                                  <h2 className={styles.productTitle}>{cart.name}</h2>
                                  <p className={styles.productPrice}>{totalPrice} €</p>
                              </div>
                              <button className={styles.select}>Sélectionner</button>
                          </div>
                  );
                })
              ) : (
                  <p>Aucun panier sauvegardé</p>
              )}
          </div>
          <p>Charger plus</p>
      </div>
  );
}

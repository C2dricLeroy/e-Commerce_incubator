'use client';

// @ts-ignore
import useCartViewModel from '@/viewmodels/CartViewModel.ts';
import { FaPlus, FaMinus } from 'react-icons/fa';
import styles from './style.module.css';

export default function Cart() {
  const cartViewModel = useCartViewModel();

  return (
      <div>
          <div className={styles.myCart}>
              <div className={styles.cartContainer}>
                  {cartViewModel.cartProducts && cartViewModel.cartProducts.map((item: any) => (
                      <div className={styles.card} key={item.name}>
                          <div className={styles.product}>
                              <img className={styles.productImage} src={`/products_images/${item.image_path}`} alt={`${item.name} image`} />
                              <p className={styles.productTitle}>{item.name}</p>
                              <button>
                                  <FaMinus />
                              </button>
                              <p className={styles.quantity}>{item.quantity}</p>
                              <button>
                                  <FaPlus />
                              </button>
                              <button>Supprimer</button>
                          </div>
                      </div>
                  ))}
              </div>
              <div className={styles.total}>
                  <div className={styles.totalText}>
                      <p>Total des articles</p>
                      <p>Livraison</p>
                      <p>Total</p>
                  </div>
                  <div className={styles.paymentButton}>
                      <button>Commander</button>
                  </div>
                  <div className={styles.saveCart}>
                      <button>Sauvegarder ce panier</button>
                  </div>
              </div>
          </div>
      </div>
  );
}

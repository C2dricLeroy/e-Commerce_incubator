'use client';

// @ts-ignore
import Header from '@/app/components/Header/Header.tsx';
// @ts-ignore
import Footer from '@/app/components/footer/Footer.tsx';

// @ts-ignore
import Cart from '@/app/components/cart/Cart.tsx';

// @ts-ignore
import { useAuth } from '@/app/context/AuthContext.tsx';
import styles from './style.module.css';

export default function CartPage() {
  return (
        <div className={styles.pageContainer}>
            <Header></Header>
            <div >
                <div className={styles.container}>
                    <h1>Mon panier</h1>
                    <Cart></Cart>
                </div>
            </div>

            <Footer></Footer>
        </div>
  );
}

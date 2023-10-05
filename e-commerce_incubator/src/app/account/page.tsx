// @ts-ignore
import Header from '@/app/components/Header/Header.tsx';
// @ts-ignore
import Footer from '@/app/components/footer/Footer.tsx';
// @ts-ignore
import AccountComponent from '@/app/components/accountComponent/AccountComponent.tsx';
// @ts-ignore
import SavedCart from '@/app/components/savedCart/SavedCart.tsx';
import styles from './style.module.css';

export default function Account() {
  return (
        <div className={styles.pageContainer}>
            <Header></Header>
            <div >
                <div className={styles.container}>
                    <h1>Mon compte</h1>
                    <div className={styles.accountContainer}>
                        <SavedCart></SavedCart>
                        <AccountComponent></AccountComponent>
                    </div>
                </div>
            </div>

            <Footer></Footer>
        </div>
  );
}

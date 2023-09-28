// @ts-ignore
import SearchBar from '@/app/components/Header/searchBar.tsx';
import { FaUser, FaShoppingCart } from 'react-icons/fa';
import styles from './style.module.css';

export default function Header() {
  return (
      <header className={styles.headerContainer}>
          <div className={styles.titleContainer}>
              <h1>
                  <a className={styles.title}href="#">
                      Harmony
                  </a>
              </h1>
              <h2 className={styles.subtitle}>Toute la musique que vos animaux désirent!</h2>
          </div>
          <div className={styles.navContainer}>
              <SearchBar></SearchBar>
              <nav>
                  <ul className={styles.iconList} >
                      <li >
                          <a className={styles.icon} href="#">
                              <FaShoppingCart/>
                          </a>
                      </li>
                      <li>
                          <a className={styles.icon} href="#">
                              <FaUser/>
                          </a>
                      </li>
                  </ul>
              </nav>
          </div>
      </header>
  );
}

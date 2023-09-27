// @ts-ignore
import SearchBar from '@/app/components/Header/searchBar.tsx';
import { FaUser, FaShoppingCart } from 'react-icons/fa';
import styles from './style.module.css';

export default function Header() {
  return (
      <header className={styles.headerContainer}>
          <div className={styles.titleContainer}>
              <h1 className={styles.title}>
                  <a href="#">
                      Harmony
                  </a>
              </h1>
              <h2>Toute la musique que vos animaux désirent!</h2>
          </div>
          <div className={styles.navContainer}>
              <SearchBar></SearchBar>
              <nav>
                  <ul >
                      <li >
                          <a href="#">
                              Products
                          </a>
                      </li>
                      <li>
                          <a href="#">
                              About
                          </a>
                      </li>
                  </ul>
              </nav>
          </div>
      </header>
  );
}

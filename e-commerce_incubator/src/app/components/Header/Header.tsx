'use client';

// @ts-ignore
import SearchBar from '@/app/components/Header/searchBar.tsx';
import { FaUser, FaShoppingCart } from 'react-icons/fa';
import React, { useState } from 'react';
import Link from 'next/link';
import styles from './style.module.css';

export default function Header() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
      <header className={styles.headerContainer}>
          <div className={styles.logoContainer} >
              <img src="../../../../public/logo.svg" alt="MeowSic Logo" />
              <div className={styles.titleContainer}>
                  <h1>
                      <Link className={styles.title}href="/">
                          Meowsic
                      </Link>
                  </h1>
                  <h2 className={styles.subtitle}>Toute la musique que vos animaux désirent!</h2>
              </div>

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
                          <a className={styles.icon}
                             onClick={() => setIsDropdownOpen(!isDropdownOpen)}>
                              <FaUser/>
                          </a>
                          {isDropdownOpen && (
                              <div className={styles.dropdownContent} >
                                      <div>
                                          <Link href={'/login'}>
                                              <p className={styles.link}>Se connecter</p>
                                          </Link>
                                      </div>
                                      <div>
                                          <Link href={'/login'}>
                                              <p className={styles.link}><b>S&apos;inscrire</b></p>
                                          </Link>
                                  </div>
                              </div>
                          )}
                      </li>
                  </ul>
              </nav>
          </div>
      </header>
  );
}

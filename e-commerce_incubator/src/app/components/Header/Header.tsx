'use client';

// @ts-ignore
import SearchBar from '@/app/components/Header/searchBar.tsx';
import { FaUser, FaShoppingCart } from 'react-icons/fa';
import React, { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import styles from './style.module.css';

function useHover(ref: any, callback: any) {
  useEffect(() => {
    function handleMouseEnter() {
      callback(true);
    }

    function handleMouseLeave() {
      callback(false);
    }

    const element = ref.current;

    if (element) {
      element.addEventListener('mouseenter', handleMouseEnter);
      element.addEventListener('mouseleave', handleMouseLeave);

      return () => {
        element.removeEventListener('mouseenter', handleMouseEnter);
        element.removeEventListener('mouseleave', handleMouseLeave);
      };
    }

    return undefined;
  }, [ref, callback]);
}

function useClickOutside(ref: any, callback: any) {
  useEffect(() => {
    function handleClickOutside(event: any) {
      if (ref.current && !ref.current.contains(event.target)) {
        callback();
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [ref, callback]);
}

export default function Header() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef<any>(null);
  const dropdownHoverRef = useRef<any>(null);
  const userIconRef = useRef(null);

  useClickOutside(dropdownRef, () => {
    setIsDropdownOpen(false);
  });

  useHover(userIconRef, (hovered: any) => {
    if (hovered) {
      setIsDropdownOpen(true);
    } else {
      setIsDropdownOpen(false);
    }
  });
  useHover(dropdownRef, (hovered: any) => {
    if (hovered) {
      setIsDropdownOpen(true);
    } else {
      setIsDropdownOpen(false);
    }
  });

  return (
      <header className={styles.headerContainer}>
          <div className={styles.logoContainer} >
              <svg width="100" height="100" href="../../../../public/logo.svg">
                  <image className={styles.logo} href="/logo.svg" width="100" height="100" />
              </svg>
              <div className={styles.titleContainer}>
                  <h1>
                      <Link className={styles.title}href="/">
                          Meowsic
                      </Link>
                  </h1>
                  <h2 className={styles.subtitle}>Felling grooves for happy moves</h2>
              </div>
          </div>
          <div className={styles.navContainer}>
              <SearchBar></SearchBar>
              <nav>
                  <ul className={styles.iconList} >
                      <li className={styles.li}>
                          <a className={styles.icon} href="#">
                              <FaShoppingCart/>
                          </a>
                      </li>
                      <li className={styles.li}>
                          <a className={styles.icon}
                             onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                             ref={userIconRef}>
                              <FaUser/>
                          </a>

                      </li>
                      {isDropdownOpen && (
                          <div className={styles.dropdownContent} ref={dropdownRef} >
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
                  </ul>
              </nav>
          </div>
      </header>
  );
}

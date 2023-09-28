import React from 'react';
import styles from './style.module.css';

function SearchBar() {
  return (
      <form className={styles.searchBar}>
          <label htmlFor="search-form" hidden={true}>Search</label>
          <input className={styles.searchInput} id="search-form" placeholder="Search" type="text"/>
          <button >Submit</button>
      </form>
  );
}

export default SearchBar;

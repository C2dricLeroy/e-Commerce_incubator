import React, { useRef, useEffect } from 'react';
import Link from 'next/link';

// @ts-ignore
import useSearchViewModel from '@/viewmodels/SearchViewModel.ts';
import styles from './style.module.css';

function SearchBar() {
  const searchViewModel = useSearchViewModel();
  const searchRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        searchViewModel.setSearchResults([]);
        searchViewModel.setIsSearchDone(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [searchRef]);

  return (
      <div ref={searchRef}>
          <form className={styles.searchBar} onClick={searchViewModel.handleSearch}>
              <label htmlFor="search-form" hidden={true}>Search</label>
              <input className={styles.searchInput} id="search-form" placeholder="Search" type="text"
                     value={searchViewModel.searchTerm}
                     onChange={searchViewModel.handleInputChange}/>
              <button type="submit" >Submit</button>
          </form>
          <div className={styles.results}>
              {searchViewModel.searchResults.length > 0 ? (
                searchViewModel.searchResults.map((result) => (
                      <div className={styles.searchResults} key={result.product_id}>
                          <Link key={result.product_id} href={`/products/${result.product_id}`}>{result.name}</Link>
                      </div>
                ))
              ) : (
                searchViewModel.isSearchDone && <div>No results found</div>
              )}
          </div>
      </div>

  );
}

export default SearchBar;

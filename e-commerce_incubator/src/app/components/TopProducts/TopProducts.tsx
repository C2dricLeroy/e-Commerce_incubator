import React from 'react';
import styles from './styles.module.css';

function TopProducts() {
  return (
      <div className={styles.container}>
          <div className={styles.topContainer}>
              <h1 className={styles.title}>Nos meilleurs produits</h1>
          </div>
      </div>
  );
}

export default TopProducts;

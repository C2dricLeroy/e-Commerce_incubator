// @ts-ignore
import Products from '@/models/Products.ts';
import { useEffect, useState } from 'react';

export default function useProductsViewModel() {
  const [products, setProducts] = useState();

  useEffect(() => {
    async function fetchProducts() {
      try {
        console.log('before API call');
        const response = await Products.getTop();
        console.log(response);
        setProducts(response);
      } catch (error) {
        console.error('Erreur lors de la récupération des produits :', error);
      }
    }
    fetchProducts();
  }, []);
  return { products };
}

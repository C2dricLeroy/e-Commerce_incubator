// @ts-ignore
import Products from '@/models/Products.ts';
import { useEffect, useState } from 'react';

export default function useProductsViewModel() {
  const [topProducts, setTopProducts] = useState<any>();
  const [products, setProducts] = useState<any>();

  useEffect(() => {
    async function fetchtopProducts() {
      try {
        const response = await Products.getTop();
        console.log(response);
        setTopProducts(response);
      } catch (error) {
        console.error('Erreur lors de la récupération des produits :', error);
      }
    }
    async function fetchProducts() {
      try {
        const response = await Products.getAll();
        setProducts(response);
      } catch (error) {
        console.error('Erreur lors de la récupération des produits :', error);
      }
    }
    fetchProducts();
    fetchtopProducts();
  }, []);

  return {
    topProducts,
    products,
  };
}

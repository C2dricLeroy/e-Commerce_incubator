// @ts-ignore
import Products from '@/models/Products.ts';
import { useEffect, useState } from 'react';

export default function useProductsViewModel() {
  const [topProducts, setTopProducts] = useState<any>();
  const [products, setProducts] = useState<any>();
  const [selectedCategory, setSelectedCategory] = useState<any>('');

  useEffect(() => {
    async function fetchtopProducts() {
      try {
        const response = await Products.getTop();
        setTopProducts(response);
      } catch (error) {
        console.error('Erreur lors de la récupération des produits :', error);
      }
    }
    async function fetchProducts() {
      try {
        const response = await Products.getAll();
        const productToDisplay: any = [];
        response.forEach((product: any) => {
          if (product.product_type_id == selectedCategory || selectedCategory === '') {
            productToDisplay.push(product);
          }
        });
        setProducts(productToDisplay);
      } catch (error) {
        console.error('Erreur lors de la récupération des produits :', error);
      }
    }
    fetchProducts();
    fetchtopProducts();
  }, [selectedCategory]);

  return {
    topProducts,
    products,
    setSelectedCategory,
    selectedCategory,
  };
}

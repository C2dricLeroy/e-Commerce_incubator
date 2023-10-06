import { useEffect, useState } from 'react';
// @ts-ignore
import Cart from '@/models/Cart.ts';

export default function useSavedCartViewModel() {
  const [saveCart, setSaveCart] = useState([]);
  useEffect(() => {
    const fetchUsername = async () => {
      const id = localStorage.getItem('id');
      if (id) {
        const response = await Cart.getSavedCarts(id);
        setSaveCart(response);
      }
    };
    fetchUsername();
  }, []);
  return {
    saveCart,
  };
}

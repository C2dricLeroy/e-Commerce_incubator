import { useEffect, useState } from 'react';
// @ts-ignore
import Cart from '@/models/Cart.ts';

export default function useSavedCartViewModel() {
  const [saveCart, setSaveCart] = useState([]);

  const calculateTotalPrice = (cart: any) => cart.cart_item.reduce((accumulator: number, cartItem: any) => {
    const itemPrice = cartItem.quantity * cartItem.product.price;
    return accumulator + itemPrice;
  }, 0);

  useEffect(() => {
    const fetchUsername = async () => {
      const id = localStorage.getItem('id');
      if (id) {
        const response = await Cart.getUserSavedCarts(id);
        console.log(response);
        setSaveCart(response);
      } else {
        setSaveCart([]);
        console.error('id not found');
      }
    };
    fetchUsername();
  }, []);

  return {
    saveCart,
  };
}

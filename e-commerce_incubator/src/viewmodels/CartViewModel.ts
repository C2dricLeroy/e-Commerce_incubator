import { useEffect, useState } from 'react';
import Cookies from 'js-cookie';

export default function useCartViewModel() {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const fetchCart = async () => {
      const cartCookie = Cookies.get('MeowsicCart');
      if (cartCookie) {
        console.log(cartCookie);
        if (cartCookie && JSON.stringify(cart) !== cartCookie) {
          console.log(cartCookie);
          setCart(JSON.parse(cartCookie));
        }
      }
    };

    fetchCart();
  }, [cart]);

  const clearCart = () => {
    setCart([]);
  };

  const calculateTotalPrice = () => {

  };

  const removeFromCart = () => {

  };

  return {
    cart,
    clearCart,
    calculateTotalPrice,
    removeFromCart,
  };
}

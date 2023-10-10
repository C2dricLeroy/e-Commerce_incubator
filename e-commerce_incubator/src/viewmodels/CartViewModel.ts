import { useEffect, useState } from 'react';
import Cookies from 'js-cookie';
// @ts-ignore
import Products from '@/models/Products.ts';

export default function useCartViewModel() {
  const [cart, setCart] = useState([]);
  const [cartProducts, setCartProducts] = useState<Products[]>([]);

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

    const fetchCartProduct = async () => {
      const products = [];
      for (const product of cart) {
        const { id, quantity } = product;
        const response = await Products.getOne(id);
        const productWithQuantity = { ...response, quantity };
        products.push(productWithQuantity);
      }
      setCartProducts(products);
      console.log(products);
    };

    fetchCartProduct();
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
    cartProducts,
  };
}

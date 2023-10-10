import { useEffect, useState } from 'react';
import Cookies from 'js-cookie';
// @ts-ignore
import Products from '@/models/Products.ts';

export default function useCartViewModel() {
  const [cart, setCart] = useState([]);
  const [cartProducts, setCartProducts] = useState<Products[]>([]);
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    const fetchCart = async () => {
      const cartCookie = Cookies.get('MeowsicCart');
      if (cartCookie) {
        if (cartCookie && JSON.stringify(cart) !== cartCookie) {
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
    };

    const fetchTotalPrice = () => {

    };

    fetchCartProduct();
    fetchCart();
    fetchTotalPrice();
  }, [cart]);

  const handleMinus = (id: string) => {
    const cartCookie = Cookies.get('MeowsicCart');

    if (cartCookie) {
      const cookieCart = JSON.parse(cartCookie);
      const updatedCart = cookieCart.map((item: any) => {
        if (item.id == id) {
          const updatedItem = { ...item };
          if (updatedItem.quantity > 1) {
            updatedItem.quantity -= 1;
          } else {
            return null;
          }
          return updatedItem;
        }
        return item;
      });
      const filteredCart = updatedCart.filter((item: any) => item !== null);

      Cookies.set('MeowsicCart', JSON.stringify(filteredCart));
      setCart(filteredCart);
    }
  };

  const handlePlus = (id: number) => {
    const cartCookie = Cookies.get('MeowsicCart');

    if (cartCookie) {
      const cookieCart = JSON.parse(cartCookie);
      const updatedCart = cookieCart.map((item: any) => {
        if (item.id == id) {
          item.quantity += 1;
        }
        return item;
      });

      Cookies.set('MeowsicCart', JSON.stringify(updatedCart));
      setCart(updatedCart);
    }
  };

  const handleDelete = (id: number) => {

  };

  const calculateTotalPrice = () => {

  };

  const removeFromCart = () => {

  };

  return {
    cart,
    handleMinus,
    handlePlus,
    calculateTotalPrice,
    removeFromCart,
    cartProducts,
    handleDelete,
  };
}

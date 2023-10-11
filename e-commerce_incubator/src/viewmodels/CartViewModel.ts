import { useEffect, useState } from 'react';
import Cookies from 'js-cookie';
// @ts-ignore
import Products from '@/models/Products.ts';
import { loadStripe } from '@stripe/stripe-js';

export default function useCartViewModel() {
  const [cart, setCart] = useState<any[]>([]);
  const [cartProducts, setCartProducts] = useState<any[]>([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [stripe, setStripe] = useState(null);

  useEffect(() => {
    const fetchCart = async () => {
      const cartCookie = Cookies.get('MeowsicCart');
      if (cartCookie) {
        if (cartCookie && JSON.stringify(cart) !== cartCookie) {
          setCart(JSON.parse(cartCookie));
        }
      }
    };

    fetchCart();
  }, [cart]);

  useEffect(() => {
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

    fetchCartProduct();
  }, [cart]);

  useEffect(() => {
    const fetchTotalPrice = () => {
      let total = 0;
      for (const product of cartProducts) {
        total += product.quantity * product.price;
      }
      setTotalPrice(total);
    };

    fetchTotalPrice();
  }, [cartProducts]);

  useEffect(() => {
    const initStripe = async () => {
      const stripeResponse = await loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY!);
      setStripe(stripeResponse);
    };

    initStripe();
  }, []);

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

  const handlePlus = (id: string) => {
    const cartCookie = Cookies.get('MeowsicCart');

    if (cartCookie) {
      const cookieCart = JSON.parse(cartCookie);
      const updatedCart = cookieCart.map((item: any) => {
        if (item.id == id) {
          item.quantity += 1;
          console.log('item', typeof item.id);
          console.log(typeof id);
        }
        return item;
      });

      Cookies.set('MeowsicCart', JSON.stringify(updatedCart));
      setCart(updatedCart);
    }
  };

  const handleDelete = (id: number) => {
    const cartCookie = Cookies.get('MeowsicCart');

    if (cartCookie) {
      const cookieCart = JSON.parse(cartCookie);
      const updatedCart = cookieCart.filter((item: any) => item.id != id);

      Cookies.set('MeowsicCart', JSON.stringify(updatedCart));
    }
  };

  const handlePayment = async () => {
    if (stripe) {
      // Créez une session de paiement avec les articles du panier
      const response = await axios.post('/api/create-stripe-session', {
        items: cartProducts,
      });

      // Redirigez l'utilisateur vers la page de paiement Stripe
      const { sessionId } = response.data;
      const { error } = await stripe!.redirectToCheckout({
        sessionId,
      });

      if (error) {
        console.error(error);
      }
    }
  };

  return {
    cart,
    handleMinus,
    handlePlus,
    handlePayment,
    totalPrice,
    cartProducts,
    handleDelete,
  };
}

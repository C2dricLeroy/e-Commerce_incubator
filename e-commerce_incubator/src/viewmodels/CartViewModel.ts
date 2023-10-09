import useState from 'react';

export default function useCartViewModel() {
  const [cart, setCart] = useState([]);

  const clearCart = () => {
    setCart([]);
  };

  const calculateTotalPrice = () => {

  };

  const removeFromCart = () => {

  };
}

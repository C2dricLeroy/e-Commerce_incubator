'use client';

// @ts-ignore
import useCartViewModel from '@/viewmodels/CartViewModel.ts';

export default function Cart() {
  const cartViewModel = useCartViewModel();

  return (
                <div>
                        <h1>Cart</h1>
                </div>
  );
}

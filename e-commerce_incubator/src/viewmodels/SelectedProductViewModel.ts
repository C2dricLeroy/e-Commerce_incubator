import { useState } from 'react';
// @ts-ignore
import Products from '@/models/Products.ts';

export default async function useSelectedProductViewModel(product_id: string) {
  const selectedProduct = await Products.getOne(product_id);
  console.log(selectedProduct);
  return selectedProduct;
}

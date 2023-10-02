'use client';

import { useRouter } from 'next/navigation';
// @ts-ignore
import useSelectedProductViewModel from '@/viewmodels/SelectedProductViewModel.ts';
import styles from './styles.module.css';

export default function BlogPost({ params }: { params: { product_id: string } }) {
  const selectedProductViewModel = useSelectedProductViewModel();

  return <h1>{params.product_id}</h1>;
}

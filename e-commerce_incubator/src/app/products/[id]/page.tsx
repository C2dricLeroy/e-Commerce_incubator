'use client';

// @ts-ignore
import useSelectedProductViewModel from '@/viewmodels/SelectedProductViewModel.ts';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
// @ts-ignore
import Header from '@/app/components/Header/Header.tsx';
import styles from './styles.module.css';

interface PageProps {
    params: {
        id: string;
    };
    searchParams: string;
}

export default function Page({ params, searchParams }: PageProps) {
  const [selectedProduct, setSelectedProduct] = useState<any>();
  const router = useRouter();
  const { id } = params;
  const [selectedQuantity, setSelectedQuantity] = useState(1);

  const handleQuantityChange = (event: any) => {
    const newQuantity = parseInt(event.target.value, 10);
    setSelectedQuantity(newQuantity);
  };

  const handleAddToCart = () => {
    console.log(selectedQuantity, id);
  };

  useEffect(() => {
    async function fetchData() {
      const product = await useSelectedProductViewModel(id);
      setSelectedProduct(product);
    }

    fetchData();
  }, [id]);

  return (
        <div className="flex flex-col justify-center items-center">
            <Header/>
            <div className="flex flex-row justify-center items-center">
                <div className={styles.productContainer}>
                    <div className={styles.imageContainer}>
                        <img className={styles.productImage} src={`/products_images/${selectedProduct?.image_path}`} alt={selectedProduct?.name} />
                    </div>
                    <div className={styles.productInteraction}>
                        <div className={styles.productText}>
                            <h2 className={styles.productTitle}>{selectedProduct?.name}</h2>
                            <p className={styles.productPrice}>{selectedProduct?.price}€</p>
                        </div>
                        <p className={styles.description}>{selectedProduct?.DESCRIPTION}</p>
                        <form className={styles.buttons}>
                            <select value={selectedQuantity} onChange={handleQuantityChange}
                                    className={styles.select}>
                                {Array.from({ length: 10 }, (_, index) => (
                                    <option key={index} value={index + 1}>
                                        {index + 1}
                                    </option>
                                ))}
                            </select>
                            <button className={styles.button}
                                    onClick={handleAddToCart}>Ajouter au panier</button>
                        </form>
                    </div>
                </div>
            </div>

        </div>
  );
}

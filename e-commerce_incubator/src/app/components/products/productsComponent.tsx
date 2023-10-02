import useProductsViewModel from '@/viewmodels/ProductViewModel.ts';
import styles from './styles.module.css';

export default function ProductsComponents() {
  const productsViewModel = useProductsViewModel();

  return (
        <section className={styles.container}>

        </section>
  );
}

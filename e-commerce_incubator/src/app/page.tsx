// @ts-ignore
import Header from '@/app/components/Header/Header.tsx';
// eslint-disable-next-line import/extensions
import TopProducts from '@/app/components/TopProducts/TopProducts';

export default function Home() {
  return (
    <main className="flex flex-col justify-center">
        <Header />
        <TopProducts/>
    </main>
  );
}

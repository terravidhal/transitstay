import IndexDesktop from '../components/index/IndexDesktop';
import IndexTablet from '../components/index/IndexTablet';
import IndexMobile from '../components/index/IndexMobile';
import Header from '@/components/Header';

export default function Home() {
  return (
    <main className="overflow-hidden">
       <Header />
      <IndexDesktop />
      <IndexTablet />
      <IndexMobile />
    </main>
  );
}

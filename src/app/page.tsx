import { MainBanner, DeliveryBanner } from './components/home/banner';
import BestProducts from './components/home/best-products';

export default function Home() {
  return (
    <main>
      <MainBanner />
      <BestProducts />
      <DeliveryBanner />
    </main>
  );
}

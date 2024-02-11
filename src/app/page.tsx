import Container from '@/components/Container';
import CarouselHome from '@/components/homepage/CarouselHome';
import FeaturedProducts from '@/components/homepage/FeaturedProducts';
import Guide from '@/components/homepage/Guide';
import ProductCard from '@/components/homepage/ProductCard';

export default function Home() {
  return (
    <div className="pt-17">
      <CarouselHome />
      <div className="">
        <Container>
          <div className="">
            <ProductCard />
          </div>
        </Container>
        <Guide />
        <Container>
          <FeaturedProducts />
        </Container>
      </div>
    </div>
  );
}

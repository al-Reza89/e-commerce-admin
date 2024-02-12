import Container from '@/components/Container';
import CarouselHome from '@/components/homepage/CarouselHome';
import FeaturedProducts from '@/components/homepage/FeaturedProducts';
import Guide from '@/components/homepage/Guide';
import ProductCard from '@/components/homepage/ProductCard';
import getAllProducts from './actions/getAllProducts';
import getCurrentUser from './actions/getCurrentUser';
import { Product } from '@prisma/client';

export default async function Home() {
  const allProducts = await getAllProducts();
  const currentUser = await getCurrentUser();

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
          <div className="pt-10  grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-4 xl:gap-8 gap-4 pb-8  ">
            {allProducts.map((product: Product) => {
              return (
                <FeaturedProducts
                  key={product.id}
                  product={product}
                  stock={product.stock}
                  currentUser={currentUser}
                />
              );
            })}
          </div>
        </Container>
      </div>
    </div>
  );
}

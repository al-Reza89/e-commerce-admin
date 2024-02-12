import getProductById from '@/app/actions/getProductById';
import ErrorState from '@/app/error';
import SingleProductClient from './SingleProductClient';

interface IParams {
  productId?: string;
}

const SingleProductPage = async ({ params }: { params: IParams }) => {
  // console.log(params.productId);

  if (params.productId === undefined) {
    return <ErrorState error={"Sorry we don't any product with this Id"} />;
  }

  const productDetailsById = await getProductById(params.productId);

  if (productDetailsById === null) return null;

  return <SingleProductClient productDetailsById={productDetailsById} />;
};

export default SingleProductPage;

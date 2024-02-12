import CartProducts from '@/store/CartProducts';
import { useRouter } from 'next/navigation';
import React, { useCallback } from 'react';

const InputField = ({ product }) => {
  const router = useRouter();

  const { addProduct, products: cartProducts, removeProduct } = CartProducts();

  const handleRemoveProduct = useCallback(
    (event: React.MouseEvent) => {
      event.stopPropagation();

      removeProduct(product);
    },
    [product, removeProduct]
  );

  return (
    <div>
      <div className="flex flex-wrap items-center mb-6">
        <div className="mb-4 mr-4 lg:mb-0">
          <div className="w-28">
            <div className="relative flex flex-row w-full h-10 bg-transparent rounded-lg">
              <button
                onClick={handleRemoveProduct}
                className="w-20 h-full text-gray-600 bg-gray-100 border-r rounded-l outline-none cursor-pointer dark:border-gray-700 dark:hover:bg-gray-700 dark:text-gray-400 hover:text-gray-700 dark:bg-gray-900 hover:bg-gray-300"
              >
                <span className="m-auto text-2xl font-bold">-</span>
              </button>
              <div className="flex items-center justify-center w-full font-semibold text-center text-gray-700 placeholder-gray-700 bg-gray-100 outline-none dark:text-gray-400 dark:placeholder-gray-400 dark:bg-gray-900 focus:outline-none text-md hover:text-black">
                {cartProducts.find(
                  (currentProduct) => currentProduct.id === product.id
                )?.stock || 0}
              </div>
              <button
                onClick={() => addProduct(product)}
                className="w-20 h-full text-gray-600 bg-gray-100 border-l rounded-r outline-none cursor-pointer dark:border-gray-700 dark:hover:bg-gray-700 dark:text-gray-400 dark:bg-gray-900 hover:text-gray-700 hover:bg-gray-300"
              >
                <span className="m-auto text-2xl font-bold">+</span>
              </button>
            </div>
          </div>
        </div>
        <div className="mb-4 lg:mb-0">
          <button className="flex items-center justify-center w-full h-10 p-2 mr-4 text-gray-700 border border-gray-300 lg:w-11 hover:text-gray-50 dark:text-gray-200 dark:border-blue-600 hover:bg-blue-600 hover:border-blue-600 dark:bg-blue-600 dark:hover:bg-blue-500 dark:hover:border-blue-500 dark:hover:text-gray-100">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className=" bi bi-heart"
              viewBox="0 0 16 16"
            >
              <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z"></path>
            </svg>
          </button>
        </div>
        <div
          onClick={() => addProduct(product)}
          className="w-full px-4 py-3 text-center text-blue-600 bg-blue-100 border border-blue-600 dark:hover:bg-gray-900 dark:text-gray-400 dark:border-gray-700 dark:bg-gray-700 hover:bg-blue-600 hover:text-gray-100 lg:w-1/2 rounded-xl"
        >
          Add to cart
        </div>
      </div>
      <div className="flex gap-4 mb-6">
        <div
          onClick={() => router.push('/checkout')}
          className="w-full px-4 py-3 text-center text-gray-100 bg-blue-600 border border-transparent dark:border-gray-700 hover:border-blue-500 hover:text-blue-700 hover:bg-blue-100 dark:text-gray-400 dark:bg-gray-700 dark:hover:bg-gray-900 rounded-xl"
        >
          Buy now
        </div>
      </div>
    </div>
  );
};

export default InputField;

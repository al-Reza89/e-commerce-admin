import CartProducts, { totalPrice } from '@/store/CartProducts';
import { useRouter } from 'next/navigation';
import React, { useCallback } from 'react';
import { BsCartPlus, BsHeartFill } from 'react-icons/bs';

const SocialIcon = () => {
  const { products: cartProducts } = CartProducts();
  const totalCartPrice = totalPrice(cartProducts);
  const router = useRouter();

  const handleCartButton = useCallback(() => {
    router.push('/checkout');
  }, [router]);

  return (
    <div>
      <div>
        <div className="flex items-center gap-4 lg:gap-6 ">
          <div className="relative cursor-pointer ">
            <BsHeartFill
              size={30}
              fill="red"
              className="hover:fill-blue-900 hover:scale-110 transition ease-in-out delay-150 cursor-pointer "
            />
            <div className="absolute -top-2 -right-1 text-black text-sm font-bold px-[6px] bg-yellow-300 rounded-full ">
              0
            </div>
          </div>
          <div
            onClick={handleCartButton}
            className="relative cursor-pointer hidden lg:block "
          >
            <BsCartPlus
              size={30}
              fill="black"
              className="hover:fill-blue-900 dark:fill-white hover:scale-110 transition ease-in-out delay-150 cursor-pointer "
            />
            <div className="absolute -top-2 -right-1 text-black text-sm font-bold px-[6px] bg-yellow-300  rounded-full ">
              {cartProducts.length}
            </div>
          </div>
          <div className="flex flex-col text-sm ">
            <span className="text-gray-400">Your cart</span>
            <span className="font-bold">${totalCartPrice}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SocialIcon;

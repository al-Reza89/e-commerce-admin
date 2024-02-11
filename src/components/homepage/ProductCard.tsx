'use client';

import { allProductsCategory } from '@/lib/carosol-image-array';
import Image from 'next/image';
import React from 'react';

const ProductCard = () => {
  return (
    <div className="text-black dark:text-white">
      <div className="pt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 2xl:grid-cols-4 gap-8 pb-8  ">
        {allProductsCategory.map((product, index) => {
          return (
            <div
              key={index}
              className="flex flex-col justify-center items-center pt-2 lg:pt-3 "
            >
              <div className="overflow-hidden rounded  ">
                <Image
                  src={product.imageUrl}
                  objectFit="cover"
                  width={320}
                  height={320}
                  alt="image"
                  className=" w-full   object-cover  rounded  hover:scale-125 transition duration-500 cursor-pointer "
                />
              </div>
              <span className="text-black dark:text-white pt-2">
                {product.name}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ProductCard;

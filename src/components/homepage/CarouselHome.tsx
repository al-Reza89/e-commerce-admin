'use client';
/* eslint-disable @next/next/no-img-element */
import React from 'react';

import { Carousel } from 'antd';
import { imageArray } from '@/lib/carosol-image-array';

const CarouselHome = () => {
  return (
    <div className="pt-15">
      <Carousel autoplay autoplaySpeed={1000} infinite speed={500}>
        {imageArray.map((image, index) => {
          return (
            <div key={index} className="relative">
              <img
                src={image.imageUrl}
                alt="carousel"
                className="w-full h-full lg:h-[70%] object-cover"
              />
              <div
                className={`absolute px-2  ${index % 2 === 1 ? 'top-[45%]' : 'right-0 top-[45%]'} text-center `}
              >
                <h1 className="text-2xl lg:text-4xl font-bold text-white ">
                  {image.headerMessage}
                </h1>
                <p className="text-lg text-white">{image.message}</p>
                <p className="text-xl text-white">{image.colorMessage}</p>
                <button className="text-white border border-white rounded-none px-4 py-2 mt-4">
                  {image.button}
                </button>
              </div>
            </div>
          );
        })}
      </Carousel>
    </div>
  );
};

export default CarouselHome;

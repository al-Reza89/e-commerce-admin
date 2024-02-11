/* eslint-disable @next/next/no-img-element */
import React from 'react';

const Guide = () => {
  return (
    <div>
      <div className="relative">
        <img
          src="https://www.keychron.com/cdn/shop/files/Keyboard-buying-guide.jpg?v=1699252459&width=1600"
          className="max-h-[30rem] object-cover w-full"
          alt="full"
        />
        <div className="absolute top-[35%] text-black ">
          <div className="ml-5 flex flex-col gap-4 justify-start items-start bg-white px-10 py-10 ">
            <h1 className="text-2xl lg:text-4xl font-bold">
              Keyboards Buying Guide
            </h1>
            <span className="text-sm lg:text-base ">
              Which Keychron keyboard is best for you?
            </span>
            <button className="px-3 py-2 border border-black bg-gray-900 font-bold text-white cursor-pointer">
              {' '}
              Go To Check
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Guide;

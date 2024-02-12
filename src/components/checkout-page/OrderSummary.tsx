'use client';
/* eslint-disable @next/next/no-img-element */
import CartProducts from '@/store/CartProducts';
import React from 'react';
import PaymentDetails from './PaymentDetails';

const OrderSummary = ({ login }) => {
  const { products: cartProducts, removeProduct } = CartProducts();

  const totalPrice = cartProducts.reduce((accumulator, cartProduct) => {
    return accumulator + cartProduct.stock * cartProduct.price;
  }, 0);

  if (cartProducts.length === 0) {
    return (
      <div className="flex justify-center items-center h-96">
        <p className="text-2xl font-semibold">Your cart is empty</p>
      </div>
    );
  }

  return (
    <div>
      <div className="grid sm:px-10 lg:grid-cols-2 lg:px-20 xl:px-32">
        <div className="px-4 pt-8">
          <p className="text-xl font-medium">Order Summary</p>
          <p className="text-gray-400">
            Check your items. And select a suitable shipping method.
          </p>
          <div className="mt-8 space-y-3 rounded-lg border  px-2 py-4 sm:px-6">
            {cartProducts.map((cartProduct, index) => (
              <div
                key={index}
                className=" flex flex-col rounded-lg  sm:flex-row"
              >
                <img
                  className="m-2 h-24 w-28 rounded-md border object-cover object-center"
                  src={cartProduct.imageSrc}
                  alt=""
                />
                <div className="flex w-full flex-col px-4 py-4">
                  <span className="font-semibold">{cartProduct.title}</span>
                  <span className="float-right text-gray-400">
                    {cartProduct.details}
                  </span>
                  <p className="text-lg font-bold">
                    ${cartProduct.price} x {cartProduct.stock}
                  </p>
                  <p
                    onClick={() => removeProduct(cartProduct)}
                    className=" cursor-pointer text-[10px] underline underline-offset-1 text-red-500"
                  >
                    remove product
                  </p>
                </div>
              </div>
            ))}
          </div>

          <p className="mt-8 text-lg font-medium">Shipping Methods</p>
          <div className="mt-5 grid gap-6">
            <div className="relative">
              <input
                className="peer hidden"
                id="radio_1"
                type="radio"
                name="radio"
              />
              <span className="peer-checked:border-gray-700 absolute right-4 top-1/2 box-content block h-3 w-3 -translate-y-1/2 rounded-full border-8 border-gray-300 "></span>
              <label
                className="peer-checked:border-2 peer-checked:border-gray-700  flex cursor-pointer select-none rounded-lg border border-gray-300 p-4"
                htmlFor="radio_1"
              >
                <img className="w-14 object-contain" src="cash.png" alt="" />
                <div className="ml-5">
                  <span className="mt-2 font-semibold">Cash On Delivery</span>
                  <p className="text-slate-500 text-sm leading-6">
                    Delivery: 2-4 Days
                  </p>
                </div>
              </label>
            </div>
            <div className="relative">
              <input
                className="peer hidden"
                id="radio_2"
                type="radio"
                name="radio"
              />
              <span className="peer-checked:border-gray-700 absolute right-4 top-1/2 box-content block h-3 w-3 -translate-y-1/2 rounded-full border-8 border-gray-300 "></span>
              <label
                className="peer-checked:border-2 peer-checked:border-gray-700  flex cursor-pointer select-none rounded-lg border border-gray-300 p-4"
                htmlFor="radio_2"
              >
                <img className="w-14 object-contain" src="online.jpeg" alt="" />
                <div className="ml-5">
                  <span className="mt-2 font-semibold">Payment Online</span>
                  <p className="text-slate-500 text-sm leading-6">
                    Delivery: 2-4 Days
                  </p>
                </div>
              </label>
            </div>
          </div>
        </div>
        <PaymentDetails totalPrice={totalPrice} login={login} />
      </div>
    </div>
  );
};

export default OrderSummary;

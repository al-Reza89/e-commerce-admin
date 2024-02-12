/* eslint-disable @next/next/no-img-element */
import { FormData } from '@/lib/types';
import CartProducts from '@/store/CartProducts';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import React from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';

interface PaymentDetailsProps {
  totalPrice: number;
  login: boolean;
}

const INITIAL_DATA: FormData = {
  name: '',
  email: '',
  address: '',
  zip: '',
  mobile: '',
};

const PaymentDetails: React.FC<PaymentDetailsProps> = ({
  totalPrice,
  login,
}) => {
  const { clearProduct, products: cartProducts } = CartProducts();
  const [isLoading, setIsLoading] = React.useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: INITIAL_DATA,
  });

  const router = useRouter();

  const onSubmit = (data) => {
    console.log(data);
    data = { ...data, totalPrice };
    const mergeData = {
      data: data,
      cartProducts: cartProducts,
    };
    if (!login) {
      return (
        <div className="flex justify-center items-center h-96">
          <p className="text-2xl font-semibold">Your have to login first</p>
        </div>
      );
    }
    try {
      axios
        .post('/api/cart', mergeData)
        .then((response) => {
          toast.success('place your order');
          router.push(`/checkout/${response.data.id}`);
          router.refresh();
          clearProduct();
        })
        .catch((error) => {
          console.log({ error: error });
          toast.error('try again later');
        })
        .finally(() => {
          setIsLoading(false);
        });
    } catch (error) {
      console.log(error);
      toast.error('An error occurred');
    }
  };

  return (
    <div className="mt-10  px-4 pt-8 lg:mt-0">
      <form onSubmit={handleSubmit(onSubmit)} method="POST">
        <p className="text-xl font-medium">Payment Details</p>
        <p className="text-gray-400">
          Complete your order by providing your payment details.
        </p>
        <div className="">
          <label
            htmlFor="email"
            className="mt-4 mb-2 block text-sm font-medium"
          >
            Your Email
          </label>
          <div className="relative">
            <input
              type="text"
              id="email"
              {...register('email', { required: 'First Name is required' })}
              className="w-full rounded-md border border-gray-200 px-4 py-3 pl-11 text-sm shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500"
              placeholder="Your email here"
            />
            {errors.email && <span>{errors.email.message}</span>}
            <div className="pointer-events-none absolute inset-y-0 left-0 inline-flex items-center px-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 text-gray-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 9h3.75M15 12h3.75M15 15h3.75M4.5 19.5h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5zm6-10.125a1.875 1.875 0 11-3.75 0 1.875 1.875 0 013.75 0zm1.294 6.336a6.721 6.721 0 01-3.17.789 6.721 6.721 0 01-3.168-.789 3.376 3.376 0 016.338 0z"
                />
              </svg>
            </div>
          </div>
          <label htmlFor="name" className="mt-4 mb-2 block text-sm font-medium">
            Your Name
          </label>
          <div className="relative">
            <input
              type="text"
              id="name"
              {...register('name', { required: 'First Name is required' })}
              className="w-full rounded-md border border-gray-200 px-4 py-3 pl-11 text-sm uppercase shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500"
              placeholder="Your Name"
            />
            {errors.name && <span>{errors.name.message}</span>}
            <div className="pointer-events-none absolute inset-y-0 left-0 inline-flex items-center px-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 text-gray-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 9h3.75M15 12h3.75M15 15h3.75M4.5 19.5h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5zm6-10.125a1.875 1.875 0 11-3.75 0 1.875 1.875 0 013.75 0zm1.294 6.336a6.721 6.721 0 01-3.17.789 6.721 6.721 0 01-3.168-.789 3.376 3.376 0 016.338 0z"
                />
              </svg>
            </div>
          </div>
          <label htmlFor="name" className="mt-4 mb-2 block text-sm font-medium">
            Your Address
          </label>
          <div className="relative">
            <input
              type="text"
              id="address"
              {...register('address', { required: 'address  is required' })}
              className="w-full rounded-md border border-gray-200 px-4 py-3 pl-11 text-sm uppercase shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500"
              placeholder="Your address"
            />
            {errors.address && <span>{errors.address.message}</span>}
            <div className="pointer-events-none absolute inset-y-0 left-0 inline-flex items-center px-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 text-gray-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 9h3.75M15 12h3.75M15 15h3.75M4.5 19.5h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5zm6-10.125a1.875 1.875 0 11-3.75 0 1.875 1.875 0 013.75 0zm1.294 6.336a6.721 6.721 0 01-3.17.789 6.721 6.721 0 01-3.168-.789 3.376 3.376 0 016.338 0z"
                />
              </svg>
            </div>
          </div>
          <label
            htmlFor="mobileNo"
            className="mt-4 mb-2 block text-sm font-medium"
          >
            Mobile No
          </label>
          <div className="flex">
            <div className="relative w-7/12 flex-shrink-0">
              <input
                type="mobileNo"
                id="mobile"
                {...register('mobile', {
                  required: 'mobile number is required',
                })}
                className="w-full rounded-md border border-gray-200 px-2 py-3 pl-11 text-sm shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500"
                placeholder="Your mobile number"
              />
              {errors.mobile && <span>{errors.mobile.message}</span>}
              <div className="pointer-events-none absolute inset-y-0 left-0 inline-flex items-center px-3">
                <img
                  className="h-4 w-4 object-contain"
                  src="https://flagpack.xyz/_nuxt/4c829b6c0131de7162790d2f897a90fd.svg"
                  alt=""
                />
              </div>
            </div>
            <input
              type="text"
              id="zip"
              {...register('zip', { required: 'zip code is required' })}
              className="w-full rounded-md border border-gray-200 px-2 py-3 text-sm shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500"
              placeholder="ZIP"
            />
            {errors.zip && <span>{errors.zip.message}</span>}
          </div>
        </div>
        <div className="mt-6 border-t border-b py-2 dark:text-white">
          <div className="flex items-center justify-between">
            <p className="text-sm font-medium">Subtotal</p>
            <p className="font-semibold">${totalPrice}.00</p>
          </div>
          <div className="flex items-center justify-between">
            <p className="text-sm font-medium">Shipping</p>
            <p className="font-semibold">$8.00</p>
          </div>
        </div>

        <div className="mt-6 flex items-center justify-between">
          <p className="text-sm font-medium">Total</p>
          <p className="text-2xl font-semibold">${totalPrice + 8}.00</p>
        </div>
        <button
          className={`  mt-4 mb-8 w-full rounded-md bg-blue-800 px-6 py-3 font-medium text-white ${isLoading ? 'cursor-not-allowed' : ''}`}
        >
          Place Order
        </button>
      </form>
    </div>
  );
};

export default PaymentDetails;

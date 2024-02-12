import OrderSummary from '@/components/checkout-page/OrderSummary';
import Sneekpeeks from '@/components/checkout-page/Sneekpeeks';
import React from 'react';
import getCurrentUser from '../actions/getCurrentUser';

const Checkout = async () => {
  const currentUser = await getCurrentUser();
  const login = currentUser ? true : false;
  return (
    <div className="pt-20">
      <Sneekpeeks />
      <OrderSummary login={login} />
    </div>
  );
};

export default Checkout;

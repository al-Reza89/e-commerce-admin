import OrderSummary from '@/components/checkout-page/OrderSummary';
import Sneekpeeks from '@/components/checkout-page/Sneekpeeks';
import React from 'react';

const Checkout = () => {
  return (
    <div className="pt-20">
      <Sneekpeeks />
      <OrderSummary />
    </div>
  );
};

export default Checkout;

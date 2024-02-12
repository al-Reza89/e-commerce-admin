import React from 'react';
import getAllOrderRequest from '../actions/getAllOrderRequest';
import AcceptOrderTable from '@/components/order-request-page/OrderRequestClient';

const OrderRequestServer = async () => {
  const rows = await getAllOrderRequest();

  console.log(rows);

  return (
    <div className="px-5 pt-16 text-blue-700  font-extrabold text-3xl">
      <span className="md:text-4xl text-lg py-4 pt-4">Order Table:</span>
      <div className="text-black dark:text-white">
        <AcceptOrderTable rows={rows} />
      </div>
    </div>
  );
};

export default OrderRequestServer;

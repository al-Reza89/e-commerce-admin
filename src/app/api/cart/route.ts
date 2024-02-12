import { NextResponse } from 'next/server';
import getCurrentUser from '@/app/actions/getCurrentUser';
import prisma from '../../../libs/prismadb';

interface CartProduct {
  id: string;
  stock: number;
}

export async function POST(request: Request) {
  const currentUser = await getCurrentUser();

  if (!currentUser) {
    return NextResponse.json('no current user');
  }

  const body = await request.json();
  const { data, cartProducts } = body;
  console.log({ cartProducts: cartProducts });

  const requestData = {
    userId: currentUser.id,
    totalPrice: data.totalPrice,
    name: data.name,
    email: data.email,
    address: data.address,
    zip: data.zip,
    mobile: data.mobile,
    items: {
      create: cartProducts.map(({ id, stock }: CartProduct) => ({
        productId: id,
        quantity: stock,
      })),
    },
  };

  console.log({ requestData: requestData });

  try {
    const cartResponse = await prisma?.cart.create({
      data: requestData,
    });

    console.log({ cartResponse: cartResponse });

    return NextResponse.json(cartResponse);
  } catch (error) {
    return NextResponse.json(error);
  }
}

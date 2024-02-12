import prisma from '@/libs/prismadb';
import { NextResponse } from 'next/server';

export default async function getAllOrderRequest() {
  try {
    const orderInformation = await prisma.cart.findMany({
      select: {
        id: true,
        userId: true,
        totalPrice: true,
        name: true,
        email: true,
        address: true,
        zip: true,
        mobile: true,
        createdAt: true,
        status: true,
      },

      orderBy: {
        createdAt: 'desc',
      },
    });

    return orderInformation;
  } catch (error: any) {
    NextResponse.error();
  }
}

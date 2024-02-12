import { NextResponse } from 'next/server';
import prisma from '@/libs/prismadb';

export async function PUT(request: Request) {
  const body = await request.json();
  const { id, status } = body;

  console.log({ id: id });
  console.log({ status: status });

  try {
    if (status === 'DECLINE') {
      const applyResponse = await prisma?.cart.update({
        where: {
          id: id,
        },
        data: {
          status: status,
        },
        select: {
          userId: true,
        },
      });

      return NextResponse.json(applyResponse);
    } else if (status === 'ACCEPT') {
      const applyResponse = await prisma?.cart.update({
        where: {
          id: id,
        },
        data: {
          status: status,
        },
      });

      return NextResponse.json(applyResponse);
    } else {
      return NextResponse.json({ message: 'Invalid status' });
    }
  } catch (error) {
    console.error('Error occurred while creating the record:', error);
    return NextResponse.error();
  }
}

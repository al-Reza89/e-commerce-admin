import bcrypt from 'bcrypt';
import prisma from '../../../libs/prismadb';
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  // post method e sob kisu body theke pabo
  const body = await request.json();

  const { email, name, password } = body;
  const hashedPassword = await bcrypt.hash(password, 12);

  const user = await prisma.user.create({
    data: {
      email,
      name,
      hashedPassword,
    },
  });

  return NextResponse.json(user);
}

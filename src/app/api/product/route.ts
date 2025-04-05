import { NextResponse } from "next/server";
import prisma from "@/lib/db";

export const GET = async () => {
  const products = await prisma.product.findMany({});
  const totalProducts = await prisma.product.count();
  return NextResponse.json(
    {
      products,
      totalProducts,
    },
    { status: 200 }
  );
};

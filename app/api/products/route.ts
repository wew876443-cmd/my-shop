import { NextResponse } from 'next/server';

export async function GET() {
  const products = [
    { id: 1, name: 'สินค้าหลังบ้าน 1', price: 500 },
    { id: 2, name: 'สินค้าหลังบ้าน 2', price: 1200 },
  ];
  
  return NextResponse.json(products);
}
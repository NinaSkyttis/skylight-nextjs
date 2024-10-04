import { NextResponse } from "next/server";
import prisma from "@/prisma/client";

export async function GET() {
  try {
    const ratings = await prisma.ratings.findMany();
    return NextResponse.json(ratings);
  } catch (error) {
    console.error('Error fetching ratings:', error);
    return NextResponse.error();
  }
}


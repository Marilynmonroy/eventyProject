import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const events = await prisma.event.findMany();
    return NextResponse.json(events);
  } catch (error) {
    if (error instanceof Error) {
      return NextResponse.json({ message: error.message }, { status: 500 });
    }
  }
}

export async function POST(request: Request) {
  try {
    const {
      title,
      description,
      location,
      beginningEvent,
      capacity,
      dataEvent,
      endEvent,
      image,
    } = await request.json();

    const newEvent = await prisma.event.create({
      data: {
        title,
        description,
        location,
        beginningEvent,
        capacity,
        dataEvent,
        endEvent,
        image,
      },
    });
    return NextResponse.json(newEvent);
  } catch (error) {
    if (error instanceof Error) {
      return NextResponse.json({ message: error.message }, { status: 500 });
    }
  }
}

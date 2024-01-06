import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";

interface Params {
  params: { id: number };
}

export async function GET(request: Request, { params }: Params) {
  try {
    const event = await prisma.event.findFirst({
      where: {
        id: params.id,
      },
    });

    if (!event) {
      return NextResponse.json({ message: "Usuario no existe", status: 404 });
    }
    return NextResponse.json(event);
  } catch (error) {
    if (error instanceof Error) {
      return NextResponse.json({ message: error.message }, { status: 500 });
    }
  }
}

export async function DELETE(request: Request, { params }: Params) {
  try {
    const eventDelete = await prisma.event.delete({
      where: {
        id: params.id,
      },
    });
    if (!eventDelete) {
      return NextResponse.json({ message: "Usuario no existe", status: 404 });
    }
    return NextResponse.json(eventDelete);
  } catch (error) {
    if (error instanceof Error) {
      return NextResponse.json({ message: error.message }, { status: 500 });
    }
  }
}

export async function PUT(request: Request, { params }: Params) {
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
      status,
    } = await request.json();

    const eventUpdate = await prisma.event.update({
      where: {
        id: params.id,
      },
      data: {
        title,
        description,
        location,
        beginningEvent,
        capacity,
        dataEvent,
        endEvent,
        image,
        status,
      },
    });
    if (!eventUpdate) {
      return NextResponse.json({ message: "Usuario no existe", status: 404 });
    }
    return NextResponse.json(eventUpdate);
  } catch (error) {
    if (error instanceof Error) {
      return NextResponse.json({ message: error.message }, { status: 500 });
    }
  }
}

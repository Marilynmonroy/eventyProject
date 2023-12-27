import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";

interface Params {
  params: { id: number };
}

export async function GET(request: Request, { params }: Params) {
  try {
    const user = await prisma.user.findFirst({
      where: {
        id: params.id,
      },
    });

    if (!user) {
      return NextResponse.json({ message: "Usuario no existe", status: 404 });
    }
    return NextResponse.json(user);
  } catch (error) {
    if (error instanceof Error) {
      return NextResponse.json({ message: error.message }, { status: 500 });
    }
  }
}

export async function DELETE(request: Request, { params }: Params) {
  try {
    const userDelete = await prisma.user.delete({
      where: {
        id: params.id,
      },
    });
    if (!userDelete) {
      return NextResponse.json({ message: "Usuario no existe", status: 404 });
    }
    return NextResponse.json(userDelete);
  } catch (error) {
    if (error instanceof Error) {
      return NextResponse.json({ message: error.message }, { status: 500 });
    }
  }
}

export async function PUT(request: Request, { params }: Params) {
  try {
    const { name, lastname, email, password, phone, role } =
      await request.json();

    const userUpdate = await prisma.user.update({
      where: {
        id: params.id,
      },
      data: {
        name,
        lastname,
        email,
        password,
        phone,
        role,
      },
    });
    if (!userUpdate) {
      return NextResponse.json({ message: "Usuario no existe", status: 404 });
    }
    return NextResponse.json(userUpdate);
  } catch (error) {
    if (error instanceof Error) {
      return NextResponse.json({ message: error.message }, { status: 500 });
    }
  }
}

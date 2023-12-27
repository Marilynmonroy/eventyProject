import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const users = await prisma.user.findMany();
    return NextResponse.json(users);
  } catch (error) {
    if (error instanceof Error) {
      return NextResponse.json({ message: error.message }, { status: 500 });
    }
  }
}

export async function POST(request: Request) {
  try {
    const { name, lastname, email, password, phone } = await request.json();

    const existingClient = await prisma.user.findUnique({
      where: {
        email,
      },
    });

    if (existingClient) {
      return NextResponse.json(
        { message: "E-mail ya existe" },
        { status: 400 }
      );
    }

    if (name.length <= 2) {
      return NextResponse.json(
        { message: "El nombre debe tener más de dos caracteres" },
        { status: 400 }
      );
    }

    if (phone.length < 10) {
      return NextResponse.json(
        { message: "Número de teléfono inválido" },
        { status: 400 }
      );
    }

    const newUser = await prisma.user.create({
      data: {
        name,
        lastname,
        email,
        password,
        phone,
      },
    });
    return NextResponse.json(newUser);
  } catch (error) {
    if (error instanceof Error) {
      return NextResponse.json({ message: error.message }, { status: 500 });
    }
  }
}

import connect from "@/libs/mongodb";
import Todo from "@/models/todo";
import { NextResponse } from "next/server";

export async function POST(request) {
  const { title, description } = await request.json();
  await connect();
  await Todo.create({ title, description });
  return NextResponse.json({ message: "Todo Created" }, { status: 201 });
}

export async function GET() {
  await connect();
  const todo = await Todo.find();
  console.log(todo);
  return NextResponse.json({ todo });
}

export async function DELETE(req) {
  const id = req.nextUrl.searchParams.get("id");
  await connect();
  await Todo.findByIdAndDelete(id);
  return NextResponse.json({ message: "Topic Deleted" }, { status: 200 });
}

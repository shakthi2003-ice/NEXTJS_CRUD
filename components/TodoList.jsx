import React from "react";
import Removebtn from "./Removebtn";
import Link from "next/link";
import { HiPencilAlt } from "react-icons/hi";

const getTodo = async () => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_DOMAIN}/api/todo`, {
      cache: "no-store",
    });

    if (!res.ok) {
      throw new Error("Failed to fetch topics");
    }
    return res.json();
  } catch (error) {
    console.log("Error Loading topics: ", error);
  }
};

export default async function TodoList() {
  const { todo } = (await getTodo()) || [];
  return (
    <>
      {todo
        ? todo.map((t) => (
            // eslint-disable-next-line react/jsx-key
            <div className="p-4 border border-slate-300 my-3 flex justify-between gap-5 items-start">
              <div>
                <h1 className="font-bold text-5xl">{t.title}</h1>
                <div>{t.description}</div>
              </div>
              <div className="flex gap-2">
                <Removebtn id={t._id} />
                <Link href={`/editTodo/${t._id}`}>
                  <HiPencilAlt size={24} />
                </Link>
              </div>
            </div>
          ))
        : []}
    </>
  );
}

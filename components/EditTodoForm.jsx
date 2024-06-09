"use client";
require("dotenv");
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function EditTodoForm({ id, title, description }) {
  const router = useRouter();
  const [newTitle, setNewTitle] = useState(title);
  const [newDescription, setNewDescription] = useState(description);
  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_DOMAIN}/api/todo/${id}`,
        {
          method: "PUT",
          headers: {
            "Content-type": "application/json",
          },
          body: JSON.stringify({ newTitle, newDescription }),
        }
      );
      if (res.ok) {
        router.push("/");
        router.refresh();
      } else {
        throw new Error(res.body);
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <form onSubmit={submitHandler} className="flex flex-col gap-3">
      <input
        onChange={(e) => setNewTitle(e.target.value)}
        value={newTitle}
        className="border border-slate-500 px-8 py-2"
        type="text"
        placeholder="Title"
      />
      <input
        onChange={(e) => setNewDescription(e.target.value)}
        value={newDescription}
        className="border border-slate-500 px-8 py-2"
        type="text"
        placeholder="Description"
      />
      <button
        type="submit"
        className="bg-blue-500 border border-slate-600 font-bold text-white rounded-full py-3 px-6 w-fit"
      >
        Update to the List
      </button>
    </form>
  );
}

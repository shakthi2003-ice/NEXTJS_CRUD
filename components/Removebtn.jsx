"use client";
import { useRouter } from "next/navigation";
import React from "react";
import { HiOutlineTrash } from "react-icons/hi";

export default function Removebtn({ id }) {
  const router = useRouter();
  const removeTodo = async () => {
    const confirmed = confirm("Are you sure you want to delete?");
    if (confirmed) {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_DOMAIN}/api/todo?id=${id}`,
        {
          method: "DELETE",
        }
      );
      if (res.ok) {
        router.refresh();
      }
    }
  };
  return (
    <button onClick={removeTodo}>
      <HiOutlineTrash className="text-red-400" size={24} />
    </button>
  );
}

import Link from "next/link";
import React from "react";

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center bg-slate-800 px-8 py-3">
      <Link className="text-white font-bold font-sans" href={"/"}>
        Task Manager
      </Link>
      <Link
        className="bg-white p-2 border-red-300 font-bold font-sans"
        href={"/addTodo"}
      >
        Add TODO
      </Link>
    </nav>
  );
  ``;
}

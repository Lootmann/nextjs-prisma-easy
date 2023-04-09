import Link from "next/link";
import React from "react";

export default function NotFound() {
  return (
    <div>
      <h2 className="text-2xl mb-6">This Article Is Not Found D:</h2>

      <Link
        href={"/"}
        className="text-2xl bg-zinc-900 hover:text-4xl p-2 rounded-md
        transition-all duration-300"
      >
        Go Top :D
      </Link>
    </div>
  );
}

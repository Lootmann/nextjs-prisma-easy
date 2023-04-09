import Link from "next/link";
import React from "react";

export function Header() {
  return (
    <div className="flex justify-between gap-8 border-b border-zinc-700 p-4 px-20">
      <h1>
        <Link href="/" className="text-2xl">
          Articles
        </Link>
      </h1>

      <p>
        <Link
          href="/articles/new"
          className="text-2xl bg-orange-900 hover:bg-orange-700 p-2 rounded-md"
        >
          Write
        </Link>
      </p>
    </div>
  );
}

// need useState
"use client";

import { useRouter } from "next/navigation";
import React, { useState } from "react";

export default async function CreateArticle() {
  const router = useRouter();
  const [title, setTitle] = useState<string>("");
  const [content, setContent] = useState<string>("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    console.log(title, content);
  }

  return (
    <div className="h-full w-full flex flex-col">
      <form
        onSubmit={(e) => handleSubmit(e)}
        className="h-full flex flex-col gap-4 text-xl"
      >
        <header className="flex gap-4">
          <input
            type="text"
            name="title"
            id="title"
            className="bg-zinc-950 rounded-md px-3
            focus:outline-zinc-600 outline-none"
            placeholder="Title"
            onChange={(e) => setTitle(e.target.value)}
            autoFocus
          />
          <input
            type="submit"
            value="Create"
            className="px-2 py-1 rounded-md
            bg-green-900 hover:bg-green-400 hover:text-zinc-950
            focus:bg-green-400 focus:text-zinc-950
            focus:outline-zinc-600 outline-none transition-all duration-200"
          />
        </header>

        <textarea
          name="content"
          id="content"
          className="h-full bg-zinc-950 rounded-md p-3 focus:outline-zinc-600 outline-none"
          onChange={(e) => setContent(e.target.value)}
        ></textarea>
      </form>
    </div>
  );
}

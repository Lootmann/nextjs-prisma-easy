import { Article } from "@prisma/client";
import React from "react";

export function ArticleDetail({ article }: { article: Article }) {
  return (
    <div
      className="w-full flex flex-col gap-4 bg-zinc-900
     hover:bg-zinc-950 shadow-xl rounded-xl p-4 transition-all duration-200"
    >
      <header className="flex gap-6 items-baseline">
        <h3 className="text-2xl">{article.title}</h3>
      </header>

      <p className="text-xl">{article.content}</p>

      <footer className="flex gap-6 items-baseline">
        <p className="text-zinc-400">
          Created {article.createdAt.toLocaleString()}
        </p>
        <p className="text-zinc-400">
          Uptead {article.updatedAt.toLocaleString()}
        </p>
      </footer>
    </div>
  );
}

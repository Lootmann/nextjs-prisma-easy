import { Article } from "@prisma/client";
import Link from "next/link";
import React from "react";
import { StringHelper } from "../utils/strings";

export function ArticleDetail({ article }: { article: Article }) {
  return (
    <Link href={`/articles/${article.slug}`}>
      <div
        className="w-full flex flex-col gap-4 bg-zinc-900
     hover:bg-zinc-950 shadow-xl rounded-xl p-4 transition-all duration-200"
      >
        <header className="flex gap-6 items-baseline">
          <h3 className="text-2xl">{article.title}</h3>
        </header>

        <p className="text-xl">{StringHelper.truncate(article.content, 200)}</p>

        <footer className="flex gap-6 items-baseline">
          <p className="text-zinc-400">
            Created {new Date(article.createdAt).toLocaleString()}
          </p>

          <p className="text-zinc-400">
            Updated {new Date(article.updatedAt).toLocaleString()}
          </p>
        </footer>
      </div>
    </Link>
  );
}

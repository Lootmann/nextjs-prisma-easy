import React from "react";
import { Article } from "@prisma/client";
import { ArticleDetail } from "./ArticleDetail";

// NOTE:  JSX Component can't be async function!
export function ArticleList({ articles }: { articles: Article[] }) {
  return (
    <div className="flex flex-col gap-6">
      {articles.map((article) => (
        <ArticleDetail key={article.id} article={article} />
      ))}
    </div>
  );
}
